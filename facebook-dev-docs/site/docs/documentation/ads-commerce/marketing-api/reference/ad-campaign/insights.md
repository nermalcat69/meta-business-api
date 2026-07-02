---
title: "Ad Campaign Delivery Stats"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/insights
---

# Ad Campaign Delivery Stats

Updated: May 18, 2019

## Reading

Edge for delivery stats

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-set-id}/delivery_stats HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fdelivery_stats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `bid_recommendation_type` *enum {LOWEST\_COST\_TO\_COST\_CAP}* | The type of provided bid recommendation. Currently we only support lowest\_cost\_to\_cost\_cap, which recommends users to switch from lowest cost to cost cap. |
| `groups` *array<enum {LEGACY\_ALL, LEARNING\_STAGE\_COMMON\_INFO, BIDDING\_RECOMMENDATIONS, LEARNING\_STAGE\_EXIT, UNSUPPORTED\_FEATURES}>* | The groups of fields that being fetched |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdCampaignDeliveryStats nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
