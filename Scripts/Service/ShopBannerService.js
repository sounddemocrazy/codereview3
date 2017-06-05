app.service('ShopBannerService', function ($http) {
    return {
       shopBannerList: function () {
			var param = { CategoryId: 1, LanguageId: MemoryGetFromClient("CHOOSEN_LANGUAGE_ID") };
			return $http({
				method: 'POST',
				url: bannerAPI,
				data: param                
            });
        },
    }
});