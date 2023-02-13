<template>
  <a-button class="button" :style="styles" @click="onClick">
    <template #icon>
      <slot></slot>
    </template>
  </a-button>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
export default defineComponent({
  props: {
    iconColor: {
      type: String,
      default: '#faad14'
    }
  },
  emits: ['submit'],
  setup(props, emits) {
    // const emit = defineEmits(['submit']);

    const styles = computed(() => {
      return 'color: ' + props.iconColor;
    })
    const onClick = () => {
      emits.emit('submit')
    }
    return {
      styles,
      onClick
    }
  }
});
</script>

<style lang="less" scoped>
@import "assets/style/_variables";
.button {
  width: auto;
  border: 0;
  padding: @padding-xs;
&:hover {
   background: @main-background-color;
 }
}
</style>