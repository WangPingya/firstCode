<template>
    <div id="nav">
        <div @click="change(1)" class="short">
            <img src="../../../img/home-line.svg" alt="" v-show="one">
            <img src="../../../img/home--line.svg" alt="" v-show="!one">
            <span>1</span>
        </div>
        <a href="https://www.baidu.com">root</a>
        <div class="left show" :class="{one: !one}">
            <div class="pointer" @click="change(2)">
                <img src="../../../img/home-line.svg" alt="" v-show="two">
                <img src="../../../img/home--line.svg" alt="" v-show="!two">
                <span class="">1-1</span>
            </div>
            <div :class="{two: !two}" class="left show">
                <div><img src="../../../img/home-line.svg" alt=""><span>1-1-1</span></div>
                <div><img src="../../../img/home-line.svg" alt=""><span>1-1-2</span></div>
                <div><img src="../../../img/home-line.svg" alt=""><span>1-1-3</span></div>
            </div>
            <div><img src="../../../img/home-line.svg" alt=""><span>1-2</span></div>
            <div><img src="../../../img/home-line.svg" alt=""><span>1-3</span></div>
            <div><img src="../../../img/home-line.svg" alt=""><span>1-4</span></div>
        </div>
        <div @click="change(3)" class="pointer">
            <img src="../../../img/home-line.svg" alt="" v-show="three">
            <img src="../../../img/home--line.svg" alt="" v-show="!three">
            <span>2</span>
        </div>
        <div class="left show" :class="{three: !three}">
            <img src="../../../img/home-line.svg" alt="">
            <span>2-1</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Anav',
  data(){
      return{
          one: true,
          two: true,
          three: true,
          first: 0
      }
  },
  methods:{
      change(a){
          if(this.one == true){
              this.two = true;
          }
          switch (a) {
              case 1:
                  this.one = !this.one
                  break;
              case 2:
                  this.two = !this.two
                  break;
              case 3:
                  this.three = !this.three
                  break;
          }
      }
  },
  computed:{

  }
}
</script>

<style>
#nav{
    margin-top: 20px;
    margin-left: 20px;
    line-height: 20px;
    height: 20px;
}
#nav .short{
    display: inline-block;
    cursor: pointer;
}
#nav img{
    height: 20px;
    width: 20px;
    vertical-align: middle;
    margin-right: 10px;
}

#nav span{
    vertical-align: middle;
    display: inline-block;
}

#nav a{
    vertical-align: middle;
    margin-left: 10px;
    text-decoration: none;
    background-color: rgb(17, 245, 245);
}

#nav .left{
    margin-left: 30px;
}

#nav .pointer{
    cursor: pointer;
}

#nav .one{
    height: auto !important;
}

#nav .two{
    height: auto ;
}

#nav .three{
    height: auto !important;
}

#nav .show{
    transition: height 0.5s;
    height: 0;
    overflow: hidden;
}
</style>