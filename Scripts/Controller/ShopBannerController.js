app.controller("ShopBannerController", function ($scope, $timeout, $rootScope, $window, $http, ShopBannerService,TopArticlesService,ForumService) {
     
    $scope.InitPageLoad = function()
	{
       
        $scope.myInterval = 10000;
           ShopBannerService.shopBannerList().then(function (response) {
                  $scope.slides = response.data.Result;
           })
        

    TopArticlesService.TopArticlesList().then(function (response) {
    $scope.articles=response.data.Result;
        console.log("TopArticle: ",response)
    });
     ForumService.ForumList().then(function (response) {
                var result = response.data.Result;
         console.log("Forum: ", result);
     });

   }
 
    
});