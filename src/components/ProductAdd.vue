<template>
  <div class="productadd-container">
    <a-steps :current="current" class="step">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <DetailBasic v-if="current === 0" @next="getBasicData" :form="form"/>
      <DetailAll v-if="current === 1"
      :current_f="current"
      :steps_length="steps.length"
      :form="form"
      @allDetail="getDetail"
      @currentChange="prev"/>
    </div>
  </div>
</template>
<script>
import productApi from '@/api/productApi';
import DetailBasic from '../views/components/DetailBasic.vue';
import DetailAll from '../views/components/DetailAll.vue';

export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
      form: {
        title: '',
        desc: '',
        c_item: '',
        tags: [],
        categoryContent: '',
        price: '',
        price_off: '',
        unit: '',
        inventory: 0,
        images: '',
      },
    };
  },
  components: {
    DetailBasic,
    DetailAll,
  },
  created() {
    console.log('===', this.$route.params);
    const { id } = this.$route.params;
    if (id) {
      productApi.editProduct(id).then((res) => {
        console.log(res);
        this.form = res.data.data;
      });
    }
  },
  methods: {
    // next() {

    // },
    prev() {
      this.current -= 1;
    },
    onSubmit() {

    },
    getBasicData(data) {
      // console.log('form', this.form);
      // console.log('data', data);
      this.form = { ...this.form, data };
      // console.log(data);
      this.current += 1;
    },
    getDetail(val) {
      if (this.$route.params.id) {
        productApi.updateProduct(this.$route.params.id, this.form).then(() => {
          this.$router.push({ name: 'List' });
        });
      } else {
        productApi.addProduct(val).then(() => {
          this.$router.push({ name: 'List' });
        });
      }
    },
  },
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.step {
  width: 50%;
  margin: 20px auto 0;
}
</style>
