---
title: "Best Practices"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating
---

# Best Practices

Updated: Feb 9, 2026

We recommend that you use this checklist to maximize the quality of your **commerce** catalog:

* [Store the product feed ID](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#product-feed-id)
* [Create inventory with the Catalog Batch API support](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/catalog-batch-api-support)
* [Schedule feeds](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#scheduled-feeds)
* [Set up catalog during seller onboarding](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#seller-onboarding)
* [Ensure that fields are visible](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#visibility)
* [Ensure that the format is accurate for specific fields](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#format)
* [Check for timely and accurate responsiveness](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#responsiveness)
* [Selecting products for ads and/or commerce](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/updating#product-separation)

## Product Feed ID

The product feed is used as the primary source for updating product catalogs on Facebook, and fetched by Facebook periodically according to the configured interval. You should store the product feed ID, and use it to get upload status, errors, and to change upload schedule.

## Catalog Batch API Support

Batch API is a great way to update items more than once an hour. You can update up to 5,000 items with up to 100 calls per hour. To create inventory, use the [Feed API, Reference, Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed) or [Feed API, Reference, Commerce Platform](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api).

## Scheduled Feeds

**Scheduled feeds don’t support uploads more frequently than once per hour**. If you need to update inventory faster, use the [Direct Upload API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides#direct-upload-feed) or [Batch API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/batch-api).

Schedule replace feed outside of working hours to avoid product update lag.

## Seller Onboarding

Set up your catalog during [seller onboarding](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/project-guide) and upload or configure your products using the [Product Feed API](https://developers.facebook.com/documentation/ads-commerce/catalog). Reuse ads catalog to get benefits of using offsite and onsite signals.

## Visibility

* The `id`, `title`, `description`, `price`, `quantity_to_sell_on_facebook`, `link`, `image_link` fields should be visible.
* The `gtin` or `mpn` plus `brand` fields should be visible.
* The `rich_text_description` (preferably) or `description` fields should be visible, well formatted (no extra spacing, punctuation is correct), and informative (may contain information on item size, volume, origin, and so on).
* Ensure that the variant field’s (such as `size` or `color`) value is visible for **every product variant** sharing a common `item_group_id`, even those that are out of stock.

## Format

* Ensure that the `description` does not contain HTML tags or character entities.
* Ensure that the `price` is in the correct format and currency.
* Ensure that the `sale_price` is provided for items on sale.

* Ensure that the `google_product_category` is (at minimum) 2 levels deep. Alternatively, use `fb_product_category`. Note that `fb_product_category` must be at least 3 levels deep (if a third level exists) to override our automatic tax calculation Learn about [How to add a Google or Facebook product category for items in your catalog⁠](https://www.facebook.com/business/help/526764014610932) (Help Center article).
* Ensure that [product variants](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/variants) are sharing the same `item_group_id`.
* Ensure that the `availability` and `quantity_to_sell_on_facebook` fields are populated according to an [agreed upon strategy](https://developers.facebook.com/documentation/ads-commerce/catalog/guides#strategies).
* Use `additional_image_link` to add more product images (up to 10).
* Make sure that product images satisfy catalog [requirements⁠](https://www.facebook.com/business/help/686259348512056).
* Make sure that product titles satisfy catalog [requirements⁠](https://www.facebook.com/business/help/2104231189874655?id=663946777378466).
* Make sure that product descriptions satisfy catalog [requirements⁠](https://www.facebook.com/business/help/2302017289821154?id=663946777378466).

## Responsiveness

* Ensure that the `link` URL responds with HTTP 200 OK.
* Check the product catalog diagnostics tool for the following information each time you upload a new product feed:

  * Fix all upload errors, a product marked with an error will be rejected from your catalog.
  * Verify all warnings, some of warnings may affect product ingestion and prevent your product from being tagged or available for purchase.
  * Ensure that each product complies with the Facebook [Commerce Policies⁠](https://www.facebook.com/policies/commerce). Product that violate the policy will be marked as `rejected` and will not be available for tagging or purchase.

## Select Products for Ads or Commerce

For products that are used for Advantage+ catalog ads, create product sets which include only relevant products.

For Facebook Marketplace or Instagram Shopping with Checkout add `quantity_to_sell_on_facebook` only for checkout products. Products that do not have a `quantity_to_sell_on_facebook` set will not appear on checkout surfaces.

## Localized Catalog Setup

When using localized catalog make sure that the main catalog feed has US as default country and the main currency is USD, otherwise the checkout would not work.
