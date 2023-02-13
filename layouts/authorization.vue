<template>
  <div class="authorization-root">
    <div class="authorization-sheet">
      <slot/>
    </div>
    <div class="spotlight"/>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
@import "assets/style/_variables";
.authorization-root {
  position: relative;
  height: 100vh;
  background: @background-black;
  overflow: hidden;
}
.authorization-sheet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 656px;
  width: 40%;
  background: @main-background-color;
  box-shadow: rgb(0 0 0 / 10%) 0 2px 10px 2px;
  border-radius: @border-radius-sheet;
  z-index: 2;
}
.spotlight {
  position: absolute;
  bottom: -400px;
  width: 100%;
  background: @gradient-color;
  filter: blur(20vh);
  height: 40vh;
  z-index: 1;
}
</style>