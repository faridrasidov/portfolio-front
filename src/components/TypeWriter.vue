<template>
  <div ref="typewriter"></div>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
  name: "Typewriter",
  props: {
    strings: {
      type: Array,
      required: true,
    },
    autoStart: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    deleteSpeed: {
      type: Number,
      default: 50,
    },
  },
  mounted() {
    new Typewriter(this.$refs.typewriter, {
      strings: this.strings,
      autoStart: this.autoStart,
      loop: this.loop,
      deleteSpeed: this.deleteSpeed,
    });
  },
};
</script>
