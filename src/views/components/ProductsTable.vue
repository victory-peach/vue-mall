<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="data"
      :rowKey="(record) => record.id"
    >
      <div slot="operation" slot-scope="text, record">
        <a-button @click="edit(record)">编辑</a-button>
        <a-button @click="showDeleteConfirm(record)"> 删除 </a-button>
      </div>
    </a-table>
  </div>
</template>
<script>
// import productApi from '@/api/productApi';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'categoryContent',
    key: 'categoryContent',
    ellipsis: true,
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
    ellipsis: true,
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
    ellipsis: true,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
    ellipsis: true,
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 180,
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  data() {
    return {
      columns,
      ModalText: '',
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    edit(data) {
      console.log(this.$router.push({ path: `edit/${data.id}` }));
      console.log(data);
    },
    showModal(record) {
      this.ModalText = record.title;
      this.visible = true;
    },
    showDeleteConfirm(record) {
      console.log(this);
      const that = this;
      this.$confirm({
        title: '确认删除',
        content: record.title,
        okText: 'Yes',
        okType: 'primary',
        cancelText: 'No',
        onOk() {
          that.$emit('del', record);
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
  },
  props: ['data'],
};
</script>
