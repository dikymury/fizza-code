<template>
  <SwitchView></SwitchView>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SwitchView from "./components/SwitchView.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    SwitchView,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/scss/custom.scss";
</style>
