<template>
  <header>
    <h1>
      {{ title }}
      <br />
      <button v-on:click="changeTitleHeader">Thay đổi title từ CompHeader.vue</button>
    </h1>
  </header>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    title: String
  },
  data() {
    return {
      text: "Header"
    };
  },
  methods: {
    changeTitleHeader(e) {
      // this.title = "Học lập trình Front-end";
      var data = {
        title: "Học lập trình Front-end"
      };
      this.$emit("changeTitleEvent", data);
    }
  }
};
</script>

<style>
</style>
