---
title: "Automotive Model Ads"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/catalog
---

# Automotive Model Ads

Updated: Jun 26, 2026

To set up automotive model ads, you need a Facebook catalog. A catalog stores information about your products and inventory. You can use your catalog in different ways within the Meta family of apps. In your inventory, each individual product represents a unique vehicle offer you want to promote in your campaign.

Meta’s automotive model ads use cross-device intent signals to automatically promote relevant vehicle models and offers on Facebook and Instagram. A **vehicle models and offers catalog** includes information about offers, vehicles, and the markets where each offer is valid.

Use [Commerce Manager⁠](https://www.facebook.com/business/help/1659534074121655?id=725943027795860) to create and manage your catalogs. Learn more about [building a high-quality catalog⁠](https://www.facebook.com/business/help/2086567618225367?id=725943027795860).

## Before you start

Before you set up your catalog, follow these guidelines:

* If you manage multiple catalogs for different businesses or want an agency to access your catalogs, you may need to set up [Meta Business Suite⁠](https://business.facebook.com/home/accounts?business_id=117943258886315).
* To use the [Catalog Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api), you need the appropriate [Marketing API Access Level](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization#limits) and must accept the [Terms of Service⁠](https://business.facebook.com/legal/product_catalog_terms/) by creating your first catalog through [Meta Business Suite⁠](https://business.facebook.com/). See [Catalog Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog).

If you’re using [Commerce Manager⁠](https://www.facebook.com/business/help/1659534074121655) as part of your application, you may be affected by a couple of security-related breaking changes. See [Breaking Changes, 1/30/2018, Catalog Permissions](https://developers.facebook.com/docs/graph-api/changelog/breaking-changes#1-30-2018).

To set up automotive model ads, follow these steps.

## Step 1: Set up your vehicle models and offers catalog

### Create feed files

To create a catalog, you should connect a data feed or upload data to Meta. The data should contain all the required fields for the vehicles that you want to advertise. Automotive Model Ads only require one product feed. See [Reference - Automotive Model Ads - Supported Fields](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/reference#vehicle-offers-feed-file).

Ensure your feed format follows the recommended guidelines. See [Reference - Automotive Model Ads — Supported Formats](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/reference#supported-feed-format).

#### Downloadable sample files

[Download a CSV **sample** feed.](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.8562-6/356708443_1334583813759676_4081774280895352003_n.csv?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=vcxwDKo6gbgQ7kNvwGvqImE&_nc_oc=Adr6C_2-ujmb0C2mF1AHs8BMLLnoBmwl2f5Z-xxsI_hBYs9aSH5MDOYRyTpWtgGcwl_VcLwllYCdTI0EqrgfVW5C&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=ozYELdG9fHKm7DuBaFuJ4g&_nc_ss=7b289&oh=00_AQBzLjkG2HFY5BfcJ6zKyd_wsTJ9WqgQ4pyRiX4XRPn5SQ&oe=6A4C0689)[Download an Excel **sample** feed.](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.8562-6/354999867_628159305937436_5329479575177890164_n.xlsx?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=nkpHkKSiNkEQ7kNvwFkG7kK&_nc_oc=Adp338k6ErMENuoL1WdGQdZvvYitEzlz8DWSIp-CutiYnAVKDhFwO8RE3u1RGIKBgLMUOpfPYdlPlHX_xtr9ZO2w&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=ozYELdG9fHKm7DuBaFuJ4g&_nc_ss=7b289&oh=00_AQAIrPapprbapFGxzzLr8-h3E0EFH3GxnGWiQArSJW3WcA&oe=6A4BF2E0)[Download an XML **sample** feed.](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.8562-6/356803887_126341247153526_9036056155007373905_n.xml?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=b8d81d&_nc_ohc=nOhh_d8Y7KwQ7kNvwFrCYEn&_nc_oc=AdqSt23lAOAPV40e2L5G32ZaTQYE5X7JeWNxyVphD69xXs5wKJ2zvRcKuAHLnXwhuas9HbmMgJh_vOYVO_DcuD2Z&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=ozYELdG9fHKm7DuBaFuJ4g&_nc_ss=7b289&oh=00_AQCRRuh9zwbcxwMi6ayb9UOyVS9R4A7ma686w_aX2x_49w&oe=6A4C04E0)

### Deep links

Provide deep links in data feed following the [App Links](https://developers.facebook.com/docs/applinks) specification. Deep link information in data feed takes precedence over any information Meta collects with [App Links](https://developers.facebook.com/docs/applinks) metadata with our web crawler.

If you already have deep link information from [App Links](https://developers.facebook.com/docs/applinks), you do not need to specify this data. Meta uses information from App Links to display the correct deep link. To display deep links in your ads see [Advantage+ Catalog Ads, Ad Template](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#adtemplate). Learn more about [product deep links](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-deep-links).

### Create catalog

Once your feed file is ready, [create your catalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog#Creating).

## Step 2: Schedule uploads

**Use scheduled feed uploads to automatically push the latest offer feed to Meta instead of uploading refreshed files manually.**

You can make a `POST` request to the `product_feed`s edge from the following paths: [/{product\_catalog\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog)/product\_feeds

To add a schedule to the feed, you can provide the `schedule` parameter in the `POST` endpoint.

**Example** - Set up a schedule upload

```
curl -X POST \
  -F 'name=Offer Feed' \
  -F 'schedule={"interval":"DAILY","url":"http://www.example.com/offer_feed.tsv","hour":"22"}' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<CATALOG_ID>/product_feeds
```

**Example** — Create offer feed

```
curl \
  -F 'name= offer feed' \
  -F 'access_token=<access_token>' \
  https://graph.facebook.com/<API_VERSION>/<catalog_id>/product_feeds
```

**Example** — Upload local offer feed file

```
curl \
  -F "file=@offer_feed.csv;type=text/csv" \
  -F "access_token=<access_token>" \
  https://graph.facebook.com/<API_VERSION>/<offer_feed_id>/uploads
```

## Step 3: Create product sets

After the feed is successfully uploaded, optionally create product sets to further filter your offers. A product set is a more granular set of items that you want to promote based on your campaign strategy when setting up a campaign.

**Example**—Create a product set that contains only lease offers

```
curl \
 -F 'name=lease offer set' \
 -F 'filter={"offer_type":{"eq":"lease"}}' \
 -F 'access_token=<ACCESS TOKEN>' \
 https://graph.facebook.com/<API_VERSION>/<CATALOG_ID>/product_sets
```

You can create product sets from the Commerce Manager UI or by using the API. Learn more about
[Product Catalog Product Sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets).

## Step 4: Install the Meta Pixel

The Meta Pixel is a snippet of JavaScript code that allows you to track visitor activity on your website. When a visitor interacts with the website, pixel events are fired in response to their actions. A pixel event is a very lightweight http(s) request sent from the visitor’s browser to Meta’s servers together with some extra information about that event, such as the page url that the visitor is viewing, product ID or price of the product and so on. Therefore, to enable the tracking, you need to modify your website template to insert some JavaScript code in certain pages.

Properly setting up the pixel code is important for automotive model ads because our machine learning algorithm relies on the visitor-product interaction data in the web site collected from the pixel code. Without this data, Advantage+ catalog ads cannot make good recommendations to the potential customers who are most likely to make a purchase.

### Standard events to use with the pixel

You can set up the Meta Pixel using the defined [standard events](https://developers.facebook.com/docs/facebook-pixel/reference#standard-events) and parameter that send specific signals to the offer.

#### Standard pixel events for automotive model ads

| Name | Description |
| --- | --- |
| `event_name`  type: string | **Required**.  Predefined event names that allow you to capture intent from your audiences at an item level, and segment them. For automotive offer ads, only these four standard pixel events are available: `ViewContent`, `Search`, `AddToWishlist`, `Lead`.  Where to place these standard events:   * `ViewContent` to track your VDP and vehicle offer/incentive page view. * `Search` for automotive offer search and search result pages. * `AddToWishlist` when someone saves, likes, or otherwise shows special interest in an offer on the website. * `Lead` to track lower funnel actions or hard leads (where contact info is submitted).   Besides standard events, you can define custom pixel events as needed. |

#### Required and recommended parameters to pass back with your standard pixel events

| Name | Description |
| --- | --- |
| `content_type`  type: string | **Required**.  Parameter that designates the type of product being advertised.  Example: `vehicle_offer` |
| `content_ids`  type: array of strings | **Required** for `ViewContent`, `AddToWishlist`, `Lead`. **Recommended** for `Search`.  These IDs need to match to `vehicle_offer_id` in the offers feed.  For `ViewContent` events, you should send the ID for the offer presented. For `Search` events, you might send an array of search results.  Examples: [‘123’, ‘456’], “12345”, ‘[‘1234’, ‘4567’, ‘5678’]’ |
| `comscore_market_codes`  type: array of strings | **Recommended.**  The Comscore market area code, which the user looks at for offers.  Each string is an ID.  Example: [“2079”] (or another [valid Comscore Market ID⁠](https://www.facebook.com/business/help/1501907550136620?id=176276233019487)) |
| `make`  type: array of strings | **Recommended**.  Make or brand of the vehicle.  Example: `Endomoto` |
| `model`  type: string | **Recommended**.  Model of the vehicle.  Example: `EndoHatch` |
| `year`  type: integer | **Recommended**.  Year the vehicle was launched in `yyyy` format.  Example: `2015` |
| `body_style`  type: enum | **Recommended**.  Body style of the vehicle: `CONVERTIBLE`, `COUPE`, `HATCHBACK`, `MINIVAN`, `TRUCK`, `SUV`, `SEDAN`, `VAN`, `WAGON`, `CROSSOVER`, `OTHER`.  Example: `SEDAN` |
| `trim`  type: string | **Recommended**.  Max characters: 50  Trim of the vehicle.  Example: `GE` |
| `price`  type: string | **Recommended**.  Cost and currency of the vehicle. Format the price as the cost, followed by the [ISO currency code⁠](https://en.wikipedia.org/wiki/ISO_4217?fbclid=IwAR2aZgfrNvMXY4lsH3phGJ1z-BxgtkSGrJWlKmGNpFwETiDxP7dOqNtwqSE), with a space between cost and currency.  Example: `13,999 USD` |
| `transmission`  type: enum | **Recommended**.  Transmission of the vehicle: `AUTOMATIC`, `MANUAL`, `OTHER`, `NONE`.  Example: `AUTOMATIC` |
| `fuel_type`  type: enum | **Recommended**.  Fuel type of the vehicle: `DIESEL`, `ELECTRIC`, `FLEX`, `GASOLINE`, `HYBRID`, `PETROL`, `PLUGIN_HYBRID`, `OTHER`, `NONE`.  Example: `ELECTRIC` |
| `drivetrain`  type: enum | **Recommended**.  Drivetrain of the vehicle: `4X2`, `4X4`, `AWD`, `FWD`, `RWD`, `OTHER`, `NONE`.  Example: `AWD` |
| `preferred_price_range`  type: array of integers | **Recommended**.  Preferred price range for vehicle. Min/max, up to 2 decimals.  Example: `[10000, 20000]` |

Learn more about the [Meta Pixel](https://developers.facebook.com/docs/facebook-pixel).

### Content type

* `content_type` = `vehicle_offer` — **Required**. Used to match the onsite actions to the offer in the ad. This allows Meta to measure the performance and further optimize your campaigns.
* `content_ids` = An array of IDs of vehicle offers from the offers feed — **Optional, but highly recommended** for all events; however, only optional for the `Search` event. This field helps Meta further measure and optimize your ads.

If you have an existing pixel, you can append your pixel code with a `content_type` **`vehicle_offer`** and add the following parameters:

| Event Name | Required Parameters | Recommend Parameters |
| --- | --- | --- |
| `Search`  Recommended when searching for offers. | `content_type` | `content_ids`   * `make` * `model` * `year` * `price` (example: `1234.99`) * `currency` (example: `USD`) * `postal_code` * `market_ids` * `transmission` * `fuel_type` * `drivetrain` * `preferred_price_range` |
| `ViewContent`  Recommended when viewing an auto offer. | `content_type`  `content_ids` | `content_ids`   * `make` * `model` * `year` * `price` (example: `1234.99`) * `currency` (example: `USD`) * `postal_code` * `market_ids` * `transmission` * `fuel_type` * `drivetrain` * `preferred_price_range` |
| `AddToWishlist`  Recommended when saving, favoring, or starring an offer. | `content_type`  `content_ids` | `content_ids`   * `make` * `model` * `year` * `price` (example: `1234.99`) * `currency` (example: `USD`) * `postal_code` * `market_ids` * `transmission` * `fuel_type` * `drivetrain` * `preferred_price_range` |
| `Lead`  Recommended when completing registration and submitting a lead form. | `content_type`  `content_ids` | `content_ids`   * `make` * `model` * `year` * `price` (example: `1234.99`) * `currency` (example: `USD`) * `postal_code` * `market_ids` * `transmission` * `fuel_type` * `drivetrain` * `preferred_price_range` |

```
<!-- vehicle offer id information not available-->

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '<FB_PIXEL_ID>'); // pixel id
fbq('track', "PageView");
fbq('track', 'ViewContent', {
                content_type: 'vehicle_offer',
                offer_types: ['lease', 'finance', 'cash'],
                make: 'Endomoto',
                model: 'EndoHatch',
                year: '2017',
                trim: 'GE'
});

</script>
<!-- End Meta Pixel Code -->
```

## Step 5: Build your audience

To build an audience of people who are interested in the offers, you need to set up the [Meta Pixel](https://developers.facebook.com/docs/facebook-pixel). See also [Install the Meta Pixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/catalog#install-pixel). The pixel should live on all web pages that track action relevant to your business use case. This helps Meta to optimize your campaign to find the right audience.

For example:

* To optimize towards offer detail page views, place the pixel on that page and set up the `ViewContent` pixel event.
* To optimize towards a lead submission, place the pixel on the post submission page and set up the `Lead` pixel event. Learn more about [standard events](https://developers.facebook.com/docs/facebook-pixel/reference#standard-events).

Make sure that you set up the pixels on all relevant pages, not just for the pages you’re optimizing for.

**Important**: You need to send required parameters along with each pixel event, because a match needs to be made in the catalog to create a product audience.

### Associate the pixel or app to your catalog

**Example** — Using the API

```
curl \
  -F 'external_event_sources=["<PIXEL_ID>","<APP_ID>"]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/external_event_sources
```

**Example** — Using the UI

* Go to **Meta Business Suite** → **Business Settings**.
* In the left pane, choose **Data Source** → **Catalogs**.
* Find and select your catalog, then click **Associate Sources** to associate pixel and app to the catalog.

### Create event source group

Event source groups allow advertisers and developers to map multiple sources of conversion data into a single object for use in measurement, analytics, targeting, and optimization.

**Using the API**

```
curl \
  -F 'name=name of your event group' \
  -F 'event_sources=["<PIXEL_ID>", "<APP_ID>"]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/event_source_groups
```

**Using the UI**

* Go to **Meta Business Suite** → **Business Settings**.
* In the left pane, choose **Data Source** → **Event Source Groups**.
* Click **Add** to create a new event source group.

### Create vehicle offer audience

```
curl \
  -F 'name=Viewed in Last 30 days' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=VEHICLE_OFFER' \
  -F 'content_type=vehicle_offer' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'inclusions=[
  {
      "event": "ViewContent",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  },
  {
      "event": "Search",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  },
  {
      "event": "AddToWishlist",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  }
  ]' \
  -F 'exclusions=[{
      "event":"Lead",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  }]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/customaudiences
```

**Example** — Capture an audience who has visited your vehicle pages belonging to a certain vehicle set

```
curl \
  -F 'name=Viewed vehicles in vehicle set in Last 30 days' \
  -F 'subtype=CLAIM' \
  -F 'claim_objective=VEHICLE_OFFER' \
  -F 'content_type=vehicle_offer' \
  -F 'event_source_group=<EVENT_SOURCE_GROUP_ID>' \
  -F 'rule={"vehicle_set_id":{"eq":"<VEHICLE_SET_ID>"}}' \
  -F 'inclusions=[
  {
      "event": "ViewContent",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  },
  {
      "event": "Search",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  },
  {
      "event": "AddToWishlist",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  }
  ]' \
  -F 'exclusions=[{
      "event":"Lead",
      "retention": {"min_seconds":0,"max_seconds":2592000}
  }]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/customaudiences
```

## Step 6: Debug your automotive feed (optional)

Using the [Product Feed Debug Tool⁠](https://business.facebook.com/ads/product_feed/debug), you can paste in a product feed, and validate the feed for errors and warnings.

**To debug your automotive feed**, in the catalog selection drop-down menu, select **Vehicles**.

This is helpful in the early stages of integrating automotive ads to discover whether the current feeds you may already have are supported by Meta.

## Learn more

* [Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/catalog/guides)
* [Meta Pixel](https://developers.facebook.com/docs/marketing-api/audiences-api/pixel)
* [Catalog, Best Practices, Help Center⁠](https://www.facebook.com/business/help/2086567618225367?id=725943027795860)
* [Product Catalog Product Sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets)
* [Standard events](https://developers.facebook.com/docs/facebook-pixel/reference#standard-events)
