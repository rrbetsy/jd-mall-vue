<template>
    <div class="category-searchbar">
        <div
            class="back"
            @click="back"
        >
            <div class="line"></div>
        </div>
        <div class="search">
            <div class="search-icon"></div>
            <!-- <nut-searchbar
                placeText="扫地机器人  智能"
                :hasSearchButton="false"
            ></nut-searchbar>    -->
        </div>
        <div class="dotted"></div>
        <div class="dotted"></div>
        <div class="dotted"></div>
    </div>
</template>

<script>
export default {
    name: 'CategorySearchbar',
    methods: {
        focusFun () {
            console.log('获取焦点操作！')
        },
        inputFun (value) {
            console.log(value)
            console.log('您正在输入...')
        },
        blurFun (value) {
            console.log(value)
            console.log('您已失去焦点！')
        },
        submitFun (value) {
            console.log(value)
            console.log('默认提交操作！')
        },
        back () {
            history.back()
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.category-searchbar {
    background: #fff;
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ececf0;
    .back {
        margin-left: 18px;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #252525;
        border-left: 2px solid #252525;
        opacity: 0.5;
        transform: rotate(45deg);
    }
    .search {
        position: relative;
        display: flex;
        align-items: center;
        font-family: "-apple-system,Helvetica,sans-serif";
        font-size: 12px;
        color: #666;
        margin: 0 10px 0 10px;
        border-radius: 15px;
        background: #f7f7fa;
        width: 329px;
        height: 30px;
        .nut-searchbar .search-input input {
            padding: 5px 0 !important;
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
            margin-left: 15px;
            position: relative;
            z-index: 1;
        }
    }
    .dotted {
        display: inline-block;
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background-color: #252525;
        opacity: 0.7;
        margin-right: 5px;
    }
}
</style>
