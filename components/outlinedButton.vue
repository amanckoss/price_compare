<template>
  <a-button class="button" :style="styles">
    <template #icon>
      <slot></slot>
    </template>
  </a-button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconColor: {
    type: String,
    default: '#faad14'
  }
})
const styles = computed(() => {
  return 'color: ' + props.iconColor;
})
</script>

<style lang="less" scoped>
@import "assets/style/_variables";
.button {
  width: auto;
  border: 0;
  padding: @padding-xs;
  margin: @margin-xs;
&:hover {
   background: @main-background-color;
 }
}
</style>