<template>
  <a-table :columns="columns" :data-source="commodityStore.items">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'image'">
        {{}}
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'image'">
        <div class="market-section">
          <img src="~/assets/img/apple.png" alt="fjsd"/>
        </div>
      </template>
      <template v-if="column.key === 'price'">
        <div style="display: flex; justify-content: space-between">
          {{ record.price }}
          <outlined-button class="button" icon-color="#faad14" v-on:submit="heart = !heart">
            <template v-if="heart">
              <HeartFilled />
            </template>
            <template v-else>
              <HeartOutlined />
            </template>
          </outlined-button>
        </div>
      </template>
    </template>
  </a-table>b
</template>
<script lang="ts" setup>
import type { TableColumnsType } from 'ant-design-vue';
import { ref } from 'vue';
import OutlinedButton from "~/components/outlinedButton.vue";
import {useCommodityStore} from "~/store/commodityStore";

const heart = ref<boolean>(true);
const columns = ref<TableColumnsType>([
  {
    title: 'Назва товару',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
  },
  {
    title: 'image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Ціна',
    dataIndex: 'price',
    key: 'price',
  },
]);

const commodityStore = useCommodityStore()
</script>

<style scoped>
.market-section {
  display: flex;
  align-items: center;
  height: 55px;
  margin: -16px;
  padding: 0 16px;
}

.market-section img {
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
}
</style>