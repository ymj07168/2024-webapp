<template>
  <div class="conWrap">
    <div class="container menu">
      <a href="#" class="on">영화</a>
      <a href="#">방송</a>
      <a href="#">랭킹</a>
      <a href="#">무료</a>
      <a href="#">이벤트</a>
      <a href="#">멤버쉽</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conWrap {
  width: 100%;
  //   background-color: skyblue;
  border-bottom: 1px solid #888;
  .menu {
    display: flex;
    a {
      display: block;
      color: black;
      margin-right: 5px;
      font-weight: bold;
      position: relative;
      padding: 16px 0;
      padding-right: 40px;
    }
    @media screen and (max-width: 560px) {
      a {
        padding-right: 15px;
      }
    }
    a.on:after,
    a:hover:after {
      position: absolute;
      bottom: 0px;
      left: 0px;
      content: "";
      width: 50px;
      height: 5px;
      background-color: green;
    }
  }
}
</style>
