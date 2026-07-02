---
title: "Facebook SDK for JavaScript - Reference"
source_url: https://developers.facebook.com/documentation/javascript/reference/FB.api
---

# Facebook SDK for JavaScript - Reference

Updated: Sep 26, 2023

Reference docs for each of the full list of methods and functions available in the SDK.

## Core Methods

| Method | Description |
| --- | --- |
| [`.init()`](https://developers.facebook.com/documentation/javascript/reference/FB.init) | Used to initialize and setup the SDK. All other SDK methods must be called after this one. |
| [`.api()`](https://developers.facebook.com/documentation/javascript/reference/FB.api) | Make an API call to the [Graph API](https://developers.facebook.com/docs/api). |
| [`.ui()`](https://developers.facebook.com/documentation/javascript/reference/FB.ui) | Used to trigger different forms of Facebook created UI dialogs, such as the Feed dialog, or the Requests dialog. |

## Facebook Login Methods

| Method | Description |
| --- | --- |
| [`.getLoginStatus()`](https://developers.facebook.com/documentation/javascript/reference/FB.getLoginStatus) | Returns the Facebook Login status of a user, with an `authResponse` object if they are logged in. |
| [`.login()`](https://developers.facebook.com/documentation/javascript/reference/FB.login) | Prompts a user to login to your app using the Login dialog in a popup. This method can also be used with an already logged-in user to request additional permissions from them. |
| [`.logout()`](https://developers.facebook.com/documentation/javascript/reference/FB.logout) | Used to logout the current user both from your site or app **and** from Facebook.com. |
| [`.getAuthResponse()`](https://developers.facebook.com/documentation/javascript/reference/FB.getAuthResponse) | When your app is able to assume that a user is definitely logged-in via Facebook, this synchronous method can return the `authResponse` object without the overhead of an asynchronous call. |

## Event Handling Methods

| Method | Description |
| --- | --- |
| [`.Event.subscribe()`](https://developers.facebook.com/documentation/javascript/reference/FB.Event.subscribe) | Subscribe to a JavaScript event, which will fire on various different types of actions, such as someone clicking a Like button, or adding to a Comments Box. |
| [`.Event.unsubscribe()`](https://developers.facebook.com/documentation/javascript/reference/FB.Event.unsubscribe) | Remove any event subscriptions that were previously created. |

## App Events

This Facebook SDK (JS) App Events API has been deprecated and is no longer supported starting July 1, 2022. There are no plans to add new features to this product.

Instead of using `FB.AppEvents.LogEvent`, we recommend that you send these events through the [Meta Pixel](https://developers.facebook.com/documentation/meta-pixel).

| Method | Description |
| --- | --- |
| [`.AppEvents.LogEvent()`](https://developers.facebook.com/docs/reference/javascript/FB.AppEvents.LogEvent) | Log an application event, for example when someone completes your tutorial. |
| [`.AppEvents.logPurchase()`](https://developers.facebook.com/docs/reference/javascript/FB.AppEvents.LogEvent) | When someone makes a purchase in your app, log the event. |
| [`.AppEvents.activateApp()`](https://developers.facebook.com/docs/reference/javascript/FB.AppEvents.LogEvent) | Log when app launches. |

## XFBML Methods

XFBML is a markup language like HTML, with special tags that are used to insert social plugins into HTML pages.

| Method | Description |
| --- | --- |
| [`.XFBML.parse()`](https://developers.facebook.com/documentation/javascript/reference/FB.XFBML.parse) | Parses and renders any XFBML on a page. This can be useful if you insert any social plugins into the DOM after the initial page load, or you set `xfbml` as `false` in `FB.init()`. |

## Canvas Methods

These methods can only be used by Apps on Facebook.com that run in a [Canvas page](https://developers.facebook.com/docs/games/canvas).

| Method | Description |
| --- | --- |
| [`.Canvas.Prefetcher.addStaticResource()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.Prefetcher.addStaticResource) | Controls which static resources are flushed to the browser early. |
| [`.Canvas.Prefetcher.setCollectionMode()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.Prefetcher.setCollectionMode) | Controls how statistics are collected on resources used by your application, with the intent to influence whether those resources will be fetched to the browser early, or to turn off Prefetching completely. |
| [`.Canvas.scrollTo()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.scrollTo) | Tells Facebook to scroll to a specific location in the iframe of your canvas page. |
| [`.Canvas.setAutoGrow()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setAutoGrow) | Starts or stops a timer which resizes your iframe every few milliseconds. |
| [`.Canvas.setSize()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setSize) | Tells Facebook to resize your iframe. |
| [`.Canvas.setUrlHandler()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setUrlHandler) | Registers the callback for inline processing (i.e. without page reload) of user actions, such as clicks on Live Ticker game stories. |
| [`.Canvas.setDoneLoading()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setDoneLoading) | Reports that the page is now usable by the user, for collecting performance metrics. |
| [`.Canvas.startTimer()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.startTimer) | When using [`.setDoneLoading()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setDoneLoading), controls the page load timer. |
| [`.Canvas.stopTimer()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.stopTimer) | When using [`.setDoneLoading()`](https://developers.facebook.com/documentation/javascript/reference/FB.Canvas.setDoneLoading), controls the page load timer. |
