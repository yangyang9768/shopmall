import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    login: false,
    loginName: null,
    cart: [
      {
        style: "iphonexxx",
        size: "xl",
        id: "998s3",
        name: "龙之谷限量礼包大BOSS周年庆冰龙款男士T恤1",
        price: 79,
        numincart: 1,
        select: true,
        storage: true,
        status: true
      },
      {
        style: "iphonexx",
        size: "xl",
        id: "9ssw983",
        name: "龙之谷限量礼包大BOSS周年庆冰龙款男士T恤1",
        price: 179,
        numincart: 1,
        select: true,
        storage: true,
        status: true
      },
      {
        style: "iphonexx",
        size: "xl",
        id: " 99s83",
        name: "龙之谷限量礼包大BOSS周年庆冰龙款男士T恤1",
        price: 99,
        numincart: 1,
        select: true,
        storage: false,
        status: false
      },
      {
        style: "iphonexx",
        size: "xl",
        id: " 998zw3",
        name: "龙之谷限量礼包大BOSS周年庆冰龙款男士T恤1",
        price: 69,
        numincart: 1,
        select: true,
        storage: false,
        status: true
      }
    ],
    protential: [],
    shopadd: [
      {
        style: "iphonexxx",
        size: "xl",
        id: "99gw8s3",
        name: "六周年限量版礼包",
        price: 79,
        numincart: 1,
        select: true,
        storage: true
      },
      {
        style: "iphonexxx",
        size: "xl",
        id: "99ttw8s3",
        name: "六周年限量版礼包",
        price: 79,
        numincart: 1,
        select: true,
        storage: true
      },
      {
        style: "iphonexxx",
        size: "xl",
        id: "9cc9w8s3",
        name: "六周年限量版礼包",
        price: 79,
        numincart: 1,
        select: true,
        storage: true
      },
      {
        style: "iphonexxx",
        size: "xl",
        id: "99ttwww8s3",
        name: "六周年限量版礼包",
        price: 79,
        numincart: 1,
        select: true,
        storage: true
      }
    ],
    address: [
      {
        id: "wwssdd",
        name: "janexu",
        tel: 997675699,
        detailaddress: "hshshhhdcdcffdvd",
        default: true,
        active: true,
        province: "辽宁省",
        city: "大连市",
        area: "西岗区"
      },
      {
        id: "ww3245s00ssdd",
        name: "janexu",
        tel: 997675699,
        detailaddress: "hshshhhdcdcffdvd",
        default: false,
        active: false,
        province: "辽宁省",
        city: "大连市",
        area: "西岗区"
      },
      {
        id: "wws577sdd",
        name: "janexu",
        tel: 9976799,
        detailaddress: "hshrrshhhdcdcffdvd",
        active: false,
        default: false,
        province: "辽宁省",
        city: "大连市",
        area: "西岗区"
      },
      {
        id: "wws67sdd",
        name: "janexu",
        tel: 9967799,
        detailaddress: "hsddhshhhdcdcffdvd",
        active: false,
        default: false,
        province: "辽宁省",
        city: "大连市",
        area: "西岗区"
      },
      {
        id: "ww45ssdd",
        name: "janexu",
        tel: 9967567599,
        province: "辽宁省",
        city: "大连市",
        area: "西岗区",
        detailaddress: "hshshhhdcdcffdvd",
        active: false,
        default: false
      }
    ]
  },
  mutations: {
    login(state, loginName){
      state.login = true,
        state.loginName = loginName
    },
    getcart(state, cart) {
      state.cart = cart;
    },
    delcart(state, item) {
      state.cart = [...state.cart.filter(it => it.id != item.id)];
    },
    selectnone(state, select) {
      if (state.cart.length === select) {
        state.cart.forEach(item => (item.select = false));
      } else {
        state.cart.forEach(item => (item.select = true));
      }
    },
    addpro(state, obj) {
      state.protential.push(obj);
    },
    delpro(state) {
      state.protential = [];
    },
    addcart(state, obj) {
      state.cart.push(obj);
    },
    addaddress(state, obj) {
      obj.active = false;
      if (state.address.find(item => item.id === obj.id)) {
        state.address = [...state.address.filter(item => item.id != obj.id)];
      }
      if (obj.default === false) {
        state.address.unshift(obj);
      } else {
        state.address.forEach(item => (item.default = false));
        state.address.unshift(obj);
      }
    },
    edditaddress(state, obj) {
      state.address.filter(item => item.id === obj.id);
    },
    changedefault(state, obj) {
      state.address.forEach(item => (item.default = false));
      state.address.find(item => item.id === obj.id).default = true;
    },
    deladdress(state, obj) {
      state.address = [...state.address.filter(item => item.id != obj.id)];
    },
    selectaddress(state, obj) {
      state.address.forEach(item => (item.active = false));
      state.address.find(item => item.id === obj.id).active = true;
    }
  },
  actions: {},
  getters: {
    selectlist(state, getters) {
      return [...state.cart.filter(it => it.select === true)];
    },
    totalprice(state, getters) {
      const trueprice = [
        ...getters.selectlist.filter(it => it.storage === true)
      ];
      const sum = trueprice.reduce((newvalue, item) => {
        return newvalue + item.price * item.numincart;
      }, 0);
      return sum;
    },
    orderinfo(state, getters) {
      const targetad = state.address.find(item => item.active === true);
      targetad.totalprice = getters.totalprice;
      return targetad;
    }
  }
});
export default store;
