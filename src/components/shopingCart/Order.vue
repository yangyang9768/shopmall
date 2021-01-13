<template>
  <div>
    <Go @close="closewindow" :visible="visible" :addinfo="addinfo" />
    <article>
      <div class="inner order" style="padding-bottom:20px">
        <div class="tophead">
          <h3>
            <span style="font-size:1.5rem;font-weight:bold">|</span>
            填写订单
          </h3>
          <p class="path">
            <span>购物车</span>
            <span class="active-step" style="margin:0 1rem">填写订单</span>
            <span>付款，支付成功</span>
          </p>
        </div>
        <div class="addressblock">
          <ul>
            <li class="addresstitle">
              <span>收货地址</span>

              <span style="display:flex;cursor:pointer" @click="visible = true">
                <span>+</span> 新增地址
              </span>
            </li>
            <li
              v-for="(item,index) in address"
              :key="item.id"
              @click="selectad(item,index)"
              v-show="index<shownum"
              :class="{addresslist:true,selectaddress:index===activeaddress
         }"
            >
              <span class="el-icon-arrow-down activeright" v-show="index===activeaddress"></span>
              <p class="infobox" style="color:black">
                <span>
                  <i class="el-icon-s-custom" style="padding-right:5px"></i>
                  <span>{{item.name}}</span>
                </span>
                <span>
                  <i class="el-icon-location-information" style="padding-right:5px"></i>
                  <span>{{item.province+item.city+item.area+item.detailaddress}}</span>
                </span>
                <span>
                  <i class="el-icon-phone" style="padding-right:5px"></i>
                  <span>{{item.tel}}</span>
                </span>
              </p>
              <span
                :class="{defaultadd:item.default}"
                @click.stop="$store.commit('changedefault',item)"
              >{{item.default?'默认':'设为默认'}}</span>
              <span @click="openaddress(item)">
                <i class="el-icon-edit-outline"></i>修改
              </span>
              <span>
                <i class="el-icon-delete" @click="$store.commit('deladdress',item)">删除</i>
              </span>
            </li>
          </ul>
          <p
            v-show="address.length>3"
            class="viewmore"
            style="width:100%"
            @click="shownum===3?shownum=address.length:shownum=3 "
          >{{shownum===3?"展示更多":'收回'}}</p>
        </div>
        <div class="cartinfo">
          <ul>
            <li class="addresstitle" style="margin-top:20px">
              <span>商品信息</span>
              <router-link
                tag="span"
                to="/cart"
                style="user-select:none;cursor:pointer;font-size:0.4rem;font-weight:normal;align-self:bottom;line-height:1.5;transform:translateY(20%)"
              >返回购物车修改</router-link>
            </li>
            <li
              class="shopping"
              style="border-top:1px solid #ddd;padding:20px 0;display:flex"
              v-for="item in cart"
              :key="item.id"
              v-show="item.storage"
            >
              <img src="./../../assets/images/product1.jpg" alt />
              <span
                style="text-align:left;font-size:0.5rem;flex-grow:1"
                class="iteminfo"
              >{{item.name}}</span>
              <span style="width:25%;color:#ccc;display:flex">
                <span class="itemstyle">款式：{{item.style}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span class="itemsize">尺码：{{item.size}}</span>
              </span>

              <span style="width:10%;text-align:center" class="unitprice">￥{{item.price}}</span>
              <span style="width:10%;text-align:center" class="quantity">×{{item.numincart}}</span>

              <!-- @click="$store.commit('delcart',item)" -->
            </li>
            <li class="bottom">
              <span>
                <span>支付方式:</span>
                <span class="selectbox activeselect">
                  <span class="el-icon-arrow-down activeright"></span>在线支付
                </span>
              </span>
              <span>
                <span>物流方式</span>
                <span class="selectbox activeselect">
                  <span class="el-icon-arrow-down activeright"></span>普通物流
                </span>
              </span>
              <span style="width:50%">
                <span>发票信息:</span>
                <span class="selectbox">不开发票</span>
                <span class="selectbox activeselect">
                  <span class="el-icon-arrow-down activeright"></span>
                  开发票
                </span>
                <span class="recipet" style="display:flex;justify-content:flex-end;width:40%">
                  <input type="text" />
                  <button>保存</button>
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div class="all" style="display:flex;justify-content:space-between;margin-top:20px">
          <div class="otherinfo" style="width:40%">
            <p
              style="width:100%;color:black;font-size:0.6rem;line-height:3;
        font-weight:bold"
            >备注</p>
            <textarea name id rows="10" style="resize:none;width:100%"></textarea>
          </div>
          <div class="checkout" style="text-align:right;margin-bottom:30px;width:50%">
            <p
              style="width:100%;color:black;font-size:0.6rem;line-height:3;
        font-weight:bold"
            >清算</p>
            <ul>
              <li>
                <span>
                  <b
                    style="color:red"
                  >&nbsp;{{[...selectlist.filter(it => it.storage === true)].length}}&nbsp;</b>件商品金额
                </span>
                <span>￥{{total.toFixed(2)}}</span>
              </li>
              <li>
                <span>优惠卷</span>
                <span>0.00</span>
              </li>
              <li>
                <span>运费</span>
                <span>0.00</span>
              </li>
              <li>
                <span style="color:red;font-weight:bolder;font-size:0.8rem">￥{{total.toFixed(2)}}</span>
              </li>
            </ul>
          </div>
        </div>

        <router-link
          tag="button"
          to="/pay"
          style="font-size:1rem;display:block;font-weight:normal;width:20%;text-align:center;margin-left:80%"
        >提交订单</router-link>
      </div>
    </article>
  </div>
</template>

<script>
import Go from "./../Gocart";
export default {
  name: "order",
  data() {
    return {
      addinfo: {
        province: "",
        city: "",
        area: "",
        name: "",
        tel: "",
        detailaddress: "",
        default: "",
        nickname: ""
      },
      shownum: 3,
      activeaddress: 0,
      visible: false
    };
  },
  components: {
    Go
  },
  computed: {
    address() {
      return this.$store.state.address;
    },
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.totalprice;
    },
    selectlist() {
      return this.$store.getters.selectlist;
    }
  },
  methods: {
    openaddress(item) {
      this.addinfo = item;
      console.log(this.addinfo);
      this.visible = true;
    },
    closewindow() {
      this.visible = false;
    },
    selectad(item, index) {
      this.activeaddress = index;
      this.$store.commit("selectaddress", item);
    }
  }
};
</script>

<style>
.checkout ul {
  border-top: 2px solid #000;
  width: 100%;
}
.checkout li {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}
.checkout li > span {
  font-size: 0.5rem;
  display: block;
  line-height: 2;
  margin-left: 20px;
}
.checkout li > span:last-child {
  width: 30%;
}
.inner .activeright {
  position: absolute;
  width: 10px;
  height: 10px;
  color: white;
  background-color: #fdd900;
  font-size: 0.2rem;
  text-align: center;
  line-height: 10px;
  display: block;
  bottom: 0px;
  left: 0px;
}
.cartinfo .bottom {
  border-top: 2px solid #000;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #999;
}
.otherinfo textarea {
  border: 2px solid #999;
  border-top: 3px solid #000;
}
.cartinfo .bottom > span {
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  font-weight: bold;
  align-items: center;
}
.selectbox {
  margin-left: 10px;
  font-size: 0.5rem;
  line-height: 2.5;
  border: 2px #bbb solid;
  padding: 0 10px;
  cursor: pointer;
  user-select: none;
  position: relative;
}
.bottom button,
.order > button {
  border: none;
  outline: none;
  background-color: #fdd900;
  font-weight: bold;
  margin-left: 5px;
  cursor: pointer;
}
.cartinfo .bottom input {
  display: block;
  width: 60%;
  margin-left: 10px;
  font-size: 0.4rem;
  line-height: 2;
}
.shopping img {
  display: block;
  width: 50px;
  margin-right: 10px;
}
.cartinfo .shopping {
  display: flex;
}
.cartinfo .shopping span {
  display: block;
  font-size: 0.5rem;
}
.addresstitle span {
  display: block;
  font-size: 0.6rem;
  font-weight: bolder;
}
.addresstitle {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.addresstitle span > span {
  width: 20px;
  height: 20px;
  border: 1.5px solid black;
  line-height: 17px;
  text-align: center;
  font-weight: 1000;
  align-self: flex-start;
  margin-right: 10px;
  cursor: pointer;
}
.addresslist {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #777;
}
.infobox > span {
  display: block;
  font-weight: normal;
  font-size: 0.5rem;
  line-height: 1.5;
}
.addresslist > span {
  width: 10%;
  font-size: 0.5rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.defaultadd {
  background-color: #222;
  color: aliceblue;
  line-height: 2;
}
.addressblock .viewmore {
  background-image: url("./../../assets/images/xiajiabg.jpg");
  margin: 10px 0;
  line-height: 3;
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 0.5rem;
  user-select: none;
  cursor: pointer;
}
.activeselect,
.addressblock .selectaddress {
  border: 2px solid #fdd900;
  position: relative;
}
.addressprop.el-dialog {
  width: 600px;
  padding: 10px 15px;
}
.addressprop .basicinfo {
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 5px;
}
.addressprop.el-dialog .el-dialog__header {
  border-bottom: 2px solid #555;
}
.addressprop.el-dialog .el-dialog__header {
  display: block;
  color: black;
  font-weight: bold;
  font-size: 0.5rem;
  line-height: 3;
}
.addressprop .el-dialog__body {
  padding: 10px 0;
}
.addressprop .el-form-item__label {
  font-size: 0.4rem;
  line-height: 1;
}
.addressprop .el-input__inner {
  height: 24px;
}
.addressprop .el-input__inner {
  border-radius: 0;
}
.addressprop .el-form-item {
  margin-bottom: 0;
}
.addressprop .selectarea .distinct-component-ct {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.addressprop .el-input__inner {
  text-indent: 0px;
}
.addressprop .dialog-footer {
  display: flex;
  justify-content: space-between;
}
.addressprop .el-dialog__footer {
  border-top: none;
}
.addressprop .checklabel {
  background-color: white;
  border: 1px solid black;
}
.selectarea .el-input__inner {
  padding: 15px 0;
  text-indent: 10px;
}
.addressprop .selectarea .el-input__suffix {
  width: 30px;
  right: 0px;
  background-color: #333;
}
.addressprop .selectarea .el-input__icon {
  line-height: 32px;
  font-size: 0.8rem;
}
.addressprop .selectarea .el-select__caret.el-input__icon.el-icon-arrow-up {
  font-weight: bold;
  color: white;
}
.addressprop .el-form-item {
  margin-top: 10px;
}
</style>
