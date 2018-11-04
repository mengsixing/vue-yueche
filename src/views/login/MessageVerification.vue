<template>
    <div id="message_verification">
        <!--头部-->
        <header class="am-center" role="heading">
            <a href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
        </header>
        <!--主体-->
        <main role="main">
            <h1 class="am-text-center">请输入验证码</h1>
            <p class="am-center am-text-center">我们已向<span>15892236958</span>发送验证码短信，请查看短信并输入验证码</p>
            <form class="am-text-center" method="post" action="">
                <input class="am-text-center" type="tel" id="" name="" maxlength="1" autocomplete="off">
                <input class="am-text-center" type="tel" id="" name="" maxlength="1" autocomplete="off">
                <input class="am-text-center" type="tel" id="" name="" maxlength="1" autocomplete="off">
                <input class="am-text-center" type="tel" id="" name="" maxlength="1" autocomplete="off">
            </form>
            <div class="am-text-center">接收短信大约需要60秒</div>
        </main>
    </div>
</template>

<script>
export default {
    mounted() {
        this.verification();
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
for：请输入验证码
date：2018-08
*/
/* CSS Document */
/*头部*/
header {
  width: 93%;
  padding-top: 0.09rem;
}
header a {
  font-size: 0.14rem;
  line-height: 0.3rem;
}
header a,
header a:focus,
header a:hover {
  color: #333;
}
header a i {
  font-size: 0.3rem;
  line-height: 0.3rem;
}
header a i,
header a:focus i,
header a:hover i {
  color: #ccc;
}
header a span {
  position: relative;
  top: -0.05rem;
}
/*主体*/
main {
  width: 100%;
  margin-top: 0.32rem;
}
h1 {
  font-size: 0.3rem;
  color: #333;
  line-height: 0.58rem;
}
p {
  width: 73%;
  font-size: 0.14rem;
  color: #757575;
  line-height: 1.5em;
  margin: 0;
}
p span {
  font-size: 0.19rem;
  color: #333;
  margin: 0 0.3em;
}
form {
  margin-top: 0.24rem;
}
form input {
  width: 0.57rem;
  margin: 0 0.05rem;
  font-size: 0.4rem;
  color: #333;
  line-height: 1.01rem;
  border: 0;
  border-bottom: 0.02rem solid #f1f1f1;
}
form input:hover,
form input:focus,
form input.active {
  border-color: #d00;
}
div {
  font-size: 0.14rem;
  color: #757575;
  line-height: 0.23rem;
  margin-top: 0.48rem;
}
</style>


