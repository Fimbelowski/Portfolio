var vm;

window.onload = function() {
  vm = new Vue({
    el: '#v-app',
    data: {
      modalActive: false
    },
    methods: {
      openModal: function() {
        this.modalActive = true;
      },
      closeModal: function() {
        this.modalActive = false;
      }
    }
  });
}
