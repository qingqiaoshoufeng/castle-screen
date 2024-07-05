<template>
  <div class="wrapper">
    <div class="title">默认样式(contain模式)</div>
    <ca-backdrop >这是容器内容</ca-backdrop>
    <div class="title">cover模式</div>
    <ca-backdrop mode="cover" name="ROOT_BOX1">这是容器内容</ca-backdrop>
    <div class="title">指定缩放比例宽960高540缩放[0.5,0.25]</div>
    <ca-backdrop name="ROOT_BOX2" width="960" height="540" :mode="[0.5,0.25]">这是容器内容</ca-backdrop>
    <div class="title">内置类型:biType="one"</div>
    <ca-backdrop biType="one" name="ROOT_BOX3">这是容器内容</ca-backdrop>
    <div class="title">内置类型:biType="two"</div>
    <ca-backdrop biType="two" name="ROOT_BOX4">这是容器内容</ca-backdrop>
    <div class="title">内置类型:biType="three"</div>
    <ca-backdrop biType="three" name="ROOT_BOX5">这是容器内容</ca-backdrop>
    <div class="title">内置类型:biType="four"</div>
    <ca-backdrop biType="four" name="ROOT_BOX6">这是容器内容</ca-backdrop>
    <div class="title">内置类型:biType="five"</div>
    <ca-backdrop biType="five" name="ROOT_BOX7">这是容器内容</ca-backdrop>
  </div>
</template>

<script setup name="ca-backdrop">
import caBackdrop from '../index.js';
import { ref, defineOptions } from 'vue';
import bg from './assets/bg1.png';
const BackdropProps = ref({
  backgroundImg: bg,
  title: '传入的title',
  bgStyle: {},
});
defineOptions({
  name: 'ca-backdrop',
  label: '背景图',
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  overflow-x: scroll;
  background-color: #000000;
  color: #fff;
  height: 100%;
  >.title {
    margin-top: 20px;
    font-size: 14px;
    overflow: hidden;
  }
  .title {
    font-size: 30px;
    padding-top: 15px;
    overflow: hidden;
  }
}
</style>
