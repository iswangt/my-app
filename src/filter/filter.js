import Vue from 'vue'

// 时间过滤器
Vue.filter('formatDate', function (value,fmts = 'yyyy-MM-dd HH:mm:ss'){
  // var fmt = 'yyyy-MM-dd HH:mm:ss' 
  var fmt = fmts
  if (value === null || value === '' || value === undefined) {
    return
  }
  var date = new Date(parseInt(value))
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
    }
    let o = {
    'M+':date.getMonth() + 1,
    'd+':date.getDate(),
    'H+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds()
    };
    
    // 遍历这个对象
    for(let k in o){
    if(new RegExp(`(${k})`).test(fmt)){
     // console.log(`${k}`)
     let str = o[k] + '';
     fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
    }
    }
    return fmt;
})
function padLeftZero(str) {
  return ('00'+str).substr(str.length);
}
