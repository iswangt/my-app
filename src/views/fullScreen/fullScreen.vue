<template>
<div>
  <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
  <div class="a" @click="toggleFullScreen()">点击显示方式</div>
  <div class="b">文字显示</div>
</div>
</template>

<script>
import breadcrumb from '@/components/breadCrumb'
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
    }
  },
  methods: {
    toggleFullScreen() { // 点击全屏方法

      // 检测全屏属性，无返回null 
      let isFull = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement

      let d = document // 文档模型
      let dd = document.documentElement // 根文档元素

      console.log(d)
      console.log(dd)

      let headerDom = document.getElementsByClassName('header')[0]
      let aside = document.getElementsByClassName('aside')[0]
      let footer = document.getElementsByClassName('footer')[0]

      if (!isFull) {
        headerDom.style.display = 'none'
        aside.style.display = 'none'
        footer.style.display = 'none'
        if (dd.requestFullscreen) {
          dd.requestFullscreen();
        } else if (dd.mozRequestFullScreen) {
          dd.mozRequestFullScreen();
        } else if (dd.webkitRequestFullscreen) {
          dd.webkitRequestFullscreen();
        }
      } else {
        headerDom.style.display = ''
        aside.style.display = ''
        footer.style.display = ''
        if (d.cancelFullScreen) {
          d.cancelFullScreen();
        } else if (d.mozCancelFullScreen) {
          d.mozCancelFullScreen();
        } else if (d.webkitCancelFullScreen) {
          d.webkitCancelFullScreen();
        }
      }
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

.a {
  width: $numMin; // 变量 100px
  height: $numMin; // 变量
  background: $colorRed; // 变量
  @extend %font; // 继承
  @include border(5px, solid, black); // 混合
  @include border-radius(20px); // 混合
}

.b {
  width: $numMax; // 变量200px
  height: $numMax;
  background: $colorGreen;
  @extend %font; // 继承
  @include border(10px, solid, yellow) // 混合
}
</style>
