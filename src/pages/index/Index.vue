<template>
    <!-- eslint-disable  -->
    <div class="index">
        <Searchbar></Searchbar>
        <BannerSwiper></BannerSwiper>
        <IconsSwiper></IconsSwiper>
        <Countdown></Countdown>
        <NavBottom></NavBottom>
    </div>
</template>
<script>
/* eslint-disable */
import Searchbar from "./Searchbar"
import BannerSwiper from "./BannerSwiper"
import IconsSwiper from "./IconsSwiper"
import Countdown from "./Countdown"
import NavBottom from "./NavBottom"

export default {
    name: "Index",
    components: {
        Searchbar,
        BannerSwiper,
        IconsSwiper,
        Countdown,
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
