---
title: "Meta Install Referrer"
source_url: https://developers.facebook.com/documentation/app-ads/install-referrer
---

# Meta Install Referrer

Updated: Aug 13, 2024

This document shows you how to use the Meta install referrer in your Android app to get metadata for Facebook, Instagram and Audience Network ad campaigns where the objective is app installs. While Google Play Install Referrer (GPIR) only provides information for same session click through installs, the Meta install referrer includes data for:

* view through installs (VT)
* click through installs (CT)
* multiple session click though installs

There are two options to set up the Meta install referrer for your Android app campaigns: **direct integration** or **supported integration through your mobile measurement partner (MMP)**.

## Option 1: Direct integration

## Before You Start

Before you start, you need the following:

* [Decryption key setup for Google Play Install Referrer (GPIR)](https://developers.facebook.com/documentation/app-ads/install-referrer)

## Step 1. Add the Meta apps

Add the `queries` elements for the Facebook, Instagram and Facebook Lite apps in your AndroidManifest.xml file to allow your app to get referral attribution data from these Meta apps.

```
<queries>
  <package android:name="com.facebook.katana" />
</queries>

<queries>
  <package android:name="com.instagram.android" />
</queries>

<queries>
  <package android:name="com.facebook.lite" />
</queries>
```

## Step 2. Implement the ContentProvider API

Add the ContentProvider code to get referral attribution data from the Facebook and Instagram apps. You will want to get this data when the app is first launched.

```
Cursor c = null;
try {
    String [] projection = { "install_referrer", "is_ct", "actual_timestamp", };
    Uri providerUri = null;

    // This IF statement queries the facebook app first.
    // To query from the instagram app first, change the sequence of the IF statement

    if (context.getPackageManager().resolveContentProvider(
           "com.facebook.katana.provider.InstallReferrerProvider", 0) != null) {
       providerUri = Uri.parse(
           "content://com.facebook.katana.provider.InstallReferrerProvider/" + FB_APP_ID);
    } else if (context.getPackageManager().resolveContentProvider(
           "com.instagram.contentprovider.InstallReferrerProvider", 0) != null) {
       providerUri = Uri.parse(
           "content://com.instagram.contentprovider.InstallReferrerProvider/" + FB_APP_ID);
    } else if (context.getPackageManager().resolveContentProvider(
           "com.facebook.lite.provider.InstallReferrerProvider", 0) != null) {
       providerUri = Uri.parse("content://com.facebook.lite.provider.InstallReferrerProvider/" + FB_APP_ID);
    } else {
       return null;
    }

    c = context.getContentResolver().query(providerUri, projection, null, null, null);
    if (c == null || !c.moveToFirst()) {
       return null;
    }

    int installReferrerIndex = c.getColumnIndex("install_referrer");
    int timestampIndex = c.getColumnIndex("actual_timestamp");
    int isCTIndex = c.getColumnIndex("is_ct");
    String installReferrer = c.getString(installReferrerIndex); // serialized and encrypted attribution details

    // TODO:
    // 1. deserialize installReferrer (convert String to JSON)
    // 2. decrypt attribution details in install_referrer.utm_content.source.data using
    // key: GPIR decryption key
    // nonce: retrieve from installReferrer.utm_content.source.nonce
    // data: retrieve from installReferrer.utm_content.source.data
    // decrypt data

    long actualTimestamp = c.getLong(timestampIndex); // timestamp in seconds for click/impression
     int isCT = c.getInt(isCTIndex); // VT or CT, 0 = VT, 1 = CT

} catch (Exception e) {
    return null;
} finally {
    if (c != null) {
        c.close();
    }
}
```

Steps to deserialize and descrypt the data are similiar to those found in the [Install Referrer guide](https://developers.facebook.com/documentation/app-ads/install-referrer).

The data structure response received from the `install_referrer` after deserialization for each Meta app will include:

* `actual_timestamp` – value is the timestamp in seconds when the click or impression occurred
* `is_ct` – values can be `1`, represents a click through, or `0`, represents an impression
* `install_referrer` – value is the encrypted GPIR attribution data

### Example JSON Response

```
```
{  
  is_ct=1,  
  actual_timestamp=123,  
  install_referrer={  
    utm_campaign = fb4a,  
    utm_content: {  
      source: {  
        data: “7fb9bd76…”, // encrypted attribution information  
        nonce: “1234” // nonce from encryption  
      },  
      a: <app_id>,  
      t: <timestamp>  
    }  
    utm_source : “apps.facebook.com” //OR “apps.instagram.com”  
  }  
}
```
```

#### Sample data after decrypting `install_referrer.utm_content.source`

```
{
  "ad_id":"6110809314024",
  "adgroup_id":"6110808725024",
  "adgroup_name":"RTG_Storie_",
  "campaign_id":"6110808710224",
  "campaign_name":"Mobex_Conversiones_Storie_Android_21 a 31 de Diciembre_OP39895",
  "campaign_group_id":"6110808710624",
  "campaign_group_name":"Mobex_Instagram Storie_ Conversiones_ Diciembre OP 43918",
  "account_id":"485495091598353",
  "ad_objective_name":"CONVERSIONS",
  // data included for Instagram ads
  "is_instagram":true,
  "publisher_platform":"instagram",
  "platform_position":"instagram_stories"
}
```

## Step 3. Deduplicate of Data

If GPIR ad campaign metadata is available, you should follow your existing GPIR deduplication flow.

### Deduplicate using install referrer

You can remove duplicated data using the data returned in `install_referrer` since the values are the same for a install or campaign for CT across Meta install referrer and GPIR.

For VT and cross session CT, use Meta install referral data since GPIR doesn’t support it.

If GPIR ad campaign metadata data is absent, you deduplicate data based on whether you work with a mobile measurement partner (MMP) or not.

### Deduplication with MMP

The mobile measurement partner (MMP) has access to row level attribution data for installs that don’t have a winning ad network, either due to being attributed to Meta or organic installs. You can check whether there is an install referrer provided via the Meta install referrer. If yes, you can consider the install is driven by Meta, and provided install referrer data is the ad campaign metadata for the install.

### Deduplication without MMP

The Meta install referrer provides last touch info for the install, including ad campaign metadata, actual timestamp for the last touch, and last touch action type (impression or click). You can compare the last touch action type and last touch timestamp with the attribution data you get from other ad networks, and decide the winning ad network.

## Verify the setup

First of all, make sure you are using an app version that supports this solution. The minimum versions are:

* Facebook: v428
* Instagram: v296
* Facebook Lite: v411

You can verify your setup by following these steps:

* Inject the test campaign by using [Preview in Ads Manager⁠](https://www.facebook.com/business/help/2289847341337281)
* Find the ad on Facebook or Instagram and click the ad
* Add breakpoints or logs in your code in [Step 2](https://developers.facebook.com/documentation/app-ads/install-referrer#contentprovider-api)

Your app should receive a [response](https://developers.facebook.com/documentation/app-ads/install-referrer#example-json-response) and [decrypt it](https://developers.facebook.com/documentation/app-ads/install-referrer#decrypt-data) to view the campaign data.

## Option 2: Supported integration through your MMP

## Step 1: Update your mobile measurement partner (MMP) SDK

Update your MMP SDK to a version that has integrated Meta install referrer:

* AppsFlyer SDK: AppsFlyer SDK v6.14.2+
* Adjust SDK: Adjust SDK v4.36.0+ (Flutter 4.36.0+, Unity 4.37.0+)
* Singular SDK or S2S API: Singular SDK v12.3.0+ (Unity 4.2.0+, React Native 3.3.0+, Unreal 2.2.0+)
* Kochava SDK: Kochava Android SDK v5.1.0+
* Airbridge SDK: Airbridge Android SDK v2.22.3+
* Branch SDK: Branch SDK v5.10.1+

## Step 2: Make sure your Facebook app ID is associated with your MMP SDK

See instructions via the links below.

* [Adjust instructions⁠](https://help.adjust.com/en/article/get-started-android-sdk#meta-referrer-integration)
* [Singular instructions⁠](https://support.singular.net/hc/en-us/articles/115003252706-Facebook-Meta-Ads-Attribution-Integration#meta_referrer_requirements)
* [Kochava instructions⁠](https://support.kochava.com/sdk-integration/android-sdk-integration/) (Go to Meta/Facebook section)
* [Airbridge instructions⁠](https://help.airbridge.io/en/developers/android-sdk#meta-install-referrer-collection-setup)
* AppsFlyer takes care of this automatically
* [Branch instructions⁠](https://help.branch.io/using-branch/docs/facebook-install-referrer#1b-set-your-fb-app-id-meta-install-referrer-only)

## Step 3: Depending on the MMP, you may need to update the Android Manifest file for your app

See instructions via the links below.

* [Kochava instructions⁠](https://support.kochava.com/sdk-integration/android-sdk-integration/) (Go to Meta/Facebook section)
* [Branch instructions⁠](https://help.branch.io/using-branch/docs/facebook-install-referrer#1a-modify-android-manifest-meta-install-referrer-only)
* AppsFlyer, Adjust, Singular and Airbridge take care of this step automatically through their SDK
* Please check with your MMP if using Flutter / React SDKs instead of their Android SDKs

## Step 4: Share your Install Referrer Decryption Key to enable your MMP to decrypt the referrer metadata

Note: If you have already done this for Google Play Store Install Referrer, this step is not necessary.

* You will need admin access to the [Business Manager account⁠](https://www.facebook.com/business/help/299504287548592?id=180505742745347) that owns the app.
* Log into [Meta for Developers](https://developers.facebook.com/).
* Go to **My Apps** in the top right corner.
* Select the app that you would like to access your Decryption Key.
* Select **App settings** > **Basic**.
* Scroll down to the Android section. Look for Install Referrer Decryption Key under the Google Play label.
* Share your Decryption Key with your MMP. See instructions via the links below.
  * [AppsFlyer instructions⁠](https://support.appsflyer.com/hc/en-us/articles/207033826-Meta-ads-integration-setup#basic-facebook-attribution-setup)
  * [Adjust instructions⁠](https://help.adjust.com/en/article/facebook-raw-data-reporting-for-android#update-your-meta-credentials-in-adjust)
  * [Singular instructions⁠](https://support.singular.net/hc/en-us/articles/115003252706-Facebook-Meta-Ads-Attribution-Integration#Setup_Instructions)
  * [Kochava instructions⁠](https://www.kochava.com/blog/kochava-support-for-metas-new-install-referrer/)
  * [Airbridge instructions⁠](https://help.airbridge.io/en/guides/meta-business-channel-integration#how-to-provide-the-app-id-and-the-decryption-key)
  * [Branch instructions⁠](https://help.branch.io/using-branch/docs/facebook-install-referrer#3-input-your-key-in-branch)
