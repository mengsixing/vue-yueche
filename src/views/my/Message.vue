<template>
    <div id="my-message">
        <div id="app">
            <!--头部-->
            <header id="header" role="heading">
                <a class="back" href="javascript:history.go(-1);" title="">
                    <i class="am-icon-angle-left"></i>
                    <span>返回</span>
                </a>
                <h1 class="am-text-center">我的信息</h1>
            </header>

            <!--主体-->
            <main role="main">
                <ul class="am-center" role="list">
                    <li role="listitem" v-for="item in list" v-bind:key="item">
                        <a href="./news_details.html">
                            <div class="img am-text-center"><img :src="item.msgPic" alt="" /></div>
                            <h1 class="title">{{item.msgTitle}}</h1>
                            <div class="brief"></div>
                            <div class="tool">
                                <div class="time am-fl">{{item.publishDate}}</div>
                                <div class="view am-fr">查看详情</div>
                                <div class="am-cf"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </main>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get('/NcpCmsApi/getMessage?personId=#(personId)&personType=1', (result) => {
                this.list = result.data;
            });
        }
    }
}
</script>

<style scoped>
/*
for：会员-我的信息
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
  margin: 0.52rem 0 0.15rem;
}
ul {
  width: 93%;
}
li {
  width: 100%;
  box-shadow: 0.02rem 0.02rem 0.02rem rgba(51, 51, 51, 0.1),
    -0.02rem -0.02rem 0.02rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  background-color: #fff;
  display: table;
  margin-top: 0.15rem;
  float: left;
}
.title,
.brief {
  text-align: justify;
}
.title {
  font-size: 0.16rem;
  color: #333;
  line-height: 0.25rem;
  padding: 0.15rem 0.2rem 0.08rem;
}
.brief,
.tool {
  font-size: 0.12rem;
  line-height: 0.2rem;
}
.brief {
  color: #757575;
  padding: 0 0.2rem 0.08rem;
  margin-top: -0.05rem;
}
.tool {
  border-top: 1px solid #f1f1f1;
  padding: 0.08rem 0.2rem 0.15rem;
}
.time {
  color: #333;
}
.view {
  color: #757575;
}
.img img {
  width: 100%;
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
}
</style>


