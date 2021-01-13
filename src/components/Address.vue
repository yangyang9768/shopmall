<template>
  <div>
    <el-dialog title="新增地址" :visible.sync="dialogFormVisible" :show-close="false">
      <el-form :model="form">
        <p class="usertel">
          <el-form-item label="username" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="address" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </p>
        <p class="state"></p>
        <p class="detailad">
          <el-form-item label="address" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </p>
        <p class="addname">
          <el-form-item label="address" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </p>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <button @click="$emit('close')">X</button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addre",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style>
.addressprop.el-dialog .el-dialog__header button {
  display: none;
}
</style>
