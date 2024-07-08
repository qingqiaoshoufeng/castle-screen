<script setup>
import { propsConfig } from '../config';
import { useSlots, computed } from 'vue';
import localFail from '../assets/local-fail.png';
import loading from '../assets/loading.png';
import noNotice from '../assets/no-notice.png';
import noPermission from '../assets/no-permission.png';
import noRecord from '../assets/no-record.png';
import notfound from '../assets/notfound.png';
import reload from '../assets/reload.png';
import later from '../assets/late.png';

import useBackGround from '../hooks/useBackGround.js';
const props = defineProps(propsConfig);

const bgImg = computed(() => {
  const biMap = {
    localFail,
    loading,
    noNotice,
    noPermission,
    noRecord,
    notfound,
    reload,
    later,
  };
  return biMap[props.biType] || props.backgroundImg || biMap.noRecord;
});

const bgStyle = computed(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
  };
});
</script>
<template>
  <div
    class="castle-empty"
    :style="{
      'background-image': `url(${bgImg})`,
      ...extraBgStyle,
      ...bgStyle,
    }"
  >
    <slot />
  </div>
</template>
