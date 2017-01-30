
(function() {
    "use strict";

// Create module app
angular.module('app')
// Create app component
  .component("app", {
     controller: controller,
      templateUrl: "js/app/app.template.html"
  });

  controller.$inject = ["$http"];

  function controller($http) {
    var vm = this;
// Upon initialziation, do these things
    vm.$onInit = function() {
   };
  }
  })();
