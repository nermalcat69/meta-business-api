---
title: "Aggregated Event Measurement and Limitations of SKAdsNetwork"
source_url: https://developers.facebook.com/documentation/app-ads/resources/best-practices
---

# Aggregated Event Measurement and Limitations of SKAdsNetwork

Updated: Oct 5, 2023

Aggregated Event Measurement and limitations of SKAdsNetwork for iOS 14 and later devices.

## SKAdNetwork Limitations

For each Meta App ID, advertisers targeting iOS 14 and later device users can have 9 ad campaigns, spread across up to 9 ad accounts, and 5 ad sets.

### Ad Campaigns

* To create a SKAdNetwork campaign and promote an external app, you must follow these requirements:
  * The app being promoted must be an iTunes app — The `object_store_url` in `promoted_object` must point to an iTunes app.
  * The promoted object is required for SKAdNetwork or Aggregated Event Measurement campaigns.
  * The Ad Account used to create the campaign must have permission to advertise the app being promoted.
  * The app being promoted must have at least v8.0 of the Meta Business SDK. If you use a Mobile Measurement Partner SDK, make sure your SDK is also updated.
* You cannot create a SKAdNetwork campaign to promote an app if that app is already being promoted in another ad account.
* Once an SKAdNetwork Campaign is live, you cannot edit the promoted object or the SKAdNetwork flag.
* Your `buying_type` must always be `auction`.
* Bid strategy `TARGET_COST` is not available for [Campaign Budget Optimization](https://developers.facebook.com/docs/marketing-api/bidding/guides/campaign-budget-optimization) campaigns.
* Deferred Deep Linking is not available for new iOS14+ AKAdNetwork campaigns.
* You can't change the bundle ID, iPhone Store ID, or iPad Store ID for this app because one or more iOS 14+ campaigns are currently running.

### Ad Sets

* You must specify at least iOS 14 under `user_os`. If you provide an invalid value, you won't be able to create the ad set.
* If the ad set is created using the default targeting string, we will filter the target devices based on if the ad set is eligible for iOS 14+ devices.
* Bid strategy `TARGET_COST` is not available.
* [Cost Per Action billing](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/guides/cost-per-action-ads) is not available. Specifically, `billing_event` and `optimization_goal` cannot be both set to `APP_INSTALLS`.
* You must specify the `campaign_attribution` field. If you want to use Meta's Aggregated Event Measurement, then set this field to `AEM`. If you want to use Apple's SKAdNetwork, then this field should be set to `SKADNETWORK`.

### Ads

* iOS 14 App Ads can only be created on ad sets under SKAdNetwork campaigns.

### Insights

Meta may no longer be able to aggregate non-inline conversion metric values across iOS 14 and non-iOS 14 campaigns due to differences in attribution logic. Querying across iOS 14 and non-iOS 14 campaigns will result in no data getting returned for non-inline conversion metrics (i.e. app installs, purchases). Inline event metrics like impressions, link clicks, and video views, however, can still be aggregated.

Because iOS 14 campaigns rely on SKAdNetwork data and associated attribution logic, results for those campaigns can only be queried using the default or new unified attribution setting.

## Aggregated Event Measurement

Meta's Aggregated Event Measurement is a protocol that allows for measurement of web and app events from people using iOS 14.5 or later devices. Aggregated Event Measurement currently limits domains and mobile apps to 8 conversion events that can be configured and prioritized for Aggregated Event Measurement.

Visit our [Domain Verification guide](https://developers.facebook.com/documentation/sharing/domain-verification) to verify your domain ownership for Aggregated Event Measurement.

## Learn More

* [Aggregated Event Measurement⁠](https://www.facebook.com/business/help/721422165168355)
* [Event Priority⁠](https://www.facebook.com/business/help/193250612476055)
* [Value Sets⁠](https://www.facebook.com/business/help/378857770047703)
* [Value Optimization⁠](https://www.facebook.com/business/help/296463804090290?id=561906377587030)
* [Eligibility Requirements for Value Optimization⁠](https://www.facebook.com/business/help/571188993373447?id=561906377587030)
* [Set Up Value Optimization⁠](https://www.facebook.com/business/help/437932930561569?id=561906377587030)
