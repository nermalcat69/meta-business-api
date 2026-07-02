---
title: "Component SDKs of the Facebook SDK for Android"
source_url: https://developers.facebook.com/documentation/android/downloads
---

# Component SDKs of the Facebook SDK for Android

Updated: Apr 14, 2026

The Facebook SDK for Android consists of the following component SDKs:

* The Facebook Core SDK (includes [Analytics](https://developers.facebook.com/docs/analytics))
* The [Facebook Login](https://developers.facebook.com/documentation/facebook-login) SDK
* The [Facebook Sharing](https://developers.facebook.com/documentation/sharing) SDK
* The [Facebook Messenger](https://developers.facebook.com/docs/messenger-expressions) SDK
* The [Facebook App Links](https://developers.facebook.com/documentation/applinks) SDK

If you don’t need the functionality of the full Facebook SDK for Android, you can save space by using only the component SDKs that you need to support the Facebook products that you want to use in your app.

When you use the Facebook SDK, some events in your app are automatically logged and collected unless you disable automatic event logging. For details about what information is collected and how to disable automatic event logging, see [Automatic App Event Logging](https://developers.facebook.com/documentation/app-events/getting-started-app-events-android#auto-events).

To link with Maven to one of the component SDKs in your project, add one of the following implementation statements to your build script:

* `implementation 'com.facebook.android:facebook-applinks:latest.release'`
* `implementation 'com.facebook.android:facebook-common:latest.release'`
* `implementation 'com.facebook.android:facebook-core:latest.release'`
* `implementation 'com.facebook.android:facebook-gamingservices:latest.release'`
* `implementation 'com.facebook.android:facebook-login:latest.release'`
* `implementation 'com.facebook.android:facebook-messenger:latest.release'`
* `implementation 'com.facebook.android:facebook-share:latest.release'`

**To add an implementation statement:**

* In your project, open **your\_app | Gradle Scripts | build.gradle (Project)** and add the following repository to the `buildscript { repositories {}}` section to download the SDK from the Maven Central Repository:

  ```
  mavenCentral()
  ```
* In your project, open **your\_app | Gradle Scripts | build.gradle (Module: app)** and add one or more of the implementation statements to the `dependencies{}` section.
* Build your project.

## Download

You can also download the entire Facebook SDK for Android.

See [facebook/facebook-android-sdk⁠](https://github.com/facebook/facebook-android-sdk) on [GitHub⁠](https://github.com/).
