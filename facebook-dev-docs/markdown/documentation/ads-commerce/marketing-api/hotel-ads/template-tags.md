---
title: "Hotel Ads - Events"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags
---

# Hotel Ads - Events

Updated: May 21, 2026

Hotel Ads uses four events. Every event has a set of parameters (full list at **[event parameter details](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#parameter-details)**). Use the [Meta Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#meta-pixel) on your website, and mobile app events in your [Android app](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#android-app-events) and [iOS app](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#ios-app-events).

| Event | When to fire | Code Sample |
| --- | --- | --- |
| Search | On the hotel search results page | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#search-pixel-event), [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#search-android-event), [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#search-ios-event) |
| ViewContent | On the hotel details page | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#viewcontent-pixel-event), [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#viewcontent-android-event), [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#viewcontent-ios-event) |
| InitiateCheckout | When the user enters the payment screen | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#initiatecheckout-pixel-event), [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#initiatedcheckout-android-event), [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#initiatedcheckout-ios-event) |
| Purchase | On the booking confirmed page | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#purchase-pixel-event), [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#purchase-android-event), [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags#purchase-ios-event) |

## Meta Pixel for Websites

This guide assumes you already have a Meta Pixel installed. If not, see [Using Marketing API with the Meta Pixel](https://developers.facebook.com/docs/marketing-api/audiences-api/pixel).

Make sure the pixel base code is already loaded when you fire an event. If you use a tag manager, make sure you include the tag that contains the pixel code on every page. The tag should appear before the tag that contains the pixel event code. Use the [Meta Pixel Helper](https://developers.facebook.com/docs/facebook-pixel/pixel-helper) to validate your pixel implementation.

#### Search Pixel Event

```
```
// This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'Search', {  
  // Fire the 'Search' event on the search results page  
  
  // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY  
  
  // RECOMMENDED: set to 'hotel'  
  content_type: 'hotel',  
  
  // HIGHLY RECOMMENDED: checkin date  
  // Allows you to target people based on their travel dates (using a booking window)  
  // Improves the landing experience with travel dates filled in (using template tags)  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkin_date: '2018-04-01',  
  
  // HIGHLY RECOMMENDED: checkout date  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkout_date: '2018-04-05',  
  
  // RECOMMENDED: content ids - include eg top 5 search results  
  content_ids: '["123", "234", "345", "456", "567"]',  
  
  // REQUIRED: city, don't use abbreviations  
  city: 'New York',  
  
  // REQUIRED: region, don't use abbreviations  
  region: 'New York',  
  
  // REQUIRED: country, don't use abbreviations  
  country: 'United States',  
  
  // RECOMMENDED: number of adults  
  num_adults: 1,  
  
  // RECOMMENDED: number of children  
  num_children: 0  
});
```
```

#### ViewContent Pixel Event

```
```
// This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'ViewContent', {  
  // Fire the 'ViewContent' event on the hotel details page  
  
  // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY  
  
  // RECOMMENDED: set to 'hotel'  
  content_type: 'hotel',  
  
  // HIGHLY RECOMMENDED: checkin date  
  // Allows you to target people based on their travel dates (using a booking window)  
  // Improves the landing experience with travel dates filled in (using template tags)  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkin_date: '2018-04-01',  
  
  // HIGHLY RECOMMENDED: checkout date  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkout_date: '2018-04-05',  
  
  // REQUIRED: content id of hotel that is shown  
  content_ids: '123',  
  
  // RECOMMENDED: city, don't use abbreviations  
  city: 'New York',  
  
  // RECOMMENDED: region, don't use abbreviations  
  region: 'New York',  
  
  // RECOMMENDED: country, don't use abbreviations  
  country: 'United States',  
  
  // RECOMMENDED: number of adults  
  num_adults: 1,  
  
  // RECOMMENDED: number of children  
  num_children: 0  
});
```
```

#### InitiateCheckout Pixel Event

```
```
// This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'InitiateCheckout', {  
  // Fire the 'InitiateCheckout' event when the user enters the payment screen  
  
  // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY  
  
  // RECOMMENDED: set to 'hotel'  
  content_type: 'hotel',  
  
  // HIGHLY RECOMMENDED: checkin date  
  // Allows you to target people based on their travel dates (using a booking window)  
  // Improves the landing experience with travel dates filled in (using template tags)  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkin_date: '2018-04-01',  
  
  // HIGHLY RECOMMENDED: checkout date  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkout_date: '2018-04-05',  
  
  // REQUIRED: content id of hotel that being booked  
  content_ids: '123',  
  
  // RECOMMENDED: city, don't use abbreviations  
  city: 'New York',  
  
  // RECOMMENDED: region, don't use abbreviations  
  region: 'New York',  
  
  // RECOMMENDED: country, don't use abbreviations  
  country: 'United States',  
  
  // RECOMMENDED: number of adults  
  num_adults: 1,  
  
  // RECOMMENDED: number of children  
  num_children: 0  
});
```
```

#### Purchase Pixel Event

```
```
// This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'Purchase', {  
  // Fire the 'Purchase' event on the booking confirmed page  
  
  // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY  
  
  // RECOMMENDED: set to 'hotel'  
  content_type: 'hotel',  
  
  // HIGHLY RECOMMENDED: checkin date  
  // Allows you to target people based on their travel dates (using a booking window)  
  // Improves the landing experience with travel dates filled in (using template tags)  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkin_date: '2018-04-01',  
  
  // HIGHLY RECOMMENDED: checkout date  
  // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD  
  checkout_date: '2018-04-05',  
  
  // REQUIRED: content id of hotel that was booked  
  content_ids: '123',  
  
  // RECOMMENDED: city, don't use abbreviations  
  city: 'New York',  
  
  // RECOMMENDED: region, don't use abbreviations  
  region: 'New York',  
  
  // RECOMMENDED: country  
  country: 'United States',  
  
  // RECOMMENDED: number of adults  
  num_adults: 1,  
  
  // RECOMMENDED: number of children  
  num_children: 0,  
  
  // REQUIRED: total value of booking  
  value: 1200,  
  
  // REQUIRED: currency of booking  
  currency: 'USD'  
});
```
```

## Mobile App Events for Android

This guide assumes you have the Facebook SDK implemented in your Android mobile app. If not, see the [Android SDK](https://developers.facebook.com/docs/android). If you use a measurement partner, make sure they pass required events to Meta.

#### Search Android Event

```
Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// RECOMMENDED: set to 'hotel'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "hotel");

// RECOMMENDED: content ids - include eg top 5 search results
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "[\"123\", \"234\", \"345\", \"456\", \"567\"]"); // top search results

// HIGHLY RECOMMENDED: checkin date
// Allows you to target people based on their travel dates (using a booking window)
// Improves the landing experience with travel dates filled in (using template tags)
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkin_date", "2018-04-01");

// HIGHLY RECOMMENDED: checkout date
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkout_date", "2018-04-05");

// REQUIRED: city, don't use abbreviations
parameters.putString("fb_city", "New York");

// REQUIRED: region, don't use abbreviations
parameters.putString("fb_region", "New York");

// REQUIRED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: number of adults
parameters.putInt("fb_num_adults", 1);

// RECOMMENDED: number of children
parameters.putInt("fb_num_children", 0);

// Fire the 'Search' event on the search results page
logger.logEvent(
  AppEventsConstants.EVENT_NAME_SEARCHED,
  parameters
);
```

#### ViewContent Android Event

```
Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// RECOMMENDED: set to 'hotel'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "hotel");

// REQUIRED: content id of hotel that is shown
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "123");

// HIGHLY RECOMMENDED: checkin date
// Allows you to target people based on their travel dates (using a booking window)
// Improves the landing experience with travel dates filled in (using template tags)
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkin_date", "2018-04-01");

// HIGHLY RECOMMENDED: checkout date
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkout_date", "2018-04-05");

// RECOMMENDED: city, don't use abbreviations
parameters.putString("fb_city", "New York");

// RECOMMENDED: region, don't use abbreviations
parameters.putString("fb_region", "New York");

// RECOMMENDED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: number of adults
parameters.putInt("fb_num_adults", 1);

// RECOMMENDED: number of children
parameters.putInt("fb_num_children", 0);

// Fire the 'ViewContent' event on the hotel details page
logger.logEvent(
  AppEventsConstants.EVENT_NAME_VIEWED_CONTENT,
  parameters
);
```

#### InitiateCheckout Android Event

```
Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// RECOMMENDED: set to 'hotel'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "hotel");

// REQUIRED: content id of hotel that is being booked
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "123");

// HIGHLY RECOMMENDED: checkin date
// Allows you to target people based on their travel dates (using a booking window)
// Improves the landing experience with travel dates filled in (using template tags)
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkin_date", "2018-04-01");

// HIGHLY RECOMMENDED: checkout date
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkout_date", "2018-04-05");

// RECOMMENDED: city, don't use abbreviations
parameters.putString("fb_city", "New York");

// RECOMMENDED: region, don't use abbreviations
parameters.putString("fb_region", "New York");

// RECOMMENDED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: number of adults
parameters.putInt("fb_num_adults", 1);

// RECOMMENDED: number of children
parameters.putInt("fb_num_children", 0);

// Fire the 'InitiateCheckout' event when the user enters the payment screen
logger.logEvent(
  AppEventsConstants.EVENT_NAME_INITIATED_CHECKOUT,
  parameters
);
```

#### Purchase Android Event

```
// total value of booking
BigDecimal purchaseAmount = BigDecimal.valueOf(1200);

// REQUIRED: currency of booking
Currency currency = Currency.getInstance("USD");

Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// RECOMMENDED: set to 'hotel'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "hotel");

// REQUIRED: content id of hotel that was booked
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "123");

// HIGHLY RECOMMENDED: checkin date
// Allows you to target people based on their travel dates (using a booking window)
// Improves the landing experience with travel dates filled in (using template tags)
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkin_date", "2018-04-01");

// HIGHLY RECOMMENDED: checkout date
// use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
parameters.putString("fb_checkout_date", "2018-04-05");

// RECOMMENDED: city, don't use abbreviations
parameters.putString("fb_city", "New York");

// RECOMMENDED: region, don't use abbreviations
parameters.putString("fb_region", "New York");

// RECOMMENDED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: number of adults
parameters.putInt("fb_num_adults", 1);

// RECOMMENDED: number of children
parameters.putInt("fb_num_children", 0);

// Use the built-in SDK method when the booking is confirmed
logger.logPurchase(
  purchaseAmount,
  currency,
  parameters
);
```

## Mobile App Events for iOS

This guide assumes you already have the Facebook SDK implemented in your iOS mobile app. If not, see [iOS SDK](https://developers.facebook.com/docs/ios). If you use a measurement partner, make sure they pass the required events to Meta.

#### Search iOS Event

```
  // Fire the 'Search' event on the search results page
  [[FBSDKAppEvents shared] logEvent:FBSDKAppEventNameSearched

  // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
  parameters:@{

    // REQUIRED: DO NOT change this, must be set to 'hotel'
    FBSDKAppEventParameterNameContentType : @"hotel",

    // RECOMMENDED: content ids - include eg top 5 search results
    FBSDKAppEventParameterNameContentID : @"[\"123\", \"234\", \"345\", \"456\", \"567\"]",

    // HIGHLY RECOMMENDED: checkin date
    // Allows you to target people based on their travel dates (using a booking window)
    // Improves the landing experience with travel dates filled in (using template tags)
    // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
    @"fb_checkin_date" : @"2018-04-01",

    // HIGHLY RECOMMENDED: checkout date
    // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
    @"fb_checkout_date" : @"2018-04-15",

    // REQUIRED: city, don't use abbreviations
    @"fb_city" : @"New York",

    // REQUIRED: region, don't use abbreviations
    @"fb_region" : @"New York",

    // REQUIRED: country, don't use abbreviations
    @"fb_country" : @"United States",

    // RECOMMENDED: number of adults
    @"fb_num_adults" : @1,

    // RECOMMENDED: number of children
    @"fb_num_children" : @0
  }
];
```

#### ViewContent iOS Event

```
// Fire the 'ViewContent' event on the hotel details page
[[FBSDKAppEvents shared] logEvent:FBSDKAppEventNameViewedContent

    // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
    parameters:@{

      // REQUIRED: DO NOT change this, must be set to 'hotel'
      FBSDKAppEventParameterNameContentType : @"hotel",

      // REQUIRED: content id of hotel that is shown
      FBSDKAppEventParameterNameContentID : @"123",

      // HIGHLY RECOMMENDED: checkin date
      // Allows you to target people based on their travel dates (using a booking window)
      // Improves the landing experience with travel dates filled in (using template tags)
      // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
      @"fb_checkin_date" : @"2018-04-01",

      // HIGHLY RECOMMENDED: checkout date
      // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
      @"fb_checkout_date" : @"2018-04-15",

      // RECOMMENDED: city, don't use abbreviations
      @"fb_city" : @"New York",

      // RECOMMENDED: region, don't use abbreviations
      @"fb_region" : @"New York",

      // RECOMMENDED: country, don't use abbreviations
      @"fb_country" : @"United States",

      // RECOMMENDED: number of adults
      @"fb_num_adults" : @1,

      // RECOMMENDED: number of children
      @"fb_num_children" : @0
    }
];
```

#### InitiateCheckout iOS Event

```
// Fire the 'InitiateCheckout' event when the user enters the payment screen
[[FBSDKAppEvents shared] logEvent:FBSDKAppEventNameInitiatedCheckout

    // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
    parameters:@{

      // REQUIRED: DO NOT change this, must be set to 'hotel'
      FBSDKAppEventParameterNameContentType : @"hotel",

      // REQUIRED: content id of hotel that is shown
      FBSDKAppEventParameterNameContentID : @"123",

      // HIGHLY RECOMMENDED: checkin date
      // Allows you to target people based on their travel dates (using a booking window)
      // Improves the landing experience with travel dates filled in (using template tags)
      // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
      @"fb_checkin_date" : @"2018-04-01",

      // HIGHLY RECOMMENDED: checkout date
      // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
      @"fb_checkout_date" : @"2018-04-15",

      // RECOMMENDED: city, don't use abbreviations
      @"fb_city" : @"New York",

      // RECOMMENDED: region, don't use abbreviations
      @"fb_region" : @"New York",

      // RECOMMENDED: country, don't use abbreviations
      @"fb_country" : @"United States",

      // RECOMMENDED: number of adults
      @"fb_num_adults" : @1,

      // RECOMMENDED: number of children
      @"fb_num_children" : @0
    }
];
```

#### Purchase iOS Event

```
// Fire the 'Purchase' event when the booking is confirmed

// total value of booking
[[FBSDKAppEvents shared] logPurchase:1200

    // currency of booking
    currency:@"USD"

    // IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
    parameters:@{

      // REQUIRED: DO NOT change this, must be set to 'hotel'
      FBSDKAppEventParameterNameContentType : @"hotel",

      // REQUIRED: content id of hotel that is shown
      FBSDKAppEventParameterNameContentID : @"123",

      // HIGHLY RECOMMENDED: checkin date
      // Allows you to target people based on their travel dates (using a booking window)
      // Improves the landing experience with travel dates filled in (using template tags)
      // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
      @"fb_checkin_date" : @"2018-04-01",

      // HIGHLY RECOMMENDED: checkout date
      // use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
      @"fb_checkout_date" : @"2018-04-15",

      // RECOMMENDED: city, don't use abbreviations
      @"fb_city" : @"New York",

      // RECOMMENDED: region, don't use abbreviations
      @"fb_region" : @"New York",

      // RECOMMENDED: country, don't use abbreviations
      @"fb_country" : @"United States",

      // RECOMMENDED: number of adults
      @"fb_num_adults" : @1,

      // RECOMMENDED: number of children
      @"fb_num_children" : @0
    }
];
```

## Event Parameters Details

On mobile, the parameter names are different from those for the Meta Pixel. They are often prepended by `fb_`, with a few exceptions such as `content_ids` (which becomes `fb_content_id`) and `value` (which becomes `_valueToSum`).

When you send multiple values, for example with `content_ids` or `content_type`, provide a JSON encoded array of values: `'["value1", "value2"]'`. **Do not concatenate** values with a comma.

| Parameter Name and Type | Description |
| --- | --- |
| `checkin_date` (pixel)  `fb_checkin_date` (app)  type: string | **Highly recommended**.  The date the user is wanting to check-in to the hotel in the hotel’s time-zone. We accept dates in `YYYYMMDD`, `YYYY-MM-DD`, `YYYY-MM-DDThh:mmTZD` and `YYYY-MM-DDThh:mm:ssTZD`. When provided, you can use this in the ad using [template tags](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags) and target people based on their travel dates [using booking window in your audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads/audience-management).  Examples:   * `20180623` * `2018-06-23` * `2017-06-23T15:30GMT` * `2017-06-23T15:30:00GMT` |
| `checkout_date` (pixel)  `fb_checkout_date` (app)  type: string | **Highly recommended**.  The date the user is wanting to check-out from the hotel in the hotel’s time-zone. We accept the same date formats as listed for `checkin_date`. When provided, you can use this in the ad using [template tags](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags) and target people based on their travel dates [using booking window in your audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads/audience-management). |
| `content_ids` (pixel)  `fb_content_id` (app)  type: string or string[] | Recommended for `search`, **Required** for all others.  Any relevant ID(s) as listed in your travel catalog, e.g. for `ViewContent` event you might send the ID of the item presented, or for `Search` event you might send an array of IDs for the top search results.  Examples:   * `"1234"` * `'["1234", "2345", "3456"]'` |
| `content_type` (pixel)  `fb_content_type` (app)  type: string or string[] | **Recommended**.  Must be `hotel`. |
| `city` (pixel)  `fb_city` (app)  type: string | **Required** for `search`.  Provide the city of the location from user intent.  Example: `Auckland`. |
| `region` (pixel)  `fb_region` (app)  type: string | **Required** for `search`.  Provide the state/district/region of the location from user intent.  Example: `Manhattan` |
| `country` (pixel)  `fb_country` (app)  type: string | **Required** for `search`.  Provide the country of the location from user intent.  Example: `New Zealand` |
| `value` (pixel)  `_valueToSum` (app)  type: float | **Required** for `purchase`.  A total price of the booking (a number that quantifies the value of this event to the advertiser).  Example: `155` |
| `currency` (pixel)  `fb_currency` (app)  type: string | **Required** for `purchase`.  Currency for the `value`. Specified using ISO 4217 currency format.  Example: `USD` |
| `destination_ids` (pixel)  `fb_destination_ids` (app)  type: string or string[] | If you have a destination catalog, you can associate one or more destinations in your destination catalog with a specific hotel event. For instance, a particular hotel may be linked to a nearby museum and a nearby beach, both of which are destinations in the destination catalog.  Example: `'["dest2", "dest5", "dest8"]'` |
| `hotel_score` (pixel)  `fb_hotel_score` (app)  type: float | An indicator representing the relative value of this hotel to the advertiser compared to its other hotels.  Example: `3` |
| `num_adults` (pixel)  `fb_num_adults` (app)  type: string | Number of adults that will be staying. When provided, you can use these in the ad through [template tags](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags).  Example: `2`. |
| `num_children` (pixel)  `fb_num_children` (app)  type: int | Number of children that will be staying. When provided, you can use these in the ad through [template tags](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/template-tags).  Example: `2`. |
| `preferred_neighborhoods` (pixel)  `fb_preferred_neighborhoods` (app)  type: string[] | A list of preferred neighborhoods that a user is filtering for.  Example: `'["Brooklyn", "Manhattan"]'` |
| `preferred_price_range` (pixel)  `fb_preferred_price_range` (app)  type: [int (min), int (max)] | A tuple of minimum and maximum room rates that a user is filtering for.  Example `[100, 150]` |
| `preferred_star_ratings` (pixel)  `fb_preferred_star_ratings` (app)  type: [int (min), int (max)] | A tuple of minimum and maximum hotel star rating that a user is filtering for.  Example `[100, 150]` |
| `user_score` (pixel)  `fb_user_score` (app)  type: float | An indicator representing the relative value of this user to the advertiser.  Example: `50` |
