<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true"
      >打开嵌套表单的 Dialog</el-button
    >

    <el-dialog
      :visible.sync="dialogFormVisible"
      :center="true"
      top="0"
      :close-on-click-modal="false"
    >
      <el-form :model="user">
        <img src="./../assets/images/loginlogo.jpg" alt />
        <el-form-item label :label-width="formLabelWidth">
          <el-input
            v-model="user.name"
            autocomplete="off"
            placeholder="请输入您的账号"
            style="text-align: left"
          ></el-input>
          <i
            class="el-icon-folder"
            style="
              position: absolute;
              display: block;
              width: 30px;
              line-height: 30px;
              user-select: none;
              text-align: center;
              left: 1%;
              top: 10%;
              font-size: 0.9rem;
              border-right: 1px solid #ddd;
            "
          ></i>
        </el-form-item>
        <el-form-item label :label-width="formLabelWidth">
          <el-input
            v-model="user.password"
            autocomplete="off"
            placeholder="请输入您的密码"
          ></el-input>
          <i
            class="el-icon-lock"
            style="
              position: absolute;
              display: block;
              width: 30px;
              line-height: 30px;
              user-select: none;
              text-align: center;
              left: 1%;
              top: 10%;
              font-size: 0.9rem;
              border-right: 1px solid #ddd;
            "
          ></i>
        </el-form-item>
        <el-form-item label :label-width="'50%'">
          <el-input
            v-model="user.code"
            autocomplete="off"
            style="margin-left: -100%"
          ></el-input>
          <span class="ccode">
            <div class="coderight" @click="refreshCode">
              <SIdentify
                :identifyCode="identifyCode"
                @click="Refresh"
              ></SIdentify>
            </div>
          </span>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        @click="checkcode"
        style="
          backgroundcolor: rgb(236, 229, 1);
          color: black;
          width: 100%;
          outline: none;
          margin: 1rem 0;
        "
        >登录</el-button
      >
      <p class="register">
        <a href="#">忘记密码</a>
        <a href="#">注册</a>
      </p>
      <div slot="footer" class="dialog-footer">
        <p class="other-account">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qq" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wechat" />
          </svg>
        </p>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import SIdentify from "./Identify";

export default {
  name: "login",
  data() {
    return {
      ccode: "2323",
      dialogTableVisible: false,
      dialogFormVisible: false,
      user: {
        name: "",
        password: "",
        code: "",
      },
      formLabelWidth: "0%",
    };
  },
  mounted() {
    this.generatedCode();
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    generatedCode() {
      const random = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      let code = "";
      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      this.ccode = code;
      console.log(this.ccode);
    },
    ...mapActions("modules/account", ["settoken", "setname"]),
    jumpregister: function () {
      this.$router.push({ path: "/register" });
    },
    //验证码abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    //登录验证
    checkcode() {
      if (this.user.name != "" && this.user.password != "") {
        const vcode = this.user.code.toUpperCase();
        if (vcode === this.ccode) {

          this.dialogFormVisible = false;
        } else {
          alert("验证码输入错误");
          this.generatedCode();
        }
      } else {
        alert("用户名不对");
        this.generatedCode();
      }
    },
  },
};
</script>
<style >
.el-dialog__headerbtn .el-dialog__close {
  color: black;
  font-weight: bolder;
}
.ccode {
  display: block;
  width: 80%;
  border: 1px solid red;
  position: absolute;
  left: 10%;
  top: 0%;
  text-align: center;
  font-size: 1rem;
  background-color: #eee;
}
.el-input__inner {
  text-indent: 20px;
  text-align: left;
  outline: none;
}
.register {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  margin-right: 0;
  width: 100%;
  padding-bottom: 5px;
}
.register a {
  width: 50%;
  color: black;
  font-size: 0.4rem;
  display: block;
  text-decoration: none;
}
.register > a:last-child {
  text-align: right;
}
.el-dialog__header {
  padding: 0;
}
.el-dialog {
  width: 25%;
}
.el-dialog__body img {
  display: block;
  width: 50%;
  margin: 0 auto 20px;
}
.el-dialog__footer .icon {
  display: block;
  width: 10%;
  height: 25px;
}
.el-dialog__footer {
  border-top: 1px #222 double;

  padding: 0;
}
.other-account {
  width: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.el-dialog--center .el-dialog__body {
  padding-bottom: 10px;
}
</style>
