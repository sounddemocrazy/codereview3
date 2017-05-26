app.controller('ArticleController', function ($scope, $rootScope, $sce, $location, $routeParams,Upload, AccountService, ArticleService,ShopService, ImageUploaderService) {

    $scope.ArticleListArray = [];
    $scope.ArticleListHasMore = false;
    $scope.ArticleListTotalPageCount = 1;
    $scope.ArticleListCurrentPage = 1;
	
	$scope.ShopArticleListArray = [];
    $scope.ShopArticleListHasMore = false;
    $scope.ShopArticleListTotalPageCount = 1;
    $scope.ShopArticleListCurrentPage = 1;

    $scope.init = function () {
		
        LoadPublicArticle(1);
    }

    $scope.LoadMorePublicArticle = function (pageId) {
        LoadPublicArticle(pageId);
    }
	$scope.LoadMoreUserArticle = function (accountId, pageId) {
		LoadUserArticle(accountId, pageId);
    }
	$scope.LoadMoreShopArticle = function (shopId, pageId) {
		LoadShopArticle(shopId, pageId);
    }
	$scope.LoadMoreCategoryArticle = function (Category, pageId)
	{
		console.log(Category);
		console.log(pageId);
		LoadCategoryArticle(Category, pageId);	
	}
	
	$scope.InitUserArticle = function()
	{
		var _accountUniqueName = $routeParams.accountUniqueName;
		
		AccountService.AccountByUniqueName(_accountUniqueName).then(function(response)
		{
			var _accountDetail = response.data.Result;
			$scope.Account = _accountDetail;
			LoadUserArticle(_accountDetail.Id, 1);
		});		
	}
	
	$scope.InitShopArticle = function ()
	{
		var _shopUniqueName = $routeParams.shopUniqueName;
		
		ShopService.shopDetailByUniqueName(_shopUniqueName).then(function(response)
		{
			var _shopDetail = response.data.Result;
			$scope.Shop = _shopDetail;
			LoadShopArticle(_shopDetail.Id, 1);	
		});		
	}
	
	$scope.InitCategoryArticle = function ()
	{
		var _articleCategory = $routeParams.articleCategory;
		$scope.Category = _articleCategory;
		console.log(_articleCategory);
		LoadCategoryArticle(_articleCategory,1);		
	}

    $scope.LoadArticleDetail = function () {
		
        var _articleId = $routeParams.articleId;
				
        ArticleService.articleDetailById(_articleId).then(function (response) {
            var _articleDetail = response.data.Result;
			
			$scope.ArticleDetail = _articleDetail;
			$scope.ArticleFullUrl = DOMAIN + '/article/'+ _articleDetail.Id;
			
			if(_articleDetail.IsOwnerUser)
			{
				AccountService.AccountById(_articleDetail.AccountId).then(function(response)
				{
					$scope.Account = response.data.Result;
				});
				
				LoadUserArticle(_articleDetail.AccountId, 1);
			}
			if(_articleDetail.ShopId > 0)
			{
				ShopService.shopDetailById(_articleDetail.ShopId).then(function(response)
				{
					var _shopDetail = response.data.Result;
					$scope.ShopDetail = _shopDetail;
					
				});
				LoadShopArticle(_articleDetail.ShopId, 1);
			}
        });
    }

    function LoadPublicArticle(pageId) {
        ArticleService.publicArticleList(pageId).then(function (response) {
            var result = response.data;
			
            if (result.IsSuccess) {
                $scope.ArticleListArray.push(result.Result);
				$scope.ArticleListHasMore = result.Result.Paging.HasMorePages;
                $scope.ArticleListTotalPageCount = result.Result.Paging.TotalPages;
                $scope.ArticleListCurrentPage = result.Result.Paging.Page;
            }
        });
    }
	function LoadUserArticle(_accountId, pageId)
	{
		ArticleService.userArticleList( MemoryGetFromClient('TokenAccountId'), _accountId, pageId).then(function(response){					
					var result = response.data;
					//console.log(result);
			
					if (result.IsSuccess) {
						
						$scope.ArticleListArray.push(result.Result);
						
						$scope.ArticleListHasMore = result.Result.Paging.HasMorePages;
						$scope.ArticleListTotalPageCount = result.Result.Paging.TotalPages;
						$scope.ArticleListCurrentPage = result.Result.Paging.Page;
					}
					
				});
	}
	function LoadCategoryArticle(categoryId, pageId)
	{
	 ArticleService.articleListByCategoryName( categoryId, pageId).then(function(response){	
	 var result = response.data;		
	
	 if (result.IsSuccess) {
		 
		 $scope.ArticleListArray.push(result.Result);				
		 $scope.ArticleListHasMore = result.Result.Paging.HasMorePages;
		 $scope.ArticleListTotalPageCount = result.Result.Paging.TotalPages;
		 $scope.ArticleListCurrentPage = result.Result.Paging.Page;
		}			
	 });		
	
			
	}
	
	function LoadShopArticle(shopId, pageId)
	{
		ArticleService.shopArticleList( shopId, pageId).then(function(response){					
					var result = response.data;
					//console.log(result);
			
					if (result.IsSuccess) {
						$scope.ShopArticleListArray.push(result.Result);
						$scope.ShopArticleListHasMore = result.Result.Paging.HasMorePages;
						$scope.ShopArticleListTotalPageCount = result.Result.Paging.TotalPages;
						$scope.ShopArticleListCurrentPage = result.Result.Paging.Page;
					}
					
				});
		
	}
	
	$scope.SubmitUserArticle = function()
	{
		if ($scope.writeArticleForm.ArticleBannerImage.$valid && $scope.writeArticleForm) {
			//ImageUploaderService.UploadArticleBanner($scope.ArticleBannerImage,articleId).then(
			UploadArticleImage($scope.ArticleBannerImage,191125);
		
      }
	}
	
	function UploadArticleImage(file, articleId)
	{
		ImageUploaderService.UploadArticleBanner(file,articleId).then(function(response)
		{
			var result = response.data;
			console.log(result);
		});
		
		// ImageUploaderService.UploadArticleBanner(file,articleId).then(
			// function successCallback(response)
			// {
				// console.log(response);
			// },
			// function errorCallback(response)
			// {
				// console.log(response);
				// OpenInfoDialog('Error',  response.data.Message, null);
			// }
		// );
		
		
	}
	  
	
	
	
});
