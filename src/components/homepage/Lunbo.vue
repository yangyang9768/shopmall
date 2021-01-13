<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="lunbo">
    <!-- slides -->
    <swiper-slide>
      <img src="./../../assets/images/product1.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="./../../assets/images/product2.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="./../../assets/images/product3.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="./../../assets/images/product1.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="./../../assets/images/product2.jpg" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="./../../assets/images/product3.jpg" alt />
    </swiper-slide>
    <div class="swiper-button-prev el-icon-arrow-left" slot="button-prev"></div>
    <div class="swiper-button-next el-icon-arrow-right" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide, Swiper } from "vue-awesome-swiper";
export default {
  name: "lunbo",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: "10",
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    // new Swiper(".swiper-container", {
    //   swiperOption: {
    //     slidesPerView: 3,
    //     slidesPerGroup: 1,
    //     spaceBetween: "10",
    //     autoplay: false
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   }
    //   // 如果需要滚动条
    //   //   scrollbar: {
    //   //   el: '.swiper-scrollbar',
    //   // },
    // });
  },
  methods: {
    callback() {}
  }
};
</script>

<style>
.swiper-slide img {
  display: block;
  width: 100%;
}

h2 {
  margin: 0px;
}
.swiper-container {
  margin: 0 -10px;
  box-sizing: border-box;
  padding: 10px;
  background-image: url("./../../assets/images/lunbobg.jpg");
}
.swiper-button-next,
.swiper-button-prev {
  left: 98%;
  background-color: rgba(53, 52, 52, 0.8);
  color: white;
  font-weight: bolder;
  background-image: none;
  line-height: 2;
  font-size: 0.5rem;
  padding: 0;
  height: 28px;
  width: 10px;
  padding: 0;
}
.swiper-button-prev {
  left: 0%;
}
</style>
