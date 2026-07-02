---
title: "Ad Label Adsets"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label/adsets
---

# Ad Label Adsets

Updated: May 21, 2019

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-label-id}/adsets HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-label-id%7D%2Fadsets&version=v25.0)

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

A list of [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
