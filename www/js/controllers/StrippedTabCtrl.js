	app.controller('StrippedTabCtrl', function($scope) {
	// $scope.username = "";
	// $scope.password = "";
	// $scope.submitFunction = function() {
	// 	console.log($scope.username);
 //        console.log($scope.password);
	// }
	});

// app.directive('cleanInputs', function() {
// 	return {
// 		require: 'ngModel',
// 		link: function(scope, element, attr, mCtrl) {
// 			function inputValidation(value) {
// 				if (value.search(/(^[!~`'"#$%^&*()-=+[\]{};:<>,?|\\]+$)/) > -1) {
// 					mCtrl.$setValidity('restrictedChar', false);
// 				} else {
// 					mCtrl.$setValidity('restrictedChar', true);
// 				}
// 				return value;
// 			}
// 			mCtrl.$parsers.push(inputValidation);
// 		}
// 	}
// });