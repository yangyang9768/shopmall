<template>
  <article>
    <div class="inner">
      <div class="tophead">
        <h3>
          <span style="font-size:1.5rem;font-weight:bold">|</span>
          已成功加入购物车
        </h3>
      </div>
      <ul class="showitem">
        <li v-for="item in cart" :key="item.id">
          <div class="left-side">
            <img src="./../../assets/images/product1.jpg" alt />
            <p>{{item.name}}</p>
          </div>
          <div class="middle">
            <span>款式:{{item.style}}</span>

            <span>尺码:{{item.size}}</span>

            <span>数量{{item.numincart}}</span>
          </div>
          <div class="buttonblock" style="width:40%">
            <button class="return" @click="back">返回</button>
            <button @click="gocart(item)">进入购物车</button>
          </div>
        </li>
      </ul>
      <div class="chooseitem">
        <p
          style="width:96%;color:black;display:flex;margin:10px auto;font-size:0.6rem;;font-weight:bolder"
        >
          你可能还需要&nbsp;
          <span
            style="background-color:#fdd900;height:2px;display:block;flex-grow:1;align-self:center"
          ></span>
        </p>
        <div
          class="select-thing"
          style="display:flex;justify-content:space-between;width:96%;margin:0 auto;padding-bottom:3rem;"
        >
          <div v-for="item in shopadd" :key="item.id" style="border:1px solid #888">
            <img src="./../../assets/images/product2.jpg" alt />
            <p style="color:black;font-size:0.4rem;line-height:1.5">{{item.name}}</p>
            <br />
            <p style="display:flex;align-items:center">
              <span style="color:red;flex-grow:1;font-size:0.8rem">￥{{item.price.toFixed(2)}}</span>
              <span class="addcart" @click="$store.commit('addcart',item)">
                <i class="el-icon-s-goods" style="color:#fdd900;"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "shop",
  computed: {
    cart() {
      return this.$store.state.protential;
    },
    shopadd() {
      return this.$store.state.shopadd;
    }
  },
  methods: {
    back() {
      console.log(111);
      this.$store.commit("delpro");
      this.$router.push("/");
    },
    gocart(item) {
      item.status = true;
      item.storage = true;
      this.$store.commit("addcart", item);
      this.$router.push("/cart");
    }
  }
};
</script>

<style>
.showitem li {
  border-top: 1px solid #777;
  padding: 1rem 5px;
  display: flex;
  justify-content: space-between;
}
.showitem p {
  color: black;
}
.showitem li > div {
  padding: 0 10px;
  width: 30%;
}
.left-side img {
  display: block;
  width: 100px;
}
.showitem li .left-side {
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  border-right: 2px solid #fdd900;
}
.left-side p {
  font-size: 0.5rem;
  width: 60%;
}

.middle span {
  display: block;
  font-size: 0.3rem;
  color: #777;
  line-height: 1.5;
}
.buttonblock > button {
  cursor: pointer;
  width: 60%;
  font-size: 0.7rem;
  line-height: 2;
  background-color: #fdd900;
  color: black;
  border: none;
  outline: none;
  margin-left: 10px;
  text-align: center;
}
.buttonblock .return {
  width: 30%;
  background-color: black;
  color: white;
}
.select-thing img {
  display: block;
  width: 100%;
}
.select-thing > div {
  margin-left: 20px;
  padding-bottom: 10px;
}
.select-thing > div:first-child {
  margin-left: 0;
}
.select-thing p {
  margin: 0 auto;
  width: 94%;
}
.select-thing .addcart {
  width: 30%;
  border: 2px solid #fdd900;
  height: 1rem;
  display: block;
  text-align: center;
  font-size: 0.6rem;
  cursor: pointer;
}
</style>
