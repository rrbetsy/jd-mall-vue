<template>
    <div class="courtyard">
        <div class="courtyard-img">
            <img src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/39486/28/9224/23804/5d09048aE5127de40/eec779757a34e94d.png!q70.jpg.dpg">
        </div>
        <div class="two-cols">
            <div class="text-pic four-cols right-bottom">
                <div class="text" style="background: linear-gradient(90deg, #FF2A2A,#F139D2);">免息星球</div>
                <p>白条免息购</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols right-bottom left-bottom">
                <div class="text" style="background: linear-gradient(90deg, #FE8537,#F02B2B);">闪购</div>
                <p>品牌特卖</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/n1/s150x150_jfs/t1/31939/26/15210/430210/5cc178d5E772548d0/ec09ba8ca763827c.png!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols right-bottom left-bottom">
                <div class="text" style="background: linear-gradient(90deg, #FF765C,#FF23B3);">品牌秒杀</div>
                <p>低价抢大牌</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/n1/s150x150_jfs/t1/39301/38/5944/432882/5ccfd851Eadae798a/6a68e72271adab2a.png!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols right-bottom left-bottom">
                <div class="text" style="background: linear-gradient(90deg, #FF2A00,#FF00AF);">京东直播</div>
                <p>好货即可买</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/76908/18/801/66093/5cef9622E297944e8/8b62a5e086c78d1c.png!q70.jpg.dpg">
                </div>
            </div>
        </div>
        <div class="two-cols">
            <div class="text-pic four-cols">
                <div class="text"  style="background: linear-gradient(90deg, #D400FF,#FF320A);">排行榜</div>
                <p>热销推荐</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/56939/39/1210/59272/5cefa52dE2f70588a/3174a20e743edd49.png!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols left-bottom">
                <div class="text" style="background: linear-gradient(90deg, #00C2AB,#3E94FF);">拍拍好物</div>
                <p>ipone 5折起</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/76945/35/760/26244/5cef9705E501242ee/c56b89c0946438ef.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols left-bottom">
                <div class="text" style="background: linear-gradient(90deg, #FF765C,#FF23B3);">新品首发</div>
                <p>华为P30</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/16097/29/12819/62040/5c9add4cE1b45f5ea/e48679e904c29d30.jpg!q70.jpg.dpg">
                </div>
            </div>
            <div class="text-pic four-cols left-bottom">
                <div class="text" style="background: linear-gradient(90deg, #2AD396,#85BB1F);">发现好货</div>
                <p>教你买买买</p>
                <div class="pictures">
                    <img src="//m.360buyimg.com/mobilecms/s150x150_jfs/t1/50174/30/1230/9784/5cef98bfE318f8d24/4720dc4079dd568b.jpg!q70.jpg.dpg">
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
    margin-right: 10px;
    margin-left: 10px;
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
                border-left: 0.5px solid rgb(241, 237, 237);
            }
            &.left-bottom {
                border-left: 0.5px solid rgb(241, 237, 237);
            }
        }
    }
    .text {
        font-size: 17px;
        font-weight: 700;
        line-height: 25px;
        overflow: hidden;
        letter-spacing: .58px;
        background: linear-gradient(90deg, #ff2a2a, #f139d2);
        -webkit-background-clip: text !important;
        color: transparent;
    }
    p {
        margin: 0;
        font-size: 13px;
        font-family: "PingFangSC-Light,PingFang-Medium,PingFangSC-";
        color: #666771;
        height: 16px;
        line-height: 18px;
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
