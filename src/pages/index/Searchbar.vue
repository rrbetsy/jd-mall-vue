<template>
    <div :class="['searchbar',isInTop?'':'fixed']">
        <div
            class="to-category"
            @click="toCategory"
        >
            <div class="line"></div>
        </div>
        <div class="search">
            <div class="search-text">JD</div>
            <div
                class="search-icon"
                @click="clickHandle"
            ></div>
            <input
                placeholder="无线鼠标"
                @click="clickHandle"
            >
        </div>
        <div
            class="login"
            @click="goLogin"
        >登录</div>
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
    props: {
        isInTop: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        goLogin () {
            location.hash = '#/login'
        },
        clickHandle () {

        },
        toCategory () {
            location.hash = '#/category'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.white {
    background-color: #e93b3d;
}
.searchbar {
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 45px;
    &.fixed {
        background: #e4393c;
    }
    .to-category {
        margin-left: 15px;
        width: 20px;
        height: 14px;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        .line {
            margin-top: 6px;
            border-top: 2px solid white;
        }
    }
    .search {
        position: relative;
        display: flex;
        align-items: center;
        font-family: "-apple-system,Helvetica,sans-serif";
        font-size: 12px;
        color: #666;
        margin: 0 9px 0 16px;
        border-radius: 15px;
        background: #fff;
        width: 74%;
        height: 30px;
        .nut-searchbar .search-input input {
            padding: 5px 0 !important;
        }
        .search-text {
            width: 20px;
            // height: 15px;
            background-size: 20px 15px;
            margin-left: 15px;
            position: relative;
            z-index: 1;
            font-size: 17px;
            font-weight: 550;
            font-family: "-apple-system,Helvetica,sans-serif";
            color: #e4393c;
        }
        .search-icon {
            margin-left: 5px;
            display: block;
            width: 18px;
            height: 15px;
            background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline)
                no-repeat;
            background-position: -80px 0;
            background-size: 200px;
            margin-left: 10px;
            position: relative;
            z-index: 1;
        }
        input {
            margin-left: 10px;
        }
    }
    .login {
        display: inline-block;
        margin: 10px 0;
        color: #fff;
        font-size: 14px;
    }
}
</style>
