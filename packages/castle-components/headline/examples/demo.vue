<template>
  <div class="wrapper">
    <div class="title">使用一:不使用插槽</div>
    <ca-headline v-bind="HeadlineProps" />
    <div class="title">使用二：自定义插槽</div>
    <ca-headline v-bind="HeadlineProps">
      <template #title>
        <div class="title">{{ '插槽渲染的title' }}</div>
      </template>
      <template #ccc>
        <div class="ccc">
          我是插槽ccc的内容
        </div>
      </template>
    </ca-headline>
    <div class="title">使用三:设置宽度适配</div>
    <ca-headline v-bind="{...HeadlineProps,width:920,titleStyle:{ 'font-size':'16px','padding-top':'8px'}}" />
  </div>
</template>

<script setup name="ca-headline">
import caHeadline from '../index.js'
import {ref,defineOptions} from 'vue'
import bg from './assets/bg1.png'
const HeadlineProps = ref({
  backgroundImg: bg,
  title:'传入的title',
  bgStyle:{
  },
  titleStyle:{
    'font-size':'38px',
    'padding-top':'10px'
  }
})
defineOptions({
  name:'ca-headline',
  label:'顶部标题'
})
</script>
<style lang="scss" scoped>
  .wrapper{
    width: 100%;
    overflow-x: scroll;
    background-color: #000000;
    color: #fff;
    height: 100%;
    >.title{
      margin-top: 20px;
      font-size: 14px;
    }
    .title{
      font-size: 30px;
      padding-top: 15px;
    }
  }
</style>