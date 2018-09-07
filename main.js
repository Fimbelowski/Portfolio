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
      closeModal: function() {
        this.modalActive = false;
      },
      updateActiveTab: function(targetTab) {
        this.activeTab = targetTab;
      },
    }
  });
}
