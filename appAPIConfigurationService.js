var PageSize = 5; //no of elements per page


var TokenAPIUrl = BASE_URL.replace('api/','token');
var TokenAccountAPIUrl = BASE_URL + 'accounts/tokenaccount';
var AccountAPIUrl = BASE_URL + 'accounts/{accountId}';
var AccountByUnqiueNameAPIUrl = BASE_URL + 'accounts/uniquename';

var LanguageAPIUrl = BASE_URL + "languages/topmenulanguage/" + MemoryGetFromClient("CHOOSEN_LANGUAGE_ID");
var ShopCategoryAPIUrl = BASE_URL + "shopentityenums/maincategories/" + MemoryGetFromClient("CHOOSEN_LANGUAGE_ID");
var ArticleCategoryAPIUrl = BASE_URL + "articles/categories/" + MemoryGetFromClient("CHOOSEN_LANGUAGE_ID");

//Account API

var AccountByUniqueNameWithViewerIdAPIUrl = BASE_URL + 'accounts/uniquenamewithviewer';

//Article API
var ArticlePublicAPIUrl = BASE_URL + "articles/public";
var ArticleByCategoryAPIUrl = BASE_URL + 'articles/category/name';
var ArticleDetailAPIUrl = BASE_URL + "articles/{articleId}/" + MemoryGetFromClient("CHOOSEN_LANGUAGE_ID");
var AritcleUserAPIUrl = BASE_URL + 'articles/account';
var ArticleShopAPIUrl = BASE_URL + 'articles/shop';
var ArticleShopByShopUniqueNameAPIUrl = BASE_URL + 'articles/shopuniquename';

//Shop API

var ShopDetailAPIUrl = BASE_URL + 'shops/{shopId}';
var ShopDetailByUniqueNameAPIUrl = BASE_URL + 'shops/uniquename';

//Photo API

var PhotoUploadAPIUrl = BASE_URL + 'photos/uploadpicture';


//Shop Banner API

var bannerAPI = BASE_URL+'shopbanners/category/id';

