<script setup>
import { propsConfig } from '../config';
import { useSlots, computed } from 'vue';
import center1 from '../assets/center-1.svg';
import center2 from '../assets/center-2.svg';
import center3 from '../assets/center-3.svg';
import left1 from '../assets/left-1.svg';
import left2 from '../assets/left-2.svg';
const props = defineProps(propsConfig);
const slots = useSlots();

const bgImg = computed(() => {
  const biMap = {
    centerOne: center1,
    centerTwo: center2,
    centerThree: center3,
    leftOne: left1,
    leftTwo: left2,
  };
  return biMap[props.biType] || props.backgroundImg || biMap.centerTwo;
});

// 容器样式
const boxStyle = computed(() => {
  const biStyleMap = {
    centerOne: {
      height: 108,
      width: 1920,
    },
    centerTwo: {
      height: 100,
      width: 1920,
    },
    centerThree: {
      height: 157,
      width: 1920,
    },
    leftOne: {
      height: 90,
      width: 1920,
    },
    leftTwo: {
      height: 96,
      width: 1946,
    },
  };
  const config = biStyleMap[props.biType] || {
    height: props.height,
    width: props.width,
  };
  return {
    height: `${config.height}px`,
    width: `${config.width}px`,
  };
});
</script>
<template>
  <div class="castle-backdrop" :class="biType" :style="boxStyle">
    <div
      class="castle-backdrop_bg"
      :style="{ 'background-image': `url(${bgImg})`, ...bgStyle }"
    >
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
