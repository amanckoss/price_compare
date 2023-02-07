<template>
  <a-layout-header class="root-header">
    <a-typography-text class="header-logo">Порівняння цін</a-typography-text>
    <a-space size="middle">
      <a-button type="primary"><NuxtLink to="/markedItems">Вибрані товари</NuxtLink></a-button>
      <a-button><NuxtLink to="/login">Вхід</NuxtLink></a-button>
      <outlined-button icon-color="green">
        <appstore-outlined />
      </outlined-button>
    </a-space>
  </a-layout-header>
</template>

<script>
import OutlinedButton from "~/components/outlinedButton";
export default {
  name: "rootHeader",
  components: {OutlinedButton}
}
</script>

<style lang="less">
.root-header {
  padding: 0 32px;
  display: flex;
  height: 72px;
  justify-content: space-between;
  background: transparent;
}
.header-logo {
  //color: rgba(0, 0, 0, 0.88);
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  font-family: AlibabaPuHuiTi,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji',sans-serif;
  letter-spacing: -0.18px;
  white-space: nowrap;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  //-webkit-align-items: center;
  //-webkit-box-align: center;
  //-ms-flex-align: center;
  //align-items: center;
}
</style>