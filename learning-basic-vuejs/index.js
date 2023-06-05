// const nameUser = "Nguyen Vu Nhat Huy";
// const className = 33;
// document.getElementById("name").innerHTML = `tên: ${nameUser}`;

Vue.createApp({
  data() {
    return {
      nameUser: "Nguyen Vu Nhat Huy",
      className: 33,
    };
  },
}).mount("#interpolation");
