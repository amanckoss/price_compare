<template>
  <div class="root">
    <a-layout class="root-layout">
      <root-header/>
      <a-layout-content class="root-content" style="padding: 16px 16px">
        <slot/>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
      <div class="spotlight"/>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RootHeader from "~/components/rootHeader.vue";
export default defineComponent({
  components: {RootHeader},
  setup() {
    return {
      selectedKeys: ref<string[]>(['2']),
    };
  },
});
</script>

<style lang="less" scoped>
@import "assets/style/_variables";

.spotlight {
  position: absolute;
  bottom: -200px;
  width: 100%;
  background: @gradient-color;
  filter: blur(10vh);
  height: 20vh;
  z-index: 1;
}
.root-layout {
  position: relative;
  background: @background-black;
}
</style>