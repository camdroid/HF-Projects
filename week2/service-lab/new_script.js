app = angular.module('formExample', [])
	.controller('ExampleController', ['$scope',
		function($scope) {
			$scope.master = {};

			$scope.update = function(user) {
				$scope.master = angular.copy(user);
				console.log("New master: "+user);
			};

			$scope.reset = function() {
				$scope.user = angular.copy($scope.master);
				console.log("Reset");
			};

			$scope.reset();
		}
	])
	.service('FormService', function() {
		var user = {};

	})
	// .config(function($routeProvider) {
	// 	$routeProvider
	// 	.when('/', {
	// 		templateUrl: 'index.html', 
	// 		controller: 'pageCtrl'
	// 	})
	// 	.when('/display', {
	// 		templateUrl: 'display.html',
	// 		controller: 'pageCtrl'
	// 	})
	// })
	// .controller('pageCtrl', function() {});