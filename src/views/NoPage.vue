<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  mainTexst: "Ну ок...",
});

setTimeout(() => {
  state.mainTexst = "Гарного дня :)";
}, 3000);

setTimeout(() => {
  state.mainTexst = "Та всьо";
}, 10000);
</script>

<template>
  <div class="noPage">
    <div class="noPage-text">{{ state.mainTexst }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/css/main.scss";
</style>
