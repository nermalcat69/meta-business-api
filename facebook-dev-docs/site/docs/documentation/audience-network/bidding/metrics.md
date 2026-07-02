---
title: "Bidding Checklist"
source_url: https://developers.facebook.com/documentation/audience-network/bidding/metrics
---

# Bidding Checklist

Updated: Oct 18, 2021

Make sure that you’ve completed all the following steps and checks before you start bidding:

## Integration

* Integrate the latest **Audience Network SDK**: ([Android](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/android/add-sdk) | [iOS](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/add-sdk) | [Unity](https://developers.facebook.com/documentation/audience-network/setting-up/platform-steup/unity/add-sdk)).
  * If you are using mediation, make sure that you integrate the latest Audience Network adapter in your build. For a list of our partners and links to their adapters go to our partners’ [documentation](https://developers.facebook.com/docs/audience-network/guides/bidding-with-partner-mediation#set-up-your-mediation-partner).
* If you’re using the Facebook SDK, integrate the latest **Facebook SDK adapter**: ([Android](https://developers.facebook.com/documentation/app-events/getting-started-app-events-android) | [iOS](https://developers.facebook.com/documentation/app-events/getting-started-app-events-ios) | [Unity](https://developers.facebook.com/documentation/app-events/unity)).
* Integrate your **mediation partner’s SDK** (check out the individual partners’ [documentation](https://developers.facebook.com/docs/audience-network/guides/bidding-with-partner-mediation#set-up-your-mediation-partner)).

Make sure you wait for the partner and Audience Network SDKs to finish initializing before sending a bid request. Not doing so can cause Bid Requests to be malformed when received by Audience Network, and appear as an Unknown platform in your dashboard (so they won't be filled).

* **iOS only:** Set the `setAdvertiserTrackingEnabled` flag ([Audience Network](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/advertising-tracking-enabled) | [Facebook](https://developers.facebook.com/documentation/app-events/guides/advertising-tracking-enabled)) - you’ll need to set it for both the Audience Network SDK and Facebook SDK if you are using both SDKs.
* **iOS only:** Add the `SKAdNetwork IDs` to your config file ([Audience Network](https://developers.facebook.com/documentation/audience-network/setting-up/platform-setup/ios/SKAdNetwork)).
* Read our [testing instructions](https://developers.facebook.com/documentation/audience-network/setting-up/testing/platform).

## After integration

* Need to check your bid token? Use the [Publisher Bid Token Debugger](https://developers.facebook.com/tools/biddertoken/debugger/) to verify the tokens that are sent in bid requests. The tool makes sure that the fields are correctly populated to get a bid response.
* Are you seeing Bid Requests in your dashboard? If not, have you input the Audience Network Placement ID into the Bidding section of your mediation dashboard?
* Do you have at least 3 ad networks in your bidding group to ensure you have competition for your impressions?
* Have you made sure that you have no CPM floors in your bidding groups that could affect your win rate?
