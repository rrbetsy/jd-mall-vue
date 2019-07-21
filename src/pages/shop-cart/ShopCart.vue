<template>
    <div class="shop-cart">
        <AddressBar></AddressBar>
        <ProductInfo
            :totalPrice.sync="totalPrice"
            :totalNum.sync="totalNum"
            :selectAllItem="selectAllItem"
        ></ProductInfo>
        <SettlementBar
            :totalPrice="totalPrice"
            :totalNum="totalNum"
            :selectAllItem.sync="selectAllItem"
        ></SettlementBar>
    </div>
</template>

<script>
/* eslint-disable */
import '../utils/css/reset.less'
import AddressBar from './AddressBar'
import ProductInfo from './ProductInfo'
import SettlementBar from './SettlementBar'
export default {
    name: "ShopCart",
    components: {
        AddressBar,
        ProductInfo,
        SettlementBar
    },
    data: function () {
        return {
            totalPrice: 0,
            totalNum: 0,
            selectAllItem: false
        }
    },
    // watch:{
    //     selectAllItem:function(val){
    //         debugger
    //     }
    // }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import url("../utils/css/util.less");
</style>
