<template>
  <nav :class="navbar ? 'cyber-nav cyber-nav-scrolled' : 'cyber-nav'">
    <div class="cyber-nav-inner">
      <a class="cyber-logo" href="/#home" @click="setSectionAndClose('home')">&lt;xakep /&gt;</a>

      <button
          :aria-expanded="isActive"
          aria-label="Toggle navigation menu"
          class="cyber-menu-button"
          type="button"
          @click="handleMenuToggle"
      >
        <span :class="isActive ? 'line top active' : 'line top'"></span>
        <span :class="isActive ? 'line middle active' : 'line middle'"></span>
        <span :class="isActive ? 'line bottom active' : 'line bottom'"></span>
      </button>

      <ul :class="menuClass ? 'cyber-nav-links open' : 'cyber-nav-links'">
        <li v-for="item in links" :key="item.name">
          <a
              :class="activeSection === item.section ? 'cyber-nav-link active' : 'cyber-nav-link'"
              :href="item.href"
              @click="setSectionAndClose(item.section)"
          >
            {{ item.name }}
            <span class="cyber-nav-progress"></span>
          </a>
        </li>
        <li>
          <a class="cyber-github-link" href="https://github.com/faridrasidov" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub class="cyber-github-icon" />
            <span class="cyber-github-username">@faridrasidov</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {onBeforeUnmount, onMounted, ref} from "vue";
import FaGithub from "../assets/icons/social/github.svg";

export default {
  components: {
    FaGithub,
  },
  setup() {
    const navbar = ref(false);
    const menuClass = ref(false);
    const isActive = ref(false);
    const activeSection = ref("home");
    const links = [
      {name: "home", href: "/#home", section: "home"},
      {name: "about", href: "/#about", section: "about"},
      {name: "projects", href: "/#projects", section: "projects"},
      {name: "contact", href: "/#contact", section: "contact"},
    ];

    const handleMenuToggle = () => {
      isActive.value = !isActive.value;
      menuClass.value = isActive.value;
    };

    const closeMenu = () => {
      isActive.value = false;
      menuClass.value = false;
    };

    const setSectionAndClose = (section) => {
      activeSection.value = section;
      closeMenu();
    };

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.42;
      let currentSection = "home";

      links.forEach((item) => {
        const section = document.getElementById(item.section);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = item.section;
        }
      });

      activeSection.value = currentSection;
    };

    const scrollHandler = () => {
      navbar.value = window.scrollY >= 10;
      updateActiveSection();
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollHandler, {passive: true});
      window.addEventListener("resize", scrollHandler);
      scrollHandler();
      requestAnimationFrame(scrollHandler);
      setTimeout(scrollHandler, 250);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);
    });

    return {
      navbar,
      menuClass,
      isActive,
      activeSection,
      handleMenuToggle,
      closeMenu,
      setSectionAndClose,
      links,
    };
  },
};
</script>
