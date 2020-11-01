<template>
  <div id="son1">
    <div v-for="(item,index) in sdata" :key="index">
      <div @click="show(index,1)">
        <img src="../../../img/home-line.svg" alt="" :class="{hidden: aArray[index].label}">
        <img src="../../../img/home--line.svg" alt="" v-if="sdata[index].children[0]" :class="{hidden: !aArray[index].label}">
        {{item.name}}<a :href="sdata[index].link" v-if="sdata[index].label" class="a">{{item.label}}</a>
      </div>
      <div v-for="(item,index1) in sdata[index].children" :key="index1" class="left" :class="{hidden: !aArray[index].label}">
        <div @click="show(index1,2)">
          <img src="../../../img/home-line.svg" alt="" :class="{hidden: third}">
          <img src="../../../img/home--line.svg" alt="" v-if="sdata[index].children[index1].children[0]" :class="{hidden: !third}">
          {{item.name}}
        </div>
        <div v-for="(item,index2) in sdata[index].children[index1].children" :key="index2" class="left" :class="{hidden: !third}">
          <img src="../../../img/home-line.svg" alt="">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'son1',
  props: {
      sdata:Array
  },
  data(){
    return {
      aArray: [{label: false},{label: false}],
      third: false
    }
  },
  methods: {
    show(a,b) {
      if(b === 1){
        this.aArray[a].label = !this.aArray[a].label
      }else{
        this.third = !this.third
      }
    }
  },
  computed: {

  },
}
</script>

<style>
#son1{
  margin-left: 20px;
  font-size: 20px;
  line-height: 20px;
}

#son1 .left{
  margin-left: 20px;
}

#son1 .a{
  text-decoration: none;
  background-color: #0ff;
  height: 18px;
  display: inline-block;
  border: 1px solid #00ffff;
  border-radius: 20%;
  color: #000;
  margin-left: 5px;
}

#son1 img{
  height: 20px;
  vertical-align: bottom;
  display: inline-block;
}

#son1 .hidden{
  max-height: 0;
  overflow: hidden;
}


  /* 用max-height展开时无动画，隐藏时有动画会卡顿
     用element
     用animate */

</style>