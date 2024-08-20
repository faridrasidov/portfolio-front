<template>
  <div class="home-section">
    <div class="home-left">
      <h1 class="home-heading">
        Hi! <span class="wave">💻</span>
      </h1>
      <h1 class="home-heading-name">
        I'M <strong class="strong">FARID RASHIDOV</strong>
      </h1>
      <div class="home-typewriter">
        <Typewriter
            :autoStart="true"
            :deleteSpeed="50"
            :loop="true"
            :strings="['Python Dev', 'Back-End Dev', 'Front-End Dev', 'Freelancer']"
        />
      </div>
    </div>
    <div class="home-right">
      <img alt="home-image-1" class="home-image-right" src="/home-image-1.svg"/>
    </div>
  </div>
  <!--    About Section-->
  <div class="home-about-section">
    <div class="home-about-description">
      <h1 class="home-about-description-header">
        LET ME <strong class="strong">INTRODUCE</strong> MYSELF
      </h1>
      <p class="home-about-body">
        As a proactive learner, I am excited to keep up with the latest
        industry trends and technologies. <br/>
        <br/>I have enough knowledge about
        <strong class="strong-description">
          Python, JavaScript, HTML, CSS, Arduino,
          Bash Scripting.
        </strong>
        <br/>
        <br/>I am an experienced
        <strong class="strong-description">
          Back-End Developer.
        </strong>
        With my self-study experience over a long period of time, I
        immersed myself in the world of
        <strong class="strong-description">
          Web Development, Linux System Management
        </strong>,
        contributing to various projects and honing my skills in creating
        engaging and best-performance applications.
      </p>
    </div>
    <div class="home-about-image-div">
      <img alt="home-image-2" class="home-about-image" src="/home-image-2.svg"/>
    </div>
  </div>
  <!--     Contact Section -->
  <div class="contact">
    <div class="contact-body">
      <h1>
        CONTACT <strong class="strong-description">ME</strong> ON
      </h1>
      <div class="contact-icons">
        <a href="https://www.linkedin.com/in/faridrasidov/">
          <FaLinkedinIn class="contact-icon"/>
        </a>
        <a href="https://www.instagram.com/faridrasiidov/">
          <FaInstagram class="contact-icon  "/>
        </a>
        <a href="https://github.com/faridrasidov/">
          <FaGithub class="contact-icon"/>
        </a>
        <a href="mailto: ftm5pv70@duck.com">
          <MdEmail class="contact-icon"/>
        </a>
        <a href="https://t.me/powwershell">
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