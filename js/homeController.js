tweetApp.controller('homeController', function($scope, $http, $location, $mdDialog, $mdMedia, $routeParams){
	$scope.homePage = true;
    $scope.$watch(function(){
        return $location.path();
    },
    function(newPath){
        $scope.trump = "";
        $scope.hillary = "";
        $scope.home = "";
        console.log("The path changed it's now " + newPath);
        if(newPath == "/trump"){
            $scope.trump = "active";
        }else if(newPath == "/hillary"){
            $scope.hillary = "active";
        }else if(newPath == "/"){
            $scope.home = "active"; 
        }
    }
    );

    // $scope.isActive = function(view){
    //     return view == $location.path();
    // }

    $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What tweets would you like to search for?')
      .textContent('Trump is good for a laugh.')
      .placeholder('Twitter Search')
      .ariaLabel('Search Topic')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I hate Twitter');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to search for: ' + result + '.';
      $http({
        method: 'GET',
        url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + $location.path('/' + result)
        }).then(function successFunction(tweetData){
                $scope.tweets = tweetData.data.statuses;
                console.dir($scope.tweets);
            }, function failureFunction(tweetData){
                console.log(tweetData);
            }
        );
    }, function() {
      $scope.status = 'You didn\'t search for nada.';
    });
  };
});
