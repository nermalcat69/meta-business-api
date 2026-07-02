---
title: "Optimize Your App Ad"
source_url: https://developers.facebook.com/documentation/app-ads/measuring-your-app-ad
---

# Optimize Your App Ad

Updated: Oct 23, 2024

## Optimizing for Installs

When picking your bid type, you can choose to have your campaign optimize for installs by selecting **App Installs** as your optimization method. This is the recommended approach if your goal is to maximize the reach of your application and your main criterion is reduced cost per new customer installation.

## Link Click Optimization

Not recommended. This option is provided as a fallback for small-scale advertisers who haven't installed the Facebook SDK. It is recommended that you install the SDK and use one of the more powerful optimization techniques.

## App Event Optimization

App event optimization is the ability to display mobile app install ads to people likely to take a specific action in your app. The value of using app event optimization is that, beyond new installations for your app, you will also acquire people who are likely to take a specific action that is of value to your app or business. For example, if you are looking to acquire people most likely to make a purchase in your app, you can choose to run mobile app install ads that would optimize for the **purchases** event.

To use this feature, you must have [app events](https://developers.facebook.com/documentation/app-events) enabled.

This feature is charged on an impression basis, similar to how you are charged when you optimize for installs. The difference is that your ads reach people most likely to take the action you specify, not just the ones most likely to install your app.

You can use this feature in the [Ads Manager⁠](https://www.facebook.com/adsmanager/) tool or via the [API](https://developers.facebook.com/documentation/app-ads/measuring-your-app-ad#app-events-opt-via-api). In the Ads Manager, for **Optimization for Ad Delivery**, choose **App Events** and then choose an event from the **App Events** list. For details, see [available app events](https://developers.facebook.com/documentation/app-ads/measuring-your-app-ad#app-events-available).

![](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/240638551_388603156120333_9027381118539442970_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tKriG0iXfRgQ7kNvwG-GIrW&_nc_oc=AdqTLLcjyuTqkK53SW6QCbqCXBR6PSF272J75RgARNr9Gots3iVPV4No-kYQUfsYag_X8kPK3omwaILgkASSH6n8&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=GGuXarWRXUvpctOwjEGZkA&_nc_ss=7b289&oh=00_AQBi0ZFO8halYbYBItEm3CqHGDcBbeO6tQlwGpcClqPNJg&oe=6A60684B)

### Available App Events

You can optimize for any of the app events in the table that follows.

These are the only standard events supported. Other standard events are not supported.

| Event Name | Description |
| --- | --- |
| Achieve Level | Log this event when a person achieves specific levels you define within your application, business, or organization. |
| Add Payment Info | Log this event during the addition of customer payment information during a checkout process.  **Recommended Parameters**   * `content_category` * `content_ids` * `contents` * `currency` * `value` |
| Add to Cart | Log this event during the addition of an item to a shopping cart or basket (example: clicking an **Add to Cart** button on a website).  **Recommended Parameters**   * `content_ids`\* * `content_name` * `content_type`\* * `contents`\* * `currency` * `value`   \*Required parameters for [Advantage+ catalog ads⁠](https://www.facebook.com/business/ads/dynamic-ads). |
| Add to Wishlist | Log this event during the addition of items to a wishlist (example: clicking an **Add to Wishlist** button on a website).  **Recommended Parameters**   * `contentData` * `contentId` * `contentType` * `currency` |
| Complete Registration | Log this event during the submission of information in exchange for a service provided by your business (example: sign up for email subscription).  **Recommended Parameters**   * `content_name` * `currency` * `status` * `value` |
| Content View | Log this event during a telephone/SMS, email, chat, or other type of content between a customer and your business. |
| Initiate Checkout | Log this event at the start of a checkout process.  **Recommended Parameters**   * `content_category` * `content_ids` * `contents` * `currency` * `num_items` * `value` |
| Purchase | Log this event during the completion of a purchase, usually signified by receiving order/purchase confirmation or a transaction receipt  If you use Facebook to manage your in-app purchases, the purchase events are automatically logged.  **Required Parameters**   * `currency` * `value` **Recommended Parameters** * `content_ids`\* * `content_name` * `content_type`\* * `contents`\* * `num_items`   \*Required for Advantage+ catalog ads |
| Rate | Log this event during a rating of something within your app, business, or organization (example: rates a restaurant within a restaurant review app). |
| Search | Log this event during a search performed on your website, app or other property (example: product searches, travel searches).  **Recommended Parameters**   * `content_category` * `content_ids` * `contents` * `currency` * `search_string` * `value` |
| Spend Credits | Log this event during the completion of a transaction where people spend credits (example: in-app currency) specific to your business or application. |
| Start Trial | Log this event at the start of a free trial of a product or service you offer (example: trial subscription).  **Recommended Parameters**   * `currency` * `predicted_ltv` * `value` |
| Subscribe | Log this event at the start of a paid subscription for a product or service you offer.  **Recommended Parameters**   * `currency` * `predicted_ltv` * `value` |
| Tutorial Completion | Log this event during the completion of a tutorial. |
| Unlocked Achievement | Log this event during the completion of specific activities or actions you want to reward within your application, business or organization (refer a friend, complete your profile, etc.). |

### API

Optimize Mobile App Install campaigns for AppEvent by specifying `OFFSITE_CONVERSIONS` as an option. Ads will be delivered to people most likely to take actions such as purchasing products in your app after app install:

* Optimization Goal: Set to `OFFSITE_CONVERSIONS`
* Billing Event: Set to `IMPRESSIONS`
* Promoted Object: Set `custom_event_type` in the promoted object to the app event you want to optimize. You can only optimize on one app event at a time.
* Bid Amount: Set bid amount to the value you want to pay for a user to install AND perform the app event one or more times.

**Note that in addition to standard app events, custom events are also available.** Possible values for the `custom_event_type` in the Promoted Object are:

* `COMPLETE_REGISTRATION`
* `CONTENT_VIEW`
* `SEARCH`
* `RATE`
* `TUTORIAL_COMPLETION`
* `ADD_TO_CART`
* `ADD_TO_WISHLIST`
* `INITIATED_CHECKOUT`
* `ADD_PAYMENT_INFO`
* `PURCHASE`
* `LEAD`
* `LEVEL_ACHIEVED`
* `ACHIEVEMENT_UNLOCKED`
* `SPENT_CREDITS`

Example:

```
curl
-F "name=App Event Optimization Example"
-F "status=PAUSED"
-F "optimization_goal=OFFSITE_CONVERSIONS"
-F "billing_event=IMPRESSIONS"
-F "promoted_object={'application_id': {app_id}, 'object_store_url': '{appstore_url}', 'custom_event_type': 'PURCHASE'}"
-F "bid_amount=100"
-F "daily_budget=300"
-F "campaign_id={campaign_id}"
-F "targeting={'geo_locations':{'countries':['US','GB']}, 'page_types':['mobilefeed'], 'user_os':['ios']}"
-F "access_token={access_token}" "https://graph.facebook.com/<API_VERSION>/act_{act_id}/adset
```

## Custom App Event Optimization

You can now use custom events for app event optimization. If you already matched your custom app event to a standard app event, we recommend that you optimize directly for your custom event instead of the matched standard event. Learn more best practices for app event optimization.

Make sure your events adhere to Facebook's [Business Tools Terms⁠](https://www.facebook.com/legal/technology_terms) requirements and data policies. To comply with our [Facebook Business Tools Terms⁠](https://www.facebook.com/legal/technology_terms) and help protect your users' privacy, don't share sensitive user data with us when setting up events. Learn more about [sensitive data⁠](https://www.facebook.com/business/help/1057016521436966?id=188852726110565).

### API

To use App Event optimization with custom events, ensure your mobile app SDK implementation is sending valid custom events and your Ad Set has an optimization goal of `OFFSITE_CONVERSIONS`. While creating your ads, ensure to state the following:

* Optimization Goal: Set to `OFFSITE_CONVERSIONS`
* Billing Event: Set to `IMPRESSIONS`
* Promoted Object: Set `custom_event_type` to `OTHER` and `custom_event_str` to the name of the custom event
* Bid Amount: Set bid amount to the value you want to pay for a user to install AND perform the app event one or more times.

For example:

```
curl
-F "name=Custom Event Optimization Example"
-F "status=PAUSED"
-F "optimization_goal=OFFSITE_CONVERSIONS"
-F "billing_event=IMPRESSIONS"
-F "promoted_object={'application_id': {app_id}, 'object_store_url': '{appstore_url}', 'custom_event_type': 'OTHER', 'custom_event_str': {valid_custom_event}​}"
-F "bid_amount=100"
-F "daily_budget=300"
-F "campaign_id={campaign_id}"
-F "targeting={'geo_locations':{'countries':['US','GB']}, 'page_types':['mobilefeed'], 'user_os':['ios']}"
-F "access_token={access_token}" "https://graph.facebook.com/<API_VERSION>/act_{act_id}/adset
```

At this time, optimising for custom app events is only available in the App Installs objective.

## Value Optimization

You can choose to have your campaign optimize for people who are likely to generate the most revenue given period after making a purchase. A purchase event that generates a lot of revenue relative to its cost is considered "higher value" than one that generates less revenue relative to its cost. For more information, see [About Value Optimization in the Help Center⁠](https://www.facebook.com/business/help/296463804090290).

### API

Value Optimization via API is available on a limited basis to partners and advertisers that are on the allow list. Contact your Facebook representative if you want to use value optimization.

To use value optimization, ensure your mobile app SDK implementation is sending purchase events and their values. See the [App Events](https://developers.facebook.com/documentation/app-events) pages for additional detail. While creating your ads, remember the following:

* Optimization Goal: Set to `VALUE`
* Billing Event: Set to `IMPRESSIONS`
* Promoted Object: Set `custom_event_type` to `PURCHASE`
* Bid Amount: Set `is_autobid` to `true`
* Attribution Window: `7-day` or `1-day`

For example:

```
curl
-F "name=App Event Optimization Example"
-F "status=PAUSED"
-F "optimization_goal=VALUE"
-F "billing_event=IMPRESSIONS"
-F "promoted_object={'application_id': {app_id}, 'object_store_url': '{appstore_url}', 'custom_event_type': 'PURCHASE'}"
-F "is_autobid=true"
-F "daily_budget=300"
-F "campaign_id={campaign_id}"
-F "attribution_spec=[{'event_type': 'CLICK_THROUGH', 'window_days':'1'}]"
-F "targeting={'geo_locations':{'countries':['US','GB']}, 'publisher_platforms':['facebook'], 'device_platforms': ['mobile'], 'facebook_positions': ['feed'], 'user_os':['ios']}"
-F "access_token={access_token}" "https://graph.facebook.com/<API_VERSION>/act_{act_id}/adset
```

## Maximize Value of In-App Ad Impressions

App advertisers that monetize via in-app ads now have an easier way to find users that generate the highest value by engaging with ads in their apps, without any restriction on what mediation partner they use.

To be eligible to use this product, you will need to send your ad revenue data to Meta's AdImpression event using either the Facebook SDK, Conversions API for App Events, or your mobile measurement partner (MMP).

Refer to the [documentation here](https://developers.facebook.com/documentation/app-events/guides/maximize-in-app-ad-revenue) to learn more about this product.

## Optimizing for Video Views

**As of v3.3 of Marketing API we no longer support this optimization goal for App Ads.**
