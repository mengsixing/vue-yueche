<template>
    <div id="login-wechat">
        <!--头部-->
        <header class="am-center" role="heading">
            <a href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
        </header>
        <!--主体-->
        <main role="main">
            <div class="face am-center am-text-center">
                <i class="am-icon-user"></i>
                <img src="images/p1.jpg" alt="">
                <!--没有自定义头像请屏蔽这句-->
            </div>
            <h1 class="am-text-center">158******58</h1>
            <div class="tip am-text-center">此用户已在微信上登录，可直接登录优程约车</div>
            <p class="am-center"><button type="submit" class="am-btn am-btn-block am-btn-danger">立即登录</button></p>
        </main>
    </div>
</template>

<script>
export default {
    mounted() {
        this.verification();
        $('form input:first').focus();
    },
    methods: {
        verification() {
            $('form input').bind('input propertychange', function () {
                if ($(this).val()) {
                    $(this).addClass('active').next().focus();
                } else {
                    $(this).removeClass('active').prev().focus();
                }
            });
        }
    }
}
</script>

<style scoped>
/*
for：微信登录
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
	margin-top: .33rem;
}
.face {
	width: 1rem;
	height: 1rem;
	background-color: #f1f1f1;
	border-radius: .1rem;
	margin-bottom: .22rem;
	position: relative;
}
.face i {
	font-size: .7rem;
	color: #ccc;
	line-height: 1rem;
}
.face img {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	border-radius: .1rem;
}
h1 {
	font-size: .24rem;
	color: #333;
	line-height: .44rem;
}
.tip {
	font-size: .14rem;
	color: #757575;
	line-height: .33rem;
	margin-bottom: .44rem;
}
p {
	width: 93%;
	margin-top: 0;
	margin-bottom: 0;
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


