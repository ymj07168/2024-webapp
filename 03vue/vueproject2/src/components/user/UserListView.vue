<template>
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="d-flex gap-2 border rounded p-3 mb-3 justify-content-between align-items-center"
  >
    <div class="d-flex gap-2 align-items-center">
      <div class="avata">
        <img :src="item.image" alt="" />
      </div>
      <div>
        <h5 class="mb-0">{{ item.userid }}</h5>
        <p class="mb-0">{{ item.username }}</p>
      </div>
    </div>
    <button
      class="btn btn-primary"
      @click="$store.commit('removeUser', item.userid)"
    >
      삭제
    </button>
  </div>
</template>

<script setup>
// const removeUser = (targetId) => {
//   store.commit("removeUser", targetId);
// };
</script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
