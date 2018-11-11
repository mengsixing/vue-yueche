<template>
  <div>
    <com-header :title="title"></com-header>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ComHeader from "./ComHeader.vue";
export default {
  components: { ComHeader },
  props: {
    title: String
  }
};
</script>
<style scoped>
.container {
  height: calc(100vh - 0.52rem);
  margin-top: 0.03rem;
  overflow: auto;
  background-color: #f1f1f1;
  padding-top: 0.1rem;
}
</style>
