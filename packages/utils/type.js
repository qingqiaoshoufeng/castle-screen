export const isType = (val,type)=>{
  return Object.prototype.toString.call(val).includes(type)
}

export const isArray = (val)=>{
  return isType(val,'Array')
}