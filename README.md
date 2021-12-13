# ywx-watermark

> 一个简单的水印插件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 使用教程
1、npm i ywx-watermark/yarn add ywx-watermark
2、直接引用ywx-watermark.js文件

### 全局使用、单个文件中使用
import ywxWatermark from 'ywx-watermark'
Vue.use(ywxWatermark)//全局
components:{ywxWatermark} //单文件使用

### 直接使用ywx-watermark.js
<script src='../ywx-watermark'/>
<ywx-watermark></ywx-watermark>
