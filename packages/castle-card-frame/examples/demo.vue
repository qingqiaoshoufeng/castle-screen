<template>
  <div>
    <castle-card-frame
      title="测试卡片"
      title-color="#000000"
      titlePosition="center"
      :title-image-height="80"
      :width="400"
      :height="300"
      :content-image-css="{
        url: '/components/assets/content-image.svg',
      }"
      :title-image-css="{
        url: '/components/assets/title-image.svg',
        top: 0,
        right: 100,
        bottom: 0,
        left: 100
      }"
    >
    </castle-card-frame>
    <castle-card-frame
      :title-image-height="80"
      :width="400"
      :height="300"
      :content-image-css="{
        url: '/components/assets/content-image.svg',
      }"
      :title-image-css="{
        url: '/components/assets/title-image.svg',
        top: 0,
        right: 100,
        bottom: 0,
        left: 100
      }"
    >
      <template #title>
        <div style="font-size: 20px; color: #000000; text-align: center; height: 40px; line-height: 40px">
          slot测试卡片
        </div>
      </template>
      <div style="font-size: 16px; color: #000000;">
        内容测试
      </div>
    </castle-card-frame>
  </div>
</template>

<script setup>
import {ref,defineOptions} from 'vue'
defineOptions({
  name:'ca-card-frame',
  label:'卡片组件'
})
</script>
