# Portfolio deployment

The GitHub Actions workflow builds the site with `npm ci` and deploys the
contents of `dist/` to the directory configured by `SERVER_TARGET_DIR`.

## Origin server routing

The generated frontend files are not enough to change HTTP redirect and error
status codes. In the HTTPS Nginx server block for `im.xakep.ir`, replace the
existing SPA fallback with the directives in
`nginx-seo-routes.conf.example`.

After updating the server configuration:

```sh
sudo nginx -t
sudo systemctl reload nginx
```

Expected public responses:

- `/` returns `200` and the portfolio HTML.
- `/about` returns `301` to `/#about`.
- `/projects` returns `301` to `/#projects`.
- `/projects/<id>` returns `200` for known project pages.
- `/sitemap.xml` returns `200` with an XML content type.
- An unknown path returns `404` and renders `404.html`.

## Cloudflare and Search Console

1. Purge the Cloudflare cache after deployment.
2. Keep **Always Use HTTPS** enabled and use **Full (strict)** SSL/TLS mode.
3. Keep verified search-engine bots allowed by WAF and bot rules.
4. Submit `https://im.xakep.ir/sitemap.xml` in Google Search Console.
5. Inspect `https://im.xakep.ir/`, run the live test, and request indexing.
