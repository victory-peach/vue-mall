<template>
  <div class="productslist-container">
    <Search @searchData="search" />
    <ProductsTable :data="searchList" @del="deletePro" />
  </div>
</template>

<script>
import productApi from '@/api/productApi';
import ProductsTable from '../views/components/ProductsTable.vue';
import Search from '../views/components/Search.vue';

export default {
  data() {
    return {
      listData: [],
      searchList: [],
    };
  },
  components: {
    ProductsTable,
    Search,
  },
  methods: {
    search(data) {
      // console.log(data);
      this.searchList = this.listData.filter((list) => {
        // console.log(list);
        // console.log(list.categoryContent, list.c_item);
        if (
          list.categoryContent === data.targetCategory
          && list.c_item.includes(data.tag)
        ) {
          return true;
        }
        return false;
      });
      // console.log(this.searchList);
    },
    deletePro(data) {
      productApi.delProduct(data.id).then(() => {
        this.getTableData();
      });
    },
    getTableData() {
      // console.log(this.$route);
      productApi.getProduct().then((res) => {
        // console.log(res);
        this.listData = res.data.data;
        this.searchList = this.listData;
      });
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style scoped>
.search-container {
  margin: 20px 16px;
}
</style>
