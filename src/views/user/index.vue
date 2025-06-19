<!--
 * @Author: dqr
 * @Date: 2025-05-28 10:55:22
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-18 15:34:16
 * @FilePath: /vue3-ts-admin/src/views/user/index.vue
 * @Description: 
 * 
-->
<script lang="ts" setup>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   money: '￥300,000.00',
  //   address: 'New York No. 1 Lake Park',
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   money: '￥1,256,000.00',
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   money: '￥120,000.00',
  //   address: 'Sidney No. 1 Lake Park',
  // },

];
</script>
<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>用户列表</template>
  </a-table>
</template>

<style scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
