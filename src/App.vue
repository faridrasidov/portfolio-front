<template>
  <div class="flex flex-col min-h-screen">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>