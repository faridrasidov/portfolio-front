<template>
  <div class="about-section">
    <div class="about-body">
      <div class="about-left">
        <p class="section-eyebrow">About</p>
        <h1 class="about-heading">
          Know Who <strong class="strong">I'M</strong>
        </h1>
        <div class="about-card">
          <p class="about-card-body">
            Hi everyone, I am
            <strong class="strong-description">Farid Rashidov</strong>.
            <br/>
            <br/>
            My self-study adventure began with an insatiable desire for web development,
            deeply immersing myself in the
            <strong class="strong-description">Python</strong>,
            <strong class="strong-description">JS</strong>,
            <strong class="strong-description">HTML</strong>,
            <strong class="strong-description">CSS</strong>,
            <strong class="strong-description">MySQL</strong>,
            <strong class="strong-description">Bash scripting</strong>, and
            <strong class="strong-description">TypeScript</strong> stack.
            <br/>
            <br/>
            As a senior
            <strong class="strong-description">Python developer</strong>
            since
            <strong class="strong-description">2022</strong>,
            I work on backend systems, API testing, and security-focused engineering.
            Since mid-<strong class="strong-description">2024</strong>, I have been building practical
            <strong class="strong-description">cybersecurity</strong>
            knowledge around
            <strong class="strong-description">OWASP</strong>, automation, Linux tooling, and API defense.
          </p>
        </div>
      </div>
      <div class="about-right">
        <img alt="about-image" class="about-image" src="/about-image.svg"/>
      </div>
    </div>

    <section class="skill-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading" class="skills-heading">Skills</h2>
      <div class="skills-body">
        <div class="skills-content">
          <div
              v-for="item in SkillsData"
              :key="item.label"
              class="skills"
          >
            <component :is="item.icon" class="skill-icon"/>
            <span class="skill-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="tool-section" aria-labelledby="tools-heading">
      <h2 id="tools-heading" class="tools-heading">Tools</h2>
      <div class="tools-body">
        <div class="tools-content">
          <div
              v-for="item in ToolsData"
              :key="item.label"
              class="tools"
          >
            <component :is="item.icon" class="skill-icon"/>
            <span class="skill-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FaWindows from "../assets/icons/tools/windows.svg"
import FaDebian from "../assets/icons/tools/debian.svg"
import SiLinuxmint from "../assets/icons/tools/mint.svg"
import SiDuckduckgo from "../assets/icons/tools/duckduckgo.svg"
import SiJetbrains from "../assets/icons/tools/jetbrains.svg";
import SiPycharm from "../assets/icons/tools/pycharm.svg";
import SiWebstorm from "../assets/icons/tools/webstorm.svg";
import FaUbuntu from "../assets/icons/tools/ubuntu.svg";
import SiDbeaver from "../assets/icons/tools/dbeaver.svg";
import RiNotionFill from "../assets/icons/tools/notion.svg";
import SiBurpsuite from "../assets/icons/tools/burp.svg";

import SiArduino from "../assets/icons/skills/arduino.svg";
import FaCss3Alt from "../assets/icons/skills/css.svg";
import SiFlask from "../assets/icons/skills/flask.svg";
import FaGitAlt from "../assets/icons/skills/git.svg";
import FaHtml5 from "../assets/icons/skills/html.svg";
import FaSquareJs from "../assets/icons/skills/js.svg";
import SiNginx from "../assets/icons/skills/nginx.svg";
import SiNuxtdotjs from "../assets/icons/skills/nuxt.svg";
import FaPython from "../assets/icons/skills/python.svg";
import DiSqllite from "../assets/icons/skills/sqllite.svg";
import SiOwasp from "../assets/icons/skills/owasp.svg";
import SiFastapi from "../assets/icons/skills/fast_api.svg";
import SiOpenapiinitiative from "../assets/icons/skills/open_api.svg";
import SiSqlalchemy from "../assets/icons/skills/sqla.svg";
import SiTorproject from "../assets/icons/skills/tor.svg";
import FaDocker from "../assets/icons/skills/docker.svg";
import SiComptia from "../assets/icons/skills/comptia.svg";

import SiTypescript from "../assets/icons/skills/ts.svg";
import FaVuejs from "../assets/icons/skills/vue.svg";
import SiVuetify from "../assets/icons/skills/vuetify.svg";

export default {
  components: {
    FaWindows,
    FaDebian,
    SiLinuxmint,
    SiDuckduckgo,
    SiJetbrains,
    SiPycharm,
    SiWebstorm,
    FaUbuntu,
    SiBurpsuite,
    SiDbeaver,
    RiNotionFill,
  },
  setup() {
    const ToolsData = [
      {icon: FaUbuntu, label: "Ubuntu"},
      {icon: FaDebian, label: "Debian"},
      {icon: SiLinuxmint, label: "Linux Mint"},
      {icon: FaWindows, label: "Windows"},
      {icon: SiJetbrains, label: "JetBrains"},
      {icon: SiPycharm, label: "PyCharm"},
      {icon: SiWebstorm, label: "WebStorm"},
      {icon: SiBurpsuite, label: "Burp Suite"},
      {icon: SiDbeaver, label: "DBeaver"},
      {icon: RiNotionFill, label: "Notion"},
      {icon: SiDuckduckgo, label: "DuckDuckGo"},
    ];

    const SkillsData = [
      {icon: FaPython, label: "Python"},
      {icon: SiArduino, label: "Arduino"},
      {icon: FaSquareJs, label: "JavaScript"},
      {icon: SiTypescript, label: "TypeScript"},
      {icon: FaHtml5, label: "HTML"},
      {icon: FaCss3Alt, label: "CSS"},
      {icon: SiComptia, label: "CompTIA"},
      {icon: SiOwasp, label: "OWASP"},
      {icon: FaDocker, label: "Docker"},
      {icon: SiTorproject, label: "Tor"},
      {icon: SiNginx, label: "Nginx"},
      {icon: SiFlask, label: "Flask"},
      {icon: SiFastapi, label: "FastAPI"},
      {icon: SiOpenapiinitiative, label: "OpenAPI"},
      {icon: SiNuxtdotjs, label: "Nuxt"},
      {icon: FaVuejs, label: "Vue"},
      {icon: SiVuetify, label: "Vuetify"},
      {icon: SiSqlalchemy, label: "SQLAlchemy"},
      {icon: DiSqllite, label: "SQLite"},
      {icon: FaGitAlt, label: "Git"},
    ];

    return {
      ToolsData,
      SkillsData,
    };
  },
};
</script>
