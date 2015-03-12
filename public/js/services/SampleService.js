angular.module('SampleModule')
.factory('SampleService', ['$http', '$log', function($http, $log) {
	return {
		get : function() {
			return $http.get('/api/sample');
		}
	};
}]);