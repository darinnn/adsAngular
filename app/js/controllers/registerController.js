/**
 * Created by darin on 1/2/2015.
 */
'use strict';
adsApp.controller('RegisterCtrl', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){
    this.pageTitle='Register';

    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns=data;
        });
    this.register=function(user){
        userData.register(user)
            .then(function(){
                $location.path('/login');
                notify({ message:'Register success. Please login.', classes:'alert-success'});
            }, function(){
                notify({ message:'Invalid Register', classes:'alert-danger'});
            }
        );
    };
}]);