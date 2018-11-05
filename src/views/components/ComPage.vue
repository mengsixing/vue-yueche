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
  height: 100vh;
  padding-top: 0.7rem;
  overflow: auto;
}
</style>
