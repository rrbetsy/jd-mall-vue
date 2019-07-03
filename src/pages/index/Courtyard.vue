<template>
    <div class="courtyard">
        <div class="courtyard-img">
            <img src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/80458/35/2250/24646/5d09044cEb3c6b467/e1af43a6ea0cb5fa.png!q70.jpg.dpg">
        </div>
        <div class="two-cols">
            <div class="text-pic four-cols right-bottom">
                <div class="text"><span>美丽魔法</span></div>
                <p>打造美丽形象</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t28288/77/1022228350/163625/d04abf22/5c05ddc2N45c98974.jpg!q70.jpg.dpg">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/62408/26/3162/171594/5d16c899E5aa23110/f829476d54924f86.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols right-bottom left-bottom">
                <div class="text"><span>二手寻宝</span></div>
                <p>跳蚤市场逛一逛</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/81596/25/2581/96010/5d0dca3bE7b3220d4/db2e1e28a516eeff.jpg!q70.jpg.dpg">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/67140/38/2716/345139/5d108338Ea71b765b/48e679a38a03c71d.png!q70.jpg.dpg">
                </div>
            </div>
        </div>
        <div class="two-cols">
            <div class="text-pic four-cols">
                <div class="text">颜值神器</div>
                <p>颜值抢镜</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/61474/6/2677/244822/5d1035e0E7ee37362/b2587411c7ad7e32.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols left-bottom">
                <div class="text">母婴精选</div>
                <p>进口母婴</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/26362/17/2237/295208/5c1b30a2Eab7f4686/82fc96fe0ee4aeea.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols left-bottom">
                <div class="text">臻选好物</div>
                <p>家居好物</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t20131/133/1698027777/314436/312853bc/5b3352f2Nf507e1f4.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols left-bottom">
                <div class="text">我的大学</div>
                <p>升级新装备</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/15222/11/7161/326146/5c67d873E4c0c4c83/a5cf56e5f3b80532.jpg!q70.jpg.dpg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Courtyard'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.courtyard {
    box-sizing: border-box;
    overflow: hidden;
    .courtyard-img img {
        width: 100%;
    }
    .two-cols {
        background: #fff;
        display: flex;
        justify-content: center;
    }
    .text-pic {
        padding-top: 7px;
        padding-bottom: 5px;
        width: 194px;
        height: 132px;
        &.four-cols {
            padding-left: 11px;
            &.right-bottom {
                border-bottom: 0.5px solid rgb(241, 237, 237);
            }
            &.left-bottom {
                border-left: 0.5px solid rgb(241, 237, 237);
            }
        }
    }
    .text {
        width: 100%;
        font-size: 17px;
        font-weight: 700;
        line-height: 25px;
        overflow: hidden;
        span {
            background: linear-gradient(90deg, #45caff, #1471fb);
            -webkit-background-clip: text;
            color: transparent;
            font-weight: 700;
            font-size: 17.5px;
            line-height: 25px;
            display: inline-block;
            max-width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    p {
        margin: 0;
        font-size: 13px;
        font-family: "PingFangSC-Light,PingFang-Medium,PingFangSC-";
        color: #666771;
        height: 16px;
        line-height: 18px;
        &.left {
            margin-left: 11px;
        }
    }
    .pictures {
        display: flex;
        height: 71px;
        img {
            text-align: center;
            width: 66px;
            height: 66px;
            margin-top: 6px;
            margin-right: 8px;
            margin-left: 8px;
        }
    }
}
</style>
