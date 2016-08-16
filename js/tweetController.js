tweetApp.controller('tweetController', function($scope, $http, $routeParams){
	$scope.test = "I am working!";
    $scope.tweets = tweets;

    console.log($routeParams);

    if($routeParams.searchTerm){
        var searchTerm = $routeParams.searchTerm;
    }else{
        var searchTerm = 'trump';
    }

    $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + searchTerm
    }).then(function successFunction(tweetData){
            $scope.tweets = tweetData.data.statuses;
            console.dir($scope.tweets);
        }, function failureFunction(tweetData){
            console.log(tweetData);
        }
    );
});
