
(function() {
    "use strict";

// Create module app
angular.module('app')
// Create app component
  .component("classifieds", {
     controller: controller,
      templateUrl: "js/classifieds/classifieds.template.html"
  });

  controller.$inject = ["$http", "classifiedsService"];


  function controller($http, classifiedsService) {
    var vm = this;
// Upon initialziation, do these things
    vm.$onInit = function() {
      console.log(classifiedsService);
      classifiedsService.getClassifieds()
          .then(function(classifieds) {
              vm.classifieds = classifieds;

          })
          .catch((err) => {
              console.log(err);
          });
   };
  }
  })();
