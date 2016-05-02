console.log('hey');
angular.module('myApp', [])
    .controller('fillContent', function($scope) {

        var content = {
            maleName: '',
            job: '',
            task: '',
            celebrity: '',
            skill: '',
            adjective: '',
            number: ''

        };

        $scope.content = content;

        $scope.submit = function() {
            if ($scope.myForm.$valid) {
                return true;
            } else {
                return false;
            }
        }


    });
