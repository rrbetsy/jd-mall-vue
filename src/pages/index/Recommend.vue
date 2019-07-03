<template>
    <div class="recommend">
        <div class="title"></div>
        <div class="recommonend-wrap">
            <div
                class="recommonend-item"
                v-for="(item,index) in recommendItems"
                :key="index"
            >
                <img
                    :src="item.imgUrl"
                />
                <p class="main-title">{{item.title}}</p>
                <div class="item-bottom">
                    <div class="price">
                        <i>￥</i>
                        <span>{{item.price}}</span>
                    </div>
                    <span class="tag">{{item.tag}}</span>
                    <a
                        href="void(0)"
                        class="look"
                    >看相似</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: 'Recommend',
    data () {
        return {
            recommendItems: [
                {
                    imgUrl:
                        "//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/44110/36/7943/165438/5d16ff1dE1f1835fc/d82a69c421a76ca3.jpg!q70.dpg.webp",
                    price: "3180",
                    title:
                        "【送货上楼】中雀全自动超薄静音麻将机四口机家用棋牌室usb餐桌两用静音麻机麻 红色 【全国通用】44-136/144",
                    tag: "满减"
                },
                {
                    imgUrl:
                        "//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/35220/40/10475/150164/5ce512f1Ec79476b6/af560db45d8c7f34.jpg!q70.dpg.webp",
                    price: "129",
                    title: "秃秀 短袖T恤女2019夏季新款纯色V领打底衫女短袖薄款上衣百搭修身大码弹力冰丝T恤女 白色 M",
                    tag: "满减"
                },
                {
                    imgUrl:
                        "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/46699/30/2082/144527/5d0098baE04a4ec91/2919b492288b8c74.jpg!q70.dpg.webp",
                    price: "129",
                    title: "狄派 i7升八核台式机电脑主机 /双硬盘/GTX1060/游戏电竞3D渲染吃鸡组装电脑整机全套 主机+27寸曲面电竞显示器 套餐二（八核/1060独显/120G+1T双硬盘）",
                    tag: "满减"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/mobilecms/s372x372_jfs/t24637/118/445396911/158520/c66ea294/5b70e116Nc67a9be4.jpg!q70.dpg.webp",
                    price: "129",
                    title: "三只松鼠坚果炒货零食特产每日坚果炭烧腰果90g/袋",
                    tag: "满减"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/mobilecms/s372x372_jfs/t28360/72/1578803122/77679/103b9b13/5ce4b569N3ec4a275.jpg!q70.dpg.webp",
                    price: "129",
                    title: "199",
                    tag: "满减"
                }
            ]
        };
    },
    methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.recommend {
    margin-top: 10px;
    .title {
        height: 35px;
        background: url("//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png")
            no-repeat;
        background-size: 100%;
    }
    .recommonend-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5%;
        .recommonend-item {
            margin-bottom: 6px;
            background-color: #fff;
            width: 49%;
            p {
                box-sizing: border-box;
                height: 31px;
                font-size: 13px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-word;
                color: #232326;
                margin-top: 5px;
                line-height: 16px;
                margin-bottom: 3px;
                padding: 0 4px;
            }
            img {
                width: 100%;
            }
            .item-bottom {
                display: flex;
                position: relative;
                align-items: center;
                margin: 10px 0;
                .price {
                    color: #f23030;
                    display: inline-block;
                    padding: 0 5px 0 4px;
                    position: relative;
                    top: 1px;
                    height: 25px;
                    line-height: 25px;
                    font-size: 0;
                    i {
                        font-size: 13px;
                    }
                    span {
                        font-size: 16px;
                    }
                }
                .tag {
                    border: 1px solid #e4393c;
                    color: #e4393c;
                    font-size: 10px;
                    padding: 0 3px;
                    margin-right: 5px;
                }
                .look {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 8px;
                    text-align: center;
                    color: #686868;
                    font-size: 12px;
                    width: 49px;
                    height: 24px;
                    line-height: 25px;
                    &::after {
                        content: "";
                        width: 200%;
                        height: 200%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        border: 1px solid #bfbfbf;
                        border-radius: 4px;
                        -webkit-transform: scale(0.5, 0.5);
                        transform: scale(0.5, 0.5);
                        -webkit-transform-origin: top left;
                        transform-origin: top left;
                    }
                }
            }
        }
    }
}
</style>
