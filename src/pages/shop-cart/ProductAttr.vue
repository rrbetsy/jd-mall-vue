<template>
    <div :class="{'product-attr':true}">
        <div class="attr-datail">
            <ul>
                <li
                    v-for="(item, index) in ProductAttrs"
                    :key="index"
                >
                    <div class="img-price-config">
                        <img :src="itemData.imgUrl">
                        <div
                            class="close-icon"
                            @click="closeHander"
                        ></div>
                        <div class="price-config">
                            <div class="goods-price">
                                <i>￥</i>
                                <span class="price">{{itemData.price}}</span>
                                <i>{{item.priceDot}}</i>
                            </div>
                            <div class="config-detail">
                                <i>已选</i>
                                <span>极光蓝, 6GB+64GB, 官方标配 {{defVal}}个</span>
                                <p>重量：{{item.weight}}kg/件</p>
                            </div>
                        </div>
                    </div>
                    <div class="attr-warp">
                        <p class="kind">颜色</p>
                        <div class="items">
                            <div
                                v-for="color in item.color"
                                :key="color.index"
                                :class="colorCheck(color)"
                                @click="colorChecked(color)"
                            >
                                {{ color.name }}
                            </div>
                        </div>
                        <p class="kind">版本</p>
                        <div class="items">
                            <div
                                v-for="version in item.version"
                                :key="version.index"
                                :class="versionCheck(version)"
                                @click="versionChecked(version)"
                            >
                                {{ version.name }}
                            </div>
                        </div>
                        <p class="kind">版本</p>
                        <div class="items">
                            <div
                                v-for="config in item.config"
                                :key="config.index"
                                :class="configCheck(config)"
                                @click="configChecked(config)"
                            >
                                {{ config.name }}
                            </div>
                        </div>
                    </div>
                    <div class="count">
                        <p class="kind">数量</p>
                        <div class="stepper">
                            <nut-stepper
                                :value.sync="defVal"
                                :transition="false"
                                :simple="false"
                                :max="999"
                            ></nut-stepper>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="btn">确认</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'ProductAttr',
    props:{
        itemData:Object
    },
    data () {
        return {
            defVal: 1,
            activeColorChecked: 0,
            activeVersionChecked: 0,
            activeConfigChecked: 0,
            default: false,
            ProductAttrs: [
                {
                    imgUrl: '//img14.360buyimg.com/n1/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg',
                    price: '1248',
                    priceDot: '.00',
                    weight: '0.425',
                    color: [
                        {
                            name: '极光蓝',
                            id: 1
                        },
                        {
                            name: '星夜黑',
                            id: 2
                        },
                        {
                            name: '梦幻粉',
                            id: 3
                        },
                        {
                            name: '翡翠色',
                            id: 4
                        },
                    ],
                    version: [
                        {
                            name: '4GB+64GB',
                            id: 1
                        },
                        {
                            name: '6GB+64GB',
                            id: 2
                        },
                        {
                            name: '6GB+128GB',
                            id: 3
                        },
                        {
                            name: '4GB+128GB',
                            id: 4
                        }
                    ],
                    config: [
                        {
                            name: '官方标配',
                            id: 1
                        },
                        {
                            name: '优惠套装',
                            id: 2
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        closeHander () {
            console.log('close')
            this.$emit('close');
        },
        colorCheck (color) {
            return ['item', this.activeColorChecked === color.id ? 'checked' : '']
        },
        colorChecked (color) {
            // this.colorCheckedOrNot = !this.colorCheckedOrNot,
            if (this.activeColorChecked === color.id) {
                return this.activeColorChecked = !color.id;
            }
            this.activeColorChecked = color.id
        },
        versionCheck (version) {
            return ['item', this.activeVersionChecked === version.id ? 'checked' : '']
        },
        versionChecked (version) {
            // this.versionCheckedOrNot = !this.versionCheckedOrNot
            if (this.activeVersionChecked === version.id) {
                return this.activeVersionChecked = !version.id;
            }
            this.activeVersionChecked = version.id
        },
        configCheck (config) {
            return ['item', this.activeConfigChecked === config.id ? 'checked' : '']
        },
        configChecked (config) {
            // this.configCheckedOrNot = !this.configCheckedOrNot
            if (this.activeConfigChecked === config.id) {
                return this.activeConfigChecked = !config.id;
            }
            this.activeConfigChecked = config.id
        },
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import url("../utils/css/util.less");
.product-attr {
    // position: fixed;
    // width: 100vw;
    // height: 100vh;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // z-index: 110;
    // background-color: rgba(0, 0, 0, 0.7);
    .attr-datail {
        width: 100%;
        background: #fff;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        .img-price-config {
            display: flex;
            position: relative;
            img {
                position: absolute;
                left: 10px;
                top: -20px;
                border-radius: 7px;
                width: 90px;
                height: 90px;
                background-color: #fff;
            }
            .close-icon {
                position: absolute;
                top: 0;
                right: 0;
                width: 40px;
                height: 40px;
                &::after {
                    content: "";
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 17px;
                    height: 17px;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURQAAAGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZpi+OVwAAAASdFJOUwAQMeZYTPnqKpTFgDmtgcc/VPeDA0UAAADFSURBVCjPhZPZFoMgDERBhbBZbf7/YxspS3KszTxxvGCGITFmyMUE3kOKztxkM+AQZCvpxmDdsHEa8aY46Y4/tP85y85v+KBa38IThst/xkdlwv2wK221Lr0cUFZ9azGh8jWYs39z0zaEyokuMM0nFFxQTIZHTVxQKu5RcEHRC0x/bv4GBkGXIDgwa9UVCJ7mxZpnwSOP5euKeJmxjOLvs62gsFC1J1EeVGkHrZm0VtQaWRsD8v/iUb/sfcxcPK4RPPgIfgDgqSuBpouglgAAAABJRU5ErkJggg==)
                        no-repeat 1px 1px;
                    background-size: 15px;
                }
            }
            .price-config {
                height: 70px;
                line-height: 1.5;
                padding: 0 0 10px 110px;
                .goods-price {
                    display: flex;
                    align-items: baseline;
                    height: 40px;
                    line-height: 40px;
                    color: #e93b3d;
                    font-size: 10px;
                    font-weight: 700;
                    .price {
                        font-size: 16px;
                    }
                }
                .config-detail {
                    font-size: 12px;
                    color: #333;
                    & i {
                        color: #999;
                    }
                }
            }
        }
        .attr-warp {
            width: 100%;
            .kind {
                font-size: 12px;
                color: #999;
                margin: 0 10px;
                height: 33px;
                line-height: 33px;
            }
            .items {
                display: flex;
                font-size: 12px;
                overflow: hidden;
                margin-bottom: -5px;
                flex-wrap: wrap;
                .item {
                    padding: 0 15px;
                    overflow: hidden;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    margin-left: 10px;
                    margin-bottom: 10px;
                    border-radius: 3px;
                    color: #333;
                    background-color: #f3f2f8;
                    &.checked {
                        background-color: #e93b3d;
                        color: #fff;
                    }
                }
            }
        }
        .count {
            // width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px 0px 15px 10px;
            font-size: 12px;
            margin-bottom: 40px;
            .kind {
                color: #999;
                height: 33px;
                line-height: 33px;
            }
            .stepper {
                margin-right: 10px;
            }
        }
        .btn {
            width: 100%;
            font-size: 16px;
            background-color: #e93b3d;
            height: 50px;
            line-height: 50px;
            color: #fff;
            text-align: center;
            position: absolute;
            z-index: 101;
            bottom: 0;
        }
    }
}
</style>
