<template>
  <div class="container secWrap">
    <h1>HOT & NEW</h1>
    <div class="cardWrap">
      <div class="card" v-for="(item, index) in data" :key="index">
        <div class="imgWrap">
          <img :src="`./images/${item.img}`" alt="영화1" />
        </div>
        <div class="cardText">
          <h1>{{ item.title }}</h1>
          <p>⭐{{ item.num }}</p>
          <p>대여 : {{ item.won }}</p>
          {{ todos[index] }}
        </div>
      </div>
    </div>
  </div>
  <!-- <ul>
        <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
      </ul> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todos: ["서울", "부산", "대구"],
      data: [
        { title: "핸섬가이즈", num: "8.6", won: "11,000", img: "handsome.jpg" },
        { title: "탈주", num: "5.3", won: "1,000", img: "movie2.jpg" },
        { title: "하이재킹", num: "7.6", won: "15,000", img: "movie3.jpg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.secWrap {
  margin: 0 auto;
  padding: 5px 16px;
  overflow-x: scroll;
}
.cardWrap {
  display: flex;
  gap: 10px;
  .card {
    width: 212px;
    .imgWrap {
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      img {
        display: block;
        width: 100%;
        transition: 0.3s;
      }
      &:hover img {
        transform: scale(1.05);
      }
    }
    .cardText {
      padding: 5px;
    }
  }
}
</style>
