---
title: "Ads Pixel Real Time Event Log"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/real_time_event_log
---

# Ads Pixel Real Time Event Log

Updated: May 18, 2019

## Reading

Edge to read list of recent pixel fires for the logged in user

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/real_time_event_log HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Freal_time_event_log&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `end_time` *datetime/timestamp* | Do not return pixel fires after this (epoch) time |
| `limit` *int64* | **Default value:** `100`  latest number of pixel fires at most within a time window |
| `session_key` *string* | Unique identifier for a real time logging component |
| `start_time` *datetime/timestamp* | Do not return pixel fires before this (epoch) time |
| `trace_id` *string* | unique id used to record every individual pixel request |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsPixelRealTimeEventLogResult nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

## Deleting
