<template>
  <div>
    <NavbarView />
    <MainView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import NavbarView from "./components/NavbarView.vue";
import MainView from "./components/MainView.vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  // getWeather();
  // $store.dispatch("getWeahter")
  store.dispatch("getWeather");
});
</script>

<style lang="scss" scoped></style>
