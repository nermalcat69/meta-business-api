---
title: "Product Catalog Apps and Software"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software/product-set-edge
---

# Product Catalog Apps and Software

Updated: Apr 17, 2026

The Product Catalog Apps and Software edge allows you to list and create app and software items (mobile apps, desktop software, and games) in a product catalog.

## Permissions

You need the following permission to use this API:

* `catalog_management`

## Reading

List app and software items in a catalog by sending a `GET` request:

```
GET /v25.0/{product-catalog-id}/apps_and_software HTTP/1.1
Host: graph.facebook.com
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `filter` | string | **Optional**. JSON-encoded WCA (Whole Catalog Attribute) filter rule for apps and software. For example: `{"app_category":{"eq":"Games"}​}`. See [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) for the full list of filter operators. |
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

A list of [Apps and Software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software) nodes. See the [Apps and Software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software#reading-fields) reference for the full list of fields.

#### `paging`

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### `summary`

Aggregated information about the edge, such as counts. Specify `summary=true` as a query parameter to include this in the response.

| Field | Type | Description |
| --- | --- | --- |
| `total_count` | integer | Total number of items in the catalog. |

## Creating

Create an app or software item in a catalog by sending a `POST` request:

```
POST /v25.0/{product-catalog-id}/apps_and_software HTTP/1.1
Host: graph.facebook.com
Content-Type: application/json

{
  "retailer_id": "app-001",
  "name": "Super Puzzle Game",
  "description": "A fun and challenging puzzle game for all ages",
  "image_url": "https://example.com/app-icon.jpg",
  "url": "https://example.com/super-puzzle-game",
  "app_category": "Games",
  "genre": ["Puzzle", "Casual"],
  "operating_system": ["iOS", "Android"]
}
```

### Parameters

The following fields are required: `retailer_id`, `name`, `description`, `image_url`, and `url`. All other fields are optional.

For the full list of supported fields, see the [Apps and Software node — Fields](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software#reading-fields).

### Response

```
{
  "id": "1234567890"
}
```

## Updating

You can't perform this operation on this node. To update individual app or software items, use the [Apps and Software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software#updating) node.

## Deleting

You can't perform this operation on this node. To delete individual app or software items, use the [Apps and Software](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/apps-and-software#deleting) node.
