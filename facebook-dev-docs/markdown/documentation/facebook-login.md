---
title: "Facebook Login"
source_url: https://developers.facebook.com/documentation/facebook-login
---

# Facebook Login

Updated: Mar 3, 2026

If you are a Facebook user and are having trouble signing into your account, visit our [Help Center⁠](https://www.facebook.com/help/1573156092981768/).

After you integrate Facebook Login, certain App Events are automatically logged and collected for [Events Manager⁠](https://www.facebook.com/events_manager), unless you disable Automatic App Event Logging. We recommend all app developers using Facebook Login to understand how this functionality works. In particular, when launching an app in Korea, please note that Automatic App Event Logging can be disabled. For details, see [Automatic App Event Logging](https://developers.facebook.com/docs/app-events/automatic-event-collection-detail).

A secure, fast, and convenient way for users to log into your app, and for your app to ask for permissions to access data

![Image](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/653702356_1459945779197405_8088740957725660993_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=O4NvSlJIdQYQ7kNvwEwXKVu&_nc_oc=AdqUEMub5yWfWImVtCeYwxhKsd6O_GEE2KJu5uaoQXdkLjJoqlv9Cy9_Akp-LXVk5JgH2hKv-KtJcO-if2W_v4Kx&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQD1PW5FERm39Wq20AOXEunwk4G4c1zSalbalKRWjx_mnQ&oe=6A606125)[iOS](https://developers.facebook.com/documentation/facebook-login/ios)

![Android icon](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/656208083_1464926558699327_7755667800092215991_n.svg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=I7LelqxFgDkQ7kNvwHkgtXN&_nc_oc=AdrSpLCpT2HyZ33Vv9Hn8EyGo4pyTVma6hKP5DdPBzFWCxPFK6yE8hG7lJmcih4BmIBRw2kBWm_byTAY8zg_Km8I&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQDwKD35hqgjzy0d-6kQ-S2vbQKHm3Y728ep47c7orWdXQ&oe=6A606842)[Android](https://developers.facebook.com/documentation/facebook-login/android)

![Image](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/651786604_1459945759197407_9178621867751036031_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AvNTzzr5S0sQ7kNvwEoUOZj&_nc_oc=Ado5pt3E52X7C36zpe9wrrvhfCF_nJxBlMNeVRb2C2O_9tVpLAivoHU8QyIMyb9EkJBk6-JkafXw7oiJ-S4v4hT7&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQDdPIf_iTPUZ3NeX9w9omzuKJeq6fgCiFuTqZLg9ZrT6Q&oe=6A607D27)[Websites or mobile websites](https://developers.facebook.com/documentation/facebook-login/web)

![Image](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/652101292_1459945745864075_5688850988089145636_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6uP_dYxOFlIQ7kNvwFyypHO&_nc_oc=AdrfBMtWeLFLqTxOGBA28ACYmokGI7BWy7BGWz2mSxOAm04CacY4q49KprIYbh-uJt77k2WZK7Y-mMbbxNzmN5JD&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQBA_mSrzX37fG5B7M_udcnNFPyhSjG2C0Su9_oLPmezxw&oe=6A605596)[Devices](https://developers.facebook.com/documentation/facebook-login/for-devices)

![Facebook Login illustration](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/16327940_1453393128004653_1075455936857899008_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=U8m8MI5321wQ7kNvwErQ7Dc&_nc_oc=AdqrXkC1Pk9XJ7bBlooyrJsetE9TUngZsdi9nxHoDxE4Uqj5W7LB55abeR2Hij3_oJhpuCBEtnJH4I4RP7sFrg17&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQDJ4NI8nZwqLERr1Eccs_2jVvwDGlaju0pHyMAe_NL-NA&oe=6A6085FB)

### Changes to Social Plugins in the European Region

You may start to see some impact to Social Plugins due to an updated cookies consent prompt that will be shown to people using Facebook products in the European Region.
We will no longer support the 'Like' and 'Comment' Social Plugins for European Region users, unless they are both 1) Logged into their Facebook account, and 2) have provided consent to the "App and Website Cookies" control. If both of these requirements are met, the user will be able to see and interact with plugins such as the 'Like' or 'Comment' button. If either of the requirements above are not met, the user will not be able to see the plugins.

#### The European Region is a specific list of countries including:

* **The European Union (EU):** Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden
* **Non-EU Members, but in EEA-Only/EFTA or Customs Union:** [EEA Only/EFTA] Iceland, Liechtenstein and Norway;Switzerland: [EU Customs Union] all Channel Islands, Isle of Man, Monaco; UK sovereign bases in Cyprus; [European Customs Union] Andorra, San Marino, Vatican City.
* **Non-EU members, but part of European Outermost Regions (OMR):** Martinique, Mayotte, Guadeloupe, French Guiana, Réunion, Saint-Martin, Madeira, The Azores, Canary Islands.
* **United Kingdom** (all British Isles)

## Get Started

#### [Overview](https://developers.facebook.com/documentation/facebook-login/overview)

Core use cases and features for Facebook Login.

## Plan

#### OS-Specific Integration

How to integrate Facebook Login into your app on various platforms:

* [iOS](https://developers.facebook.com/documentation/facebook-login/ios)
* [Android](https://developers.facebook.com/documentation/facebook-login/android)
* [Web](https://developers.facebook.com/documentation/facebook-login/web)
* [For Devices](https://developers.facebook.com/documentation/facebook-login/for-devices)

#### [Best Practices](https://developers.facebook.com/documentation/facebook-login/best-practices), [User Experience Design](https://developers.facebook.com/documentation/facebook-login/userexperience), [Login Security](https://developers.facebook.com/documentation/facebook-login/security)

Foundations for building a successful app with Facebook Login.

#### [Permissions](https://developers.facebook.com/documentation/facebook-login/guides/permissions)

Asking for user data.

#### [Access Tokens](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens), [Authentication Versus Data Access](https://developers.facebook.com/documentation/facebook-login/auth-vs-data)

Access tokens, their expiration periods, and their relationship to data access.

## Review and Test

#### [Testing](https://developers.facebook.com/documentation/facebook-login/guides/test)

Making sure your integration works as intended.

## Submit Your App for Review and Approval

#### [App Review](https://developers.facebook.com/docs/facebook-login/review)

Submitting your app for review of the permissions it requests.

## Advanced

#### [Changelog](https://developers.facebook.com/docs/facebook-login/changelog)

See what's changed in different releases of Facebook Login.

## Business Results

#### [Success Stories](https://developers.facebook.com/success-stories)

Learn how implementing Facebook Login in apps has improved login rates and enhanced customer experience. In particular, see the following case study:

![](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/13311282_1007186976025896_1933768039_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=QHLxtBN4qgoQ7kNvwGQESzU&_nc_oc=Adr-Nh5v9z1FSKaz2Ri0s65Hq-1GaXVLXob_Hb89pHoo5cHML9brGx15h26YI2kxLVBwxykFCmOmfaXQmWWMNcF-&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQB-ykVUcWm9ENd8QtBgTRaiRLsyduSgUGsaKQDnXuk8zg&oe=6A606AB1)

[Skyscanner](https://developers.facebook.com/success-stories/skyscanner) — 100% increase in Facebook Login conversions.

## Further Resources

![](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/290685728_725708695301954_3657236838974303579_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ck5sBWwLhO0Q7kNvwEsm-Bj&_nc_oc=AdpT2iE1Xf5g0etGIdZMbJfuDNkjiIh8RkeFHqK7OHJoRsnv5SjP9mgwS0WmTZMF3lIG1O06EWa5WfdNps_-KSAd&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQA5hcPTboEDIQL1AxtzQI-BESVJ1aiiSI3dCitFVwL0Og&oe=6A60779C)

[Data Protocol⁠](https://dataprotocol.com/facebook-login) Short video tutorials and trainings.

![](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/22880499_168732097044909_1891283213796507648_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=68lQpYi-F2UQ7kNvwGVvHSr&_nc_oc=AdoEW7-MHhKERQcz-IhMC6C6MQDW1hjsySE00KiKTwNX6MA6I8L7rIGPl29eL_3bXcHPKn8o4jTBc7p4eDzdmQlY&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=wF0ikKUYWocUpf-dst3bjQ&_nc_ss=7b289&oh=00_AQBFV7kJNt9uuGeVO-P_fvGt-wFncSVRZoXeVY-H9NyDcw&oe=6A607D7F)

[GitHub example⁠](https://github.com/facebook/facebook-android-sdk/tree/master/samples/FBLoginSample) of an Android implementation of Facebook Login.
