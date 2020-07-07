<template>
  <div>
    <!-- 列表-->
    <!-- :data 绑定渲染的数据；border: 边框; -->
    <el-table :data="list" height="500" border style="width: 100%">
      <!--type="index" 获取索引值，从1开始； label 显示的标题; prop 数据字段名； width 列的宽度 -->
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="cardNum" label="卡号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="birthday" label="生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="120"></el-table-column>
      <!-- <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型"></el-table-column>-->
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="address" label="收货地址" width="180"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script >
import memberApi from "../../api/member";
export default {
  data() {
    return {
      list: []
    };
  },
  // 钩子函数获取数据
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      memberApi.getlist().then(response => {
        this.list = response.data.data;
        console.log(response);
      });
    }
  }
};
</script>
<style lang="scss">
.el-table .cell {
  text-align: center;
}
</style>
