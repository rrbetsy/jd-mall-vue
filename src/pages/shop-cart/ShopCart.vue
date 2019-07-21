<template>
    <div class="shop-cart">
        <AddressBar></AddressBar>
        <ProductInfo></ProductInfo>
        <SettlementBar></SettlementBar>
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
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import url("../utils/css/util.less");
</style>
