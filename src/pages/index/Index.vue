<template>
    <!-- eslint-disable  -->
    <div class="index">
        <Searchbar></Searchbar>
        <BannerSwiper></BannerSwiper>
        <IconsSwiper></IconsSwiper>
        <Countdown></Countdown>
        <New></New>
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
import New from "./New"
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
        New,
        Courtyard,
        Everyday,
                Recommend,
        NavBottom
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    margin: 0;
}
</style>
