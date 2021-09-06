<template>
  <div class="changecity-container">
    <div class="city-wrapper">
      <div class="city">
        <span>按省份选择:</span>
        <DropDown
          :list="provinceList"
          title="省份"
          :value="province"
          @activeData="secondNav"
          :isDrop="provinceActive"
          @change="changeProvince"
        />
        <DropDown
          :list="secondData"
          title="城市"
          :value="city"
          :isDrop="cityActive"
          @change="changeCity"
          :able = "disabled"
        />
        <div class="search">
          <span>直接搜索:</span>
          <el-autocomplete
            v-model="state"
            placeholder="请城市中文或拼音"
            @select="handleSelect"
          ></el-autocomplete>
        </div>
      </div>
      <div class="hot">
        <Hot :list="hotList" title="热门城市"/>
      </div>
      <div class="hot">
        <Hot :list="recentList" title="最近访问"/>
      </div>
      <div class="zimu-list">
        <!-- {{ newCitylist }} -->
        <Hot list="ABCDEFGHJKLMNPQRSTWXYZ" title="按拼音首字母选择"/>
        <div class="zimu" v-for="val, key in newCitylist" :key="key" :id="'city-'+key.toUpperCase()">
          <h2>{{ key.toUpperCase() }} </h2>
          <div v-for="item in val" :key="item.id" @click="active">
            <a href="javascript:void(0)">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '@/city/DropDown.vue'
import Hot from '@/city/hot.vue'
import instance from '@/axios/axios.js'
export default {
  data () {
    return {
      state: '',
      city: '城市',
      province: '省份',
      secondData: [],
      provinceList: [],
      hotList: [],
      recentList: [],
      cityList: [],
      provinceActive: false,
      cityActive: false,
      disabled: true
    }
  },
  methods: {
    changeProvince (val) {
      this.provinceActive = val
      if (val) {
        this.cityActive = false
      }
    },
    changeCity (val) {
      this.cityActive = val
      if (val) {
        this.provinceActive = false
      }
    },
    handleSelect () {},
    secondNav (data) {
      this.disabled = false
      this.provinceList.forEach(item => {
        if (item.provinceName === data) {
          this.secondData = item.cityInfoList
        }
      })
    },
    active (e) {
      this.$store.state.position = e.target.innerText
      this.$router.push({ path: 'index' })
    }
  },
  created () {
    instance.get('/api/meituan/city/province.json').then(res => {
      this.provinceList = res.data
    })
    instance.get('/api/meituan/city/hot.json').then(res => {
      this.hotList = res.data
      // console.log(res)
    })
    instance.get('/api/meituan/city/recents.json').then(res => {
      this.recentList = res.data
      // console.log(res)
    })
    instance.get('/api/meituan/city/cityList.json').then(res => {
      this.cityList = res.data
      // console.log(res)
    })
  },
  computed: {
    newCitylist () {
      const obj = {}
      for (const item of this.cityList) {
        if (obj[item.firstChar]) {
          obj[item.firstChar].push(item)
        } else {
          obj[item.firstChar] = []
          obj[item.firstChar].push(item)
        }
      }
      const zimu = Object.keys(obj).sort()// 排序好字母数组
      const newobj = {}
      for (const i of zimu) {
        newobj[i] = obj[i]
      }
      // console.log(newobj)
      return newobj
    }
  },
  components: {
    DropDown,
    Hot
  }
}
</script>
<style scoped lang="less">
.changecity-container {
  //   height: 400px;
  .city-wrapper {
    padding: 20px;
    width: 1190px;
    background-color: #fff;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    .city {
      padding-bottom: 30px;
      box-sizing: border-box;
      border-bottom: 1px solid #e5e5e5;
      display: flex;

      span {
        line-height: 40px;
      }
      .search {
        margin-left: 40px;
        span {
          margin-right: 10px;
        }
      }
      .dropdown-container {
        width: 150px;
        margin-left: 20px;
        margin-right: 10px;
      }
    }
    .hot {
      border-bottom: 1px solid #e5e5e5;
    }
    .zimu-list {
      .zimu {
        //  display: flex;
        padding: 13px 30px 13px 10px;
        h2 {
          width: 40px;
          height: 40px;
          background-color: #ffd000;
          border-radius: 50%;
          line-height: 40px;
          text-align: center;
          color: #222;
          font-weight: normal;
          font-size: 16px;
          display: inline-block;
        }
        div {
          display: inline-block;
          max-width: 1065px;
          a {
            padding: 10px 20px;
            font-size: 14px;
            text-decoration: none;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
