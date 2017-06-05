app.controller("CuratedArticlesController", function ($scope, $timeout, $rootScope, $window, $http, CuratedArticlesService ) {
    $scope.curatedArticles = [];
    $scope.InitPageLoad = function()
	{
		//var _accountUniqueName = $routeParams.accountUniqueName;
		
        //alert("");
           CuratedArticlesService.CuratedArticleList().then(function (response) {
              LoadCuratedArticle(1);
            })
    }
    
         $scope.LoadMorePublicArticle = function (pageId) {
             console.log("pressed");
        LoadCuratedArticle(pageId);
    }
        function LoadCuratedArticle(pageId)
        {
            CuratedArticlesService.CuratedArticleList(pageId).then(function (response) {
            var result = response.data;
			
            if (result.IsSuccess) {
                $scope.curatedArticles.push(result.Result);
				$scope.ArticleListHasMore = result.Result.Paging.HasMorePages;
                $scope.ArticleListTotalPageCount = result.Result.Paging.TotalPages;
                $scope.ArticleListCurrentPage = result.Result.Paging.Page;
            }
        });
        }
    
});