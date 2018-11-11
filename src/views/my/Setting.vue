<template>
  <div>
    <com-page :title="'个人设置'">
      <div class="uFace am-center am-round am-text-center">
        <!-- <i class="am-icon-user"></i> -->
        <img class="am-round" src="../../assets/images/p1.jpg" alt="">
      </div>
      <div class="tel am-text-center">158******58</div>
      <div class="box am-center">
        <ul role="list">
          <li role="listitem">
            <a href="" title="">
              <div class="icon am-text-center am-fl">
                <i class="am-icon-user"></i>
              </div>
              <div class="name am-fl">头像</div>
              <div class="tip am-fr">
                <div class="am-fl">去修改</div>
                <i class="am-icon-angle-right"></i>
              </div>
            </a>
          </li>
          <li role="listitem">
            <a href="setting_setModify.html" title="">
              <div class="icon am-text-center am-fl">
                <i class="am-icon-mobile"></i>
              </div>
              <div class="name am-fl">手机号</div>
              <div class="tip am-fr">
                <div class="am-fl">去修改</div>
                <i class="am-icon-angle-right"></i>
              </div>
            </a>
          </li>
          <li role="listitem">
            <a href="" title="">
              <div class="icon am-text-center am-fl">
                <i class="am-icon-lock"></i>
              </div>
              <div class="name am-fl">密码</div>
              <div class="tip am-fr">
                <div class="am-fl">去修改</div>
                <i class="am-icon-angle-right"></i>
              </div>
            </a>
          </li>
        </ul>
        <ul role="list">
          <li role="listitem">
            <a href="" title="">
              <div class="icon am-text-center am-fl">
                <i class="icon-authentication-u"></i>
              </div>
              <div class="name am-fl">实名认证</div>
              <div class="tip am-fr">
                <div class="am-fl">去认证</div>
                <i class="am-icon-angle-right"></i>
              </div>
            </a>
          </li>
          <li role="listitem">
            <a href="" title="">
              <div class="icon am-text-center am-fl">
                <i class="am-icon-wechat"></i>
              </div>
              <div class="name am-fl">微信认证</div>
              <div class="tip am-fr">
                <div class="am-fl">去绑定</div>
                <i class="am-icon-angle-right"></i>
              </div>
            </a>
          </li>
        </ul>
        <ul role="list">
          <li role="listitem">
            <a href="" title="">
              <div class="icon am-text-center am-fl">
                <i class="icon-cancel"></i>
              </div>
              <div class="name am-fl">永久注销帐号</div>
              <div class="tip am-fr">
                <div class="am-fl">去注销</div>
                <i class="am-icon-angle-right"></i>
              </div>
            </a>
          </li>
        </ul>
        <div class="am-cf"></div>
      </div>
      <div class="button am-center"><a class="am-btn am-btn-block am-btn-danger" href="" title="">退出登录</a></div>
    </com-page>

  </div>
</template>
<script>
import ComPage from "../components/ComPage.vue";
export default {
  components: { ComPage }
};
</script>

<style scoped>
/* @import url("../../assets/css/details.css"); */
/*
for：会员-个人设置
date：2018-09
*/
/* CSS Document */
header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
}

/*
主体
*/
main {
	width: 100%;
	margin-top: .67rem;
}
/*uFace*/
.uFace {
	width: .86rem;
	height: .86rem;
	background-color: #ddd;
	position: relative;
}
.uFace i {
	font-size: .6rem;
	color: #ccc;
	line-height: .86rem;
}
.uFace img {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
}
/*tel*/
.tel {
	font-size: .2rem;
	color: #333;
}
/*box*/
.box {
	width: 93%;
}
ul {
	width: 100%;
	box-shadow: .02rem .02rem .02rem rgba(51,51,51,.1), -.02rem -.02rem .02rem rgba(51,51,51,.1);
	border-radius: .03rem;
	background-color: #fff;
	display: table;
	margin-top: .15rem;
}
li {
	width: 100%;
	height: .56rem;
	overflow: hidden;
	padding: 0 .2rem;
	font-size: 0;
	border-bottom: 1px solid #f1f1f1;
	float: left;
}
li:last-child {
	border-bottom-width: 0;
}
li i {
	font-size: .3rem;
	color: #ccc;
	line-height: .56rem;
}
li .icon {
	width: .26rem;
	margin: 0;	
}
.am-icon-mobile {
	font-size: .4rem;
}
.am-icon-lock {
	font-size: .32rem;
}
.icon-authentication-u {
	position: relative;
	/* top: .13rem; */
}
.am-icon-wechat {
	font-size: .25rem;
}
.icon-cancel {
	font-size: .25rem;
	position: relative;
	/* top: .15rem; */
}
li .name {
	font-size: .16rem;
	color: #333;
	line-height: .56rem;
	margin-left: .2rem;
}
li .tip div {
	font-size: .14rem;
	color: #757575;
	line-height: .56rem;
	margin-right: .2rem;
	position: relative;
}
li .tip i {
	line-height: .52rem;
}
/*button*/
.button {
	width: 93%;
	padding: .15rem 0;
}
.am-btn-danger {
	background-color: #eb6666;
	border-color: #eb6666;
	font-size: .16rem;
	color: #fff;
	line-height: .5rem;
	border-radius: .1rem;
}
.am-btn-danger:focus,
.am-btn-danger:hover {
	background-color: #d00;
	border-color: #d00;
}
</style>
