// Initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute', 'ngMaterial']);


// tweetApp.directive('customMenu', function(){
// 	return {
// 		restrict: 'E', //E = Element, A = attribute, C = Class, M = Comment
// 		templateUrl: "views/menu.html"
// 	}
// });

tweetApp.config(function($routeProvider){
	//At / load up home.html, with home controller	
	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
	//At /trump, load up the same template, but new controller
	$routeProvider.when('/:searchTerm',{
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
    $routeProvider.when('/:searchTerm*',{
        templateUrl: 'views/home.html',
        controller: 'tweetController'
    });
// 	//At /hillary, load up the same template, but new controller
// 	$routeProvider.when('/hillary',{ 
// 		templateUrl: 'views/home.html',
// 		controller: 'hillaryController'
// 	});
// 	$routeProvider.when('/:other',{
// 		templateUrl: 'views/home.html',
// 		controller: 'trumpController'

// 	})
	$routeProvider.otherwise('/'); //Default

});

tweetApp.factory('myFactory', function(){
    var factory = {};

    factory.getVar = function(){
        return this.variable;
    }

    factory.setVar = function(data){
        this.variable = data;
    }
    
    return factory;
});

tweetApp.controller('MainController', function($scope, myFactory){
    myFactory.setVar("this is a variable");
});

tweetApp.controller('AnotherController', function($scope, myFactory){
    console.log(myFactory.getVar());
    // "this is a variable"
})
