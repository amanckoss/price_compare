<template>
  <div class="sheet">
    <a-row :gutter="[16, 24]">
      <template v-for="item in [... Array(12)]">
        <a-col :span="4">
          <product-item :item="item"/>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script setup>

import ProductItem from "../components/productItem";
</script>

<style lang="less" scoped>
@import "assets/style/_variables";
.sheet {
  width: 100%;
  padding: @padding-md;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: rgb(0 0 0 / 10%) 0 2px 10px 2px;
  border-radius: @border-radius-sheet;
  z-index: 2;
}
</style>