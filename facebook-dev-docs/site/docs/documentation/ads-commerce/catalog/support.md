---
title: "Best Practices"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/support
---

# Best Practices

Updated: Feb 9, 2026

## General recommendations for a commerce catalog

Use this checklist to maximize the quality of your **commerce** catalog:

* [Store the product feed ID](https://developers.facebook.com/documentation/ads-commerce/catalog/support#product-feed-id)
* [Create inventory with the Catalog Batch API or Feed API support](https://developers.facebook.com/documentation/ads-commerce/catalog/support#catalog-batch-api-support)
* [Schedule feeds](https://developers.facebook.com/documentation/ads-commerce/catalog/support#scheduled-feeds)
* [Set up catalog during seller onboarding](https://developers.facebook.com/documentation/ads-commerce/catalog/support#merchant-onboarding)
* [Ensure that fields are visible](https://developers.facebook.com/documentation/ads-commerce/catalog/support#visibility)
* [Ensure that the format is accurate for specific fields](https://developers.facebook.com/documentation/ads-commerce/catalog/support#format)
* [Check for timely and accurate responsiveness](https://developers.facebook.com/documentation/ads-commerce/catalog/support#responsiveness)

### Product feed ID

Facebook uses the product feed as the primary source for updating product catalogs, and fetches it periodically according to the configured interval. Store the product feed ID, and use it to get upload status, errors, and to change upload schedule.

### Catalog inventory creation support

To create inventory, use the [Feed API, Reference, Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed), [Feed API, Reference, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api) or [Batch API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api).

### Scheduled feeds

**Scheduled feeds don’t support uploads more frequently than once per hour**. If you need to update inventory faster, use the [Direct Upload API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides#direct-upload-feed).

### Seller onboarding

Set up your catalog during [seller onboarding](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/platforms/onboarding) and upload or configure your products using the [Product Feed API](https://developers.facebook.com/documentation/ads-commerce/catalog).

### Visibility

* The `id`, `title`, `description`, `price`, `inventory`, `link`, `image_link` fields should be provided.
* The `gtin` or `mpn` plus `brand` fields should be provided.
* The `rich_text_description` (preferably) or `description` fields should be provided, well formatted (no extra spacing, punctuation is correct), and informative (may contain information on item size, volume, origin, and so on).
* Ensure that the variant field’s (such as `size` or `color`) value is provided for **every product variant** sharing a common `item_group_id`, even those that are out of stock.

### Format

* Ensure that the `description` does not contain HTML tags or character entities.
* Ensure that the `price` is in the correct format and currency.
* Ensure that the `sale_price` is provided for items on sale.
* Ensure that the `google_product_category` is (at minimum) 2 levels deep.
* Ensure that product variants are sharing the same `item_group_id`.
* Ensure that the `availability` and `inventory` fields are populated according to an [agreed-upon strategy](https://developers.facebook.com/documentation/ads-commerce/catalog/guides#strategies).
* Use `additional_image_link` to add more product images (up to 10).
* Make sure that product images satisfy catalog [requirements⁠](https://www.facebook.com/business/help/686259348512056).
* Make sure that product titles satisfy catalog [requirements⁠](https://www.facebook.com/business/help/2104231189874655?id=663946777378466).
* Make sure that product descriptions satisfy catalog [requirements⁠](https://www.facebook.com/business/help/2302017289821154?id=663946777378466).

### Responsiveness

* Ensure that the `link` URL responds with HTTP 200 OK.
* Check the product catalog diagnostics tool for the following information each time you upload a new product feed:

  * Fix all upload errors. Facebook rejects any product marked with an error from your catalog.
  * Verify all warnings, some of the warnings may affect product ingestion and prevent your product from being tagged or available for purchase.
  * Ensure that each product complies with the Facebook [Commerce Policies⁠](https://www.facebook.com/policies/commerce). Facebook marks products that violate the policy as `rejected`, and they will not be available for tagging or purchase.
