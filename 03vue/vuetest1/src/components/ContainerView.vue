<template>
  <div class="container secWrap">
    <h1 class="mb-10">HOT & NEW</h1>
    <div class="cardWrap">
      <div class="card" v-for="(item, i) in data" v-bind:key="i">
        <div class="imgWrap">
          <img v-bind:src="`./images/${item.img}`" v-bind:alt="`${item.img}`" />
          <div class="hot" v-if="item.hoticon">HOT</div>
        </div>
        <div class="cardBdoy">
          <h4>{{ item.title }}</h4>
          <p>💗{{ item.num }}</p>
          <p>대여 {{ item.won }}</p>
          <p>
            👍{{ item.like }}
            <button @:click="$emit('increaseLike', item.id)">클릭</button>
          </p>
        </div>
        <div class="btn btn-primary" v-on:click="$emit('openModal', item.id)">
          상세보기
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "containerView",
  props: {
    data: Array,
  },
};
</script>

<style lang="scss" scoped></style>
