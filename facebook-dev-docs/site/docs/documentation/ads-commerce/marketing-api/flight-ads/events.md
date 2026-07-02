---
title: "Flight Ads - Catalog & Feed"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events
---

# Flight Ads - Catalog & Feed

Updated: Jun 26, 2026

To promote your flight inventory on Facebook, you must share information about your flights with Facebook. You do this by creating a flight catalog and then filling it with flight routes. There are three ways to fill your catalog and keep it up to date.

* [Upload CSV or XML files for ‘flight feeds’ with flight inventory](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#flight-feed-upload)
* [Use event activity to automatically fill your catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#flight-activity)
* [Combine a flight feed with automatically generated flights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#combined-catalog)

You can create and manage your flight catalogs in your [Commerce Manager⁠](https://www.facebook.com/products):

* [Create a flight catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#create-catalog)
* [Upload your feed to Facebook](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#flight-feed-upload)
* [Create product sets out of your flight catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#product-set)
* [Associate the catalog to your event sources](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#event-sources)

## Flight feed: upload your flights to Facebook

A flight feed is a file with your flight inventory. Every line or item in the file represents a single route. You can use one or more flight feeds, as long as all feeds together contain your full flight inventory.

### Supported flight feed formats

#### CSV sample description

[CSV sample⁠](https://lookaside.facebook.com/developers/resources/?id=flight_example.csv) | [TSV sample (flattened)⁠](https://lookaside.facebook.com/developers/resources/?id=dat_flight_flattened.tsv)

* The first row must list the chosen field names in the order the values will be given. Subsequent rows then supply the corresponding values for each flight.
* Fields containing whitespace or commas should be enclosed in `"`double quotes`"`.
* Nested or multi-value fields such as `image` can be represented using JSON-encoded values or by a set of “flattened” plain-text columns labeled using JSON-path syntax, such as `image[0].url`, `image[0].tag[0]`, `image[0].tag[1]`. Both conventions can be used interchangeably in the same file.

#### XML sample description

[XML sample⁠](https://lookaside.facebook.com/developers/resources/?id=dat_sample_flight_feed.xml)

* A root `<listings>` XML node encloses a set of `<listing>` nodes, each of which represents a flight.
* The file must begin with a valid `<?xml` declaration tag.

The feed parser automatically detects `UTF8`, `UTF16`, or `UTF32` text encodings, and defaults to `LATIN1` if it encounters an unexpected byte sequences. You can provide text in field values in any language; **however, field names must be given exactly as below, in English.**

### Supported fields for flight ads

The following supported fields are designed for items you add to your product catalog.

For localized catalogs, see [supported fields for flight ads](https://developers.facebook.com/documentation/ads-commerce/catalog/reference#loc-cat-flights).

| Field and Type | Description |
| --- | --- |
| `origin_airport`  type: string | **Required**.  The IATA code for the origin. Supports airport and city IATA code. Use [IATA Code Search⁠](http://www.iata.org/publications/Pages/code-search.aspx) to validate your IATA codes. **Tip**: To improve performance, avoid using a space for this unique identifier field.  Example: `SFO` |
| `destination_airport`  type: string | **Required**.  The IATA code for the destination. Supports airport and city IATA code. Use [IATA Code Search⁠](http://www.iata.org/publications/Pages/code-search.aspx) to validate your IATA codes. **Tip**: To improve performance, avoid using a space for this unique identifier field.  Example: `JFK` |
| `image`  type: object | **Required**.  Max items: 20  Image data for this flight. You can provide up to 20 images for the flight. Each image contains two fields: `url` and `tag`. You can have multiple tags associated with an image. You must provide at least one `image`. Each image can be up to 4 MB in size.  See [**Image Object Parameters**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#image-object) |
| `description`  type: string | **Required**.  Max size: 5000  A short paragraph describing the route. |
| `url`  type: string | **Required** only if you do not specify a deep link on [ad level](https://developers.facebook.com/docs/marketing-api/dynamic-ads-for-travel/ads-management). You can use the `Deep Link` field in [Ads Manager⁠](https://business.facebook.com/adsmanager/manage), or `template_url_spec` in the API).  Link to the external site where you can view the flight. If a deep link is specified on ad level, that will take precedence. |
| `origin_city`  type: string | The name of the origin city.  Example: `San Francisco` |
| `destination_city`  type: string | The name of the destination city.  Example: `New York` |
| `price`  type: string | Price of the flight. You must specify the value with currency.  Example: `99.99 USD` |
| `applink`  type: element | Deep link straight to the flight details page in your mobile app using [App Links](https://developers.facebook.com/docs/applinks). You can specify deep links (in order of precedence, highest to lowest):   * on [ad level](https://developers.facebook.com/docs/marketing-api/dynamic-ads-for-travel/ads-management) using `template_url_spec` * here in the feed using an [**Applink Object**](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#applink-object) * by adding [App Link meta tags](https://developers.facebook.com/docs/applinks) to your website. |
| `one_way_price`  type: string | One-way price of the flight. You must specify the value with currency.  Example: `99.99 USD` |
| `priority`  type: integer | Priority of the flight. Value from 0(lowest priority) to 5(highest priority). A flight without this value has priority 0.  Example: `5` |
| `status`  Type: string | Controls whether an item is active or archived in your catalog. Only active items can be seen by people in your ads, shops, or any other channels. Supported values: `active`, `archived`. Items are active by default. Learn more about [archiving items⁠](https://www.facebook.com/business/help/543317109402043?id=725943027795860).  Example: `active`  **Note**: Some partner platforms such as Shopify may sync items to your catalog with a status called **staging**, which behaves the same as `archived`.  This field was previously called `visibility`. While the old field name is still supported, use the new field name. |
| `internal_label`  Type: string | Add internal labels to help filter items when you create [product sets⁠](https://www.facebook.com/business/help/620275848114281?id=725943027795860). For example, you could add a “summer” label to all items that are part of a summer promotion and then filter those items into a set. Labels are only visible to you  Enclose each label in single quotes (‘) and separate multiple labels with commas (,). Don’t include white spaces at the beginning or end of a label. Character limit: Up to 5,000 labels per product and 110 characters per label.  Example (TSV, XLSX, Google Sheets): [‘summer’,’trending’]  Example (CSV): “[‘summer’,’trending’]”  **Note**: If you’re currently using custom labels (`custom_label_0` to `custom_label_4`) for filtering product sets, switching to internal labels (`internal_label`) instead is recommended. Unlike custom labels, you can add or update internal labels as often as needed without sending items through policy review each time, which can impact ad delivery.  This field was previously called `product_tags`. While the old field name is still supported, use the new field name. |

#### Image object parameters

| Field Name and Type | Description |
| --- | --- |
| `url`  type: string | **Required**.  URL of the flight image. Follow these image specifications:   * All images must be in JPG, GIF, or PNG format. * For carousel ads and collection ads: Images display in square (1:1) format. The minimum image size is 500 x 500 px. For best quality, use 1024 x 1024 px. * For single image ads: Images display at a 1.91:1 aspect ratio. The minimum image size is 500 x 500 px. For best quality, use 1200 x 628 px. |
| `tag`  type: string | A string that represents what’s in the image. There can be multiple tags associated with an image.  Examples:   * `Fitness Center` * `Swimming Pool`   Optional. `INSTAGRAM_STANDARD_PREFERRED` - Allows advertisers to tag a specific image in their feed as the default image that will be used for Instagram. This tag is case sensitive. |

#### Applink Object Parameters

If you have separate apps for iPhone and iPad, specify iPhone and iPad specific information. Otherwise specify only iOS information.

| Field Name and Type | Description |
| --- | --- |
| `ios_url`  type: string | A custom scheme for the iOS app.  Example: `example-ios://electronic` |
| `ios_app_store_id`  type: string | The app ID for the App Store.  Example: 1234 |
| `ios_app_name`  type: string | The name of the app (suitable for display).  Example: `Electronic Example iOS` |
| `iphone_url`  type: string | A custom scheme for the iPhone app.  Example: `example-iphone://electronic` |
| `iphone_app_store_id`  type: string | The app ID for the App Store.  Example: `5678` |
| `iphone_app_name`  type:string | The name of the app (suitable for display).  Example: `Electronic Example iPhone` |
| `ipad_url`  type: string | A custom scheme for the iPhone app.  Example: `example-ipad://electronic` |
| `ipad_app_store_id`  type: string | The app ID for the App Store.  Example: `9010` |
| `ipad_app_name`  type: string | The name of the app (suitable for display).  Example: `Electronic Example iPad` |
| `android_url`  type: string | A custom scheme for the Android app.  Example: `example-android://electronic` |
| `android_package`  type: string | A fully-qualified package name for intent generation.  Exammple: `com.electronic` |
| `android_app_name`  type: string | The name of the app (suitable for display).  Example: `Electronic Example Android` |

## Product deep links

[Provide deep links](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-deep-links) in feed following the [App Links](https://developers.facebook.com/docs/applinks) specification. Deep link information in feed takes precedence over any information Facebook collects with App Links metadata with our web crawler.

If you already have deep link information from App Links, you don’t need to specify this data. Facebook uses information from App Links to display the correct deep link. To display deep links in your ads, see [Advantage+ Catalog Ads, Ad Template](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#adtemplate).

## Autogenerate flights: add routes to your catalog automatically using event activity

Facebook can automatically add routes to your catalog based on pixel and app event activity. Every time an event is received with a route that does not yet exist in the catalog, it can be added automatically. This allows to you use flight ads for all your flights without having to deal with flight feeds.

To enable this, make a `POST` request to your flight catalog and set `generate_items_from_events` to `true`.

```
curl \
  -F 'flight_catalog_settings={generate_items_from_events:1}' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<VERSION>/<CATALOG_ID>
```

Routes that are added automatically don’t have an image (to display in the ad). Therefore, you need to provide a generic image to use for all autogenerated routes.

```
curl \
  -F 'fallback_image_url=http://example.com/some.image_1.jpg' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<VERSION>/<CATALOG_ID>
```

As soon as your catalog is associated to a pixel and/or app, and receiving flight ads events, your catalog populates. You can verify this by querying the catalog.

```
curl \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/<VERSION>/<CATALOG_ID>/flights
```

## Combined: use flight feeds with automatically generated flights

You can combine uploading a flight feed with autogenerated routes. Combining these options allows you to use flight ads for all your flights, while providing custom images for your most important routes using a flight feed.

To do so, just combine the steps [uploading a flight feed](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#flight-feed-upload) with [automatically filling your catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/events#flight-activity).

**The following sections are only relevant if you want to manage your catalogs using this API.**

## Create a flight catalog using the API

A flight catalog is a container for your flight inventory. To use the catalog API, make sure you have the appropriate [Marketing API Access Level](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization#limits) and that you have accepted the [Terms of Service⁠](https://business.facebook.com/legal/product_catalog_terms/) by creating your first catalog through [Meta Business Suite⁠](https://business.facebook.com/).

To create a flight catalog for flight ads, set `vertical` to `flights`:

```
curl -X POST \
  -F 'name="Test Flight Catalog"' \
  -F 'vertical="flights"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v10.0/{business-id}/owned_product_catalogs
```

## Upload your flight feeds via the API

Once you’ve created the catalog, you need to upload your flight feed(s) to Facebook. Use the API to create a feed object for every feed you want to upload. Scheduled and direct uploads are supported.

For scheduled uploads, specify a schedule when you create the feed. For non scheduled uploads, don’t specify a schedule.

```
curl -X POST \
  -F 'name="Test Feed"' \
  -F 'schedule={
       "interval": "DAILY",
       "url": "http://www.example.com/sample_feed.tsv",
       "hour": "22"
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PRODUCT_CATALOG_ID>/product_feeds
```

In either case, the response is:

```
{ "id" : <PRODUCT_FEED_ID> }
```

Once you have created the feed (with or without schedule), you can do a one time upload of your feed using the `PRODUCT_FEED_ID`:

```
curl \
-F "url=http://www.example.com/sample_feed.xml" \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_FEED_ID>/uploads
```

## Filter Flight Catalog to Flight Sets

A flight set is a subset of your catalog. To set up flight ads, you need to create, at least, one flight set.

Flight sets are defined by filters that are applied to the flight catalog. For example, you can create a flight set with all routes that depart from London. Do note you can also create a flight set without any filters. In that case, the flight set will contain all flights in your catalog.

```
```
curl \  
  -F 'name=Test Flight Set' \  
  -F 'filter={"origin_airport":{"eq":"LHR"}}' \  
  -F 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/v2.11/<PRODUCT_CATALOG_ID>/product_sets
```
```

The `filter` parameter is made up of the following operators and data:

| Operators | Filter Type |
| --- | --- |
| `i_contains` | Contains substring. Operator is case-insensitive. |
| `i_not_contains` | Does not contain substring. Operator is case-insensitive. |
| `contains` | Contains substring. Operator is case-insensitive. |
| `not_contains` | Does not contain substring. Operator is case-insensitive. |
| `eq` | Equal to. Operator is case-insensitive. |
| `neq` | Not equal to. Operator is case-insensitive. |
| `lt` | Less than. For numeric fields only. |
| `lte` | Less than or equal to. For numeric fields only. |
| `gt` | Greater than. For numeric fields only. |
| `gte` | Greater than or equal to. For numeric fields only. |

| Data | The data being filtered |
| --- | --- |
| `origin_airport` | The IATA code for the origin. |
| `destination_airport` | The IATA code for the destination. |
| `price` | Price of the flight. The price is in cents. |
| `description` | A short paragraph describing the route. |

## Associate the Catalog to Your Event Sources

To map the data from your event sources (your pixels and app events) to your catalog, every catalog must be associated with these event sources:

* Go to your [business manager’s catalog page⁠](https://business.facebook.com/settings/product-catalogs/) and click **Associate Sources**.
* Select the app and pixel that are receiving the travel events. Alternatively, you can use the API.

```
curl \
  -F 'external_event_sources=["<PIXEL_ID>","<APP_ID>"]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PRODUCT_CATALOG_ID>/external_event_sources
```

When making the API call, specify the following parameters:

| Parameter Name & Type | Description |
| --- | --- |
| `external_event_sources`  type: `int[]` | A list of Pixel and App IDs to associate with the catalog. |
