angular.module("userService",[])
    .factory("UserService",['ApiService',function(ApiService){
        var UserService = {};

        UserService.login = function(user){
            return ApiService.pLogin(user);
        }

        UserService.authenticated = function(data){
            console.log(data);
        }

        return UserService;
    }])