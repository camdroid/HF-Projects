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

	$scope.save = function(user) {
		console.log('user name: '+ user.name);
		myService.saveUser(user);
	};
});

app.controller('nameDisplayer', function($scope, myService) {
	$scope.name = myService.getName();
	$scope.number = myService.getNumber();
});



app.factory('myService', function() {
	var name = "";
	var user = {};
	return {
		saveName: function(name) {
			// this.user.name = "";
			this.user.name = name;
		},
		getName: function() {
			if(typeof(this.user.name) === 'undefined') {
				return 'bob';
			}
			return this.user.name;
		},
		saveUser: function(user) {
			this.user = user;
			console.log('Saving user '+user.name);
		},
		getUser() {
			return this.user;
		},
		getNumber() {
			if(typeof(this.user.number) === 'undefined') {
				return 0;
			}
			return this.user.number;
		}
	};
});