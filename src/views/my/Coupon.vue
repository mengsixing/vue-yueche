<template>
    <div id="my-coupon">

        <!--头部-->
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">我的优惠券</h1>
        </header>

        <!--主体-->
        <main role="main">
            <div class="box am-center">
                <ul role="list">
                    <li class="expired" role="listitem" v-for="item in list" v-bind:key="item">
                        <i class="icon-coupon-offer am-fl"></i>
                        <!--优惠券-->
                        <div class="content am-fl">
                            <div>{{item.couponName}}</div>
                            有效期至{{item.voucherDate}}
                        </div>
                        <div class="value am-fr"><span>{{item.couponValue}}</span>元</div>
                        <div class="am-cf"></div>
                    </li>

                </ul>
                <div class="am-cf"></div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: []

        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get('/NcpCmsApi/getMyCoupon?personId=#(personId)', (result) => {
                this.list = result.data;
            });
        }
    }
}
</script>

<style scoped>
/*
for：会员-我的优惠券
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
	margin: .37rem 0 .15rem;
}
.box {
	width: 93%;
}
ul {
	width: 100%;
	margin-bottom: .15rem;
}
li {
	width: 100%;
	height: .75rem;
	padding: 0 .13rem;	
	box-shadow: .02rem .02rem .02rem rgba(51,51,51,.1), -.02rem -.02rem .02rem rgba(51,51,51,.1);
	border-radius: .03rem;
	background-color: #fff;
	margin-top: .15rem;
	float: left;
}
li.expired {	/*已过期*/
	background: #fff url(../../assets/images/userCouponBg.jpg) no-repeat 68% bottom;
	background-size: auto .75rem;
}
li i {
	width: .4rem;
	font-size: .27rem;
	color: #d00;
	margin-top: .15rem;
}
li i.icon-coupon-offer:before {
	color: #d00;
}
li .content {
	font-size: .14rem;
	color: #757575;
	line-height: .23rem;
	margin-top: .15rem;
}
li .content div {
	color: #333;
}
li .value {
	font-size: .14rem;
	color: #333;
	margin-top: .15rem;
}
li .value span {
	font-size: .24rem;
	color: #d00;
	margin-right: .05rem;
}
</style>


