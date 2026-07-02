---
title: "Product Catalog Articles and Publications"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/reference/articles-and-publications/product-set-edge
---

# Product Catalog Articles and Publications

Updated: Jun 30, 2026

The Product Catalog Articles and Publications edge allows you to list and create article and publication items (ebooks, audiobooks, magazines, newspapers, and other written content) in a product catalog.

## Permissions

To use this API, your app needs the following permission:

* `catalog_management`

## Reading

To list article and publication items in a catalog, send a `GET` request:

```
GET /v25.0/{product-catalog-id}/articles_and_publications HTTP/1.1
Host: graph.facebook.com
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `filter` | string | **Optional**. JSON-encoded WCA filter rule for filtering articles and publications. For example: `{"publication_category":{"eq":"Book"}}`. See [Product Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) for the full list of filter operators. |
| `summary` | boolean | **Optional**. When `true`, includes a `summary` object with `total_count` in the response. |
| `limit` | integer | **Optional**. Maximum number of items to return per page. |
| `before` | string | **Optional**. Cursor for backward pagination. |
| `after` | string | **Optional**. Cursor for forward pagination. |

### Fields

A GET request to the Articles and Publications edge returns a JSON-formatted result:

```
{
  "data": [],
  "paging": {},
  "summary": {}
}
```

#### `data`

A list of [Articles and Publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications) nodes. See the [Articles and Publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications#reading-fields) reference for the full list of fields.

#### `paging`

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### `summary`

Aggregated information about the edge, such as counts. Specify `summary=true` as a query parameter to include this in the response.

| Field | Type | Description |
| --- | --- | --- |
| `total_count` | integer | Total number of items in the catalog. |

## Creating

To create an article or publication item in a catalog, send a `POST` request:

```
POST /v25.0/{product-catalog-id}/articles_and_publications HTTP/1.1
Host: graph.facebook.com
Content-Type: application/json

{
  "retailer_id": "pub-001",
  "name": "The Art of Modern Architecture",
  "description": "An insightful guide exploring contemporary architectural design",
  "image_url": "https://example.com/book-cover.jpg",
  "url": "https://example.com/art-of-modern-architecture",
  "publication_category": "Book",
  "author": ["Jane Smith"],
  "genre": ["Architecture", "Design"]
}
```

### Parameters

The following fields are required: `retailer_id`, `name`, `description`, `image_url`, `url`. All other fields are optional.

For the full list of supported fields, see the [Articles and Publications node — Fields](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications#reading-fields).

### Response

```
{
  "id": "1234567890"
}
```

## Updating

You can’t update items from the Articles and Publications edge directly. To update individual article or publication items, use the [Articles and Publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications#updating) node.

## Deleting

You can’t delete items from the Articles and Publications edge directly. To delete individual article or publication items, use the [Articles and Publications](https://developers.facebook.com/docs/marketing-api/catalog/reference/articles-and-publications#deleting) node.
