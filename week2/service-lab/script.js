var app = angular.module('InputFormModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'form.html',
		controller: 'pageCtrl'
	});

	$routeProvider.when('/form', {
		templateUrl: 'form.html',
		controller: 'pagetCtrl'
	});
	$routeProvider.when('/display', {
		templateUrl: 'display.html',
		controller: 'pageCtrl'
	})
});

app.controller('pageCtrl', function() {

});

app.factory('InputFormService', function() {
	var name = 'a';
	var number = 0;
	return {
		get_name: function() {
			return name;
		},
		set_name: function(new_name) {
			name = new_name;
		},
		get_number: function() {
			return number;
		},
		set_number: function(new_number) {
			number = new_number;
		}
	};
})

app.controller('inputCtrl', function($scope, InputFormService) {
	$scope.name = InputFormService.get_name();
})