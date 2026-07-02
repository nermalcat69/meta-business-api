---
title: "Facebook SDK for Unity Reference"
source_url: https://developers.facebook.com/documentation/unity/reference/current/FB.API
---

# Facebook SDK for Unity Reference

Updated: Apr 17, 2026

This document provides the API details for the Facebook SDK for Unity.

The architecture follows, as much as possible within the constraints of the supported platforms, the design of the Javascript SDK. All functions implementing I/O operations are asynchronous and take a delegate as an argument which will be called with their output once it is ready.

Most data exchanged over the network is marshalled as strings containing JSON, and a utility class, [`Json`](https://developers.facebook.com/documentation/unity/reference/current/Json), is provided to help manage that data within Unity.

**Note**: The Facebook SDK for Unity works with Unity 5.0 and above.

## Core Methods

| Name | Description |
| --- | --- |
| [`FB.Init`](https://developers.facebook.com/documentation/unity/reference/current/FB.Init) | Initialize the SDK, this is required before doing anything else |
| [`FB.API`](https://developers.facebook.com/documentation/unity/reference/current/FB.API) | Make an API call to the [Graph API](https://developers.facebook.com/docs/graph-api) |
| [`FB.ShareLink`](https://developers.facebook.com/documentation/unity/reference/current/FB.ShareLink) | Trigger a Share dialog for one-to-many sharing |
| [`FB.FeedShare`](https://developers.facebook.com/documentation/unity/reference/current/FB.FeedShare) | Trigger the legacy Feed sharing dialog, only use if you need legacy parameters |
| [`FB.AppRequest`](https://developers.facebook.com/documentation/unity/reference/current/FB.AppRequest) | Trigger a Game Request dialog for one-to-one sharing |
| [`FB.GetAppLink`](https://developers.facebook.com/documentation/unity/reference/current/FB.GetAppLink) | Get the URL with which the app was invoked |

## Facebook Login

| Name | Description |
| --- | --- |
| [`FB.LogInWithReadPermissions`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogInWithReadPermissions) | Prompt a user to authorize your app with requested read permissions, or to grant additional read permissions |
| [`FB.LogInWithPublishPermissions`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogInWithPublishPermissions) | Prompt a user to authorize your app with publish permissions, or to grant additional permissions |
| [`FB.LogOut`](https://developers.facebook.com/documentation/unity/reference/current/FB.Logout) | Log a user entirely out of Facebook |

## Express Login

| Name | Description |
| --- | --- |
| [`FB.Android.RetrieveLoginStatus`](https://developers.facebook.com/documentation/unity/reference/current/FB.Android.RetrieveLoginStatus) | Retrieves the login status of the user. |

## Session Properties

| Name | Description |
| --- | --- |
| [`AccessToken`](https://developers.facebook.com/documentation/unity/reference/current/Properties#AccessToken) | The access token granted to your application by the current user |
| [`FB.IsInitialized`](https://developers.facebook.com/documentation/unity/reference/current/Properties#IsInitialized) | Check whether the SDK has been initialized |
| [`FB.IsLoggedIn`](https://developers.facebook.com/documentation/unity/reference/current/Properties#IsLoggedIn) | Check whether a user is currently logged in and has authorized your app |
| [`FB.GraphApiVersion`](https://developers.facebook.com/documentation/unity/reference/current/Properties#GraphApiVersion) | Check whether a user is currently logged in and has authorized your app |

## App Events

| Name | Description |
| --- | --- |
| [`FB.ActivateApp`](https://developers.facebook.com/documentation/unity/reference/current/FB.ActivateApp) | Signal an app launch or resume, for integrating with [App Ads](https://developers.facebook.com/documentation/app-ads) and [Facebook Analytics for Apps](https://developers.facebook.com/docs/analytics) |
| [`FB.LogAppEvent`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogAppEvent) | Publish an App Event, for deeper integration with [App Ads](https://developers.facebook.com/documentation/app-ads) and [Facebook Analytics for Apps](https://developers.facebook.com/docs/analytics) |
| [`FB.LogPurchase`](https://developers.facebook.com/documentation/unity/reference/current/FB.LogAppEvent#logpurchase) | Convience method for publishing purchase events, for deeper integration with [App Ads](https://developers.facebook.com/documentation/app-ads) and [Facebook Analytics for Apps](https://developers.facebook.com/docs/analytics) |

## Mobile-only

| Name | Description |
| --- | --- |
| [`FB.Mobile.RefreshCurrentAccessToken`](https://developers.facebook.com/documentation/unity/reference/current/FB.Mobile.RefreshCurrentAccessToken) | Updates the current access token with up-to-date permissions, and extends the expiration date if possible |
| [`FB.Mobile.AppInvite`](https://developers.facebook.com/docs/unity/reference/current/FB.Mobile.AppInvite) | Open an App Invite dialog, giving users the ability to send their friends a personal invite to your app |
| [`FB.Mobile.FetchDeferredAppLinkData`](https://developers.facebook.com/documentation/unity/reference/current/FB.Mobile.FetchDeferredAppLinkData) | Fetch deferred applink data from [App Ads](https://developers.facebook.com/documentation/app-ads/deep-linking) or invites |
| [`FB.Mobile.ShareDialogMode`](https://developers.facebook.com/documentation/unity/reference/current/FB.Mobile.ShareDialogMode) | Set the preferred dialog type when using `FB.ShareLink` |

## Canvas-only Methods

| Name | Description |
| --- | --- |
| [`FB.Canvas.Pay`](https://developers.facebook.com/documentation/unity/reference/current/FB.Canvas.Pay) | Prompt the user to make a payment using [Facebook Payments](https://developers.facebook.com/documentation/games_payments) |

## Auxiliary Methods

| Name | Description |
| --- | --- |
| [`FB.GameGroupCreate`](https://developers.facebook.com/documentation/unity/reference/current/FB.GameGroupCreate) | Prompt user to create a new Game Group |
| [`FB.GameGroupJoin`](https://developers.facebook.com/documentation/unity/reference/current/FB.GameGroupJoin) | Prompt user to join a Game Group |

## Other References

#### [SDK Examples](https://developers.facebook.com/documentation/unity/examples)

Examples for the several common scenarios with the Facebook SDK for Unity

#### [Using JSON with Unity](https://developers.facebook.com/documentation/unity/reference/current/Json)

JSON is widely-used for data interchange; we can help you use it with Unity
