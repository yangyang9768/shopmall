<template>
  <footer>
    <div class="foottop">
      <div class="inner">
        <div class="help">
          <h6>帮助信息</h6>
          <div class="content-box">
            <ul>
              <li>
                <a href="#">
                  <i
                    class="el-icon-guide"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder;padding-right:5px"
                  ></i>购物指南
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    class="el-icon-bank-card"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder; padding-right:5px"
                  ></i>支付方式
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    class="el-icon-truck"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder; padding-right:5px"
                  ></i>配送方式
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    class="el-icon-question"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder;padding-right:5px"
                  ></i>售后服务
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <i
                    class="el-icon-phone"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder;padding-right:5px"
                  ></i>服务中心
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    class="el-icon-s-order"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder;padding-right:5px"
                  ></i>关于我们
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    class="el-icon-document"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder;padding-right:5px"
                  ></i>免责条款
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    class="el-icon-link"
                    style="color:yellow;font-size:0.5rem;font-weight:bolder;padding-right:5px"
                  ></i>友情链接
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="follow">
          <h6>关注我们</h6>
          <ul class="content-box">
            <li>
              <img src="./../assets/images/code.gif" alt />
              <span class="taobao"></span>
            </li>
            <li>
              <img src="./../assets/images/code.gif" alt />
              <span class="weixin"></span>
            </li>
          </ul>
        </div>
        <div class="tel">
          <h6>客服热线</h6>
          <div class="content-box">
            <span>
              <i
                class="el-icon-phone"
                style="color:yellow;font-size:1rem;font-weight:bolder;padding-right:5px"
              ></i>
            </span>
            <p>
              400 113 5353
              <span>周一到周五9点-18点</span>
            </p>
          </div>s
        </div>
      </div>
    </div>
    <div class="footbot">
      <div class="inner">
        <div class="content-box">
          <img src="./../assets/images/logotop_02.gif" alt />
          <div>
            <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</p>
            <p>地址：北京市朝阳区建国路93号院4号楼4层505</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
export default {
  name: "foot"
};
</script>

<style>
* {
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.foottop {
  background-image: url("./../assets/images/botmid.gif");
}
.footbot {
  background-image: url("./../assets/images/botbot.gif");
}
.inner {
  width: 55%;
  padding: 0 0.48rem;
  margin: 0 auto;
}
.foottop .inner {
  padding: 20px 0;
  display: flex;
  justify-content: space-evenly;
}
.foottop .inner .help {
  width: 200px;
  flex-shrink: 0;
  flex-grow: 0;
}
.foottop .help .content-box {
  justify-content: space-between;
}
.foottop .inner > div {
  width: 30%;
}
.foottop .follow {
  margin: 0 5%;
}
.foottop h6 {
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
}
footer .content-box {
  display: flex;
  justify-content: space-between;
}
.foottop a {
  color: white;
  font-size: 0.5rem;
  text-decoration: none;
  display: block;
  line-height: 2;
}
.foottop .follow img {
  display: block;
  width: 100%;
}
.follow li {
  width: 45%;
  text-align: centers;
}
.weixin {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 10px auto;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563946940036&di=105a182e1c45e0b21895c3ecc891e5ba&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff89a35d2617c0c2b83f9c6149021b383cd6b977730fa-Al3vpM_fw658");
  background-size: contain;
  display: block;
}
.taobao {
  margin: 10px auto;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563946483935&di=5ece94d3a9cad129c0171aa8fe524344&imgtype=0&src=http%3A%2F%2Fpic.paopaoche.net%2Fup%2F2015-3%2F2015311151838.png");
  background-size: contain;
  display: block;
}
.tel p {
  margin: 0;
  flex-grow: 1;
  color: white;
  font-size: 0.6rem;
  font-weight: bolder;
}
.tel p span {
  display: block;
  font-size: 0.3rem;
  font-weight: normal;
}
.footbot {
  padding: 10px 0;
}
.footbot p {
  font-size: 0.2rem;
  color: #ddd;
  text-align: center;
  flex-grow: 1;
}
.footbot img {
  width: 2rem;
  height: 1.5rem;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
