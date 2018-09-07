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
        this.updateLocationHash(targetTab);
      },
      updateLocationHash: function(newHash) {
        window.location.hash = newHash;
      },
      checkForLocationHash: function() {
        var hash = window.location.hash.slice(1);
        // If the window already has a valid location hash upon loading...
        if(hash === 'about' ||
           hash === 'projects' ||
           hash === 'tools' ||
           hash === 'contact') {
             // Set the active tab equal to the existing hash
             this.updateActiveTab(hash);
           } else {
        // Set the hash and the active tab equal to the default ('about')
        this.updateLocationHash('about');
        this.updateActiveTab('about');
        }
      }
    },
    mounted: function() {
      this.checkForLocationHash();
    }
  });
}
