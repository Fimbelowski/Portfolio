var vm;

window.onload = function() {
  vm = new Vue({
    el: '#v-app',
    data: {
      modalActive: false,
      activeTab: 'about'
    },
    methods: {
      openModal: function() {
        this.modalActive = true;
      },
      closeModal: function(event) {
        if (event.target !== document.getElementById('modal-image')) {
          this.modalActive = false;
        }
      },
      updateActiveTab: function(targetTab) {
        this.activeTab = targetTab;
      },
    }
  });
}
