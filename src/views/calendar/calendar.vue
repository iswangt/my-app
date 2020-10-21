<template>
  <div>
    <breadcrumb :breadcrumb='breadcrumb'></breadcrumb>
    {{time1}}<br />
    {{time2}}<br />
    {{time3}}
    <el-form ref="form"
             :model="form"
             :rules="formRule"
             :label-position="formClass.labelPosition"
             label-width="80px">
      <el-form-item v-for="(item,index) in form"
                    :label="$t(item.label)"
                    :prop="item.date"
                    :key="index">
        <template v-if="item.type === 'date'">
          <el-col :span="5">
            <el-date-picker type="date"
                            :placeholder="$t(item.startTimePlaceholder)"
                            v-model="item.models[0]"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line"
                  :span="1"
                  align="center"
                  >-</el-col>
          <el-col :span="5">
            <el-date-picker type="date"
                            :placeholder="$t(item.endTimePlaceholder)"
                            v-model="item.models[1]"
                            style="width: 100%;"></el-date-picker>
          </el-col>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import breadcrumb from '@/components/breadCrumb'
export default {
  data () {
    return {
      time1: (new Date()).getTime(),
      time2: new Date(),
      time3: this.$options.filters['formatDate']((new Date()).getTime()), // 过滤器
      form: [
        {
          label: 'message.views.calender.form.label',
          type: 'date',
          models: [
            this.$formDefaultDate().thereDate,
            this.$formDefaultDate().nowDate
          ],
          propRule: 'date',
          startTimePlaceholder: 'message.views.calender.form.startTime',
          endTimePlaceholder: 'message.views.calender.form.endTime'
        },
      ],
      formClass: {
        labelPosition: 'top'
      }
    }
  },
  computed: {
    breadcrumb () {
      let arr = [] // 面包屑数组
      let a = this.$route.matched
      let newArr = a[a.length - 1].path.split('/')
      newArr.shift()
      for (let i = 0; i < newArr.length; i++) {
        arr.push({
          label: this.$t(`message.bread.${newArr[i]}`),
          path: '/' + newArr[i]
        })
      }
      for (let i = arr.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
          arr[i].path = arr[j].path + arr[i].path
        }
      }
      console.log(arr)
      return arr
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style>
.calendar {
  width: 50%;
  height: auto;
}
</style>
