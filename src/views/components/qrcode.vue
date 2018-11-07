<template>
  <div id="qrcode" role="contentinfo">
    <div class="qrcodeBox">
      <div class="img am-round am-text-center"><img src="images/qrcode.jpg" alt=""></div>
    </div>
  </div>
</template>

<style scoped>
.qrcode {
	position: absolute;
	left: 50%;
	top: 0;
	width: .8rem;
	height: .8rem;
	background-color: #fff;
	box-shadow: 0 .02rem .02rem rgba(51,51,51,.1);
	margin: -.4rem 0 0 -.4rem;
	cursor: pointer;
}
.qrcode img {
	width: .54rem;
	height: .54rem;
	margin-top: .13rem;
}
/*
二维码
*/
#qrcode {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.5);
	-webkit-transform: translateY(100%);
	transform: translateY(100%);
	-webkit-transition: -webkit-transform .3s;
	transition: transform .3s;
}
#qrcode.active {
	-webkit-transform: none;
	transform: none;
}
.qrcodeCode {
	width: 100%;
	height: 100%;
	position: relative;
}
#qrcode .img {
	position: absolute;
	top: 50%;
	left: 50%;	
	width: 2.26rem;
	height: 2.26rem;
	background-color: #fff;
	margin: -1.8rem 0 0 -1.13rem;
}
#qrcode img {
	width: 1.56rem;
	height: 1.56rem;
	margin-top: .35rem;
	vertical-align: baseline;
}
</style>
