var tla = angular.module('twitterLittleApp', ['ngAnimate'])

tla.service('tService', function($http){
	this.getLandingPage = function() {
		return $http.get('/');
	},
	this.getTweets = function(username) {
		return $http.post('/tweets/', username);
	};
});

tla.controller('controller', function($scope, $http, tService) {
	$scope.username = "";

	// get landing page
	tService.getLandingPage()
		.success(function() {
			$scope.tweets = [];
		});

	// get the tweets
	$scope.search = function() {
			tService.getTweets($scope.username)
				.success(function(data) {
					$scope.tweets = JSON.parse(JSON.stringify(data));
				});
		}
});