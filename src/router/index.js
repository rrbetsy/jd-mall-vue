import Vue from 'vue'
import {
    Searchbar,
    Navbar,
    Dialog,
    Picker,
    Swiper,
    Button,
    ButtonGroup,
    Badge,
    Price,
    Countdown
} from '@nutui/nutui'

import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Category from '@/pages/category/Category'
import ShopCart from '@/pages/shop-cart/ShopCart'
import MyInfo from '@/pages/my-info/MyInfo'

Vue.use(Router)
// 引入需要用的京东组件
Searchbar.install(Vue)
Navbar.install(Vue)
Dialog.install(Vue)
Picker.install(Vue)
Swiper.install(Vue)
Button.install(Vue)
ButtonGroup.install(Vue)
Badge.install(Vue)
Countdown.install(Vue)
Price.install(Vue)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: './category',
            name: 'category',
            component: Category
        },
        {
            path: './shopCart',
            name: 'shopCart',
            component: ShopCart
        },
        {
            path: './myInfo',
            name: 'myInfo',
            component: MyInfo
        }
    ]
})
