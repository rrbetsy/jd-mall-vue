# jd-mall-vue
```
//运行
npm run start
```
>京东商城移动端地址：https://m.jd.com/?sceneval=2
以下有本项目实际运行效果图，数据和图片来源于官方站点，可以作为对比。

>仿京东商城移动端的 vue 项目  (本项目仅供参考学习使用，不得作为其他用途)

**主要包括主页面、分类页面、购物车界面和登录界面和用户页面**
1. 使用 vue-cli 脚手架构建的单页项目
2. 使用京东 NutUI 移动端 Vue 组件库，Vue 全局注册并按需引入组件
3. 使用 less 开发样式，eslint 规范代码格式
4. 使用 flex 实现页面复杂布局
5. 使用 axios 请求， Koa Server mock 数据（购物车界面）
## 首页
>主要包括顶部的搜索栏，自动轮播图，图片左右滑动，秒杀倒计时，商品列表

主页面

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/index.jpg?raw=true" width = "375" height = "100%">

主页面的商品列表

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/shopInfo-page.jpg?raw=true" width = "375" height = "100%">

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/shopInfo.jpg?raw=true" width = "375" height = "100%">

（1）顶部搜索栏滚动时固定在视口顶部，且背景颜色发生变化。方法是使用 `position: fixed` 固定搜索栏，添加滚动事件，获取文档滚动高度，一定高度后改变背景颜色，此过程中改变状态赋值的优化，使赋值操作只进行一次

（2）使用 **NutUI 移动端 Vue 组件库**中的 `swiper` 组件，使小图标可以左右滑动切换

（3）京东秒杀模块使用倒计时组件，再设置内容可以向左滑动

（4）商品类型模块的大标题使用了渐变色的字体

（5）固定底部导航栏，点击相关图标，用 vue-router 加载其他页面

## 分类
>主要包括搜索栏，商品的一级选项列表和二级选项列表，商品选项上下滑动

分类页面

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/category-page.jpg?raw=true" width = "375" height = "100%">

（1）分开左右两边的商品选项列表

（2）分别用 `v-for` 遍历获取到的数组数据

（3）`v-if` 渲染选中的二级商品选项列表

## 拼购

## 购物车
>主要包括导航栏，购物车商品列表，结算栏，商品属性弹窗

购物车页面

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/shop-cart1.png?raw=true" width = "375" height = "100%">

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/shop-cart-attr1.png?raw=true" width = "375" height = "100%">

（1）支持选中单个商品，结算栏的全选和数量价格计算，点击商品属性出现属性弹窗

（2）使用 `this.$emit` 触发当前实例的事件，可以把相关参数传递给监听器

（3）使用 Koa Server 对部分接口数据进行 mock，使用 axios 请求数据
## 登录
>分为登录界面和用户界面。登录界面主要包括导航栏，输入框，登录按钮；用户界面主要包括导航栏，用户信息，其他关联业务

登录页面

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/login-page.jpg?raw=true" width = "375" height = "100%">

激活登录页面

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/login-light.jpg?raw=true" width = "375" height = "100%">

（1）  在没有输入内容时，登录按钮设置只读

（2） 输入内容后，点击登录按钮保存用户信息到 localstorage 并跳转至用户界面

（3） 使用 `border-radius` 设置曲面
用户页面

<img src="https://github.com/rrbetsy/jd-mall-vue/raw/master/images/user-page.jpg?raw=true" width = "375" height = "100%">





