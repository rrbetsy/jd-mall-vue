<template>
    <div class="nav-bottom">
        <!-- <nut-buttongroup type="menu">
            <nut-button
                type="light"
                icon="action"
                color="#000"
            >首页</nut-button>
            <nut-button
                type="light"
                icon="more"
                color="#000"
            >分类</nut-button>
            <nut-button
                type="light"
                icon="search"
                color="#000"
            >拼购</nut-button>
            <nut-badge
                value="2"
                top="0.5rem"
                right="2rem"
            >
                <nut-button
                    type="light"
                    icon="trolley"
                    color="#f00"
                >购物车</nut-button>
            </nut-badge>
            <nut-button
                type="light"
                icon="tick"
                color="#000"
            >未登录</nut-button>
        </nut-buttongroup> -->
        <div class="images">
            <router-link to="/"><img src="https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png"></router-link>
            <router-link to="./category"><img src="https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png">
            </router-link>
            <a href="https://wqs.jd.com/pingou/index.shtml?sceneval=2&fromM=1&ptag=138097.1.17"><img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/75691/7/2686/3970/5d106e75Ee420adf7/cb4579470ee8ca22.png"></a>
            <router-link to="./shopCart"><img src="https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png"></router-link>
            <router-link to="./myInfo"> <img src="https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBottom'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.nav-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    .images {
        display: flex;
        justify-content: center;
        a {
            display: block;
            text-align: center;
            width: 82px;
            height: 55px;
        }
        img {
            width: 66px;
            height: 51px;
        }
    }
}
</style>
