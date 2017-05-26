app.controller('ResourceController', function ($scope) {

	$scope.Dates =  new Date();
	var _languageId = MemoryGetFromClient("CHOOSEN_LANGUAGE_ID");
	$scope.ArticleText = ResourceServiceGetResourceText(LANGUAGE_KEY.ARTICLE, _languageId);
	$scope.SignInText = ResourceServiceGetResourceText(LANGUAGE_KEY.SIGN_IN, _languageId);
	$scope.SignUpText = ResourceServiceGetResourceText(LANGUAGE_KEY.SIGN_UP, _languageId);
	$scope.EventText = ResourceServiceGetResourceText(LANGUAGE_KEY.EVENTS, _languageId);
	$scope.ForumText = ResourceServiceGetResourceText(LANGUAGE_KEY.FORUM, _languageId);
	$scope.AppsText = ResourceServiceGetResourceText(LANGUAGE_KEY.APP, _languageId);
	$scope.FollowerText = ResourceServiceGetResourceText(LANGUAGE_KEY.MY_FOLLOWERS, _languageId);
	$scope.FollowingText = ResourceServiceGetResourceText(LANGUAGE_KEY.MY_FOLLOWING, _languageId);
	$scope.FriendsText = ResourceServiceGetResourceText(LANGUAGE_KEY.MY_FRIENDS, _languageId);
	// $scope.PhotosText = ResourceServiceGetResourceText(LANGUAGE_KEY.APP, _languageId);
	$scope.SettingsText = ResourceServiceGetResourceText(LANGUAGE_KEY.MY_SETTING, _languageId);
	$scope.LogOutText = ResourceServiceGetResourceText(LANGUAGE_KEY.LOG_OUT, _languageId);
});