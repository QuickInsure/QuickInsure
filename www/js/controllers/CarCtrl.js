app.controller('CarCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    $scope.carname = "";
    $scope.registrationNum = "";
    $scope.submitFunction = function() {
		console.log($scope.carname);
        console.log($scope.registrationNum);
	}
    //ionicMaterialInk.displayEffect();
});