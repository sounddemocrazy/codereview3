app.controller("ForumController", function ($scope, $timeout, $rootScope, $window, $http, ForumService ) {
    $scope.InitPageLoad = function()
	{
		
           ForumService.ForumList().then(function (response) {
                var result = response.data;
			console.log(result);
            if (result.IsSuccess) {
                 $scope.slides = response.data.Result;
                 console.log(response);
            }
                 
           })
    }
});