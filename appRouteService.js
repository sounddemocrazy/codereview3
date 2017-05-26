	
app.run(['$rootScope', '$location', 'AuthService',function($rootScope, $location, AuthService){
	$rootScope.$on('$routeChangeStart', function (event, newUrl) {	
		if(newUrl.requireAuth && !AuthService.isLoggedIn() )
		{
			$location.path("/error");
		}
        if(newUrl.requireAdmin && !AuthService.isAdmin())
        {
            $location.path("/error");
        }
		
    });
}]);	
	
var configFunction = function ($routeProvider) {
    $routeProvider
		 .when('/portal', {
            templateUrl: '/Views/Portal/ShopBanner.html',
            controller: 'ShopBannerController'
        })
		.when('/account/signin', {
            templateUrl: '/Views/Account/SignIn.html',
            controller: 'AccountController'
        })
		 .when('/account/signup', {
            templateUrl: '/Views/Account/SignUp.html',
            controller: 'AccountController'
        })
		.when('/account/:uniqueName',{
			templateUrl: '/Views/Account/Profile.html',
            controller: 'AccountController'
		})
		.when('/article/writearticle', {
            templateUrl: '/Views/Article/WriteArticle.html',
            controller: 'ArticleController',
			requireAuth : true
        })
        .when('/article', {
            templateUrl: '/Views/Article/Index.html',
            controller: 'ArticleController'
        })
        .when('/article/:articleId', {
            templateUrl: '/Views/Article/Read.html',
            controller: 'ArticleController'
        })
		.when('/article/cat/:articleCategory', {
            templateUrl: '/Views/Article/CategoryArticle.html',
            controller: 'ArticleController'
        })
		.when('/:accountUniqueName/article', {
            templateUrl: '/Views/Article/UserArticle.html',
            controller: 'ArticleController',
			
        })
		.when('/:shopUniqueName/shoparticle', {
            templateUrl: '/Views/Article/ShopArticle.html',
            controller: 'ArticleController'
        })	
        .when('/admin',{
            templateUrl : '/Views/Admin/Index.html',
            controller: 'AdminController',
            requireAdmin : true
        })
		.when('/error', {
            templateUrl: '/Views/Error/Index.html',
            controller: 'ErrorController'
        }).
		when('/404',{
			templateUrl: '/Views/Error/404.html',
            controller: 'ErrorController'
		})
		.otherwise('/');	
}
configFunction.$inject = ['$routeProvider'];

app.config(configFunction);
