function Tweet (title, userName, postTime, stuff){
	this.title = title;
	this.userName = userName;
	this.postTime  = postTime
	this.stuff = stuff;
}

Tweet.prototype.timeSincePost = function(timeStamp) {
	var secondsAgo = (timeStamp - this.postTime) / 1000;
	return secondsAgo;
};

var newTweet = new Tweet("Post here", "My Name", 1471351423825, "yada yada");
var newTweet2 = new Tweet("Post here", "My Name", 1471351423825, "yada yada");
var newTweet3 = new Tweet("Post here", "My Name", 1471351423825, "yada yada");
console.log(newTweet);
console.log(newTweet2);
console.log(newTweet3);
console.log(newTweet.timeSincePost(Date.now()));

var tweets = [newTweet,newTweet2,newTweet3];


====
tweetApp.controller('trumpController', function($scope, $http,$routeParams){
	$scope.trumpPage = 'trump';
	console.log($routeParams);
});