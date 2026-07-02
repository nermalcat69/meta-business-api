---
title: "Product Review Feed Schema"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv
---

# Product Review Feed Schema

Updated: Mar 21, 2023

Use this product review feed schema to onboard on to our ratings and review system for Shops. The feed should be sent over as a JSON, and contain the fields described below.

## Root Elements

The top-level elements of the JSON response.

| Element | Description |
| --- | --- |
| `aggregator`  Type: string | **Optional**.  The reviews aggregator used by the store to manage their review feeds. This field stores the name of the aggregator. |
| `store`  Type: [`Store`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#store) | **Required**.  Information about the store for which the product reviews are for. |
| [`reviews`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#review)  Type: Array<Review> | **Required**.  Contains the product reviews. |

## Types

### Store

| Element | Description |
| --- | --- |
| `name`  Type: string | **Required**.  Name of the store the review feed is for. |
| `id`  Type: string | **Optional**.  Unique identifier of the store on the aggregator's platform. |
| `storeUrls`  Type: Array<string> | **Optional**.  Domains owned by the store where they sell their products. Do not include any third-party seller websites, such as "amazon.com".  Example: `["www.sephora.com", "www.sephora.de"]` |

### Review

| Element | Description |
| --- | --- |
| `reviewID`  Type: string | **Required**.  Unique identifier for the review. |
| `rating`  Type: integer | **Required**.  Rating, from 1–5. |
| `title`  Type: string | **Required**.  Review title. |
| `content`  Type: string | **Required**.  Review text. Should be a non-empty string. Emojis should be [UTF-8⁠](https://en.wikipedia.org/wiki/UTF-8)-encoded. |
| `createdAt`  Type: string | **Required**.  Review creation date in [ISO 8601⁠](https://en.wikipedia.org/wiki/ISO_8601) format.  Examples:  Complete date:  `YYYY-MM-DD (eg 1997-07-16)`  Complete date plus hours and minutes:  `YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)`  Complete date plus hours, minutes and seconds:  `YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)`  Complete date plus hours, minutes, seconds and a decimal fraction of a second:  `YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)` |
| `updatedAt`  Type: string | **Optional**.  When the review was last updated. |
| `reviewImageUrls`  Type: Array<string> | **Optional**.  List of URLs for published images as uploaded by shoppers with the review. |
| `incentivized`  Type:boolean | **Required**.  Represents whether the review was obtained via an incentivized promotion run by the merchant. |
| `hasVerifiedPurchase`  Type:boolean | **Optional**.  Represents whether the review was left after a verified purchase of the product. |
| `reviewer`  Type: [Reviewer](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#reviewer) | **Required**.  Review author's information. |
| `product`  Type: [Product](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#product) | **Required**.  Information about the product the review is associated with. |
| `language`  Type: string | **Optional**.  The language used for the written review. The string should be in [ISO 639-1⁠](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code format.  Example: `en` |
| `country`  Type: string | **Optional**.  Country from where the review was written. The string should be in [ISO 3166 Alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. See also [glossary for ISO 3166⁠](https://www.iso.org/glossary-for-iso-3166.html).  Example: `US` |
| `merchantResponse`  Type: [ReviewResponse](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#reviewresponse) | **Optional**.  A reply to the given review from the merchant. |
| `secondaryRatings`  Type: Map<string, int> | **Optional**.  JSON key-value pairs representing secondary review ratings. These can be any other ratings that were collected as part of the review. The value should be an integer between 1 and 5 with 5 being the best and 1 being the worst.  Example: `{"quality": 5, "shipping speed": 3, "value for price": 1}` |
| `secondaryAttributes`  Type: Map<string, string> | **Optional**.  JSON key-value pairs representing secondary review attributes. This can be any other free-form information that was collected as part of the review.  Example: `{"size": "true to size"}` |

### Reviewer

| Element | Description |
| --- | --- |
| `name`  Type: string | **Required**.  Full name of the reviewer.  Example: `John Doe` |
| `reviewerID`  Type: string | **Optional**.  Unique identifier for the reviewer. |
| `isAnonymous`  Type: boolean | **Optional**.  Represents whether the reviewer is anonymous. |

### ReviewResponse

| Element | Description |
| --- | --- |
| `name`  Type: string | **Required**.  Full name of the person or merchant replying to the review.  Example: `Sephora` |
| `id`  Type: string | **Required**.  A unique identifier for the reply. |
| `content`  Type: string | **Required**.  Reply Text. Should be a non-empty string. Emojis should be UTF-8 encoded. |
| `createdAt`  Type: string | **Required**.  Reply Creation Date in ISO8601.   Examples:  Complete date: `YYYY-MM-DD (eg 1997-07-16)`  Complete date plus hours and minutes: `YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)`  Complete date plus hours, minutes and seconds: `YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)`  Complete date plus hours, minutes, seconds and a decimal fraction of a second: `YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)` . |
| `updatedAt`  Type: string | **Optional**.  When the reply was updated last. |
| `language`  Type: string | **Optional**.  The language reply was written in. The string should be in ISO 639-1 code format.   Example: `en` |
| `country`  Type: string | **Optional**.  Country the reply was written from. The string should be in ISO 3166 Alpha-2 format.   Example: `US` |

### Product

| Element | Description |
| --- | --- |
| `name`  Type: string | **Required**.  Name of the product. |
| `url`  Type: string | **Required**.  Link to the product detail page on the store's website. |
| `imageUrls`  Type: Array<string> | **Optional**.  List of image urls associated with the product. |
| `groupID`  Type: string | **Optional**.  ID for a group of products that share reviews. You can choose to share the `groupID` or all of the variants directly using the `variants` field. |
| `productIdentifiers`  Type: [ProductIdentifiers](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#product-identifiers) | **Optional**.  List of all the different identifiers that can be used to match the reviews to a product in the Meta commerce catalog. |
| `variants`  Type: Array<ProductVariant> | **Optional**.  Different [variants of this product](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#product-variant) that can share the same reviews. |
| `productStatus`  Type: Enum `{"active", "inactive"}` | **Optional**.  Status of the product. "active" if the product is still active and "inactive" if the product is no longer being sold. |

### ProductIdentifiers

| Element | Description |
| --- | --- |
| `gtins`  Type: Array<string> | **Optional**.  Global trade item numbers (GTINs) associated with the product. |
| `mpn`  Type: string | **Optional**.  Manufacturer part number (MPN) associated with the product. |
| `brand`  Type: string | **Optional**.  Brand name associated with the product. |
| `shopifyProductID`  Type: string | **Optional**.  Shopify Product ID associated with the product. |
| `skus`  Type: Array<string> | **Optional**.  Stock keeping units (SKUs) associated with the product. |

### ProductVariant

| Element | Description |
| --- | --- |
| `name`  Type: string | **Required**.  Name of the product variant. |
| `url`  Type: string | **Required**.  Link to the product detail page for the variant on the store's website. |
| `variantIdentifiers`  Type: [ProductIdentifiers](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/feed-schema-csv#product-identifiers) | **Optional**.  List of all the different identifiers for the variant. |

### Sample Feed

```
{
  "aggregator": "Meta Reviews",
  "store": {
    "name": "Facebook Reality Labs",
    "id": "4d34ferw3sedfs",
    "storeUrls": ["https://portal.facebook.com/", "www.oculus.com"]
  },
  "reviews": [{
    "reviewID": "876324222345",
    "rating": 5,
    "title": "Amazing Experience!",
    "content": "The kids love it. So realistic and I can't wait for more games. Beat Saber is our favorite so far. Definitely worth the price.",
    "createdAt": "2020-11-03T10:04:37.000Z",
    "updatedAt": "2020-11-03T10:04:37.000Z",
    "reviewImageUrls": ["www.oculus.com/reviews/img1.png", "www.oculus.com/reviews/img2.png"],
    "incentivized": false,
    "hasVerifiedPurchase": true,
    "reviewer": {
      "name": "John D.",
      "reviewerID": "1233413412421",
      "isAnonymous": false
    },
    "secondaryRatings": {
       "quality": 5,
       "shipping speed": 3,
       "value for price": 1
    },
    "product": {
      "name": "Quest 2",
      "groupID": "43251",
      "url": "https://www.oculus.com/quest-2-128gb/",
      "productIdentifiers": {
        "gtins": ["20884389103321", "48384389103228"],
        "mpn": "AQP10012OZ",
        "skus": ["AD-0221-48"],
        "brand": "Oculus",
        "shopifyProductID": "2345234235423"
      },
      "variants": [{
        "name": "Quest 2 - 256 GB",
        "url": "https://www.oculus.com/quest-2-256gb/",
        "variantIdentifiers": {
          "gtins": ["30884389103328"]
        }
      }]
    }
  }]
}
```
