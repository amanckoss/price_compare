<template>
  <div class="sheet">
    <div class="head-section">
      <a-typography-title>Промарковані товари</a-typography-title>
      <a-space class="head-switcher">
        Вибір режиму
        <a-switch v-model:checked="commodityOriented"></a-switch>
      </a-space>
    </div>
    <template v-if="commodityOriented">
      <a-row :gutter="[16, 24]">
        <template v-for="item in [... Array(8)]">
          <a-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
            <product-item :item="item"/>
          </a-col>
        </template>
      </a-row>
    </template>
    <template v-else>
      <a-row :gutter="[16, 24]">
        <a-col :sm="24" :lg="12">
          <div class="market-section">
            <img src="~/assets/img/fb_share.png" alt="market-img"/>
          </div>
          <market-table/>
        </a-col>
        <a-col :sm="24" :lg="12">
          <div class="market-section">
            <img src="~/assets/img/fb_share.png" alt="market-img"/>
          </div>
          <market-table/>
        </a-col>
      </a-row>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import MarketTable from "~/components/marketTable.vue";

const commodityOriented = ref<boolean>(true);
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
.head-section {
  display: flex;
  justify-content: space-between;
}
.head-switcher {
  display: flex;
  align-items: flex-start;
}
.market-section {
  display: flex;
  justify-content: center;
  height: 128px;
}
.market-section img {
  height: 100%;
  object-fit: cover;
  object-position: 0 0;

}
</style>