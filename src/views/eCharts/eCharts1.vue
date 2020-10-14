<template>
<div>
  <div class="tu">
    <div id="main" style="width: 300px;height:400px;"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: 'ECharts'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
    this.initeCharts()
  },
  methods: {
    initeCharts() {
      let myChart = this.$echarts.init(document.getElementById('main'))
      myChart.setOption(this.option)
    }
  }
}
</script>

<style>
</style>
