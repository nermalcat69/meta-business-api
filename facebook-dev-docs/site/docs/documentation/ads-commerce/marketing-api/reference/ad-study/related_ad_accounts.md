---
title: "Ad Study Related Ad Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-study/related_ad_accounts
---

# Ad Study Related Ad Accounts

Updated: Dec 11, 2019

## Reading

Ad accounts that can see and use the study

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-study-id}/related_ad_accounts HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-study-id%7D%2Frelated_ad_accounts&version=v25.0)

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

A list of [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) nodes.

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
