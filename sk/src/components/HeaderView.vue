<template>
  <header class="container">
    <img src="/images/sk-logo.svg" alt="logo"/>
    
  </header>
</template>

<script>
export default {
  name: "headerView",
};
</script>

<style lang="scss" scoped>
header {
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  background-color: transparent;
  color: white;
  box-shadow: 0 1px 5px 0 rgba(21, 24, 26, 0);
}
</style>
