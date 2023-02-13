<template>
  <div class="sheet">
    <a-typography-title>Рекомендовані товари</a-typography-title>
    <a-row :gutter="[16, 24]">
      <template v-for="item in dataStore.defaultItems">
        <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
          <product-item :item="item"/>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import ProductItem from "../components/productItem";
import {useDataStore} from "~/store/dataStore";

const dataStore = useDataStore()
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