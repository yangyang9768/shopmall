<template>
  <div :style="{'padding-bottom':payshow?'50px':'300px'}" class="paymenow">
    <ul class="paynow">
      <li class="introduct">
        <p style="font-weight: bold;font-size:0.6rem;">订单提交成功，请在24小时内付款</p>
        <p style=" display:flex;justify-content:space-between;border-bottom:2px solid black">
          <span style="display:block">请在订单提交24小时内付款否则失效</span>
          <span style="display:block">
            应付金额
            <b style="font-weight: bold;font-size:0.6rem;color:red">￥{{orderinfo.totalprice}}</b>
          </span>
        </p>
      </li>
      <li class="ordernum">
        <span style="font-size:0.5rem;font-weight:bolder">订单号: {{neworder}}</span>
        <p class="infobox" style="color:black">
          <span>
            <span>
              <i class="el-icon-s-custom" style="padding-right:2px"></i>
              {{orderinfo.name}}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i
                class="el-icon-phone"
                style="padding-right:2px"
              ></i>
              {{orderinfo.tel}}
            </span>
          </span>
          <span>
            <span>
              <i class="el-icon-location-information" style="padding-right:5px"></i>
              {{orderinfo.province+orderinfo.city+orderinfo.area+orderinfo.detailaddress}}
            </span>
          </span>
        </p>
      </li>
      <li class="payment-box">
        <span style="font-size:0.6rem;font-weight:bold">选择支付方式：</span>
        <span
          @click="activepayment=index"
          v-for="(item,index) in paycheck"
          :key="index"
          :class="{pay:true,selectpay:index===activepayment
         }"
        >
          <span class="el-icon-arrow-down activeright" v-show="index===activepayment"></span>
          <img :src="item" alt />
        </span>
      </li>
      <el-button
        v-show="!payshow"
        @click="ordersuccess"
        style="font-size:1rem;display:block;font-weight:normal;width:20%;text-align:center;margin-left:80%;background-color:#fdd900;border:none;color:black"
      >付款</el-button>
      <el-dialog
        title="收银台"
        :visible.sync="dialogVisible"
        width="30%"
        custom-class="checkpop"
        style="padding:10px"
      >
        <span
          class="alert"
          style="width:50%;margin:0 auto;display:block;font-size:0.4rem;text-align: center;"
        >请在本页第三季度1得看看打开的面完成支付，支付完成前请勿离开装口</span>
        <div
          class="foottoppop"
          style="width:80%;margin:30px auto;display:flex;justify-content:space-between;"
        >
          <el-button
            @click="payproblem"
            style="display:block;width:40%;background-color:#333;color:white"
          >支付出现问题</el-button>
          <el-button
            @click="$router.push('/pay/success')"
            style="display:block;width:40%;background-color:#333;color:white"
          >已完成支付</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
          <a
            href="#"
            style="display:block;text-align: center;font-size:0.4rem;line-height:5;border-top:2px solid #000"
          >选择其他支付方式</a>
        </span>
      </el-dialog>
      <div v-show="payshow" style="padding-top:20px">
        <img
          src="./../../assets/images/wechatcode.jpg"
          alt
          style="display:block;width:80%;margin:0px auto;"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import Go from "./../Gocart";
export default {
  name: "payment",
  data() {
    return {
      paycheck: [
        "https://u.gsdata.cn/themes/default/images/ali_pay.png",
        "https://u.gsdata.cn/themes/default/images/weixin_pay.png"
      ],
      activepayment: 0,
      neworder: "",
      payshow: false,
      dialogVisible: false
    };
  },
  components: {
    Go
  },
  computed: {
    orderinfo() {
      return this.$store.getters.orderinfo;
    }
  },
  created() {
    this.getordernum();
  },
  methods: {
    address() {
      const newAddress = Object.assign(this.form, this.ruleForm.district);
      let a = true;
      let b = true;
      for (let i = 0; i < 2; i++) {
        if (
          this.ruleForm.district[Object.keys(this.ruleForm.district)[i]] === ""
        ) {
          a = false;
          break;
        }
      }
      for (let i = 0; i < 2; i++) {
        if (this.form[Object.keys(this.form)[i]] === "") {
          b = false;
          break;
        }
      }
      console.log(b);
      if (a === true && b === true) {
        if (/^1[34567]\d{9}/.test(this.form.tel)) {
          console.log(newAddress);
          this.dialogFormVisible = false;
        } else {
          alert("请输入正确手机号");
        }
      } else {
        alert("信息不全");
      }

      if (/^1[34567]\d{9}/.test(this.form.tel)) {
        console.log(newAddress);
        this.dialogFormVisible = false;
      } else {
        alert("请输入正确手机号");
      }
    },
    getordernum() {
      const random = [
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
        "F",
        "G",
        "Y",
        "X",
        "Z",
        "T",
        "O",
        "P",
        "Q"
      ];
      let neworder = "";
      for (let i = 0; i < 10; i++) {
        let int = Math.floor(Math.random() * 22);
        neworder = random[int] + neworder;
      }
      this.neworder = neworder;
      console.log(neworder);
    },
    ordersuccess() {
      this.payshow = true;
      this.$store.getters.orderinfo.ordernum = this.neworder;
      // this.$router.push("/pay/success");
      console.log(this.$store.getters.orderinfo);
      setTimeout(() => {
        this.dialogVisible = true;
      }, 2000);
    },
    payproblem() {
      this.dialogVisible = false;
      this.payshow = false;
    }
  }
};
</script>

<style>
.el-dialog.checkpop {
  padding: 10px;
}
.activetag {
  background-color: #000;
  color: white;
}
.paynow li {
  padding: 10px;
}
.payment-box {
  border-top: 1px solid #999;
  border-bottom: 2px solid #000;
  display: flex;
  margin-bottom: 20px;
}
.pay img {
  display: block;
  width: 80%;
  margin: 0 auto;
}

.pay {
  width: 150px;
  margin-left: 10px;
  border: 2px #bbb solid;
  padding: 10px 10px;
  cursor: pointer;
  user-select: none;
  position: relative;
  box-sizing: border-box;
}
.selectpay {
  border: 2px solid #fdd900;
}
.paynow .introduct p {
  color: black;
  width: 100%;
  font-size: 0.4rem;

  line-height: 2;
}
.paynow .ordernum {
  display: flex;
  justify-content: space-between;
  text-align: right;
}
.checkpop .el-dialog__header {
  border-bottom: 2px solid #222;
  padding: 10px 30px;
}
.checkpop .el-dialog__footer {
  border-top: none;
}
.addresslist {
}
</style>
