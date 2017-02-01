
(function() {
    "use strict";

angular.module('app')

  .component("app", {
     controller: controller,
      templateUrl: "js/app/app.template.html"
  });

  controller.$inject = ["$http"];

  function controller($http) {
    var vm = this;
  }
  })();
