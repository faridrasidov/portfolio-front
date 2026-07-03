<template>
  <main class="cyber-page">
    <section id="home" class="cyber-hero">
      <div class="cyber-grid-bg"></div>
      <div class="cyber-hero-glow"></div>
      <div class="cyber-edge-glow"></div>

      <div class="cyber-hero-content">
        <div class="cyber-status-badge">
          <span class="cyber-status-dot"></span>
          AVAILABLE FOR BOUNTIES &amp; PROJECTS
        </div>

        <h1 class="cyber-title">
          Farid<span>.</span>Rashidov
        </h1>

        <div class="cyber-typewriter">
          <Typewriter
              :autoStart="true"
              :delay="90"
              :deleteSpeed="35"
              :loop="true"
              :strings="roles"
          />
          <span class="cyber-cursor">_</span>
        </div>

        <p class="cyber-hero-copy">
          <span class="block">
            I break things professionally and build things securely. 
          </span>
          <span>
            Backend systems architecture meets offensive security — finding vulnerabilities others miss, 
            shipping code that holds under attack.
          </span>
        </p>

        <div class="cyber-actions">
          <a class="cyber-btn cyber-btn-primary" href="#projects">VIEW PROJECTS</a>
          <a class="cyber-btn cyber-btn-secondary" href="#about">ABOUT ME</a>
        </div>

        <div class="cyber-scroll-cue">
          <span>SCROLL</span>
          <i></i>
        </div>
      </div>
    </section>

    <section id="about" class="cyber-section cyber-about">
      <div class="cyber-section-glow cyber-section-glow-right"></div>
      <div class="cyber-container">
        <div class="cyber-section-heading">
          <p>01 // ABOUT</p>
          <h2>Who I Am</h2>
        </div>

        <div class="cyber-about-grid">
          <div>
            <div class="cyber-copy-block">
              <p>
                Backend Developer with a strong foundation in building scalable, high-performance systems and a deep specialization in API security. 
                I combine expert-level Python development with a bug-hunter’s mindset, proactively applying OWASP standards throughout the SDLC. 
                Proven experience in designing secure, maintainable architectures and streamlining deployment with Docker and Linux, ensuring code is as resilient as it is efficient.
              </p>
            </div>
            <div class="cyber-stats-grid">
              <article v-for="stat in stats" :key="stat.label" class="cyber-stat-card">
                <div class="cyber-stat-icon">{{ stat.icon }}</div>
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </article>
            </div>
          </div>

          <div>
            <h3 class="cyber-tools-heading">// TECH &amp; TOOLS</h3>
            <div class="cyber-skill-tags">
              <span v-for="skill in skills" :key="skill">{{ skill }}</span>
            </div>

            <div class="cyber-terminal">
              <div class="cyber-terminal-top">
                <span class="red"></span>
                <span class="yellow"></span>
                <span class="green"></span>
                <em>bash - farid@portfolio:~</em>
              </div>
              <div class="cyber-terminal-body" aria-live="polite">
                <p v-for="(line, index) in terminalLines" :key="`${line.type}-${index}-${line.text}`">
                  <template v-if="line.type === 'command'">
                    <b>farid@portfolio</b><i>:~$</i> {{ line.text }}
                  </template>
                  <span v-else :class="line.variant">{{ line.text }}</span>
                </p>
                <p class="terminal-active-line">
                  <b>farid@portfolio</b><i>:~$</i> {{ terminalInput }}<span class="terminal-cursor">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="cyber-section cyber-projects">
      <div class="cyber-section-glow cyber-section-glow-left"></div>
      <div class="cyber-container">
        <div class="cyber-section-heading">
          <p>02 // PROJECTS</p>
          <h2>What I Build</h2>
        </div>

        <div class="cyber-project-grid">
          <article v-for="project in projects" :key="project.title" class="cyber-project-card">
            <span class="corner-accent"></span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="cyber-project-tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="cyber-project-meta">
              <span><b>*</b> {{ project.stars }}</span>
              <a :href="project.href" target="_blank" rel="noreferrer">VIEW -&gt;</a>
            </div>
          </article>
        </div>

        <div class="cyber-github-cta-wrap">
          <a class="cyber-github-cta" href="https://github.com/faridrasidov?tab=repositories" target="_blank" rel="noreferrer">
            <FaGithub class="github-inline" />
            SEE ALL ON GITHUB
            <span>-&gt;</span>
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="cyber-section cyber-contact">
      <div class="cyber-section-glow cyber-section-glow-right"></div>
      <div class="cyber-container">
        <div class="cyber-section-heading cyber-contact-heading">
          <p>03 // CONTACT</p>
          <h2>Let&apos;s Connect</h2>
        </div>

        <div class="cyber-contact-grid">
          <a
              v-for="contact in contacts"
              :key="contact.label"
              :href="contact.href"
              class="cyber-contact-card"
              target="_blank"
              rel="noreferrer"
          >
            <span class="corner-accent"></span>
            <component :is="contact.icon" class="cyber-contact-icon" />
            <span class="cyber-contact-label">{{ contact.label }}</span>
            <span class="cyber-contact-value">{{ contact.value }}</span>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {markRaw, onBeforeUnmount, onMounted, ref} from "vue";
import DiscordIcon from "../assets/icons/social/discord.svg";
import FaGithub from "../assets/icons/social/github.svg";
import LinkedinIcon from "../assets/icons/social/linkedin.svg";
import MailIcon from "../assets/icons/social/mail.svg";
import TelegramIcon from "../assets/icons/social/telegram.svg";
import Typewriter from "./TypeWriter.vue";

export default {
  components: {
    DiscordIcon,
    FaGithub,
    LinkedinIcon,
    MailIcon,
    TelegramIcon,
    Typewriter,
  },
  setup() {
    const terminalInput = ref("");
    const terminalLines = ref([]);
    const terminalCommands = [
      {
        command: "whoami",
        outputs: [
          {text: "backend_dev && security_engineer", variant: "muted"},
        ],
      },
      {
        command: "cat skills.json",
        outputs: [
          {text: '["Python", "FastAPI", "OWASP", "Docker", "Linux"]', variant: "muted"},
        ],
      },
      {
        command: "ls ./focus/",
        outputs: [
          {text: "api-architecture backend-systems  security-review", variant: "purple"},
        ],
      },
      {
        command: "scan --target portfolio-api",
        outputs: [
          {text: "auth-check: pass | rate-limit: review | cors: locked", variant: "success"},
        ],
      },
      {
        command: "deploy --dry-run",
        outputs: [
          {text: "docker/nginx/linux pipeline ready", variant: "muted"},
        ],
      },
    ];
    let terminalTimer;
    let terminalStopped = false;

    const sleep = (duration) => new Promise((resolve) => {
      terminalTimer = window.setTimeout(resolve, duration);
    });

    const pushTerminalLine = (line) => {
      terminalLines.value = [...terminalLines.value, line].slice(-8);
    };

    const typeCommand = async (command) => {
      terminalInput.value = "";

      for (const character of command) {
        if (terminalStopped) return;
        terminalInput.value += character;
        await sleep(52 + Math.random() * 36);
      }
    };

    const runTerminal = async () => {
      while (!terminalStopped) {
        terminalLines.value = [];

        for (const item of terminalCommands) {
          if (terminalStopped) return;

          await typeCommand(item.command);
          await sleep(350);
          pushTerminalLine({type: "command", text: item.command});
          terminalInput.value = "";

          for (const output of item.outputs) {
            if (terminalStopped) return;
            await sleep(260);
            pushTerminalLine({type: "output", ...output});
          }

          await sleep(620);
        }

        await sleep(1200);
      }
    };

    onMounted(() => {
      runTerminal();
    });

    onBeforeUnmount(() => {
      terminalStopped = true;
      window.clearTimeout(terminalTimer);
    });

    const roles = [
      "Backend Developer",
      "Security Engineer",
      "API Architect",
      "Bug Hunter",
      "Python Developer",
    ];

    const skills = [
      "Python", "JavaScript", "TypeScript",
      "FastAPI", "Flask", "SQLAlchemy", "RabbitMQ", "Redis", "PostgreSQL",
      "Docker", "Nginx", "Linux", "Bash", "Git",
      "Tor", "API Architecture", "AWS", "CTF",
      "Burp Suite", "OWASP", "Pentesting", "OpenAPI", "Cursor IDE", 
    ];

    const stats = [
      {label: "Backend Focus", value: "2022+", icon: "</>"},
      {label: "Security Focus", value: "2024+", icon: "SEC"},
      {label: "Core Stack", value: "Python", icon: "$"},
      {label: "API Testing", value: "OWASP", icon: "bug"},
    ];

    const projects = [
      {
        title: "Python Backend Systems",
        description: "Backend-focused work with APIs, data models, and service logic built around Python.",
        tags: ["Python", "FastAPI", "SQLAlchemy"],
        stars: "API",
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "Telegram Bot Automation",
        description: "Chat-based automation for tasks, notifications, and lightweight workflow control.",
        tags: ["Python", "Telegram", "Automation"],
        stars: "BOT",
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "API Security Testing",
        description: "Security-minded API checks informed by OWASP patterns and real request behavior.",
        tags: ["OWASP", "API", "Testing"],
        stars: "SEC",
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "Linux Deployment Workflows",
        description: "Small-app deployment support with Linux, Docker, Nginx, and practical server operations.",
        tags: ["Linux", "Docker", "Nginx"],
        stars: "OPS",
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "OpenAPI Validation",
        description: "Schema-aware API review and request validation for predictable backend behavior.",
        tags: ["OpenAPI", "Testing", "Backend"],
        stars: "DOC",
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "Security Learning Lab",
        description: "Personal experiments around OWASP, auth mistakes, payload behavior, and defensive fixes.",
        tags: ["OWASP", "Research", "Practice"],
        stars: "LAB",
        href: "https://github.com/faridrasidov?tab=repositories",
      },
    ];

    const contacts = [
      {
        label: "LinkedIn",
        value: "/in/faridrasidov",
        href: "https://www.linkedin.com/in/faridrasidov/",
        icon: markRaw(LinkedinIcon),
      },
      {
        label: "Telegram",
        value: "@powwershell",
        href: "https://t.me/powwershell",
        icon: markRaw(TelegramIcon),
      },
      {
        label: "Email",
        value: "ftm5pv70@duck.com",
        href: "mailto:ftm5pv70@duck.com",
        icon: markRaw(MailIcon),
      },
      {
        label: "Discord",
        value: "faridrasidov",
        href: "https://discord.com/",
        icon: markRaw(DiscordIcon),
      },
    ];

    return {
      roles,
      skills,
      stats,
      projects,
      contacts,
      terminalInput,
      terminalLines,
    };
  },
};
</script>
