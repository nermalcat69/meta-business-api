---
title: "Business Owned Domains"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_instagram_accounts
---

# Business Owned Domains

Updated: Aug 28, 2019

## Reading

Domains owned by this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/owned_domains HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_domains&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

##### data

A list of OwnedDomain nodes.

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
