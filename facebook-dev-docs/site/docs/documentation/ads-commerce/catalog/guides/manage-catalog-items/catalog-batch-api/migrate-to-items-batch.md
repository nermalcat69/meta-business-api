---
title: "Catalog Batch API"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api/migrate-to-items-batch
---

# Catalog Batch API

Updated: Sep 17, 2025

Catalog Batch APIs are one of the ways you can make changes to products in a catalog. Refer to this [Help Center article⁠](https://www.facebook.com/business/help/384041892421495?id=725943027795860) to decide whether this is the right solution for your use case.

There are separate API endpoints for managing:

* Catalog items
* Localization information for catalog items

One API call allows you to modify one or multiple catalog entities (hence the "Batch" in the API name). In a single request you can mix three kinds of modifications:

* Create
* Update
* Delete

For example, you can send a single request that will:

* Create 7 new products
* Update descriptions of 2 existing products
* Delete 5 products that have been discontinued by a business

## How it works

Use the Catalog Batch API as follows:

* Make a call to one of the endpoints that allows specifying the product updates that need to be applied
* Call the `/check_batch_request_status` endpoint multiple times until the response indicates that processing has completed

## Catalog batch API endpoints

| Endpoint | Description |
| --- | --- |
| `POST` [/{catalog\_id}/items\_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch) | Sends a batch of requests (create, update, delete) for a catalog. Various catalog item types are supported ([see item types here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/catalog-item-types)). |
| `POST` [/{catalog\_id}/localized\_items\_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/localized_items_batch) | Sends batch localization requests (create, update, delete) to existing items in your catalog. Various catalog item types are supported ([see item types here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/catalog-item-types)). |
| `GET` [/{catalog\_id}/check\_batch\_request\_status](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status) | Checks the status of a batch request. Use a handle (returned from a previous call to one of the other endpoints) and make a `GET` call. |
| `POST` [/{catalog\_id}/batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch) | There should be no new integrations with this endpoint. The `/items_batch` endpoint should be used instead.  Sends a batch of requests (create, update, delete) for a catalog. This API works only for catalogs with vertical=COMMERCE. Other verticals and their corresponding item types are not supported ([see item types here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/catalog-item-types)) |
