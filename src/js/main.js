var vm;

window.onload = function() {
  vm = new Vue({
    el: '#v-app',
    data: {
      modalImage: '',
      modalActive: false,
      activeButton: '',
      activeTab: '',
      mainContentState: 'fade-in',
      updateDelay: 200
    },
    methods: {
      openModal: function(imagePath) {
        this.modalImage = imagePath;
        this.modalActive = true;
      },
      closeModal: function(event) {
        if (event.target !== document.getElementById('modal-image')) {
          this.modalActive = false;
        }
      },
      updateActiveButton: function(targetButton) {
        // If the button being pressed is already active...
        if(this.activeButton === targetButton) {
          // Do nothing
        } else {
          // Activate the new button
          this.activeButton = targetButton;
        }
      },
      updateActiveTab: function(targetTab) {
        // If the tab being activated is already active...
        if(this.activeTab === targetTab) {
          // Do nothing
        } else {
          // Activate the target tab
          this.activeTab = targetTab;
        }
      },
      toggleMainContentFade: function() {
        if(this.mainContentState === 'fade-in') {
          this.mainContentState = 'fade-out';
        } else {
          this.mainContentState = 'fade-in';
        }
      },
      buttonClicked: function(targetButton) {
        // Update the active button
        this.updateActiveButton(targetButton);

        // Fade out the main content
        this.toggleMainContentFade();

        // After a delay, update the active tab, the location hash and fade in the main content
        setTimeout(this.updateActiveTab, this.updateDelay, targetButton);
        setTimeout(this.updateLocationHash, this.updateDelay, targetButton);
        setTimeout(this.toggleMainContentFade, this.updateDelay);
      },
      locationHashIsValid: function() {
        var hash = window.location.hash.slice(1);

        if(hash === 'about' ||
           hash === 'projects' ||
           hash === 'tools' ||
           hash === 'contact') {
             return true;
           } else {
             return false;
           }
      },
      updateLocationHash: function(newHash) {
        window.location.hash = newHash;
      }
    },
    mounted: function() {
      // If the window already has a valid location hash...
      if(this.locationHashIsValid()) {
        var existingHash = window.location.hash.slice(1);

        // Set the active tab equal to the existing hash
        this.updateActiveTab(existingHash);

        // Set the active button equal to the existing hash
        this.updateActiveButton(existingHash);
      } else {
        // Set the hash, active tab, and active button to the default (about)
        this.updateLocationHash('about');
        this.updateActiveButton('about');
        this.updateActiveTab('about');
      }
    }
  });
}
