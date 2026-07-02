---
title: "Ads Pixel Analytics Funnel Query"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/analytics_funnel_query
---

# Ads Pixel Analytics Funnel Query

Updated: Jul 29, 2021

## Reading

Ad hoc funnel query edge.returns query results on GET or query\_ids for submitted queries on POST.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/analytics_funnel_query HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fanalytics_funnel_query&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `query_ids` *list<string>* | **Default value:** `Vec`  Set of funnel query ids for which results can be requested |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AnalyticsFunnelQueryResult nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
