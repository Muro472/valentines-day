<script setup lang="ts">
const instaClick = () => {
  window.open("https://www.instagram.com/margita_miroslav/");
};
</script>

<template>
  <div class="yesPage">
    <div class="yesPage-main">
      <div class="yesPage-main-coolText">Круто!</div>

      <div class="yesPage-main-writeMeBackText">Це мій інстаграм</div>

      <div @click="instaClick" class="yesPage-main-instaText">
        @margita_miroslav
      </div>

      <div class="yesPage-main-lilHint">
        Можеш тикнути і воно відкриється в додатку
      </div>

      <div class="yesPage-main-writeMeBackText">напиши мені)</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/css/main.scss";
</style>
