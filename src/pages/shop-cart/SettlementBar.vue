<template>
    <div class="settlement-bar">
        <div
            :class="selectIcon"
            @click="selected"
        >全选</div>
        <div class="total-settlement">
            <div class="total-price">
                <p class="total">总计：</p>
                <div class="price">
                    ￥<span>{{parseFloat(totalPrice).toFixed(2)}}</span>
                </div>
            </div>
            <div :class="['to-settlement',totalNum>0?'products-selected':'']">
                去结算(<span>{{totalNum}}</span>件)
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'SettlementBar',
    props: {
        totalPrice: Number,
        totalNum: Number,
        selectAllItem:Boolean,
    },
    data () {
        return {
            price: this.totalPrice,
            number: this.totalNum,
            default: false
        }
    },
    computed: {
        selectIcon () {
            return ['icon-select', !this.selectAllItem ? '' : 'selected']
        }
    },
    methods: {
        selected () {
            this.$emit('update:selectAllItem', !this.selectAllItem)
            // this.$emit('update:selectAll',!this.selectedOrNot)
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import url("../utils/css/util.less");
.settlement-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background: hsla(0, 0%, 100%, 0.95);
    &::before {
        content: "";
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ddd;
        height: 1px;
        left: 0;
        right: 0;
        top: 0;
    }
    .icon-select {
        width: 40px;
        padding-top: 32px;
        font-size: 10px;
        text-align: center;
        height: 15px;
        color: #999;
        &::after {
            position: absolute;
            left: 0;
            top: 10%;
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            margin-left: 10px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTJqampmZmZmZmZubm5ubm6KiopeXl5mZmZmZmaKiopmZmVmXLrgAAAALdFJOUwBD8KiAagslwtYWexMYygAAAOVJREFUKM9jYICAUotJms3hDMiAy3M3GExZgBBjc9qtHFiWLmq0WyUBLii02xDCEN6tCBNj2d0IY0rsdoBqtt6KMCl6M8QA5k0CCEFGbQMw7a2O7JCiLWC53QLIghBu0lYUJzNEq4F0N6AKcgD1c2kLoAoyblrAwLKZAQ1YOzBwbkQXlJ7AUK2ALsi0nSHaAF2QeSuDdQC6IOtmhm4BdEHGHQyzC9AF2XcyaCegC7Jtwi6IVTtWi7A6CavjsXoTa4BgDTqsgYw1OrBHHNYoxpoYsCcbrAkMa1LEnmixJ2+sGQE9ywAARBBNCX4Tud8AAAAASUVORK5CYII=);
            background-size: 20px;
        }
        &.selected::after {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAANlBMVEUAAADpPD3tO0HrPD7qPD7qOz7qPD3pOz7qPD3qPD3pPD7rPD/pQkLzRkbqQEDpPUH/VVXpOz3Rbw31AAAAEXRSTlMA6iuA81DZ07+rpXIjFgw7CVCvuuwAAADZSURBVDjLjdVbrsMgDATQoThAeYTO/jd7fy6ioU7wfCXKEY4lMLimlpyCSEi5VNym+civRN9UdnrhEvHnrzsclbhjdZ438Rf2efM27w9mptOkUndT/eAm/x2dbgfdOQsbijfZQ2lzwf2S8eHf+ugzAvXBvdDHc0V5ci83XgqyyTEjmRwTgskxQEyOAjE5yix9dHfvGGYzfXzUHBPysozumFG4SNWxoC4t6I4ViFepuzi22ZSqo183rutdc9LMR8F+uOzH1T4A9iPFPqTsY88+SO2j2T7szdfHHy1xS+1j0wOxAAAAAElFTkSuQmCC);
        }
    }
    .total-settlement {
        display: flex;
        .total-price {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 16px;
            color: #333;
            .price {
                color: #e93b3d;
            }
        }
        .to-settlement {
            line-height: 50px;
            text-align: center;
            width: 110px;
            background: #d7d7d7;
            color: #fff;
            margin-left: 10px;
            font-size: 16px;
            font-weight: 700;
            &.products-selected {
                background: #e4393c;
            }
        }
    }
}
</style>
