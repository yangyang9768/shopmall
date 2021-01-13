<template>
  <div>
    <div style="padding-left:90%">
      <el-popover placement="bottom" width="200" v-model="visible" popper-class="popup">
        <div style="text-align: right; margin: 0;background-color: #444;">
          <el-button
            @click="visible = false"
            class="cancel"
            style="width:40%;background-color:red; margin: 0;"
          >确定删除</el-button>
          <el-button
            @click="visible = false"
            class="cancel"
            style="width:60%;background-color:#444; margin: 0;"
          >不删除</el-button>
        </div>
        <el-button
          class="del"
          slot="reference"
          style="width:6%;font-size:0.8rem;font-weight:bolder;border:none"
        >×</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop",
  data() {
    return {
      visible: false
    };
  }
};
</script>
<style>
.popup {
  padding: 0;
  border: 1px solid red;
}
.cancel {
  line-height: 2;
  color: white;
  border-radius: 0;
  text-align: center;
  padding: 0;
  border: none;
}
.del:hover,
del:active {
  background-color: #fff;
  border: none;
}
</style>
