<template>
  <div>
    <com-page :title="'修改手机号'">
      <div class="box am-center">
        <div class="icon am-fl">
          <i class="am-icon-mobile"></i>
        </div>
        <input type="tel" class="am-fl" id="" name="" value="15892236958" placeholder="请输入手机号码" autocomplete="off" maxlength="11">
        <i class="am-icon-angle-right am-fr"></i>
        <div class="am-fr"></div>
      </div>
      <div class="button am-center"><button class="am-btn am-btn-block am-btn-danger" type="submit">确认修改</button></div>
    </com-page>

  </div>
</template>
<script>
import ComPage from "../components/ComPage.vue";
export default {
  components: { ComPage }
};
</script>

<style scoped src="../../assets/css/setModify.css">
/* @import url("../../assets/css/setModify.css"); */
</style>
