---
title: "Ads Pixel Analytics Segments"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/analytics_segments
---

# Ads Pixel Analytics Segments

Updated: Jun 19, 2019

## Reading

Analytics segments for an object

#### Feature Permissions

| Name | Description |
| --- | --- |
| Page Public Content Access | This [feature permission](https://developers.facebook.com/docs/apps/review/feature) may be required. |

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/analytics_segments HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fanalytics_segments&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AnalyticsSegment nodes.

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
