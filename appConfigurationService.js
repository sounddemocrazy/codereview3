var BASE_URL = "http://dev.loopin.com/api/";
var DEFAULT_LANGUAGE_ID = 1;
var APP_VERSION = "1.5";
// var DOMAIN = "http://localhost:81";
 var DOMAIN = "http://devweb.loopin.com";

if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
	$('#LocalStorageSpanText').text('supported');
} else {
	$('#LocalStorageSpanText').text('NOT');
    // Sorry! No Web Storage support..
}

if(!MemoryIsKeyExists("APP_VERSION"))
{
	MemorySaveInClient("APP_VERSION", APP_VERSION);
}
else{
	ResetClientMemory(APP_VERSION);	
}
function ResetClientMemory(inputAppVersion)
{
	if (MemoryGetFromClient("APP_VERSION") != inputAppVersion) {
        MemorySaveInClient("APP_VERSION", APP_VERSION);
        MemoryRemoveFromClient("CHOOSEN_LANGUAGE_ID");
        MemoryRemoveFromClient("DEFAULT_LANGUAGE_ID");
        
    }	
}

if(!MemoryIsKeyExists("CHOOSEN_LANGUAGE_ID"))
{
	MemorySaveInClient("CHOOSEN_LANGUAGE_ID", DEFAULT_LANGUAGE_ID);
}
else{
	DEFAULT_LANGUAGE_ID = MemoryGetFromClient("CHOOSEN_LANGUAGE_ID");
}

if(!MemoryIsKeyExists("DEFAULT_LANGUAGE_ID"))
{
	MemorySaveInClient("DEFAULT_LANGUAGE_ID", DEFAULT_LANGUAGE_ID);
}
else{
	ResetDefaultLanguageId(DEFAULT_LANGUAGE_ID);
}

function ResetDefaultLanguageId(inputLanguageId) {
   if(MemoryGetFromClient("DEFAULT_LANGUAGE_ID") != inputLanguageId)
	{
		MemorySaveInClient("DEFAULT_LANGUAGE_ID", inputLanguageId);
	}
}
