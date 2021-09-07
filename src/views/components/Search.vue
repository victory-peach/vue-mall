<template>
  <div class="search-container">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <a-form-item label="检索关键字">
        <a-input v-model="form.tag" placeholder="请输入关键字" />
      </a-form-item>
      <a-form-item label="商品类目">
        <a-select
          class="select"
          placeholder="请选择商品类目"
          @change="handleSelectChange"
        >
          <a-select-option
            v-for="c in categoryList"
            :key="c.id"
            :value="c.name"
          >
            {{ c.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit"> 搜索 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import categoryApi from '@/api/categoryApi';

export default {
  data() {
    return {
      form: {
        tag: '',
        targetCategory: '',
      },
      categoryList: null,
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.form);
      this.$emit('searchData', this.form);
    },

    handleSelectChange(value) {
      console.log(value);
      this.form.targetCategory = value;
    },
  },
  created() {
    categoryApi.getCitems().then((res) => {
      this.categoryList = res.data.data;
    });
  },
};
</script>
<style scoped>
.select {
  width: 180px;
}
</style>
