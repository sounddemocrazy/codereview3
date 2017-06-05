app.controller("TopArticlesController", function ($scope, $timeout, $rootScope, $window, $http, TopArticlesService ) {
    $scope.topArticles = [];
    $scope.InitPageLoad= function()
	{
        //return $scope;
		//var _accountUniqueName = $routeParams.accountUniqueName;
		
        //alert("");
           TopArticlesService.TopArticlesList().then(function (response) {
            LoadTopArticle(1);
          //  return $scope;
 
           })

    }
    
         $scope.LoadMorePublicArticle = function (pageId) {
        LoadTopArticle(pageId);
              
    }
        function LoadTopArticle(pageId)
        {
           TopArticlesService.TopArticlesList(pageId).then(function (response) {
               console.log('serviceScope:',$scope);
            var result = response.data;
               $scope.result = result;
			
            if (result.IsSuccess) {
                $scope.topArticles.push(result.Result);
				$scope.ArticleListHasMore = result.Result.Paging.HasMorePages;
                $scope.ArticleListTotalPageCount = result.Result.Paging.TotalPages;
                $scope.ArticleListCurrentPage = result.Result.Paging.Page;
            }
        });
        }
    
});