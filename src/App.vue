<template>
  <div id="app">
    <Top />
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName("html")[0];
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 28.8}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();
import Foot from "./components/Foot";
import Top from "./components/Top";
export default {
  name: "app",
  components: {
    Foot,
    Top
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
