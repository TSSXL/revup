<template>
    <div class="brandCon">
      <!--   导航栏及轮播图-->
      <div class="first">
        <div class="nav">
          <img src="../assets/bt.png">
          <ul>
            <li v-for="(item,index) in navList"  :key="index"     @mouseenter="gotoNav(index)" @click="go(index)">
              <span>{{item}}</span>
              <span v-show="select==index" class="line"></span>
            </li>
          </ul>
        </div>
        <div class="text">
          <p>全球合作&加盟</p>
          <p>全方位服务平台的健身连锁品牌</p>
        </div>
        <el-carousel height="920px" indicator-position="none" >
          <el-carousel-item v-for="(item,index) in imgPath" :key="index">
            <img style="width:100%;height:100%;"   :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="second">
       <div class="main" id="shop">
         <div  class="title">
           <span></span>
           <p >revup门店实景</p>
          <span></span>
         </div>
         <el-carousel class="aT" :interval="4000" type="card" height="400px">
           <el-carousel-item v-for="item in imgThree" :key="item">
             <img style="width:100%;height:100%;" :src="item" alt="">
           </el-carousel-item>
         </el-carousel>

       </div>

        <div class="main" id="gs">
          <div  class="title" >
            <span></span>
            <p>用户故事</p>
            <span></span>
          </div>
          <el-carousel class="aT" height="330px"  indicator-position="none">
            <el-carousel-item v-for="(item,index) in imgFour" :key="index">
              <div class="threeImgT" >
                <img v-for="i in item.a" :src="i" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>

        </div>

        <div class="main">
          <div  class="title">
            <span></span>
            <p>案例见证</p>
            <span></span>
          </div>
          <el-carousel class="aF" height="360px"  indicator-position="none">
            <el-carousel-item v-for="(item,index) in imgFive" :key="index">
              <div class="fiveImg" >
                <img v-for="i in item.a" :src="i" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>

        </div>

        <div class="main" id="jz">
          <div  class="title">
            <span></span>
            <p >九大见证</p>
            <span></span>
          </div>
          <img class="nineCircle" src="../assets/five.png" alt="">
      </div>

        <div class="main" id="three">
          <div  class="title">
            <span></span>
            <p>三大服务保障</p>
            <span></span>
          </div>
          <img class="fiveCircle" src="../assets/fiveCircle.png" alt="">
          <span class="content">
            传统健身行业多强调销售而往往容易忽视服务内容和用户体验， 而Nt整体解决方案则是在商业模式上的一次创新融合产品、运营和内容三位一体的核心是数据的全方位打通，
            包括智能设备数据、门店运营数据以及训练内容数据这三者的互联互通服务的本质是以用户需求为导向，
            N
          </span>
        </div>

      </div>
      <foot-Component></foot-Component>
    </div>
</template>

<script>
  import footComponent from './foot'
  import Scrollbar from 'smooth-scrollbar'
    export default {
        name: "brand",
      data(){
          return{
            select:2,
            aColor:{color:'white'},
            imgPath:[
              require("../assets/brandNav.png"),
              require("../assets/brandNav.png"),
              require("../assets/brandNav.png"),
              require("../assets/brandNav.png")
            ],
            imgThree:[
              require("../assets/shopOne.png"),
              require("../assets/shopTwo.png"),
              require("../assets/shopThree.png")
            ],
            imgFour:[
              {
                a:[ require("../assets/videoO.png"),
                  require("../assets/videoT.png"),
                  require("../assets/videoTh.png")]
              },
              {
                a:[ require("../assets/videoO.png"),
                  require("../assets/videoT.png"),
                  require("../assets/videoTh.png")]
              }
            ],
            imgFive:[
              {
                a:[ require("../assets/pO.png"),
                  require("../assets/pT.png"),
                  require("../assets/pTh.png"),
                  require("../assets/PF.png")]
              },
              {
                a:[ require("../assets/pO.png"),
                  require("../assets/pT.png"),
                  require("../assets/pTh.png"),
                  require("../assets/PF.png")]
              }
            ],
            navList:[
              "首页",
              "品牌见证",
              "运营系统",
              "投资盈利",
              "用户故事",
              "联系我们"
            ]
          }
      },
      components:{footComponent},
      methods:{
        gotoNav(index){
          this.select=index
        },
        go(index){
          if(index==0){
            this.$router.push({path:'/'})
            this.$router.go(0)
          }else if(index===3){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#jz"))
          }else if(index===4){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#gs"))
          }else if(index===5){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#three"))
          }else if(index===1){
            Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#shop"))
          }else {
            this.$alert('建设中', '提示', {
              confirmButtonText: '确定',
            })
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
.brandCon{
  width:100%;
  .first{
    width:100%;
    position: relative;
    .nav{
      width:100%;
      height:80px;
      position: absolute;
      top:0;
      z-index: 999;
      padding-top: 30px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      img{
        width:220px;
        height:60px;
        margin-left: 10%;
      }
      ul{
        width:50%;
        margin-left: 15%;
        list-style: none;
        height:100%;
        margin-top: 0;
        li{
          float: left;
          color: #cccccc;
          font-size: 12px;
          margin-left: 7%;
          cursor: pointer;
          transition:color 2s;
          line-height: 50px;
          position: relative;
          height:100%;
          .line{
            position: absolute;
            bottom: 0;
            display: inline-block;
            height:2px;
            width:0;
            background-color: red;
            animation-name:mymove;
            animation-duration:600ms;
            /*Safari 和 Chrome*/
            -webkit-animation:mymove 600ms ;
            animation-fill-mode: forwards;
          }
          @keyframes myMove {
            from {width:0;}
            to {width:120%;}
          }
          @-webkit-keyframes mymove /*Safari 和 Chrome*/
          {
            from {width:0;}
            to {width:120%;}
          }
        }
        li:hover{
          color:white;
        }
      }
    }
    .text{
      width:80%;
      position: absolute;
      z-index: 999;
      margin-left: 10%;
      margin-top:340px;
      text-align: center;
      p{
        margin-block-start: 1em;
        margin-block-end: 0em;
      }
      p:first-child{
        font-size: 40px;
        font-weight: bold;
        color:white;
      }
      p:last-child{
        font-size: 20px;
        color:#cccccc;
        font-style: italic;
      }
    }
  }
  .second{
    width:100%;
    height: 2800px;
    background: url("../assets/bgT.jpg") no-repeat;
    background-size: 100% 100%;
    .main{
      width:86%;
      margin-left:7%;
      padding-top: 60px;
      .title{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 60px;
        span{
          display: inline-block;
          width:9%;
          height:1px;
          background-color: white;
          margin-top: 18px;
          opacity: 0.2;
        }
        p{
          color:white;
          font-size: 25px;
          font-weight: bold;
          margin-block-start: 0em;
          margin-block-end: 0em;
          padding-left: 10px;
          padding-right: 10px;
        }
      }
      .aT{
        width:90%;
        margin-top: 60px;
        margin-left: 5%;
        .threeImgT{
          height:300px;
          width:100%;
          img{
            width:28%;
            height:100%;
            position: static;
            margin-left: 4%;
          }
        }
      }
      .aF{
        width:90%;
        margin-top: 60px;
        margin-left: 5%;
        .fiveImg{
          height:360px;
          width:100%;
          img{
            width:20%;
            height:100%;
            position: static;
            margin-left: 4%;
          }
        }
      }
      img{
        width:100%;
      }
      .nineCircle{
        margin-left: 7%;
      }
      .fiveCircle{
        margin-left: 2%;
      }
      .content{
        width:60%;
        text-align: center;
        display: inline-block;
        color:#cccccc;
        font-size: 12px;
        margin-left: 20%;
        line-height: 24px;
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width: 1366px){
    .second{
      height:2350px;
      .main{
        width:90%;
        margin-left: 5%;
        .title{
          padding-bottom: 0px;
        }
        .aF{
          .fiveImg{
            height:300px;
          }
        }
      }
    }
  }
}
</style>
