export const propsConfig = {
  title: {
    default: '可视化驾驶舱标题',
    type: String,
  },
  backgroundImg: {
    default: '',
    type: String,
  },
  titleStyle:{
    type: Object,
  },
  bgStyle: {
    default: () => ({}),
    type: Object,
  },
  width: {
    default: 1920,
    type: Number,
  },
  height: {
    default: 1080,
    type: Number,
  },
  biType: {
    default: null,
    type: String,
  }
};
