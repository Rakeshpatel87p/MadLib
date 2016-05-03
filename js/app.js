console.log('hey');
angular.module('myApp', [])
    .controller('fillContent', function($scope) {

        var content = {
        	maleName:"Joey"
        };
            // maleName: '',
            // job: '',
            // task: '',
            // celebrity: '',
            // skill: '',
            // adjective: '',
            // number: ''

        $scope.content = content;
        $scope.crazyScope = false;
        $scope.submit = function() {
            $scope.crazyScope = $scope.myForm.$valid
            // if ($scope.myForm.$valid) {
            //     $scope.crazyScope=true;

            // } else {
            //     $scope.crazyScope=false;

            // }
        }

        // How to reset the form - fail one of the hide/show conditions.
        $scope.startOver = function(){
        	$scope.myForm.$submitted = false;
        	$scope.crazyScope=false;
        	$scope.content = {};
        }




    });