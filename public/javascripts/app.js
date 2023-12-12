angular.module("appProy",[
      'ui.router',
      'ui.bootstrap',
      'appController',
      'appService'
    ])

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'assets/partials/login.html',
                controller:'LoginController',
            })
    }]);