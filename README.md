# 投稿系统

> 环境
> vue: 2.6.10
> vuetify: 2.1.7
> vuex: 3.0.1
> node: 10.15.3
> 浏览器: Chrome
> 开发工具: vscode

## 项目安装

``` 
npm install
```

### 开发阶段

``` 
npm run serve
```

### 发布项目

``` 
npm run build
```

### 引入字体

1. 依赖

``` bash
npm install material-design-icons-iconfont -D
```

2. main.js 引入

``` js
import 'material-design-icons-iconfont/dist/material-design-icons.css'
```

### Installing iconfonts

1. 安装

``` bash
npm install @mdi/font -D
```

2. 引入

``` js
// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
})
```
### fontawesome

1. 安装
```bash
npm install @fortawesome/fontawesome-free -D
```

2. 引入

```js
// src/plugins/vuetify.js

import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
})
```
