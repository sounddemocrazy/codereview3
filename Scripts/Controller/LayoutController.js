
app.controller('LayoutController', function ($scope,$rootScope, LanguageService, ShopService, ArticleService,AccountService) {
	$scope.TokenAccountUniqueName = '';
	$scope.TokenAccountId = '';
	$scope.TokenAccountProfileUrl = '';
	$scope.TokenIsValid = false;
	$rootScope.IsUserLoggedIn = MemoryGetFromClient("TOKEN") != '' ? true : false;
	
	
	$scope.Init = function()
	{
		
		if (MemoryGetFromClient("TOKEN") != '') 
		{
			AccountService.TokenAccount().then(function(data)
			{
				$scope.TokenIsValid = true;
				$rootScope.IsUserLoggedIn = true;

				var _result = data.data.Result;
					
				$scope.TokenAccountUniqueName = _result.UniqueName;
				$scope.TokenAccountId = _result.Id;
				$scope.TokenAccountProfileUrl = _result.ProfileImage.UrlSmall;				
				
				MemorySaveInClient('TokenAccountId',_result.Id);			
				
			});
		}
	}
	
	$scope.logOut = function(){
		MemoryRemoveFromClient("TOKEN");
		RedirectToPortalPage();
	}
	
	
	$scope.LayoutLanguageChange = function ($event) {
        var _selLanguageId = angular.element($event.target).attr('data-languageId');
        if (_selLanguageId != MemoryGetFromClient("CHOOSEN_LANGUAGE_ID")) {
            MemorySaveInClient("CHOOSEN_LANGUAGE_ID", _selLanguageId);
            location.reload();
        }
    }
	
	
    LanguageService.languageList().then(function (response) {
        var result = response.data;
        $scope.Language = result.Result;
        $.each(result.Result, function (i, item) {
            if (item.IsDefault)
                $('#Layout_LanguageChoosen').text(item.Name);
        });
    });

    ShopService.shopCategoryList().then(function (response) {
        var result = response.data;
        $scope.ShopEntityEnum = result.Result;

    });

    ArticleService.articleCategoryList().then(function (response) {			
		var result = response.data;			
        if (result.IsSuccess)
            $scope.ArticleCategory = result.Result;
    });    
	
});



function RedirectToPortalPage() {
    window.location.replace(DOMAIN);

}
function ReloadCurrentPage() {
    location.reload();
}