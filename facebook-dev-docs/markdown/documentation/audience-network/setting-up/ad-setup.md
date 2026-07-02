---
title: "Audience Network SDK for Unity Change Log"
source_url: https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup
---

# Audience Network SDK for Unity Change Log

Updated: May 1, 2024

Change log and release notes for the Facebook SDK for Unity.

## Audience Network Unity SDK 6.5.0 - May 1st, 2024

* Updated Audience Network iOS SDK package dependency to 6.15
* Removed obsoleted bridging method in RewardedVideoAd

  ### Audience Network iOS SDK Updates
* [Audience Network iOS SDK 6.15.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#6_15_0)

## Audience Network Unity SDK 6.4.0 - April 26th, 2021

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 6.4.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#6_4_1)

### Audience Network Android SDK Updates

* [Audience Network Android SDK 6.4.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#6_4_0)

## Audience Network Unity SDK 6.3.0 - February 23rd, 2021

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 6.3.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#6_3_0)

### Audience Network Android SDK Updates

* [Audience Network Android SDK 6.3.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#6_3_0)

## Audience Network Unity SDK 6.2.1 - January 13rd, 2021

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 6.2.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#6_2_1)

## Audience Network Unity SDK 6.2.0 - October 27th, 2020

### API Changes

* `AdSettings.SetIsChildDirected` removed
  * Use `AdSettings.SetMixedAudience` instead
* `AdView.DisableAutoRefresh` removed
* `AdSettings.SetAdvertiserTrackingEnabled` added.
  * See the document on [Advertising Tracking Enabled](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/advertising-tracking-enabled) for more details

### Audience Network Android SDK Updates

* [Audience Network Android SDK 6.2.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#6_2_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 6.2.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#6_2_0)

## Audience Network Unity SDK 5.10.1 - July 17th, 2020

### Data processing options

Fix data processing options setter for android.

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.10.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_10_1)

## Audience Network Unity SDK 5.10.0 - July 7th, 2020

### Data processing options

We've released a Limited Data Use feature to give businesses more control over how their data is used in our systems and better support them with their [California Consumer Privacy Act (CCPA)](https://developers.facebook.com/docs/audience-network/support/faq/ccpa) compliance efforts.

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.10.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_10_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.10.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_10_0)

## Audience Network Unity SDK 5.6.0 - November 7th, 2019

We are no longer bundling the iOS and Android SDKs with the Unity SDK.

Instead, we are using the Play Services Resolver for Unity to download the latest sdk when you build the game.

**Please read the [new integration instructions](https://developers.facebook.com/documentation/audience-network/setting-up/platform-steup/unity/add-sdk) if you are upgrading from a version below 5.6.**

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.6.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_6_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.6.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_6_0)

## Audience Network Unity SDK 5.5.1 - September 27h, 2019

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.5.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_5_1)

## Audience Network Unity SDK 5.5.0 - September 9th, 2019

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.5.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_5_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.5.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_5_0)

## Audience Network Unity SDK 5.4.1 - July 8th, 2019

### Native Ads and Native Banner Ads

Audience Network Unity SDK from 5.4.1 version onwards will no longer support Native Ads and Native Banner Ads.

#### In order to still show Native Ads and Native Banner Ads you can either:

* Continue to use older versions of Unity SDK
* Build your own custom solution to leverage Native Ads and Native Banner Ads via the Audience Network [iOS](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/get-started) and [Android](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/get-started) SDKs

You can still continue to leverage other high performing formats such as Rewarded Video through the Audience Network Unity SDK.

### Important Changes on iOS: Added dependency to `FBBSDKCoreKit_Basics`

As we're adding `FBSDKCoreKit/FBSDKCoreKit_Basics` as a dependency of the iOS SDK, changes will be needed in project dependencies.

A manual dependency to `FBSDKCoreKit.framework` has to be added to the project. It can be done by following these steps:

* Download both `FBSDKCoreKit.framework` and its stripped down version (`FBSDKCoreKit_Basics.framework`) from our [GitHub release page⁠](https://github.com/facebook/facebook-objc-sdk/releases).
* If a static framework is used, drag and drop the framework to the project.
* If a dynamic framework is used, add the framework to "Embedded Binaries" for the project.

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.3.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_3_0)
* [Audience Network Android SDK 5.3.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_3_1)
* [Audience Network Android SDK 5.3.2 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_3_2)
* [Audience Network Android SDK 5.4.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_4_0)
* [Audience Network Android SDK 5.4.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_4_1)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.3.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_3_0)
* [Audience Network iOS SDK 5.3.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_3_1)
* [Audience Network iOS SDK 5.3.2 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_3_2)
* [Audience Network iOS SDK 5.4.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_4_0)

## Audience Network Unity SDK 5.2.0 - February 28th, 2019

### Added

* Initialize method for Android
* use of isValid in sample scenes

### Fixed

* Fixed the way Android is calculating width/height (and thus the way it presents banners)

### Modified

* Better sample scenes

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.2.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_2_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.2.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_2_0)

## Audience Network Unity SDK 5.1.2 - February 1st, 2019

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.1.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_1_1)

## Audience Network Unity SDK 5.1.1 - January 18th, 2019

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.1.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_1_1)

## Audience Network Unity SDK 5.1.0 - November 1st, 2018

### Added

* Server-to-server bidding support

### Fixed

* Fixed a rendering bug of native ads and native banner ads
* AdChoices icon now show in Native Ad sample scene after ad is rendered
* Fixed banner sample scene
* Improved banner bottom positioning
* Improved banner handling of rotation

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.1.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_1_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.1.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_1_0)
* [Audience Network iOS SDK 5.0.2 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_0_2)

## Audience Network Unity SDK 5.0.1 - October 3rd, 2018

### Audience Network Android SDK Updates

* [Audience Network Android SDK 5.0.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_0_1)
* [Audience Network Android SDK 5.0.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#5_0_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 5.0.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_0_1)
* [Audience Network iOS SDK 5.0.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#5_0_0)

## Audience Network Unity SDK 4.99.3 - August 30th, 2018

### Audience Network Android SDK Updates

* [Audience Network Android SDK 4.99.3 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#4_99_3)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 4.99.3 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#4_99_3)

## Audience Network Unity SDK 4.99.2 - August 17th, 2018

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 4.99.2 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#4_99_2)

## Audience Network Unity SDK 4.99.1 - July 5th, 2018

### Added

* New Native Ad format, NativeBannerAd, which should now be used to display native ads with only the advertiser/app icon
* New ad formats for Native Ads - Video and Carousel
* OnDestroy callback for Rewarded Video on Android to handle cases where Rewarded Video activity has been destroyed by the OS without the game knowing about it

### Modified

* Native Ads now has different API. Please read the [4.99 Upgrade Guide](https://developers.facebook.com/docs/audience-network/upgrade_guide_unity_4_99)

### Audience Network Android SDK Updates

* [Audience Network Android SDK 4.99.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#4_99_1)
* [Audience Network Android SDK 4.99.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#4_99_0)

### Audience Network iOS SDK Updates

* [Audience Network iOS SDK 4.99.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#4_99_1)
* [Audience Network iOS SDK 4.99.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#4_99_0)

## Audience SDK Network Unity SDK 4.28.2 - May 30th, 2018

### Audience Network Android SDK Updates

* [Audience Network Android SDK 4.28.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#4_28_1)
* [Audience Network Android SDK 4.28.2 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#4_28_2)

### Audience Network iOS SDK

* [Audience Network iOS SDK 4.28.1 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#4_28_1)

## Audience Network Unity SDK 4.28.0 - March 19th, 2018

### Modified

* Removed Manual Logging

### Fixed

* Logging bug

### Audience Network Android SDK

* [Audience Network Android SDK 4.28.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/changelog#4_28_0)

### Audience Network iOS SDK

* [Audience Network iOS SDK 4.28.0 Change Log](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/changelog#4_28_0)

## Audience Network Unity SDK 4.27.0 - February 2nd, 2018

### Added

* AdChoices Prefab
* Added simplified banner show method using a top/bottom position instead of raw height
* Unity 2017 support
* Native Ad now support all Canvas' render modes

### Fixed

* Android devices can now show video again
* Removed Gradle-only Android build restriction - Internal Unity builds are supported again
* Fixed NativeAd on load callback being called twice

## Audience Network Unity SDK 4.22.0 - July 16th, 2017

### Added

* Rewarded video support
* AdChoices text, image and link data for native ads

### Modified

* Internal Unity build are not supported anymore. Builds should be done with Gradle. (Build Settings, select Build System)

### Fixed

* Fixed rendering issues with native ad cover images (blank or question mark image)
* Improved viewability checks for native ads (handles different rendering types and object hierarchies far better)
* Fixed missed impression callbacks on Android
