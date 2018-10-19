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
        gallery: ['', ''],
        desc: '',
        uri: '',
        github: ''
      },
        {
        title: "What's WR?",
        subtitle: "Find a random speedrun world record to watch!",
        gallery: ['dist/images/projects/whats-wr/gallery-1.png',
                  'dist/images/projects/whats-wr/gallery-2.png'
        ],
        desc: ['"What\'s WR" is a site that will find a random speedrun world record video for the user to watch. (Speedruns are the act of completing a video game as fast as possible.) This helps users find obscure games or runners they would have otherwise never known about.',
              '"What\'s WR" works mainly through consuming Speedrun.com\'s API. The site fetches a random set of games and then compares the options against various criteria to determine whether or not it is suitable for viewing.',
              'After a game and category are deemed fit for viewing, the site makes a few more calls to the API concurrently to retrieve auxiliary information such as information about the game and category, information about the runner(s), and also links to the runner(s) social media accounts.'],
        uri: 'https://fimbelowski.github.io/Whats-WR/',
        github: 'https://github.com/Fimbelowski/Whats-WR'
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
          this.activeModalContent = this.projectPreviews[0]; // Unloads project details when modal is closed
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
