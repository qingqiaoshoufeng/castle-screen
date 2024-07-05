export const propsConfig = {
  title: {
    default: '可视化驾驶舱标题',
    type: String,
  },
  backgroundImg: {
    default: '',
    type: String,
  },
  width: {
    default: 1920,
    type: Number,
  },
  height: {
    default: 1080,
    type: Number,
  },
  mode:{
    default: 'contain',
    type: [String,Array],
  },
  biType: {
    default: null,
    type: String,
  },
  name:{
    default:'ROOT_BOX',
    type: String,
  }
};
