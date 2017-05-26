app.service('AccountService', function ($http) {
  return{
	  signIn : function (param) {
         return $http({
			method: 'POST',
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},//to skip Angular pre-flight check
			url: TokenAPIUrl,
			data: param			
			});
        },
		TokenAccount : function()
		{
			return $http({
			method: 'GET',
			headers:{'Authorization': 'Bearer '+MemoryGetFromClient('TOKEN')},
			url: TokenAccountAPIUrl,			
			});
		},
		AccountById : function(accountId)
		{
			var API_URL = AccountAPIUrl.replace('{accountId}',accountId);
			return  $http({
			method: 'GET',
			headers:{'Authorization': 'Bearer '+MemoryGetFromClient('TOKEN')},
			url: API_URL,			
			});
		},
		AccountByUniqueName : function (uniqueName)
		{
			var API_URL = AccountByUnqiueNameAPIUrl;
			var param = {uniqueName : uniqueName};
			return  $http({
			method: 'POST',			
			url: API_URL,	
			data : param
			})
		},
		AccountByUniqueNameWithViewerId : function(uniqueName)
		{
			var API_URL = AccountByUniqueNameWithViewerIdAPIUrl;
			var param = { ViewerAccountId : MemoryGetFromClient('TokenAccountId'), UniqueName : uniqueName};
			return  $http({
			method: 'POST',			
			url: API_URL,	
			data : param
			})
		}
  }
});