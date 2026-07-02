---
title: "Ads Pixel Domain Control Rule"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/domain_control_rule
---

# Ads Pixel Domain Control Rule

Updated: May 18, 2019

## Reading

This edge provides read access to the domain control rules for a given pixel.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/domain_control_rule HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fdomain_control_rule&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `type` *enum {BLACKLIST, WHITELIST}* | Type of domain control rule |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsPixelDomainControlRule nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting
