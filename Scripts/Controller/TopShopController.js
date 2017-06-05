app.controller("TopShopController", function ($scope, $timeout, $rootScope, $window, $http, TopShopService ) {
    $scope.topShop = [];
    $scope.InitPageLoad = function()
	{
		//var _accountUniqueName = $routeParams.accountUniqueName;
		
        //alert("");
           TopShopService.TopShopList().then(function (response) {
              LoadTopShop(1);
            })
    }
    
         $scope.LoadMoreTopShop = function (pageId) {
             debugger;
        console.log("pressed");
        LoadTopShop(pageId);
    }
        function LoadTopShop(pageId)
        {
            TopShopService.TopShopList(pageId).then(function (response) {
            var result = response.data;
			
            if (result.IsSuccess) {
                $scope.topShop.push(result.Result);
				$scope.ArticleListHasMore = result.Result.Paging.HasMorePages;
                $scope.ArticleListTotalPageCount = result.Result.Paging.TotalPages;
                $scope.ArticleListCurrentPage = result.Result.Paging.Page;
            }
        });
        }
    
});