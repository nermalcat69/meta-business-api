---
title: "Facebook SDK for iOS"
source_url: https://developers.facebook.com/documentation/ios
---

# Facebook SDK for iOS

Updated: Aug 4, 2025

## Update Facebook and Audience Network SDK for iOS with Privacy Manifest for App Store Review Requirements

Meta will provide [Privacy Manifests⁠](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) for Facebook SDK for iOS and Audience Network SDK for iOS, starting with Privacy Manifests needed for advertising purposes.

* If you use Facebook SDK for iOS for advertising only, please update to the latest version.
* If you use the Audience Network SDK for iOS, please update to version 6.15.0. Refer more details [here](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/add-sdk).
* If you use Facebook Login for iOS, please update to the latest version.
* If you use Facebook Sharing SDKs for iOS, please update to the latest version.
* If you use Facebook SDK for Unity on iOS, please update the Facebook SDK for Unity to the latest version.

Additional guidance for developers:

* Our Privacy Manifest only provides information collected by default and the SDKs that depend on the Core SDK for functionality may restate the data usage details of the Core SDK. Some app developers may choose to send us more or less information in code, or via the Events Manager or through Advanced matching functionality. These developers will need to provide details around additional data usage details in their Privacy Manifest or App Store Privacy Labels in accordance with their own practices. Refer to the following [article](https://developers.facebook.com/blog/post/2022/07/18/resources-for-completing-app-store-data-practice-questionnaires-apps-facebook-or-audience-network-sdk/) for more information on additional data that may be sent by developers through Meta's SDKs.
* Note that we do not attempt to associate all collected data with Meta users.
* We have pre-populated the tracking domain field for the FBSDK in the Privacy Manifest to help ensure that our services continue to function properly. We do not advise manually adding domains. Listing "www.facebook.com" or subdomains of "facebook.com" in the tracking domain field of a Privacy Manifest may break functionality.

**Note**: Developers can find additional details around the tracking domain field in the Privacy Manifests for Meta SDKs. What is pre-populated in the tracking domain field is intended to receive traffic when a user has provided AppTrackingTransparency (ATT) permission to the app. If our check determines that a request or event from an iOS14.5+ device lacks ATT permission, then usage of such data will be restricted and we will use privacy preserving methods (like those available in [Aggregated Event Measurement⁠](https://www.facebook.com/business/help/721422165168355?id=1877298665783613)) to remove or combine information before personalizing ads we show and measuring how they perform.

This documentation describes how to integrate your iOS app with Facebook to build engaging social apps by using the Facebook SDK for iOS. To learn more about using Facebook development tools, see [App Development](https://developers.facebook.com/documentation/development).

The current version of the Facebook SDK for iOS is [available on GitHub⁠](https://github.com/facebook/facebook-ios-sdk).

When you use the Facebook SDK for iOS, follow the Facebook Open Source [Terms of Use⁠](https://opensource.facebook.com/legal/terms/) and [Privacy Policy⁠](https://opensource.facebook.com/legal/privacy/).

Beginning with SDK v13.0 you must provide a [Client Token](https://developers.facebook.com/documentation/ios/getting-started#client-token) for all calls to the Graph API.

## App Store Connect Requirements

To provide functionality within the Facebook iOS SDK, we may receive and process certain contact, location, identifier, and device information associated with Facebook users and their use of your application. The information we receive depends on what SDK features third party applications use. Please visit the [Facebook for Developers blogpost](https://developers.facebook.com/blog/post/2020/10/22/preparing-for-apple-app-store-data-disclosure-requirements/) for more information about these SDK features.

## Documentation Contents

#### [Component SDKs](https://developers.facebook.com/documentation/ios/componentsdks)

Describes the component SDKs of the Facebook SDK for iOS.

#### [Get Started](https://developers.facebook.com/documentation/ios/getting-started)

A short tutorial to get you up and running.

#### [Use Facebook Login](https://developers.facebook.com/documentation/ios/use-facebook-login)

Enable users to to log into your iOS app with Facebook Login.

#### [Get Facebook User Data](https://developers.facebook.com/documentation/ios/get-user-data)

Get Facebook user data in your iOS app if allowed by the user and your app permissions.

#### [Share a Photo](https://developers.facebook.com/documentation/ios/share-photos)

Share a photo from your iOS app.

#### [Facebook Share Sample](https://developers.facebook.com/documentation/ios)

Source code and project files that you can build and run to learn how to share a photo or link to Facebook from your iOS app.

#### [Sharing to Reels](https://developers.facebook.com/documentation/ios/sharing-to-reels-facebook)

Integrate sharing into your iOS app so that users can share video content to Facebook Reels.

#### [Advanced Topics](https://developers.facebook.com/documentation/ios/advanced)

Create a simulator build of your app for the app review process.

#### [Create a Simulator Build](https://developers.facebook.com/documentation/ios/create-a-simulator-build)

Create a simulator build of your app for the app review process.

#### [Calling the Graph API from iOS](https://developers.facebook.com/documentation/ios/graph)

Learn how to call the Facebook Graph API from your iOS app.

#### [Error Handling](https://developers.facebook.com/documentation/ios/errors)

Changelog and release notes for the Facebook SDK for iOS.

#### [Upgrade Guide](https://developers.facebook.com/documentation/ios/upgrade-guide)

Instructions for upgrading your version of the Facebook SDK for iOS.

#### [FAQ & Troubleshooting](https://developers.facebook.com/documentation/ios/troubleshooting)

Frequently asked questions and troubleshooting information for the Facebook SDK for iOS.

#### [Reference](https://developers.facebook.com/documentation/ios/reference_obj-c)

Component and endpoint references.

## See Also

* [Facebook SDK for Android](https://developers.facebook.com/documentation/android)
* [Facebook Developer Documentation](https://developers.facebook.com/docs/)
* [Audience Network](https://developers.facebook.com/documentation/audience-network)
* [Banner Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/ios/banner)
* [Interstitial Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/ios/interstitial)
* [Add Native Ads to an iOS App](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/ios/native)
* [Changelog⁠](https://github.com/facebook/facebook-ios-sdk/blob/master/CHANGELOG.md)
