<template>
<div>
  <div class="tu">
    <ve-pie :title='pie.title' :data='pie.data' :colors='pie.colors' width='500px'></ve-pie>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style>
</style>
