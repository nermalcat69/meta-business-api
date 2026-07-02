---
title: "Audience Network SDK for Android Change Log"
source_url: https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios
---

# Audience Network SDK for Android Change Log

Updated: May 8, 2026

Change log and release notes for the Meta Audience Network SDK for Android.

**Action needed: Update your Android apps to a more recent SDK version (6.5+) to continue monetizing them on Audience Network**

You'll need to update your Android apps to Audience SDK 6.5 or later to continue operating and monetizing on Audience Network. Older Audience Network SDKs are not compatible with apps that target Android 12+ (API level 31+) and won't work correctly for apps on these devices.

## Audience Network SDK 6.21.0 - October 28, 2025

### Changes

* New APIs for native display format.
* Performance and UX improvements.
* Multidex support is required for AN sdk 6.21.0. [Official documentation⁠](https://developer.android.com/build/multidex)

## Audience Network SDK 6.20.0 - May 1, 2025

### Changes

* Edge to edge display support.
* Performance and UX improvements.

## Audience Network SDK 6.19.0 - February 18, 2025

### Changes

* Upgrading exoplayer to 2.19.1
* Performance and UX improvements.

## Audience Network SDK 6.18.0 - September 16, 2024

### Changes

* Add support for Android 15.
* Performance and UX improvements.

## Audience Network SDK 6.17.0 - March 28, 2024

### Changes

* Performance and UX improvements.
* Interstitial Chained Ads start muted.

## Audience Network SDK 6.16.0 - August 31, 2023

### Changes

* Performance improvements for watch and browse experience making the creative clickable for Interstitial and Rewarded video.

## Audience Network SDK 6.15.0 - July 31, 2023

### Changes

* alpha for Chained ads on RV and Interstitials.
* Carousel and dynamic ads on RV.

## Audience Network SDK 6.14.0 - April 21, 2023

### Changes

* Performance and UX improvements

## Audience Network SDK 6.13.7 - Mar 8, 2023

### Changes

* Performance and UX improvements for Interstitial and Rewarded Video ad formats.

## Audience Network SDK 6.12.0 - Oct 3, 2022

### Changes

* Added Google AD\_ID permission
* Updated sample app intent filters with android:exported for security

## Audience Network SDK 6.11.0 - May 11, 2022

### Changes

* Performance improvements

## Audience Network SDK 6.10.0 - April 12, 2022

### Bug fixes

* Fixed deep links on Android 11+
* Fixed NullPointerException in native ads
* Fixed ConcurrentModificationException

### Changes

* Cache performance improvements

## Audience Network SDK 6.8.0 - October 11, 2021

### Changes

* Added a new method NativeAdsManager.nextNativeAd() to allow specifying a listener for Native Ads.
* Performance improvements

## Audience Network SDK 6.7.0 - September 13, 2021

### Changes

* Performance improvements

## Audience Network SDK 6.6.0 - August 23, 2021

### Bug fixes

* Fixed: incorrect width on native carousel ads

## Audience Network SDK 6.5.1 - June 28, 2021

### Bug fixes

* Fix `IllegalStateException` in Android MediaPlayer
* Fix bug preventing Rewarded Video ads closing

## Audience Network SDK 6.5.0 - May 17, 2021

### Changes

* Added support for Android 12 (Target API 31)
* Performance improvements

## Audience Network SDK 6.4.0 - April 20, 2021

### Changes

* Performance improvements

## Audience Network SDK 6.3.0 - February 22, 2021

### Changes

* Improving interstitial carousel designs and display alignments.

## Audience Network SDK 6.2.1 - February 3, 2021

### Bug fixes

* Fixed `/apex/com.android.art/lib64/libart.so (art::OatHeader::IsDebuggable() const+124)` on Android 11.
* Fixed `java.lang.IllegalStateException: Software rendering doesn't support hardware bitmaps`.

## Audience Network SDK 6.2.0 - October 26, 2020

### Bug fixes

* Mitigated Android OS bug that caused `pc 00000000000830f0 /apex/com.android.runtime/lib64/bionic/libc.so (abort+160)` crash.
* Fixed app crashes when WebView render process gone (implemented onRenderProcessGone() callback handling).
* Fixed `ClassNotFoundException when unmarshalling` crash.

### Change

* Interstitial and native improvements.

## Audience Network SDK 6.1.0 - September 28, 2020

### Change: Carousel design

* Improving designs of interstitial and native carousels

## Audience Network SDK 6.0.0 - September 1, 2020

### Removing deprecated APIs

**Alternative API available**

* ad.setAdListener(AdListener listener)
  * use ad.loadAd(ad.buildLoadAdConfig().withAdListener(listener).build())
* ad.loadAd(...) with parameters other than an appropriate LoadAdConfig
  * use ad.loadAd(loadAdConfig)
* ad.loadAdFromBid(String bidPayload)
  * use ad.loadAd(ad.buildLoadAdConfig().withBid(bidPayload).build())
* RewardedVideoAd.show(int appOrientation)
  * use rvAd.show(rvAd.buildShowAdConfig().withAppOrientation(orientation).build())
* RewardedVideoAd.setRewardData(RewardData rewardData)
  * use rvAd.loadAd(rvAd.buildLoadAdConfig().withRewardData(rewardData).build())
* AdSettings.setIsChildDirected(boolean)
  * use AdSettings.setMixedAudience(boolean)
* AdSettings.isChildDirected()
  * use AdSettings.isMixedAudience()
* com.facebook.ads.AdChoicesView
  * use com.facebook.ads.AdOptionsView
* com.facebook.ads.AdIconView
  * use com.facebook.ads.MediaView

**Removed completely**

* AdSettings.MultiprocessSupportMode
* AdSettings.setMultiprocessSupportMode(MultiprocessSupportMode)
* AudienceNetworkAds.isInAdsProcess(Context)
* AudienceNetworkAds.getAdsProcessName(Context)
* AdView.disableAutoRefresh()
* RewardedVideoAd.enableRVChain(boolean)

### Bug fixes

* Fixed net::ERR\_ACCESS\_DENIED in Interstitials and Rewarded Video on Android 10+
* Fixed countdown timers for carousels and some Rewarded Videos
* Fixing rare ANR exception after calling InterstitialAd.loadAd()

## Audience Network SDK 5.11.0 - August 3, 2020

### Bug fixes

* Paused native video ad no longer resumes automatically when user leaves and comes back to the app or locks and unlocks the screen.
* Fixed bug with scaling native templates that show videos and carousels.

## Audience Network SDK 5.10.1 - July 17, 2020

### Bug fixes

* Fixed java.lang.NoClassDefFoundError: com.facebook.ads.redexgen.X.8O and java.util.regex.PatternSyntaxException on some Android 4.x and 5.x builds.

## Audience Network SDK 5.10.0 - July 6, 2020

### Change: Data processing options

* We've released a Limited Data Use feature to give businesses more control over how their data is used in our systems and better support them with their [California Consumer Privacy Act (CCPA)](https://developers.facebook.com/docs/audience-network/support/faq/ccpa) compliance efforts.

## Audience Network SDK 5.9.1 - June 19, 2020

### Bug fixes

* Fixed Error: java.lang.IllegalStateException: The specified child already has a parent.
* Fixed missing onAdClicked() callback for some ads.
* Fixed Error: java.lang.NoClassDefFoundError: com.facebook.ads.redexgen.X.Ld.

## Audience Network SDK 5.9.0 - May 11, 2020

### Change: Performance Improvements

* Ad loading time has been improved.

### Bug fixes

* Fixed video autoplay for Native, video now starts for MediaView reload.

## Audience Network SDK 5.8.0 - March 30, 2020

### Change: UI improvements

* Updated designs for Rewarded Video.
* Updated designs for Interstitials.
* Updated design for Playable Ads.

### Change: Video playback improvements

* Improved video playback.

### Bug fixes

* Fixed NullPointerException during SDK initialisation.
* Server-side rewarded video validation callbacks are now triggered as expected.

## Audience Network SDK 5.7.1 - February 25, 2020

### Bug fixes

* Fixed java.lang.VerifyError: com/facebook/ads/redexgen/X/0n on some Android 4.x builds

## Audience Network SDK 5.7.0 - February 17, 2020

### Change: Interstitial Improvements

* Interstitial design improvements.

### Bug fixes

* Interstitials and rewarded videos will start playing on mute by default.

## Audience Network SDK 5.6.1 - January 12, 2020

### Bug fixes and changes

* Fixed: Issue with clicks in Native Video Ads.
* Fixed: NPE in RewardedVideo.
* Fixed: SDK debugger and test device hash logs.
* Fixed: ConcurrentModificationException.

## Audience Network SDK 5.6.0 - October 28, 2019

### New: Flexible API

Launched a new flexible API for all ad formats. This allows all custom parameters for loading and showing ads to be specified using a builder object, which can be obtained through `Ad.buildLoadConfig()` method call. The old API will still be supported in the near future, but will eventually be removed.

```
IntersitialAd ad = new InterstitialAd(Context, String);
ad.loadAd(ad.buildLoadConfig() // LoadConfigBuilder
.withBid(String)
.withListener(AdListener)
.withCacheFlags(CacheFlags)
.build()); // builds LoadConfig
```

### Change: Networking And Caching Improvements

Changes to networking and caching logic to improve their performance.

### Change: Mixed Audience Flag

We have changed the flag for the label for Mixed Audiences, from `isChildDirected` to `MixedAudience`. More information on Mixed Audiences and COPPA can be found here: [/docs/audience-network/coppa](https://developers.facebook.com/documentation/audience-network/optimization/best-practices/coppa)

### Bug fixes and changes

* Fixed: Playable ads no longer freeze on the intro card, which prevented ads from showing, and locking the user's screen.
* Fixed: Playable ads failed to render, showing HTML source code instead of ad assets.
* Fixed: Orientation issues with landscape screenshots on RV end cards.

## Audience Network SDK 5.5.0 - August 19, 2019

### Added

* Native Banner Icon Caching - a new API, `withPreloadedIconView`, allowing optional pre-caching of icon assets for native ads. A width and height must be specified.

```
NativeAdBase
.buildLoadAdConfig() // NativeAdBase.LoadAdConfigBuilder
.withBidPayload(String)
.withCacheFlags(MediaCacheFlags)
.withPreloadedIconView(int w, int h)
.loadAd();
```

* Cache improvement - increased cache reliability by reducing number of caching errors.
* Interstitial & Rewarded Video optimizations
* You will now receive a warning to the console instead of an error message if you:
* Make a secondary `loadAd()` request to an ad object if there is another request already loading or make a secondary `showAd()` request to an ad object if there is already an ad on screen.

### Fixed

* Fixes for playable ads.
* Speaker button on video interstitials could become unresponsive on device rotation.
* Sound could be heard on Rewarded Video end card.
* Rewarded Video ads will no longer lock screens on OPPO devices.

## Audience Network SDK 5.4.1 - July 1, 2019

### Added

* Sample screen in AdUnitsSample for NativeBanner with ImageView

### Fixed

* Fixed NPE in NativeBanner with ImageView
* Fixed issue with dex loading
* Fixed NPE in RewardedVideo
* SDK won't crash if app is not hardware accelerated

## What's New in 5.4.0

* `ImageView` now interchangeable with `MediaView` for `NativeBannerAd`
* File cache improvements
* Improved SDK security
* Kotlin ad sample app
* Exoplayer dependency removed

### Change: `ImageView` with `NativeBannerAd`

Native Banner Ads can now be created with `ImageView`. New methods (see below) have been added to allow this. Note that using `MediaView` is still supported.

```
class NativeBannerAd {
/**
* Registers the given view as the container and the required ImageView as the Icon display
* for this NativeBannerAd to handle impressions and clicks.
* ImageView must be within the view passed as the container for this NativeBannerAd.
* Applies a click handler to the entire unit.
* @param view the View containing this NativeBannerAd for display
* @param iconView ImageView to display Icon for this NativeBannerAd
*
* @since 5.4
*/
public void registerViewForInteraction(View view, ImageView iconView);

/**
* Registers the given view as the container and the required ImageView as the Icon display
* for this NativeBannerAd to handle impressions and clicks.
* ImageView must be within the view passed as the container for this NativeBannerAd.
* Applies a click handler to the entire unit.
* @param view the View containing this NativeBannerAd for display
* @param iconView ImageView to display Icon for this NativeBannerAd
* @param clickableViews a list of all view elements that should handle taps on this unit
*
* @since 5.4
*/
public void registerViewForInteraction(
View view,
ImageView iconView,
@Nullable final List<View> clickableViews);
}
```

### New: File cache improvements on Android

Our Android SDK now uses a new cache for storing downloaded ads. This new cache is more reliable and should reduce the number of caching errors.

### New: Kotlin ad sample app

We now provide an example application that uses Meta Audience Network SDK in Kotlin.

### Change: Exoplayer Dependency Removed

Exoplayer is no longer a dependency of the SDK.

### Bug fixes and changes

* Fixed: Incorrect caching in Interstitial ads.
* Fixed: Playable ads are not shown in landscape mode for Interstitial/Rewarded Video ad format.
* Fixed: ANR on UI Thread.
* Fixed: Close icon larger than expected when fullscreen in `RecyclerView`.
* Change: loadAd no longer performs I/O in the UI thread for `NativeBannerAd`.

## Audience Network SDK 5.3.2 - July 1, 2019

### Fixed

* Fixed issue with dex loading
* Fixed NPE in RewardedVideo
* SDK won't crash if app is not hardware accelerated

## Audience Network SDK 5.3.1 - May 20, 2019

### Fixed

* Fixed application not responding issues.

## Audience Network SDK 5.3.0 - Apr 15, 2019

### Added

* The Android SDK no longer requires Android support library. Apps can freely upgrade to Android X or to different versions of the support library without affecting their SDK.
* `BidderTokenProvider.getBidderToken()` can now be called often and the bidder token is precomputed at startup so, once the SDK initializes, obtaining the bidder token should be faster than in previous versions, avoiding latency issues.
* The Android SDK now has a smaller method footprint. It now has around 800 methods vs over 8000 previously. This is useful mainly for single-dex publishers. The size of the Android SDK has also been reduced.
* The Android SDK now uses less upstream network traffic when communicating with Facebook servers.
* The SDK is now bundled differently to improve our security measures. We ship a separate asset that is a dex file with more code. Bytecode manipulation of this dex file is not allowed.
* New method (`isInitialized`) in `AudienceNetworkAds` that allows applications to test whether the SDK is initialized. This allows publishers to avoid double initialization.
* New method (`getAdsProcessName`) in `AudienceNetworkAds` that allows applications to check whether the current process is an internal SDK process (same as `isInAdsProcess` that was introduced in 5.1). For publishers who want more control over their apps' processes, this can be used to filter the process spawned by the ads SDK.
* `NativeAdViewAttributes` constructor now requires a Context object.

## Audience Network SDK 5.2.1 - Mar 14, 2019

### Fixed

* Fixed NPE during caching.
* Fixed NativeAdsManager isAdInvalidated() always return true
* Fixed ConcurrentModificationException

## Audience Network SDK 5.2.0 - Feb 20, 2019

### Added

* New native templates - an easier way to add Native Ads to your app.
* Added option to hide ad reporting icon from `AdOptionsView`.
* Added blur background to videos in `MediaView` (Native Ads).
* Interstitial design improvements.

## Audience Network SDK 5.1.2 - Feb 19, 2019

### Fixed

* Mitigated `Fatal Exception: android.util.AndroidRuntimeException: android.content.pm.PackageManager$NameNotFoundException: com.google.android.webview` Android bug.
* Fixed `Error: java.lang.RuntimeException: java.lang.Throwable: A WebView method was called on thread 'JavaBridge'. All WebView methods must be called on the same thread.` Exception.

## Audience Network SDK 5.1.1 - Jan 24, 2019

### Fixed

* When a Rewarded Video gets stuck at buffering or crashes, the end cards are presented and the reward is given to the user.

## Audience Network SDK 5.1.0 - Oct 31, 2018

### Added

* `AdOptionsView` for native ads which provides greater flexibility.
* Initialisation method to the SDK.
* Integration error mode setting, which will throw an exception in debug mode when the SDK has been used incorrectly.
* Added Playable Ad format in Interstitial Placements. Playable ads are a new interactive ad format that allows advertisers to offer a short preview of their game, app or brand before people can choose to download the app.

## Audience Network SDK 5.0.1 - Oct 3, 2018

### Fixed

* Fixed `Error: java.lang.RuntimeException: Unable to pause activity {com.your.app/com.facebook.ads.AudienceNetworkActivity}: java.lang.NullPointerException` for Carousel Interstitials.
* Fixed `java.lang.NoSuchMethodError: android.view.ViewTreeObserver.removeOnGlobalLayoutListener` Exception.
* Fixed `java.lang.IllegalStateException: The specified child already has a parent` Exception.

## Audience Network SDK 5.0.0 - Sep 7, 2018

### Added

* Important notes! In order to support Android P, please refer to [Android Network Security Config guide](https://developers.facebook.com/docs/audience-network/android-network-security-config)
* Added Playable Ad format in Rewarded Video Placements: Playable ads are a new interactive ad format that allows advertisers to offer a short preview of their game, app or brand before people can choose to download the app.
* Long videos now supported on Rewarded Video with skip option.
* New 'Report Ad' icon in Interstitials and Rewarded Video.
* New End cards for Rewarded Video.
* Make failOnCacheFailure default for Rewarded Video
* New design for Interstitial Ads.
* Interstitial Videos are now cached as default.
* Optional OnActivityDestroyed callback for Rewarded Video and Interstitial.

### Fixed

* Improved Interstitials cache implementation.
* Stop Instream Video automatically playing after skipping ad in our sample app.
* Fixed crashes when audioFocus changes.
* Stopped AdChoicesView from moving left when clicked multiple times.
* Mitigated IllegalStateException with MediaPlayer.
* Stopped NativeAd Template and NativeBannerAd Template from crashing the sample app.
* Added error codes for internal errors.
* Runtime Exception in MediaPlayer.hasSound
* Don't replay skipped Instream Video
* Fixed Null Pointer Exception DefaultMediaViewVideoRenderer.
* Fixed crash in AudienceNetworkActivity.
* Fixed RejectedExecution exception.
* Fixed issue for blocking of the main thread.

## Audience Network SDK 4.99.3 - Aug 16, 2018

### Fixed

* Fixed the horizontal vs vertical ad format mismatch, during bid time vs ad time.

## Audience Network SDK 4.99.1 - July 4, 2018

### Added

* Support ImageView for NativeAd's ad Icon.
* Added optional OnActivityDestroyed callback for Rewarded Video and Interstitial.

### Fixed

* Fixed a crash when audioFocus changes.
* Fixed AdChoicesView from moving left when clicked multiple times.
* Fixed IllegalStateException with MediaPlayer
* Fixed NativeAd Template and NativeBannerAd Template from crashing the sample app.

## Audience Network SDK 4.99.0 - June 12, 2018

### Added

* New Native Ad format, NativeBannerAd, which should now be used to display native ads with only the advertiser/app icon
* MediaView is now enforced for Native Ads
* New IconView is now enforced for Native Banner Ads
* Native Ads API Updates
* Added "advertiserName", "headline", "linkDescription", "sponsoredTranslation", "adTranslation", "promotedTranslation"
* Renamed "body" to "bodyText"
* Caching all media assets is now the default for NativeAd and NativeBannerAd (media for nativeAd are image / video and icon. Media for nativeBannerAds is icon).
* MediaCacheFlag now has only two options; All or NONE.
* added onMediaDownloaded() callback in NativeAdListener to notify when media has been successfully downloaded.
* Added (NativeAd / NativeBannerAd).downloadMedia method to download media on publisher's own.
* Exclude parent view group from clickable areas unless a publisher intentionally includes them to a list of clickableViews.

### Removed

* Removed "title" and "subtitle" from the Native Ads API

### Fixed

* Fixed a layout issue with blurring images.

## Audience Network SDK 4.28.2 - May 21, 2018

### Fixed

* NPE fixes
* Fixed a new crash due to locked database
* Fixed new OutOfMemory issues
* Fixed IllegalStateException in MediaPlayer
* Fixed Native Ad blinking when playing a video
* Fixed error when unregistering a view that has been gc'ed

## Audience Network SDK 4.28.1 - April 9, 2018

### Fixed

* NPE fixes
* Fixed crash when setting background on MediaView due to TextureView's not supporting it since Android Nougat
* Fixed crash due to locked database
* Fixed Out Of Memory issues
* Fixed an issue with ImagePlaceHolder not showing before a video ad starts
* Fixed an issue with an internal error being thrown when the X button was pressed on Rewarded Video
* Fixed an issue with onLoggingImpression() not called on Instream Video

### Removed

* Removed Android AppCompat Dependency

## Audience Network SDK 4.28.0 - March 5, 2018

### Added

* Publishers using Rewarded Video can now set their rewardData before or after the loadAd method.
* Added the tagView API which allows you to declare the role of views used to build a customised native experience in your app.
* Sponsored Text translation. Text is now localized to the user.
* Update Exoplayer to 2.4.2

### Fixed

* Moved all ad requests outside of the AsyncTask default serial executor
* NPE fixes
* Several logging fixes
* Fixed a memory leak
* Fixed crash when MediaPlayer was not initialised
* Navbar hidden on fullscreen
* Fixed database-related crash
* Fixed class loading errors for AsyncTask

## Audience Network SDK 4.27.1 - February 7, 2018

### Fixed

* Fixed crash due to using AppCompatImageView and AppCompatButton

## Audience Network SDK 4.27.0 - December 6, 2017

### Added

* New designs for interstitial Ads – native implementation - controlled server side for performance testing
* Made NativeAd.getAdChoicesText() method public to be used from Unity
* Added option for RV ads to be displayed in the app orientation when the device is locking orientation – The publisher will get this behavior if they call the show method with the app orientation:
  rewardedVideoAd.show(APP\_ORIENTATION);
* Exposed the video duration for Rewarded Video ad – publisher will need to call rewardedVideoAd.getVideoDuration() when the callback onAdLoaded is received

### Removed

* Remove pre-cache experiment for image and carousel interstitials, as the data shown bad results

### Fixed

* Reduce the time delay for onInterstitialDismissed and onRewardedVideoClosed callbacks being called
* Fixed IllegalStateException caused by the sensor listeners size that exceeds the maximum limit – affecting the Xiaomi devices
* Fixed one of issues when the In App Browser displays a Blank Page for certain ads
* Fixed issue with Interstitial video ad - Blank video shown when user returns from the website or play store on old OS versions
* Fixed bottom menu bar being cut in the NativeAdSample app, Template view

## Audience Network SDK 4.26.1 - October 25, 2017

### Fixed

* Fixed crash due to locked database

## Audience Network SDK 4.26.0 - September 14, 2017

### Added

* Added CTA button in the fullscreen native video ad experience
* Added publisher control for caching interstitial videos ads(by using interstitialAd.loadAd(EnumSet.of(CacheFlag.VIDEO));)
* Enabled demo ad test types on AdUnitsSample and NativeAdsSample apps
* Added publisher control to make RewardedVideoAd load fail if the video caching fails(by using rewardedVideoAd.loadAd(true);)
* Added control for us to test caching for interstitial simple image and interstitial carousel ads
* Added alpha API for App Bidding

### Modified

### Fixed

* Fixed multiple thread creation on native ad
* Fixed video caching failures on particular devices
* Fixed Exoplayer issue with interstitial video ad playing in the background
* Fixed MediaPlayer issue with video auto-playing when user pauses the fullscreen native video ad experience
* Fixed video completion logging for Rewarded Video
* Fixed divide by zero exception on interstitial video ads
* Destroy all the resources when we call nativeAd.destroy() method
* Fixed crashes on carousel ads on screen autorotation
* Fixed NPE in video view renderer
* Fixed memory leak in video ads
* Fixed browser session logging and duplicated clicks for interstitial video ads
* Fixed click logging on faulty webview versions for interstitial display and carousel ads

## Audience Network SDK 4.25.0 - July 26, 2017

### Added

* Use Exoplayer for video ads instead of Mediaplayer

### Modified

* Updated Google Play Service and support library dependency versions

### Fixed

* Fixed crash when interacting with the screen after rewarded video finishes and before showing the endcard
* Fixed no fill on the very first impression when advertising id hasn't been retrieved yet
* Exoplayer doesn't restart video anymore after rotation on Interstitials
* Fixed crash on old Android devices (below 4.2) for video interstitial ads
