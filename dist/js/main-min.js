var vm;window.onload=function(){vm=new Vue({el:"#v-app",data:{modalImage:"",modalActive:!1,activeButton:"",activeTab:"",mainContentState:"fade-in",updateDelay:100},methods:{openModal:function(t){this.modalImage=t,this.modalActive=!0},closeModal:function(t){t.target!==document.getElementById("modal-image")&&(this.modalActive=!1)},updateActiveButton:function(t){this.activeButton===t||(this.activeButton=t)},updateActiveTab:function(t){this.activeTab===t||(this.activeTab=t)},toggleMainContentFade:function(){"fade-in"===this.mainContentState?this.mainContentState="fade-out":this.mainContentState="fade-in"},buttonClicked:function(t){this.updateActiveButton(t),this.toggleMainContentFade(),setTimeout(this.updateActiveTab,this.updateDelay,t),setTimeout(this.updateLocationHash,this.updateDelay,t),setTimeout(this.toggleMainContentFade,this.updateDelay)},locationHashIsValid:function(){var t=window.location.hash.slice(1);return"about"===t||"projects"===t||"skills"===t||"contact"===t},updateLocationHash:function(t){window.location.hash=t}},mounted:function(){if(this.locationHashIsValid()){var t=window.location.hash.slice(1);this.updateActiveTab(t),this.updateActiveButton(t)}else this.updateLocationHash("about"),this.updateActiveButton("about"),this.updateActiveTab("about")}})};