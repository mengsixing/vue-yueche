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
