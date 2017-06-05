
app.service('TopShopService', function ($http) {
    return {
       
         TopShopList: function (pageId) {
			var param = { LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID"), Paging: { Page: pageId, Size: PageSize } };
			return $http({
				method: 'POST',
				url: TopShopAPIURL,
				data: param                
            });
         }
    };
});