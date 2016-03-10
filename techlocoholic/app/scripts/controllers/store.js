'use strict';

/**
 * @ngdoc function
 * @name techlocoholicApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the techlocoholicApp
 */
angular.module('techlocoholicApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
