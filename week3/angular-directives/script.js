var app = angular.module('photo-grid-app', []);

app.controller('MainCtrl', function($scope) {
	$scope.image_src = "res/images/michigan.jpg";
	$scope.image_cap = "Graduated from UMich";
});

app.directive('photo-box',function(){
	return {
		replace: true,
		restrict: 'ECMA',
		// templateUrl: 'partials/photo-box.html',
		template: "<h1>Hello World</h1>",
		link: function(scope, elem, attrs) {
			// var img = document.createElement('img');
			// img.src = 'res/images/michigan.jpg';
	 
			// // directives as comment
			// if (element[0].nodeType === 8) {
			// 	element.replaceWith(img);
			// } else {
			// 	element[0].appendChild(img);
			// }
		}
	}
});