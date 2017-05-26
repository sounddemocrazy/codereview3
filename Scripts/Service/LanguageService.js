
app.service('LanguageService', function ($http) {
    return {
        languageList: function () {
            return $http.get(LanguageAPIUrl);//.$promise;
        }//,

        //shopCategoryList: function (API_URl) {
        //    return $http.get(API_URl);
        //}

    };
});

