angular.module('SampleModule', [])
.controller('SampleController', function($scope, SampleService) {

	SampleService.get()
	.success(function(data) {
		console.log('Successfully called the API.');
		$scope.tagLine = data; 
	})
	.error(function(data) {
		console.log('Failed to call the API.');
	});

});