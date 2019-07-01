<template>
    <!-- eslint-disable  -->
    <div class="index">
        <Searchbar :isInTop="isInTop"></Searchbar>
        <BannerSwiper></BannerSwiper>
        <IconsSwiper></IconsSwiper>
        <Countdown></Countdown>
        <NewUser></NewUser>
        <Courtyard></Courtyard>
        <Everyday></Everyday>
        <Recommend></Recommend>
        <NavBottom></NavBottom>
    </div>
</template>
<script>
/* eslint-disable */
import '../utils/css/reset.less'
import Searchbar from "./Searchbar"
import BannerSwiper from "./BannerSwiper"
import IconsSwiper from "./IconsSwiper"
import Countdown from "./Countdown"
import NewUser from "./NewUser"
import Courtyard from "./Courtyard"
import Everyday from "./Everyday"
import Recommend from "./Recommend"
import NavBottom from "./NavBottom"

export default {
    name: "Index",
    components: {
        Searchbar,
        BannerSwiper,
        IconsSwiper,
        Countdown,
        NewUser,
        Courtyard,
        Everyday,
        Recommend,
        NavBottom
    },
    data: function () {
        return {
            isInTop: true
        }
    },
    mounted: function () {
        // 滚动过程中实现title底色变化的效果
        document.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 20) {
                if (this.isInTop === true) {
                    this.isInTop = false
                    }
            } else {
                if (this.isInTop === false) this.isInTop = true
            }
        })
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    margin: 0;
}
</style>
