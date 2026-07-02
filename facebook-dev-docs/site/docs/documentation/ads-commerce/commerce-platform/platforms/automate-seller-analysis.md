---
title: "Product Review Feed Schema"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/automate-seller-analysis
---

# Product Review Feed Schema

Updated: Mar 31, 2026

Use this product review feed schema to onboard on to our ratings and review system for Shops. The feed should be sent over as a CSV file, and contain the columns described below.

## Columns

| Element | Description |
| --- | --- |
| `aggregator`  Type: string | **Optional**.  The reviews aggregator used by the store to manage their review feeds. This field stores the name of the aggregator. |
| `store.name`  Type: string | **Required**.  Name of the store the review feed is for. |
| `store.id`  Type: string | **Optional**.  Unique identifier of the store on the aggregator's platform. |
| `store.storeUrls`  Type: Array<string> | **Required**.  Unique identifier of the store on the aggregator's platform. |
| `reviewID`  Type: string | **Required**.  Unique identifier for the review. |
| `rating`  Type: integer | **Required**.  Rating, from 1–5. |
| `title`  Type: string | **Optional**.  Review title. |
| `content`  Type: string | **Required**.  Review text. Should be a non-empty string. Emojis should be [UTF-8⁠](https://en.wikipedia.org/wiki/UTF-8)-encoded. |
| `created_at`  Type: string | **Required**.  Review creation date in [ISO 8601⁠](https://en.wikipedia.org/wiki/ISO_8601) format.  Examples:  Complete date:  `YYYY-MM-DD (eg 1997-07-16)`  Complete date plus hours and minutes:  `YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)`  Complete date plus hours, minutes and seconds:  `YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)`  Complete date plus hours, minutes, seconds and a decimal fraction of a second:  `YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)` |
| `updated_at`  Type: string | **Optional**.  When the review was last updated. |
| `review_image_urls`  Type: Array<string> | **Optional**.  List of URLs for published images as uploaded by shoppers with the review. |
| `incentivized`  Type:boolean | **Required**.  Represents whether the review was obtained via an incentivized promotion run by the merchant. |
| `has_verified_purchase`  Type:boolean | **Optional**.  Represents whether the review was left after a verified purchase of the product. |
| `reviewer.name`  Type: string | **Conditional Optional**.  **Note**: if `reviewer.reviewerID` or `reviewer.isAnonymous` is provided, then `reviewer.name` is required  Full name of the reviewer.  Example: `John Doe` |
| `reviewer.reviewerID`  Type: string | **Optional**.  Unique identifier for the reviewer. |
| `reviewer.isAnonymous`  Type: boolean | **Optional**.  Represents whether the reviewer is anonymous. |
| `product.name`  Type: string | **Required**.  Name of the product. |
| `product.url`  Type: string | **Required**.  Link to the product detail page on the store's website. |
| `product.imageUrls`  Type: Array<string> | **Optional**.  List of image urls associated with the product. |
| `product.groupID`  Type: string | **Optional**.  ID for a group of products that share reviews. You can choose to share the `groupID` or all of the variants directly using the `variants` field. |
| `product.productStatus`  Type: Enum `{"active", "inactive"}` | **Optional**.  Status of the product. "active" if the product is still active and "inactive" if the product is no longer being sold. |
| `product.productIdentifiers.gtins`  Type: Array<string> | **Optional**.  Global trade item numbers (GTINs) associated with the product. |
| `product.productIdentifiers.mpn`  Type: string | **Optional**.  Manufacturer part number (MPN) associated with the product. |
| `product.productIdentifiers.brand`  Type: string | **Optional**.  Brand name associated with the product. |
| `product.productIdentifiers.shopifyProductID`  Type: string | **Optional**.  Shopify Product ID associated with the product. |
| `product.productIdentifiers.skus`  Type: Array<string> | **Optional**.  Stock keeping units (SKUs) associated with the product. |
| `product.variants[0].name`  Type: string | **Optional**.  Name of the variant.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `product.variants[0].url`  Type: string | **Optional**.  Link to the variant detail page on the store's website.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `product.variants[0].variantIdentifiers.gtins`  Type: Array<string> | **Optional**.  Global trade item numbers (GTINs) associated with the variant.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `product.variants[0].variantIdentifiers.mpn`  Type: string | **Optional**.  Manufacturer part number (MPN) associated with the variant.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `product.variants[0].variantIdentifiers.brand`  Type: string | **Optional**.  Brand name associated with the variant.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `product.variants[0].variantIdentifiers.shopifyProductID`  Type: string | **Optional**.  Shopify Product ID associated with the variant.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `product.variants[0].variantIdentifiers.skus`  Type: Array<string> | **Optional**.  Stock keeping units (SKUs) associated with the variant.  Note: Please duplicate the review to multiple rows, and let each row only contain one unique product variant, if the product mentioned by the review has multiple variants. |
| `country`  Type: string | **Optional**.  Country from where the review was written. The string should be in [ISO 3166 Alpha-2⁠](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. See also [glossary for ISO 3166⁠](https://www.iso.org/glossary-for-iso-3166.html).  Example: `US` |
| `merchant_response.name`  Type: string | **Conditional Optional**.  **Note**: if any of `merchant_response.id`, `merchant_response.content`, or `merchant_response.createdAt` is provided, this field is required. Otherwise, these 4 fields can be optional together.  Full name of the person or merchant replying to the review.  Example: `Sephora` |
| `merchant_response.id`  Type: string | **Conditional Optional**.  **Note**: if any of `merchant_response.name`, `merchant_response.content`, or `merchant_response.createdAt` is provided, this field is required. Otherwise, these 4 fields can be optional together.  A unique identifier for the reply. |
| `merchant_response.content`  Type: string | **Conditional Optional**.  **Note**: if any of `merchant_response.name`, `merchant_response.id`, or `merchant_response.createdAt` is provided, this field is required. Otherwise, these 4 fields can be optional together.  Reply Text. Should be a non-empty string. Emojis should be UTF-8 encoded. |
| `merchant_response.createdAt`  Type: string | **Conditional Optional**.  **Note**: if any of `merchant_response.name`, `merchant_response.id`, or `merchant_response.content` is provided, this field is required. Otherwise, these 4 fields can be optional together.  Reply Creation Date in ISO8601.  Examples:  Complete date: `YYYY-MM-DD (eg 1997-07-16)`  Complete date plus hours and minutes: `YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)`  Complete date plus hours, minutes and seconds: `YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)`  Complete date plus hours, minutes, seconds and a decimal fraction of a second: `YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)` . |
| `merchant_response.updatedAt`  Type: string | **Optional**.  When the reply was updated last. |
| `merchant_response.language`  Type: string | **Optional**.  The language reply was written in. The string should be in ISO 639-1 code format.   Example: `en` |
| `merchant_response.country`  Type: string | **Optional**.  Country the reply was written from. The string should be in ISO 3166 Alpha-2 format.   Example: `US` |
| `secondary_ratings`  Type: Map<string, int> | **Optional**.  JSON key-value pairs representing secondary review ratings. These can be any other ratings that were collected as part of the review. The value should be an integer between 1 and 5 with 5 being the best and 1 being the worst.  Example: `{"quality": 5, "shipping speed": 3, "value for price": 1}` |
| `secondary_attributes`  Type: Map<string, string> | **Optional**.  JSON key-value pairs representing secondary review attributes. This can be any other free-form information that was collected as part of the review.  Example: `{"size": "true to size"}` |

### Sample Feed

```
"aggregator","store.name","store.id","store.storeUrls","review_id","rating","title","content","created_at","reviewer.name","reviewer.reviewerID","product.name","product.url","product.imageUrls","product.productIdentifiers.skus",
"","MyStore","1234567","['http://www.mystore.com']","1","5","Great product","Very happy with the buy.","2025-01-09 18:30:43","John Doe","","Baseball","http://www.mystore.com/baseball/","['http://www.mystore.com/baseball/1.jpg']","['Baseball']",
```
