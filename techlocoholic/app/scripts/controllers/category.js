'use strict';

/**
 * @ngdoc function
 * @name techlocoholicApp.controller:categoryCtrl
 * @description
 * # categoryCtrl
 * Controller of the techlocoholicApp
 */
angular.module('techlocoholicApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
  });
