app.service('ShopService', function ($http) {
    return {
        shopCategoryList: function () {
            return $http.get(ShopCategoryAPIUrl);
        },
		shopDetailById : function(shopId)
		{
			var API_URL = ShopDetailAPIUrl.replace('{shopId}',shopId);
					
			return  $http({
			method: 'GET',			
			url: API_URL,			
			});
		},
		shopDetailByUniqueName : function (shopUniqueName)
		{
			var API_URL = ShopDetailByUniqueNameAPIUrl;
			var param = {UniqueName : shopUniqueName};
					
			return  $http({
			method: 'POST',			
			url: API_URL,	
			data : param
			});
		}
		
    };
});