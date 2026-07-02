---
title: "Product Feed Articles and Publications"
source_url: https://developers.facebook.com/documentation/ads-commerce/catalog/reference/professional-services
---

# Product Feed Articles and Publications

Updated: Jun 30, 2026

The Product Feed Articles and Publications edge allows you to list the article and publication items (ebooks, audiobooks, magazines, newspapers, and other written content) that a specific product feed ingested.

## Permissions

To use this API, your app needs the following permission:

* `catalog_management`

## Reading

To list article and publication items from a product feed, send a `GET` request:

```
GET /v25.0/{product-feed-id}/articles_and_publications HTTP/1.1
Host: graph.facebook.com
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `summary` | boolean | **Optional**. When `true`, includes a `summary` object with `total_count` in the response. |
| `limit` | integer | **Optional**. Maximum number of items to return per page. |
| `before` | string | **Optional**. Cursor for backward pagination. |
| `after` | string | **Optional**. Cursor for forward pagination. |

### Fields

A GET request to the Product Feed Articles and Publications edge returns a JSON-formatted result:

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

Aggregated information about the edge, such as counts. Specify `summary=true` as a query parameter to include the `summary` object in the response.

| Field | Type | Description |
| --- | --- | --- |
| `total_count` | integer | Total number of items in the feed. |

## Creating

You can’t perform this operation on this node. To create product feeds, use the [Product Feed](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed#Creating) node.

## Updating

You can’t perform this operation on this node. To update product feeds, use the [Product Feed](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed) node.

## Deleting

You can’t perform this operation on this node. To delete product feeds, use the [Product Feed](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed) node.
