<template>
    <div id="login-message">
        <!--头部-->
        <header class="am-center" role="heading">
            <a href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
        </header>
        <!--主体-->
        <main role="main">
            <h1 class="am-text-center">短信验证码登录</h1>
            <form class="am-center" method="post" action="login_message_verification.html" role="form">
                <div class="am-form-group">
                    <label class="am-fl" for="username">手机号归属地</label>
                    <div class="tip am-fl">中国大陆</div>
                    <span class="am-text-center am-fr" id="userStatus" data-status="0">
                        <i class="am-icon-angle-right"></i>
                    </span>
                    <div class="am-cf"></div>
                </div>
                <div class="am-form-group">
                    <label class="am-fl" for="tel">+86</label>
                    <input class="am-fr" type="tel" id="tel" name="" maxlength="11" placeholder="请输入您的手机号" autocomplete="off">
                    <div class="am-cf"></div>
                </div>
                <p><button type="submit" class="am-btn am-btn-block am-btn-danger">获取验证码</button></p>
            </form>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*
for：短信验证码登录
date：2018-08
*/
/* CSS Document */
/*头部*/
header {
	width: 93%;
	padding-top: .09rem;
}
header a {
	font-size: .14rem;
	line-height: .3rem;
}
header a,
header a:focus,
header a:hover {
	color: #333;
}
header a i {
	font-size: .3rem;
	line-height: .3rem;
}
header a i,
header a:focus i,
header a:hover i {
	color: #ccc;
}
header a span {
	position: relative;
	top: -.05rem;
}
/*主体*/
main {
	width: 100%;
	margin-top: .32rem;
}
h1 {
	font-size: .3rem;
	color: #333;
	line-height: .58rem;
}
form {
	width: 93%;
	margin-top: .39rem;
}
.am-form-group {
	height: .47rem;
	overflow: hidden;
	font-size: .14rem;
	color: #333;
	line-height: .47rem;
	border-bottom: 1px solid #f1f1f1;
	margin-bottom: .13rem;
}
.am-form-group label {
	/*width: 23%;*/
	width: .88rem;
}
.am-form-group .tip,
.am-form-group input {
	/*width: 67%;*/
	width: calc(100% - 1.25rem);
	border-width: 0;
	font-size: .14rem;
	color: #333;
	line-height: .47rem;
}
.am-form-group .tip {
	text-align: right;
}
.am-form-group span {
	width: .24rem;
}
.am-form-group span i {
	font-size: .3rem;
	color: #ccc;
}
.am-form-group:nth-child(2) label {
	/*width: 20%;*/
	width: .77rem;
}
.am-form-group:nth-child(2) input {
	/*width: 80%;*/
	width: calc(100% - .77rem);
	font-size: .19rem;
}
.am-form-group:nth-child(2) input::placeholder {
	font-size: .14rem;
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


