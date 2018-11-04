<template>
    <div id="createOrder">
        <!--头部-->
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">拼车信息填写</h1>
        </header>

        <form  name="" method="post" action="">
            <!--主体-->
            <main id="order" role="main">
                <!--有优惠券时加样式：tick-->
                <div class="main am-center">
                    <div class="box">
                        <div class="item">
                            <label class="am-fl" for="">称呼</label>
                            <input class="am-fr" type="text"  name="" placeholder="请输入称呼" value="王明礼" autocomplete="off">
                            <!--需获取-->
                            <div class="am-cf"></div>
                        </div>
                        <div class="item">
                            <label class="am-fl" for="">您的电话</label>
                            <input class="am-fr" type="tel"  name="" placeholder="请输入您的电话" value="1582236958" autocomplete="off">
                            <!--需获取-->
                            <div class="am-cf"></div>
                        </div>
                        <div class="item">
                            <label class="am-fl" for="">上车时间</label>
                            <input class="am-fr" type="text" id="timer" name="" value="2018-09-04 21:16" autocomplete="off" readonly>
                            <!--需获取-->
                            <div class="am-cf"></div>
                        </div>
                        <div class="item line">
                            <label class="am-fl" for="">路线</label>
                            <span class="am-fl">
                                <i class="am-round"></i>
                            </span>
                            <div class="city am-fl" id="startCity">
                                成都
                                <!--需获取-->
                                <input type="hidden"  name="" value="成都">
                            </div>
                            <div class="switch am-text-center am-fl" data-start="成都" data-end="自贡" data-price="99" data-price2="88">
                                <!--需获取：成都->自贡，正向99，逆向88-->
                                <i class="icon-line-switch"></i>
                            </div>
                            <span class="danger am-fl">
                                <i class="am-round"></i>
                            </span>
                            <div class="city am-fl" id="endCity">
                                自贡
                                <!--需获取-->
                                <input type="hidden"  name="" value="自贡">
                            </div>
                            <div class="am-cf"></div>
                        </div>
                        <div class="item nav type">
                            <label class="am-fl" for="">服务类型</label>
                            <nav class="am-fl" role="navigation">
                                <a class="active" href="javascript:;" title="">拼车</a>
                                <a href="javascript:;" title="">包车</a>
                                <input type="hidden"  name="" value="拼车">
                            </nav>
                            <div class="am-cf"></div>
                        </div>
                        <div class="item select active" id="person">
                            <label class="am-fl" for="">人数</label>
                            <input class="am-fl" type="text" id="personText" name="" value="1人" autocomplete="off" readonly>
                            <input type="hidden" id="personNum" name="" value="1">
                            <!--人数-->
                            <span class="am-text-center am-fr"  data-status="0">
                                <!--状态：0表示未开启下拉，1表示开启下拉，下同-->
                                <i class="am-icon-angle-down"></i>
                                <!--开启状态样式：am-icon-angle-up-->
                            </span>
                            <div class="am-cf"></div>
                        </div>
                        <ul class="option person" role="list">
                            <!--下拉-->
                            <li data-value="1" role="listitem">1人</li>
                            <li data-value="2" role="listitem">2人</li>
                            <li data-value="3" role="listitem">3人</li>
                            <li data-value="4" role="listitem">4人</li>
                            <li data-value="5" role="listitem">5人</li>
                        </ul>
                        <div class="item select" id="car">
                            <label class="am-fl" for="">车辆数</label>
                            <input class="val am-fl" type="text" id="carText" name="" value="1辆" autocomplete="off" readonly>
                            <input class="num" type="hidden" id="carNum" name="" value="1">
                            <!--车辆数-->
                            <span class="am-text-center am-fr"  data-status="0">
                                <i class="am-icon-angle-down"></i>
                            </span>
                            <div class="am-cf"></div>
                        </div>
                        <ul class="option car" role="list">
                            <!--下拉-->
                            <li data-value="1" role="listitem">1辆</li>
                            <li data-value="2" role="listitem">2辆</li>
                            <li data-value="3" role="listitem">3辆</li>
                            <li data-value="4" role="listitem">4辆</li>
                            <li data-value="5" role="listitem">5辆</li>
                        </ul>
                        <div class="item nav child">
                            <label class="am-fl" for="">带有儿童</label>
                            <nav class="am-fl" role="navigation">
                                <a class="active" href="javascript:;" title="">无</a>
                                <a href="javascript:;" title="">有</a>
                                <input type="hidden"  name="" value="无">
                            </nav>
                            <div class="am-cf"></div>
                        </div>
                    </div>
                    <div class="price am-center am-text-center">
                        <div class="pay">约 <span></span> 元</div>
                        <!--span，需传值，默认：单人，99-->
                        <div class="ticket">券已抵 <span>5</span> 元</div>
                        <!--span，需传值，假定：5！若为：0时不显示此行，已设置-->
                        <input type="hidden" id="price" name="" value="99">
                        <!--单人拼车费，需传值，默认：99-->
                        <input type="hidden" id="pay" name="">
                        <!--支付车费-->
                    </div>
                </div>
            </main>

            <!--底部-->
            <footer id="footer" class="" role="contentinfo">
                <!--有提示时加样式：num或time-->
                <div class="footer">
                    <div class="num am-text-center">当前订单：人数>=4人，您已：<span>包车</span></div>
                    <div class="time am-text-center">时间：22:00~06:00为包车时段，您已：<span>包车</span></div>
                    <p class="am-center">
                        <button id="confirmCallCar" class="am-btn am-btn-block am-btn-danger" type="button">确认呼叫快车</button>
                        <!--type的值为submit，为显示弹窗效果改为button-->
                    </p>
                </div>
            </footer>
        </form>

        <!--提示-->
        <div id="tips" role="contentinfo">
            <div class="tipBox">
                <div class="tips am-text-center">
                    <header role="heading">
                        <i class="am-icon-spin am-icon-spinner"></i>
                        <div>系统正在为您派单，请稍候</div>
                    </header>
                    <main role="main">接单成功后短信通知</main>
                    <footer role="contentinfo">取消</footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.orderJs();
    },
    methods: {
        orderJs() {
            this.orderHeight();	//订单高度

            //初始样式及价格、时间状态显示
            var ticket = $('.price .ticket span').text();	//优惠券
            var price = $('#price').val();	//单人拼车费
            if (ticket > 0) {
                $('main').addClass('tick');
            } else {
                $('main').removeClass('tick');
            }
            var pay = parseFloat(price - ticket);	//实付车费
            $('.price .pay span').text(pay);	//显示车费
            $('#pay').val(pay);	//支付车费

            //获取时间
            var timer = $('#timer').val();
            timer = new Date(timer);
            var hours = timer.getHours();
            if (hours < 6 || hours > 21) {
                $('footer').addClass('time');
                this.orderHeight();	//订单高度
                price = price * 4;	//四人为包车
                pay = parseFloat(price - ticket);	//实付车费
                $('.price .pay span').text(pay);	//显示车费
                $('#pay').val(pay);	//支付车费
            }

            //日历插件：lCalendar
            // var calendardatetime = new lCalendar();
            // calendardatetime.init({
            //     'trigger': '#timer',
            //     'type': 'datetime'
            // });

            //改变时间
            $("#timer").bind("input propertychange", function () {
                var inputVal = $(this).val();
                if (inputVal) {
                    timer = new Date(inputVal);
                    var hours = timer.getHours();
                    var price2;
                    if (hours < 6 || hours > 21) {
                        $('footer').addClass('time');
                        price2 = price * 4;	//四人为包车
                    } else {
                        price2 = price;
                        $('footer').removeClass('time');
                    }
                    var pay = parseFloat(price2 - ticket);	//实付车费
                    $('.price .pay span').text(pay);	//显示车费
                    $('#pay').val(pay);	//支付车费
                    this.orderHeight();	//订单高度
                }
            });

            //切换线路
            $('.line .switch').click(function () {
                //切换城市及属性
                var c = $(this).attr('data-start');
                $('#startCity').text($(this).attr('data-end'));
                $('#startCity input').val($(this).attr('data-end'));
                $(this).attr('data-start', $(this).attr('data-end'));
                $('#endCity').text(c);
                $('#endCity input').val(c);
                $(this).attr('data-end', c);
                var p = $(this).attr('data-price');
                $(this).attr('data-price', $(this).attr('data-price2'));
                $(this).attr('data-price2', p);
                //计算车费
                $('#price').val($(this).attr('data-price'));	//单人车费
                var price = $('#price').val();
                var pay = parseFloat(price - ticket);	//实付车费
                $('.price .pay span').text(pay);	//显示车费
                $('#pay').val(pay);	//实付车费
            });

            //服务类型
            $('.type nav a').click(function () {
                $(this).addClass('active').siblings('a').removeClass('active');
                $(this).siblings('input').val($(this).text());
                $('.select').eq($(this).index()).addClass('active').siblings('.select').removeClass('active');
                var price2;
                if ($(this).text() == '包车') {
                    price2 = price * 4;	//包车：每辆以4人计
                    $('#carText').val('1辆');
                    $('#carNum').val(1);
                    $('footer').removeClass('num');
                    this.orderHeight();	//订单高度
                } else {
                    price2 = price;
                    $('#personText').val('1人');
                    $('#personNum').val(1);
                }
                var pay = parseFloat(price2 - ticket);	//实付车费
                $('.price .pay span').text(pay);	//显示车费
                $('#pay').val(pay);	//实付车费
            });

            //下拉列表
            //切换：下拉显示
            $('.select').click(function () {
                var statusVal = $(this).children('span').attr('data-status');
                if (statusVal == 0) {
                    $(this).find('i').removeClass().addClass('am-icon-angle-up');
                    $(this).children('span').attr('data-status', 1);
                } else {
                    $(this).find('i').removeClass().addClass('am-icon-angle-down');
                    $(this).children('span').attr('data-status', 0);
                }
                $(this).next().slideToggle(300);	//切换显示列表
            });
            //点击其它：关闭下拉
            $(document).click(function (e) {
                var _con = $('.option, .select');
                if (!_con.is(e.target) && _con.has(e.target).length === 0) {
                    $('.select span').children('i').removeClass().addClass('am-icon-angle-down');
                    $('.option').hide();
                }
            });
            //点击列表项：人数
            $('.person li').click(function () {
                $('#personText').val($(this).text());	//显示值
                $('#personNum').val($(this).attr('data-value'));	//数量值
                $('#person').children('span').attr('data-status', 0);	//关闭状态
                $('#person').children('span').children('i').removeClass().addClass('am-icon-angle-down');	//按钮样式
                $(this).parent().hide();	//隐藏列表项		
                var num = $('#personNum').val();
                if (num > 3) {
                    num = 4;	//4人开始后为包车价
                    $('footer').addClass('num');
                } else {
                    $('footer').removeClass('num');
                }
                var pay = parseFloat(price * num - ticket);	//实付车费
                $('.price .pay span').text(pay);	//显示车费
                $('#pay').val(pay);	//实付车费
                this.orderHeight();	//订单高度
            });
            //点击列表项：车辆
            $('.car li').click(function () {
                $('#carText').val($(this).text());	//显示值
                $('#carNum').val($(this).attr('data-value'));	//数量值
                $('#car').children('span').attr('data-status', 0);	//关闭状态
                $('#car').children('span').children('i').removeClass().addClass('am-icon-angle-down');	//按钮样式
                $(this).parent().hide();	//隐藏列表项
                var car = $('#carNum').val();
                var num = car * 4;	//拼车按4个计
                var pay = parseFloat(price * num - ticket);	//实付车费
                $('.price .pay span').text(pay);	//显示车费
                $('#pay').val(pay);	//实付车费
            });

            //儿童
            $('.child nav a').click(function () {
                $(this).addClass('active').siblings('a').removeClass('active');
                $(this).siblings('input').val($(this).text());
            });

            //提交成功后：提示
            $('#footer button').click(function () {
                $('#tips').addClass('active');
            });

            //关闭提示框
            $('.tips footer').click(function () {
                $('#tips').removeClass('active');
            });
        },

        //订单高度
        orderHeight() {
            var spacer = 13.91304347826087;
            var winWidth = $(window).width();
            if (winWidth > 320) {
                spacer = 15.65217391304348;
            }
            if (winWidth > 360) {
                spacer = 16.30434782608696;
            }
            if (winWidth > 375) {
                spacer = 18;
            }
            var headerHeight = $('#header').innerHeight();
            var footerHeight = $('#footer').innerHeight();
            var winHeight = $(window).height();
            var priceHeight = $('.price').innerHeight();
            var mainHeight = winHeight - headerHeight - footerHeight - spacer;
            var boxHeight = mainHeight - priceHeight;
            $('#order').height(mainHeight);
            $('.box').height(boxHeight);
        }
    },
}
</script>

<style scoped>
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
#order {
  width: 100%;
  margin-top: 0.15rem;
}
.main {
  width: 93%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0.03rem 0.03rem 0.03rem rgba(51, 51, 51, 0.1),
    -0.03rem -0.03rem 0.03rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  position: relative;
}
.box {
  height: calc(100% - 0.18rem);
  overflow: hidden;
  overflow-y: scroll;
}
/*item*/
.item {
  width: 100%;
  height: 0.66rem;
  overflow: hidden;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f1f1f1;
}
.item label,
.item input {
  font-size: 0.16rem;
  line-height: 0.66rem;
}
.item label {
  width: 0.94rem;
  color: #333;
}
.item input {
  width: calc(100% - 0.94rem);
  color: #757575;
  border: 0;
}
/*line*/
.line span {
  width: 0.2rem;
  height: 0.66rem;
}
.line span i {
  width: 0.1rem;
  height: 0.1rem;
  background-color: #5eb95e;
  display: block;
  margin-top: 0.28rem;
}
.line span.danger i {
  background-color: #d00;
}
.line .city {
  font-size: 0.16rem;
  color: #757575;
  line-height: 0.66rem;
}
.line .switch {
  width: 0.5rem;
  height: 0.66rem;
}
.line .switch i {
  font-size: 0.2rem;
  color: #ddd;
  line-height: 0.66rem;
}
/*tab*/
.nav {
  height: 0.88rem;
}
.nav label {
  line-height: 0.88rem;
}
.nav nav {
  font-size: 0;
  margin-top: 0.24rem;
}
.nav nav a {
  font-size: 0.16rem;
  color: #757575;
  line-height: 0.38rem;
  border: 1px solid #fff;
  border-radius: 200px;
  display: inline-block;
  margin-right: 0.06rem;
  padding: 0 0.18rem;
}
.nav nav a.active {
  color: #333;
  border-color: #ddd;
}
/*select*/
.select {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  display: none;
}
.select.active {
  display: block;
}
.select input {
  width: calc(100% - 1.18rem);
}
.select span {
  width: 0.24rem;
  /*cursor: pointer;*/
}
.select span i {
  font-size: 0.3rem;
  color: #ccc;
  line-height: 0.66rem;
}
/*option*/
.option {
  width: 93%;
  max-height: 1.88rem;
  overflow-y: scroll;
  display: none;
}
.option li {
  width: calc(100% - 1.14rem);
  margin-left: 1.14rem;
  height: 0.47rem;
  overflow: hidden;
  font-size: 0.14rem;
  color: #333;
  line-height: 0.47rem;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
}
.option li:hover,
.option li:active {
  color: #d00;
  border-color: #d00;
}
/*price*/
.price {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  padding: 0.15rem 0 0.2rem;
}
.price .pay {
  font-size: 0.16rem;
  color: #333;
}
.price .pay span {
  font-size: 0.28rem;
  color: #d00;
  font-weight: 600;
}
.price .ticket {
  font-size: 0.12rem;
  color: #757575;
  margin-top: 0.03rem;
  display: none;
}
main.tick .price .ticket {
  display: block;
}

/*
底部
*/
#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
}
/*footer*/
.footer {
  width: 100%;
}
.footer div {
  font-size: 0.14rem;
  color: #757575;
  margin-top: 0.15rem;
  display: none;
}
#footer.num .footer .num,
#footer.time .footer .time {
  display: block;
}
.footer div span {
  color: #d00;
}
.footer p {
  width: 93%;
  margin-top: 0.15rem;
  margin-bottom: 0.2rem;
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
  padding: 0.15rem 0;
  font-size: 0.12rem;
  color: #757575;
  line-height: 0.25rem;
  border-bottom: 1px solid #f1f1f1;
  display: table;
}
.tips main {
  font-size: 0.16rem;
  color: #333;
  line-height: 0.39rem;
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


