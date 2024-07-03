<script setup>
import { ref,defineOptions } from 'vue'
const currentComponent = ref(null)
const componentsMap = ref(null)

// 自动导入所有组件
const getComponents = async()=>{
  const result = {}
  const components = import.meta.glob('../node_modules/@castle-screen/**/demo.vue')
  for(const path in components){
    const component = await components[path]()
    result[component.default.name] = component.default
  }
  componentsMap.value = result
  currentComponent.value = result['caDemo']
}
getComponents()

// 切换组件
const trigger = (item)=>{
  currentComponent.value = item
}


defineOptions({
  name:'layOut'
})
</script>
<template>
<div class="lay-out">
  <div class="left">
    <div class="menu-item" v-for="item in componentsMap" :class="{selected:item.name === currentComponent?.name}" :key="item.label" @click="trigger(item)">
      {{ item.label || item.name }}
    </div>
  </div>
  <div class="right">
    <component :is="currentComponent" />
  </div>
</div>
</template>
<style lang="scss" scoped>
.lay-out{
  width: 100%;
  height: 100%;
  display: flex;
  .left{
    height: 100%;
    width: 250px;
    .menu-item{
      height: 50px;
      line-height: 50px;
      text-align: center;
      &:hover{
        color: #1989fa;
      }
    }
    .menu-item.selected{
      color: #1989fa;
    }
  }
  .right{
    height: 100%;
    flex: 1;
    max-width: calc(100% - 250px);
    background-color: #000000;
  }
}
</style>
