<template>
  <div class="wrapper">
    <div class="title">默认样式(contain模式)</div>
    <ca-empty ></ca-empty>
    <div class="title">内置类型:biType="localFail"</div>
    <ca-empty biType="localFail"></ca-empty>
    <div class="title">内置类型:biType="loading"</div>
    <ca-empty biType="loading"></ca-empty>
    <div class="title">内置类型:biType="noNotice"</div>
    <ca-empty biType="noNotice"></ca-empty>
    <div class="title">内置类型:biType="noPermission"</div>
    <ca-empty biType="noPermission"></ca-empty>
    <div class="title">内置类型:biType="noRecord"</div>
    <ca-empty biType="noRecord"></ca-empty>
    <div class="title">内置类型:biType="notfound"</div>
    <ca-empty biType="notfound"></ca-empty>
    <div class="title">内置类型:biType="reload"</div>
    <ca-empty biType="reload"></ca-empty>
    <div class="title">内置类型:biType="later"</div>
    <ca-empty biType="later"></ca-empty>
  </div>
</template>

<script setup name="ca-empty">
import caEmpty from '../index.js';
import { ref, defineOptions } from 'vue';
import bg from './assets/bg1.png';
const EmptyProps = ref({
  backgroundImg: bg,
  title: '传入的title',
  bgStyle: {},
});
defineOptions({
  name: 'ca-empty',
  label: '缺省图',
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
