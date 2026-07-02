---
title: "Ads Pixel Raw Fires"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/raw_fires
---

# Ads Pixel Raw Fires

Updated: May 18, 2019

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/raw_fires HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fraw_fires&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `event` *string* | Specify which event to filter raw fire for  required |
| `filter` *string* | The value coressponding to what you define in filter type |
| `filter_type` *enum{device\_type, event\_detection\_method, host, url}* | The filter to filter for raw data, can be any of the following: device\_type, host, or url |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsPixelRawFiresResult nodes.

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
