var myApp = angular.module('myApp', []);

myApp.controller('shoppingCart', function($scope) {
	$scope.items = [];
	$scope.total = 0;
	$scope.sortType = 'name';

	$scope.add = function() {
		$scope.items.push($scope.buildItem($scope.new_item, $scope.new_price));
		$scope.total += $scope.new_price;
		$scope.new_item = "";
		$scope.new_price = "";
	}

	$scope.buildItem = function(new_name, new_price) {
		return {
			name: new_name,
			price: new_price
		};
	}
	$scope.remove = function(item) {
		console.log(item.name);
	}

});