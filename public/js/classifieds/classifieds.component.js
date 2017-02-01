(function() {
    "use strict";

    // Create module app
    angular.module('app')
        // Create app component
        .component("classifieds", {
            controller: controller,
            templateUrl: "js/classifieds/classifieds.template.html",
            styleUrls: ["js/classifieds/classifieds.css"]
        });

    controller.$inject = ["$http", "classifiedsService"];


    function controller($http, classifiedsService) {
        var vm = this;

        // Upon initialziation, do these things
        vm.$onInit = function() {
            vm.classifiedData = {};
            vm.getClassifieds = getClassifieds;
            vm.addClassified = addClassified;
            vm.sortClassifieds = sortClassifieds;
            vm.sort = "-price";
            vm.sortDisplay = "Price";
            vm.search = "";

            getClassifieds();

            // Get all classified ads
            function getClassifieds() {
                classifiedsService.getClassifieds()
                    .then(function(classifieds) {
                        vm.classifieds = classifieds;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            // Add a new classified
            function addClassified(title, description, price, item_image) {
                console.log('in here');
                if (title && description && price && item_image) {
                    vm.classifiedData.created_at = new Date();
                    console.log(vm.classifiedData, "posting here");
                    classifiedsService.postClassified(vm.classifiedData)
                        .then(function(classified) {
                            console.log(classified);
                            vm.getClassifieds();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    vm.classifiedData = {};
                }
            }

            // Sort Classifieds Function
            function sortClassifieds(by) {
                console.log('sort', by);
                switch (by) {
                    case "Price":
                        vm.sort = 'price';
                        vm.sortDisplay = "Price";
                        break;
                    case "Date":
                        vm.sort = 'created_at';
                        vm.sortDisplay = "Date";
                        break;
                }
            }


        };
    }
})();
