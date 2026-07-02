---
title: "Product Catalog Event Stats"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/external_event_sources
---

# Product Catalog Event Stats

Updated: Feb 2, 2026

## Reading

Stats on pixel fires and app events from sources associated with this catalog.

Each result object contains the count of matched and unmatched content ids and the count of matched and unmatched unique content ids for each day over the previous 28 days. All results are automatically broken down by DA events (`ViewContent`, `AddToCart` and `Purchase`) and source of the event (pixel or app). Additional breakdowns like `device_type` can be requested for more granularity. Statistics about only those external event sources which the user making the request has access to, would be returned.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
GET /v25.0/<PRODUCT_CATALOG_ID>/event_stats HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CPRODUCT_CATALOG_ID%3E%2Fevent_stats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `breakdowns` *array<enum {DEVICE\_TYPE}>* | The way your results will be broken down. If you specify `["device_type"]` your results will be grouped by device\_type, as well as by source and event. Results are always broken down by DA events (`ViewContent`, `AddToCart` and `Purchase`) and source of event (pixel or app) by default. |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [ProductEventStat](https://developers.facebook.com/docs/marketing-api/reference/product-event-stat) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 100 | Invalid parameter |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
