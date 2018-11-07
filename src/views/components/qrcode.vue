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
</style>
