<template>
  <div class="nav-bottom">
    <nut-buttongroup type="menu">
        <nut-button type="light" icon="action" color="#000">首页</nut-button>
        <nut-button type="light" icon="more" color="#000">分类</nut-button>
        <nut-button type="light" icon="search" color="#000">拼购</nut-button>
        <nut-badge value="2" top="0.5rem" right="2rem"><nut-button type="light" icon="trolley" color="#f00">购物车</nut-button></nut-badge>
        <nut-button type="light" icon="tick" color="#000">未登录</nut-button>
      </nut-buttongroup>
  </div>
</template>

<script>
export default {
  name: 'NavBottom',
  data () {
    return {}
  },
  methods: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
