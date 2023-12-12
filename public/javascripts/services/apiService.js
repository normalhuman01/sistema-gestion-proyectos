angular.module("apiService",[])
    .factory("ApiService",['$http',function($http){
        return {
            pLogin:function(user){
                return $http.post("http://localhost:9000/api/login",{user:user});
            }
        }
    }])
