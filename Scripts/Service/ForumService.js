app.service('ForumService', function ($http) {
    return {
       ForumList: function (pageId) {
			var param = { CategoryId: 1, LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize }  };
			return $http({
				method: 'POST',
				url: forumAPI,
				data: param                
            });
        },
    }
});