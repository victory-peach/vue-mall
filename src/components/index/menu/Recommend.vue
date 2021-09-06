<template>
  <div class="recommend-container">
    <CardNav :type="recommend" @currentData="getData" />
    <div class="card">
      <el-row v-for="(o, index) in currentObj" :key="index">
        <el-col :span="8" v-for="item in o" :key="item.id"
          ><Card :data="item"
        /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CardNav from '@/components/index/card/CardNav.vue'
import Card from '@/components/index/card/Card.vue'
import instance from '@/axios/axios.js'
function getGroup (arr) {
  if (arr.length > 6) {
    arr = arr.slice(0, 6)
  }
  const obj = {}
  for (let i = 0; i < Math.ceil(arr.length / 3); i++) {
    obj[i] = arr.slice(i * 3, (i + 1) * 3)
  }
  return obj
}
export default {
  components: {
    CardNav,
    Card
  },
  data () {
    return {
      recommend: {
        class: 'recommend',
        title: '推荐民宿',
        list: []
      },
      recommendList: [],
      currentObj: {}
    }
  },
  methods: {
    getData (data) {
      this.currentObj = getGroup(this.recommendList[data])
    }
  },
  created () {
    instance.get('/api/meituan/index/recommend').then((res) => {
      // console.log(Object.keys(res.data))
      this.recommend.list = Object.keys(res.data)
      this.recommendList = res.data
      this.currentObj = getGroup(res.data['天津'])
      // console.log(res)
    })
  }
}
</script>

<style scoped lang="less">
.recommend-container {
  margin-top: 40px;
  background-color: #fff;
  .card {
    padding: 20px 0 0 20px;
    border: 1px solid #e5e5e5;
    border-top: none;
    .card-container {
      margin-right: 18px;
      width: 370px;
      height: 334px;
      background-color: #fff;
    }
  }
}
</style>
