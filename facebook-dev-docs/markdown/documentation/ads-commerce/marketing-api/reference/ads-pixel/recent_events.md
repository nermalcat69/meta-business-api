---
title: "Ads Pixel Recent Events"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/recent_events
---

# Ads Pixel Recent Events

Updated: May 18, 2019

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/recent_events HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Frecent_events&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `event` *string* | Specify the event whose counts you want  required |
| `lookback_window` *int64* | The lookback window in seconds specifying how far back you want the event counts from  required |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsPixelRecentEventsResult nodes.

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
