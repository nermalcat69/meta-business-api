---
title: "Ads Pixel Audiences"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/audiences
---

# Ads Pixel Audiences

Updated: Feb 14, 2023

## Reading

Pixel Audiences

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/audiences HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Faudiences&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `action_source` *enum {WEBSITE, PHYSICAL\_STORE}* | action\_source |
| `ad_account` *numeric string* | optional ad account ID to filter on |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [CustomAudience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) nodes.

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
