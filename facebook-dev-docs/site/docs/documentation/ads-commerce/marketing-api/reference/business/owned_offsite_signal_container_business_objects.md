---
title: "Business Owned Instagram Assets"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_offsite_signal_container_business_objects
---

# Business Owned Instagram Assets

Updated: Jul 21, 2025

## Reading

BusinessOwnedInstagramAssets

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/owned_instagram_assets HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_instagram_assets&version=v25.0)

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

A list of [InstagramBusinessAsset](https://developers.facebook.com/docs/graph-api/reference/instagram-business-asset) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2500 | Error parsing graph query |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
