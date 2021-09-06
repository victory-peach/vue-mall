<template>
  <div
    class="dropdown-container"
    v-document-click="documentClick"
    @click="showDrop"
    :class="{ noallow : able}"
  >
    <span>{{ activeData ? activeData : title }}</span>
    {{ able }}
    <i class="el-icon-caret-bottom" style="color: #666"></i>
    <div class="dropdown" v-if="isDrop">
      <dl>
        <dt>{{ title }}</dt>
        <div>
          <dd v-for="(items, index) in renderList" :key="index" @click="active">
            <span
              :class="{ active: activeData === item.provinceName || activeData === item.name}"
              v-for="item in items"
              :key="item.id"
              @click="changeItem"
              >{{ item.provinceName ? item.provinceName : item.name}}</span
            >
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // isDrop: false,
      provinceData: '',
      cityData: '',
      activeData: ''
    }
  },
  props: ['list', 'title', 'isDrop', 'able'],
  methods: {
    showDrop (e) {
      e.stopPropagation()
      if (this.able) {
        this.$emit('change', false)
      } else {
        this.$emit('change', true)
      }
    },
    documentClick () {
      // this.isDrop = false
      this.$emit('change', false)
      console.log('click')
    },
    active (e) {
      // console.log(val, e)
      this.activeData = e.target.innerText
      if (this.title === '城市') {
        this.$store.commit('setPosition', this.activeData)
        this.$router.push({ path: 'index' })
      }
      this.$emit('activeData', this.activeData)
    },
    changeItem () {
      // console.log(this.$store.state.position)
      // this.$store.state.position = 'jhdsj'
      // console.log(this.activeData);
    }
  },
  computed: {
    renderList () {
      const num = Math.ceil(this.list.length / 12)
      const allArr = []
      for (let j = 0; j < num; j++) {
        allArr.push(this.list.slice(j * 12, (j + 1) * 12))
      }
      return allArr
    }
  }
}
</script>
<style scoped lang="less">
.dropdown-container {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  position: relative;
  height: 40px;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  cursor: pointer;
  &.noallow{
    cursor: not-allowed;
  }
  i {
    position: absolute;
    right: 4px;
  }
  .dropdown {
    min-width: 150px;
    height: 375px;
    box-sizing: border-box;
    position: absolute;
    top: 44px;
    left: 0;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    padding: 20px 0 20px 15px;

    &::before {
      content: "";
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #e5e5e5;
      border-top: 0;
      position: absolute;
      top: -7px;
      left: 26px;
    }
    &::after {
      content: "";
      position: absolute;
      top: -5px;
      left: 26px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid #fff;
      border-top: 0;
    }
    dl {
      margin: 0;
      dt {
        margin-bottom: 11px;
        color: #ccc;
      }
      dd {
        display: table-cell;
        height: 318px;
        margin: 0;
        span {
          padding: 1px 8px;
          margin: 6px 38px 6px 0;
          text-decoration: none;
          font-size: 12px;
          color: #222;
          display: block;
          white-space: nowrap;
          // display: table;
          box-sizing: border-box;
          min-width: 40px;
          height: 20px;
          &:hover {
            background: #f4f4f4;
            border-radius: 10px;
          }
          &.active {
            background: linear-gradient(to bottom right, #ffd000, #ffbd00);
            border-radius: 10px;
            color: #222222;
          }
        }
      }
    }
  }
}
</style>
