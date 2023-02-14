<template>
  <div class="mainPage">
    <div class="mainPage-header">
      <div class="mainPage-header-helloText">Привіт</div>
      <div class="mainPage-header-iLikeYouText">
        Ти мені сподобалась тому отримала цю валентинку)
      </div>
      <div class="mainPage-header-requestText">Будеш моєю валентинкою?</div>
      <div class="mainPage-header-Emojies">👉👈</div>
    </div>

    <div class="mainPage-buttons">
      <div class="mainPage-buttons-yesButton button">
        <router-link to="/yes" class="button-text">🥰Так🎉</router-link>
      </div>
      <div class="mainPage-buttons-noButton button">
        <router-link to="/no" class="button-text">😐Ні🫡</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/css/main.scss";
</style>
