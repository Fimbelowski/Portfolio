var vm;

window.onload = function() {
  vm = new Vue({
    el: '#projects',
    data: {
      isModalActive: false,
      activeModalContent: {
        title: ''
      },
      projectPreviews: [{
        title: '',
        subtitle: '',
        gallery: {
          path1: '',
          path2: ''
        },
        desc: 'test'
      },
        {
        title: "What's WR?",
        subtitle: "Find a random speedrun world record to watch!",
        gallery: {
          path1: 'dist/images/projects/whats-wr/gallery-1.png',
          path2: 'dist/images/projects/whats-wr/gallery-2.png'
        },
        desc: 'test'
      }]
    },
    methods: {
      activateModal: function(contentIndex) {
        this.isModalActive = true;
        this.setActiveModalContent(contentIndex);
      },
      deactivateModal: function(e) {
        if(e.target.id === 'modal-exit-button' || e.target.id === 'modal') {
          this.isModalActive = false;
        }
      },
      setActiveModalContent: function(contentIndex) {
        this.activeModalContent = this.projectPreviews[contentIndex];
      }
    },
    created: function() {
      // Sets the active modal content using an empty dummy object
      this.setActiveModalContent(0);
    }
  });
}
