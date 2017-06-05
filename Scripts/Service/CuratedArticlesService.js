app.service('CuratedArticlesService', function ($http) {
    return {
        curatedArticlesList: function () {
            return $http.get(CuratedArticles);
        },
         CuratedArticleList: function (pageId) {
			var param = { LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize } };
			return $http({
				method: 'POST',
				url: CuratedArticlesAPIUrl,
				data: param                
            });
         }
    };
});