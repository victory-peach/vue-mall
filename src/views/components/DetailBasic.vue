<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item ref="title" label="标题" prop="title">
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item ref="desc" label="商品描述" prop="desc">
      <a-input v-model="form.desc" />
    </a-form-model-item>
    <a-form-model-item label="商品类目" prop="categoryContent">
      <a-select v-model="form.categoryContent" placeholder="请选择商品类目">
        <a-select-option
        v-for="(c, index) in category"
        @click="changeOption(index)"
        :key="c.id"
        :value="c.name">{{ c.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_item" placeholder="请选择子类目">
        <a-select-option v-for="c in c_items" :key="c" :value="c">{{ c }} </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="商品标签" required>
      <a-select
        mode="tags"
        size="default"
        placeholder="Please select"
        :default-value="['包邮，最晚次日达']"
        v-model="tags"
        @change="handleChange"
      >
        <a-select-option  value="包邮，最晚次日达">
          包邮，最晚次日达
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
            type="primary"
            @click="next"
          >
            下一页
          </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import categoryApi from '../../api/categoryApi';

export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      // form: {
      //   title: '',
      //   desc: '',
      //   c_item: '',
      //   tags: [],
      //   categoryContent: '',
      // },
      c_items: [],
      category: null,
      target: [],
      rules: {
        title: [
          {
            required: true,
            message: '请输入商品标题',
            trigger: 'blur',
          },
        ],
        categoryContent: [
          {
            required: true,
            message: '请选择商品类目',
            trigger: 'blur',
          },
        ],
        c_item: [
          {
            trigger: 'blur',
          },
        ],
        tags: [
          {
            required: true,
            type: 'array',
            message: '请选择标签',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  computed: {
    tags() {
      if (Object.prototype.toString.call(this.form.tags) === '[object Array]') {
        return this.form.tags;
      }
      return this.form.tags.split(' ');
    },
  },
  props: ['form'],
  methods: {
    handleChange(value) {
      this.form.tags = value;
    },
    next() {
      // console.log(this.form.tags);
      this.$refs.ruleForm.validate((valid) => {
        // console.log(this);
        if (valid) {
          // alert('提交成功');
          // console.log(that.tags);
          // this.form.tags = this.form.tags.join(' ');
          // console.log(this.form);
          // console.log('jbjhsd');
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    getCitems(val) {
      let target = null;
      target = this.category.filter((item) => item.name === val);
      return target[0].c_items.split(',');
    },
    changeOption(index) {
      this.c_items = this.getCitems(this.category[index].name);
    },
  },
  created() {
    categoryApi.getCitems().then((res) => {
      // console.log(res.data.data);
      this.category = res.data.data;
    });
  },
  // watch: {
  //   form: {
  //     handler(val) {
  //       console.log(this.c_items);
  //       if (this.c_items) {
  //         this.c_items = this.getCitems(val.categoryContent);
  //       }
  //       // this.category = this.$store.state.categoryList;
  //       // return true;
  //     },
  //     deep: true,
  //   },
  // },
};
</script>
