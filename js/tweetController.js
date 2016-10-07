tweetApp.controller('tweetController', function($scope, $http, $routeParams){
	$scope.test = "I am working!";
    $scope.tweets = tweets;
    var searchTerm = '';

    console.log($routeParams);

    if($routeParams.searchTerm){
        searchTerm = $routeParams.searchTerm;
    }else{
        searchTerm = '';
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
