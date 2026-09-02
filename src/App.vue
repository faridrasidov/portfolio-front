<template>
  <div class="flex flex-col min-h-screen">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { HOME_SEO } from "./router";

const route = useRoute();

useHead({
  title: computed(() => {
    if (route.name === "ProjectView") {
      return undefined;
    }

    return route.meta.title || HOME_SEO.title;
  }),
  meta: [
    {
      name: "description",
      content: computed(() => {
        if (route.name === "ProjectView") {
          return undefined;
        }

        return route.meta.description || HOME_SEO.description;
      }),
    },
    {
      name: "robots",
      content: computed(() => {
        if (route.name === "ProjectView") {
          return undefined;
        }

        return route.meta.robots || HOME_SEO.robots;
      }),
    },
  ],
  link: computed(() => {
    if (route.name === "ProjectView" || !route.meta.canonical) {
      return [];
    }

    return [{ rel: "canonical", href: route.meta.canonical }];
  }),
});
</script>
