<template>
	<!--订单评价-->
	<div class="active" id="evaluate" role="contentinfo">
		<div class="evaluateBox">
			<div class="evaluate">
				<div class="uFace am-round am-center am-text-center">
					<i class="am-icon-user"></i>
					<img class="am-round" src="images/p2.jpg" alt="">
				</div>
				<div class="uInfo am-text-center">
					<div>王师傅</div>
					<span>川A29181G</span>
				</div>
				<div class="uStar am-text-center">
					<i class="am-icon-star"></i>
					<i class="am-icon-star"></i>
					<i class="am-icon-star"></i>
					<i class="am-icon-star"></i>
					<i class="am-icon-star-half-o"></i>
				</div>
				<div id="eval-form" >
					<div class="star am-center am-text-center">
						<i class="am-icon-star"></i>
						<i class="am-icon-star"></i>
						<i class="am-icon-star"></i>
						<i class="am-icon-star"></i>
						<i class="am-icon-star"></i>
						<input type="hidden" id="" name="" value="0">
						<!--星级-->
					</div>
					<div class="fTip am-text-center">感谢您的评价，司机会更加努力</div>
					<div class="checkbox am-center am-text-center">
						<div class="am-round active">服务好<input type="checkbox" id="" name="" checked></div>
						<div class="am-round">态度好<input type="checkbox" id="" name=""></div>
						<div class="am-round">开车稳<input type="checkbox" id="" name=""></div>
						<div class="am-round">车内整洁<input type="checkbox" id="" name=""></div>
					</div>
					<div class="fButton am-text-center"><button type="submit" class="am-btn am-btn-danger am-round">评价</button></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
/*
for：订单评价
date：2018-09
*/
/* CSS Document */
#evaluate {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 21;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
#evaluate.active {
  -webkit-transform: none;
  transform: none;
}
.evaluateBox {
  width: 100%;
  height: 100%;
  position: relative;
}
.evaluate {
  position: absolute;
  top: 50%;
  left: 3.5%;
  width: 93%;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: 0.03rem;
  display: table;
}
/*uFace*/
.uFace {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.22rem;
  background-color: #f1f1f1;
  font-size: 0;
  position: relative;
}
.uFace i {
  font-size: 0.25rem;
  color: #ddd;
  line-height: 0.4rem;
}
.uFace img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
/*uInfo*/
.uInfo {
  margin-top: 0.05rem;
  font-size: 0;
}
.uInfo div {
  font-size: 0.12rem;
  color: #757575;
  line-height: 0.22rem;
}
.uInfo span {
  font-size: 0.16rem;
  color: #333;
  line-height: 0.26rem;
}
/*uStar*/
.uStar {
  margin-top: 0.05rem;
  font-size: 0;
}
.uStar i {
  font-size: 0.23rem;
  color: #ff9815;
  margin: 0 0.03rem;
}
/*star*/
.star {
  width: 2.23rem;
  margin-top: 0.14rem;
  border-top: 1px solid #f1f1f1;
  font-size: 0;
}
.star i {
  font-size: 0.37rem;
  color: #ccc;
  margin: 0 0.04rem;
  cursor: pointer;
}
.star i.active {
  color: #ff9815;
}
/*fTip*/
.fTip {
  font-size: 0.14rem;
  color: #757575;
  line-height: 0.28rem;
  padding-bottom: 0.03rem;
}
/*checkbox*/
.checkbox {
  width: 80%;
  margin-top: 0.04rem;
  font-size: 0;
}
.checkbox div {
  font-size: 0.14rem;
  color: #333;
  line-height: 0.34rem;
  border: 1px solid #ddd;
  display: inline-block;
  padding: 0 0.18rem;
  -webkit-user-select: none;
  user-select: none;
  margin: 0.1rem 0.05rem 0;
  cursor: pointer;
}
.checkbox div.active {
  background-color: #5eb95e;
  border-color: #5eb95e;
  color: #fff;
}
.checkbox input {
  display: none;
}
/*fButton*/
.fButton {
  margin-top: 0.19rem;
  font-size: 0;
  padding-bottom: 0.3rem;
}
</style>