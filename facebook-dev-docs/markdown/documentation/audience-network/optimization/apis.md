---
title: "Information for Child-Directed Apps and Services"
source_url: https://developers.facebook.com/documentation/audience-network/optimization/apis
---

# Information for Child-Directed Apps and Services

Updated: Apr 17, 2026

When you participate in Meta Audience Network and use the Facebook SDKs in apps or services that are directed to children, or where you knowingly collect personal information from children, you are responsible for complying with all applicable laws. For example, in the United States, operators of web sites, apps or services that are directed to children under 13 or that knowingly collect personal information from children under 13 must comply with the [U.S. Children's Online Privacy Protection Act ("COPPA").⁠](https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy)

Under the [COPPA Rule⁠](http://www.ecfr.gov/cgi-bin/text-idx?SID=ed5f76ab1e38b07607347f089c048eb8&node=se16.1.312_12&rgn=div8) and per FTC guidance, developers are responsible for determining whether or not an app is child directed by looking to "its subject matter, visual content, use of animated characters or child-oriented activities and incentives, music or other audio content, age of models, presence of child celebrities or celebrities who appeal to children, language or other characteristics of the Web site or online service, as well as whether advertising promoting or appearing on the Web site or online service is directed to children . . . [and] competent and reliable empirical evidence regarding audience composition, and evidence regarding the intended audience."

If the app is child directed and children under the age of 13 are the primary audience, then it is "primarily child directed."

Apps that are child directed, but do not target children as the primary audience, are "child directed, but mixed audience" services under the COPPA Rule. If an app is child directed but mixed audience, it can choose to implement an age gate, a mechanism that asks users to provide their age or date of birth in an age-neutral way. Child directed, but mixed audience apps that implement age gates are permitted to differentiate among users for purposes of COPPA compliance.

This document provides the additional code you are required to use for the Facebook SDKs if you have determined that your site, app, or service has obligations under COPPA. Where you use this code depends on your determination of which of the following categories applies to your site, app, or service.

* [Primarily child-directed](https://developers.facebook.com/documentation/plugins/restrictions#child-directed). Your site, app, or service is [directed to children⁠](http://business.ftc.gov/documents/Complying-with-COPPA-Frequently-Asked-Questions) whose primary target audience is children under the age of 13.
* [Mixed audience without age gate](https://developers.facebook.com/documentation/plugins/restrictions#mixed-no-age-gate). Your site, app, or service is [directed to children⁠](http://business.ftc.gov/documents/Complying-with-COPPA-Frequently-Asked-Questions) but its primary target audience is people who are at least 13 years old. Your site, app or service does not include an age gate. An "age gate" generally is a mechanism that asks users to provide their age or date of birth in a non-leading way before they access a website or service. For more information [click here⁠](http://business.ftc.gov/documents/Complying-with-COPPA-Frequently-Asked-Questions).
* [Mixed audience with age gate](https://developers.facebook.com/documentation/plugins/restrictions#mixed-with-age-gate). Your site, app, or service is [directed to children⁠](http://business.ftc.gov/documents/Complying-with-COPPA-Frequently-Asked-Questions) but its primary target audience is people who are at least 13 years old. Your site, app or service uses an age gate. An "age gate" generally is a mechanism that asks users to provide their age or date of birth in a non-leading way before they access a website or service. For more information [click here⁠](http://business.ftc.gov/documents/Complying-with-COPPA-Frequently-Asked-Questions).

If your app or service is **Primarily Child-Directed**, then you may not use the Facebook SDK for Android.

If your app or service is **Mixed Audience without an Age Gate**, then you may use the Facebook SDK for Android only if you set the `setMixedAudience` flag for all users. When an app or service tells Facebook that the `setMixedAudience` flag is set in the Facebook SDK for Android, Facebook will only serve ads to non-United States users of that app through the Audience Network services.

* [iOS](https://developers.facebook.com/docs/reference/ios/4.6/class/FBAdSettings)
* [Android](https://developers.facebook.com/docs/reference/android/current/class/AdSettings#setMixedAudience)

For apps or services that are **Mixed Audience with an Age Gate** and where an individual user represents that they are under 13, you may not issue an ad request to the Audience Network by ensuring that the Audience Network is not being requested in your view controller (iOS), activity class (Android), or any respective app function. Where an individual represents that they are at least 13 years old, you may use the Facebook SDK for Android without setting the `setMixedAudience` flag.
