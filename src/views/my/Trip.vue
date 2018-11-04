<template>
	<div id="my-trip">
		<!--头部-->
		<header id="header" role="heading">
			<a class="back" href="javascript:history.go(-1);" title="">
				<i class="am-icon-angle-left"></i>
				<span>返回</span>
			</a>
			<h1 class="am-text-center">我的行程</h1>
		</header>

		<!--导航-->
		<nav role="nav">
			<ul class="am-text-center" role="list">
				<li v-for="item in tabItems" v-bind:key="item.text" :class="{active:item.isSelected}" @click="selectTab(item)">{{item.text}}</li>
				<!-- <li class="active" role="listitem">全部</li>
				<li role="listitem">已完成</li>
				<li role="listitem">未完成</li> -->
			</ul>
		</nav>

		<!--主体-->
		<main role="main">
			<div class="box am-center">
				<ul role="list">
					<li class="done" role="listitem" v-bind:key="item.orderId" v-for="item in myTrips">
						<!-- "orderMobile": "234234",
							"startAdd": "成都站",
							"orderCode": "2342",
							"endAdd": "宜宾市",
							"orderTime": "2018-06-14 17:28:05",
							"orderId": "936c702e-35c7-439a-b0ba-77554c4c4b6a",
							"useCarType": "use_car_type_bc",
							"personName": "海盗船长" -->
						<!--已完成-->
						<div class="am-fl">
							<div class="time">{{item.orderTime}}</div>
							<div class="line">
								<div class="am-fl"><span class="am-round"></span>{{item.startAdd}}</div>
								<i class="icon-line-switch am-fl"></i>
								<div class="am-fl"><span class="danger am-round"></span>{{item.endAdd}}</div>
								<div class="am-cf"></div>
							</div>
						</div>
						<div class="category am-fr">城际快车</div>
						<div class="am-cf"></div>
					</li>

					<li class="none" role="listitem">
						<!--未完成-->
						<div class="am-fl">
							<div class="time">2018-09-06 16:35</div>
							<div class="line">
								<div class="am-fl"><span class="am-round"></span>成都</div>
								<i class="icon-line-switch am-fl"></i>
								<div class="am-fl"><span class="danger am-round"></span>自贡</div>
								<div class="am-cf"></div>
							</div>
						</div>
						<div class="category am-fr">城际快车</div>
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
			tabItems: [{ text: '全部', isSelected: true }, { text: '已完成', isSelected: false }, { text: '未完成', isSelected: false }],
			myTrips: [],
		}
	},
	created() {
		this.getData();
	},
	methods: {
		getData() {
			axios.get('/NcpCmsApi/getMyOrder?pageSize=50&pageNo=1&orderType=1&personId=o0SZL031k2IDKgC3of8BWMWL637k', (result) => {
				this.myTrips = result.data.list;
			});
		},
		selectTab(item) {
			this.tabItems.forEach(item => {
				item.isSelected = false;
			});
			item.isSelected = true;
		}
	}
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
}

nav {
  position: fixed;
  top: 0.52rem;
  left: 0;
  z-index: 11;
  width: 100%;
  padding: 0.15rem 0;
  z-index: 11;
}
nav ul {
  width: 100%;
  font-size: 0;
  -webkit-user-select: none;
  user-select: none;
}
nav li {
  display: inline-block;
  font-size: 0.14rem;
  color: #d00;
  line-height: 0.27rem;
  border: 1px solid #d00;
  padding: 0 0.17rem;
  cursor: pointer;
}
nav li:first-child {
  border-right-width: 0;
  border-top-left-radius: 0.03rem;
  border-bottom-left-radius: 0.03rem;
}
nav li:last-child {
  border-left-width: 0;
  border-top-right-radius: 0.03rem;
  border-bottom-right-radius: 0.03rem;
}
nav li.active {
  background-color: #d00;
  color: #fff;
}

/*
主体
*/
main {
  width: 100%;
  margin-top: 1.11rem;
}
.box {
  width: 93%;
}
main ul {
  width: 100%;
  display: table;
}
main li {
  width: 100%;
  height: 0.9rem;
  overflow: hidden;
  padding: 0 0.2rem;
  /*font-size: .16rem;
	line-height: .5rem;*/
  box-shadow: 0.02rem 0.02rem 0.02rem rgba(51, 51, 51, 0.1),
    -0.02rem -0.02rem 0.02rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  background-color: #fff;
  margin-bottom: 0.15rem;
  background: #fff no-repeat bottom right;
  background-size: auto 0.9rem;
  font-size: 0;
  float: left;
}
main li.done {
  background-image: url(../../assets/images/tripDone.jpg);
}
main li.none {
  background-image: url(../../assets/images/tripNone.jpg);
}
.time,
.category {
  font-size: 0.14rem;
  line-height: 0.29rem;
  padding-top: 0.1rem;
}
.time {
  color: #333;
}
.category {
  color: #757575;
}
.line {
  padding-top: 0.05rem;
}
.line div {
  font-size: 0.16rem;
  color: #333;
  line-height: 0.35rem;
  padding-left: 0.15rem;
  position: relative;
}
.line i {
  font-size: 0.2rem;
  color: #ddd;
  line-height: 0.35rem;
  margin: 0 0.15rem;
}
.line div span {
  position: absolute;
  top: 0.125rem;
  left: 0;
  width: 0.1rem;
  height: 0.1rem;
  background-color: #5eb95e;
}
.line div .danger {
  background-color: #d00;
}
</style>


