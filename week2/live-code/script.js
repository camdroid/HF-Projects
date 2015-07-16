app = angular.module('serviceExample', ['ngRoute']);

//Set up routing for this app
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'view1.html',
		controller: 'serviceCtrl'
	})
	.when('/view2', {
		templateUrl: 'view2.html',
		controller: 'nameDisplayer'
	});
});

app.controller('serviceCtrl', function($scope, myService) {
	$scope.things = ['thing1', 'thing2'] || 'hi';

	$scope.save = function(name) {
		console.log('user name: '+ name);
		myService.saveName(name);
	};
});

app.controller('nameDisplayer', function($scope, myService) {
	$scope.name = myService.getName();
});



app.factory('myService', function() {
	var name = "";
	return {
		saveName: function(name) {
			this.name = name;
		},
		getName: function() {
			return this.name;
		}
	};
});