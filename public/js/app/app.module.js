(function() {
"use strict";

angular
  .module('app', ["ui.router"])
  .service('classifiedsService', classifiedsService);

// Classified Service Route Functions  
  function classifiedsService($http) {
    this.getClassifieds = function() {
      return $http.get('/classifieds')
        .then(function (response) {
          return response.data;
      });
    };
    this.getClassifiedsbyId = function(id) {
      return $http.get('/classifieds/' + id)
        .then(function (response) {
          return response.data;
      });
    };
    this.postClassified = function(newClassified) {
        return $http.post('/classifieds', newClassified)
          .then(function(response) {
            return response.data;
      });
    };
    this.patchClassifieds = function(id, updatedClassified) {
        return $http.patch('/classifieds/' + id , updatedClassified)
          .then(function(response) {
            return response.data;
      });
    };
    this.deleteClassifieds = function(id) {
        return $http.delete('/classifieds/' + id)
          .then(function(response) {
            return response.data;
      });
    };
  }



})();
