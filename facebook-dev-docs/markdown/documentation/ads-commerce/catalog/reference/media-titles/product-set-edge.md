---
title: "Product Catalog Media Titles"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles/product-set-edge
---

# Product Catalog Media Titles

Updated: Apr 17, 2026

The Product Catalog Media Titles edge allows you to list and create media title items (movies, TV shows, music) in a product catalog.

## Permissions

To use this API, your app needs the following permission:

* `catalog_management`

## Reading

To list media title items in a catalog, send a `GET` request:

```
GET /v25.0/{product-catalog-id}/media_titles HTTP/1.1
Host: graph.facebook.com
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `filter` | string | **Optional**. JSON-encoded WCA filter rule for filtering media titles. For example: `{"media_category":{"eq":"Movie"}​}`. See [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) for the full list of filter operators. |
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

A list of [Media Title](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles) nodes. See the [Media Title](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles) reference for the full list of fields.

#### `paging`

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### `summary`

Aggregated information about the edge, such as counts. Specify `summary=true` as a query parameter to include this in the response.

| Field | Type | Description |
| --- | --- | --- |
| `total_count` | integer | Total number of items in the catalog. |

## Creating

To create a media title item in a catalog, send a `POST` request:

```
POST /v25.0/{product-catalog-id}/media_titles HTTP/1.1
Host: graph.facebook.com
Content-Type: application/json

{
  "retailer_id": "media-001",
  "name": "The Great Adventure",
  "description": "An epic journey across the world",
  "image_url": "https://example.com/poster.jpg",
  "url": "https://example.com/the-great-adventure",
  "media_category": "Movie",
  "genre": ["Action", "Adventure"],
  "content_rating": "PG-13"
}
```

### Parameters

The following fields are required: `retailer_id`, `name`, `description`, `image_url`, `url`. All other fields are optional.

For the full list of supported fields, see the [Media Title node — Fields](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles#reading-fields).

### Response

```
{
  "id": "1234567890"
}
```

## Updating

You can't perform this operation on this node. To update individual media title items, use the [Media Title](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles#updating) node.

## Deleting

You can't perform this operation on this node. To delete individual media title items, use the [Media Title](https://developers.facebook.com/documentation/ads-commerce/catalog/reference/media-titles#deleting) node.
