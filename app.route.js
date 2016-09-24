/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    angular.module('BookStore')
            .config(config)
			.run([ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
              $rootScope.$state = $state;
              $rootScope.$stateParams = $stateParams;
            }]);
           
    
    
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider){
         $urlRouterProvider.otherwise('/bookstore.com');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/bookstore.com',
            templateUrl: 'app/views/bookstore.html',
             data: {
               pageTitle: 'Home'
              },
            controller:'BookController',
            controllerAs:'list'
          
        })
      .state('about', {
            url: '/bookstore.com/about',
            templateUrl: 'app/views/about.html',
             data: {
               pageTitle: 'About Us'
              },
            controller:'AboutController',
            controllerAs:'about'
          
        })
        
    }
    
  
})();
