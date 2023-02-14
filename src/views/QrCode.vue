<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { reactive } from "vue";

const state = reactive({
  qrCode: "https://valentines-day.web.app/",
  qrCodeSize: 340,
});
</script>

<template>
  <div class="qr">
    <qrcode-vue :value="state.qrCode" :size="state.qrCodeSize" level="H" />
  </div>
</template>

<style scoped lang="scss">
@import "@/css/main.scss";
</style>
