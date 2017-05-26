app.controller("ShopBannerController", function ($scope, $timeout, $rootScope, $window, $http, ShopBannerService ) {
   // alert("");
  //  ShopBannerCarousel(languageId);
   // alert("");
    //get all image Details
  // $scope.slides=[];
    
    $scope.InitPageLoad = function()
	{
		//var _accountUniqueName = $routeParams.accountUniqueName;
		
		ShopBannerService.shopBannerList().then(function(response)
		{
                console.log(response);
             $scope.slides = response.data.Result;
        $scope.onShowImage = function (Image_Path) {
            $scope.ShowImage = false;
            $scope.AnimationImageName = Image_Path
            $timeout(function () {
                $scope.ShowImage = true;
                alet("ablc");
            }, 400);

        }
			//LoadUserArticle(_accountDetail.Id, 1);
		});		
	}
  
});