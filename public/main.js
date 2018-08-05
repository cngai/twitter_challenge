var tla = angular.module('twitterLittleApp', ['ngAnimate'])

//use post function in routes.js
tla.service('tService', function($http){
	this.getTweets = function(username) {
		return $http.post('/tweets', username);
	};
});

tla.controller('controller', function($scope, $http, tService) {
	$scope.username = "";		//declare username variable

	// get landing page
	/*tService.getLandingPage()
		.success(function() {
			$scope.tweets = [];
		});*/

	// get the tweets
	$scope.searchTweets = function() {
		tService.getTweets($scope.username)
			.success(function(data) {
				$scope.tweets = JSON.parse(JSON.stringify(data));
			});
	}
});