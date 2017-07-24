angular.module("quiz",['ui.router']);
angular.module("quiz").config(function($stateProvider,$urlRouterProvider){
								$urlRouterProvider.otherwise("/main")
								$stateProvider
								.state("main",{
								url:"/main",
								    templateUrl:"templates/main.html",
									controller:"quizCtrl",
									controllerAs:"quizCtrlAs"
								})

});