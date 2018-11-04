<template>
    <div id="my-recruit">
        <!--头部-->
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">优程司机招募</h1>
        </header>

        <!--主体-->
        <main role="main">
            <div class="box am-center">
                <div class="pic am-text-center">
                    <img class="img" src="images/recruit.jpg" alt="">
                    <div class="fixed"></div>
                    <img class="logo" src="images/recruitLogo.png" alt="">
                    <h1 class="am-center">欢迎加入优程</h1>
                    <h2>工作自由，收入稳定</h2>
                </div>
                <div class="tip am-text-center">入驻优程司机驾驶人<br>请拨打客服电话</div>
                <div class="tel am-text-center">客服电话：<strong>400-211-2344</strong></div>
            </div>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*
for：会员-优程司机招募
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
.box {
	width: 93%;
	box-shadow: .02rem .02rem .02rem rgba(51,51,51,.1), -.02rem -.02rem .02rem rgba(51,51,51,.1);
	border-radius: .03rem;
	background-color: #fff;
	display: table;
	margin-bottom: .15rem;
}
.pic {
	font-size: 0;
	position: relative;
}
.img,
.fixed {
	width: 100%;
	border-top-left-radius: .03rem;
	border-top-right-radius: .03rem;
}
.fixed {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	height: 100%;
	background-color: rgba(0,0,0,.5);
}
.logo {
	position: absolute;
	top: .11rem;
	left: .13rem;
	z-index: 2;
	width: 1.1rem;
}
.tip {
	font-size: .14rem;
	color: #757575;
	line-height: .23rem;
	margin-top: .15rem;
}
.pic h1,
.pic h2 {
	position: absolute;
	left: 0;
	z-index: 2;
	width: 100%;
	font-weight: normal;
}
.pic h1 {
	top: 35%;
	font-size: .21rem;
	color: #fff;
}
.pic h2 {
	top: 52%;
	font-size: .14rem;
	color: rgba(255,255,255,.5);
}
.tel {
	font-size: .14rem;
	color: #333;
	margin-top: .1rem;
	margin-bottom: .15rem;
}
.tel strong {
	font-size: .25rem;
	color: #d00;
}
</style>


