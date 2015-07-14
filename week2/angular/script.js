function shopping_cart($scope) {
	$scope.items = ["hi@email.com", "hello@email.com"];

	$scope.add = function() {
		$scope.items.push($scope.new_item);
		$scope.new_item = "";
	}
}