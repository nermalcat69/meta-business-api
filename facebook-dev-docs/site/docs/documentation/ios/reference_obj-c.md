---
title: "Facebook SDK for iOS FAQ & Troubleshooting"
source_url: https://developers.facebook.com/documentation/ios/reference_obj-c
---

# Facebook SDK for iOS FAQ & Troubleshooting

Updated: May 14, 2020

**How do I share an app ID across multiple apps?**

You can use one Facebook app ID in multiple iOS apps, for example, between free and paid versions of your app.

Define a URL scheme suffix parameter, `FacebookUrlSchemeSuffix`, in your app's `.plist` file.

*Note: Suffix only works with alpha characters.*

**How do I use localized Facebook strings?**

The SDK zip includes a `FacebookSDKStrings.bundle` containing localized strings for SDK resources. Include the bundle in your app and [enable Base Internationalization⁠](https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/InternationalizingYourUserInterface/InternationalizingYourUserInterface.html#//apple_ref/doc/uid/10000171i-CH3-SW4) as described in Apple's documentation.

**How do I download earlier versions of the SDK?**

You can download old versions of the SDK from the [iOS downloads area](https://developers.facebook.com/docs/ios/downloads).

**How can I test the native share dialog in the iOS simulator?**

Since the native share dialog is part of Facebook's iOS app, it can't run on a simulator. Use a physical device to test the native share dialog. We're looking at ways to make it possible to test the native share dialog in the simulator.

**Why aren't the Facebook SDK classes recognized by Xcode?**

Make sure you have the correct import statements at the top of each file where you're trying to use the Facebook SDK classes. For example:

```
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKShareKit/FBSDKShareKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>
```

**Why am I getting an unrecognized selector error?**

When using frameworks in Objective-C, classes that use categories to extend existing classes are not loaded automatically.

When you try to call a method that has been extended in these classes, you will get an `unrecognized selector sent to instance` error. Classes that are used from the Xcode interface builder are also not loaded automatically, for example when you add a `FBSDKLoginButton` to your interface by drawing a view in your .xib file and then setting it as `FBSDKLoginButton` from the interface builder UI. So again, when you try to call methods on them, you will get an `unrecognized selector sent to instance` error. To solve this problem you have two options.

You can load the class manually in your app delegate's `application:didFinishLaunchingWithOptions:`, by calling:

```
[FBSDKLoginButton class];
```

Or you can add the `-ObjC` linker flag. This flag tells the linker to load every object file in the SDK that defines an Objective-C class or category. This approach will make all our classes work out of the box but it will increase the size of your executable (due to additional object code loaded into the application).

To add the `-ObjC` flag, click on the project target and select the "Build Settings" tab. There, under "Linking", double-click "Other Linker Flags" to add `-ObjC`.

**Why isn't the FBSDKRequestConnection handler being called?**

`FBSDKRequestConnection` uses `NSURLConnection` which requires an active [RunLoop⁠](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSRunLoop_Class/Reference/Reference.html). If you're using it outside of the main thread you have to manage this yourself.

Alternatively, you can set the `delegateQueue` property on the `FBSDKRequestConnection`.

**Why doesn't the native share dialog work?**

It's common to have configuration errors in the `.plist`. Make sure that the `.plist` includes rows for `FacebookAppID` and `FacebookDisplayName` and URL Type entry for `fb{app-id}`.

**How do I debug Graph API requests?**

If you're getting unexpected results when making Graph API requests, enable the debug mode by adding this code before any requests:

```
[FBSettings setLoggingBehavior:
    [NSSet setWithObject:FBSDKLoggingBehaviorGraphAPIDebugInfo]];
```

Use `FBSDKLoggingBehaviorGraphAPIDebugWarning` if you would like to suppress info level messages and keep only warnings.

Enabling this logging behavior will add `debug` param to all Graph API requests and output any occurring issues in console.

You can read more about Graph API Debug Mode [here](https://developers.facebook.com/docs/graph-api/using-graph-api/v2.3#debugging).

**What does it mean when the FBSDKLoginManagerLoginResult.isCancelled property is unexpectedly YES?**

The SDK will report a cancellation if the user explicitly taps a cancel button in the login dialogs, or if they manually app switch back to your app (known as an implicit cancellation). You should make sure you are not initiating a login flow as part of your app delegate's lifecycle (such as starting a login inside `application:openURL:sourceApplication:annotation:`) as that will mimic an implicit cancellation. If you must, dispatch the login initiation later to the main queue so that the app delegate's lifecycle completes first.

**Does the Facebook SDK for iOS access the IDFA?**

* The Facebook SDK includes code to access Apple's Advertising Identifier (IDFA), but that code is only executed in certain situations.
* The Facebook SDK for iOS only accesses IDFAs in the following scenarios: 1) if your app serves ads within the app through Facebook's [Audience Network](https://developers.facebook.com/products/audience-network/), or 2) if your app logs app installs or other mobile App Events in order to attribute those events to your ad campaigns.
* If you are not logging App Events (via the FBSDKAppEvents class), then the Facebook SDK is not accessing the IDFAs. Additionally, the Facebook SDK does not require AdSupport.framework to be included.
* If you want to track App Events without collecting IDFA, you can disable IDFA collection within your app dashboard in the advanced setting section.

**How does the FBSDKSharingDelegate work?**

The Share dialog notifies its delegate's `sharer:didCompleteWithResults:` and `sharerDidCancel:` methods upon a user action.

* `sharer:didCompleteWithResults:` when the user successfully shares. If that user has not logged in with Facebook Login, this method will also be called if the user clicks on `Cancel`.
* `sharerDidCancel:` when someone clicks Share dialog's `X` button; or if they have logged in with Facebook Login and click on `Cancel`.

**How do I troubleshoot unexpected results when making requests?**

If you're getting unexpected results when making requests, turn on debugging for `FBSDKGraphRequests`. Add this code before any requests:

```
[FBSDKSettings enableLoggingBehavior:FBSDKLoggingBehaviorNetworkRequests];
```

You'll be able to debug any issues by viewing requests and responses from the servers directly.

Consider looking at the other `FBSDKLoggingBehavior*` constants defined in `FBSDKSettings.h` for other things you can log.
