<template>
  <!--头部-->
  <header id="header" role="heading">
    <a class="back" href="javascript:history.go(-1);" title="">
      <i class="am-icon-angle-left"></i>
      <span>返回</span>
    </a>
    <h1 class="am-text-center">{{title}}</h1>
  </header>
</template>
<script>
export default {
  props: ["title"],
  methods: {}
};
</script>

<style scoped src="../../assets/css/header.css">
</style>
<style scoped>
#header {
  position: relative;
}
#header .back {
  font-size: 0;
  line-height: 0.52rem;
}
#header a i {
  vertical-align: middle;
  margin-right: 0.05rem;
}
#header a span {
  top:0;
  display:inline-block;
  vertical-align: middle;
  font-size: 0.14rem;
}
</style>

