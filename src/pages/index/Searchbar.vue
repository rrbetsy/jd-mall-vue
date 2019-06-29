<template>
    <div class="nut-navbar">
        <nut-searchbar
            placeText="ERP/姓名/邮箱"
            :hasIcon="true"
            :hasTextButton="true"
            customClass="search_demo"
        ></nut-searchbar>
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
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
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
