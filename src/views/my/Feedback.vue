<template>
    <div id="my-feedback">
        <!--头部-->
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">意见反馈</h1>
        </header>

        <!--主体-->
        <main role="main">
            <textarea id="textarea" class="box am-center" placeholder="请留下您的宝贵意见，我们一直努力为您更好的服务~"></textarea>
            <button id="submit_btn" type="submit" class="am-btn am-btn-block am-btn-danger am-center">提交</button>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        $('#submit_btn').click(function () {
            var content = $('#textarea').val();
            axios.get('/NcpCmsApi/doFeedback?personId=#(personId)&content=' + content, (result) => {
                alert(result.msg);
            });
        });
    }
}
</script>

<style scoped>
/*
for：会员-意见反馈
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
  margin-top: 0.67rem;
}
textarea {
  width: 93%;
  height: 1.8rem;
  box-shadow: 0.02rem 0.02rem 0.02rem rgba(51, 51, 51, 0.1),
    -0.02rem -0.02rem 0.02rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  background-color: #fff;
  font-size: 0.14rem;
  color: #333;
  line-height: 0.2rem;
  padding: 0.1rem;
  border-width: 0;
}
button {
  margin: 0.15rem 0;
}
.am-btn-danger {
  width: 93%;
  background-color: #eb6666;
  border-color: #eb6666;
  font-size: 0.16rem;
  color: #fff;
  line-height: 0.5rem;
  border-radius: 0.1rem;
}
.am-btn-danger:focus,
.am-btn-danger:hover {
  background-color: #d00;
  border-color: #d00;
}
</style>


