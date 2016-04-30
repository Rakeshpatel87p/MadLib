console.log('hey');
angular.module('myApp', [])
	.controller('fillContent', function($scope) {

		var content = {
			maleName: '(Name)',
			job: '(Dirty Job)',
			task: '(Task)',
			celebrity: '(Celebrity)',
			skill: '(Skill)',
			adjective:'(Adjective)',
			number: '(Number)'


		};

		$scope.content = content;

});
