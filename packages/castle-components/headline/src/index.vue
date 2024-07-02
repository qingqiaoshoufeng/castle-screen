<script setup>
import { propsConfig } from '../config';
import { useSlots, computed } from 'vue';
const props = defineProps(propsConfig);
const slots = useSlots();
const boxStyle = computed(() => {
  debugger
  const ratio = props.ratioWidth / props.ratioHeight;
  if (props.width && props.height) {
    return {
      height: `${props.height}px`,
      width: `${props.width}px`,
    };
  }
  if (props.width) {
    return {
      height: `${props.width / ratio}px`,
      width: `${props.width}px`,
    };
  }
  if (props.height) {
    return {
      height: `${props.height}px`,
      width: `${props.height * ratio}px`,
    };
  }
  return {
    height: `${props.ratioHeight}px`,
    width: `${props.ratioWidth}px`,
  };
});
</script>
<template>
  <div class="castle-headline" :style="boxStyle">
    <div
      class="castle-headline_bg"
      :style="{ 'background-image': `url(${backgroundImg})`, ...bgStyle }"
    >
      <!-- 默认title部分 -->
      <div class="title" :style="titleStyle" v-if="!slots.title">
        {{ title }}
      </div>
      <!-- 动态插槽部分 -->
      <slot :name="key" v-for="(item, key) in slots" :key="key">
        <div class="title" :style="titleStyle" v-if="key === 'title'">
          {{ title }}
        </div>
      </slot>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
