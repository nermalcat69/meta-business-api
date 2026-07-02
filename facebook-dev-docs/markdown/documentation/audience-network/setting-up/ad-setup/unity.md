---
title: "Add Rewarded Interstitial Ads to an iOS App"
source_url: https://developers.facebook.com/documentation/audience-network/setting-up/ad-setup/unity
---

# Add Rewarded Interstitial Ads to an iOS App

Updated: Aug 18, 2022

Rewarded interstitial ads are a full screen experience which starts when users reach a natural break in a game, and which offers rewards in exchange for a user viewing the full ad. Users can opt-out at any time. The ad experience is 15-30 seconds and contains an end card with a call to action. Upon completion of the full video, you will receive a callback to grant the suggested reward to the user.

Below are details on how to implement rewarded video ads from Audience Network on iOS.

# Set up the SDK

The Audience Network Rewarded Video format is now included in the public SDK. Rewarded video will be available for all gaming apps soon. If you don’t see Rewarded Video in Monetization Manager and you’re on the latest SDK, [apply now](mailto:publisherhelp@fb.com?subject=Publisher%20Application%20for%20Rewarded%20Video%20&body=Please%20add%20the%20following%20information%20for%20your%20application%3A%0D%0A%0D%0AApp%20id%20-%20from%20your%20Account%3A%0D%0ALink%20Appstore%3A%0D%0ADescription%20of%20what%20will%20be%20provided%20after%20watching%20the%20rewarded%20video%3A%0D%0A%0D%0APlease%20note%20that%20we%27ll%20review%20your%20application%20within%20the%20next%20weeks%20and%20come%20back%20to%20you%20if%20successful.).

Ensure you have completed the Audience Network [Getting Started](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup) and [iOS Getting Started](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/get-started) guides before you proceed.

## Implementation

Now, in your View Controller header file (or Swift file, if you are a Swift user), import `FBAudienceNetwork`, declare conformance to the `FBRewardedInterstitialAdDelegate`  protocol, and add an instance variable for the rewarded video ad unit

Select language

SwiftObjective-C

---

```
import UIKit  
import FBAudienceNetwork  
  
class ViewController: UIViewController, FBRewardedInterstitialAdDelegate  {  
  private var rewardedInterstitialAd: FBRewardedInterstitialAd?  
}
```

Add a function in your View Controller that initializes the rewarded interstitial ad object and caches the video creative ahead of the time you want to show it

Select language

SwiftObjective-C

---

```
override func viewDidLoad() {  
  super.viewDidLoad()  
  
// Instantiate an rewarded interstitial object.  
// NOTE: the placement ID will eventually identify this as your app. You can ignore it while you are testing  
// and replace it later when you have signed up.  
// While you are using this temporary code you will only get test ads and if you release  
// your code like this to the App Store your users will not receive ads (you will get a 'No Fill' error).  
let rewardedInterstitialAd = FBRewardedInterstitialAd(placementID: "YOUR_PLACEMENT_ID")  
rewardedInterstitialAd.delegate = self  
  
// For auto play video ads, it's recommended to load the ad at least 30 seconds before it is shown  
rewardedInterstitialAd.load()  
  
  self.rewardedInterstitialAd = rewardedInterstitialAd  
}
```

The ID that displays at `YOUR_PLACEMENT_ID` is a temporary ID for test purposes only.

If you use this temporary ID in your live code, your users will not receive ads (they will get a **No Fill** error). You must return here after testing and replace this temporary ID with a live Placement ID.

To find out how the generate a live Placement ID, refer to [Audience Network Setup](https://developers.facebook.com/documentation/audience-network/bidding/partner-mediation/audience-network-setup)

Now that you have added the code to load the ad, you can add functions which will handle various events.

*For example*:

* `rewardedInterstitialAdDidLoad` ensures your app is aware when the ad is cached and ready to be displayed
* `rewardedInterstitialAdVideoComplete` lets you know when to deliver your reward to the user after a completed video view

Select language

SwiftObjective-C

---

```
func rewardedInterstitialAdDidLoad(_ rewardedInterstitialAd: FBRewardedInterstitialAd) {  
  print("Video ad is loaded and ready to be displayed")  
}  
  
func rewardedInterstitialAd(_ rewardedInterstitialAd: FBRewardedInterstitialAd, didFailWithError error: Error) {  
  print("Rewarded Interstitial ad failed to load")  
}  
  
func rewardedInterstitialAdDidClick(_ rewardedInterstitialAd: FBRewardedInterstitialAd) {  
  print("Video ad clicked")  
}  
  
func rewardedInterstitialAdDidClose(_ rewardedInterstitialAd: FBRewardedInterstitialAd) {  
  print("Rewarded Interstitial ad closed - this can be triggered by closing the application, or closing the video end card")  
}  
  
func rewardedInterstitialAdVideoComplete(_ rewardedInterstitialAd: FBRewardedInterstitialAd) {  
  print("Rewarded Interstitial ad video completed - this is called after a full video view, before the ad end card is shown. You can use this event to initialize your reward")  
}
```

Finally, when you are ready to show the rewarded video ad you can call the following code within your own reward function.

Select language

SwiftObjective-C

---

```
private func showRewardedInterstitialAd() {  
  guard let rewardedInterstitialAd = rewardedInterstitialAd, rewardedInterstitialAd.isAdValid else {  
    return  
  }  
  rewardedInterstitialAd.show(fromRootViewController: self)  
}
```

The method to show a rewarded video ad includes an `animated` boolean flag which allows you to animate the presentation. By default it is set to `YES` / `true`, but you can override it.

When running on the simulator, test ads will be shown by default. To enable test ads on a device, add the following line of code before loading an ad: `AdSettings.addTestDevice(HASHED ID)`. Use the hashed ID that is printed to the log cat when you first make a request to load an ad on a device.

Optionally, you can add the following additional functions to handle the cases where the rewarded video ad will close or when the rewarded video impression is being captured:

Select language

SwiftObjective-C

---

```
func rewardedInterstitialAdWillClose(_ rewardedInterstitialAd: FBRewardedInterstitialAd) {  
  print("The user clicked on the close button, the ad is just about to close")  
}  
  
func rewardedInterstitialAdWillLogImpression(_ rewardedInterstitialAd: FBRewardedInterstitialAd) {  
  print("Rewarded Interstitial impression is being captured")  
}
```

## Next steps

* Once your app has a link on the App Store or Google Play Store, [configure Audience Network](https://developers.facebook.com/documentation/audience-network/bidding/partner-mediation/audience-network-setup) in Monetization Manager to get ad placement IDs.
* Follow the guides to implement [ad formats](https://developers.facebook.com/documentation/audience-network/ad-formats) in your app.

### See also

* Visit [our GitHub sample app repository⁠](https://github.com/fbsamples/audience-network/tree/master/samples/ios) to view sample code.
* View the [Audience Network policies](https://developers.facebook.com/documentation/audience-network/optimization/best-practices/an-policy) and the [Facebook community standards⁠](https://www.facebook.com/communitystandards) to ensure your app complies.
