<template>
  <NavbarView />
  <ContainerView :data="data" @openModal="modalOpen" />
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

export default {
  name: "appView",
  data() {
    return {
      data: mdata,
      isModal: false,
      selectedNum: 0,
    };
  },
  methods: {
    increaseLike(i) {
      this.data[i].like += 1;
    },
    modalOpen(num) {
      this.selectedNum = num;
      this.isModal = true;
    },
    modalClose() {
      this.isModal = false;
    },
  },
  components: {
    NavbarView: NavbarView,
    ModalView: ModalView,
    ContainerView: ContainerView,
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
