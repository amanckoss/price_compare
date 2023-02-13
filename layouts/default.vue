<template>
  <div class="root">
    <a-layout class="root-layout">
      <root-header/>
      <a-layout-content class="root-content" style="padding: 16px 16px">
        <slot/>
      </a-layout-content>
      <div class="spotlight"/>
      <root-footer/>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import {useDataStore} from "~/store/dataStore";

const dataStore = useDataStore()
dataStore.fetchData();
</script>

<style lang="less" scoped>
@import "assets/style/_variables";

.spotlight {
  position: absolute;
  bottom: -400px;
  width: 100%;
  background: @gradient-color;
  filter: blur(20vh);
  height: 40vh;
}
.root-layout {
  position: relative;
  background: @background-black;
  min-height: 100vh;
  overflow: hidden;
}
</style>