<div align="center">

# Caspra

**Open-source, multi-tenant RFID/NFC stored-value ledger platform.**

The backend that powers cashless payments for arcades, canteens, festivals, coworking spaces, and any venue where you tap a card or wristband to pay.

[![Python](https://img.shields.io/badge/python-3.13-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-async-009688.svg)](https://fastapi.tiangolo.com/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2.0-red.svg)](https://www.sqlalchemy.org/)
[![Tests](https://img.shields.io/badge/tests-59%20passing-brightgreen.svg)](#testing)
[![License: AGPL v3](https://img.shields.io/badge/license-AGPL%20v3-blue.svg)](LICENSE)

</div>

---

## What is Caspra?

Caspra is the backend for a cashless, stored-value payment system. Customers load credit onto an RFID/NFC card or wristband, then tap to pay at readers, kiosks, arcade machines, POS counters, and vending units. It is built **offline-first** and **multi-tenant**, so one deployment can serve many organizations and venues.

The money layer is an **append-only, double-entry ledger**: balances are derived from immutable entries, amounts are stored as integer minor units (never floats), and every value-moving operation is idempotent and tenant-isolated. That means reader devices can safely replay queued transactions after a network outage — without ever double-spending.

> **Open-core.** The server, reader APIs, and SDKs are free and open under AGPL-3.0. Hosted SaaS, hardware kits, and enterprise add-ons are the commercial layer.

## Three API surfaces, one ledger core

Caspra exposes three separate, independently-secured APIs from a single codebase — the same pattern used by Stripe and Plaid. Each has its own audience, auth model, and OpenAPI docs, and only ever exposes its own endpoints.

| Surface | Base path | Audience | Auth |
|---|---|---|---|
| **Admin / Dashboard** | `/admin/api/v1` | Operators, staff, internal dashboards | JWT + RBAC |
| **Device** | `/device/api/v1` | RFID readers, POS, kiosks, gates | Per-device HMAC, offline-first |
| **Public Developer** | `/public/api/v1` | 3rd-party integrators, mobile apps | API keys + scopes, rate-limited |

## Features

- **Append-only double-entry ledger** — immutable entries, derived balances, compensating reversals
- **Money-safe by design** — integer minor units, ISO-4217 currencies, row-locked atomic debits
- **Offline-first devices** — HMAC-authenticated readers with replay-safe idempotent sync
- **Multi-tenant isolation** — every account, card, device, and transaction scoped to a tenant
- **Pre-auth / capture / void** — holds for vending and kiosk flows
- **Cards & wallets** — issuance, assignment, block/replace, multiple balance types (credit / token / loyalty)
- **Device fleet management** — registration, config, telemetry, firmware/OTA, command queue
- **Webhooks** — `transaction.created`, `topup.completed`, `card.balance.updated`, `device.status.changed`, and more
- **Beautiful API docs** — per-surface Scalar reference pages, plus Swagger UI and ReDoc

## Tech stack

Python 3.13 · FastAPI · Pydantic v2 · SQLAlchemy 2.0 (async) · PostgreSQL · Alembic · Redis · Celery / aio-pika · Scalar · Ruff · pytest

## Quick start

```bash
python -m venv .venv
.venv\Scripts\activate                # Windows  (macOS/Linux: source .venv/bin/activate)
pip install -r requirements.txt -r requirements-test.txt

# create your .env from the variables in the table below, then:
alembic upgrade head                  # apply database migrations
uvicorn app.main:app --reload
```

Or bring up the full stack (Postgres + Redis + API) with Docker:

```bash
docker compose up --build
```

## Configuration

Configuration is read from environment variables (or a local `.env` file) via Pydantic settings.

| Variable | Default | Description |
|---|---|---|
| `APP_NAME` | `Caspra API` | Application name shown in docs |
| `DEBUG` | `false` | Enable debug logging and SQL echo |
| `DATABASE_URL` | `postgresql+asyncpg://caspra:caspra@localhost:5432/caspra` | Async SQLAlchemy database URL |
| `REDIS_URL` | `redis://localhost:6379/0` | Redis URL (locks, caching, queues) |
| `SECRET_KEY` | `change-me-in-production` | JWT signing secret — **must** be changed |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | `60` | Admin JWT lifetime |
| `ALGORITHM` | `HS256` | JWT signing algorithm |
| `DEVICE_HMAC_SECRET` | `change-me-device-secret` | HMAC secret for device authentication — **must** be changed |
| `PUBLIC_RATE_LIMIT_PER_MINUTE` | `600` | Public API rate limit |
| `CORS_ORIGINS` | `["http://localhost:3000"]` | Allowed CORS origins |

## API documentation

Once the server is running, open:

| URL | What |
|---|---|
| `/scalar` | All surfaces combined (internal / dev) |
| `/admin/docs` | Admin API reference (Scalar) |
| `/device/docs` | Device API reference (Scalar) |
| `/public/docs` | Public Developer API reference (Scalar) |
| `/docs` · `/redoc` | Swagger UI · ReDoc |

Export the OpenAPI spec for SDK generation in other repos:

```bash
python scripts/gen_openapi.py        # → openapi.json
```

## Demo data

After applying the Alembic migrations, create a separate demo tenant with coherent
customers, cards, wallets, devices, balanced ledger entries, refunds, offline-review
items, and webhook deliveries from the latest 30 days:

```bash
python scripts/seed_mock_data.py --dry-run
python scripts/seed_mock_data.py
```

The script reads `DATABASE_URL` from `.env`, prints generated admin/API/device
credentials, and never replaces an existing tenant. Use another slug for an additional
dataset, for example `--tenant-slug demo-30d-2`. Production environments also require
`--allow-production`.

## Testing

```bash
pytest
```

The suite covers HTTP integration tests per surface, ledger money-correctness (idempotency, insufficient funds, double-entry), device HMAC auth and charge flows, and cross-tenant isolation.

## Project layout

```
app/
  api/
    admin/        # /admin/api/v1  — dashboard API (JWT + RBAC)
    device/       # /device/api/v1 — reader/POS API (HMAC, offline-first)
    public/       # /public/api/v1 — 3rd-party API (API keys + scopes)
    v1/           # health check
    deps.py       # shared dependencies (db, user auth, device auth)
    docs.py       # per-surface Scalar docs
  services/       # business logic (class-based *Service)
  engines/        # authorization & pricing engines
  models/         # SQLAlchemy ORM, grouped by domain:
                  #   identity · tenant · ledger · device · catalog · audit
  schemas/        # Pydantic v2 DTOs
  core/           # config, security, redis, errors, logging
  utils/          # pagination, money, idempotency
  workers/        # Celery / aio-pika background jobs
tests/
  integration/    # HTTP API tests
  ledger/         # money-correctness tests
  device/         # device-auth & charge flows
  tenant/         # cross-tenant isolation
migrations/       # Alembic
```

## Architecture principles

- **Layered**: `endpoints → services → models / schemas`. Routes are thin; no DB queries in handlers.
- **Domain boundaries**: ORM relationships stay within a domain; cross-domain links use FK columns joined in services.
- **Ledger is the source of truth**: never mutate or delete a posted entry — corrections are new compensating entries.
- **Tenant isolation everywhere**: every scoped query filters by `tenant_id`.

These conventions are enforced as rules in `.cursor/rules/`.

## Related repositories

- **caspra-node** — reader / edge gateway agents (ESP32 firmware + Raspberry Pi gateway)
- **caspra-frontend** — admin and customer dashboards (Vue + TypeScript + Tailwind CSS)

## Contributing

Contributions are welcome. Please keep changes consistent with the layered architecture and the money/ledger invariants documented in `.cursor/rules/`. Run `ruff check` and `pytest` before opening a PR.

## License

Caspra is licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0) — see [`LICENSE`](LICENSE).

The AGPL ensures that anyone who runs a modified version of Caspra as a network service must share their changes with the community. If you want to build a closed-source product or hosted service on top of Caspra without these obligations, a **commercial license** is available — reach out to discuss enterprise terms.

## Frontend CI/CD Deployment

This repo ships with a frontend deploy job in `.github/workflows/ci.yml` that deploys `web/dist` only after both backend and frontend checks pass.

### Required GitHub Secrets / Variables

Set these repository secrets before enabling deploy:

- `BACKEND_HEALTH_URL`: URL used to validate backend before deployment, for example `https://api.caspra.local/api/v1/health/live`
- `FRONTEND_SERVER_HOST`: target host for SSH deployment (IP or hostname)
- `FRONTEND_SERVER_USER`: SSH username (for example `deployer`)
- `FRONTEND_SERVER_PATH`: destination directory on the server (for example `/var/www/html/caspra`)
- `FRONTEND_SSH_PRIVATE_KEY`: private key content for the deploy user
- Optional `FRONTEND_SERVER_PORT`: SSH port (defaults to `22` if unset)
- Optional `FRONTEND_SERVER_RELOAD_CMD`: command to refresh services after sync (for example `sudo systemctl reload nginx`)

### How deploy is gated

- Backend checks are from the existing `validate` job (`python` + tests + lint + openapi + security checks).
- Frontend checks are from the existing `dashboard` job (`generate:api`, icons check, type-check, build, e2e).
- Deploy only runs on `push` to `main` and requires both jobs to complete successfully.
