<template>
  <a-card hoverable>
    <template #cover>
      <outlined-button class="button" icon-color="#faad14">
        <heart-outlined />
      </outlined-button>
      <div class="img_wrap">
        <img alt="example" :src="item.img" />
      </div>
    </template>
    <a-card-meta :title="item.title">
      <template #description>
        <template v-for="price in item.price">
          <div>{{price.market}} {{price.value}}</div>
        </template>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
import {ItemStructure} from "~/store/type";

const props = defineProps(['item'])
const item = props.item as ItemStructure;

</script>

<style lang="less" scoped>
@import "../assets/style/_variables";

.img_wrap {
  height: 256px;
}
.img_wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
}

.button {
  position: absolute;
  right: 0;
  margin: @margin-xs;
}
</style>