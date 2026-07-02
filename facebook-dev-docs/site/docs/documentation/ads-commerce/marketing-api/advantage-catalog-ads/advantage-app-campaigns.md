---
title: "Advantage+ Catalog Ads for Mobile Apps"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads/advantage-app-campaigns
---

# Advantage+ Catalog Ads for Mobile Apps

Updated: Jun 21, 2026

You can set up Advantage+ catalog ads on mobile with Facebook SDKs. You should incorporate deep linking and deferred deep linking into your app to send people who use your app directly to relevant content.

## Step 1: Set up the Facebook SDK for iOS or Android

Integrate the Facebook SDK for [iOS](https://developers.facebook.com/docs/ios/getting-started) or [Android](https://developers.facebook.com/docs/android/getting-started).

## Step 2: Set up mobile app events

On the web, use Meta Pixel events such as `ViewContent` for tracking event interactions. On mobile you can track the same events with App Events.

You must send the same three required events from your app as you do from your Pixel: `ViewContent`, `AddToCart`, and `Purchase`. Advantage+ catalog ads requires these events to work correctly.

| iOS Event | Android Event | Web Equivalent |
| --- | --- | --- |
| `FBSDKAppEventNameViewedContent` | `AppEventsConstants:: EVENT_NAME_VIEWED_CONTENT` | `ViewContent` |
| `FBSDKAppEventNameAddedToCart` | `AppEventsConstants:: EVENT_NAME_ADDED_TO_CART` | `AddToCart` |
| `[[FBSDKAppEvents shared] logPurchase:(double) currency:(NSString *) parameters:(NSDictionary *)];` | `AppEventsConstants:: EVENT_NAME_PURCHASED` | `Purchase` |

For example, a `ViewContent` event fires when someone views a product in an app:

Select language

Objective-CAndroid SDK

---

```
[[FBSDKAppEvents shared] logEvent:FBSDKAppEventNameViewedContent  
  valueToSum:54.23  
  parameters:@{  
    FBSDKAppEventParameterNameCurrency    : @"USD",  
    FBSDKAppEventParameterNameContentType : @"product",  
    FBSDKAppEventParameterNameContentID   : @"123456789"  
  }  
];
```

You can also provide a JSON array of values for product ID when an event occurs for multiple products. For example, you can send multiple products with the `Purchase` event.

Select language

Objective-CAndroid SDK

---

```
[[FBSDKAppEvents shared] logPurchase:54.23 currency : @"USD" parameters:@{  
  FBSDKAppEventParameterNameContentID   : @"['1234','5678']",  
  FBSDKAppEventParameterNameContentType : @"product"  
  }  
];
```

### Multiple content IDs

If you have multiple content IDs, you provide an escaped JSON array, for example:

```
"[\"1234\",\"5678\"]"
```

### Optional parameters

For every app event, you can send additional parameters; you should send them when someone makes a purchase:

| Name | Description |
| --- | --- |
| `_valueToSum`  string | **Optional.**  Value of the product or purchase amount |
| `fb_currency`  string | **Optional.**  Currency of the product or purchase amount |

### Using a Mobile Measurement Partner (MMP)

If you use an approved Mobile Measurement Partner (MMP) to report events to Facebook, you can adjust your implementation to also send the required events. While this process varies by MMP, typically it looks like this:

* Adjust your integration to report the [three required events to the MMP](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads/advantage-app-campaigns#mmprequiredevents), along with the required parameters.
* With your MMP, map your event names to the Facebook event names.
* [Test App Events](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads/advantage-app-campaigns#test-your-app-events).

### Required events for MMP

The following events are **required**:

| Name | Description |
| --- | --- |
| `fb_mobile_content_view` | When an Accounts Center account has viewed a product |
| `fb_mobile_add_to_cart` | When someone adds an item to the cart |
| `fb_mobile_purchase` | When someone purchases an item or items |

You must also send two additional parameters for Advantage+ catalog ads to function:

* The ID of the item viewed, added to cart or purchased
* Whether the ID is a `product` or `product_group`

The additional parameters available are:

| Name | Description |
| --- | --- |
| `fb_content_type`  string | Either `product` or `product_group` |
| `fb_content_id`  string | **Required.**  A string containing a JSON-encoded array of the retailer's product or product group IDs |
| `_valueToSum`  string | **Optional.**  Value of the product purchased |
| `fb_currency`  string | **Optional.**  Currency of the product or purchase amount |

**Note:** You should also send `_valueToSum` and `fb_currency` parameters when someone purchases items.

### Test your app events

To test if your integration works, use the [App Ads Helper](https://developers.facebook.com/tools/app-ads-helper/) to see the events and parameters reported to Facebook in realtime.

* Select an app.
* You will see two tools at the bottom of the page. Select **Test App Events**.
* There are two options: either see events being reported by you or by a specific Advertising ID. In most cases, selecting **Me** is sufficient. Make sure you have Facebook installed on your device and that you are logged in.
* As you perform actions in your app, events appear in the tool with their parameters.

![App Ads Helper Test App Events tool showing reported events and parameters in realtime](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/593590831_1378922897299694_8304576062689514792_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Vi-bUxu17lAQ7kNvwH9O2_K&_nc_oc=Adr1EdkKfc0pBLCEMCfqpvG6StXSOTE_9xzPGNdC7JqkjCqdqdCTWj7DQP_eQfXThz4xoztUZHCiUPw-IgpDTl8a&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=HObkqQWAJjsBnv42Q7Bzog&_nc_ss=7b289&oh=00_AQDpSGYPHJsysmqnL6O6nGFuUgCwNqgS9MUgfMUayqmklw&oe=6A6073B9)

You see these three event names if your integration is successful:

* `FB_MOBILE_CONTENT_VIEW`
* `FB_MOBILE_ADD_TO_CART`
* `FB_MOBILE_PURCHASE`

Learn more about [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads/getting-started-app-events-ios) and [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads/getting-started-app-events-android) app events.

To verify your app events function, you can check recent events in [Facebook Events Manager⁠](https://www.facebook.com/events_manager2).

## Step 3: Set up deep linking

By providing deep links in your product feed, anyone who interacts with your ad on Facebook can go directly to a specific location of your app. For instance, when someone clicks an ad in Facebook on mobile, they see the product in your mobile app. See [Deep Linking](https://developers.facebook.com/docs/app-ads/deep-linking) and [Verify Deep Linking](https://developers.facebook.com/tools/app-ads-helper) for more information.

### Fallback to web versus App Store

If you use deep links, you can specify fallback behavior if someone does not have your app installed. When you provide deep links in your product feed, people without your app see the web URL for the product in the ad.

Since your likely goal is to increase catalog sales, you probably want people to see product pages, rather than install your app. Therefore, we default to web URLs, though you can specify different behavior for more control. Set the fallback behavior to `applink_treatment` when you create your Advantage+ catalog ad and use one of these options:

| Name | Description |
| --- | --- |
| `web_only` | Always send someone to the given web URL. This overrides any deep links in your feed. |
| `deeplink_with_web_fallback` | If the app is installed and we have your corresponding deep links, send someone to your app. If one of these conditions is unfulfilled, send them to the website URL. |
| `deeplink_with_appstore_fallback` | If the app is installed and we have corresponding deep link information, send someone to the app. If the app is not installed, send them to the app store for the app. |

## Step 4: Set up product feed

Now you need to provide actual deep links for your Advantage+ catalog ads. See [Product Catalog, Deep Linking](https://developers.facebook.com/documentation/ads-commerce/catalog#deep-linking) for more information.

## Step 5: Track specs

To measure conversion events from both your website and mobile apps, make sure any Advantage+ catalog ads have the correct [Tracking Specs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/tracking-specs) set for these events:

| Event | Tracking Spec |
| --- | --- |
| `offsite_conversion` | `{ 'action.type': 'offsite_conversion', 'fb_pixel': FB_PIXEL_ID }` |
| `app_custom_event` | `{'action.type':'app_custom_event','application':APP_ID}` |
| `mobile_app_install` | `{'action.type':'mobile_app_install','application':APP_ID}` |

Facebook can then track any events occurring from an Advantage+ catalog ad, regardless of whether someone views your website or app. To set these tracking specs:

```
curl \
  -F 'tracking_spec=[
    {"action.type":["app_custom_event"],"application":["101"]},
    {"action.type":["offsite_conversion"],"offsite_pixel":["<PIXEL_ID>"]},
    {"action.type":["mobile_app_install"],"application":["101"]}
  ]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>
```
