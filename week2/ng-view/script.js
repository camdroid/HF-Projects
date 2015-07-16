var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'view1.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view1', {
		templateUrl: 'view1.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view2', {
		templateUrl: 'view2.html',
		controller: 'routeCtrl'
	});
	$routeProvider.otherwise({
		templateUrl: '/404.html',
		redirect: '/404.html'
	});
});

app.controller('routeCtrl', function() {

});