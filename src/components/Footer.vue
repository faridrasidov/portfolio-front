<template>
  <footer class="cyber-footer">
    <div class="cyber-footer-inner">
      <span class="cyber-footer-logo">&lt;xakep /&gt;</span>
      <p>Copyright &copy; 2024 Farid Rashidov — Built with Vue, Vite, and focus.</p>
      <a aria-label="GitHub" href="https://github.com/faridrasidov" target="_blank" rel="noreferrer">
        <FaGithub class="cyber-footer-icon"/>
      </a>
    </div>
  </footer>
</template>

<script>
import FaGithub from "../assets/icons/social/github.svg";

export default {
  components: {
    FaGithub,
  },
};
</script>
