<template>
  <article>
    <div class="inner">
      <Lunbo />
      <Count />
      <img style="margin:0 -10px" src="./../assets/images/zhongjian.jpg" alt />
      <img style="padding-bottom:50px" src="./../assets/images/probot.gif" alt />
    </div>
  </article>
</template>

<script>
import Lunbo from "./homepage/Lunbo";
import Count from "./homepage/Count";
export default {
  name: "home",
  components: {
    Lunbo,
    Count
  }
};
</script>

<style>
article {
  background-image: url("./../assets/images/bgc.gif");
}
article .inner {
  width: 825px;
  background-color: #fff;
}
.inner > img {
  display: block;
  width: 100%;
}
</style>
