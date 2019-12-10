var app=angular.module('myApp',["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl  : "login1.html"
	})
	.when('/dashbord',{
		templateUrl : "dashbord.html"


	})
	.otherwise({
		redirectTo:'/'
	});
});
app.controller('myCtrl',function($scope)
{
	
	$scope.submit=function(){
		var uname=$scope.username;
		var password=$scope.password;
		if($scope.username=='admin' && $scope.password=='admin'){
			$location.path('/dashbord');
		}

	};
})