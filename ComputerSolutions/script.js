var app = angular.module("computer", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/main', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        }).
        when('/about', {
            templateUrl: 'about.html',
            controller: 'MainCtrl'
        }).
        when('/services', {
            templateUrl: 'service.html',
            controller: 'ServiceCtrl'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        }).
        otherwise({redirectTo:'/main'})
    }])
    .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('service.json').then(function(response) {
            $scope.services = response.data;
        });
    }])

    .controller('ServiceCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('service.json').then(function(response) {
            $scope.services = response.data;
        });
    }])

    .controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('location.json').then(function(response) {
            $scope.locations = response.data;
        });
    }]);
