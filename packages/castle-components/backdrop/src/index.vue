<script setup>
import { propsConfig } from '../config';
import { useSlots, computed } from 'vue';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import useBackGround from '../hooks/useBackGround.js'
const props = defineProps(propsConfig);
const {state,extraBgStyle} = useBackGround({props})
console.log(state);
const bgImg = computed(() => {
  const biMap = {
    one,
    two,
    three,
    four,
    five,
  };
  return biMap[props.biType] || props.backgroundImg || biMap.one;
});

const bgStyle = computed(() => {
  return {
    width:`${props.width}px`,
    height:`${props.height}px`
  }
});

</script>
<template>
  <div class="castle-backdrop" :class="biType" :id="name">
    <div
      class="castle-backdrop_bg"
      :style="{ 'background-image': `url(${bgImg})`,...extraBgStyle,...bgStyle }"
    >
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
