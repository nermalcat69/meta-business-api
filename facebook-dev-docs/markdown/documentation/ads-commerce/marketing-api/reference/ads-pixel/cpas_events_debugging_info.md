---
title: "Ads Pixel Cpas Events Debugging Info"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/cpas_events_debugging_info
---

# Ads Pixel Cpas Events Debugging Info

Updated: Feb 25, 2022

## Reading

Debugging info for events within the last days, showing counts per (event\_name, diagnostic\_name)

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/cpas_events_debugging_info HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fcpas_events_debugging_info&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `action_source` *enum {WEBSITE, PHYSICAL\_STORE}* | source of origin of conversions |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of ExternalEventSourceCPASEventsDebuggingInfo nodes.

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
