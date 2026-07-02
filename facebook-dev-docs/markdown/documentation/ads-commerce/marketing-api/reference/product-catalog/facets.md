---
title: "Product Catalog External Event Sources"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/facets
---

# Product Catalog External Event Sources

Updated: Jan 6, 2026

## Reading

external event sources

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{product-catalog-id}/external_event_sources HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fexternal_event_sources&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

##### data

A list of ExternalEventSource nodes.

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of event sources attached to the catalog |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### /{product\_catalog\_id}/external\_event\_sources

You can make a POST request to *external\_event\_sources* edge from the following paths:

* [/{product\_catalog\_id}/external\_event\_sources](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/external_event_sources)

When posting to this edge, an [ExternalEventSource](https://developers.facebook.com/docs/graph-api/reference/external-event-source) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `external_event_sources` *A JSON-encoded rule* | An array of event source ids |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
