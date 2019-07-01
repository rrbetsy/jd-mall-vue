<template>
  <div class="nut-navbar">
    <nut-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-more="more">
      NavBar3
      <a slot="back-icon">返回</a>
    </nut-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    back() {
      alert("header头部， 点击返回");
    },
    title() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    },
    close() {
      alert("header头部， 点击关闭");
    },
    edit() {
      alert("header头部， 点击编辑");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.nut-navbar{

}
</style>
