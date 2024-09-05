<template>
  <div>ViewComp</div>
  {{ props.text }}

  <button @click="emits()">변경</button>
</template>

<script setup>
const props = defineProps({
  text: String,
});
const emits = defineEmits()
</script>

<style lang="scss" scoped></style>
