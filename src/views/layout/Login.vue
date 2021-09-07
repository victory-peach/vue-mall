<template>
  <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <a-form-model-item has-feedback label="邮箱" prop="email">
      <a-input v-model="ruleForm.email" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model.number="ruleForm.password" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('ruleForm')"> 提交 </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import login from '../../api/loginApi';

export default {
  data() {
    const checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'));
      }
      return true;
    };
    const reg = /^[\w-]+@[\w.-]+.com$/;
    const checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!reg.test(value)) {
        callback(new Error('邮箱格式不正确'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: checkEmail, trigger: 'change' }],
        password: [{ validator: checkPassword, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login.login(this.ruleForm).then((res) => {
            console.log(res.data);
            if (res.data) {
              this.$store.dispatch('setUser', res.data);
              alert('提交成功');
              this.$router.push({ path: '/' });
              return;
            }
            alert('账号或密码错误！！！');
          });
        }
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
