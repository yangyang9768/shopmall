<template>
  <article>
    <div class="inner">
      <div class="tophead">
        <h3>
          <span style="font-size:1.5rem;font-weight:bold">|</span>
          收银台
        </h3>
        <p class="path">
          <span>购物车</span>
          <span style="margin:0 1rem">填写订单</span>
          <span class="active-step">付款，支付成功</span>
        </p>
      </div>
      <router-view></router-view>
    </div>
  </article>
</template>

<script>
export default {
  name: "pay"
};
</script>

<style>
</style>
