---
title: "Business Collaborative Ads Suggested Partners"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/commerce_merchant_settings
---

# Business Collaborative Ads Suggested Partners

Updated: Apr 6, 2022

## Reading

Suggested [Collaborative Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads#collaborative-ads) partners for a business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/collaborative_ads_suggested_partners HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcollaborative_ads_suggested_partners&version=v25.0)

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

A list of [CPASAdvertiserPartnershipRecommendation](https://developers.facebook.com/docs/graph-api/reference/cpas-advertiser-partnership-recommendation) nodes.

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
