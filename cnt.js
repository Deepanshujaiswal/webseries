var app=angular.module('myApp',["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl  : "page.html"
	})
	.when('/helloUser',{
		templateUrl : "hello.html"
	})
	.otherwise({
		redirectTo:'/'
	});
});


	
