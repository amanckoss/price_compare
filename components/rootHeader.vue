<template>
  <a-layout-header class="root-header">
    <NuxtLink to="/"><a-typography-text class="header-logo">Порівняння цін</a-typography-text></NuxtLink>
    <a-space size="middle">
      <a-button type="primary"><NuxtLink to="/myPage">Вибрані товари</NuxtLink></a-button>
      <a-button><NuxtLink to="/login">Вхід</NuxtLink></a-button>
      <outlined-button icon-color="#fff" v-on:submit="openSettingsModal">
        <appstore-outlined />
      </outlined-button>
    </a-space>
  </a-layout-header>
  <a-modal v-model:visible="visible" title="Фільтр магазинів">
    <template v-for="item in [...Array(5)]">
      <div style="display: flex; justify-content: space-between; margin: 8px 0">
        Some store
        <a-checkbox></a-checkbox>
      </div>
    </template>
    <template #footer>
      <a-button key="back" type="primary">Закрити</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
export default defineComponent({
  setup() {
    const visible = ref(false)
    const openSettingsModal = () => {
      visible.value = true
    }
    return {
      openSettingsModal,
      visible
    }
  }
})
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
}
</style>