export const withInstall = (component)=>{
  component.install = (app,customName)=>{
    app.component(customName || component.name, component)
  }
  return component
}
