<template>
    <div id="complain">
        <header id="header" role="heading">
            <a class="back" href="javascript:history.go(-1);" title="">
                <i class="am-icon-angle-left"></i>
                <span>返回</span>
            </a>
            <h1 class="am-text-center">我的行程</h1>
            <a class="tel" href="tel:4002112344" title="">客服电话</a>
        </header>

        <!--主体-->
        <main id="cancel" role="main">
            <form id="" name="" method="post" acction="">
                <div class="box am-center">
                    <h1>您在乘车过程中遇到什么样的问题？</h1>
                    <ul role="list">
                        <li class="active" role="listitem">
                            <i class="am-icon-check-square"></i>
                            <span></span>
                            服务态度恶劣
                            <input type="checkbox" id="" name="" checked>
                        </li>
                        <li role="listitem">
                            <i class="am-icon-check-square"></i>
                            <span></span>
                            司机提前计费
                            <input type="checkbox" id="" name="">
                        </li>
                        <li role="listitem">
                            <i class="am-icon-check-square"></i>
                            <span></span>
                            司机故意绕路
                            <input type="checkbox" id="" name="">
                        </li>
                        <li role="listitem">
                            <i class="am-icon-check-square"></i>
                            <span></span>
                            司机迟到
                            <input type="checkbox" id="" name="">
                        </li>
                        <li role="listitem">
                            <i class="am-icon-check-square"></i>
                            <span></span>
                            其它
                            <input type="checkbox" id="" name="">
                        </li>
                    </ul>
                    <textarea id="" name=""></textarea>
                </div>
                <div class="button am-center">
                    <button type="type" class="am-btn am-btn-block am-btn-danger">提交</button>
                </div>
            </form>
        </main>
    </div>
</template>


<script>
export default {
    mounted() {
        this.complain();
    },
    methods: {
        complain() {
            //复选框
            $('.box li').click(function () {
                $(this).toggleClass('active');
                if ($(this).children('input').attr('checked')) {
                    $(this).children('input').attr('checked', false);
                } else {
                    $(this).children('input').attr('checked', true);
                }
                if ($('.box li:last').hasClass('active')) {
                    $('textarea').show();
                } else {
                    $('textarea').hide();
                }
            });
        }
    }
}
</script>


<style scoped>
#header .tel {
  position: absolute;
  top: 0;
  right: 3.5%;
  font-size: 0.14rem;
  color: #d00;
  line-height: 0.52rem;
}

/*
主体
*/
#cancel {
  width: 100%;
  margin-top: 0.15rem;
}
.box {
  width: 93%;
  padding: 0 0 0.33rem;
  box-shadow: 0.02rem 0.02rem 0.02rem rgba(51, 51, 51, 0.1),
    -0.02rem -0.02rem 0.02rem rgba(51, 51, 51, 0.1);
  border-radius: 0.03rem;
  background-color: #fff;
  display: table;
}
.box h1 {
  font-size: 0.16rem;
  color: #333;
  line-height: 0.3rem;
  font-weight: normal;
  padding: 0.19rem 0.2rem 0;
}
/*ul*/
.box ul {
  margin-top: -0.03rem;
}
.box li {
  width: 100%;
  padding: 0 0.2rem;
  font-size: 0.16rem;
  color: #757575;
  line-height: 0.56rem;
  border-bottom: 1px solid #f1f1f1;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  float: left;
}
.box li:last-child {
  border-bottom-width: 0;
}
.box li i,
.box li span {
  margin-right: 0.1rem;
}
.box li i {
  display: none;
}
.box li.active i {
  display: inline-block;
  color: #5eb95e;
  border-color: #5eb95e;
}
.box li span {
  width: 0.137188rem;
  height: 0.13rem;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 0.03rem;
}
.box li.active span {
  display: none;
}
.box li input {
  display: none;
}
/*textarea*/
textarea {
  width: calc(100% - 0.4rem);
  padding: 0 0.1rem;
  height: 1.5rem;
  font-size: 0.16rem;
  color: #333;
  line-height: 0.3rem;
  border: 1px solid #ddd;
  overflow-y: auto;
  margin: 0 0.2rem;
  display: none;
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
</style>
