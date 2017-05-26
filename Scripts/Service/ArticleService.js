app.service('ArticleService', function ($http) {
    return {
        articleCategoryList: function () {
            return $http.get(ArticleCategoryAPIUrl);
        },
        publicArticleList: function (pageId) {
			var param = { LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize } };
			return $http({
				method: 'POST',
				url: ArticlePublicAPIUrl,
				data: param                
            });
        },
		userArticleList:function( viewerAccountId, accountId, pageId)
		{
			var param = {ViewerAccountId: viewerAccountId,LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), AccountId: accountId, Paging: {Page: pageId,Size: PageSize }};
			
			return $http({
				method: 'POST',
				url: AritcleUserAPIUrl,
				data: param                
            });
			
		},
		userArticleListByUniqueName:function( viewerAccountId, accountId, pageId)
		{
			var param = {ViewerAccountId: viewerAccountId,LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), AccountId: accountId, Paging: {Page: pageId,Size: PageSize }};
			
			return $http({
				method: 'POST',
				url: AritcleUserAPIUrl,
				data: param                
            });
			
		},
		articleListByCategoryName : function (categoryName, pageId)
		{
			var param = {CategoryName : categoryName, LanguageId : MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: {Page: pageId, Size : PageSize}};
			return $http({
				method: 'POST',
				url: ArticleByCategoryAPIUrl,
				data: param                
            });			

		},
		shopArticleList : function(shopId, pageId)
		{
			var param = { LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize }, ShopId: shopId};
			
			return $http({
				method: 'POST',
				url: ArticleShopAPIUrl,
				data: param                
            });	
			
		},
		shopArticleListByShopUniqueName : function(shopUniqueName, pageId)
		{
			var param = { ShopUniqueName: shopUniqueName, LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize }};
			
			return $http({
				method: 'POST',
				url: ArticleShopByShopUniqueNameAPIUrl,
				data: param                
            });	
		},
        articleDetailById: function (ArticleId) {
			var API_URL = ArticleDetailAPIUrl.replace('{articleId}', ArticleId);
			return $http.get(API_URL);
        }


    };
});