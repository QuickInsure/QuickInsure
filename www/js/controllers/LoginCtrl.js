app.controller('LoginCtrl', function($scope, OnlineConnectService) {
	$scope.username = "";
	$scope.password = "";
	$scope.submitFunction = function() {
		$scope.username = loginForm.username.value;
		$scope.password = loginForm.password.value;
        data = {
        	username: $scope.username,
        	password: $scope.password
        }
		/*OnlineConnectService.localConnect("/login/mobileAuth", data).then(function(response) {
			if (response) {
				alert("login successful");
			}
			else {
				alert("login unsuccessful");
			}
		});*/

		/*OnlineConnectService.bluemixConnect("/login/mobileAuth", data).then(function(response) {
			if (response) {
				alert("login successful");
			}
			else {
				alert("login unsuccessful");
			}
		});*/
	}
});



app.directive('cleanInputs', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attr, mCtrl) {
			function inputValidation(value) {
				if (value.search(/(^[!~`'"#$%^&*()-=+[\]{};:<>,?|\\]+$)/) > -1) {
					mCtrl.$setValidity('restrictedChar', false);
				} else {
					mCtrl.$setValidity('restrictedChar', true);
				}
				return value;
			}
			mCtrl.$parsers.push(inputValidation);
		}
	}
});