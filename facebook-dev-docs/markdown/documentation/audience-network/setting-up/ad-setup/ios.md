---
title: "Add Rewarded Interstitial Ads to an Android App"
source_url: https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/ios
---

# Add Rewarded Interstitial Ads to an Android App

Updated: Aug 18, 2022

The Audience Network allows you to monetize your Android apps with Facebook ads. Rewarded interstitial ads are a full screen experience which starts when users reach a natural break in a game, and which offers rewards in exchange for a user viewing the full ad. Users can opt-out at any time. The ad experience is 15-30 seconds and contains an end card with a call to action. Upon completion of the full video, you will receive a callback to grant the suggested reward to the user.

Ensure you have completed the Audience Network [Getting Started](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup) and [Android Getting Started](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/get-started) guides before you proceed.

## Step-by-Step

#### [Step 1: Initializing Rewarded Interstitial Ads in your Activity](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/ios#implementation)

#### [Step 2: Showing Rewarded Interstitial Ads in your Activity](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/ios#showing)

## Initialize the Audience Network SDK

This method was added in the Android Audience Network SDK version 5.1.

Explicit initialization of the Audience Network Android SDK is required for version `5.3.0` and greater. Please refer to [this document](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/initialize-sdk) about how to initialize the Audience Network Android SDK.

Before creating an ad object and loading ads, you should initialize the Audience Network SDK. It is recommended to do this at app launch.

```
public class YourApplication extends Application {
    ...
    @Override
    public void onCreate() {
        super.onCreate();
        // Initialize the Audience Network SDK
        AudienceNetworkAds.initialize(this);
    }
    ...
}
```

## Step 1: Initializing Rewarded Interstitial Ads in your Activity

Add the following code at the top of your Activity in order to import the Facebook Ads SDK:

```
import com.facebook.ads.*;
```

Then, initialize the rewarded video object, set the listener and load the video creative. The rewarded ad requires a `RewardedInterstitialAdListener` interface which implements the following methods in the sample code to handle various events. For example in your activity:

```
private final String TAG = YourActivity.class.getSimpleName();
    private RewardedInterstitialAd rewardedInterstitialAd;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        ...
        // Instantiate a RewardedInterstitialAd object.
        // NOTE: the placement ID will eventually identify this as your App, you can ignore it for
        // now, while you are testing and replace it later when you have signed up.
        // While you are using this temporary code you will only get test ads and if you release
        // your code like this to the Google Play your users will not receive ads (you will get
        // a no fill error).
        rewardedInterstitialAd = new RewardedInterstitialAd(this, "YOUR_PLACEMENT_ID");
        RewardedInterstitialAdListener rewardedInterstitialAdListener =
            new RewardedInterstitialAdListener() {
                @Override
                public void onError(Ad ad, AdError error) {
                    // Rewarded interstitial ad failed to load
                    Log.e(TAG, "Rewarded interstitial ad failed to load: " + error.getErrorMessage());
                }

                @Override
                public void onAdLoaded(Ad ad) {
                    // Rewarded interstitial ad is loaded and ready to be displayed
                    Log.d(TAG, "Rewarded interstitial ad is loaded and ready to be displayed!");
                }

                @Override
                public void onAdClicked(Ad ad) {
                    // Rewarded interstitial ad clicked
                    Log.d(TAG, "Rewarded interstitial ad clicked!");
                }

                @Override
                public void onLoggingImpression(Ad ad) {
                    // Rewarded Interstitial ad impression - the event will fire when the
                    // interstitial starts playing
                    Log.d(TAG, "Rewarded interstitial ad impression logged!");
                }

                @Override
                public void onRewardedInterstitialCompleted() {
                    // Rewarded Interstitial View Complete - the interstitial has been played to the end.
                    // You can use this event to initialize your reward
                    Log.d(TAG, "Rewarded interstitial completed!");

                    // Call method to give reward
                    // giveReward();
                }

                @Override
                public void onRewardedInterstitialClosed() {
                    // The Rewarded Interstitial ad was closed - this can occur during the interstitial
                    // by closing the app, or closing the end card.
                    Log.d(TAG, "Rewarded interstitial ad closed!");
                }
            };
        rewardedInterstitialAd.loadAd(
                rewardedInterstitialAd.buildLoadAdConfig()
                        .withAdListener(rewardedInterstitialAdListener)
                        .build());

        ...
    }
}
```

## Step 2: Showing Rewarded Interstitial Ads

#### Scenario 1: Immediately display the ad once it is loaded successfully. Modify the onAdLoaded() method above to display it as follows:

```
private RewardedInterstitialAd rewardedInterstitialAd;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        ...
        // Instantiate a RewardedInterstitialAd object.
        // NOTE: the placement ID will eventually identify this as your App, you can ignore it for
        // now, while you are testing and replace it later when you have signed up.
        // While you are using this temporary code you will only get test ads and if you release
        // your code like this to the Google Play your users will not receive ads (you will get
        // a no fill error).
        rewardedInterstitialAd = new RewardedInterstitialAd(this, "YOUR_PLACEMENT_ID");
        RewardedInterstitialAdListener rewardedInterstitialAdListener =
            new RewardedInterstitialAdListener() {
                ...
                @Override
                public void onAdLoaded(Ad ad) {
                    // Rewarded interstitial ad is loaded and ready to be displayed
                    Log.d(TAG, "Rewarded interstitial ad is loaded and ready to be displayed!");
                    rewardedInterstitialAd.show(
                        rewardedInterstitialAd.buildShowAdConfig()
                            .withAppOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED)
                            .build());
                }
                ...
            };

        rewardedInterstitialAd.loadAd(
                rewardedInterstitialAd.buildLoadAdConfig()
                        .withAdListener(rewardedInterstitialAdListener)
                        .build());

        ...
}
```

#### Scenario 2: Display the ad in a few seconds or minutes after it is successfully loaded. You should check whether the ad has been invalidated before displaying it.

In case of not showing the ad immediately after the ad has been **loaded**, the developer is responsible for checking whether or not the ad has been invalidated. Once the ad is successfully loaded, the ad will be valid for **60 mins**. You will **not** get **paid** if you are showing an **invalidated** ad. You should call `isAdInvalidated()` to validate the ad.

Follow the code below, but do not copy the code into your project since this is for example purposes only:

```
private RewardedInterstitialAd rewardedInterstitialAd;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        ...
        // Instantiate a RewardedInterstitialAd object.
        // NOTE: the placement ID will eventually identify this as your App, you can ignore it for
        // now, while you are testing and replace it later when you have signed up.
        // While you are using this temporary code you will only get test ads and if you release
        // your code like this to the Google Play your users will not receive ads (you will get
        // a no fill error).
        rewardedInterstitialAd = new RewardedInterstitialAd(this, "YOUR_PLACEMENT_ID");
        RewardedInterstitialAdListener rewardedInterstitialAdListener =
                new RewardedInterstitialAdListener() {
                    ...
                };
        rewardedInterstitialAd.loadAd(
                rewardedInterstitialAd.buildLoadAdConfig()
                        .withAdListener(rewardedInterstitialAdListener)
                        .build());

        // Here is just an example for displaying the ad with delay
        // Please call this method at appropriate timing in your project
        showAdWithDelay();
    }

    private void showAdWithDelay() {
        /*
         * Here is an example for displaying the ad with delay;
         * Please do not copy the Handler into your project
         */
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            public void run() {
                // Check if rewardedInterstitialAd has been loaded successfully
                if (rewardedInterstitialAd == null || !rewardedInterstitialAd.isAdLoaded()) {
                    return;
                }
                // Check if ad is already expired or invalidated, and do not show ad if that is the
                // case. You will not get paid to show an invalidated ad.
                if (rewardedInterstitialAd.isAdInvalidated()) {
                    return;
                }
                rewardedInterstitialAd.show(
                        rewardedInterstitialAd.buildShowAdConfig()
                                .withAppOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED)
                                .build()
                );
            }
        }, 1000 * 60 * 15); // Show the ad after 15 minutes
    }
```

If you are using the default Google Android emulator, you'll add the following line of code before loading a test ad:  
`AdSettings.addTestDevice("HASHED ID");`.

Use the hashed ID that is printed to logcat when you first make a request to load an ad on a device.

Genymotion and physical devices do not need this step. If you would like to test with real ads, please consult our [Testing Guide](https://developers.facebook.com/documentation/audience-network/setting-up/testing/platform).

Finally, clean up the object with its `destroy` method in your activity's `onDestroy` method. Note that you should also use the `destroy` method to clean up old ad objects before assigning it to a new instance to avoid memory leak.

```
@Override
    protected void onDestroy() {
        if (rewardedInterstitialAd != null) {
            rewardedInterstitialAd.destroy();
            rewardedInterstitialAd = null;
        }
        super.onDestroy();
    }
```

Videos ads in Audience Network requires the [hardware accelerated rendering⁠](https://developer.android.com/guide/topics/graphics/hardware-accel.html) to be enabled, otherwise you might experience a black screen in the video views. This applies to

* Videos creatives in Native Ads
* Videos creatives in Interstitials
* In-stream Video ads
* Rewarded Videos

Hardware acceleration is enabled by default if your Target API level is >=14 (Ice Cream Sandwich, Android 4.0.1), but you can also explicitly enable this feature at the application level or activity level.

## Application Level

In your Android manifest file, add the following attribute to the `<application>` tag to enable hardware acceleration for your entire application:

```
<application android:hardwareAccelerated="true" ...>
```

## Activity Level

If you only want to enable the feature for specific activities in your application, in your Android manifest file, you can add the following feature to the `<activity>` tag. The following example will enable the hardware acceleration for the `AudienceNetworkActivity` which is used for rendering interstitial ads and rewarded videos:

```
<activity android:name="com.facebook.ads.AudienceNetworkActivity" android:hardwareAccelerated="true" .../>
```

## Server Side Reward Validation

To make sure your app is notified whether the reward was validated or not, implement the `S2SRewardedInterstitialAdListener` interface.

This includes all of the events noted above in the `RewardedInterstitialAdListener` interface, as well as two additional events.

After initializing the rewarded video object, you will need to pass in a User ID and Reward amount into the rewarded ad data before loading an ad. Both User ID and Reward amount are strings. For example:

```
public void loadRewardedInterstitial() {
        // Instantiate a RewardedInterstitialAd object.
        rewardedInterstitialAd = new RewardedInterstitialAd(this, "YOUR_PLACEMENT_ID");

        // Implement S2SRewardedInterstitialAdListener instead of RewardedInterstitialAdListener
        RewardedInterstitialAdListener rewardedInterstitialAdListener =
                new S2SRewardedInterstitialAdListener() {
                    @Override
                    public void onRewardServerFailed() {
                        // Rewarded interstitial ad reward not validated or no response from server
                        Log.d(TAG, "Rewarded interstitial ad reward validation failed");
                    }

                    @Override
                    public void onRewardServerSuccess() {
                        // Rewarded interstitial ad reward validated server side
                        Log.d(TAG, "Rewarded interstitial ad reward validated!");
                    }
                    // Other methods from RewardedInterstitialAdListener
                    ...
                };
        // Instantiate RewardData object and include in load config
        RewardData rewardData = new RewardData("YOUR_USER_ID", "YOUR_REWARD");
        rewardedInterstitialAd.loadAd(
                rewardedInterstitialAd.buildLoadAdConfig()
                        .withRewardData(rewardData)
                        .withAdListener(rewardedInterstitialAdListener)
                        .build());

    }
```

Please note - the server validation callbacks might occur after the end card has been dismissed by a user. Do not deallocate the rewarded interstitial object until after one of these callbacks.

## Next Steps

* Once your app has a link, you can [configure Audience Network](https://developers.facebook.com/documentation/audience-network/bidding/partner-mediation/audience-network-setup) in Monetization Manager to get ad format placement IDs.
* Follow our guides for integrating different ad formats in your app:

  * [Banner and Medium Rectangle Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/android/banner)
  * [Native Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/android/native)
  * [Native Banner Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/android/native-banner)
  * [Interstitial Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/android/interstitial)
  * [Rewarded Video Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/android/rewarded-video)

* Relevant code samples in both Swift and Objective-C are available on our [GitHub sample app respository⁠](https://github.com/fbsamples/audience-network/tree/master/samples/android)
* [Test your ads integration](https://developers.facebook.com/documentation/audience-network/setting-up/testing) with your app.
* As soon as we receive a request for an ad from your app or website, we'll review it to make sure it complies with [Audience Network policies](https://developers.facebook.com/documentation/audience-network/optimization/best-practices/an-policy) and the [Facebook community standards⁠](https://www.facebook.com/communitystandards)
