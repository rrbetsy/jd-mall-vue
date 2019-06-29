<template>
    <!--  eslint-disable  -->
    <div class="icons-swiper">
        <div class="banner_06003">
            <a href="//wqs.jd.com/event/promote/zlpgr_mm/index.shtml?ptag=138097.1.4&amp;sceneval=2">
                <img
                    src="//m.360buyimg.com/mobilecms/jfs/t1/48416/19/3634/139994/5d158e78Ef56ea04e/587bbe2ea4124f12.gif"
                    class="opa1"
                >
            </a>
        </div>
        <nut-swiper
            :paginationVisibile="true"
            direction="horizontal"
            ref="demo3"
            :loop="true"
            :canDragging="false"
            :paginationVisible="true"
        >
            <div
                v-for="(item,index) in iconInfo"
                :key="index"
                class="nut-swiper-slide"
            >
                <div class="icon-list-wrap">
                    <div
                        class="icon-wrap"
                        v-for="(iconItem,iconIndex) in item"
                        :key="iconIndex"
                    >
                        <img
                            :src="iconItem.iconImg"
                            :name="iconItem.iconName"
                        >
                        <p class="icon-name">{{iconItem.iconName}}</p>
                    </div>
                </div>

            </div>
        </nut-swiper>
    </div>

</template>
<script>
/* eslint-disable */
export default {
    name: 'IconsSwiper',
    components: {},
    data () {
        return {
            dataImgItem: [
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg"
                },
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png"
                },
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg"
                },
                {
                    imgSrc:
                        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg"
                }
            ],
            iconInfo: [
                [
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                        iconName: '京东超市'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
                        iconName: '数码电器'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                        iconName: '京东服饰'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp',
                        iconName: '京东生鲜'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
                        iconName: '京东到家'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
                        iconName: '充值缴费'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
                        iconName: '9.9元拼'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                        iconName: '领券'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
                        iconName: '赚钱'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
                        iconName: 'PLUS会员'
                    },
                ], [
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14555/23/1446/4195/5c120e71E947f3ca1/cdbad904f61e1fb7.png.webp',
                        iconName: '海囤全球'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png.webp',
                        iconName: '京东拍卖'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png.webp',
                        iconName: '唯品会'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg.dpg',
                        iconName: '玩3C'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png.webp',
                        iconName: '沃尔玛'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png.webp',
                        iconName: '美妆馆'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png.webp',
                        iconName: '京东旅行'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png.webp',
                        iconName: '拍拍二手'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png.webp',
                        iconName: '物流查询'
                    },
                    {
                        iconImg: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png.webp',
                        iconName: '全部'
                    },
                ]
            ]
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.banner_06003 {
    width: 100%;
    height: 126px;
    overflow: hidden;
    a {
        display: block;
        width: 100%;
        img {
            height: 100%;
            width: 100%;
        }
    }
}
.icon-list-wrap {
    display: flex;
    flex-wrap: wrap;
    .icon-wrap {
        width: 20%;
        text-align: center;
        img {
            margin-top: 11px;
            height: 44px;
            width: 44px;
        }
        p {
            margin: 0;
            margin-top: 6px;
            font-size: 13px;
            line-height: 20px;
        }
    }
}
.nut-swiper .nut-swiper-pagination .swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px;
    &.active {
        background-color: #e93b3d;
        width: 10px;
        height: 5px;
        border-radius: 3px;
        opacity: 0.7;
    }
}
</style>
