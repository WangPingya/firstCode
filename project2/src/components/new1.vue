<template>
  <div id="new1">
    <el-container>
        <el-header height="auto">
            <div class="menu">
                <a href="javascipt:void(0)" v-for="(item,index) in menuButton" :key="index">{{item}}</a>
            </div>
            <div class="nav">
                <div class="top-icon">
                    <a href="javascript:void(0)" @click="icon"><img src="../../../img/1.png" alt=""></a>
                    <div v-show="showIcon" class="icon">
                        <a href="javascript:void(0)" v-for="(item,index) in img1" :key="index"><img :src="item.src" alt=""></a>
                        <img src="../../../img/7.png" alt="">
                        <a href="javascript:void(0)"><img src="../../../img/8.png" alt=""></a>
                        <img src="../../../img/7.png" alt="">
                        <a href="javascript:void(0)" v-for="(item,index) in img2" :key="index + 5"><img :src="item.src" alt=""></a>
                        <img src="../../../img/7.png" alt="">
                        <a href="javascript:void(0)" v-for="(item,index) in img3" :key="index + 8"><img :src="item.src" alt=""></a>
                    </div>
                </div>
                <div class="bottom-bar">
                    <span>Units</span>
                    <select name="change" id="">
                        <option value="SI System">SI System</option>
                    </select>
                    <a href="javascript:void(0)"><img src="../../../img/下.png" alt=""></a>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="280px" class="aside">
                <div class="asideBGC">
                    <button class="changeButton" @click="changeTree" v-show="!showAside">{{asideButton[asideSign]}}</button>
                    <img src="../../../img/arrow-small-right.svg" alt="" class="leftArrow" @click="showAsideList" v-show="showAside">
                    <div v-show="!showAside">
                        <div class="asideName">
                            <span v-if="data[0]">{{asideName[asideSign]}}</span>
                            <img src="../../../img/arrow-small-left.svg" alt="" class="rightArrow" @click="showAsideList">
                        </div>
                        <select name="all" id=""><option value="01">All Items</option></select>
                    </div>
                </div>
                <el-tree :data="data" highlight-current v-show="!showAside" ref="tree" @node-click="showView" accordion></el-tree>
            </el-aside>
            <el-aside width="1560px" class="main">
                <div class="Specifications" v-show="showView1 == 3">
                    <div class="search">
                        <label for="searchS">搜索：</label>
                        <input type="text" placeholder="请键入目标物质" id="searchS" @keyup.enter="valueChange">
                    </div>
                    <el-table
                        :data="tableData3"
                        height="460"
                        border
                        stripe
                        style="width: 700px"
                        class="sTable"
                        highlight-current-row
                        @row-click="rowClick"
                        ref="table">
                        <el-table-column
                        prop="name"
                        label="Name"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="cas"
                        label="CAS#"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="formula"
                        label="Formula">
                        </el-table-column>
                        <el-table-column
                        prop="dataBase"
                        label="Database">
                        </el-table-column>
                    </el-table>
                    <div class="button">
                        <button @click="addS">添加至</button>
                        <button @click="deleteS">移除</button>
                        <button @click="clearAll">清空</button>
                    </div>
                    <span class="selected">已选组分：</span>
                    <div class="selectBlock">
                        <div v-for="(item,index) in chosenS" :key="index" class="chosenS" :class="{highLight: index == chosenNum}" @click="chosenAdded(index)">{{item}}</div>
                    </div>
                </div>
                <div class="Specifications1" v-show="showView1 == 14">
                    <div class="choosePackage">
                        <span>Available Property Packages</span>
                        <div class="block">
                            <div v-for="(item,index) in methodsS"
                            :key="index"
                            @click="rowClick(item,index)"
                            :class="{highLight: index == chosenNum1}">{{item}}</div>
                        </div>
                    </div>
                    <div class="button">
                        <button @click="addS()">添加至</button>
                        <button @click="deleteS()">移除</button>
                        <button @click="clearAll">清空</button>
                    </div>
                    <span class="selected">已选组分：</span>
                    <div class="selectBlock">
                        <div
                        v-for="(item,index) in chosenS1"
                        :key="index"
                        class="chosenS"
                        :class="{highLight: index == chosenNum2}"
                        @click="chosenAdded(index)">{{item}}</div>
                    </div>
                </div>
                <div class="Analysis" v-show="showView1 == 29">
                    <div class="mainProcess">主流程图</div>
                    <img src="../../../img/process.jpg" alt="" class="mainProcessImg">
                    <div class="module">模块库</div>
                    <div class="moduleBox">

                    </div>
                </div>
            </el-aside>
        </el-container>
    </el-container>
    <button class="button">{{showButton}}</button>
    <button class="button">{{'状态查询'}}</button>
  </div>
</template>

<script>
import {getData} from '../assets/testResponse'

export default {
  name: 'new1',
  data(){
      return{
          menuButton: ['文件','设置','工具','插入','动态','优化','分析'],
          img1: [{src:require('../../../img/2.png')},{src:require('../../../img/3.png')},{src:require('../../../img/4.png')},{src:require('../../../img/5.png')},{src:require('../../../img/6.png')}],
          img2: [{src:require('../../../img/9.png')},{src:require('../../../img/10.png')},{src:require('../../../img/11.png')}],
          img3: [{src:require('../../../img/12.png')},{src:require('../../../img/13.png')},{src:require('../../../img/14.png')}],
          showIcon: true,
          showAside: false,
          data: [],
          prepareData: [],
          asideName: [],
          asideSign: 0,
          asideButton: ['基础设置','流程搭建'],
          tableData3: [],
          showView1: '',
          chosenName: '',
          chosenS: [],
          chosenNum: 1000,
          ifMethods: false,
          methodsS: [],
          chosenName1: '',
          chosenNum1: 1000,
          chosenS1: [],
          chosenNum2: 1000,
          button1: ['输入不完整','结果收敛']
      }
  },
  created() {
      getData().then(res => {
         this.data = this.transformData(res.data[0])
         this.prepareData.push(this.data)
         this.prepareData.push(this.transformData(res.data[1]))
         this.showAsideName = this.asideName[0]
         this.tableData3 = res.sData
         this.methodsS = res.msData
      }).catch(res => {
        console.log(res.msg)
      });
  },
  computed: {
      showButton() {
          if(this.asideSign == 0){
              return this.button1[0]
          }else{
              return this.button1[1]
          }
      }
  },
  methods: {
      icon() {
          this.showIcon = !this.showIcon
      },
      transformData(data) {
          this.asideName.push(data.name)             //数组的= 和 push注意区别用处
          let dataAfterTransform = []
          for(const i of data.children){
              dataAfterTransform.push(this.parse(i))
          }
          return dataAfterTransform
      },
      parse(index) {
          const tem = {}
          tem.label = index.name
          tem.children = []
          if(index.children && index.children.length > 0) {
              for(const j of index.children) {
                  tem.children.push(this.parse(j))
              }
          }
          return tem
      },
      changeTree() {
          if(this.asideSign == 0){
              this.asideSign = 1
          }else{
              this.asideSign = 0
          }
          this.data = this.prepareData[this.asideSign];
      },
      showAsideList() {
          this.showAside = !this.showAside
      },
      showView(data) {
          this.showView1 = data.$treeNodeId
          console.log(data);
      },
      rowClick(data,index) {
          if (this.showView1 == 14) {
            this.chosenName1 = data
            this.chosenNum1 = index
          }else{
            this.chosenName = data.name
          }
      },
      addS() {
          if (this.chosenS.length == 0 || this.chosenS1.length == 0) {
              this.chosenNum = 1000
              this.chosenNum2 = 1000
          }
          if (this.showView1 == 14) {
            if(this.ifhave(this.chosenName1,this.chosenS1)){
            this.chosenS1.push(this.chosenName1)
            }
          }else{
            if(this.ifhave(this.chosenName,this.chosenS)){
            this.chosenS.push(this.chosenName)
            }
          }
      },
      ifhave(name,array) {
          let have = true               //防止循环第一次无法执行
          for (let i = 0; i < array.length; i++) {
              if(array[i] == name){
                have = false
                break
              }else{
                have = true
              }
          }
          return have
      },
      chosenAdded(index) {
          if (this.showView1 == 14) {
              this.chosenNum2 = index
          }else{
              this.chosenNum = index
          }
      },
      deleteS() {
          if (this.showView1 == 14) {
            this.chosenS1.splice(this.chosenNum2, 1)
          }else{
            this.chosenS.splice(this.chosenNum, 1)
          }
      },
      clearAll() {
          this.chosenS = []
          this.chosenS1 = []
          this.chosenNum = 1000
          this.chosenNum2 = 1000
      },
      valueChange(event) {
          for (let i = 0; i < this.tableData3.length; i++) {
              if (this.tableData3[i].name == event.target.value) {            //input方法
                  this.$refs.table.setCurrentRow(this.tableData3[i])
                  this.chosenName = this.tableData3[i].name
                  break
              }
          }
      }
}
}
</script>

<style>
#new1{
    border: 1px #000 solid;
    height: 915px;
}

#new1 .menu{
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 2px;
    margin-bottom: 5px;
    margin-left: 20px;
}

#new1 .menu a{
    text-decoration: none;
    color: #000;
}

#new1 .nav{
    border: 1px solid #000;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 1858px;
}

#new1 .nav .bottom-bar span{
    display: inline-block;
    background-color: #eee;
    padding: 2px 10px;
    height: 20px;
    vertical-align: middle;
}

#new1 .nav .bottom-bar select{
    border-left:1px solid #0ff;
    border-right:1px solid #0ff;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
    height: 24px;
}

#new1 .nav .bottom-bar img{
    display: inline-block;
    vertical-align: middle;
    height: 24px;
}

#new1 .nav .top-icon .icon{
    display: inline;
}
/* ---------------------aside----------------------- */
#new1 .aside{
    border: solid 1px #000;
    height: 775px;
    margin-left: 20px;
    margin-top: 5px;
}

#new1 .aside .asideBGC{
    background-color: #eee;
    display: inline-block;
    width: 100%;
}

#new1 .changeButton{
    margin-top: 5px;
    margin-left: 20px;
    background-color: #0ff;
    display: block;
}

#new1 .aside select{
    width: 210px;
    margin-left: 20px;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 5px;
}

#new1 .aside .asideName{
    margin-top: 5px;
    margin-left: 20px;
    font-size: 20px;
}

#new1 .leftArrow{
    height: 25px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 5px;
    margin-left: 20px;
}

#new1 .aside .asideName .rightArrow{
    height: 25px;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    margin-left: 100px;
}
/* ---------------------main----------------------- */
#new1 .main{
    display: inline-block;
    border: solid 1px #000;
    height: 775px;
    margin-left: 20px;
    margin-top: 5px;
}

#new1 .main .Specifications{
    position: relative;
}

#new1 .main .Specifications .search{
    position: absolute;
    display: inline-block;
    top: 70px;
    left: 50px;
    font-size: 25px;
}

#new1 .main .Specifications .search input{
    height: 25px;
    width: 700px;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
}

#new1 .main .Specifications .sTable{
    position: absolute;
    top: 170px;
    left: 100px;
}

#new1 .main .Specifications .button{
    position: absolute;
    display: inline-block;
    width: 56px;
    top: 200px;
    left: 900px;
    text-align: center;
}

#new1 .main .Specifications .button button{
    margin-bottom: 20px;
    height: 40px;
    width: 80px;
}

#new1 .main .Specifications .selected{
    position: absolute;
    left: 1110px;
    top: 140px;
}

#new1 .main .Specifications .selectBlock{
    border: 1px solid #000;
    display: inline-block;
    height: 460px;
    width: 400px;
    position: absolute;
    top: 170px;
    right: 70px;
}

#new1 .main .Specifications .selectBlock .chosenS{
    padding-top: 6px;
    padding-left: 12px;
    display: inline-block;
    width: 388px;
    cursor: pointer;
    height: 20px;
    line-height: 14px;
}

#new1 .main .highLight{
    background-color: #CFE1F5;
}

#new1 .main .Specifications1 .choosePackage{
    display: inline-block;
    position: relative;
    top: 150px;
    left: 100px;
    border: 1px solid #000;
    height: 460px;
    width: 700px;
}

#new1 .main .Specifications1 .choosePackage span{
    position: absolute;
    display: inline-block;
    background-color: #fff;
    top: -12px;
    left: 20px;
}

#new1 .main .Specifications1 .choosePackage .block{
    padding-top: 8px;
    height: 452px;
    overflow: auto;
}

#new1 .main .Specifications1 .choosePackage .block div{
    padding-left: 7px;
    margin-bottom: 3px;
}

#new1 .main .Specifications1 .button{
    position: absolute;
    display: inline-block;
    width: 56px;
    top: 300px;
    left: 1250px;
    text-align: center;
}

#new1 .main .Specifications1 .button button{
    margin-bottom: 20px;
    height: 40px;
    width: 80px;
}

#new1 .main .Specifications1 .selected{
    position: absolute;
    left: 1470px;
    top: 220px;
}

#new1 .main .Specifications1 .selectBlock{
    border: 1px solid #000;
    display: inline-block;
    height: 460px;
    width: 400px;
    position: absolute;
    top: 260px;
    right: 70px;
}

#new1 .main .Specifications1 .selectBlock .chosenS{
    padding-top: 6px;
    padding-left: 12px;
    display: inline-block;
    width: 388px;
    cursor: pointer;
    height: 20px;
    line-height: 14px;
}

#new1 .main .Analysis{
    position: relative;
}

#new1 .main .Analysis .mainProcess{
    background-color: #0ff;
    display: inline-block;
    border: 1px solid #000;
    width: 100px;
    height: 30px;
    position: absolute;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
    margin-left: 20px;
}

#new1 .main .Analysis .mainProcessImg{
    width: 1000px;
    position: absolute;
    margin-top: 200px;
    margin-left: 50px;
}

#new1 .main .Analysis .module{
    background-color: #0ff;
    display: inline-block;
    border: 1px solid #000;
    width: 100px;
    height: 30px;
    position: absolute;
    margin-left: 1180px;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
}

#new1 .main .Analysis .moduleBox{
    display: inline-block;
    position: absolute;
    border: 1px solid #000;
    margin-top: 60px;
    margin-left: 1150px;
    width: 380px;
    height: 680px;
}

#new1 .button{
    width: 120px;
    height: 23px;
    line-height: 20px;
    text-align: center;
    margin-left: 30px;
    margin-top: 8px;
}
</style>