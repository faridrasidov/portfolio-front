<template>
  <div class="home-section">
    <div class="home-left">
      <h1 class="home-heading">
        Hi! <span class="wave">&#128187;</span>
      </h1>
      <h1 class="home-heading-name">
        I'M <strong class="strong">FARID RASHIDOV</strong>
      </h1>
      <div class="home-typewriter">
        <Typewriter
            :autoStart="true"
            :deleteSpeed="50"
            :loop="true"
            :strings="['Python Dev', 'Bug Hunter', 'Back-End Dev', 'API Tester', 'Security Engineer']"
        />
      </div>
    </div>
    <div class="home-right">
      <img alt="home-image-1" class="home-image-right" src="/home-image-1.svg"/>
    </div>
  </div>

  <div class="home-about-section">
    <div class="home-about-description">
      <h1 class="home-about-description-header">
        LET ME <strong class="strong">INTRODUCE</strong> MYSELF
      </h1>
      <p class="home-about-body">
        As a proactive learner, my passion for technology ignited in
        <strong class="strong-description">2022</strong>,
        rapidly establishing me as a
        <strong class="strong-description">Senior Python Dev</strong>.
        I excel in crafting robust backend systems, building clever Telegram bots, and perfecting API testing.
        By
        <strong class="strong-description">2023</strong>,
        I had mastered
        <strong class="strong-description">JavaScript</strong>, gaining a keen understanding of the web's core.
        <br/>
        <br/>
        Mid-<strong class="strong-description">2024</strong> marked a pivotal shift into
        <strong class="strong-description">cybersecurity</strong>.
        Here, my problem-solving drive truly thrives as I focus on fortifying digital
        defenses through the critical lens of <strong class="strong-description">OWASP</strong>. I'm genuinely committed to building
        securely and protecting what matters.
      </p>
    </div>
    <div class="home-about-image-div">
      <img alt="home-image-2" class="home-about-image" src="/home-image-2.svg"/>
    </div>
  </div>

  <div class="contact">
    <div class="contact-body">
      <h1>
        CONTACT <strong class="strong-description">ME</strong> ON
      </h1>
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
  </div>
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
};
</script>
