var app=angular.module('Blog',['ngRoute'])
app.config(function($routeProvider){
	$routeProvider.when("/",{
	templateUrl="view/home.html"
})
	.when("/aboutme",{
	templateUrl="view/aboutme.html"
})
	.when("/posts",{
	templateUrl="view/posts.html"
})
	.when("/contact",{
	templateUrl="view/contact.html"
})
	.otherwise({
		redirectTo:'/'
	})
})