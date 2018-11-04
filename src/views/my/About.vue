<template>
    <div id="my-about">
        <!--头部-->
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">关于我们</h1>
        </header>

        <!--主体-->
        <main role="main">
            <div class="box am-center">
                <ul role="list">
                    <li role="listitem">
                        <a href="" title="">
                            <div class="am-text-truncate am-fl">公司简介</div>
                            <i class="am-icon-angle-right am-fr"></i>
                        </a>
                    </li>
                    <li role="listitem">
                        <a href="" title="">
                            <div class="am-text-truncate am-fl">联系我们</div>
                            <i class="am-icon-angle-right am-fr"></i>
                        </a>
                    </li>
                </ul>
                <ul role="list">
                    <li role="listitem">
                        <a href="" title="">
                            <div class="am-text-truncate am-fl">法律条款</div>
                            <i class="am-icon-angle-right am-fr"></i>
                        </a>
                    </li>
                    <li role="listitem">
                        <a href="" title="">
                            <div class="am-text-truncate am-fl">版本介绍</div>
                            <i class="am-icon-angle-right am-fr"></i>
                        </a>
                    </li>
                </ul>
                <div class="am-cf"></div>
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
for：会员-关于我们、法律条款
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
}
ul {
	width: 100%;
	box-shadow: .02rem .02rem .02rem rgba(51,51,51,.1), -.02rem -.02rem .02rem rgba(51,51,51,.1);
	border-radius: .03rem;
	background-color: #fff;
	display: table;
	margin-bottom: .15rem;
}
li {
	width: 100%;
	padding: 0 .2rem;
	font-size: .16rem;
	line-height: .5rem;
	border-bottom: 1px solid #f1f1f1;
	float: left;
}
li:last-child {
	border-bottom-width: 0;
}
li div {
	width: 3.2rem;
	color: #333;
}
li i {
	font-size: .3rem;
	color: #ccc;
}
</style>


