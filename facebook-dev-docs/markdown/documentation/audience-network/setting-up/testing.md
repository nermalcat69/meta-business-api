---
title: "Add Rewarded Video Ads to a Unity App"
source_url: https://developers.facebook.com/documentation/audience-network/setting-up/testing
---

# Add Rewarded Video Ads to a Unity App

Updated: Jun 30, 2026

The Audience Network allows you to monetize your Android and iOS apps with Facebook ads. Rewarded video ads are a full screen experience where users opt-in to view a video ad in exchange for something of value, such as virtual currency, in-app items, exclusive content, and more. The ad experience is a short video and an end card with a call to action. Upon completion of the full video, you will receive a callback to grant the suggested reward to the user.

Ensure you have completed the Audience Network [Getting Started](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup) and [Unity Getting Started](https://developers.facebook.com/documentation/audience-network/setting-up/platform-steup/unity/add-sdk) guides before you proceed.

## Rewarded Video Ads Steps

#### [Step 1: Initializing Rewarded Video Ads](https://developers.facebook.com/documentation/audience-network/setting-up/testing#implementation)

#### [Step 2: Adding Callback Events](https://developers.facebook.com/documentation/audience-network/setting-up/testing#callback)

#### [Step 3: Load an Ad](https://developers.facebook.com/documentation/audience-network/setting-up/testing#load)

#### [Step 4: Showing the Ad](https://developers.facebook.com/documentation/audience-network/setting-up/testing#showing)

## Step 1: Initializing Rewarded Video Ads

The first step toward displaying a rewarded video ad is to create an `RewardedVideoAd` object in a C# script attached to a `GameObject`.

```
...
using AudienceNetwork;
...

public class RewardedVideoAdTest : MonoBehaviour
{
    public void LoadRewardedVideo()
    {
        // Create the rewarded video unit with a placement ID (generate your own on the Facebook app settings).
        // Use different ID for each ad placement in your app.
        this.rewardedVideoAd = new RewardedVideoAd("YOUR_PLACEMENT_ID");

        this.rewardedVideoAd.Register(this.gameObject);

        // Set delegates to get notified on changes or when the user interacts with the ad.
        this.rewardedVideoAd.RewardedVideoAdDidLoad = (delegate() {
            Debug.Log("RewardedVideo ad loaded.");
            this.isLoaded = true;
        });
        this.rewardedVideoAd.RewardedVideoAdDidFailWithError = (delegate(string error) {
            Debug.Log("RewardedVideo ad failed to load with error: " + error);
        });
        this.rewardedVideoAd.RewardedVideoAdWillLogImpression = (delegate() {
            Debug.Log("RewardedVideo ad logged impression.");
        });
        this.rewardedVideoAd.RewardedVideoAdDidClick = (delegate() {
            Debug.Log("RewardedVideo ad clicked.");
        });

        this.rewardedVideoAd.RewardedVideoAdDidClose = (delegate() {
            Debug.Log("Rewarded video ad did close.");
            if (this.rewardedVideoAd != null) {
                this.rewardedVideoAd.Dispose();
            }
        });

        // Initiate the request to load the ad.
        this.rewardedVideoAd.LoadAd();
    }
}
```

The constructor for an `RewardedVideoAd` has the following parameters:

* `placementId` - The Audience Network placement ID for this rewarded video ad unit.

## Step 2: Adding Callback Events

Next, you can implement a few callbacks to subscribe to the life cycle events of the ad. Listen for these events by registering a delegate for the event, as shown below in the example:

```
...
// Set delegates to get notified on changes or when the user interacts with the ad.
this.rewardedVideoAd.RewardedVideoAdDidLoad = (delegate() {
    Debug.Log("RewardedVideo ad loaded.");
    this.isLoaded = true;
});
this.rewardedVideoAd.RewardedVideoAdDidFailWithError = (delegate(string error) {
    Debug.Log("RewardedVideo ad failed to load with error: " + error);
});
this.rewardedVideoAd.RewardedVideoAdWillLogImpression = (delegate() {
    Debug.Log("RewardedVideo ad logged impression.");
});
this.rewardedVideoAd.RewardedVideoAdDidClick = (delegate() {
    Debug.Log("RewardedVideo ad clicked.");
});

this.rewardedVideoAd.RewardedVideoAdDidClose = (delegate() {
    Debug.Log("Rewarded video ad did close.");
    if (this.rewardedVideoAd != null) {
        this.rewardedVideoAd.Dispose();
    }
});
...
```

### Callback for Ad Activity Destroyed in Unity Android

This is only relevant to Android.

Currently Unity games for Android only supports the main Unity `Activity` to have `launchMode` of `singleTask`. See [Unity document for the Android manifest⁠](https://docs.unity3d.com/Manual/android-manifest.html) and the [Android document for activity⁠](https://developer.android.com/guide/topics/manifest/activity-element).

Because we use `Activity` to show `Interstitial` and `Rewarded Video` ads, the ad activity could be destroyed without being properly closed when a user backgrounds an app and then relaunch it using the icon - and not the app switcher. You can use the following callbacks and check if the ad was closed by the user:

For Interstitial:

```
        this.interstitialAd.interstitialAdDidClose = (delegate() {
            Debug.Log("Interstitial ad did close.");
            this.didClose = true;
            if (this.interstitialAd != null) {
                this.interstitialAd.Dispose();
            }
        });

#if UNITY_ANDROID
        /*
         * Only relevant to Android.
         * This callback will only be triggered if the Interstitial activity has
         * been destroyed without being properly closed. This can happen if an
         * app with launchMode:singleTask (such as a Unity game) goes to
         * background and is then relaunched by tapping the icon.
         */
        this.interstitialAd.interstitialAdActivityDestroyed = (delegate() {
            if (!this.didClose) {
                Debug.Log("Interstitial activity destroyed without being closed first.");
                Debug.Log("Game should resume.");
            }
        });
#endif
```

For Rewarded Video:

```
        this.rewardedVideoAd.rewardedVideoAdDidClose = (delegate() {
            Debug.Log("Rewarded video ad did close.");
            this.didClose = true;
            if (this.rewardedVideoAd != null) {
                this.rewardedVideoAd.Dispose();
            }
        });

#if UNITY_ANDROID
        /*
         * Only relevant to Android.
         * This callback will only be triggered if the Rewarded Video activity
         * has been destroyed without being properly closed. This can happen if
         * an app with launchMode:singleTask (such as a Unity game) goes to
         * background and is then relaunched by tapping the icon.
         */
        this.rewardedVideoAd.rewardedVideoAdActivityDestroyed = (delegate() {
            if (!this.didClose) {
                Debug.Log("Rewarded video activity destroyed without being closed first.");
                Debug.Log("Game should resume. User should not get a reward.");
            }
        });
#endif
```

## Step 3: Load an Ad

Once the `RewardedVideoAd` is instantiated, the next step is to load an ad. That’s done by calling the `loadAd` method.

In the example shown above, here’s how to initiate the loading of the ad:

```
...
this.rewardedVideoAd.LoadAd();
...
```

## Step 4: Showing the Ad

Finally, after the ad is loaded, you can call the `Show` method to render the rewarded video ad on the screen. For example you can create a function for `ShowRewardedVideo`, and call this function when it’s time to show the ad:

```
public void ShowRewardedVideo()
{
    if (this.isLoaded) {
        this.rewardedVideoAd.Show();
        this.isLoaded = false;
    } else {
        Debug.Log("Ad not loaded. Click load to request an ad.");
    }
}
```

## Server Side Reward Validation

This is optional! You don’t have to implement server side reward validation to make use of rewarded video ads.
This is only required if you decide to validate rewards on your own server to improve the security by introducing a validation step at your own server.
Please provide your publisher end point to your Facebook representative in order to enable this feature.

### Overview

If you manage your user rewards server-side, then Facebook offers a solution for carrying this out securely by using a validation technique. Our server will communicate with a specified https endpoint to validate each ad impression and validate whether a reward should be granted.

* Audience Network SDK requests a rewarded video ad with the following parameters:
  * `placementId`: Audience Network Placement ID
  * `RewardData` - A `RewardData` object consists of `UserId` representing the user ID and `Currency` representing the actual in-game reward.
* Upon video completion, the Facebook Server relays these values to your specified end point, together with the App Secret and a Unique Transaction ID.
* Upon receipt, the server validates the request and responds as follows:
  * `200 response`: request is valid and the reward should be delivered
  * `Non 200 response`: request is not valid, and the reward should not be delivered.
* Once the video is complete, the end card is presented and one of the following events will fire.
  * `RewardedVideoAdDidSucceed` - triggered only if a 200 response was received during step 3.
  * `RewardedVideoAdDidFail` - triggered if a non 200 response was received during step 3.

An example of the URL which will hit your publisher end point, from Facebook’s server:
https://www.your\_end\_point.com/?token=APP\_SECRET&puid=USER\_ID&pc=REWARD\_ID&ptid=UNIQUE\_TRANSACTION\_ID

The workflow will look like this:
![Swimlane diagram of server-side reward validation flow across Client/SDK, Facebook Server, and Publisher Server lanes](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/21624464_133082333991738_1115107113589276672_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=zRjxXLas7MQQ7kNvwHdF2L6&_nc_oc=AdoaMpOJmg03VjjYKUGM-cD1tKGfRphs7_zmWtBXU2-3uHYXL7HJrpuadWzbj5OpVEj_EiUkF4xJhxQn19Q3rl8X&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=PoOGMnSEcFZn6Q6oxjisFg&_nc_ss=7b289&oh=00_AQD_RiGfaYLJCCd2TLpXK3y6yt_6fq9YL_WOlW4ZRUETGQ&oe=6A6096DC)

### Implementation

After initializing the rewarded video object, you will need to pass in a User ID and Reward amount into the rewarded ad data before loading an ad. This can be done with the `RewardData` class. Both User ID and Reward amount are strings. For example:

```
public class RewardedVideoAdTest : MonoBehaviour
{
  ...
  private bool isLoaded;
  private RewardedVideoAd rewardedVideoAd;

  public void LoadRewardedVideo()

    //Set the rewarded ad data
    RewardData rewardData = new RewardData();
    rewardData.UserId = "USER_ID";
    rewardData.Currency = "REWARD_ID";

    // Instantiate RewardedVideoAd with reward data
    this.rewardedVideoAd = new RewardedVideoAd("YOUR_PLACEMENT_ID", rewardData);
    this.rewardedVideoAd.Register(this.gameObject);

    // Set delegates to get notified on changes or when the user interacts with the ad.
    this.rewardedVideoAd.RewardedVideoAdDidLoad = (delegate() {
        Debug.Log("RewardedVideo ad loaded.");
        this.isLoaded = true;
    });
    this.rewardedVideoAd.RewardedVideoAdDidFailWithError = (delegate(string error) {
        Debug.Log("RewardedVideo ad failed to load with error: " + error);
    });
    this.rewardedVideoAd.RewardedVideoAdWillLogImpression = (delegate() {
        Debug.Log("RewardedVideo ad logged impression.");
    });
    this.rewardedVideoAd.RewardedVideoAdDidClick = (delegate() {
        Debug.Log("RewardedVideo ad clicked.");
    });
    this.rewardedVideoAd.RewardedVideoAdDidClose = (delegate() {
        Debug.Log("Rewarded video ad did close.");
        if (this.rewardedVideoAd != null) {
            this.rewardedVideoAd.Dispose();
        }
    });

    // For S2S validation you need to register the following two callback
    this.rewardedVideoAd.RewardedVideoAdDidSucceed = (delegate() {
        Debug.Log("Rewarded video ad validated by server");
    });
    this.rewardedVideoAd.RewardedVideoAdDidFail = (delegate() {
        Debug.Log("Rewarded video ad not validated, or no response from server");
    });

    this.rewardedVideoAd.loadAd();
  }
  ...
}
```

In order for your app to be notified whether the reward was validated or not, you will need to implement the `RewardedVideoAdDidSucceed` and `RewardedVideoAdDidFail` callbacks, in addition to the other callbacks for `RewardedVideoAd`.

After the ad is loaded, you can render the ad with the `Show` method like normal `RewardedVideoAd`.

Please note - the server validation callbacks might occur after the end card has been dismissed by a user. You should not deallocate the rewarded video object until after one of these callbacks.

## Next Steps

Follow our guides for integrating different Ad Formats in your Unity app:

* [Banner Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/unity/banner)
* [Interstitial Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/unity/interstitial)
* [Rewarded Video Ads](https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/unity/rewarded-video)
* [Native Ads](https://developers.facebook.com/docs/audience-network/unity/native)
* [Native Banner Ads](https://developers.facebook.com/docs/audience-network/unity/native-banner)

Once you’re ready to go live with your app and monetize, [submit your app for review](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup#onboarding) after ensuring it it complies with [Audience Network policies](https://developers.facebook.com/documentation/audience-network/optimization/best-practices/an-policy) and the [Facebook community standards⁠](https://www.facebook.com/communitystandards).
