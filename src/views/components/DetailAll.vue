<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="price" label="商品售价" prop="price">
      <a-input v-model="form.price" />
    </a-form-model-item>
    <a-form-model-item ref="price_off" label="折扣价格" prop="price_off">
      <a-input v-model="form.price_off" />
    </a-form-model-item>
    <a-form-model-item ref="inventory" label="商品库存" prop="inventory">
      <a-input v-model="form.inventory" />
    </a-form-model-item>
    <a-form-model-item ref="unit" label="计量单位" prop="unit">
      <a-input v-model="form.unit" />
    </a-form-model-item>
    <a-form-model-item ref="unit" label="商品图片" prop="unit">
      <!-- <a-input v-model="form.unit" /> -->
      <Upload @images="getImage"/>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button v-if="current_f > 0" @click="prev"> 上一页 </a-button>
      <a-button
        style="margin-left: 8px"
        v-if="current_f == steps_length - 1"
        type="primary"
        @click="onSubmit"
      >
        提交
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import Upload from '@/views/components/Upload.vue';

export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      url: '',
      // form: {
      //   price: '',
      //   price_off: '',
      //   unit: '',
      //   inventory: 0,
      // },
      rules: {
        price: [
          {
            required: true,
            message: '请填写商品售价',
            trigger: 'blur',
          },
        ],
        unit: [{ required: true, message: '请填写计量单位', trigger: 'blur' }],
        inventory: [
          {
            // type: 'number',
            required: true,
            message: '请填写库存量',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  props: ['current_f', 'steps_length', 'form'],
  methods: {
    getImage(url) {
      this.url = url;
      console.log(url);
    },
    onSubmit() {
      // const that = this;
      console.log(this.form);
      if (Object.prototype.toString.call(this.form.tags) === '[object Array]') {
        this.form.tags = this.form.tags.join(' ');
      }
      // console.log({ ...this.basicData, ...this.form });
      // console.log(this.form.inventory);
      // console.log(typeof (this.form.inventory));
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('allDetail', { ...this.form, images: this.url });
          alert('submit!');
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    prev() {
      this.$emit('currentChange');
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
  components: {
    Upload,
  },
};
</script>
