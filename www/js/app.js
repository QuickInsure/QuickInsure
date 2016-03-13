// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.login', {
		url: '/login',
		views: {
			'menuContent': {
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			}
		}
	})

	.state('app.lists', {
		url: '/lists',
		views: {
			'menuContent': {
				templateUrl: 'templates/lists.html',
				controller: 'ListsCtrl'
			}
		}
	})

	.state('app.ink', {
		url: '/ink',
		views: {
			'menuContent': {
				templateUrl: 'templates/ink.html',
				controller: 'InkCtrl'
			}
		}
	})

	.state('app.motion', {
		url: '/motion',
		views: {
			'menuContent': {
				templateUrl: 'templates/motion.html',
				controller: 'MotionCtrl'
			}
		}
	})

	.state('app.components', {
		url: '/components',
		views: {
			'menuContent': {
				templateUrl: 'templates/components.html',
				controller: 'ComponentsCtrl'
			}
		}
	})

	.state('app.extensions', {
		url: '/extensions',
		views: {
			'menuContent': {
				templateUrl: 'templates/extensions.html',
				controller: 'ExtensionsCtrl'
			}
		}
	})

	.state('app.car', {
	    url: '/car',
	    views: {
	        'menuContent': {
	            templateUrl: 'templates/car.html',
	            controller: 'CarCtrl'
	        }
	    }
    })
	;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/login');
});


app.service('OnlineConnectService', function($http, $ionicPlatform){
	var localConnectFunction = function(path, data){
		return $http.post('http://localhost:3000'+path, data).then(function(response) { 
			return response.data; 
		});
	};

	var bluemixConnectFunction = function(path, data){
		var response = null;
		$ionicPlatform.ready(function() {
			BMSClient.initialize("http://qi.au-syd.mybluemix.net", "542f2cb5-9b79-4162-b0a8-d7b4c835e6fe");

			var request = new MFPRequest(path, MFPRequest.POST);
			request.send(data, function(success){
				response = JSON.parse(success.responseText);
			}, function(error){
				console.log("failed");
			});
		});
		return response;
	};

	return {
		localConnect: localConnectFunction,
		bluemixConnect: bluemixConnectFunction
	};
});
