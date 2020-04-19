<template>
  <div id="app">
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader /> -->
    <div class="container">
      <button v-on:click="title = 'Học lập trình VueJS'">Thay đổi title từ Component App.vue</button>
      <comp-header v-bind:title="title" v-on:changeTitleEvent="handleChangeTitle" />
      <list-user v-bind:listUser="listUser" />
      <comp-footer />
    </div>
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import CompFooter from "./components/CompFooter.vue";
import ListUser from "./components/ListUser.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Hello VueJs",
      title: "Hello VueJs - Header",
      listUser: [
        { id: 100, email: "test1@gmail.com", active: true },
        { id: 101, email: "test2@gmail.com", active: false },
        { id: 102, email: "test3@gmail.com", active: true },
        { id: 103, email: "test4@gmail.com", active: true },
        { id: 104, email: "test5@gmail.com", active: false },
        { id: 105, email: "test6@gmail.com", active: false },
        { id: 106, email: "test7@gmail.com", active: false },
        { id: 107, email: "test8@gmail.com", active: false },
        { id: 108, email: "test8@gmail.com", active: false }
      ]
    };
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser
  },
  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
</style>
