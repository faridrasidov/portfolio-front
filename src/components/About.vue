<template>
  <div class="about-section">
    <div class="about-body">
      <div class="about-left">
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
            <strong class="strong-description">
              Python</strong>,
            <strong class="strong-description">
              JS</strong>,
            <strong class="strong-description">
              HTML</strong>,
            <strong class="strong-description">
              CSS</strong>,
            <strong class="strong-description">
              MySQL</strong>,
            <strong class="strong-description">
              Bash scripting and TypeScript</strong> stack.
            <br/>
            <br/>

            As a senior
            <strong class="strong-description">Python developer</strong>
            since
            <strong class="strong-description">2022</strong>,
            I excel in backend systems, honing skills in
            <strong class="strong-description">cybersecurity</strong>
            (<strong class="strong-description">OWASP</strong>)
            since mid-<strong class="strong-description">2024</strong> to fortify digital defenses. I craft high-performance
            applications with
            <strong class="strong-description">JS</strong>,
            <strong class="strong-description">Python</strong>.
            My passion for robotics led me to
            <strong class="strong-description">Arduino</strong>,
            <strong class="strong-description">C++</strong>, and
            <strong class="strong-description">Raspberry Pi</strong>
            over the last two years, constantly expanding my horizons.
          </p>
        </div>
      </div>
      <div class="about-right">
        <img alt="about-image" class="about-image" src="/about-image.svg"/>
      </div>
    </div>
    <h1 class="skills-heading">Skills</h1>
    <div class="skills-body">
      <div class="skills-content">
        <div
            v-for="(item, index) in SkillsData"
            :key="index"
            class="skills"
        >
          <component :is="item.icon" class="w-[72px] h-[72px]"/>
        </div>
      </div>
    </div>

    <h1 class="tools-heading">Tools</h1>
    <div class="tools-body">
      <div class="tools-content">
        <div
            v-for="(item, index) in ToolsData"
            :key="index"
            class="tools"
        >
          <component :is="item.icon" class="w-[72px] h-[72px]"/>
        </div>
      </div>
    </div>
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
    RiNotionFill
  },
  setup() {
    const ToolsData = [
      {icon: FaUbuntu},
      {icon: FaDebian},
      {icon: SiLinuxmint},
      {icon: FaWindows},
      {icon: SiJetbrains},
      {icon: SiPycharm},
      {icon: SiWebstorm},
      {icon: SiBurpsuite},
      {icon: SiDbeaver},
      {icon: RiNotionFill},
      {icon: SiDuckduckgo},
    ];

    const SkillsData = [
      {icon: FaPython},
      {icon: SiArduino},
      {icon: FaSquareJs},
      {icon: SiTypescript},
      {icon: FaHtml5},
      {icon: FaCss3Alt},
      {icon: SiComptia},
      {icon: SiOwasp},
      {icon: FaDocker},
      {icon: SiTorproject},
      {icon: SiNginx},
      {icon: SiFlask},
      {icon: SiFastapi},
      {icon: SiOpenapiinitiative},
      {icon: SiNuxtdotjs},
      {icon: FaVuejs},
      {icon: SiVuetify},
      {icon: SiSqlalchemy},
      {icon: DiSqllite},
      {icon: FaGitAlt},
    ];

    return {
      ToolsData,
      SkillsData,
    };
  },
};
</script>