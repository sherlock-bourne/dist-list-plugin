# 插件说明

## 功能

##### 功能一：

打包时会在打包的文件夹里，自动添加一个文件：“assetsList”，里面罗列出打包的文件夹里有哪些文件。

##### 功能二：

可以在使用插件的时候，通过"yourOption"参数，来向里面传值。比如版本号、环境标识。

```js
const { distListPlugin } = require('./plugins/dist-list-plugin.js');

// 在 webpack 配置中使用自定义的插件：
module.exports = {
  // …

  plugins: [
    
    new distListPlugin({
      yourOption: '此次版本号是"1.0.1",环境是"uat"',
    }),
  ],
};
```

## 安装