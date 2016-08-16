// Initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return {
		restrict: 'E', //E = Element, A = attribute, C = Class, M = Comment
		template: "Hello, Class!"
	}
});

tweetApp.directive('helloAttr', function(){
	return {
		restrict: 'A', //E = Element, A = attribute, C = Class, M = Comment
		// template: "<li>Hello, Class from an attibute!</li><li>{{test}}</li>",
		templateUrl: "views/hello.html"
	}
});

tweetApp.directive('helloClass', function(){
	return {
		restrict: 'C', //E = Element, A = attribute, C = Class, M = Comment
		template: "Hello, Class from another type of class!"
	}
});

tweetApp.directive('turnMeBlue', function(){
	return {
		link: function($scope, element, attrs){
			element.bind('mouseenter', function(){
				element.css('color', $scope.myColor);
				console.log(element);
			});
			element.bind('mouseleave', function(){
				element.css('color', 'black');
			});			
		}
	}
});
