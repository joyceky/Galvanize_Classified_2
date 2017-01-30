(function() {
"use strict";

angular
  .module('app', ["ui.router"])
  .service('classifiedsService', classifiedsService);

  function classifiedsService($http) {
    this.getClassifieds = function() {
      return $http.get('/classifieds')
        .then(function (response) {
          console.log("CLASS GET SERVICE RESPONSE:  ", response.data);
          return response.data;
      });
    };
    this.getClassifiedsbyId = function(id) {
      return $http.get('/classifieds/' + id)
        .then(function (response) {
          console.log("CLASS GET ID SERVICE RESPONSE:  ", response.data);
          return response.data;
      });
    };
    this.postClassified = function(newClassified) {
        return $http.post('/classifieds', newClassified)
          .then(function(response) {
            console.log("CLASS POST SERVICE RESPONSE:  ", response.data);
            return response.data;
      });
    };
    this.patchClassifieds = function(id, updatedClassified) {
        return $http.patch('/classifieds/' + id , updatedClassified)
          .then(function(response) {
            console.log("CLASS PATCH SERVICE RESPONSE:  ", response.data);
            return response.data;
      });
    };
  }



})();
