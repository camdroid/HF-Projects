var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
	$scope.name = 'Bob';

	$scope.my_images = [{
		src: 'michigan.jpg',
		cap: 'Graduated from UMich'
	}, {
		src: 'computer-security.jpg',
		cap: 'Focused on Computer Security'
	}, {
		src: 'duo.png',
		cap: 'Working at Duo after bootcamp'
	}, {
		src: 'bell-tower.jpg',
		cap: 'Overlooking Reykjavik'
	}, {
		src: 'plane.jpg',
		cap: 'Crashed Navy plane near Skaftafell'
	}, {
		src: 'shimbashi.jpg',
		cap: 'Shimbashi Station in Tokyo'
	}, {
		src: 'salmon-fishing.jpg',
		cap: 'Salmon Fishing in Alaska'
	}, {
		src: 'marina.jpg',
		cap: 'Celebrating a friend\'s engagement!'
	}, {
		src: 'han-river.jpg',
		cap: 'Biking along the Han River in Seoul'
	}];

});
app.directive('photoBox', function(){
	return {
		replace:true,
		scope: { 
			source: '@',
			cap: '@',
			clicked: '=false'
		},
		restrict: 'AEC',
		templateUrl: 'partials/photo-box.html',
		link: function(scope, elem, attrs) {
			elem.bind('click', function() {
				if(scope.clicked) {
					elem.css('background-color', '#305275')
					scope.clicked = false;
				} else {
					elem.css('background-color', 'gray');
					scope.clicked = true;
				}
			});
			elem.bind('mouseover', function() {
				elem.css('cursor', 'pointer');
				elem.css('border', 'none');
			})
		}
	};
});