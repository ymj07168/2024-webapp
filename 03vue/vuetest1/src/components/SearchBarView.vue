<template>
  <div class="container">
    <!-- <input
      type="search"
      @input="inputText = $event.target.value"
      placeholder="검색어를 입력하세요"
    /> -->
    <!-- <input
      type="search"
      v-model="inputText"
      placeholder="검색어를 입력하세요"
    /> -->
    <input
      type="
    search"
      @change="handleSearch"
    />
    <button>검색</button>
    <p>{{ inputText }}</p>
  </div>
</template>

<script>
export default {
  name: "searchView",
  props: {
    data: Object,
  },
  data() {
    return {
      inputText: "test",
    };
  },
  methods: {
    handleSearch(event) {
      this.$emit("searchMovie", event.target.value);
      this.inputText = event.target.value;
      event.target.value = "";
    },
  },
  watch: {
    inputText(name) {
      const findName = this.data.filter((movie) => {
        return movie.title.includes(name);
      });
      if (findName.length == 0) {
        alert("영화 자료가 없습니다!");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
