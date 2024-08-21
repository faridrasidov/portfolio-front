<template>
  <div class="about-section">
    <div class="about-body">
      <div class="about-left">
        <h1 class="about-heading">
          Know Who <strong class="strong">I'M</strong>
        </h1>
        <div class="about-card">
          <p class="about-card-body">
            Hi Everyone, I am
            <strong class="strong-description">Farid Rashidov</strong>.
            <br/>
            <br/> My self-study adventure commenced with an insatiable desire
            to understand the intricacies of web development. I immersed
            myself in the Stack:
            <strong class="strong-description">
              Python</strong>,
            <strong class="strong-description">
              JS</strong>,
            <strong class="strong-description">
              HTML</strong>,
            <strong class="strong-description">
              CSS</strong>,
            <strong class="strong-description">
              MySQl</strong>,
            <strong class="strong-description">
              Bash Script and TypeScript</strong>.
            through online resources, documentation, and real-world projects.
            <br/>
            <br/> In the realm of back-end development, I've delved deep
            into
            <strong class="strong-description">
              JS</strong>,
            <strong class="strong-description">
              Python</strong>,
            <strong class="strong-description">
              MySQL</strong>,
            using these three to craft best-performance applications.
            I also love to craft robotics, because of it, last 2 years
            started learning
            <strong class="strong-description">
              Arduino, C++ and RasberryPi
            </strong>
            to improve my skills on robotics too
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
    FaUbuntu
  },
  setup() {
    const ToolsData = [
      {icon: FaDebian},
      {icon: FaWindows},
      {icon: FaUbuntu},
      {icon: SiLinuxmint},
      {icon: SiDuckduckgo},
      {icon: SiJetbrains},
      {icon: SiPycharm},
      {icon: SiWebstorm},
    ];

    const SkillsData = [
      {icon: FaPython},
      {icon: FaSquareJs},
      {icon: SiTypescript},
      {icon: FaHtml5},
      {icon: FaCss3Alt},
      {icon: SiNginx},
      {icon: SiFlask},
      {icon: SiNuxtdotjs},
      {icon: FaVuejs},
      {icon: SiVuetify},
      {icon: DiSqllite},
      {icon: FaGitAlt},
      {icon: SiArduino}
    ];

    return {
      ToolsData,
      SkillsData,
    };
  },
};
</script>