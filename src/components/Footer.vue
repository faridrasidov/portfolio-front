<template>
  <div class="footer-section">
    <div class="footer-content">
      <div class="footer-copyright">
        Designed and Developed by Farid Rashidov
      </div>
      <div class="footer-copyright">Copyright © 2024</div>
      <div class="footer-social-media">
        <a href="https://www.linkedin.com/in/faridrasidov/">
          <FaLinkedinIn class="footer-icon"/>
        </a>
        <a href="https://www.instagram.com/faridrasiidov/">
          <FaInstagram class="footer-icon  "/>
        </a>
        <a href="https://github.com/faridrasidov/">
          <FaGithub class="footer-icon"/>
        </a>
        <a href="mailto: ftm5pv70@duck.com">
          <MdEmail class="footer-icon"/>
        </a>
        <a href="https://t.me/powwershell">
          <FaTelegramPlane class="footer-icon"/>
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
import FaTelegramPlane from "../assets/icons/social/telegram.svg"

export default {
  components: {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    MdEmail,
    FaTelegramPlane
  }
}
</script>
