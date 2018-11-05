<template>
  <div>
    <com-page :title="'法律条款'">
      <div class="box am-center">
        <ul role="list">
          <li role="listitem">
            <a href="" title="">
              <div class="am-text-truncate am-fl">使用协议及隐私保护</div>
              <i class="am-icon-angle-right am-fr"></i>
            </a>
          </li>
          <li role="listitem">
            <a href="" title="">
              <div class="am-text-truncate am-fl">用户服务协议</div>
              <i class="am-icon-angle-right am-fr"></i>
            </a>
          </li>
          <li role="listitem">
            <a href="" title="">
              <div class="am-text-truncate am-fl">安全保障执行细则</div>
              <i class="am-icon-angle-right am-fr"></i>
            </a>
          </li>
        </ul>
        <div class="am-cf"></div>
      </div>
    </com-page>

  </div>
</template>
<script>
import ComPage from "./components/ComPage.vue";
export default {
  components: { ComPage }
};
</script>

<style scoped>
@import url("../assets/css/about.css");
.box {
  box-shadow: none;
  background: none;
}
</style>
