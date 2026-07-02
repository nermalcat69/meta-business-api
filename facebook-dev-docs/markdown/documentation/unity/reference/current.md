---
title: "Facebook SDK for Unity Upgrade Guide"
source_url: https://developers.facebook.com/documentation/unity/reference/current
---

# Facebook SDK for Unity Upgrade Guide

Updated: Jun 6, 2025

## Upgrading to 18.0.0

No special steps are required to upgrade to 18.0.0.

## Upgrading to 17.0.1

No special steps are required to upgrade to 17.0.1.

## Upgrading to 17.0.0

No special steps are required to upgrade to 17.0.0.

## Upgrading to 16.0.2

No special steps are required to upgrade to 16.0.2.

## Upgrading to 16.0.1

No special steps are required to upgrade to 16.0.1.

## Upgrading to 16.0.0

External Dependecy Manager Plugin folder has been changed, make sure to remove the old dlls to avoid DLLs duplication issues.

The minimum deployment target will be 15.2 for iOS development.

## Upgrading to 15.1.0

No special steps are required to upgrade to 15.1.0.

Minimum supported cocoapods version is bumped to 1.11.3 for iOS development.

## Upgrading to 14.1.0

No special steps are required to upgrade to 14.1.0.

Minimum supported Unity version is bumped to 2019.4.39f1 for Android, iOS or Windows. Minimum supported Unity version is bumped to 2021.3.4f1 if targeting webgl.

## Upgrading to 14.0.0

No special steps are required to upgrade to 14.0.0. Please take note of some of the common issues[here.⁠](https://github.com/facebook/facebook-sdk-for-unity/wiki/FAQ---Troubleshooting-Unity-SDK-14.0.0)

## Upgrading to 13.2.0

No special steps are required to upgrade to 13.2.0. Minimum supported Unity version is bumped to 2019.4.39f1 if targetting iOS.

## Upgrading to 12.0.0

No special steps are required to upgrade to 12.0.0

## Upgrading to 11.0.0

No special steps are required to upgrade to 11.0.0

## Upgrading to 9.2.0

No special steps are required to upgrade to 9.2.0

## Upgrading to 9.1.0

No special steps are required to upgrade to 9.1.0

## Upgrading to 9.0.0

No special steps are required to upgrade to 9.0.0

## Upgrading to 8.1.1

No special steps are required to upgrade to 8.1.1

## Upgrading to 8.1.0

No special steps are required to upgrade to 8.1.0

## Upgrading to 8.0.0

No special steps are required to upgrade to 8.0.0

## Upgrading to 7.21.2

No special steps are required to upgrade to 7.21.2

## Upgrading to 7.21.1

No special steps are required to upgrade to 7.21.1

## Upgrading to 7.21.0

No special steps are required to upgrade to 7.21.0

## Upgrading to 7.20.0

No special steps are required to upgrade to 7.20.0

## Upgrading to 7.19.2

No special steps are required to upgrade to 7.19.2

## Upgrading to 7.19.1

No special steps are required to upgrade to 7.19.1

## Upgrading to 7.19.0

No special steps are required to upgrade to 7.19.0

## Upgrading to 7.18.1

No special steps are required to upgrade to 7.18.1

## Upgrading to 7.18.0

No special steps are required to upgrade to 7.18.0

## Upgrading to 7.17.2

No special steps are required to upgrade to 7.17.2

## Upgrading to 7.17.1

No special steps are required to upgrade to 7.17.1

## Upgrading to 7.17.0

No special steps are required to upgrade to 7.17.0

## Upgrading to 7.16.1

No special steps are required to upgrade to 7.16.1

## Upgrading to 7.16.0

No special steps are required to upgrade to 7.16.0

## Upgrading to 7.15.1

No special steps are required to upgrade to 7.15.1

## Upgrading to 7.15.0

No special steps are required to upgrade to 7.15.0

## Upgrading to 7.14.1

No special steps are required to upgrade to 7.14.1

## Upgrading to 7.14.0

No special steps are required to upgrade to 7.14.0

## Upgrading to 7.13.0

No special steps are required to upgrade to 7.13.0

## Upgrading to 7.12.2

No special steps are required to upgrade to 7.12.2

## Upgrading to 7.12.1

No special steps are required to upgrade to 7.12.1

## Upgrading to 7.12.0

No special steps are required to upgrade to 7.12.0

## Upgrading to 7.11.1

No special steps are required to upgrade to 7.11.1.

## Upgrading to 7.11.0

No special steps are required to upgrade to 7.11.0.

## Upgrading to 7.10.1

No special steps are required to upgrade to 7.10.1.

## Upgrading to 7.10.0

Upgrade to at least version 5.6 of unity.

## Upgrading to 7.9.4

No special steps are required to upgrade to 7.9.4.

## Upgrading to 7.9.0

Upgrade to at least version 5.4.1p3 of unity
[https://unity3d.com/unity/qa/patch-releases/5.4.1p3⁠](https://unity3d.com/unity/qa/patch-releases/5.4.1p3)

## Upgrading to 7.8.0

No special steps are required to upgrade to 7.8.0.

## Upgrading to 7.7.0

No special steps are required to upgrade to 7.7.0.

## Upgrading to 7.6.0

No special steps are required to upgrade to 7.6.0.

## Upgrading to 7.5.0

When running on WebGL or WebPlayer the RawResult for IResult has changed. The Orgitional RawResult field may now be nested under a 'response' key in the returned json object.

## Upgrading to 7.4.0

No special steps are required to upgrade to 7.4.0.

## Upgrading to 7.3.0

In this release the files for the SDK have moved to a new location in order to enable easier updates compatible with the Unity's plugin management.

When upgrading, please delete the following folders and files prior to importing the latest SDK package.

* 'Assets/Facebook'
* 'Assets/Example'
* 'Assets/Plugins/iOS/Facebook'
* 'Plugins/Android/libs/android-support-v4'
* 'Plugins/Android/libs/bolts-android-1.2.0'
* 'Plugins/Android/libs/facebook-android-sdk-4.7.0'
* 'Plugins/Android/libs/facebook-android-wrapper-release'

## Upgrading to 7.2.2

No special steps are required to upgrade to 7.2.2.

## Upgrading to 7.2.1

No special steps are required to upgrade to 7.2.1.

## Upgrading to 7.2.0

[`FB.API`](https://developers.facebook.com/documentation/unity/reference/current/FB.API) now targets [v2.5 of the Graph API](https://developers.facebook.com/docs/apps/changelog#v2_5) by default. In order to prepare for this change remove any explicit versioning in Graph API calls. eg: change `v2.2/me/picture` to `me/picture`

## Unity SDK, Upgrading from 6.x to 7.x

The Facebook SDK for Unity v7.1.0 is a major version upgrade which features:

* Improved login programming model, and access token class.
* Improved sharing programming model, and more ways to share without needing an access token.
* Improved callback handling.
* New features like App Invites

### Install and Setup Updates

Requirements:

* The Unity SDK now requires Unity 5.0 or above.
* The Unity SDK now requires a minimum Android SDK of API level 15 or above.
* The Unity SDK now requires a minimum iOS target of 7.0 or above.

When Updating:

* We recommend you clean out older versions of the Facebook SDK for Unity from your project before importing v7.x
* When upgrading from 6.x delete the following directories:
  * `Assets/Facebook`
  * `Assets/Plugins/Android/facebook`
  * `Assets/Examples`
* When upgrading from a v7.x beta remove the following directories:
  * `Assets/Facebook`
  * `Assets/Examples`
  * In the `Assets/Plugins/Android/libs/` directory, remove: `android-support-v4.jar`, `bolts-android-1.2.0.jar`, and `facebook-android-*`
  * In the `Assets/Plugins/iOS/` directory, remove: `Bolts.framework` and `FBSDK*`
* After cleaning out older versions of the SDK, we recommend you save your project and then close and restart the Unity Editor before continuing.

Setup:

* Refer to the [Getting Started](https://developers.facebook.com/documentation/unity/gettingstarted) guide for a list of steps to integrate the SDK into your Unity project.

### Namespace Updates

* The `namespace` for Facebook functions has changed in v7.x. Change the 'using' directive in your scripts to: `using Facebook.Unity;`

### Platform Updates

* Support for the WebGL deployment target added.
* Refer to [Getting Started for Canvas](https://developers.facebook.com/documentation/unity/getting-started/canvas) for more info about WebGL.

### Login Updates

Performing login, getting permissions:

* `FB.Login` has been replaced and split into [`FB.LoginWithReadPermissions`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogInWithReadPermissions) and [`FB.LoginWithPublishPermissions`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogInWithPublishPermissions).
* As the [best practices for Login](https://developers.facebook.com/documentation/facebook-login/best-practices) point out, you should only ask for publish permissions once a person is ready to post something from your app and **not** during the initial login.

Access tokens:

* A new [`AccessToken`](https://developers.facebook.com/documentation/unity/reference/current/Properties#AccessToken) class has been introduced in v7.x that allows you to retrieve the current access token and inspect the permissions of a logged-in player. `UserId` has moved into this class.

### Method Updates

Sharing:

* You should now use [`FB.ShareLink`](https://developers.facebook.com/documentation/unity/reference/current/FB.ShareLink) for sharing to Facebook.
* [`FB.FeedShare`](https://developers.facebook.com/documentation/unity/reference/current/FB.FeedShare) has been added to bridge any gap in replacing `FB.Feed` for sharing.
* Also remember that both [`FB.ShareLink`](https://developers.facebook.com/documentation/unity/reference/current/FB.ShareLink) and [`FB.FeedShare`](https://developers.facebook.com/documentation/unity/reference/current/FB.FeedShare) **do not** require publish permissions.

App Events:

* No programming model changes. Use [`FB.LogAppEvent`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogAppEvent) to log events taken in your app to get useful analytics. This includes app installs, time spent in your app and ad targeting.
* Use [`FB.LogPurchase`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogAppEvent#logpurchase) as a convenience method for logging purchase events.

App Links:

* [`FB.GetAppLink`](https://developers.facebook.com/documentation/unity/reference/current/FB.GetAppLink) replaces `FB.GetDeepLink`.
* [`FB.Mobile.FetchDeferredAppLinkData`](https://developers.facebook.com/documentation/unity/reference/current/FB.Mobile.FetchDeferredAppLinkData) added to support deferred deep linking.

App Invites:

* [`FB.Mobile.AppInvite`](https://developers.facebook.com/docs/unity/reference/current/FB.Mobile.AppInvite) added for **App Invites**.

### Typed Callbacks

* `FBResult` has been replaced.

Method callbacks are now typed and have distinct result classes. For example: `FB.API` will return an `IGraphResult` and `FB.Canvas.Pay` will return an `IPayResult`. Refer to the call signature of each method to learn its result class.

Parsing callback results are simplified with the typed callbacks.

```
FB.API("/me?fields=first_name", HttpMethod.GET, delegate (IGraphResult result) {
  // Add error handling here
  if (result.ResultDictionary != null) {
    foreach (string key in result.ResultDictionary.Keys) {
      Debug.Log(key + " : " + result.ResultDictionary[key].ToString());
      // first_name : Chris
      // id : 12345678901234567
    }
  }
});
```
