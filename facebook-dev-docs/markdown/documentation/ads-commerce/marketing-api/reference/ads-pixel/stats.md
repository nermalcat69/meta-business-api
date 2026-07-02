---
title: "Ads Pixel Stats"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/stats
---

# Ads Pixel Stats

Updated: Dec 10, 2025

## Reading

AdsPixelStats

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/stats HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fstats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `agent` *string* | agent |
| `aggregation` *enum{browser\_type, custom\_data\_field, device\_os, device\_type, event, host, match\_keys, had\_pii, pixel\_fire, event\_detection\_method, url, event\_value\_count, url\_by\_rule, event\_total\_counts, event\_source, event\_processing\_results}* | **Default value:** `event`  The aggregation to use for the stats. Default: `event`. `browser_type`: Get the number of pixel fires per browser type, broken down by hour. `custom_data_field`: Get the number of pixel fires for the top 100 custom data fields of an event broken down by hour. `device_os`: Get the number of pixel fires per mobile device OS, broken down by hour. `device_type`: Get the number of pixel fires per mobile device type, broken down by hour. `event`: Get the number of pixel fires for the top 100 events broken down by hour. `host`: Get the number of pixel fires for the top 10,000 hosts broken down by hour. `url`: Get the number of pixel fires for the top 10,000 URLs broken down by hour. Please note that query parameters are stripped from the URLs. `pixel_fire`: Get the number of pixel fires by hour. `event_total_counts`: Get the number of pixel fires for all events over the entire time span. |
| `end_time` *datetime/timestamp* | **Default value:** `<request_time>`  The end time of the stats, in the format of Unix or ISO 8601 timestamp. You can get the data up to seven days from the request time. |
| `event` *string* | Specify which event to aggregate on, when the `aggregation` is `custom_data_field` |
| `event_source` *string* | Specify WEB\_ONLY or SERVER\_ONLY to filter the pixel events and stats |
| `start_time` *datetime/timestamp* | The start time of the stats, in the format of Unix or ISO 8601 timestamp. |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [AdsPixelStatsResult](https://developers.facebook.com/docs/marketing-api/reference/ads-pixel-stats-result) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
