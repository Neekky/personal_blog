import Vue from 'vue';

const requireComponent = require.context(
  // 其组件目录的相对路径
  '../../components',
  // 是否查询其子目录
  true,
  // 匹配vue后缀文件名的文件
  /\.vue$/
)
let routerComponents = new Map();
// 遍历获取到的文件名，依次进行全局注册
requireComponent.keys().forEach(fileName => {
  // 获取组件配置(实例)
  const componentConfig = requireComponent(fileName);
  console.log(componentConfig)
  // 获取组件的 PascalCase 命名(eg: MYHeader)
  const componentName = componentConfig.default.name;
  // 全局注册组件
  Vue.component(
    componentName,
    //兼容 import export 和 require module.export 两种规范
    componentConfig.default || componentConfig)
  // 将组件设置入路由数组
  routerComponents.set(componentName,componentConfig.default || componentConfig)
})

export default routerComponents;