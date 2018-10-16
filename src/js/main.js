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
        desc: '',
        uri: ''
      },
        {
        title: "What's WR?",
        subtitle: "Find a random speedrun world record to watch!",
        gallery: {
          path1: 'dist/images/projects/whats-wr/gallery-1.png',
          path2: 'dist/images/projects/whats-wr/gallery-2.png'
        },
        desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
        uri: 'https://fimbelowski.github.io/Whats-WR/'
      }]
    },
    methods: {
      activateModal: function(contentIndex) {
        this.isModalActive = true;
        this.setActiveModalContent(contentIndex);
      },
      deactivateModal: function(e) {
        console.log(e);
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
