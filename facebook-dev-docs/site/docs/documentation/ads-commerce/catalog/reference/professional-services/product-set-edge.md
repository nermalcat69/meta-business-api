---
title: "Product Catalog Professional Services"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/reference/professional-services/product-set-edge
---

# Product Catalog Professional Services

Updated: Jun 30, 2026

The Product Catalog Professional Services edge allows you to list and create professional services items (consulting, home services, health and wellness, and other services) in a product catalog.

## Permissions

To use this API, your app needs the following permission:

* `catalog_management`

## Reading

To list professional services items in a catalog, send a `GET` request:

```
GET /v25.0/{product-catalog-id}/professional_services HTTP/1.1
Host: graph.facebook.com
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `filter` | string | **Optional**. JSON-encoded WCA filter rule for filtering professional services. For example: `{"service_category":{"eq":"Home Services"}​}`. See [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) for the full list of filter operators. |
| `summary` | boolean | **Optional**. When `true`, includes a `summary` object with `total_count` in the response. |
| `limit` | integer | **Optional**. Maximum number of items to return per page. |
| `before` | string | **Optional**. Cursor for backward pagination. |
| `after` | string | **Optional**. Cursor for forward pagination. |

### Fields

Reading from this edge will return a JSON formatted result:

```
{
  "data": [],
  "paging": {},
  "summary": {}
}
```

#### `data`

A list of [Professional Services](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services) nodes. See the [Professional Services](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services#reading-fields) reference for the full list of fields.

#### `paging`

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### `summary`

Aggregated information about the edge, such as counts. Specify `summary=true` as a query parameter to include this in the response.

| Field | Type | Description |
| --- | --- | --- |
| `total_count` | integer | Total number of items in the catalog. |

## Creating

To create a professional services item in a catalog, send a `POST` request:

```
POST /v25.0/{product-catalog-id}/professional_services HTTP/1.1
Host: graph.facebook.com
Content-Type: application/json

{
  "retailer_id": "svc-001",
  "name": "Premium Home Cleaning",
  "description": "Professional deep cleaning for homes and apartments",
  "image_url": "https://example.com/cleaning-service.jpg",
  "url": "https://example.com/home-cleaning",
  "service_category": "Home Services",
  "duration": "3 hours",
  "price": "150.00 USD"
}
```

### Parameters

The following fields are required: `retailer_id`, `name`, `image_url`, `url`. All other fields are optional.

For the full list of supported fields, see the [Professional Services node — Fields](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services#reading-fields).

### Response

```
{
  "id": "1234567890"
}
```

## Updating

You can't update the Product Catalog Professional Services edge directly. To update individual professional services items, use the [Professional Services](https://developers.facebook.com/docs/marketing-api/catalog/reference/professional-services#updating) node.

## Deleting

You can't delete items from the Product Catalog Professional Services edge directly. To delete individual professional services items, use the [Items Batch API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch).
