app.service('TopArticlesService', function ($http) {
    return {
       
         TopArticlesList: function (pageId) {
			var param = { LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize } };
			return $http({
				method: 'POST',
				url: TopArticlesAPIURL,
				data: param                
            });
         }
    };
});