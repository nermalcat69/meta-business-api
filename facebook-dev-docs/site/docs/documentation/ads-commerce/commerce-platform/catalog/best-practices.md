---
title: "Catalog Batch API - Commerce"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog/best-practices
---

# Catalog Batch API - Commerce

Updated: Feb 9, 2026

Use the Catalog Batch API for these use cases:

* If you have large catalogs, such as a catalog containing millions of items with quickly changing inventory. You can create, update, and delete multiple items in a single HTTP request.
* If you need to create and update product information more often than once an hour (otherwise, use the [Feed API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/feed-api)). You can update multiple items in a single HTTP request.

## How It Works

The Catalog Batch API for Commerce consists of the following endpoints:

| Endpoint | Description | See Guide |
| --- | --- | --- |
| `POST` [/{catalog\_id}/batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/batch) | Sends a batch of requests (create, update, delete) for an ecommerce catalog. Used only for product items. | [Send Item Updates](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/send-item-updates) |
| `POST` [/{catalog\_id}/items\_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch) | Sends a batch of requests (create, update, delete) for a catalog. Used for a variety of different objects, such as [products](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#product-item), [hotels](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#supported-hotel), [hotel rooms](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#hotel-room), [flights](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#supported-flight), [destination](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#supported-fields-destination), [home listings](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#home-listing), [vehicle](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#supported-vehicle), and [vehicle offers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/aoa). | [Send Product Updates](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/send-product-updates) |
| `GET` [/{catalog\_id}/check\_batch\_request\_status](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status) | Checks the status of a batch request. Use a handle (returned from a call to `{catalog_id}/batch`) and make a `GET` call. | [Check Batch Request Status](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/get-batch-request) |

The parameter names for [/{catalog\_id}/batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/batch) and [/{catalog\_id}/items\_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch) may appear to be similar, but they are distinctly different.

## Next Steps

Use the [Catalog Batch API guides](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api) to help you perform common actions with the Catalog Batch API.

* Send Item Updates - `/{catalog_id}/batch`
  * [Overview](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/send-item-updates)
  * [Supported Fields](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#supported-fields-batch)
  * [Product Catalog Batch, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/batch)
* Send Product Updates - `/{catalog_id}/items_batch`
  * [Overview](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/send-product-updates)
  * [Supported Fields](https://developers.facebook.com/docs/marketing-api/catalog-batch/reference#supported-fields-items-batch)
  * [Product Catalog Items Batch, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch)
* Check Batch Request Status - `/{catalog_id}/check_batch_request_status`
  * [Overview](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/get-batch-request)
  * [Supported Fields](https://developers.facebook.com/docs/marketing-api/catalog-batch/guides/get-batch-request#supported-fields-get-batch)
  * [Product Catalog Check Batch Request Status, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status)

## Learn More

* [Catalog](https://developers.facebook.com/documentation/ads-commerce/catalog)
* [Product Catalog, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog)
