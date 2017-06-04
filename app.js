var app = angular.module('LoopinWebApp', ['ngRoute','ui.bootstrap','ngSanitize','ngFileUpload'], function ($locationProvider) {    
	
	 $locationProvider.html5Mode({
		enabled: true,
       requireBase: false,
       rewriteLinks: true
     });	
});

var httpConfig = function ($httpProvider)
{
	$httpProvider.defaults.useXDomain = true;
};
app.config(httpConfig);

app.filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);
