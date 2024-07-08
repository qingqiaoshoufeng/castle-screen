import { reactive, onMounted, computed, onUnmounted } from 'vue';
import {isArray} from '../../../utils/type.js'
export default function useBackGround({ props }) {
  const state = reactive({
    boxSize: {},
    listenInstance: null,
  });
  // 获取容器宽高
  const getBoxSize = () =>{
    state.boxSize = {
      width: window[props.name].offsetWidth,
      height: window[props.name].offsetHeight,
    };
  }

    // 监听
    const addboxSizeListen = ()=>{
      window.addEventListener('resize',getBoxSize)
      state.listenInstance = new ResizeObserver(getBoxSize)
      state.listenInstance.observe( window[props.name])
    }
  onMounted(() => {
    getBoxSize()
    addboxSizeListen()
  });

  onUnmounted(()=>{})

  // 背景图样式
  const extraBgStyle = computed(() => {
    if(isArray(props.mode)){
      debugger
      return ({
         transform: `scale(${props.mode[0]},${props.mode[1]})`
      })
    }
    const mode = props.mode || 'contain';
    const bgRatio = props.width/props.height
    const boxRatio = state.boxSize.width/state.boxSize.height
    const contain = bgRatio <= boxRatio ? {
      transform: `scale(${state.boxSize.height/props.height})`
    } :{
      transform: `scale(${state.boxSize.width/props.width})`
    }
    const modeMap = {
      cover: {
        transform: `scale(${state.boxSize.width/props.width},${state.boxSize.height/props.height})`
      },
      contain
    };
    return modeMap[mode];
  });
  return {
    state,
    extraBgStyle,
  };
}
