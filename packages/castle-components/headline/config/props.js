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
  ratioHeight: {
    default: 100,
    type: Number,
  },
  ratioWidth: {
    default: 1920,
    type: Number,
  },
  width: {
    default: null,
    type: Number,
  },
  height: {
    default: null,
    type: Number,
  },
};
