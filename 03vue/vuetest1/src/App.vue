<template>
  <NavbarView />
  <SearchBarView :data="data_temp" @searchMovie="searchMovie" />
  <div class="container">
    <button @click="showAllView">전체보기</button>
  </div>
  <ContainerView
    :data="data_temp"
    @openModal="modalOpen"
    @increaseLike="increaseLike"
  />
  <ModalView
    :data="data"
    :isModal="isModal"
    :num="selectedNum"
    @closeModal="modalClose"
  />
</template>

<script>
import mdata from "./assets/mdata";
import ContainerView from "./components/ContainerView.vue";
import ModalView from "./components/ModalView.vue";
import NavbarView from "./components/NavbarView.vue";
import SearchBarView from "./components/SearchBarView.vue";

export default {
  name: "appView",
  data() {
    return {
      data: mdata,
      isModal: false,
      selectedNum: 0,
      data_temp: [...mdata],
    };
  },
  methods: {
    increaseLike(i) {
      this.data.filter((movie) => movie.id == i)[0].like += 1;
    },
    modalOpen(num) {
      this.selectedNum = num;
      this.isModal = true;
    },
    modalClose() {
      this.isModal = false;
    },
    searchMovie(title) {
      console.log("영화이름", title);
      this.data_temp = this.data.filter((movie) => {
        return movie.title.includes(title);
      });
    },
    showAllView() {
      this.data_temp = [...this.data];
    },
  },
  components: {
    NavbarView: NavbarView,
    ModalView: ModalView,
    ContainerView: ContainerView,
    SearchBarView: SearchBarView,
  },
};
</script>

<style lang="scss">
$radius: 5px;
.container {
  width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 790px) {
    width: 100%;
  }
}
.cardWrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .card {
    width: calc((100% - 30px) / 4);
    @media screen and (max-width: 790px) {
      width: calc((100% - 30px) / 2);
    }
    @media screen and (max-width: 560px) {
      width: 100%;
    }
    .imgWrap {
      border-radius: $radius;
      position: relative;
      width: 100%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
        transition: 0.3s;
      }
      &:hover img {
        transform: scale(1.1);
      }
      .hot {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: skyblue;
        padding: 2px 10px;
        border-radius: $radius;
        color: white;
      }
    }
  }
}

.mb-10 {
  margin-bottom: 10px !important;
}
img {
  display: block;
}
.btn {
  background: pink;
  border-radius: $radius;
  padding: 5px 16px;
  text-align: center;
  cursor: pointer;
  color: white;
  border: 0 none;
  &.btn-primary {
    background-color: skyblue;
  }
  &.btn-info {
    background-color: white;
  }
  width: 100%;
}
</style>
