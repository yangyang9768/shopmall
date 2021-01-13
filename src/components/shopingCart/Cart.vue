<template>
  <article>
    <div class="inner">
      <div class="tophead">
        <h3>
          <span style="font-size: 1.5rem; font-weight: bold">|</span> 购物车
          <span style="font-size: 0.8rem">
            [
            <span style="color: red">{{ selectlist.length }}</span
            >件 ]
          </span>
        </h3>
        <p class="path">
          <span class="active-step">购物车</span>
          <span style="margin: 0 1rem">填写订单</span>
          <span>付款，支付成功</span>
        </p>
      </div>
      <div v-if="cart.length" class="cart">
        <ul style="border-bottom: 2px solid black; margin-bottom: 2rem">
          <li
            class="head"
            style="border-bottom: 1px solid #000; padding-left: 10px"
          >
            <span style="width: 10%; display: flex" class="checkbox">
              <input
                id="all"
                type="checkbox"
                class="check"
                @click="$store.commit('selectnone', selectlist.length)"
                :checked="cart.find((it) => it.select === false) ? false : true"
              />
              <label for="all" class="checklabel">
                <span>√</span>
              </label>
              &nbsp;&nbsp; 全选
            </span>
            <span style="width: 40%; text-align: left" class="iteminfo"
              >商品</span
            >
            <span style="width: 12%" class="unitprice">单价</span>
            <span style="width: 20%" class="quantity">数量</span>
            <span style="width: 12%" class="sum">小计</span>
            <span style="width: 6%" class="delete">删除</span>
          </li>
          <li
            style="border-top: 1px solid #ddd; padding: 20px 10px"
            v-for="item in cart"
            :key="item.id"
            :class="{ shopping: true, unavaliable: !item.storage }"
          >
            <span style="width: 5%" class="checkbox">
              <input
                :id="item.id"
                type="checkbox"
                class="check"
                v-model="item.select"
                @click="select(item)"
              />
              <label :for="item.id" class="checklabel">
                <span>√</span>
              </label>
            </span>
            <img src="./../../assets/images/product1.jpg" alt />
            <span
              style="
                width: 40%;
                text-align: left;
                font-size: 0.5rem;
                display: flex;
              "
              class="iteminfo"
            >
              <span v-show="!item.storage" style="align-self: top">
                <img src="./../../assets/images/soldout.jpg" alt />
              </span>
              <span style="line-height: 2">{{ item.name }}</span>
            </span>
            <span style="width: 12%" class="unitprice">￥{{ item.price }}</span>
            <span style="width: 20%" class="quantity">
              <button class="add" @click="addnum(item)">+</button>
              <input
                type="text"
                :v-model="item.numincart"
                :value="item.numincart"
                style="
                  color: black;
                  font-size: 0.5rem;
                  width: 50%;
                  border: none;
                  text-align: center;
                "
              />
              <button class="minus" @click="minusnum(item)">-</button>
            </span>
            <span style="width: 12%" class="sum"
              >￥{{ item.price * item.numincart }}</span
            >
            <span
              class="delete"
              style="
                width: 6%;
                font-size: 0.8rem;
                font-weight: bolder;
                border: none;
              "
              @click="$store.commit('delcart', item)"
              >×</span
            >
            <!-- @click="$store.commit('delcart',item)" -->
          </li>
        </ul>
        <div class="total">
          <p style="background-color: black; width: 80%; display: flex">
            <span style="display: flex" class="left">
              <span>
                <span style="display: flex" class="checkbox">
                  <input
                    id="all2"
                    class="check2"
                    type="checkbox"
                    :checked="
                      cart.find((it) => it.select === false) ? false : true
                    "
                    @click="$store.commit('selectnone', selectlist.length)"
                  />
                  <label for="all2" class="checklabel2">
                    <span>√</span>
                  </label>
                  &nbsp;&nbsp; 全选
                </span>
              </span>
              <span> <i class="el-icon-delete-solid"></i>删除 </span>
              <span>
                <i class="el-icon-star-on"></i>加入愿望单 &nbsp;&nbsp;|
              </span>
            </span>
            <span>
              共计
              <i style="color: #fdd900; font-style: normal">{{
                cart.length
              }}</i>
              件商品,已选择
              <i style="color: #fdd900; font-style: normal"
                >{{ selectlist.length }}&nbsp;</i
              >件
            </span>
            <span
              style="
                display: flex;
                flex-grow: 1;
                text-align: right;
                justify-content: flex-end;
              "
            >
              <span style="font-size: 0.4rem; line-height: 1.5">
                合计:
                <br />不含运费
              </span>
              <span style="font-size: 1rem; color: #fdd900; line-height: 1"
                >￥{{ total }}</span
              >
            </span>
          </p>
          <el-button
            type="text"
            @click="showlogin"
            class="checkout"
            style="
              background-color: #fdd900;
              color: black;
              text-align: center;
              font-size: 0.8rem;
              font-weight: bolder;
              width: 20%;
              border-radius: 0;
            "
            >去结算</el-button
          >
          <el-dialog
            :visible.sync="dialogFormVisible"
            :center="true"
            top="0"
            :close-on-click-modal="false"
          >
            <el-form :model="user">
              <img src="./../../assets/images/loginlogo.jpg" alt />
              <el-form-item label :label-width="formLabelWidth">
                <el-input
                  v-model="user.name"
                  autocomplete="off"
                  placeholder="请输入您的账号"
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
                <span class="ccode">{{ ccode }}</span>
              </el-form-item>
            </el-form>
            <el-button
              type="primary"
              @click="checkcode"
              style="
                background-color: #fdd900;
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
              <p class="other-account" style="padding: 10px">
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
      </div>
      <div v-else>
        <img
          style="
            display: block;
            margin: auto;
            width: 40%;
            padding-bottom: 8rem;
            padding-top: 4rem;
          "
          src="./../../assets/images/wukong_03.gif"
          alt
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      ccode: "2323",
      dialogTableVisible: false,
      dialogFormVisible: false,
      visible: false,
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
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    selectlist() {
      return this.$store.getters.selectlist;
    },
    total() {
      return this.$store.getters.totalprice;
    },
  },
  methods: {
    showlogin() {
      if (!this.$store.state.login) {
        this.dialogFormVisible = true;
      } else {
        this.dialogFormVisible = false;
        this.$router.push("/order");
      }
    },
    a() {
      console.log(111);
    },
    selectnone() {},
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
 checkcode() {
      if (this.user.name == "changxu" && this.user.password != "") {
        // console.log(111);

        const vcode = this.user.code.toUpperCase();
        if (vcode === this.ccode) {
          this.dialogFormVisible = false;
          console.log(this.user.name);
          this.$store.commit("login", this.user.name);
          console.log(this.user.name);
        } else {
          alert("验证码输入错误");
          this.generatedCode();
        }
      } else {
        alert("用户名不对");
        this.generatedCode();
      }
    },
    select(item) {
      console.log(111);
      item.select = !item.select;
      this.$store.commit("getcart", this.cart);
    },
    addnum(item) {
      item.numincart = item.numincart + 1;
      console.log(item);
      this.$store.commit("getcart", this.cart);
    },
    minusnum(item) {
      if (item.numincart > 1) {
        item.numincart = item.numincart - 1;
        console.log(item);
        this.$store.commit("getcart", this.cart);
      } else {
        this.$store.commit("delcart", item);
      }
    },
  },
};
</script>

<style>
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
.tophead {
  display: flex;
  background-image: url("./../../assets/images/shoppingcarttop_03.gif");
  background-size: cover;
  margin: 0 -12px;
  background-repeat: no-repeat;
  justify-content: space-between;
}
.tophead h3 {
  font-size: 1rem;
  font-weight: normal;
  margin: 0 10px 1rem 20px;
  padding: 0.5rem;
  text-align: center;
  align-self: center;
  flex-grow: 1;
  text-align: left;
}
.path {
  display: flex;
  align-self: center;
  width: 50%;
  flex-grow: 0;
  justify-content: flex-end;
  font-size: 0.6rem;
  margin-right: 20px;
  color: #000;
}
.path span {
  line-height: 1.2;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #000;
}
.path .active-step {
  font-weight: bold;
  border-bottom: 3px solid #000;
}
.cart li {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
.cart li > span {
  display: block;
  font-size: 0.4rem;
  line-height: 3;
  text-align: center;
  user-select: none;
  cursor: pointer;
}
.check {
  display: none;
}
.checklabel > span {
  display: none;
  font-size: 0.5rem;
  font-weight: bolder;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
}
.checklabel {
  width: 20px;
  height: 20px;
  background-color: #eee;
  text-align: center;
  user-select: none;
  display: block;
  position: relative;
}
.check:checked + .checklabel {
  background-color: #fdd900;
}
.check:checked + .checklabel > span {
  display: block;
}
.total .check2 {
  display: none;
}
.total .checklabel2 {
  width: 20px;
  height: 20px;
  border: 2px #ddd solid;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  align-self: center;
}
.total .checklabel2 span {
  display: none;
  color: black;
  font-size: 0.5rem;
  font-weight: bolder;
  line-height: 1.2;
  left: 50%;
}
.total .check2:checked + .checklabel2 {
  background-color: white;
}
.total .check2:checked + .checklabel2 > span {
  display: block;
}
.quantity .add,
.quantity .minus {
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: black;
  border: 1px solid black;
}
.quantity input {
  background-color: rgba(255, 255, 255, 0);
}
.total {
  display: flex;
}
.total p {
  padding: 0 10px;
  align-items: center;
}
.total > p > span {
  display: block;
  font-size: 0.5rem;
  line-height: 3;
}
.total .left > span {
  display: block;
  margin-left: 10px;
}
.unavaliable {
  background-image: url("./../../assets/images/xiajiabg.jpg");
}
</style>
