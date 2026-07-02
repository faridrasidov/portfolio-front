<template>
  <main>
    <section class="home-section">
      <div class="home-left">
        <p class="home-eyebrow">Backend systems. API testing. Security mindset.</p>
        <h1 class="home-heading-name">Farid Rashidov</h1>
        <h2 class="home-heading">Backend Developer &amp; Security-Focused API Tester</h2>
        <p class="home-summary">
          I build Python backends, Telegram bots, and test APIs with a security mindset.
        </p>
        <div class="home-typewriter">
          <Typewriter
              :autoStart="true"
              :deleteSpeed="50"
              :loop="true"
              :strings="['Python Dev', 'Bug Hunter', 'Back-End Dev', 'API Tester', 'Security Engineer']"
          />
        </div>
        <div class="hero-actions">
          <RouterLink class="primary-action" to="/projects">View Projects</RouterLink>
          <a class="secondary-action" href="mailto:ftm5pv70@duck.com">Contact Me</a>
        </div>
      </div>
      <div class="home-right">
        <img alt="Developer workspace illustration" class="home-image-right" src="/home-image-1.svg"/>
      </div>
    </section>

    <section class="services-section" aria-labelledby="services-heading">
      <div class="section-heading-block">
        <p class="section-eyebrow">Focus Areas</p>
        <h2 id="services-heading" class="section-heading">What I Do</h2>
      </div>
      <div class="services-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <span class="service-marker">{{ service.index }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section class="projects-section" aria-labelledby="projects-heading">
      <div class="section-heading-block">
        <p class="section-eyebrow">Selected Work</p>
        <h2 id="projects-heading" class="section-heading">Featured Projects</h2>
      </div>
      <div class="project-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <a class="project-link" :href="project.href" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </article>
      </div>
    </section>

    <section class="home-about-section">
      <div class="home-about-description">
        <p class="section-eyebrow">About Me</p>
        <h2 class="home-about-description-header">
          Building with <strong class="strong">security</strong> in mind
        </h2>
        <p class="home-about-body">
          My work started with Python and backend systems, then grew into API testing,
          automation, and practical cybersecurity. I care about software that is useful,
          reliable, and harder to break.
        </p>
      </div>
      <div class="home-about-image-div">
        <img alt="About illustration" class="home-about-image" src="/home-image-2.svg"/>
      </div>
    </section>

    <section class="contact">
      <div class="contact-body">
        <h2>
          CONTACT <strong class="strong-description">ME</strong> ON
        </h2>
        <div class="contact-icons">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/faridrasidov/">
            <FaLinkedinIn class="contact-icon"/>
          </a>
          <a aria-label="Instagram" href="https://www.instagram.com/faridrasiidov/">
            <FaInstagram class="contact-icon"/>
          </a>
          <a aria-label="GitHub" href="https://github.com/faridrasidov/">
            <FaGithub class="contact-icon"/>
          </a>
          <a aria-label="Email" href="mailto:ftm5pv70@duck.com">
            <MdEmail class="contact-icon"/>
          </a>
          <a aria-label="Telegram" href="https://t.me/powwershell">
            <FaTelegramPlane class="contact-icon"/>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import FaGithub from "../assets/icons/social/github.svg"
import FaInstagram from "../assets/icons/social/instagram.svg"
import FaLinkedinIn from "../assets/icons/social/linkedin.svg"
import MdEmail from "../assets/icons/social/mail.svg"
import FaTelegramPlane from "../assets/icons/social/telegram.svg";
import Typewriter from "./Typewriter.vue";

export default {
  components: {
    Typewriter,
    FaTelegramPlane,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    MdEmail,
  },
  setup() {
    const services = [
      {
        index: "01",
        title: "Backend Development",
        description: "Python services, database-backed APIs, and practical server-side workflows.",
      },
      {
        index: "02",
        title: "API Testing",
        description: "Endpoint behavior checks, integration testing, and reliability-focused validation.",
      },
      {
        index: "03",
        title: "Telegram Bots",
        description: "Automation bots that connect real workflows with simple chat interfaces.",
      },
      {
        index: "04",
        title: "Security Review",
        description: "OWASP-minded review for common API, auth, and data-handling mistakes.",
      },
      {
        index: "05",
        title: "Linux & Deployment",
        description: "Linux tooling, Docker basics, Nginx, and deployment support for small apps.",
      },
    ];

    const projects = [
      {
        title: "Python Backend Systems",
        description: "Backend-focused work with APIs, data models, and service logic built around Python.",
        tags: ["Python", "FastAPI", "SQLAlchemy"],
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "Telegram Bot Automation",
        description: "Chat-based automation for tasks, notifications, and lightweight workflow control.",
        tags: ["Python", "Telegram", "Automation"],
        href: "https://github.com/faridrasidov?tab=repositories",
      },
      {
        title: "API Security Testing",
        description: "Security-minded API checks informed by OWASP patterns and real request behavior.",
        tags: ["OWASP", "API", "Testing"],
        href: "https://github.com/faridrasidov?tab=repositories",
      },
    ];

    return {
      services,
      projects,
    };
  },
};
</script>
