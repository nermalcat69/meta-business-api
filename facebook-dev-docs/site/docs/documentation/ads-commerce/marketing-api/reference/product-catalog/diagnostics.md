---
title: "Product Catalog Destinations"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/diagnostics
---

# Product Catalog Destinations

Updated: Aug 27, 2024

Travel destinations in a catalog. See [Dynamic Ads for Travel, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads).

## Reading

Retrieve destinations from a product catalog

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/destinations HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fdestinations&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination` *boolean* | Used for iterating over the edge in large chunks |
| `filter` *A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

##### data

A list of [Destination](https://developers.facebook.com/docs/graph-api/reference/destination) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of destinations returned by the query |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
