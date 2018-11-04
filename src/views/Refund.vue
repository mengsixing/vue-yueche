<template>
    <div id="refund">
        <!--头部-->
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">退款</h1>
        </header>

        <!--主体-->
        <main id="cancel" role="main">
            <form name="" method="post" acction="">
                <div class="box am-center">
                    <label for="">退款理由</label>
                    <div class="select">
                        <input type="text" id="reason" name="" placeholder="请选择退款理由" autocomplete="off" readonly>
                        <span class="am-text-center am-fr" data-status="0">
                            <!--状态：0表示未开启下拉，1表示开启下拉-->
                            <i class="am-icon-angle-down"></i>
                            <!--开启状态样式：am-icon-angle-up-->
                        </span>
                        <ul role="list">
                            <li data-value="1" role="listitem">司机与平台派送司机不符</li>
                            <li data-value="2" role="listitem">司机与平台派送司机不符2</li>
                            <li data-value="3" role="listitem">司机与平台派送司机不符3</li>
                            <li data-value="4" role="listitem">司机与平台派送司机不符4</li>
                            <li data-value="5" role="listitem">司机与平台派送司机不符5</li>
                            <li data-value="6" role="listitem">司机与平台派送司机不符6</li>
                            <li data-value="7" role="listitem">司机与平台派送司机不符7</li>
                        </ul>
                        <input type="hidden" name="" value="0">
                        <!--退款理由ID-->
                    </div>
                    <label for="">补充说明</label>
                    <textarea name=""></textarea>
                    <label for="">照片</label>
                    <div class="photo">
                        <div class="img am-fl"><img src="images/p1.jpg" alt=""></div>
                        <div class="img am-fl"><img src="images/p2.jpg" alt=""></div>
                        <div class="plus am-fl am-text-center">
                            <i class="icon-plus"></i>
                            <input type="file" name="">
                        </div>
                        <div class="am-cf"></div>
                    </div>
                </div>
                <div class="button am-center">
                    <button type="button" class="am-btn am-btn-block am-btn-danger">提交退款申请</button>
                    <!--type的值为submit，为显示弹窗效果改为button-->
                </div>
            </form>
        </main>

        <!--提示-->
        <div id="tips" role="contentinfo">
            <div class="tipBox">
                <div class="tips am-text-center">
                    <header role="heading">请等待</header>
                    <main role="main">您的退款需求已经提交成功，<br>我们会在48小时内审核并反馈！</main>
                    <footer role="contentinfo">完成</footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.cancelJs();
    },
    methods: {
        cancelJs() {
            //下拉列表
            //切换：下拉显示
            $('#reason, .select span').click(function () {
                var statusVal = $('.select span').attr('data-status');
                if (statusVal == 0) {
                    $('.select').find('i').removeClass().addClass('am-icon-angle-up');
                    $('.select').children('span').attr('data-status', 1);
                } else {
                    $('.select').find('i').removeClass().addClass('am-icon-angle-down');
                    $('.select').children('span').attr('data-status', 0);
                }
                $('.select').children('ul').slideToggle(300);	//切换显示列表
            });
            //点击其它：关闭下拉
            $(document).click(function (e) {
                var _con = $('.select');
                if (!_con.is(e.target) && _con.has(e.target).length === 0) {
                    $('.select span').children('i').removeClass().addClass('am-icon-angle-down');
                    $('.select ul').hide();
                }
            });
            //点击列表项
            $('.select li').click(function () {
                $('.select span').children('i').removeClass().addClass('am-icon-angle-down');
                $('.select ul').hide();
                $('#reason').val($(this).text());
                $(this).parent().next().val($(this).attr('data-value'));
            });

            //提交成功后
            //提示
            $('.button button').click(function () {
                $('#tips').addClass('active');
            });
            //关闭提示框
            $('.tips footer').click(function () {
                $('#tips').removeClass('active');
            });
        }
    }
}
</script>

<style scoped>
/*
for：退款
date：2018-09
*/
/* CSS Document */
html,
body {
  height: 100%;
  overflow: hidden;
}
body {
  position: relative;
}

/*
主体
*/
#cancel {
  width: 100%;
  margin-top: 0.15rem;
  height: calc(100% - 0.15rem);
}
.box {
  width: 93%;
  padding: 0 0.2rem 0.33rem;
  box-shadow: 0.02rem 0.02rem 0.02rem rgba(51, 51, 51, 0.1),
    -0.02rem -0.02rem 0.02rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  background-color: #fff;
}
/*label*/
label {
  width: 100%;
  font-size: 0.16rem;
  color: #757575;
  line-height: 0.4rem;
  margin-top: 0.18rem;
}
label:first-child {
  margin-top: 0.14rem;
}
/*select*/
.select {
  width: 100%;
  position: relative;
  cursor: pointer;
}
.select input {
  width: 100%;
  padding: 0 0.1rem;
  border: 1px solid #ddd;
  font-size: 0.16rem;
  color: #333;
  line-height: 0.4rem;
  -webkit-user-select: none;
  user-select: none;
}
.select span {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 0.36rem;
}
.select span i {
  font-size: 0.3rem;
  color: #ccc;
  line-height: 0.4rem;
}
.select ul {
  position: absolute;
  top: 0.39rem;
  left: 0;
  width: 100%;
  max-height: 2.4rem;
  overflow-y: scroll;
  border: 1px solid #ddd;
  background-color: #fff;
  display: none;
}
.select li {
  width: 100%;
  padding: 0 0.1rem;
  height: 0.4rem;
  overflow: hidden;
  font-size: 0.14rem;
  color: #333;
  line-height: 0.4rem;
  border-bottom: 1px solid #f1f1f1;
}
.select li:last-child {
  border-bottom-width: 0;
}
.select li:hover,
.select li:active {
  color: #d00;
}
/*textarea*/
textarea {
  width: 100%;
  padding: 0 0.1rem;
  height: 1.5rem;
  font-size: 0.16rem;
  color: #333;
  line-height: 0.3rem;
  border: 1px solid #ddd;
  overflow-y: auto;
}
/*photo*/
.photo .img,
.photo .plus {
  width: 0.5rem;
  height: 0.5rem;
  border: 1px solid #ddd;
}
.photo .img {
  margin-right: 0.1rem;
}
.photo .img img {
  width: 100%;
  height: 100%;
}
.photo .plus {
  position: relative;
}
.photo .plus i {
  font-size: 0.4rem;
  color: #ddd;
  line-height: 0.5rem;
}
.photo .plus input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  -webkit-opacity: 0;
  opacity: 0;
  cursor: pointer;
}
/*button*/
.button {
  width: 93%;
  margin-top: 0.15rem;
}
.am-btn-danger {
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

/*
提示
*/
#tips {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
#tips.active {
  -webkit-transform: none;
  transform: none;
}
.tipBox {
  width: 100%;
  height: 100%;
  position: relative;
}
.tips {
  position: absolute;
  top: 50%;
  left: 22%;
  width: 56%;
  background-color: #fff;
  margin-top: -0.8rem;
  border-radius: 0.05rem;
}
.tips header,
.tips main,
.tips footer {
  width: 100%;
}
.tips header {
  font-size: 0.16rem;
  color: #333;
  line-height: 0.5rem;
  border-bottom: 1px solid #f1f1f1;
  display: table;
}
.tips main {
  font-size: 0.12rem;
  color: #757575;
  line-height: 0.2rem;
  padding: 0.13rem 0 0.16rem;
}
.tips footer {
  font-size: 0.16rem;
  color: #d00;
  line-height: 0.39rem;
  border-top: 1px solid #f1f1f1;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
</style>


