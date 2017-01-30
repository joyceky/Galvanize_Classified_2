
(function() {
    "use strict";

// Create module app
angular.module('app')
// Create app component
  .component("edit", {
     controller: controller,
      templateUrl: "js/edit/edit.template.html"
  });

  controller.$inject = ["$http"];

  function controller($http) {
    var vm = this;
// Upon initialziation, do these things
    vm.$onInit = function() {
   };
  }
  })();
