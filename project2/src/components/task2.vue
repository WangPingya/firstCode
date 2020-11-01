<template>
  <div id="task2">
    <span class="title">数据对撞融合</span>
    <i class="line"></i>
    <span class="label1">企业数据融合</span>
    <span class="label2">电子运\路单一致性</span>
    <div id="pie1" style="width: 400px;height: 400px"></div>
    <div id="pie2" style="width: 400px;height: 400px"></div>
    <div class="leftAll"><div>总数</div><span>{{getNum1}}</span></div>
    <div class="rightAll"><div>总数</div><span>{{getNum2}}</span></div>
    <div class="leftData">
      <div>
        <i class="point" style="border-color: #749f83;background-color: #749f83"></i>
        <span>匹配度</span>
        <span style="color: #749f83">高 {{this.high}}</span>
      </div>
      <div>
        <i class="point" style="border-color: #ca8622;background-color: #ca8622"></i>
        <span>匹配度</span>
        <span style="color: #ca8622">中 {{this.middle}}</span>
      </div>
      <div>
        <i class="point" style="border-color: #bda29a;background-color: #bda29a"></i>
        <span>匹配度</span>
        <span style="color: #bda29a">低 {{this.low}}</span>
      </div>
    </div>
    <div class="rightData">
      <div>
        <i class="point" style="border-color: #c23531;background-color: #c23531"></i>
        <span>匹配通过</span>
        <span style="color: #c23531;margin-left: 5px">{{this.pass}}</span>
      </div>
      <div>
        <i class="point" style="border-color: #61a0a8;background-color: #61a0a8"></i>
        <span>匹配不通过</span>
        <span  style="color: #61a0a8;margin-left: 5px">{{this.fail}}</span>
      </div>
      <div>
        <i class="point" style="border-color: #d48265;background-color: #d48265"></i>
        <span>无法匹配</span>
        <span style="color: #d48265;margin-left: 5px">{{this.notMatch}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task2',
  data() {
    return{
      pie1: {
				tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
				},
				series: [{
						name: '企业数据融合',
						type: 'pie',
						radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            clockWise: false,
						emphasis: {
								label: {
										show: true,
										fontSize: '30',
										fontWeight: 'bold'
								}
            },
            label: {
              show: true,
              formatter: '{d}%'
            },
						labelLine: {
								show: true
						},
						data: [
								{value: 200, name: '高',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
								{value: 20, name: '中',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
								{value: 4, name: '低',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}}
						]
				}],
        color: ['#749f83', '#ca8622', '#bda29a']
      },
      pie2: {
				tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
				},
				series: [{
						name: '电子运\\路单一致性',
						type: 'pie',
						radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            clockWise: false,
						emphasis: {
								label: {
										show: true,
										fontSize: '30',
										fontWeight: 'bold'
								}
            },
            label: {
              show: true,
              formatter: '{d}%'
            },
						labelLine: {
								show: true
						},
						data: [
								{value: 100, name: '匹配通过',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
								{value: 80, name: '匹配不通过',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
								{value: 0, name: '无法匹配',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}}
						]
				}],
        color: ['#c23531', '#61a0a8', '#d48265']
      },
      high: 200,
      middle: 20,
      low: 4,
      pass: 100,
      fail: 80,
      notMatch: 0
    }
	},
	mounted() {
		this.getPie()
  },
  computed: {
    getNum1() {
      return this.high + this.middle + this.low
    },
    getNum2() {
      return this.pass + this.fail + this.notMatch
    }
  },
	methods: {
		getPie() {
			let leftPie = this.$echarts.init(document.getElementById('pie1'))
      leftPie.setOption(this.pie1)
      leftPie.setOption({
				series: [{
						data: [
								{value: this.high, name: '高',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
								{value: this.middle, name: '中',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
								{value: this.low, name: '低',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}}
						]
				}]
      })
      let rightPie = this.$echarts.init(document.getElementById('pie2'))
      rightPie.setOption(this.pie2)
			rightPie.setOption({
				series: [{
						data: [
              {value: this.pass, name: '匹配通过',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
              {value: this.fail, name: '匹配不通过',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}},
              {value: this.notMatch, name: '无法匹配',itemStyle: {borderWidth: 4,borderStyle: 'solid',borderColor: '#224467'}}
						]
				}]
      })
		}
	}
}
</script>

<style>
@font-face {
  font-family: PingFang;
  src: url('../../../font/PingFang-Jian-ChangGuiTi-2.ttf');
}

@font-face {
  font-family: DS1;
  src: url('../../../font/DS-DIGIT-4.ttf');
}

body{
  margin: 0;
}

#task2{
  color: #fff;
  position: relative;
  background-color: #031E3B;
  height: 937px;
}

#task2 .title{
  font-size: 20px;
  display: inline-block;
  margin-left: 75px;
  margin-top: 20px;
  font-weight: 700;
  color: #0ff;
}

#task2 .line{
  position: absolute;
  display: block;
  height: 1px;
  width: 1800px;
  border-bottom: 1px solid #eee;
  left: 60px;
  top: 50px;
}

#task2 .label1{
  position: absolute;
  top: 100px;
  left: 420px;
  font-size: 20px;

}

#task2 .label2{
  position: absolute;
  top: 100px;
  left: 1326px;
  font-size: 20px;
}

#task2 #pie1{
	position: absolute;
	top: 140px;
	left: 280px;
}

#task2 #pie2{
	position: absolute;
	top: 140px;
	left: 1208px;
}

#task2 .leftData{
  position: absolute;
  top: 600px;
  left: 350px;
}

#task2 .rightData{
  position: absolute;
  top: 600px;
  left: 1310px;
}

#task2 .leftAll{
  position: absolute;
  top: 305px;
  left: 450px;
  text-align: center;
}

#task2 .leftAll span{
  display: inline-block;
  margin-top: 5px;
  font-family: DS1;
  font-size: 40px;
  color: red;
}

#task2 .rightAll{
  position: absolute;
  top: 305px;
  left: 1380px;
  text-align: center;
}

#task2 .rightAll span{
  display: inline-block;
  margin-top: 5px;
  font-family: DS1;
  font-size: 40px;
  color: red;
}

#task2 .point{
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #749f83;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
  margin-bottom: 4px;
}
</style>