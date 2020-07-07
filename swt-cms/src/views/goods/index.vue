<template>
  <div>
    <!-- 查询 -->
    <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top: 20px;">
      <el-form-item prop="name">
        <el-input placeholder="商品编号" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="商品名称" style="width: 200px;"></el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-dialog title="选择商铺" :visible.sync="dialogSupplierVisible" width="500px">
          <supplier @option-supplier="optionSupplier" :isDialog="true"></supplier>
        </el-dialog>
        <el-form-item prop="supplierId">
          <!-- <el-input v-model="searchMap.supplierName" placeholder="供应商" style="width: 200px;" ></el-
          input>-->
          <!-- @click.native="editOptionSupplier" -->
          <el-input
            readonly
            @click.native="dialogSupplierVisible = true"
            v-model="searchMap.supplierName"
            placeholder="商铺名称"
            style="width: 200px;"
          ></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="handleAdd">新增</el-button>
        <el-button @click="$refs['searchForm'].resetFields()">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 列表 -->
    <el-table :data="list" height="380" border style="width: 100%" highlight-current-row>
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="code" label="商品编码"></el-table-column>
      <el-table-column prop="sells" label="销量"></el-table-column>
      <el-table-column prop="retailPrice" label="零售价"></el-table-column>
      <el-table-column prop="purchasePrice" label="进货价"></el-table-column>
      <el-table-column prop="save" label="库存数量"></el-table-column>
      <el-table-column prop="supplierName" label="店铺名称"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <!-- 新增 or 编辑页面 -->
    <el-dialog title="商品编辑" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        :rules="rules"
        status-icon
        ref="pojoForm"
        :model="pojo"
        label-width="100px"
        label-position="right"
        style="width: 400px;"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="pojo.name" />
        </el-form-item>
        <el-form-item label="商品编码" prop="code">
          <el-input v-model="pojo.code" />
        </el-form-item>
        <el-form-item label="销量" prop="sells">
          <el-input v-model="pojo.spec" />
        </el-form-item>
        <el-form-item label="零售价" prop="retailPrice">
          <el-input v-model="pojo.retailPrice" />
        </el-form-item>
        <el-form-item label="进货价" prop="purchasePrice">
          <el-input v-model="pojo.purchasePrice" />
        </el-form-item>
        <el-form-item label="库存数量" prop="storageNum">
          <el-input v-model="pojo.storageNum" />
        </el-form-item>
        <el-form-item label="店铺名称" prop="supplierId">
          <el-input
            readonly
            @click.native="editOptionSupplier"
            v-model="pojo.supplierName"
            placeholder="选择供应商"
            style="width: 200px;"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="pojo.id === null ? addData('pojoForm'): updateData('pojoForm')"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import goodsApi from "@/api/goods";
import Supplier from "@/views/supplier";
export default {
  data() {
    return {
      list: [],
      isEdit: false,
      total: 0, // 总记录数
      currentPage: 1, // 当前页, 默认第1页
      pageSize: 10, // 每页显示条数， 10条
      searchMap: {
        // 条件查询绑定条件值
        supplierName: "",
        code: "",
        name: ""
      },
      dialogSupplierVisible: false, // 控制供应商对话框
      dialogFormVisible: false,
      pojo: {
        id: null,
        name: "",
        code: "",
        sells: "",
        retailPrice: 0.0,
        purchasePrice: 0.0,
        storageNum: 0,
        supplierName: "",
        supplierId: null
      },
      rules: {
        name: [
          { required: true, message: "商品名称不能为空", trigger: "blur" }
        ],
        code: [
          { required: true, message: "商品编码不能为空", trigger: "blur" }
        ],
        retailPrice: [
          { required: true, message: "零售价不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.fetchData();
  },

  components: { Supplier },
  methods: {
    optionSupplier(currentRow) {
      // currentRow 子组件传递的数据
      // console.log("parent", currentRow);
      this.searchMap.supplierName = currentRow.name; // 供应商名称
      this.searchMap.supplierId = currentRow.id; // 供应商ID
      this.dialogSupplierVisible = false; //关闭窗口
    },
    fetchData() {
      goodsApi
        .search(this.currentPage, this.pageSize, this.searchMap)
        .then(response => {
          const reqs = response.data;
          this.total = reqs.data.total;
          this.list = reqs.data.rows;
          // console.log(this.list);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fetchData();
    },
    handleEdit(id) {
      // 重用打开新增窗口方法, 不要少了 this
      this.handleAdd();
      // 查询数据
      goodsApi.getById(id).then(response => {
        const resp = response.data;
        if (resp.flag) {
          this.pojo = resp.data;
        }
      });
    },
    handleDele(id) {
      this.$confirm("确认删除这条记录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 确认
          goodsApi.deleteById(id).then(response => {
            const resp = response.data;
            //提示信息
            this.$message({
              type: resp.flag ? "success" : "error",
              message: resp.message
            });
            if (resp.flag) {
              // 删除成功，刷新列表
              this.fetchData();
            }
          });
        })
        .catch(() => {
          // 取消删除，不理会
        });
    },
    //新增
    handleAdd() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        // this.$nextTick()它是一个异步事件，当渲染结束 之后 ，它的回调函数才会被执行
        // 弹出窗口打开之后 ，需要加载Dom, 就需要花费一点时间，我们就应该等待它加载完dom之后，再进行调用resetFields方法，重置表单和清除样式
        this.$refs["pojoForm"].resetFields();
      });
    },
    //提交新增
    addData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 验证通过，提交添加
          alert("Add submit!");
          this.fetchData();
          this.dialogFormVisible = false;
        } else {
          // 验证不通过
          return false;
        }
      });
    },

    editOptionSupplier() {
      this.isEdit = true; // 是编辑窗口
      this.dialogSupplierVisible = true;
    },

    optionSupplier(current) {
      // current 子组件传递的数据
      // console.log("goods", current);
      // 判断是否编辑
      if (this.isEdit) {
        this.pojo.supplierName = current.name; //供应商名称
        this.pojo.supplierId = current.id; // 供应商 id
      } else {
        this.searchMap.supplierName = current.name; //供应商名称
        this.searchMap.supplierId = current.id; // 供应商 id
      }
      this.isEdit = false; // 注意重新赋值 false
      this.dialogSupplierVisible = false; // 关闭窗口
    },
    updateData(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 验证通过，提交添加
          goodsApi.update(this.pojo).then(response => {
            const resp = response.data;
            if (resp.flag) {
              this.fetchData();
              this.dialogFormVisible = false;
            } else {
              // 验证不通过
              this.$message({
                message: resp.message,
                type: "warning"
              });
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>