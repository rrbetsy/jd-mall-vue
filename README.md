# jd-mall-vue

>仿京东商城移动端的vue项目
主要包括主页面、分类页面、购物车界面和登录界面和用户页面
1. 使用vue-cli脚手架构建单页项目
2. 使用京东NutUI移动端Vue组件库，vue全局注册并按需引入组件
3. 使用less开发样式，eslint规范代码格式
4. 使用flex实现页面复杂布局

## 首页
>主要包括顶部的搜索栏，自动轮播图，图片左右滑动，秒杀倒计时，商品列表

（1）顶部搜索栏滚动时固定在视口顶部，且背景颜色发生变化。方法是使用`position:fixed`固定搜索栏，添加滚动事件，获取文档滚动高度，一定高度后改变背景颜色，此过程中改变状态赋值的优化，使赋值操作只进行一次

（2）使用**NutUI移动端Vue组件库**中的`swiper`组件，使小图标可以左右滑动切换

（3）京东秒杀模块使用倒计时组件，再设置内容可以向左滑动

（4）商品类型模块的大标题使用了渐变色的字体

（5）固定底部导航栏，点击相关图标，用vue-router加载其他页面

## 分类
>主要包括搜索栏，商品的一级选项列表和二级选项列表，商品选项上下滑动

（1）分开左右两边的商品选项列表

（2）分别用`v-for`遍历获取的数组数据

（3）`v-if`渲染选中的二级商品选项列表

## 拼购

## 购物车
>
## 登录
>分为登录界面和用户界面。登录界面主要包括导航栏，输入框，登录按钮；用户界面主要包括导航栏，用户信息，其他关联业务

（1）  在没有输入内容时，登录按钮设置只读

（2） 输入内容后，登录按钮可以点击，加载至用户界面

（3） 使用`border-radius`设置曲面
## 效果图
主页面

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/index.jpg?raw=true){:height="100%" width="375px"}

主页面的商品列表

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/shopInfo-page.jpg?raw=true){:height="100%" width="375px"}

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/shopInfo.jpg?raw=true){:height="100%" width="375px"}

分类页面

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/category-page.jpg?raw=true)

登录页面

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/login-page.jpg?raw=true)

激活登录页面

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/login-light.jpg?raw=true)

用户页面

![](https://github.com/rrbetsy/jd-mall-vue/raw/master/images/user-page.jpg?raw=true)
