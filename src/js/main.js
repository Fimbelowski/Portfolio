var vm;

window.onload = function() {
  vm = new Vue({
    el: '#projects',
    data: {
      modalActive: false,
      activeModalContent: {
        title: ''
      },
      projectPreviews: [{
        title: "What's WR?",
        subtitle: "Find a random speedrun world record to watch!"
      }]
    },
    methods: {
      activateModal: function(contentIndex) {
        this.toggleModal();
        this.setActiveModalContent(contentIndex);
      },
      toggleModal: function() {
        this.modalActive = !this.modalActive;
      },
      setActiveModalContent: function(contentIndex) {
        this.activeModalContent = this.projectPreviews[contentIndex];
      }
    }
  });
}
