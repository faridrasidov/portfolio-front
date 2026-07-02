<template>
  <div :class="navbar ? 'updated-navbar' : 'navbar'">
    <div class="nav-main">
      <div class="nav-icon">
        <a href="/">
          <img alt="Logo" class="nav-logo" src="../assets/logo.png"/>
        </a>
      </div>
      <button
          :aria-expanded="isActive"
          aria-label="Toggle navigation menu"
          class="nav-menu"
          type="button"
          @click="handleMenuToggle"
      >
        <svg
            class="w-8 h-8"
            fill="none"
            stroke="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
          <path
              :class="isActive ? 'rotate-45 translate-y-[-1px] translate-x-[8px]' : ''"
              class="transition-transform duration-300"
              d="M4 6h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
          />
          <path
              :class="isActive ? 'opacity-0' : ''"
              class="transition-opacity duration-300"
              d="M4 12h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
          />
          <path
              :class="isActive ? '-rotate-45 translate-y-[7.5px] -translate-x-[9px]' : ''"
              class="transition-transform duration-300"
              d="M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
          />
        </svg>
      </button>
      <ul
          :class="[
            'nav-items',
            menuClass
              ? 'top-14 opacity-100 max-lg:pointer-events-auto max-lg:visible'
              : 'top-0 max-lg:-translate-y-16 max-lg:opacity-0 max-lg:pointer-events-none max-lg:invisible duration-500'
          ]"
      >
        <li
            v-for="(item, index) in links"
            :key="index"
            class="nav-item">
          <router-link
              :to="item.link"
              class="nav-item-navlink"
              @click="closeMenu">
            <component :is="item.icon" class="w-5"/>
            {{ item.name }}
          </router-link>
        </li>
        <li class="nav-github">
          <a aria-label="GitHub" href="https://github.com/faridrasidov">
            <FaGithub class="nav-github-logo"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {onBeforeUnmount, onMounted, ref} from "vue";
import FaGithub from "../assets/icons/social/github.svg"
import RiHome3Line from "../assets/icons/navbar/home.svg"
import GoPerson from "../assets/icons/navbar/about.svg"
import AiOutlineFundProjectionScreen from "../assets/icons/navbar/project.svg"

export default {
  components: {
    RiHome3Line,
    GoPerson,
    AiOutlineFundProjectionScreen,
    FaGithub,
  },
  setup() {
    const navbar = ref(false);
    const menuClass = ref(false);
    const isActive = ref(false);

    const handleMenuToggle = () => {
      isActive.value = !isActive.value;
      menuClass.value = isActive.value;
    };

    const closeMenu = () => {
      isActive.value = false;
      menuClass.value = false;
    };

    const scrollHandler = () => {
      navbar.value = window.scrollY >= 10;
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollHandler);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollHandler);
    });

    const links = [
      {name: "Home", icon: RiHome3Line, link: "/"},
      {name: "About", icon: GoPerson, link: "/about"},
      {
        name: "Projects",
        icon: AiOutlineFundProjectionScreen,
        link: "/projects",
      },
    ];

    return {
      navbar,
      menuClass,
      isActive,
      handleMenuToggle,
      closeMenu,
      links,
    };
  },
};
</script>
