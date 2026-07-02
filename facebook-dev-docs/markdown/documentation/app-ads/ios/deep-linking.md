---
title: "Deep Link in Your Android Mobile App"
source_url: https://developers.facebook.com/documentation/app-ads/ios/deep-linking
---

# Deep Link in Your Android Mobile App

Updated: Apr 14, 2026

A deep link is a link that goes not only to your app, but to a specific piece of content within your app. For more information, see [Add Deep Links to Your App Ad](https://developers.facebook.com/documentation/app-ads/deep-linking).

You can support deep linking by using Android App Links or by using Custom URL Schemes.

## Support Android App Links

### Prerequisites

Before you can support Android App Links in your Android mobile app, you must satisfy the following prerequisites:

* Follow the Android developer guidelines for [Handling Android App Links⁠](https://developer.android.com/training/app-links)

After you meet the prerequisites, there is no additional work to support Android App Links. You can start using your website URLs in your app ads and [catalogs](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-deep-links).

## Support Custom URL Schemes in Your Mobile App

### Step 1: Add Deep Linking Settings

In the [App Dashboard](https://developers.facebook.com/apps) add deep linking information for your app. Navigate to **Dashboard** > **Settings** > **Android**.

* For **ClassName** find the name of the launch activity in the file `AndroidManifest.xml`. The class name should take the form `com.example.androidapp.MainActivity`.

![](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/663322606_1475396054319044_7302849421191261441_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=CIHSOz-6kh0Q7kNvwGwDwN5&_nc_oc=Adqo8L9N5XyZdIl9x1AaYYuBa5xaXzA7mDeBCcqQU3ObSkSnPoGFR7AYA7YfTHlxM2xnsGjjSrGn4nZBLbzROUfj&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=wETyEuh1p7PMJtZQ4faBtw&_nc_ss=7b289&oh=00_AQB9VhK5BzNr2IBdRDabv2ygqS0-nyuHmPKeTcRZ0nHX7A&oe=6A606F2D)

### Step 2: Deferred Deep Linking (Optional)

Deferred deep linking allows you to send people to a custom view after they install your app through the app store.

You must use deferred deep linking if you target people who did not install your app yet. If you are only targeting people who already installed your app, you do not need to add deferred deep linking.

The Facebook SDK for Android includes the product [App Links](https://developers.facebook.com/documentation/applinks), which enables you to support deferred deep linking in your app. In addition to your deep link implementation, just add the following code to your app to handle deferred deep links.

If you follow the GDPR compliance in [GDPR Compliance in FB SDK Best Practices for GDPR Compliance](https://developers.facebook.com/documentation/app-events/gdpr-compliance#disabling-automatic-sdk-initialization), re-enable automatic SDK initialization first after an end user provides consent before fetching a deferred link.

Code to handle deferred links:

```
AppLinkData.fetchDeferredAppLinkData(this,
  new AppLinkData.CompletionHandler() {
     @Override
     public void onDeferredAppLinkDataFetched(AppLinkData appLinkData) {
         // Process app link data
     }
 }
);
```

Code to re-enable automatic SDK initialization, if necessary:

```
// Get user consent
FacebookSdk.setAutoInitEnabled(true);
FacebookSdk.fullyInitialize();
AppLinkData.fetchDeferredAppLinkData(this,
  new AppLinkData.CompletionHandler() {
     @Override
     public void onDeferredAppLinkDataFetched(AppLinkData appLinkData) {
         // Process app link data
     }
 }
);
```

### Step 3: Verify Deep Link Setup

You can verify your Facebook SDK and deep link setup within our **[App Ads Helper](https://developers.facebook.com/tools/app-ads-helper/)** in the tools & support section. We recommend verifying your setup before you start running deep link ads.

[Verify Deep Link Setup](https://developers.facebook.com/tools/app-ads-helper/)

### Step 4: Add a Deferred Deep Link to Your Ad

If you have select App Installs as your objective you can add a Deferred Deep Link.

In the [Ads Manager⁠](https://www.facebook.com/adsmanager), select **New AdSet** and scroll to **Ad Creative**. Add your deep link or a URL with [Facebook App Links metadata](https://developers.facebook.com/documentation/applinks/metadata-reference) implemented to take users to a specific location in the app after installing.

## See Also

* [Facebook SDK for Android](https://developers.facebook.com/documentation/android)
