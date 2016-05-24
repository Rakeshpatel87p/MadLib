angular.module('myApp', ['ngAnimate'])
    .controller('fillContent', function($scope) {

        var content = {};

        $scope.content = content;
        $scope.crazyScope = false;
        $scope.submit = function() {
            $scope.crazyScope = $scope.myForm.$valid

        }

        // How to reset the form - fail one of the hide/show conditions.
        $scope.startOver = function(){
        	$scope.myForm.$submitted = false;
        	$scope.crazyScope=false;
        	$scope.content = {};
        }




    });