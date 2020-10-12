<template>
<div>
  <breadCrumb :breadcrumb='breadcrumb'></breadCrumb>
  <div class="tu">
    <div id="main" style="width: 300px;height:400px;"></div>
    <ve-line :data='line.data' width='500px'></ve-line>
    <ve-pie :data='line.data' width='500px'></ve-pie>
    <ve-pie :title='pie.title' :data='pie.data' :colors='pie.colors' width='500px'></ve-pie>
  </div>
</div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb'
export default {
  data() {
    return {
      breadcrumb: {
        data: [{
            label: `message.login`,
            path: '/'
          },
          {
            label: `message.menu.${this.$route.meta.localekey}`
          }
        ]
      },
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
      },
      line: {
        data: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [{
              '日期': '2018-05-22',
              '访问用户': 32371,
              '下单用户': 19810
            },
            {
              '日期': '2018-05-23',
              '访问用户': 12328,
              '下单用户': 4398
            },
            {
              '日期': '2018-05-24',
              '访问用户': 92381,
              '下单用户': 52910
            }
          ]
        }
      },
      pie: {
        data: {
          columns: ['名字', '分数'],
          rows: [{
              '名字': '小明',
              '分数': '30',
            },
            {
              '名字': '小红',
              '分数': '60',
            }, {
              '名字': '小蓝',
              '分数': '90',
            }
          ]
        },
        colors: ['red', 'green', 'yellow']
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
  },
  components: {
    breadCrumb
  }
}
</script>

<style>
.tu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
