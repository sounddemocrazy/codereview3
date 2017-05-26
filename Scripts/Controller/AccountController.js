app.controller('AccountController', function ($scope,$http, $routeParams, $location, AccountService) {	
	
	 
	$scope.signInInit = function () {
       if (MemoryGetFromClient("TOKEN") != '')
         RedirectToPortalPage();
    }
	$scope.login = function()
	{
		 var param='grant_type=password&username='+$scope.email+'&password='+$scope.password;
		 
		  AccountService.signIn(param).then(function successCallback(response){					
			MemorySaveInClient('TOKEN',response.data.access_token);
			
			RedirectToPortalPage();
		  },function errorCallback(response){
			 OpenInfoDialog('Error',  response.data.error_description, null);
		  });		 
	},
	$scope.profileInit = function()
	{
		AccountService.AccountByUniqueNameWithViewerId($routeParams.uniqueName).then(function successCallback(response)
		{
			var result = response.data;
			$scope.account = result.Result;
			console.log(result.Result);
			
		}, function errorCallback(response){
			console.log(response);
			$location.path("/404" );
		});
	}	
	
});
