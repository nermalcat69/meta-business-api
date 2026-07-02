---
title: "Add Deep Links to Your App Ad"
source_url: https://developers.facebook.com/documentation/app-ads/android/deep-linking
---

# Add Deep Links to Your App Ad

Updated: Aug 28, 2024

A *deep link* is a link that goes directly to a specific piece of content within your app. Without deep links, people have to search through your app for the content they are looking for. With deep linking, you send people directly to information they are interested in when they open your app for the first time.

Because the first landing point in your app is related to the idea that motivated a person to tap the ad, they are more likely to engage with the content of your app.

**Deep Link Example**

* Your ad shows personalized content. For example, an offer for a vacation to San Francisco.
* People click a deep link to download your app.
* Because the link is a deep link, the app opens directly to the vacation to San Francisco.

![](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/13065872_1706822516243731_1664096159_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sstgL-30oCgQ7kNvwHMs5L6&_nc_oc=AdoTwFOLt6Lb7isLHLi0xLF-bFKeH_g5iBTBltmzSSYaKpA7-SkjdbBL1EqXJYvCpYDDBW2d43JDVnc8DL-2PZqP&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=jyr8QaHAmFbuHd5EAhUMRQ&_nc_ss=7b289&oh=00_AQAiAFbFAcuMKZIeTJVwy74LBVLaSM5fMPw3lSPca4y6Pg&oe=6A606D13)

## Prerequisites

Before you can use deep linking, you need the following:

* Enable Install Tracking

If you are implementing Deferred Deep Linking (optional) for [iOS](https://developers.facebook.com/documentation/app-ads/ios/deep-linking#deferred-deep-linking) or [Android](https://developers.facebook.com/documentation/app-ads/android/deep-linking#deferred-deep-linking) apps, you must use the Facebook SDK for [iOS](https://developers.facebook.com/documentation/ios) or [Android](https://developers.facebook.com/documentation/android).

On iOS, deep linking works only with ads. As a result, you can't use deep linking with other things, like app invites.

You must enable [Advertiser ID collection](https://developers.facebook.com/documentation/app-events/getting-started-app-events-ios) for deferred deep linking to work.

## Next Steps

After you meet the prerequisites, use the following documentation to support deep links in your app:

* [Deep Link in Your Android Mobile App](https://developers.facebook.com/documentation/app-ads/android/deep-linking)
* [Deep Link in Your iOS Mobile App](https://developers.facebook.com/documentation/app-ads/ios/deep-linking)

## See Also

* [Product Deep Links](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-deep-links)
* [Facebook App Ads](https://developers.facebook.com/documentation/app-ads)
