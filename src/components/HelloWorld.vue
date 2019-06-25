<template>
 <div class="mainCon">
<!--   导航栏及轮播图-->
 <div class="first">
  <div class="nav">
    <img src="../assets/bt.png">
    <ul>
      <li v-for="(item,index) in navList"  :key="index" @mouseenter="gotoNav(index)"  @click="go(index)">
        <span>{{item}}</span>
        <span v-show="select==index" class="line"></span>
      </li>
    </ul>
  </div>
   <div class="text">

     <p>EMS健身与普通健身比 </p>
       <p>差距在哪？”  </p>
       <p>黑科技智能穿戴运动健身衣，20min高效减脂塑形。</p>
        <div class="play">
          <h5>Enterprise Video</h5>
          <img src="../assets/play.png" alt="">
        </div>

   </div>
  <el-carousel height="920px" indicator-position="none" >
    <el-carousel-item v-for="(item,index) in imgPath" :key="index">
      <img style="width:100%;height:100%;"   :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</div>

<!--   介绍-->
   <div class="second" ref="vertical-line">
      <div class="con" v-for="(item,index) in conList"  :key="index">
        <h1 :id="`category${index}`" :style="index===1?aSize:''">{{item.title}}</h1>
        <span>{{item.content}}</span>
      </div>
     <el-carousel class="a" height="360px"  indicator-position="none">
       <el-carousel-item v-for="(item,index) in imgThree" :key="index">
        <div class="threeImg" >
          <img v-for="i in item.a" :src="i" alt="">
        </div>
       </el-carousel-item>
     </el-carousel>
   </div>

<!--   关于品牌-->
   <div class="third"  >
     <p id="about">关于Revup</p>
     <span id="pin">
                            Revup Space是TECNATIVES公司旗下的品牌，是以Nt产品为核心的健身品牌门店，是以打造全国连锁智能运动穿戴健身品牌，并开展智能运动交互云平台为目标。
Revup Space是第一家使用Nt设备的门店，根据TECNATIVES德国研究院数据报告，目前已有超14万人次使用Nt健身。在Revup Space，
会员们能体验到Nt黑科技智能穿戴产品的功能体现，全新感受20分钟挑战传统健身2小时的黑科技。
 Revup Space是为精英打造的EMS健身空间，每次20分钟，一周2-3次就能短时高效健身，适合上班忙碌以及对生活品质、健康要求较高的人群。
我们一直在追求为客户管理身体目标而努力！
                        </span>
     <p class="size">品牌门店</p>
     <el-carousel class="aT" height="180px"  indicator-position="none">
       <el-carousel-item v-for="(item,index) in imgFour" :key="index">
         <div class="threeImgT" >
           <img v-for="i in item.a" :src="i" alt="">
         </div>
       </el-carousel-item>
     </el-carousel>
      <div class="threeText">
      <div class="firstText" ref="counts" >
        <div class="item">
          <span id="num1">14</span>
          <span>万人次</span>
        </div>
        <div class="item itemT">
          <span id="num2">20</span>
        <span>Min</span>
      </div>
        <div class="item itemT">
          <span id="num3">10</span>
        </div>
      </div>
        <div class="center">
          <span>
            <span class="redCircle"></span>
          </span>
          <span>
            <span class="redCircle"></span>
          </span>
          <span>
            <span class="redCircle"></span>
          </span>
        </div>
        <div class="secondText">
        <span>目前已有超14万人次使用Nt健身</span>
          <span>全新感受20分钟挑战传统2小时黑科技</span>
          <span>目前门店</span>
        </div>
      </div>
   </div>
  <foot-Component ></foot-Component>


 </div>
</template>

<script>
  import footComponent from './foot'
  import countTo from 'vue-count-to'
  import { CountUp } from 'countup.js'
  import Scrollbar from 'smooth-scrollbar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      startValOne:0,
      endValOne:14,
      endValTwo:20,
      endValThree:10,
      endVal:2018,
      duration:5000,
      aSize:{fontSize:'25px'},
      select:0,
      conList:[
        {title:"Nt EMS",content:"EMS 智能健身穿戴结合了现代医学、电子科技和互联网技术，具备自由无线、采用干电极技术等独特优势的黑科技智能穿戴运动健身产品，\n" +
            "由TECNATIVES公司组织中、德专家技术团队共同研发。其原理是模拟脑电波给到人体神经元信号，激活人体核心肌群的快速伸张和收缩，\n" +
            "从而能实现高于普通肌肉锻炼的倍效训练，轻松实现全身和局部EMS健身训练需求。"},
        {title:"品牌故事",content:"\n" +
            "                            TECNATIVES是由中、德两国智能穿戴及人工智能领域专家创立的，立志于探索研发先进的EMS健康技术，为大众健康管理和健康行业提供强大工具而奋斗。\n" +
            "作为放眼全球的国际化品牌，TECNATIVES始终致力于以EMS智能健身穿戴为核心、专注于互联网健康领域发展，\n" +
            "并持续为渴望进入智能健身领域的企业和健身房、私教工作室，提供Nt EMS训练综合解决方案。\n" +
            "       为了让更多的中国人享受前沿EMS健身技术，成立了浙江力方健康科技有限公司，并且在2016年创立全国首家以Nt EMS健身产品为核心的健身空间Revup Space，\n" +
            "打造全国连锁智能运动穿戴健身品牌，引领EMS健身新时尚。秉持着“以科技升级人类健康新生活”的理念，\n" +
            "一方面为用户打造高效安全的智能时尚运动方式，另一方面通过开展智能运动交互云平台，升级数字健身产业，赋予健身行业更多商机。\n" +
            "                        "}
      ],
      aColor:{color:'white'},
      imgPath:[
        require("../assets/one.png"),
        require("../assets/one.png"),
        require("../assets/one.png"),
        require("../assets/one.png")
      ],
      imgThree:[
        {
          a:[ require("../assets/t.png"),
            require("../assets/tw.png"),
            require("../assets/th.png")]
        },
        {
          a:[ require("../assets/t.png"),
            require("../assets/tw.png"),
            require("../assets/one.png")]
        }
      ],
      imgFour:[
        {
          a:[ require("../assets/f.png"),
            require("../assets/fo.png"),
            require("../assets/ft.png"),
            require("../assets/fth.png")]
        },
        {
          a:[ require("../assets/f.png"),
            require("../assets/fo.png"),
            require("../assets/ft.png"),
            require("../assets/fth.png")]
        }
      ],
      navList:[
        "首页",
        "Nt EMS",
        "品牌故事",
        "关于Revup",
        "品牌合作",
        "联系我们"
      ]
    }
  },
  components:{footComponent,countTo },
  mounted(){
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.count()
      },1000)
    })
  },
  methods:{
    gotoNav(index){
     this.select=index
    },
    go(index){
     if(index==2){
       Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#category1"))
     }else if(index===3){
       Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#about"))
     }else if(index===4){
       this.$router.push({path:'/brand'})
       this.$router.go(0)
     }else if(index===1){
        Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#category0"))
     }
     else{
       Scrollbar.get(document.getElementById('scroller-wrapper')).scrollIntoView(document.querySelector("#pin"))
     }
    },
    count(){
      let element=this.$refs.counts;
      let actualTop = element.offsetTop;
      let current = element.offsetParent;
      while (element=element.offsetParent){
        actualTop += element.offsetTop;
        /* current = current.offsetParent; */
      }
      let demoFi1 = new CountUp("num1", 14);
      let demoFi2 = new CountUp("num2", 20);
      let demoFi3 = new CountUp("num3", 10);
      let numok=false;
      let scrollbar=Scrollbar.get(document.getElementById('scroller-wrapper'))
      if(scrollbar){
        scrollbar.addListener((status) => {
          if(!numok){
            if(actualTop<status.offset.y+document.body.clientHeight){
              demoFi1.start();
              demoFi2.start();
              demoFi3.start();
              numok=true;
            }
          }
        });
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $height:1150px;
.mainCon{
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
        width:60%;
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
          letter-spacing: 1px;
          .line{
            position: absolute;
            bottom: 0;
            display: inline-block;
            height:2px;
            width:0;
            left: -5%;
            background-color: #FF9500;
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
      margin-left: 15%;
      margin-top:340px;
      p{
        font-weight: bold;
        color:white;
        font-size: 22px;
      }
      .play{
        width:100%;
        display: flex;;
        flex-direction: row;
        h5{
          color:white;
        }
        img{
          height:40px;
          width:40px;
          margin-top: 10px;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .second{
    width:100%;
    height: $height;
    background: url("../assets/bgT.jpg") no-repeat;
    background-size: 100% 100%;
    .con{
      width:100%;
      text-align: center;
      padding-top: 60px;
      h1{
        font-size: 40px;
        font-weight: bold;
        color:white;
        margin-block-start: 0;
        margin-block-end: 0;
      }
      span{
        width:60%;
        color:#CBCACA;
        font-size: 12px;
        line-height: 40px;
        display: inline-block;
        margin-top: 60px;
      }
    }
    .a{
      width:80%;
      margin-left: 10%;
      margin-top: 60px;
      position: absolute;
      .threeImg{
        height:360px;
        width:100%;
        padding-left: 14%;
        img{
          width:20%;
          height:100%;
          margin-left: 3%;
          position: static;
        }
      }
    }
  }
  .third{
    width:100%;
    background: url("../assets/house.jpg");
    background-size: 100% 100%;
    text-align: center;
    padding-top: 120px;
    p{
      font-size: 25px;
      font-weight: bold;
      color:white;
      margin-block-start: 0;
      margin-block-end: 0;
    }
    span{
      width:60%;
      color:#CBCACA;
      font-size: 12px;
      line-height: 40px;
      display: inline-block;
      margin-top: 50px;
    }
    .size{
      margin-top: 40px;
      font-size:15px;
      font-weight: normal;
    }
    .aT{
      width:86%;
      margin-top: 60px;
      margin-left: 7%;
      .threeImgT{
        height:180px;
        width:100%;
        img{
          width:15%;
          height:100%;
          position: static;
          margin-left: 1%;
        }
      }
    }
    .threeText{
      width:100%;
      margin-top:40px;
      padding-bottom: 40px;
      .firstText,.secondText{
        display: flex;;
        flex-direction: row;
        height:40px;
        padding-bottom: 10px;
        padding-top: 10px;
        span{
          margin-top: 0;
        }
        .item{
          display: flex;
          flex-direction: row;
          width:18%;
          margin-left: 14%;
          span{
            display: inline;
            width:12%;
          }
          span:first-child{
            font-size: 30px;
            font-weight: bold;
            line-height: 20px;
          }
          span:last-child{
            line-height: 30px;
            font-size: 10px;
          }
          #num3{
            font-size: 30px;
          }
          /*.lastText{*/
          /*  font-size: 30px !important;*/
          /*}*/
        }
        .itemT{
          margin-left: 16%;
        }
      }
      .center{
        width:100%;
        height:1px;
        background-color: #FF9500;
        display: flex;
        flex-direction: row;
        span{
          height:25px;
          width:25px;
          border-radius: 50%;
          display: inline-block;
          margin-top: -12px;
          background: rgba(253,135,35,0.2);
          line-height: 0;
          .redCircle{
            display: inline-block;
            height:15px;
            width:15px;
            border-radius: 50%;
            background-color:  #FF9500;
            opacity: 0;
            margin-left: 0% !important;
            margin-top: 5px;
            animation:myfirst 5s infinite;
            animation-direction:alternate;
            z-index: 999;

            /* Safari 和 Chrome */
            -webkit-animation:myfirst 5s infinite;
            -webkit-animation-direction:alternate;
          }
          @keyframes myfirst
          {
            0%   {opacity:1}
            50%  {opacity:0.4}
            100% {opacity:1}
          }

          @-webkit-keyframes myfirst /* Safari 和 Chrome */
          {
            0%   {opacity:1}
            50%  {opacity:0.4}
            100% {opacity:1}
          }
        }
        span:first-child{
          margin-left: 16%;
        }
        span:nth-child(2){
          margin-left:32%;
        }
        span:last-child{
        margin-left: 32.2%;
        }
      }
    }
  }
  @media screen and (max-width: 1366px){
   .second{
     .a{
       width:90%;
       margin-left: 5%;
       .threeImg{
         height:300px;
       }
     }
   }
    .third{
      .threeText{
        .firstText{
          .item{
           span{
             width:15%;
           }
          }
        }
      }
      .center{
        span:nth-child(2){
          margin-left:31.3% !important;
        }
        span:last-child{
          margin-left: 31.6% !important;
        }
      }
    }
  }
}


</style>
