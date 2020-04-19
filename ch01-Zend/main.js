var vueInstance = new Vue({
  el: "#app",
  data: {
    title: "Áo thun thể thao vải đốm",
    url: `https://www.lazada.vn/products/bo-3-ao-thun-tron-nam-form-rong-phong-cach-hang-quoc-vai-day-min-everest-trang-den-xam-i143044637-s147788288.html?spm=a2o4n.searchlistcategory.list.16.b5ea4153M6n7kF&search=1`,
    target: "_blank",
    price: 12000,
    check: true,
  },
  methods: {
    formatPrice() {
      // this chính là đối tượng Vue hiện tại
      var number = this.price;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
  },
});
