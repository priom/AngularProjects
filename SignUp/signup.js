var app = angular.module('signup', ['jcs-autoValidate', 'angular-ladda']);

app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['tooYoung'] = 'You must be at least {0} years old.';
        errorMessages['badUserName'] = 'Bad username';
        errorMessages['badPass'] = 'Your password should contain at least 1 uppercase, 1 lowercase letter, 1 number and 1 character';
    });
});

app.controller('signupCtrl', function($scope, $http) {
	$scope.formModel = {};
	$scope.submit = false;

	$scope.onSubmit = function (valid) {
        $scope.submit = true;
        console.log("Form submitted");
        console.log($scope.formModel);

    $http.post('http://priom.net/register/', $scope,formModel).
        success(function(data) {
            console.log("Success!");
            $scope.submit = false;
        }).error(function(data) {
            console.log("Failed!");
            $scope.submit = false;
        })

	}
});