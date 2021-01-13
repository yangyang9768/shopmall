<template>
  <div class="content" style="flex-shrink:0">
    <div class="inn">
      <div>
        <div class="hotsell" style="width:50%">
          <div class="top">
            <img src="./../../assets/images/商品详情页_定金预售.jpg" alt />
            <p>龙之谷限量礼包大BOSS周年庆冰龙款男士T恤</p>
          </div>
          <div class="bot" style="padding-top:50px;">
            <span style="color:#eee;font-size:0.1rem">距离活动结束</span>
            <p class="count">
              {{`${time.day}&nbsp;&nbsp;:&nbsp;&nbsp;${time.hour}&nbsp;&nbsp;:&nbsp;&nbsp;${time.min}&nbsp;&nbsp;:&nbsp;&nbsp;${time.sec}`}}
              <span
                style="display:block;font-size:0.2rem;postion:absolute;left:5%;top:95%"
              >天&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;秒</span>
            </p>
          </div>
        </div>
        <div class="selection">
          <ul>
            <li>
              <span class="tag" style=" align-self:center">价格</span>
              <div class="select" style="display:block; align-items: top">
                <p style="color:yellow;font-size:1.2rem;text-indent:10px">{{totalprice}}</p>
                <p style="color:#fff;font-size:0.4rem;text-indent:10px">
                  正价
                  <span style="text-decoration:line-through ">960</span>
                </p>
              </div>
            </li>
            <li>
              <span class="tag">型号</span>
              <div class="select type">
                <span
                  :class="{tagin:true,active:activetypeIndex===index}"
                  v-for="(item,index) in type"
                  :key="item.id"
                  @click="selectpro(index,item.price)"
                >{{item.name}}</span>
              </div>
            </li>
            <li>
              <span class="tag">尺码</span>
              <div class="select size" style=" flex-wrap: wrap;">
                <span
                  :class="{tagin:true,active:sizeactive===index}"
                  v-for="(si,index) in size "
                  :key="index"
                  @click="sizeactive=index"
                >{{si}}</span>
              </div>
            </li>
            <li>
              <span class="tag">预售价</span>
              <div class="select">
                <button @click="add" class="add">+</button>
                <input type="text" value="1" v-model="val" />
                <button class="minus" @click="minus">-</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          @click="addproduct"
          class="buy"
          style="display:block;width:100%;text-align:center;line-height:3;background-color: rgba(255, 255, 255, 0);
  border:1px solid yellow;color:yellow;font-size:0.3rem;border-radius:10px ;outline:none"
        >立即抢购</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "count",
  created() {
    moment.locale("zh-cn");
  },

  data() {
    return {
      currenttime: moment(),
      targettime: moment("20191007"),
      sizeactive: 1,
      activetypeIndex: 2,
      price: "",
      val: 1,
      unitprice: 700,
      type: [
        {
          name: "iphon5",
          price: 500,
          id: "11"
        },
        {
          name: "iphon6",
          price: 600,
          id: "113"
        },
        {
          name: "iphon6+",
          price: 700,
          id: "1331"
        }
      ],
      size: ["XL", "L", "M", "S", "XS"]
    };
  },
  methods: {
    selectpro(index, unitprice) {
      this.activetypeIndex = index;
      this.unitprice = unitprice;
    },
    add() {
      if (this.val < 10) {
        this.val = this.val + 1;
        console.log(this.val);
      } else {
        alert("超过最大先购书");
      }
    },
    minus() {
      if (this.val > 1) {
        this.val = this.val - 1;
        console.log(this.val);
      } else {
        alert("最小");
      }
    },
    addproduct() {
      const type = this.type[this.activetypeIndex].name;
      const size = this.size[this.sizeactive];
      const name = size + "号的" + type;
      const obj = {
        style: type,
        size: size,
        name: name,
        price: this.unitprice,
        numincart: this.val,
        select: true,
        storage: true
      };
      this.$store.commit("addpro", obj);
      console.log(this.$store.state.cart);
      this.$router.push(`/shop`);
    }
  },
  mounted() {
    setInterval(() => {
      this.currenttime = moment();
    }, 1000);
  },
  computed: {
    totalprice() {
      return this.val * this.unitprice;
    },
    time() {
      let t1 = moment("20211007");
      let leftsec = moment.duration(t1 - this.currenttime, "ms");
      const obj = {
        day: leftsec.get("days"),
        hour: leftsec.get("hours"),
        min: leftsec.get("minutes"),
        sec: leftsec.get("seconds")
      };
      return obj;
    }
  }
};
</script>

<style>
.add,
.minus,
.add:focus,
.minus:focus {
  width: 40px;
  font-size: 0.6rem;
  border: 1px solid white;
  color: white;
  text-align: center;
  line-height: 1.5;
  background-color: rgba(221, 221, 221, 0);
  outline: none;
}
.select input {
  width: 50%;
  text-align: center;
  background-color: rgba(221, 221, 221, 0);
  border: none;
  color: white;
  font-size: 1rem;
}
.content {
  margin: 0 -10px;

  background-image: url("./../../assets/images/zhongjianbeijing.jpg");
}
.inn > div {
  padding: 10px;
  width: 96%;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid #eee;
}
.selection {
  width: 45%;
  padding-left: 20px;
  border-left: 1px solid #ddd;
  overflow: hidden;
}
.hotsell {
  flex-grow: 0;
  padding-right: 5px;
  flex-shrink: 0;
}
.hotsell .top {
  display: flex;
}
p {
  margin: 0;
  width: 70%;
  font-size: 0.8rem;
  color: white;
  flex-grow: 0;
}
.hotsell img {
  flex-grow: 0;
  display: block;
  width: 60px;
  margin-right: 2%;
  flex-shrink: 0;
}
.count {
  background-color: #999;
  color: yellow;
  font-size: 0.8em;
  margin: 0;
  line-height: 1.5;
  width: 200px;
  text-align: center;
  padding-bottom: 0.2rem;
  border-radius: 5px;
}
.selection li {
  display: flex;
  padding-bottom: 20px;
  padding-left: 0.5rem;
}
.tag {
  background-color: #fff;
  display: block;
  border-radius: 10px;
  width: 60px;
  font-size: 0.3rem;
  text-align: center;
  line-height: 2;
  flex-grow: 0;
  flex-shrink: 0;
  height: 20px;
}
.select {
  flex-grow: 1;
  display: flex;
  padding-left: 10px;
}
.select .tagin {
  user-select: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  display: block;
  border-radius: 10px;
  width: 60px;
  font-size: 0.3rem;
  text-align: center;
  line-height: 2;
  flex-grow: 0;
  flex-shrink: 0;
  height: 20px;
  color: white;
  border: 1px solid #fff;
  margin-bottom: 10px;
  margin-left: 10px;
}
.select .tagin:hover,
.select .active {
  color: black;
  background-color: rgba(255, 255, 255, 1);
}
</style>
