<template>
  <div id="app_index">
    <!--地图-->
    <div id="map"></div>
    <!--头部-->
    <header id="header" role="heading">
      <div class="box am-center">
        <!--工具条-->
        <div class="tools">
          <a class="icon user am-fl" href="javascript:;" title="">
            <i class="am-icon-user"></i>
            <span class="am-badge am-round"></span>
            <!--有新信息时加上这行-->
          </a>
          <!--点击出现：会员中心-->
          <div class="address am-center am-fl">
            <div class="logo am-fl"></div>
            <div class="select am-fr">
              <span class="am-text-center am-fl">成都市</span>
              <i class="am-icon-angle-down am-fr"></i>
              <div class="am-cf"></div>
            </div>
            <!--点击出现：选择城市-->
            <div class="am-cf"></div>
          </div>
          <div class="am-fr">
            <a class="icon commenting" href="my_message.html" title="">
              <i class="icon-commenting"></i>
              <span class="am-badge am-round"></span>
              <!--有新信息时加上这行-->
            </a>
            <a class="icon scanQrcode" href="" title="">
              <i class="icon-scan-qrcode"></i>
            </a>
          </div>
        </div>
      </div>
      <!--导航栏-->
      <div class="nav">
        <nav class="am-center" role="navigation">
          <ul id="nav" role="list" draggable="true">
            <li class="active" role="listitem"><a href="javascript:;" title="">城际快车</a></li>
            <li role="listitem"><a href="javascript:;" title="">顺风车</a></li>
            <li role="listitem"><a href="javascript:;" title="">专车</a></li>
            <li role="listitem"><a href="javascript:;" title="">政府大巴</a></li>
            <li role="listitem"><a href="javascript:;" title="">小件货运</a></li>
            <li role="listitem"><a href="javascript:;" title="">代驾</a></li>
          </ul>
          <i class="icon-more-o"></i>
          <!--点击出现：全部服务-->
        </nav>
      </div>
    </header>
    <!--主体-->
    <main role="main">
      <!--重新定位-->
      <div v-if="status===0" class="location am-center">
        <div class="am-text-center">
          <i class="icon-location"></i>
        </div>
      </div>
      <!-- 等待中 -->
      <waiting v-if="status===1"></waiting>
      <!--选择线路-->
      <div v-if="status===0" class="line am-center">
        <nav role="navigation am-text-center">
          <a class="active" href="javascript:;" title="">现在</a>
          <a href="javascript:;" title="">预约</a>
        </nav>
        <div class="main am-center">
          <div class="select am-center">
            <!--显示时，加样式show-->
            <!--有值时，加样式active-->
            <div class="am-fl">
              <i class="icon-appointment"></i>
            </div>
            <div class="am-fr">
              <input class="am-text-center" type="text" id="timer" name="" readonly placeholder="预约时间" autocomplete="off">
            </div>
            <div class="am-cf"></div>
          </div>
          <div class="form">
            <ul role="list">
              <li role="listitem">
                <div>
                  <i class="am-badge am-round"></i>
                </div>
                <input type="text" id="startCity" name="" value="成都" readonly placeholder="您现在哪儿" autocomplete="off">
                <!--请根据当前的坐标定位城市：成都-->
              </li>
              <li role="listitem">
                <div>
                  <i class="am-badge am-round"></i>
                </div>
                <input type="text" id="endCity" name="" readonly placeholder="您要去哪儿" autocomplete="off">
              </li>
            </ul>
            <div class="switch am-text-center">
              <i class="icon-line-switch"></i>
            </div>
          </div>
          <div class="price am-text-center">
            <div class="pay">约 <span>0</span> 元</div>
            <div class="ticket">券已抵 <span>0</span> 元</div>
            <input type="hidden" id="pay" name="" value="0">
            <!--车费-->
          </div>
        </div>
      </div>
      <div v-if="status===0" class="button am-center">
        <button class="am-btn am-btn-block am-btn-danger" type="submit">立即下单</button>
      </div>
      <!--热门线路-->
      <div v-if="status===0" class="hotline am-center">
        <div class="title am-center">
          <h1 class="am-fl">
            <i class="am-icon-volume-up am-text-center"></i>
            热门线路
          </h1>
          <a class="am-fr" href="javascript:;" title="">更多</a>
          <!--点击出现：更多线路-->
          <div class="am-cf"></div>
        </div>
        <div class="list am-center">
          <ul role="list">
            <li role="listitem" v-for="item in hotLineList" v-bind:key="item.lineId">
              <a class="am-text-center" href="" title="">
                {{item.startAdd}}
                <i class="icon-line-switch"></i>
                {{item.endAdd}}
              </a>
            </li>

          </ul>
          <div class="am-cf"></div>
        </div>
      </div>
    </main>
    <!--二维码-->
    <qrcode v-if="status===1"></qrcode>
    <!--会员-->
    <div id="member" role="contentinfo">
      <div class="member">
        <div class="head am-text-center" role="heading">
          <div class="face am-center">
            <i class="am-icon-user"></i>
            <img :src="myInfo.header" alt="">
            <!--没有自定义头像请屏蔽这句-->
          </div>
          <div class="tel am-center am-text-center">{{myInfo.nickName}}</div>
          <div class="tip am-center">
            <div class="am-fl">
              <i class="am-icon-vimeo am-fl"></i>
              <span class="am-fl">个人会员</span>
              <div class="am-cf"></div>
            </div>
            <i class="am-icon-angle-right am-fr"></i>
            <div class="am-cf"></div>
          </div>
        </div>
        <div class="main am-center" role="main">
          <ul role="list">
            <li role="listitem">
              <a href="my_trip.html" title="">
                <i class="icon-trip am-fl"></i>
                <span class="am-fl">我的行程</span>
                <div class="am-cf"></div>
              </a>
            </li>
            <li role="listitem">
              <a href="my_message.html" title="">
                <i class="icon-commenting am-fl"></i>
                <!-- <t class="am-round"></t> -->
                <!--有新信息时加上这行-->
                <span class="am-fl">消息中心</span>
                <div class="am-cf"></div>
              </a>
            </li>
            <li role="listitem">
              <a href="my_coupon.html" title="">
                <i class="icon-coupon am-fl"></i>
                <span class="am-fl">优惠券</span>
                <div class="am-cf"></div>
              </a>
            </li>
            <li role="listitem">
              <a href="my_recruit.html" title="">
                <i class="icon-recruit am-fl"></i>
                <span class="am-fl">成为车主</span>
                <div class="am-cf"></div>
              </a>
            </li>
            <li role="listitem">
              <a href="setting.html" title="">
                <i class="am-icon-cog am-fl"></i>
                <span class="am-fl">个人设置</span>
                <div class="am-cf"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="foot am-text-center">
          <a href="my_about.html" title="">
            <div class="am-round am-center">
              <i class="am-icon-users"></i>
            </div>
            <h1>关于我们</h1>
          </a>
          <a href="my_feedback.html" title="">
            <div class="am-round am-center">
              <i class="icon-feedback"></i>
            </div>
            <h1>意见反馈</h1>
          </a>
        </div>
      </div>
    </div>
    <!--选择城市-->
    <div id="selectCity" role="contentinfo">
      <div class="box">
        <div class="header">
          <form class="am-center" id="" name="" method="post" action="">
            <input class="am-fl" type="search" id="" name="" placeholder="城市中文名或拼音" autocomplete="off">
            <a class="am-fr" href="javascript:;" title="">取消</a>
            <div class="am-cf"></div>
          </form>
        </div>
        <div class="main am-center">
          <div class="current">当前城市：成都市</div>
          <div class="list">
            <div class="title">
              <i class="am-icon-star"></i>
              热门城市
            </div>
            <ul role="list">
              <li role="listitem">成都市</li>
              <li role="listitem">宜宾市</li>
              <li role="listitem">自贡市</li>
            </ul>
            <div class="title">A</div>
            <ul role="list">
              <li role="listitem">A成都市</li>
              <li role="listitem">A宜宾市</li>
              <li role="listitem">A自贡市</li>
            </ul>
            <div class="title">M</div>
            <ul role="list">
              <li role="listitem">M成都市</li>
              <li role="listitem">M宜宾市</li>
              <li role="listitem">M自贡市</li>
            </ul>
            <div class="title">R</div>
            <ul role="list">
              <li role="listitem">R成都市</li>
              <li role="listitem">R宜宾市</li>
              <li role="listitem">R自贡市</li>
            </ul>
            <div class="title">Y</div>
            <ul role="list">
              <li role="listitem">Y成都市</li>
              <li role="listitem">Y宜宾市</li>
              <li role="listitem">Y自贡市</li>
            </ul>
            <div class="title">Z</div>
            <ul role="list">
              <li role="listitem">Z成都市</li>
              <li role="listitem">Z宜宾市</li>
              <li role="listitem">Z自贡市</li>
              <li role="listitem">紫荆城邦</li>
            </ul>
            <div class="am-cf"></div>
          </div>
        </div>
        <div class="aside">
          <ul role="list">
            <li role="listitem">
              <a href="#hot" title="">
                <i class="am-icon-star"></i>
              </a>
            </li>
            <li role="listitem">A</li>
            <li role="listitem">M</li>
            <li role="listitem">R</li>
            <li role="listitem">Y</li>
            <li role="listitem">Z</li>
          </ul>
        </div>
      </div>
    </div>
    <!--全部服务-->
    <div id="service" role="contentinfo">
      <div class="fixed"></div>
      <header class="am-text-center" role="heading">
        全部服务
        <i class="am-icon-close"></i>
      </header>
      <main role="main">
        <ul role="list">
          <li role="listitem" v-for="item in serviceList" v-bind:key="item.expressId">
            <h1 class="am-text">{{item.expressName}}</h1>
          </li>
        </ul>
      </main>
    </div>
    <!--全部线路-->
    <div id="line" role="contentinfo">
      <div class="fixed"></div>
      <main role="main">
        <div class="box am-center" role="listbox">
          <ul role="list" id="line-list">
            <li v-for="item in hotLineList" v-bind:key="item.lineId" :data-start="item.startAdd" data-end="item.endAdd" data-price="135" data-price2="120" data-ticket="5" role="listitem">
              <i class="icon-line-select"></i>
              {{item.startAdd}}
              <i class="icon-line-switch"></i>
              {{item.endAdd}}
              <span>热门</span>
            </li>
            <!-- <li data-start="宜宾" data-end="成都" data-price="120" data-price2="135" data-ticket="5" role="listitem">
							<i class="icon-line-select"></i>
							宜宾
							<i class="icon-line-switch"></i>
							成都
						</li> -->
          </ul>
        </div>
      </main>
    </div>
    <!-- 订单评价 -->
    <evaluate v-if="showEvaluate"></evaluate>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueBus from "vue-bus";
import Evaluate from "./components/Evaluate.vue";
import Waiting from "./components/Waiting.vue";
import qrcode from "./components/qrcode.vue";
Vue.use(VueBus);
export default {
  name: "HelloWorld",
  components: { Evaluate, Waiting, qrcode},
  props: {
    msg: String
  },
  data() {
    return {
      status: 1, // 流程状态编号，1：onwaiting
      onWaiting: true,
      showEvaluate: false,
      myInfo: {},
      serviceList: [],
      hotLineList: []
    };
  },
  created() {
    setTimeout(() => {
      this.initIndexPage();
    }, 1000);
    this.getMyInfo();
    console.log("用户标识", "#(personId)");
  },
  methods: {
    getMyInfo() {
      axios.get("/getMyInfo?personId=#(personId)", result => {
        this.myInfo = result.data;
      });
      axios.get("/getService", result => {
        this.serviceList = result.data;
      });
      axios.get("/getLinesList?isHot=1", result => {
        console.log(result);
        this.hotLineList = result.data;
      });
    },
    initIndexPage() {
      //百度地图
      //创建地图并设置中心点和当前城市
      var map = new BMap.Map("map", {
        enableMapClick: false //禁用地图默认的点击事件
      });
      var point = new BMap.Point(104.0818, 30.546564); //成都某地
      map.centerAndZoom(point, 7); //中心点及级数
      map.enableScrollWheelZoom(true);
      map.setCurrentCity("成都"); //当前城市
      //标注：起点
      var point2 = new BMap.Point(104.0818, 30.546564);
      var icon = new BMap.Icon("images/marker1x.png", new BMap.Size(27, 48), {
        //标注大小
        anchor: new BMap.Size(13.5, 43.5) //标注的偏移量
      });
      var marker = new BMap.Marker(point2, { icon: icon }); //创建标注对象并添加到地图
      map.addOverlay(marker);
      //标注：终点
      /*var point2 = new BMap.Point(104.790778, 29.318791);	//自贡某地
      var icon2 = new BMap.Icon('images/marker2x.png', new BMap.Size(27, 48), {
        anchor: new BMap.Size(13.5, 43.5)
      });
      var marker2 = new BMap.Marker(point2, {icon: icon2});
      map.addOverlay(marker2);
      map.centerAndZoom(point2, 7);*/

      //切换线路TAB
      $(".line nav a").click(function() {
        $(this)
          .addClass("active")
          .siblings("a")
          .removeClass("active");
        //显示：选择时间
        if ($(this).text() == "预约") {
          $(".line .select").addClass("show");
        } else {
          $(".line .select").removeClass("show");
        }
      });

      //切换起点、终点
      $(".line .main .switch").click(function() {
        //交换起点、终点的值
        var t = $(".line .main li:first input").val();
        $(".line .main li:first input").val(
          $(".line .main li:last input").val()
        );
        $(".line .main li:last input").val(t);
        //交换正向车费、逆向车费
        var tt = $(this).attr("data-pay");
        $(this).attr("data-pay", $(this).attr("data-pay2"));
        $(this).attr("data-pay2", tt);
        //显示当前车费
        $(".line .price .pay span").text($(this).attr("data-pay"));
        //map.removeOverlay(marker);	//移除标识
      });

      //重新定位
      $(".location div").click(function() {
        map.centerAndZoom(point, 7);
      });

      //日历插件：lCalendar
      // var calendardatetime = new lCalendar();
      // calendardatetime.init({
      //   'trigger': '#timer',
      //   'type': 'datetime'
      // });

      //预约时间框：有值状态
      $(".line .select input").bind("input propertychange", function() {
        var inputVal = $(this).val();
        if (inputVal) {
          $(".line .select").addClass("active");
        }
      });

      //全部线路
      //打开面板
      $(".line .main li input, .hotline .title a").click(function() {
        $("#line").addClass("active");
      });
      //关闭面板
      $("#line").click(function(e) {
        var _con = $("#line .box");
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
          $("#line").removeClass("active");
        }
      });
      //点击列表项：关闭面板，并获取值
      var start = "成都"; //起点：获取当前的城市
      var end = ""; //终点
      var price = 0; //正向价格
      var price2 = 0; //逆向价格
      var ticket = 0; //优惠券
      var pay = 0; //正向车费
      var pay2 = 0; //逆向车费
      $("#line li").click(function() {
        $("#line").removeClass("active");
        start = $(this).attr("data-start");
        end = $(this).attr("data-end");
        price = $(this).attr("data-price");
        price2 = $(this).attr("data-price2");
        ticket = $(this).attr("data-ticket");
        pay = parseFloat(price) - parseFloat(ticket);
        pay2 = parseFloat(price2) - parseFloat(ticket);
        $("#startCity").val(start); //起点城市
        $("#endCity").val(end); //终点城市
        $("#pay").val(pay); //应付正向车费
        $(".line .price .pay span").text(pay); //显示正向车费
        if (ticket != 0) {
          //有优惠券，显示优惠价格
          $(".line .price .ticket").addClass("active");
          $(".line .price .ticket span").text(ticket);
        } else {
          $(".line .price .ticket").removeClass("active");
          $(".line .price .ticket span").text(0);
        }
        $(".line .price, main .button, main .hotline").addClass("active"); //显示：车费、提交按钮，不显示：热门线路
        $(".line .main .switch").attr("data-pay", pay); //正向车费
        $(".line .main .switch").attr("data-pay2", pay2); //逆向车费
      });
    }
  }
};
</script>

<style scoped src="../assets/css/indexPublic.css"></style>
<style scoped>
/*
for：业务首页
date：2018-09
*/
/* CSS Document */

#app_index {
  height: 100%;
}

main {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

/*
重新定位
*/
main .location {
  width: 93%;
}
.location div {
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #ddd;
  /* background-color: #fff; */
  border-radius: 200px;
  box-shadow: 0.02rem 0.02rem 0.02rem rgba(51, 51, 51, 0.1),
    -0.02rem -0.02rem 0.02rem rgba(51, 51, 51, 0.1);
  cursor: pointer;
}
.location div i {
  font-size: 0.2rem;
  color: #ccc;
  line-height: 0.3rem;
  /*position: relative;
	top: -.01rem;*/
}

/*
选择线路
*/
main .line {
  width: 93%;
  padding: 0.18rem 0 0.26rem;
  display: table;
  background-color: #fff;
  box-shadow: 0.03rem 0.03rem 0.03rem rgba(51, 51, 51, 0.1),
    -0.03rem -0.03rem 0.03rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  margin-top: 0.1rem;
}
/*TAB*/
.line nav {
  font-size: 0;
  text-align: center;
}
.line nav a {
  font-size: 0.14rem;
  color: #757575;
  line-height: 0.34rem;
  border: 1px solid #fff;
  border-radius: 200px;
  display: inline-block;
  margin: 0 0.03rem;
  padding: 0 0.14rem;
}
.line nav a.active {
  color: #333;
  border-color: #ddd;
}
.line .main {
  width: 94%;
  margin-top: 0.07rem;
}
/*selectTime*/
.line .select {
  width: 0.85rem;
  margin-top: 0.15rem;
  display: none;
}
.line .select.show {
  display: block;
}
.line .select.active {
  width: 1.35rem;
}
.line .select .am-fl {
  width: 0.25rem;
}
.line .select .am-fr {
  width: 0.6rem;
}
.line .select.active .am-fr {
  width: 1.1rem;
}
.line .select i,
.line .select input {
  line-height: 0.18rem;
}
.line .select i {
  font-size: 0.18rem;
  color: #ccc;
}
.line .select input {
  border: 0;
  width: 100%;
  font-size: 0.14rem;
  color: #333;
}
/*form*/
.line .main .form {
  width: 100%;
  position: relative;
  display: table;
}
.line .main ul {
  width: 100%;
}
.line .main li {
  width: 50%;
  height: 0.6rem;
  overflow: hidden;
  float: left;
  position: relative;
}
.line .main li:first-child {
  padding-right: 0.23rem;
  padding-left: 0.2rem;
}
.line .main li:last-child {
  padding-left: 0.43rem;
}
.line .main li input {
  width: 100%;
  font-size: 0.16rem;
  color: #333;
  line-height: 0.6rem;
  border-width: 0;
  border-bottom: 1px solid #f1f1f1;
  margin-top: -1px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}
.line .main li div {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.2rem;
  height: 100%;
}
.line .main li:last-child div {
  left: 0.2rem;
}
.line .main li div i {
  width: 0.1rem;
  height: 0.1rem;
  margin-top: 0.25rem;
  background-color: #5eb95e;
  display: block;
  font-size: 0;
}
.line .main li:last-child div i {
  background-color: #d00;
}
.line .main .switch {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0.46rem;
  height: 0.6rem;
  margin-left: -0.23rem;
  font-size: 0.2rem;
  color: #ccc;
  line-height: 0.6rem;
  cursor: pointer;
}
/*price*/
.line .price {
  margin-top: 0.15rem;
  display: none;
}
.line .price.active {
  display: block;
}
.line .price .pay {
  font-size: 0.16rem;
  color: #333;
}
.line .price .pay span {
  font-size: 0.28rem;
  color: #d00;
  font-weight: 600;
}
.line .price .ticket {
  font-size: 0.12rem;
  color: #757575;
  margin-top: 0.03rem;
  display: none;
}
.line .price .ticket.active {
  display: block;
}
/*button*/
main .button {
  width: 93%;
  margin-top: 0.15rem;
  margin-bottom: 0.2rem;
  display: none;
}
main .button.active {
  display: block;
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
热门线路
*/
main .hotline {
  width: 93%;
  padding: 0.18rem 0 0.2rem;
  background-color: #fff;
  box-shadow: 0.03rem -0.03rem 0.03rem rgba(51, 51, 51, 0.1),
    -0.03rem 0 0.03rem rgba(51, 51, 51, 0.1);
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
  margin-top: 0.15rem;
}
main .hotline.active {
  display: none;
}
/*标题*/
.hotline .title {
  width: 94%;
  height: 0.3rem;
  overflow: hidden;
}
.hotline .title h1,
.hotline .title a {
  line-height: 0.3rem;
}
.hotline .title h1 {
  font-size: 0.16rem;
  color: #333;
  font-weight: normal;
}
.hotline .title h1 i {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 200px;
  background-color: #f5f5f5;
  color: #757575;
  margin-right: 0.02rem;
}
.hotline .title a {
  font-size: 0.12rem;
  color: #757575;
}
/*列表*/
.hotline .list {
  width: 94%;
  margin-top: 0.04rem;
}
.hotline .list ul {
  margin: 0 -0.03rem;
}
.hotline .list li {
  min-width: 33.33333333333333%;
  font-size: 0.12rem;
  margin-top: 0.09rem;
  padding: 0 0.03rem;
  float: left;
}
.hotline .list li a {
  width: 100%;
  color: #757575;
  line-height: 0.31rem;
  display: block;
  border: 1px solid #ddd;
  border-radius: 200px;
}
.hotline .list li a i {
  color: #ccc;
}
#line {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 32;
  width: 100%;
  height: 100%;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
#line.active {
  -webkit-transform: none;
  transform: none;
}
#line .fixed {
  width: 100%;
  height: 0.8rem;
}
#line main {
  width: 100%;
  height: calc(100% - 0.8rem);
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 0.12rem;
}
#line .box {
  width: 93%;
  height: 100%;
  background-color: #fff;
  border-top-right-radius: 0.03rem;
  border-top-left-radius: 0.03rem;
  overflow: hidden;
  overflow-y: auto;
}
#line li {
  width: 100%;
  font-size: 0.16rem;
  color: #333;
  line-height: 0.52rem;
  border-bottom: 1px solid #ddd;
  padding: 0 0.3rem 0 0.25rem;
  float: left;
  cursor: pointer;
}
#line li:last-child {
  border-bottom-width: 0;
}
#line li i {
  color: #ccc;
  padding: 0 0.05rem;
}
#line li span {
  font-size: 0.12rem;
  color: #fff;
  line-height: 0.14rem;
  padding: 0 0.05rem;
  background-color: #d00;
  border-radius: 0.03rem;
  margin-left: 0.1rem;
}
</style>
