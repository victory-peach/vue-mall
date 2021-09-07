<template>
    <div class="div">
        <div
        class="his-item"
        v-for="history in historyData"
        :key="history.time"
        @click="search(history.value)">
            {{ history.value }}
        </div>
    </div>
</template>
<script>
export default {
  props: {
    historyData: {
      type: Array,
    },
  },
  methods: {
    search(value) {
      this.$emit('search', value);
    },
  },
};
</script>
<style scoped>
.div{
  display: flex;
  z-index: 1;
  width: 350px;
  flex-wrap: wrap;
}
.his-item{
    flex-shrink: 0;
    height: 30px;
    background: cornflowerblue;
    border-radius: 15px;
    width: 60px;
    line-height: 30px;
    text-align: center;
    margin: 4px 8px;
}
</style>
