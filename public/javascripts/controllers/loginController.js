angular.module("loginController",[])
    .controller("LoginController",['$scope','UserService',function($scope,UserService){
        $scope.form = {};

        $scope.form.submitForm = function(user){
            console.log(user)

            UserService.login(user)
                .success(function(data){
                    UserService.authenticated(data);
                })
                .error(function(err,status){
                    $scope.form.error = err;
                    $scope.form.user  = {};
                    console.log(err);
                    console.log(status);
                });;
        }


    }])