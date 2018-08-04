var app = angular.module('fantasyApp', [ 'ngMaterial', 'ngRoute']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('green')
  .accentPalette('lime')
  .warnPalette('red')
  .backgroundPalette('grey')
    .dark();
});

app.config(function($routeProvider) {                        
	  $routeProvider                                                                
	       .when('/', {                                            
	         templateUrl: "/FantasyPlay/PartialPages/dashboard.html",                                               
	         controller:'dashController',                                
	        })
	        .when('/dashboard', {                                            
	         templateUrl: "/FantasyPlay/PartialPages/dashboard.html",                                               
	         controller:'dashController',                                
	        }) 
	        .when('/pickYourTeam', {                                       
	            templateUrl: "/FantasyPlay/PartialPages/pickYourTeam.html",     
	            controller: 'pytController',  
	        })
	        .when('/teams', {                                       
	            templateUrl: "/FantasyPlay/PartialPages/teams.html",     
	            controller: 'teamController',  
	        })
	        .when('/schedule', {                                       
	            templateUrl: "/FantasyPlay/PartialPages/schedule.html",     
	            controller: 'scheduleController',  
	        })
	        .otherwise({                      
	            template: 'does not exists'   
	        });      
});


app.controller("homeController", ['$scope', '$location', function($scope, $location){
	$scope.playerName = "Rakesh";
	$scope.goto = function(type){
		$location.path(type);
	}
}]);

