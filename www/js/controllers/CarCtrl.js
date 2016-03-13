app.controller('CarCtrl', function ($scope, $stateParams,$ionicModal) {
    //ionic.material.ink.displayEffect();
    $scope.carname = "";
    $scope.registrationNum = "";
    $scope.fuelType=""
    $scope.regYear = ""
    $scope.calculatedPremium = ""

    $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];

   $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

   $scope.openModal = function() {
   	$scope.calculatedPremium  = $scope.regYear*100+"RS";
      $scope.modal.show();
   };

     $scope.closeModal = function() {
      $scope.modal.hide();
   };

   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modal.remove();
   });
	
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
   });
	
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action
   });

  
  // $scope.createContact = function(u) {        
  //   $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
  //   $scope.modal.hide();
  // };


    $scope.submitFunction = function() {
		console.log($scope.carname);
        console.log($scope.registrationNum);
        console.log($scope.fuelType);
        console.log($scope.regYear);
        $scope.calculatedPremium  = $scope.regYear*200+"USD";
       // $scope.modal.show()
	}

	$scope.selectedFuelType = function(type){
		//console.log($scope.fuelType)
		//console.log(type)
		$scope.fuelType = type;
	}
	$scope.selectedRegYear = function(type){
		//console.log($scope.fuelType)
		//console.log(type)
		$scope.regYear = type;
	}
    //ionicMaterialInk.displayEffect();
});

//angular.module('ionicApp', ['ionic'])

// .controller('AppCtrl', function($scope, $ionicModal) {
  
//   $scope.contacts = [
//     { name: 'Gordon Freeman' },
//     { name: 'Barney Calhoun' },
//     { name: 'Lamarr the Headcrab' },
//   ];

//   $ionicModal.fromTemplateUrl('templates/modal.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
  
//   $scope.createContact = function(u) {        
//     $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
//     $scope.modal.hide();
//   };

// });