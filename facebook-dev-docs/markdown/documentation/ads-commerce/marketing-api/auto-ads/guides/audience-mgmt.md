---
title: "Automotive Ads - Events"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt
---

# Automotive Ads - Events

Updated: Jun 24, 2026

Automotive ads use events that have a set of parameters (full list of event parameter details). You can use the Facebook pixel on your website and mobile app events in your Android app and iOS app.

## Standard and required events

* **Standard events** are actions that Meta recognizes and supports across ad products. This consistency in how key actions are named and categorized improves the ability to show your ads to the people in your audience who are most likely to take the actions that matter to your business. See the [full list and best practices for standard events⁠](https://www.facebook.com/business/help/402791146561655?helpref=faq_content).
* **Required events**: see the table below. The code sample is Pixel, Android, iOS for all required events.

| Event | When to Fire | Code Sample |
| --- | --- | --- |
| Search | On search result pages for vehicle/inventory searches | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#Search_Pixel) | [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#Search_Android) | [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#Search_iOS) |
| ViewContent | On web pages where you want to track views of key content. For example: vehicle detail pages, model pages, vehicle offers, or incentive pages. | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#ViewContent_Pixel) | [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#ViewContent_Android) | [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#ViewContent_iOS) |
| AddToWishlist | When someone saves, favorites, or shows interest in a specific vehicle listing | [Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#AddToWishlist_Pixel) | [Android](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#AddToWishlist_Android) | [iOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/audience-mgmt#AddToWishlist_iOS) |

## Facebook pixel (for websites)

**This guide assumes you already have a Facebook pixel installed. If not, see [Using Marketing API with pixel](https://developers.facebook.com/docs/marketing-api/audiences-api/pixel).**

Before you begin

* Make sure the pixel base code is already loaded when you fire an event.
* If you use a tag manager, make sure you include the tag that contains the pixel code on every page. The tag should appear before the tag that contains the pixel event code.
* Use the [Facebook Pixel Helper](https://developers.facebook.com/docs/facebook-pixel/pixel-helper) to validate your pixel implementation.

### Search Pixel Event

```
    // This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'Search', {  
      content_type: 'vehicle', // RECOMMENDED: If sent, it must be set to 'vehicle'  
      content_ids: ['123'], // RECOMMENDED: array of vehicle IDs  
      postal_code: '94025', // RECOMMENDED  
      country: 'United States', // RECOMMENDED. Don't use abbreviations.  
      make: 'Lexus', // RECOMMENDED  
      model: 'ES', // RECOMMENDED  
      year: '2017', // RECOMMENDED  
      state_of_vehicle: 'CPO', // RECOMMENDED  
      exterior_color: 'black', // RECOMMENDED  
      transmission: 'automatic', // RECOMMENDED  
      body_style: 'sedan', // RECOMMENDED  
      fuel_type: 'gasoline', // RECOMMENDED  
      drivetrain: 'awd', // RECOMMENDED  
      price: 1234.99, // RECOMMENDED, up to 2 decimals optional  
      currency: 'USD', // REQUIRED if price and preferred_price_range is used, currency has to be the same for both price and preferred_price_range  
      preferred_price_range: '[10000,20000]' // Optional up to two decimals, min,max  
});
```

### ViewContent Pixel Event

```
    // This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'ViewContent', {  
      content_type: 'vehicle', // RECOMMENDED: If sent, it must be set to 'vehicle'  
      content_ids: ['123'], // REQUIRED: array of vehicle IDs  
      postal_code: '94025', // RECOMMENDED  
      country: 'United States', // RECOMMENDED. Don't use abbreviations.  
      make: 'Lexus', // RECOMMENDED  
      model: 'ES', // RECOMMENDED  
      year: '2017', // RECOMMENDED  
      state_of_vehicle: 'CPO', // RECOMMENDED  
      exterior_color: 'black', // RECOMMENDED  
      transmission: 'automatic', // RECOMMENDED  
      body_style: 'sedan', // RECOMMENDED  
      fuel_type: 'gasoline', // RECOMMENDED  
      drivetrain: 'awd', // RECOMMENDED  
      price: 1234.99, // RECOMMENDED, up to 2 decimals optional  
      currency: 'USD', // REQUIRED if price and preferred_price_range is used  
      preferred_price_range: '[10000,20000]' // Optional up to two decimals, min,max  
});
```

### AddToWishlist Pixel Event

```
// This sample assumes the FB Pixel base code is already loaded  
  
fbq('track', 'AddToWishlist', {  
      content_type: 'vehicle', // RECOMMENDED: If sent, it must be set to 'vehicle'  
      content_ids: ['123'], // REQUIRED: array of vehicle IDs  
      postal_code: '94025', // RECOMMENDED  
      country: 'United States', // RECOMMENDED. Don't use abbreviations.  
      make: 'Lexus', // RECOMMENDED  
      model: 'ES', // RECOMMENDED  
      year: '2017', // RECOMMENDED  
      state_of_vehicle: 'CPO', // RECOMMENDED  
      exterior_color: 'black', // RECOMMENDED  
      transmission: 'automatic', // RECOMMENDED  
      body_style: 'sedan', // RECOMMENDED  
      fuel_type: 'gasoline', // RECOMMENDED  
      drivetrain: 'awd', // RECOMMENDED  
      price: 1234.99, // RECOMMENDED, up to 2 decimals optional  
      currency: 'USD', // REQUIRED if price and preferred_price_range is used  
      preferred_price_range: '[10000,20000]' // Optional up to two decimals, min,max  
});
```

## Mobile app events for Android

This guide assumes you have the Facebook SDK implemented in your Android mobile app. If not, see the [Android SDK](https://developers.facebook.com/docs/android). If you use a measurement partner, make sure they pass required events to Facebook.

### Search Android event

```
Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// RECOMMENDED: If sent, it must be set to 'vehicle'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "vehicle");

// RECOMMENDED: content ids - include eg top 5 search results
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "[\"123\", \"234\", \"345\", \"456\", \"567\"]"); // top search results

// RECOMMENDED: postal_code
parameters.putString("fb_postal_code", "94025");

// RECOMMENDED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: make
// Allows you to target people based on their search of a specific make
parameters.putString("fb_make", "Lexus");

// RECOMMENDED: model
// Allows you to target people based on their search of a specific make model
parameters.putString("fb_model", "ES");

// RECOMMENDED: year, in yyyy format
// Allows you to target people based on their search for vehicles manufactured from a specific year
parameters.putInt("fb_year", "2017");

// RECOMMENDED: state_of_vehicle
// Allows you to target people based on their search of specific type of vehicle
parameters.putString("fb_state_of_vehicle", "CPO");

// RECOMMENDED: exterior_color
parameters.putString("fb_exterior_color", "black");

// RECOMMENDED: transmission
parameters.putString("fb_transmission", "automatic");

// RECOMMENDED: body_style
// Allows you to target people based on their search of a vehicle body style
parameters.putString("fb_body_style", "sedan");

// RECOMMENDED: fuel_type
parameters.putString("fb_fuel_type", "gasoline");

// RECOMMENDED: drivetrain
parameters.putString("fb_drivetrain", "awd");

// RECOMMENDED: price
parameters.putInt("fb_price", 1234.99);

// RECOMMENDED: currency
parameters.putInt("fb_currency", 'USD');

// RECOMMENDED: preferred_price_range
parameters.putInt("fb_preferred_price_range", '[10000,20000]');

// Fire the 'Search' event on the search results page
logger.logEvent(AppEventsConstants.EVENT_NAME_SEARCHED,
  parameters

);
```

### ViewContent Android event

```
Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// REQUIRED: content id of the vehicle that is shown
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "123");

// RECOMMENDED: If sent, it must be set to 'vehicle'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "vehicle");

// RECOMMENDED: postal_code
parameters.putString("fb_postal_code", "94025");

// RECOMMENDED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: make
// Allows you to target people based on their search of a specific make
parameters.putString("fb_make", "Lexus");

// RECOMMENDED: model
// Allows you to target people based on their search of a specific make model
parameters.putString("fb_model", "ES");

// RECOMMENDED: year, in yyyy format
// Allows you to target people based on their search for vehicles manufactured from a specific year
parameters.putInt("fb_year", "2017");

// RECOMMENDED: state_of_vehicle
// Allows you to target people based on their search of specific type of vehicle
parameters.putString("fb_state_of_vehicle", "CPO");

// RECOMMENDED: exterior_color
parameters.putString("fb_exterior_color", "black");

// RECOMMENDED: transmission
parameters.putString("fb_transmission", "automatic");

// RECOMMENDED: body_style
// Allows you to target people based on their search of a vehicle body style
parameters.putString("fb_body_style", "sedan");

// RECOMMENDED: fuel_type
parameters.putString("fb_fuel_type", "gasoline");

// RECOMMENDED: drivetrain
parameters.putString("fb_drivetrain", "awd");

// RECOMMENDED: price
parameters.putInt("fb_price", 1234.99);

// RECOMMENDED: currency
parameters.putInt("fb_currency", 'USD');

// RECOMMENDED: preferred_price_range
parameters.putInt("fb_preferred_price_range", '[10000,20000]');

// Fire the 'ViewContent' event on the vehicle details or other specific content page
logger.logEvent(AppEventsConstants.EVENT_NAME_VIEWED_CONTENT,
  parameters

);
```

### AddToWishlist Android event

```
Bundle parameters = new Bundle();
// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY

// REQUIRED: content id of the vehicle that is added to wishlist
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_ID, "123");

// RECOMMENDED: If sent, it must be set to 'vehicle'
parameters.putString(AppEventsConstants.EVENT_PARAM_CONTENT_TYPE, "vehicle");

// RECOMMENDED: postal_code
parameters.putString("fb_postal_code", "94025");

// RECOMMENDED: country
parameters.putString("fb_country", "United States");

// RECOMMENDED: make
// Allows you to target people based on their search of a specific make
parameters.putString("fb_make", "Lexus");

// RECOMMENDED: model
// Allows you to target people based on their search of a specific make model
parameters.putString("fb_model", "ES");

// RECOMMENDED: year, in yyyy format
// Allows you to target people based on their search for vehicles manufactured from a specific year
parameters.putInt("fb_year", "2017");

// RECOMMENDED: state_of_vehicle
// Allows you to target people based on their search of specific type of vehicle
parameters.putString("fb_state_of_vehicle", "CPO");

// RECOMMENDED: exterior_color
parameters.putString("fb_exterior_color", "black");

// RECOMMENDED: transmission
parameters.putString("fb_transmission", "automatic");

// RECOMMENDED: body_style
// Allows you to target people based on their search of a vehicle body style
parameters.putString("fb_body_style", "sedan");

// RECOMMENDED: fuel_type
parameters.putString("fb_fuel_type", "gasoline");

// RECOMMENDED: drivetrain
parameters.putString("fb_drivetrain", "awd");

// RECOMMENDED: price
parameters.putInt("fb_price", 1234.99);

// RECOMMENDED: currency
parameters.putInt("fb_currency", 'USD');

// RECOMMENDED: preferred_price_range
parameters.putInt("fb_preferred_price_range", '[10000,20000]');

// Fire the 'AddToWishlist' event on the vehicle details or other specific content page
logger.logEvent(AppEventsConstants.EVENT_NAME_ADDED_TO_WISHLIST,
  parameters

);
```

## Mobile app events for iOS

This guide assumes you already have the Facebook SDK implemented in your iOS mobile app. If not, see the [iOS SDK](https://developers.facebook.com/docs/ios). If you use a measurement partner, make sure they pass required events to Facebook.

### Search iOS event

```
// Fire the 'Search' event on the search results page
[FBSDKAppEvents logEvent:FBSDKAppEventNameSearched

// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
  parameters:@{
    // RECOMMENDED: If sent, it must be set to 'vehicle'
    FBSDKAppEventParameterNameContentType : @"vehicle",
    // RECOMMENDED: content ids - include eg top 5 search results
    FBSDKAppEventParameterNameContentID : @"[\"123\", \"234\", \"345\", \"456\", \"567\"]",

    // RECOMMENDED: postal_code
    @"fb_postal_code" : @"94110",

    // RECOMMENDED: country
    @"fb_country" : @"US",

    // RECOMMENDED: make
    // Allows you to target people based on their search of a specific make
    @"fb_make" : @"Toyota",

    // RECOMMENDED: model
    // Allows you to target people based on their search of a specific make model
    @"fb_model" : @"Camry",

    // RECOMMENDED: year, in yyyy format
    @"fb_year" : @"2015",

    // RECOMMENDED: state_of_vehicle
    // Allows you to target people based on their search of specific type of vehicle
    @"fb_state_of_vehicle" : @"CPO",

    // RECOMMENDED: exterior_color
    @"fb_exterior_color" : @"black",

    // RECOMMENDED: transmission
    @"fb_transmission" : @"automatic",

    // RECOMMENDED: body_style
    // Allows you to target people based on their search of a vehicle body style
    @"fb_body_style" : @"Sedan",

    // RECOMMENDED: fuel_type
    @"fb_fuel_type" : @"gasoline",

    // RECOMMENDED: drivetrain
    @"fb_drivetrain" : @"awd",

    // RECOMMENDED: price
    @"fb_price" : @18000,

    // RECOMMENDED: currency
    @"fb_currency" : @"USD",

    // RECOMMENDED: preferred_price_range
    @"fb_preferred_price_range" : @"[10000,20000]",
    }
  ];
```

### ViewContent iOS event

```
// Fire the 'ViewContent' event on the search results page
[FBSDKAppEvents logEvent:FBSDKAppEventNameViewedContent

// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
  parameters:@{
    // REQUIRED: content ids for vehicle shown
    FBSDKAppEventParameterNameContentID : @"123",

    // RECOMMENDED: If sent, it must be set to 'vehicle'
    FBSDKAppEventParameterNameContentType : @"vehicle",

    // RECOMMENDED: postal_code
    @"fb_postal_code" : @"94110",

    // RECOMMENDED: country
    @"fb_country" : @"US",

    // RECOMMENDED: make
    // Allows you to target people based on their search of a specific make
    @"fb_make" : @"Toyota",

    // RECOMMENDED: model
    // Allows you to target people based on their search of a specific make model
    @"fb_model" : @"Camry",

    // RECOMMENDED: year, in yyyy format
    @"fb_year" : @"2015",

    // RECOMMENDED: body_style
    // Allows you to target people based on their search of a vehicle body style
    @"fb_body_style" : @"Sedan",

    // RECOMMENDED: state_of_vehicle
    // Allows you to target people based on their search of specific type of vehicle
    @"fb_state_of_vehicle" : @"CPO",

    // RECOMMENDED: exterior_color
    @"fb_exterior_color" : @"black",

    // RECOMMENDED: transmission
    @"fb_transmission" : @"automatic",

    // RECOMMENDED: fuel_type
    @"fb_fuel_type" : @"gasoline",

    // RECOMMENDED: drivetrain
    @"fb_drivetrain" : @"FWD",

    // RECOMMENDED: price
    @"fb_price" : 18000,

    }
  ];
```

### AddToWishlist iOS event

```
// Fire the 'AddToWishlist' event on the search results page
[FBSDKAppEvents logEvent:FBSDKAppEventNameAddedToWishlist

// IF YOU CHOOSE NOT TO USE A RECOMMENDED PARAM, THEN REMOVE IT, DON'T LEAVE IT EMPTY
  parameters:@{
    // REQUIRED: content id of vehicle added to wishlist
    FBSDKAppEventParameterNameContentID : @"123",

    // RECOMMENDED: If sent, it must be set to 'vehicle'
    FBSDKAppEventParameterNameContentType : @"vehicle",

    // RECOMMENDED: postal_code
    @"fb_postal_code" : @"94110",

    // RECOMMENDED: country
    @"fb_country" : @"US",

    // RECOMMENDED: make
    // Allows you to target people based on their search of a specific make
    @"fb_make" : @"Toyota",

    // RECOMMENDED: model
    // Allows you to target people based on their search of a specific make model
    @"fb_model" : @"Camry",

    // RECOMMENDED: year, in yyyy format
    @"fb_year" : @"2015",

    // RECOMMENDED: body_style
    // Allows you to target people based on their search of a vehicle body style
    @"fb_body_style" : @"Sedan",

    // RECOMMENDED: state_of_vehicle
    // Allows you to target people based on their search of specific type of vehicle
    @"fb_state_of_vehicle" : @"CPO",

    // RECOMMENDED: exterior_color
    @"fb_exterior_color" : @"black",

    // RECOMMENDED: transmission
    @"fb_transmission" : @"automatic",

    // RECOMMENDED: fuel_type
    @"fb_fuel_type" : @"gasoline",

    // RECOMMENDED: drivetrain
    @"fb_drivetrain" : @"FWD",

    // RECOMMENDED: price
    @"fb_price" : 18000,

    }
  ];
```

## Pixel and app event parameters

While each automotive advertiser may have slightly different goals or custom tracking needs on the website, the recommended parameters below are based on the most common actions and key performance indicators (KPIs) for automotive websites.

Parameters are subsets of a standard event that track additional information about each action. For example, if you're tracking a `ViewContent` event on a Vehicle Detail Page (VDP), you can use parameters to also capture information each time that VDP is viewed, such as the make, model, and year of the vehicle.

While parameters are optional for general pixel setup, there are a few specific parameters required for automotive ads. Add those parameters (at minimum) to make it easier to set up DAA.

### App event parameter specifications

* On mobile, the parameter names are different than for Facebook pixel. Often prepended by `fb_`, with a few exceptions, such as `content_ids` versus `fb_content_id`, `value` versus `_valueToSum`.
* When you send multiple values (for example, with `content_ids` or `content_type`) it provides a JSON-encoded array of values: `["value1", "value2"]`. **Note**: Do not concatenate values with a comma.

| Field and Type | Description |
| --- | --- |
| `event_name`  Type: string | **Required** for `Search`, `ViewContent`, `AddToWishlist`.  Predefined event names that allow you to measure the performance of your campaigns and capture intent from your audiences. |
| `content_ids`  Type: array of strings | **Required** for `ViewContent`, `AddToWishlist`. **Recommended** for `Search`.  Relevant ID as listed in your vehicle catalog.  Example: `['123', 456]` |
| `content_type`  Type: string | **Recommended** for `Search`, `ViewContent`, `AddToWishlist`.  Product or content type. Supported value: `value`. |
| `postal_code`  Type: string | **Recommended**.  Postal code for the vehicle location.  Example: `94112` |
| `country`  Type: string | **Recommended**.  Country name for the vehicle location.  Example: `New Zealand` |
| `make`  Type: string | **Recommended**.  Vehicle make/brand/manufacturer.  Example: `Ford`, `Toyota`, `Honda` |
| `model`  Type: string | **Recommended**.  Vehicle model.  Example: `F-150`, `Camry`, `Accord` |
| `year`  Type: integer | **Recommended**.  Year the vehicle was launched in `yyyy` format.  Example: `2013` |
| `state_of_vehicle`  Type: enum | **Recommended**.  Essential to know whether the vehicle is new or used. Supported values: `New`, `Used`, `CPO` |
| `mileage.value`  Type: integer | **Recommended**.  Vehicle mileage (in km or miles); zero (`0`) for new vehicles.  Example: `5000` |
| `mileage.unit`  Type: string | **Recommended**.  Mileage units in miles (`MI`) or kilometers (`KM`) |
| `exterior_color`  Type: string | **Recommended**.  Vehicle exterior color.  Example: `black`, `blue`, `white`, and so on |
| `transmission`  Type: enum | **Recommended**.  Vehicle transmission type. Supported values: `Automatic`, `Manual`, `Other` |
| `body_style`  Type: enum | **Recommended**.  Vehicle body style. Supported values: `Convertible`, `Coupe`, `Hatchback`, `Minivan`, `Truck`, `SUV`, `Sedan`, `Van`, `Wagon`, `Crossover`, `Other` |
| `fuel_type`  Type: enum | **Recommended**.  Vehicle fuel type. Supported values: `Diesel`, `Electric`, `Flex`, `Gasoline`, `Hybrid`, `Other` |
| `drivetrain`  Type: enum | **Recommended**.  Vehicle drivetrain. Supported values: `AWD`, `FOUR_WD`, `FWD`, `RWD`, `TWO_WD`, `Other` |
| `price`  Type: float | **Recommended**.  Vehicle price.  Example: `8000` |
| `preferred_price_range`  Type: [float (min), float (max)] | **Recommended**.  Vehicle price range.  Example: `[8000, 12000]` |
| `currency`  Type: string | **Recommended**.  Currency for the `price` and `price_range`. Use [ISO 4217⁠](https://www.iso.org/iso-4217-currency-codes.html) currency format, such as "USD". |
| `trim`  Type: string | **Recommended**.  Vehicle trim.  Example: `5DR HB SE` |
| `vin`  Type: string | **Recommended**.  Vehicle identification number. Maximum characters: 17  Example: `KL9CD9S99EC111111` |
| `interior_color`  Type: string | **Optional**.  Vehicle interior color.  Example: `Black`, `White`, `Blue`, and so on |
| `condition_of_vehicle`  Type: enum | **Optional**.  Vehicle physical condition. Supported values: `Excellent`, `Good`, `Fair`, `Poor`, `Other`. |
| `viewcontent_type`  Type: string | **Optional for `ViewContent`**.  Use `viewcontent_type` to differentiate between soft lead landing pages.  Example: `Model Page`, `Offers Page` |
| `search_type`  Type: string | **Optional for `Search`**.  Use `search_type` to differentiate other user searches (such as dealer lookup) from inventory search.  Example: `Dealer Locator` |
| `registration_type`  Type: string | **Optional for `CompleteRegistration`**.  Use `registration_type` to differentiate between different types of customer registrations on website.  Example: `Brochure request` |
