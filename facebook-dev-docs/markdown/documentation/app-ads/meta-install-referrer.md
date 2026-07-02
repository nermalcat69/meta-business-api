---
title: "Deep Link in Your iOS Mobile App"
source_url: https://developers.facebook.com/documentation/app-ads/meta-install-referrer
---

# Deep Link in Your iOS Mobile App

Updated: Apr 14, 2026

A deep link is a link that goes not only to your app, but to a specific piece of content within your app. For more information, see [Add Deep Links to Your App Ad](https://developers.facebook.com/documentation/app-ads/deep-linking).

You can support deep linking by using Universal Links or by using Custom URL Schemes.

## Support Universal Links

### Prerequisites

Before you can support Universal Links in your iOS mobile app, you must satisfy the following prerequisites:

* Follow the Apple guidelines to [allow apps and websites to link to your content⁠](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content?language=objc), including:
* Update your website to [support associated domains⁠](https://developer.apple.com/documentation/Xcode/supporting-associated-domains?language=objc)
* Update your app to [support universal links⁠](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app)

After you meet the prerequisites, you can add code to your app to support Aggregated Event Measurment. For more information, see [Aggregated Event Measurement](https://developers.facebook.com/documentation/app-events/guides/aggregated-event-measurement).

## Support Custom URL Schemes in Your Mobile App

### Step 1: Add Deep Linking Settings

In the [App Dashboard](https://developers.facebook.com/apps) add deep linking information for your app. Navigate to **Dashboard** > **Settings** > **iOS**.

* For **URL Scheme Suffix** add your URL scheme without `://`. For example, if your URL scheme is `mytravelapp://`, enter `mytravelapp`. **Note: This does not apply as a requirement for iOS versions below iOS16.**
* For **App Store ID** get your ID from your App Store URL: *https://itunes.apple.com/us/app/my-app/`APP_STORE_ID`*.

![](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/666410927_1475396050985711_8429639461594080949_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=yiVeXYQ6gQ0Q7kNvwFjlZjr&_nc_oc=AdrhLIrKSS5aq9855DlYqtEhROZI_wbmQKauslz0spNwCpnqBEOpa1tFcCJFp7sN-Ozhjmo35dc29zWYg7w9KvNG&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=ea2qy1akfriiYEDTX8poBQ&_nc_ss=7b289&oh=00_AQCDOEKJGP07Qy432nYT2xGhabVuSLfG8pAN30w-Y-n2VQ&oe=6A60797A)

### Step 2: Deferred Deep Linking (Optional)

Deferred deep linking allows you to send people to a custom view after they install your app through the app store.

You must use deferred deep linking if you target people who did not install your app yet. If you are only targeting people who already installed your app, you do not need to add deferred deep linking.

Due to iOS 14 updates, Deferred Deep Linking is no longer supported for the [`POST /{ad-id}` endpoint](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup) for [SKAdNetwork Campaigns](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/SKAdNetwork).

The Facebook SDK for iOS includes the product [App Links](https://developers.facebook.com/documentation/applinks), which enables you to support deferred deep linking in your app. In addition to your deep link implementation, just add the following code to your app to handle deferred deep links.

If you follow the GDPR compliance in [GDPR Compliance in FB SDK Best Practices for GDPR Compliance](https://developers.facebook.com/documentation/app-events/gdpr-compliance#disabling-automatic-sdk-initialization), re-enable automatic SDK initialization first after an end user provides consent before fetching a deferred link.

#### Objective-C

Code to handle deferred links:

```
#import <FBSDKCoreKit/FBSDKCoreKit.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  if (launchOptions[UIApplicationLaunchOptionsURLKey] == nil) {
    [FBSDKAppLinkUtility fetchDeferredAppLink:^(NSURL *url, NSError *error) {
      if (error) {
        NSLog(@"Received error while fetching deferred app link %@", error);
      }
      if (url) {
        [[UIApplication sharedApplication] openURL:url];
      }
    }];
  }
  return YES;
}
```

Code to re-enable automatic SDK initialization, if necessary:

```
#import <FBSDKCoreKit/FBSDKCoreKit.h>

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  if (launchOptions[UIApplicationLaunchOptionsURLKey] == nil) {
    // Get user consent
    [FBSDKSettings setAutoInitEnabled:YES];
    [FBSDKApplicationDelegate initializeSDK:nil];
    [FBSDKAppLinkUtility fetchDeferredAppLink:^(NSURL *url, NSError *error) {
      if (error) {
        NSLog(@"Received error while fetching deferred app link %@", error);
      }
      if (url) {
        [[UIApplication sharedApplication] openURL:url];
      }
    }];
  }
  return YES;
}
```

#### Swift

Code to handle deferred links:

```
import FacebookCore

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        AppLinkUtility.fetchDeferredAppLink { (url, error) in
            if let error = error {
                print("Received error while fetching deferred app link %@", error)
            }
            if let url = url {
                if #available(iOS 10, *) {
                    UIApplication.shared.open(url, options: [:], completionHandler: nil)
                } else {
                    UIApplication.shared.openURL(url)
                }
            }
        }
        return true;
}
```

Code to re-enable automatic SDK initialization, if necessary:

```
import FacebookCore

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        // Get user consent
        Settings.isAutoInitEnabled = true
        ApplicationDelegate.initializeSDK(nil)
        AppLinkUtility.fetchDeferredAppLink { (url, error) in
            if let error = error {
                print("Received error while fetching deferred app link %@", error)
            }
            if let url = url {
                if #available(iOS 10, *) {
                    UIApplication.shared.open(url, options: [:], completionHandler: nil)
                } else {
                    UIApplication.shared.openURL(url)
                }
            }
        }
        return true;
}
```

### Step 3: Verify Deep Link Setup

You can verify your Facebook SDK and deep link setup within our **[App Ads Helper](https://developers.facebook.com/tools/app-ads-helper/)** in the tools & support section. We recommend verifying your setup before you start running deep link ads.

[Verify Deep Link Setup](https://developers.facebook.com/tools/app-ads-helper/)

### Step 4: Add a Deferred Deep Link to Your Ad

If you have select App Installs as your objective you can add a Deferred Deep Link.

In the [Ads Manager⁠](https://www.facebook.com/adsmanager), select **New AdSet** and scroll to **Ad Creative**. Add your deep link or a URL with [Facebook App Links metadata](https://developers.facebook.com/documentation/applinks/metadata-reference) implemented to take users to a specific location in the app after installing.

## See Also

* [Facebook SDK for iOS](https://developers.facebook.com/documentation/app-ads/docs/ios/)
