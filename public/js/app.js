angular.module('sampleApp', ['ngRoute', 'HomeModule', 'SampleModule'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/sample', {
			templateUrl: 'views/sample.html',
			controller: 'SampleController'	
		})

		.otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode(true);

	}]);