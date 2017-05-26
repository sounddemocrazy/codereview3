app.service('AuthService', function () {
	
  return{	  
		isLoggedIn : function()
		{			
			var user = MemoryGetFromClient('TOKEN');
			return(user)? true : false;
		}
		// This function is to check whether user has Admin Rights or not
		//For time-being  - set is default true
		//Server will then send a flag whether user is admin or not while making a token request		
		,isAdmin : function()
		{
			var user = MemoryGetFromClient('TOKEN');
			return true; // for time being set is as tru
		}
  }
});