---
title: "Custom Audience Capabilities"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/health
---

# Custom Audience Capabilities

Updated: May 4, 2020

## Reading

Implementation for POST

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{custom-audience-id}/capabilities HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fcapabilities&version=v25.0)

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

A list of [CustomAudienceCapabilities](https://developers.facebook.com/docs/marketing-api/reference/custom-audience-capabilities) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
