---
title: "Ads Pixel Segments"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/segments
---

# Ads Pixel Segments

Updated: May 18, 2019

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/segments HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fsegments&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset` *string* | friendly range such as last\_7\_days, instead of start/end date |
| `end_date` *datetime* | end date (exclusive) of traffic to analyze |
| `site_cpm` *int64* | CPM expected for site-wide ads. Used to project segment-level CPM and revenue. |
| `sort` *string* | Field to sort the result, and direction of sorting. You can specify sorting direction by appending "\_ascending" or "\_descending" to the sort field. By default, the sorting direction is ascending. |
| `start_date` *datetime* | first date of traffic to analyze |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsSegments nodes.

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
