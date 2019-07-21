<template>
    <div class="address-bar">
        <nut-navbar @on-click-back="back">购物车</nut-navbar>
        <div class="address-bar">
            <a
                href="javascript:;"
                class="address"
            >
                <em>上海市宇宙中心</em>
            </a>
            <span class="btn edit-btn">编辑商品</span>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "AddressBar",
    methods: {
        back: function () {
            history.back();
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import url("../utils/css/util.less");
.address-bar {
    // overflow: hidden;
    position: relative;
    padding: 0 10px;
    // height: 45px;
    margin-bottom: -1px;
    line-height: 45px;
    background: #fff;
    .retina-border(border-top, 0, #bfbfbf);
    .address {
        position: relative;
        display: inline-block;
        color: #999;
        max-width: 30%;
        margin-right: 20px;
        white-space: nowrap;
        overflow: visible;
        font-size: 14px;
        em {
            max-width: 100%;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: top;
        }
        &:before {
            content: "";
            display: inline-block;
            vertical-align: middle;
            width: 13px;
            height: 15px;
            margin: -2px 5px 0 0;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeBAMAAADA9RPrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURczMzP///+Pj4/Hx8dHR0djY2Pv7+8xyln0AAAC2SURBVBjTXZA7D8IwDIRPpWW/VO3cCsFMGJg7MbeA2CPB//8L9SN9CC/Op5x9tkGyPb/L510eBFl3kCgvTgaCUSkgx0GpWwiRqFfARDRWM7gUV0lVbFVfEZp6eq+EUXRJrFQbMaiC7hpVUCzU//2NZsvW69ThQ/7UlfhqOt0Gq0fYJjsSVuDR73eQIcBmoUL3q7eF9pdIRs16CKXcdXKijoMqZbI+j3zdPP9KwXtkks+4o/CyxBlIfRbMzw4VCAAAAABJRU5ErkJggg==);
            background-size: 13px !important;
        }
    }
    .btn {
        position: relative;
        float: right;
        padding-left: 10px;
        font-size: 14px;
        color: #e93b3d;
    }
}
</style>
