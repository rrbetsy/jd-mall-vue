<template>
    <div class="product-info">
        <ul>
            <li
                v-for="(item, index) in productItems"
                :key="index"
            >
                <div class="product">
                    <div
                        :class="['icon-select', !item.selected ? '' : 'selected']"
                        @click="selectItem(index)"
                    ></div>
                    <img :src="item.imgUrl">
                    <div class="goods">
                        <span class="name">{{item.name}}</span>
                        <nut-cell
                            :isLink="true"
                            @click.native="switchActionSheet(`show${index}`)"
                        >
                            <p
                                slot="title"
                                class="attr"
                            >{{item.attr}}</p>
                        </nut-cell>
                        <nut-actionsheet
                            :is-visible="actionSheetShow[`show${index}`]"
                            @close="switchActionSheet(`show${index}`)"
                        >
                            <div
                                slot="custom"
                                class="custom-wrap"
                            >
                                <ProductAttr
                                    :itemData="item"
                                    @close="switchActionSheet(`show${index}`)"
                                ></ProductAttr>
                            </div>
                        </nut-actionsheet>
                        <div class="price-stepper ">
                            <div class="goods-price">
                                <i class="price-icon">￥</i>
                                <span class="price">{{parseInt(item.price)}}.</span>
                                <i class="price-icon">{{getPriceDot(item.price)}}</i>
                            </div>
                            <div class="stepper">
                                <nut-stepper
                                    :value.sync="item.selectNum"
                                    :transition="true"
                                    :simple="false"
                                    :min="0"
                                    :max="999"
                                    @change="(val)=>numChange(index,val)"
                                ></nut-stepper>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable */
import '../utils/css/reset.less'
import axios from 'axios'
import ProductAttr from './ProductAttr'
// import {mymixin} from './mixin'
export default {
    name: 'ProductInfo',
    components: {
        ProductAttr
    },
    props: {
        totalPrice: Number,
        totalNum: Number,
        selectAllItem: Boolean
    },
    data () {
        return {
            actionSheetShow: {
            },
            showDetail: false,
            productItems: [],
            selectItems: {
                // 所有选中的内容
            }
        }
    },
    watch: {
        selectAllItem: function (newVal) {
            // 全选或者全部取消
            // console.log("selectAllItem==", newVal);
            const newItems = this.productItems.map(function (item, index) {
                const { selected, selectNum } = item;
                item.selectNum = selected == false && selectNum == 0 ? 1 : selectNum
                item.selected = newVal
                return item
            });
            this.productItems = newItems;
            this.calculator();
        }
    },
    methods: {
        selectItem (index) {
            const { selected, selectNum } = this.productItems[index]
            const newItem = Object.assign({},
                this.productItems[index],
                {
                    selected: !selected,
                    selectNum: selected == false && selectNum == 0 ? 1 : selectNum
                });
            this.$set(this.productItems, index, newItem)
            this.calculator()
        },
        numChange (index, val) {
            const newItem = Object.assign({},
                this.productItems[index],
                {
                    selected: val >= 1
                });
            this.$set(this.productItems, index, newItem)
            this.calculator()
        },
        switchActionSheet (key) {
            // console.log(key)
            this.$set(this.actionSheetShow, key, !this.actionSheetShow[`${key}`])
        },
        getPriceDot (price) {
            return parseFloat(price).toFixed(2).split('.')[1];
        },
        initCalculator () {

        },
        calculator () {
            let totalPrice = 0;
            let totalNum = 0;
            //获取总价和总的数量
            this.productItems.forEach(function (item, index) {
                if (item.selected === true) {
                    totalNum = parseInt(item.selectNum) + totalNum;
                    totalPrice = totalPrice + item.price * item.selectNum
                }
            }
            )
            // console.log("totalPrice==", totalPrice)
            // console.log("totalNum==", totalNum)
            this.$emit('update:totalPrice', totalPrice)
            this.$emit('update:totalNum', totalNum)
        }
    },
    async created () {
        try {
            const { data } = await axios.get('http://localhost:3000/shop-cart/all');
            // const {data} = await axios.get('http://localhost:3000/shop-cart/all');
            if (data.code === 200) {
                this.productItems = data.data;
            }
            console.log('cartData', data)
        } catch (e) {
            console.log(e)
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import url("../utils/css/util.less");
.product-info {
    width: 100%;
    background: #fff;
    padding-bottom: 30px;
    .product {
        display: flex;
        width: 100%;
        position: relative;
        padding-bottom: 20px;
    }
    .icon-select {
        height: 20px;
        width: 20px;
        margin-left: 15px;
        margin-right: 10px;
        position: relative;
        top: 30px;
        &::after {
            position: absolute;
            left: 0px;
            top: 0px;
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTJqampmZmZmZmZubm5ubm6KiopeXl5mZmZmZmaKiopmZmVmXLrgAAAALdFJOUwBD8KiAagslwtYWexMYygAAAOVJREFUKM9jYICAUotJms3hDMiAy3M3GExZgBBjc9qtHFiWLmq0WyUBLii02xDCEN6tCBNj2d0IY0rsdoBqtt6KMCl6M8QA5k0CCEFGbQMw7a2O7JCiLWC53QLIghBu0lYUJzNEq4F0N6AKcgD1c2kLoAoyblrAwLKZAQ1YOzBwbkQXlJ7AUK2ALsi0nSHaAF2QeSuDdQC6IOtmhm4BdEHGHQyzC9AF2XcyaCegC7Jtwi6IVTtWi7A6CavjsXoTa4BgDTqsgYw1OrBHHNYoxpoYsCcbrAkMa1LEnmixJ2+sGQE9ywAARBBNCX4Tud8AAAAASUVORK5CYII=);
            background-size: 20px;
        }
        &.selected::after {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAANlBMVEUAAADpPD3tO0HrPD7qPD7qOz7qPD3pOz7qPD3qPD3pPD7rPD/pQkLzRkbqQEDpPUH/VVXpOz3Rbw31AAAAEXRSTlMA6iuA81DZ07+rpXIjFgw7CVCvuuwAAADZSURBVDjLjdVbrsMgDATQoThAeYTO/jd7fy6ioU7wfCXKEY4lMLimlpyCSEi5VNym+civRN9UdnrhEvHnrzsclbhjdZ438Rf2efM27w9mptOkUndT/eAm/x2dbgfdOQsbijfZQ2lzwf2S8eHf+ugzAvXBvdDHc0V5ci83XgqyyTEjmRwTgskxQEyOAjE5yix9dHfvGGYzfXzUHBPysozumFG4SNWxoC4t6I4ViFepuzi22ZSqo183rutdc9LMR8F+uOzH1T4A9iPFPqTsY88+SO2j2T7szdfHHy1xS+1j0wOxAAAAAElFTkSuQmCC);
        }
    }
    img {
        width: 75px;
        height: 75px;
    }
    .goods {
        margin-left: 10px;
        overflow: hidden;
        flex: 1;
        .name {
            position: relative;
            font-size: 14px;
            line-height: 1.5;
            padding-right: 10px;
            margin-bottom: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .attr {
            box-sizing: border-box;
            width: 237px;
            height: 25px;
            line-height: 25px;
            // display: inline-flex;
            // align-items: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            background-color: #fff;
            font-size: 14px;
            color: #666;
            margin: 8px 10px 10px 0;
            // padding: 1px 25px 1px 5px;
            padding-right: 25px;
            padding-left: 5px;
            border: 1px solid #e5e5e5;
            border-radius: 2px;
        }
        .price-stepper {
            position: relative;
            display: flex;
            align-items: center;
            margin: 5px 10px 0 0;
            .goods-price {
                width: 100%;
                display: flex;
                align-items: baseline;
                .price-icon {
                    line-height: 16px;
                    color: #e93b3d;
                    font-size: 10px;
                }
                .price {
                    color: #e93b3d;
                    font-size: 16px;
                }
            }
            // .stepper {
            // }
        }
    }
}
</style>
