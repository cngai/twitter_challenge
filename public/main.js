var tm = angular.module('twitterModule', ['ngAnimate'])

//use post function in routes.js
tm.service('tService', function($http){
	this.getTweets = function(username) {
		return $http.post('/tweets', username);
	};
});

tm.controller('tController', function($scope, $http, tService) {
	$scope.username = "";		//declare username variable

	// get landing page
	/*tService.getLandingPage()
		.success(function() {
			$scope.tweets = [];
		});*/

	// get the tweets
	$scope.searchTweets = function() {
		tService.getTweets($scope.username)
		//parsed json data is now in 'data' variable
		//success callback function
			.success(function(obj) {
				$scope.tweets = obj;
			});
	}
});