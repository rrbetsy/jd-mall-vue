<template>
    <div class="my-info">
        <nut-navbar @on-click-back="back">我的京东</nut-navbar>
        <div class="header">
            <div class="my-header shadow">
                <div class="user-info">
                    <div class="avatar">
                        <div class="avatar-info"></div>
                    </div>
                    <div class="personal-wrap">
                        <div class="name-wrap">
                            <span class="name">{{userName}}</span>
                            <span class="my-header-v4-name-edit"></span>
                            <div class="vip v5"></div>
                        </div>
                        <div class="pin-wrap">用户名：{{userName}}</div>
                    </div>
                </div>
                <div class="hor-tips">
                    <div class="notice">京享值5770</div>
                    <div class="notice goto-arrow">小白信用96.5</div>
                </div>
                <div class="plus-black-wrap">
                    <div class="inner">
                        <div class="title">
                            <div class="plus-title">享最高10倍京豆返利</div>
                            <div class="plus-subtitle">立即查看</div>
                        </div>
                        <div class="tip">
                            京东PLUS会员
                            <span class="keyword">省钱 · 省心 · 尊贵</span>
                        </div>
                    </div>
                </div>
                <div class="account-wrap">
                    <div class="account-wrap-content">
                        <span></span>账号管理
                    </div>
                </div>
            </div>
        </div>
        <div class="my-order">
            <div class="icon-wrap">
                <i class="i-unpay"></i>
                <span>待付款</span>
            </div>
            <div class="icon-wrap">
                <i class="i-unrecieve"></i>
                <span>待收货</span>
            </div>
            <div class="icon-wrap">
                <i class="i-consult"></i>
                <span>退换/售后</span>
            </div>
            <div class="icon-wrap">
                <i class="i-orders"></i>
                <span>全部订单</span>
            </div>
        </div>
        <div class="my-order">
            <div class="icon-wrap">
                <i class="store-val">28</i>
                <span>商品收藏</span>
            </div>
            <div class="icon-wrap">
                <i class="store-val">28</i>
                <span>店铺收藏</span>
            </div>
            <div class="icon-wrap">
                <i class="store-val">0</i>
                <span>我的足迹</span>
            </div>
        </div>
        <div class="tools">
            <div class="icon-wrap">
                <i class="i-book"></i>
                <span>我的预约</span>
            </div>
            <div class="icon-wrap">
                <i class="i-train"></i>
                <span>京东火车票</span>
            </div>
            <div class="icon-wrap">
                <i class="i-app"></i>
                <span>应用推荐</span>
            </div>
            <div class="icon-wrap">
                <i class="i-shop"></i>
                <span>京东通信营业厅</span>
            </div>
            <div class="icon-wrap">
                <i class="i-fuli"></i>
                <span>用户福利</span>
            </div>
            <div class="icon-wrap">
                <i class="i-air"></i>
                <span>京东机票</span>
            </div>
            <div class="icon-wrap">
                <i class="i-hotel"></i>
                <span>京东酒店</span>
            </div>
        </div>
    </div>
</template>

<script>
const userName = localStorage.getItem('jd0user') || '未登录用户'
export default {
    name: 'MyInfo',
    data () {
        return {
            userName: userName
        }
    },
    methods: {
        back () {
            history.back()
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.my-info {
    .header {
        background-color: #f7f7f7;
        .my-header {
            position: relative;
            overflow: hidden;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 300px 20px;
            border-bottom-left-radius: 300px 20px;
            background: linear-gradient(90deg, #eb3c3c, #ff7459);
            min-height: 110px;
        }
        .shadow {
            box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
        }
        .user-info {
            padding: 25px 15px 10px;
            display: flex;
            position: relative;
            .avatar {
                width: 60px;
                height: 60px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
                border: 1px solid hsla(0, 0%, 100%, 0.4);
                border-radius: 60px;
                .avatar-info {
                    background: url("http://storage.360buyimg.com/i.imageUpload/6a696568776131343239333337363532353633_mid.jpg")
                        no-repeat;
                    background-size: 100%;
                    background-position: center center;
                    width: 100%;
                    height: 100%;
                }
            }
            .personal-wrap {
                flex: 1;
                overflow: hidden;
                margin-left: 15px;
                .name-wrap {
                    max-width: 220px;
                    font-size: 14px;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    .name {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .my-header-v4-name-edit {
                        flex-shrink: 0;
                        margin: 0 0 0 4px;
                        width: 12px;
                        height: 12px;
                        vertical-align: middle;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwB3a5m4Veb3H6QDji7WgAgChXPEAAAApElEQVQoz3WSSwLDIAhEMUHBtkm4/2mL+Ld1VvGN4gQByGKHgehCxzCKI0lVHCzfsYp85YcsOsp++ZGd4anOaccp3RMnXgpHPbDw4jC4MQ8+apzp0wF2/v4EdYwLQugcQJ3MJQANXJ26pGYYf7WIVEstXEthzzlwvTzH5YVrXPvBa+VpZ1rfmmfisTTR39fUXWvitu37h9o/bRoG+TsMbXxCH58vmgwXoPcjyaAAAAAASUVORK5CYII=)
                            0 0/12px;
                        background-size: 100%;
                    }
                    .vip {
                        flex-shrink: 0;
                        position: relative;
                        margin: 0 5px 0 13px;
                        padding: 0 6px 0 10px;
                        height: 14px;
                        line-height: 14px;
                        vertical-align: middle;
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                        background-color: #c8483f;
                        font-size: 12px;
                        color: #fff;
                        &:before {
                            position: absolute;
                            width: 20px;
                            height: 20px;
                            left: -10px;
                            top: 48%;
                            margin-top: -10px;
                            background: url(//wq.360buyimg.com/fd/base/img/my/icon_vip.png)
                                no-repeat;
                            content: "";
                            background-size: cover;
                        }
                        &.v5:before {
                            background-position: -80px 0;
                        }
                        &.v5:after {
                            content: "\94BB\77F3";
                        }
                    }
                }
                .pin-wrap {
                    display: block;
                    margin-top: 4px;
                    max-width: 185px;
                    font-size: 12px;
                    color: hsla(0, 0%, 100%, 0.7);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .hor-tips {
            position: absolute;
            top: 74px;
            padding-left: 92px;
            .notice {
                display: inline-block;
                font-size: 10px;
                color: #fff;
                background: #c8483f;
                border-radius: 10px;
                text-align: center;
                height: 15px;
                margin-right: 8px;
                line-height: 16px;
                padding: 0 8px;
                max-width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .goto-arrow {
                position: relative;
                padding-right: 14px !important;
                &:after {
                    display: block;
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-top: 1px solid hsla(0, 0%, 100%, 0.7);
                    border-left: 1px solid hsla(0, 0%, 100%, 0.7);
                    transform-origin: 50%;
                    transform: rotate(135deg);
                    position: absolute;
                    right: 6px;
                    top: 5px;
                }
            }
        }
        .plus-black-wrap {
            width: 100%;
            //   height: 37px;
            box-sizing: border-box;
            padding: 0 20px;
            color: #ffe678;
            font-size: 12px;
            .inner {
                width: 100%;
                box-sizing: border-box;
                padding: 7px 10px 10px;
                background-repeat: no-repeat;
                background-image: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png);
                background-position-x: 0px;
                background-position-y: 0px;
                background-size: 100% 67px;
                .title {
                    display: flex;
                    justify-content: space-between;
                    .plus-title {
                        position: relative;
                        padding-left: 78px;
                        flex: 1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        &:before {
                            position: absolute;
                            content: "";
                            width: 57px;
                            height: 12px;
                            left: 0;
                            top: 3px;
                            background-image: url(https://img11.360buyimg.com/jdphoto/s113x21-jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png);
                            background-position-x: 50%;
                            background-position-y: center;
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                        }
                        &:after {
                            position: absolute;
                            content: "";
                            width: 1px;
                            height: 7px;
                            background: #ffe678;
                            left: 67px;
                            top: 5px;
                        }
                    }
                    .plus-subtitle {
                        position: relative;
                        padding-right: 10px;
                        flex-shrink: 0;
                        height: 18px;
                        line-height: 18px;
                        &::after {
                            content: "";
                            display: inline-block;
                            vertical-align: middle;
                            width: 6px;
                            height: 10px;
                            background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'><path fill='%23FFE678' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/></svg>");
                            background-repeat: no-repeat;
                            background-size: 100%;
                            position: absolute;
                            right: 0;
                            top: 50%;
                            margin-top: -6px;
                        }
                    }
                }
                .tip {
                    margin-top: 10px;
                    .keyword {
                        margin-left: 10px;
                    }
                }
            }
        }
        .account-wrap {
            position: absolute;
            right: 15px;
            top: 0;
            height: 40px;
            line-height: 40px;
            overflow: hidden;
            .account-wrap-content {
                color: rgba(76, 0, 0, 0.7);
                font-size: 12px;
                padding-left: 15px;
                position: relative;
                height: 40px;
                span {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    position: relative;
                    top: 2px;
                    right: 2px;
                    background: url(https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png)
                        no-repeat;
                    background-size: 100%;
                    background-position: center center;
                }
            }
        }
    }
    .my-order {
        margin: 15px 0;
        background-color: #fff;
        display: flex;
        padding-bottom: 10px;
        .icon-wrap {
            width: 25%;
            flex: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            i {
                display: block;
                height: 40px;
                width: 40px;
                &.i-unpay {
                    background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png)
                        50% / auto 20px no-repeat;
                }
                &.i-unrecieve {
                    background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png)
                        50% / auto 20px no-repeat;
                }
                &.i-consult {
                    background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png)
                        50% / auto 20px no-repeat;
                }
                &.i-orders {
                    background: url(https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png)
                        50% / auto 20px no-repeat;
                }
            }
            span {
                color: #666;
                font-size: 12px;
            }
        }
    }
    .store-val {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        position: relative;
        padding-top: 15px;
        box-sizing: border-box;
    }
    .tools {
        margin: 15px 0;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 10px;
        .icon-wrap {
            width: 25%;
            padding: 10px 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            i {
                display: block;
                height: 20px;
                width: 20px;
                margin-bottom: 10px;
                background-position: center center;
                background-size: 100%;
                background-repeat: no-repeat;

                &.i-book {
                    background-image: url("https://img14.360buyimg.com/jdphoto/jfs/t1/24988/22/12030/2316/5c94d6d4E7cdcf995/c8fe8e84d89685f7.png!q70.webp");
                }
                &.i-train {
                    background-image: url("//img10.360buyimg.com/jdphoto/jfs/t12931/150/1327543095/1276/e9e67341/5a1e9ee2Nb5baf153.png!q70.webp");
                }
                &.i-shop {
                    background-image: url("//img12.360buyimg.com/jdphoto/jfs/t7711/100/3983515381/1466/1049e625/5a1e9f28N2460c691.png!q70.webp");
                }
                &.i-app {
                    background-image: url("//img12.360buyimg.com/jdphoto/jfs/t13612/121/1346421356/1355/9014e74f/5a1e9f1cNab886864.png!q70.webp");
                }
                &.i-fuli {
                    background-image: url("//img12.360buyimg.com/jdphoto/jfs/t12514/60/1318835455/1723/d6ae70f5/5a1e9e39Ndc5e9285.png!q70.webp");
                }
                &.i-air {
                    background-image: url("//img12.360buyimg.com/jdphoto/jfs/t18940/299/476632277/2164/4453d9e4/5a813897N7c80dea2.png!q70.webp");
                }
                &.i-hotel {
                    background-image: url("//img12.360buyimg.com/jdphoto/jfs/t16390/157/2010422417/341/bb4c68c4/5a8138f2Nfd5de7b7.png!q70.webp");
                }
            }
            span {
                color: #666;
                font-size: 12px;
            }
        }
    }
}
</style>
