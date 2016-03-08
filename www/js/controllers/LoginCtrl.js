app.controller('LoginCtrl', function($scope) {
	//$scope.username = "Avdhut";
	//$scope.password = "123456";

	var submitButton = document.getElementById("submit-button");
	submitButton.addEventListener('click', function() {
        console.log($scope.username);
        console.log($scope.password);
    });
});