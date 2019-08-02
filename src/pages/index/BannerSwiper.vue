<template>
    <!--  eslint-disable  -->
    <div class="banner-swiper">
        <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            ref="demo3"
            :loop="true"
            :canDragging="false"
            :paginationVisible="true"
            :autoPlay="3000"
        >
            <div
                v-for="(item,index) in dataImgItem"
                :key="index"
                class="nut-swiper-slide"
            >
                <img
                    :src="item.imgSrc"
                    style="max-width:100%;"
                >
            </div>
        </nut-swiper>
    </div>

</template>
<script>
/* eslint-disable */
export default {
    name: 'BannerSwiper',
    components: {},
    // mounted () {
    //     setTimeout(() => {
    //         this.$refs.demo4.updateEvent()
    //     }, 300)    },
    data () {
        return {
            dataImgItem: [
                {
                    imgSrc:
                        "//imgcps.jd.com/ling4/4938552/54mb5aW25Lmz5ZOB54m55Y2W/5paw5qy-55u06ZmN/p-5c13869682acdd181deefedf/9cf5ecc2/cr_1125x549_0_72/s1125x690/q70.jpg"
                },
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/73882/21/1179/95457/5cf63648E9b3220e4/3a9cfd61213976f1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                },
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/20589/32/6460/118373/5c52506cEa08ccedb/0254cba485b06d16.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                },
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/36425/18/13387/173153/5d134619E0249abfe/123710b155e960b7.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                }
            ]
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.banner-swiper {
    img {
        width: 100%;
        height: 200px;
    }
}
</style>
