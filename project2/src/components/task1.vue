<template>
  <div id="task1">
      <div id="left" style="width: 633px;height: 860px"></div>
      <button @click="start">开始</button>
      <button @click="end" class="end">停止</button>
      <div class="middle">
        <div v-for="(item,index) in heightValue" :key="index"><span>{{item.name}}</span>水箱液位过载，过载量为<span>{{item.value}}</span></div>
      </div>
      <div id="right" style="width: 633px;height: 900px">
      </div>
  </div>
</template>

<script>
export default {
  name: 'task1',
  data() {
    return{
      canA: [0],
      canB: [0],
      canAB: [0,0],
      leftChartOption: {
        title: {
            text: '两水箱高度'
        },
        tooltip: {},
        legend: {
            data:['液位值']
        },
        xAxis: {
            data: ["A水箱","B水箱"]
        },
        yAxis: {},
        series: [{
            name: '液位值',
            type: 'bar',
            data: [0,0]
        }]
      },
      t1: null,                    //定义一个定时器的变量，使得他可以关，可以再开
      heightValue: [],
      rightChartOption: {
        title: {
            text: '两水箱液位变化'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['A水箱', 'B水箱']
        },
        grid: {
            left: '1%',
            right: '2%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
              show: true
            },
            data: ['0']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'A水箱',
                type: 'line',
                data: [0]
            },
            {
                name: 'B水箱',
                type: 'line',
                data: [0]
            }
        ],
        dataZoom: [{
            type: 'slider',
            show: true,
            maxValueSpan: 10,
            zoomLock: true,
            startValue: 0,
            end: 100
        }],
      },
      xAxisNew: ['0'],
      i: 1
    }
  },
  mounted() {
      this.getChart()
      this.getLineChart()
  },
  methods: {
      getChart() {
        let leftChart = this.$echarts.init(document.getElementById("left"))
        leftChart.setOption(this.leftChartOption)
      },
      start() {
        if (!this.t1) {
          let leftChart = this.$echarts.init(document.getElementById("left"))          //更新左边高度
          this.t1 = setInterval(() => {
            this.canAB[0] = Math.random() * 320 + 30
            this.canAB[1] = Math.random() * 320 + 30
            this.canA.push(this.canAB[0])                                             //给右边用
            this.canB.push(this.canAB[1])
            leftChart.setOption({
              series: [{
                  name: '液位值',
                  data: this.canAB
              }]
            })

            let temDataA = {}                                                         //显示用，防止重复
            let temDataB = {}
            if (this.canAB[0] > 150) {
              temDataA.name = 'A'
              temDataA.value = this.canAB[0] - 150
              this.heightValue.push(temDataA)
            }
            if (this.canAB[1] > 150) {
              temDataB.name = 'B'
              temDataB.value = this.canAB[1] - 150
              this.heightValue.push(temDataB)
            }
            
            this.xAxisNew.push(this.i + 's')                                          //更新横坐标，纵坐标，横坐标slider位置
            this.i = this.i + 1
            let lastNum = 100 - ((100 / this.canA.length) * 10)
            let rightChart = this.$echarts.init(document.getElementById('right'))
            rightChart.setOption({
              series: [
                {
                    name: 'A水箱',
                    data: this.canA
                },
                {
                    name: 'B水箱',
                    data: this.canB
                }
              ],
              dataZoom: [{
                start: lastNum
              }],
              xAxis: {
                data: this.xAxisNew
              },
            })
          }, 1000)
        }
      },
      end() {
        clearInterval(this.t1)
        this.t1 = null
      },
      getLineChart() {
        let rightChart = this.$echarts.init(document.getElementById('right'))
        rightChart.setOption(this.rightChartOption)
      }
  }
}
</script>

<style>
#task1{
    display: flex;
    justify-content: space-between;
    position: relative;
}

#task1 button{
  position: absolute;
  height: 40px;
  width: 80px;
  top: 860px;
  left: 300px;
}

#task1 .end{
  margin-left: 90px;
}

#task1 .middle span{
  color: red;
  font-weight: 700;
}

#task1 .middle{
  height: 500px;
  width: 633px;
  overflow: auto;
}
</style>