<template>
  <div class="container">
    <div class="nav">
      <ul>
        <li class="nav-item" v-for="(item,index) in navItem" :key="index + item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      navItem: [
        "首页",
        "生活笔记",
        "技术杂谈",
        "福利专区",
        "关于自己",
        "给我留言",
        "赞助作者",
        "技术交流",
        "项目合作"
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../styles/base.less";
.container {
  width: 100%;
  height: 52px;
  background: rgba(204, 255, 255, 0.4);
  .nav {
    width: 80%;
    height: 100%;
    min-width: 1000px;
    margin: 0 auto;
    &:after {
      content: "";
      clear: both;
      display: block;
    }
    ul {
      list-style: none;
      height: 100%;
      &:after {
        content: "";
        clear: both;
        display: block;
      }
      li {
        float: left;
      }
    }
  }
}
</style>