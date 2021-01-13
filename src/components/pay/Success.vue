<template>
  <div class="success">
    <img src="./../../assets/images/xiuchengzhengguo.jpg" alt />
    <div>
      <div class="top">
        <p style="border-bottom: 2px solid black">支付成功</p>
      </div>
      <div class="bot">
        <p>
          <span>订单号:{{ orderinfo.ordernum }}</span>
          <span>成功支付:￥{{ orderinfo.totalprice }}</span>
        </p>
        <router-link tag="button" to="/" style="font-size: 0.7rem"
          >返回首页</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "succes",
  computed: {
    orderinfo() {
      return this.$store.getters.orderinfo;
    },
  },
};
</script>

<style>
.success {
  display: flex;
  padding: 30px 10px 100px;
  justify-content: space-around;
  align-items: center;
}
.success img {
  display: block;
  width: 200px;
}
.success > div {
  width: 65%;
}
.success > div p {
  color: black;
  width: 100%;
  font-size: 0.7rem;
  font-weight: bolder;
  line-height: 2;
}
.success .bot {
  padding-top: 20px;
  display: flex;
}
.success .bot > p {
  width: 50%;
}
.success .bot button {
  margin-left: 10px;
  font-size: 1rem;
  display: block;
  font-weight: normal;
  width: 25%;
  text-align: center;
  background-color: #fdd900;
  border: none;
}
.bot > p > span {
  display: block;
  line-height: 1.5;
  font-size: 0.5rem;
}
</style>
