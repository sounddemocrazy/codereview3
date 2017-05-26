var LanguageDictionary = [];
var LANGUAGE_KEY =
    {
        INSTRUCTIONS: "INSTRUCTIONS",
        ABOUT_US: "ABOUT_US",
        PARTNER: "PARTNER",
        CONTACT_US: "CONTACT_US",
        TERMS_OF_USE: "TERMS_OF_USE",
        PRIVACY: "PRIVACY",
        BUTTON_SUBSCRIBE_TEXT: "BUTTON_SUBSCRIBE_TEXT",
        SUBSCRIBER_EMAIL_ADDRESS: "SUBSCRIBER_EMAIL_ADDRESS",
        BACK_TO_TOP: "BACK_TO_TOP",
        GUIDE: "GUIDE",
        MY_SETTING: "MY_SETTING",
        MY_PROFILE: "MY_PROFILE",
        ARTICLE: "ARTICLE",
        EVENTS: "EVENTS",
        FORUM: "FORUM",
        SIGN_IN: "SIGN_IN",
        SIGN_UP: "SIGN_UP",
        LOG_OUT: "LOG_OUT",
        MY_FOLLOWING: "MY_FOLLOWING",
        MY_FOLLOWERS: "MY_FOLLOWERS",
        MY_FRIENDS: "MY_FRIENDS",
        APP: "APP"
    };
var LanuageJson = {
    "Language": [
        { LanguageId: 1 },
    {
        INSTRUCTIONS: "Instructions",
        ABOUT_US: "About Us",
        PARTNER: "Partner",
        CONTACT_US: "Contact Us",
        TERMS_OF_USE: "Terms Of Use",
        PRIVACY: "Privacy",
        BUTTON_SUBSCRIBE_TEXT: "Subscribe",
        SUBSCRIBER_EMAIL_ADDRESS: "Your Email Address",
        BACK_TO_TOP: "Back To Top",
        GUIDE: "Guide",
        MY_SETTING: "MY_SETTING",
        MY_PROFILE: "MY_PROFILE",
        ARTICLE: "ARTICLE",
        EVENTS: "Events",
        FORUM: "FORUM",
        SIGN_IN: "SIGN IN",
        SIGN_UP: "SIGN UP",
        LOG_OUT: "LOG OUT",
        MY_FOLLOWING: "FOLLOWING",
        MY_FOLLOWERS: "FOLLOWERS",
        MY_FRIENDS: "FRIENDS",
        APP: "App"
    }
    ]
};

LanguageDictionary.push(LanuageJson);

LanuageJson = {
    "Language": [
        { LanguageId: 4 },
    {
        INSTRUCTIONS: "Instructions- chingfu",
        ABOUT_US: "About Us - chingfu",
        PARTNER: "Partner-chingfu",
        CONTACT_US: "Contact Us- chingfu",
        TERMS_OF_USE: "Terms Of Use- chingfu",
        PRIVACY: "Privacy- chingfu",
        BUTTON_SUBSCRIBE_TEXT: "Subscribe- chingfu",
        SUBSCRIBER_EMAIL_ADDRESS: "Your Email Address- chingfu",
        BACK_TO_TOP: "Back To Top- chingfu",
        GUIDE: "Guide-chingfu",
        MY_SETTING: "MY_SETTING",
        MY_PROFILE: "MY_PROFILE",
        ARTICLE: "ARTICLE-c",
        EVENTS: "Events-c",
        FORUM: "FORUM-c",
        SIGN_IN: "SIGN IN-C",
        SIGN_UP: "SIGN UP-C",
        LOG_OUT: "LOG OUT-c",
        MY_FOLLOWING: "FOLLOWING-c",
        MY_FOLLOWERS: "FOLLOWERS-c",
        MY_FRIENDS: "FRIENDS-c",
        APP: "App-c"
    }
    ]
};

LanguageDictionary.push(LanuageJson);

function ResourceServiceGetResourceText(inputKey, languageId) {
    var value = '';
    $.each(LanguageDictionary, function (i, item) {
        if (item.Language[0].LanguageId == languageId) {
            value = item.Language[1][inputKey];
        }
    });
    return value;
}
