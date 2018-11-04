<template>
    <div id="login">
        <!--头部-->
        <header class="am-center" role="heading">
            <a class="am-fr" href="javascript:;" title="" data-am-modal="{target:'#actions'}">更多</a>
        </header>
        <!--主体-->
        <main role="main">
            <div class="logo am-center"><img src="images/loginLogo.jpg" alt=""></div>
            <form class="am-center" method="post" action="" onSubmit="return false;" role="form">
                <div class="am-form-group">
                    <label class="am-fl" for="username">账号</label>
                    <input class="am-fl" type="text" id="username" name="" placeholder="手机号/邮箱/优程会员名" autocomplete="off">
                    <span class="am-text-center am-fr" id="userStatus" data-status="0">
                        <!--状态：0表示未开启下拉，1表示开启下拉-->
                        <i class="am-icon-angle-down"></i>
                        <!--开启状态样式：am-icon-angle-up-->
                    </span>
                    <div class="am-cf"></div>
                </div>
                <ul class="userName" role="list">
                    <!--下拉-->
                    <li role="listitem">15892236958</li>
                    <li role="listitem">15348115224</li>
                    <li role="listitem">15892236958</li>
                    <li role="listitem">15348115224</li>
                    <li role="listitem">15892236958</li>
                    <li role="listitem">15348115224</li>
                </ul>
                <div class="am-form-group">
                    <label class="am-fl" for="password">密码</label>
                    <input class="am-fl" type="password" id="password" name="" placeholder="请输入登录密码" maxlength="16" autocomplete="off">
                    <span class="am-text-center am-fr" id="pwdStatus" data-status="0">
                        <!--状态：0表示闭眼，1表示开眼-->
                        <i class="icon-eye-slash"></i>
                        <!--开眼状态样式：am-icon-eye-->
                    </span>
                    <div class="am-cf"></div>
                </div>
                <p><button id="submitBtn" type="submit" class="am-btn am-btn-block am-btn-danger">登录</button></p>
            </form>
            <div class="link am-center">
                <a class="am-fl" href="" title="">忘记密码?</a>
                <a class="am-fr" href="login_message.html" title="">短信验证码登录</a>
            </div>
        </main>
        <!--底部-->
        <footer role="contentinfo">
            <a class="am-center am-text-center" href="login_wechat.html" title="">
                <i class="am-icon-wechat"></i>
                微信账户快速登录
            </a>
        </footer>

        <!--更多-->
        <div class="am-modal-actions" id="actions">
            <div class="am-modal-actions-group">
                <ul role="list">
                    <li role="listitem"><a href="" title="">新用户注册</a></li>
                    <li class="wechat" role="listitem">
                        <a href="" title="">
                            <i class="am-icon-wechat"></i>
                            微信快速登录
                        </a>
                    </li>
                    <li role="listitem"><a href="" title="">帮助</a></li>
                </ul>
            </div>
            <div class="am-modal-actions-group">
                <button class="am-btn am-btn-block" data-am-modal-close>取消</button>
            </div>
        </div>

        <div class="am-modal am-modal-no-btn" tabindex="-1" id="alert-modal">
            <div class="am-modal-dialog">
                <div class="alert-modal-title">温馨提示
                    <a href="javascript: void(0)" onclick="cancelAlert()" class="am-close am-close-spin" data-am-modal-close>&times;</a>
                </div>
                <div class="alert-modal-content">
                    Modal 内容。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.login();
    },
    methods: {
        login() {
            //用户框：下拉
            $('#userStatus').click(function () {
                var statusVal = $(this).attr('data-status');
                if (statusVal == 0) {
                    $(this).children('i').removeClass().addClass('am-icon-angle-up');
                    $(this).attr('data-status', 1);
                    $('footer').hide();
                } else {
                    $(this).children('i').removeClass().addClass('am-icon-angle-down');
                    $(this).attr('data-status', 0);
                    $('footer').show();
                }
                $(this).parent().next().slideToggle(300);	//切换显示
            });
            //点击下拉字段：显示在用户框里，点击其它，隐藏下拉框
            $('.userName li').click(function () {
                $('#username').val($(this).text());
                $('#userStatus').attr('data-status', 0);
                $('#userStatus').children('i').removeClass().addClass('am-icon-angle-down');
                $(this).parent().hide();
            });
            $(document).click(function (e) {
                var _con = $('.userName, #userStatus');
                if (!_con.is(e.target) && _con.has(e.target).length === 0) {
                    $('#userStatus').children('i').removeClass().addClass('am-icon-angle-down');
                    $('.userName').hide();
                }
            });
            //密码框：状态
            $('#pwdStatus').click(function () {
                var statusVal = $(this).attr('data-status');
                if (statusVal == 0) {
                    $(this).children('i').removeClass().addClass('am-icon-eye');
                    $(this).siblings('input').attr('type', 'text');
                    $(this).attr('data-status', 1);
                } else {
                    $(this).children('i').removeClass().addClass('icon-eye-slash');
                    $(this).siblings('input').attr('type', 'password');
                    $(this).attr('data-status', 0);
                }
            });
        },

        //文本框焦点切换时：切换底部显示
        footerToggle() {
            //$('footer').show();
            if ($(window).width() < 750) {
                $('.am-form-group input').focusin(function () {
                    $('footer').hide();
                });
                $('.am-form-group input').focusout(function () {
                    $('footer').show();
                });
            }
        }
    }
}
</script>

<style scoped>
/*
for：登录
date：2018-08
*/
/* CSS Document */
html,
body {
  height: 100%;
}
body {
  position: relative;
}

/*
主体
*/
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
  color: #d00;
}
/*主体*/
main {
  width: 100%;
}
.logo {
  width: 1rem;
  margin-bottom: 0.27rem;
}
.logo img {
  width: 100%;
}
form {
  width: 93%;
}
.am-form-group {
  height: 0.47rem;
  overflow: hidden;
  font-size: 0.14rem;
  color: #333;
  line-height: 0.47rem;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 0.13rem;
}
.am-form-group label {
  /*width: 23%;*/
  width: 0.88rem;
}
.am-form-group input {
  /*width: 67%;*/
  width: calc(100% - 1.25rem);
  border-width: 0;
  font-size: 0.14rem;
  color: #333;
  line-height: 0.47rem;
}
.am-form-group span {
  width: 0.24rem;
  cursor: pointer;
}
.am-form-group span i {
  font-size: 0.24rem;
  color: #ccc;
}
.am-form-group span .am-icon-angle-up,
.am-form-group span .am-icon-angle-down {
  font-size: 0.3rem;
}
.am-form-group span .icon-eye-slash {
  line-height: 2em;
}
.am-form-group span .am-icon-eye {
  color: #d00;
}
.userName {
  max-height: 1.88rem;
  overflow-y: scroll;
  margin: -0.13rem 0 0.13rem;
  display: none;
}
.userName li {
  /*width: 77%;
	margin-left: 23%;*/
  width: calc(100% - 0.88rem);
  margin-left: 0.88rem;
  height: 0.47rem;
  overflow: hidden;
  font-size: 0.14rem;
  color: #333;
  line-height: 0.47rem;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
}
.userName li:hover,
.userName li:active {
  color: #d00;
  border-color: #d00;
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
.link {
  width: 93%;
}
.link a {
  font-size: 0.14rem;
  color: #d00;
  line-height: 0.4rem;
}
/*底部*/
footer {
  position: absolute;
  left: 0;
  bottom: 0.24rem;
  z-index: 1;
  width: 100%;
}
footer a {
  width: 2.07rem;
  height: 0.4rem;
  background-color: #f1f1f1;
  font-size: 0.16rem;
  line-height: 0.4rem;
  border-radius: 200px;
}
footer a,
footer a:focus,
footer a:hover {
  color: #333;
}
footer a i {
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.2rem;
  color: #fff;
  line-height: 0.3rem;
  background-color: #20b920;
  border-radius: 200px;
  position: relative;
  left: -0.13rem;
}

/*
更多
*/
.am-modal-actions {
  font-size: 0.16rem;
}
.am-modal-actions-group {
  margin: 0.05rem 0;
}
.am-modal-actions-group ul {
  font-size: 0.14rem;
}
.am-modal-actions-group li {
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.am-modal-actions-group li,
.am-modal-actions-group li a,
.am-modal-actions-group li a:focus,
.am-modal-actions-group li a:hover {
  color: #333;
}
.am-modal-actions-group li.wechat,
.am-modal-actions-group li.wechat a,
.am-modal-actions-group li.wechat a:focus,
.am-modal-actions-group li.wechat a:hover {
  color: #20b920;
}
.am-modal-actions-group li a {
  display: block;
}
.am-modal-actions-group .am-btn {
  background-color: #d00;
  color: #fff;
  font-size: 0.16rem;
  height: 0.4rem;
}

#alert-modal {
  font-size: 14px;
}
</style>


