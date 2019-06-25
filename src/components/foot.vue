<template>
    <div class="footCon">
      <!--   底部内容-->
      <div class="foot">
        <img src="../assets/bt.png" alt="">
        <div class="footCon">
          <p>全国热线：400-0574-997</p>
          <p>电　　话：0574-87041998</p>
          <p>公司邮箱：service@tecnatives.cn </p>
          <p>友情链接：http://tecnatives.cn </p>
          <p>地　　址：宁波市江北区北岸财富中心158-162号（靠近欧文西点工坊）</p>
        </div>
        <div class="right">
          <img src="../assets/two.png" alt="">
          <p>扫一扫</p>
          <p>实时了解动态</p>
        </div>
      </div>

      <div class="lastCon">
        <span>CopyRight 2019 浙江力方健康科技有限公司 版权所有  浙ICP备：346546541654-1号</span>
        <span>网站设计</span>
        <span>三盛网络</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style lang="scss" scoped>
.footCon{
  width:100%;
  .foot{
    width:100%;
    display: flex;
    flex-direction: row;
    background-color: #2E2E2E;
    padding-bottom: 25px;
    padding-top: 25px;
    img{
      width:220px;
      height:60px;
      margin-left: 16%;
      margin-top: 3%;
    }
    .footCon{
      width:30%;
      margin-left: 3%;
      p{
        font-size: 12px;
        color:#cccccc;
        line-height: 30px;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      margin-left:5%;
      img{
        height:130px;
        width:130px;
      }
      p{
        color:#cccccc;
        font-size: 12px;
        text-align: center;
        margin-left: 20%;
        margin-block-start: 0.8em;
        margin-block-end: 0.3em;
      }
    }
  }
  .lastCon{
    width:100%;
    display: flex;
    flex-direction: row;
    background-color: #202020;
    color:#cccccc;
    font-size: 12px;
    padding-top: 30px;
    padding-bottom: 30px;
    span{
      color: #cccccc;
    }
    span:first-child{
      margin-left:16%;
    }
    span:nth-child(2){
      margin-left: 26%;
    }
    span:last-child{
      margin-left: 3%;
    }
  }
}
</style>
