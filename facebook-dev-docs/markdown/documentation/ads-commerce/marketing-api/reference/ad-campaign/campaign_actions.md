---
title: "Ad Campaign Campaign Actions"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/campaign_actions
---

# Ad Campaign Campaign Actions

Updated: May 3, 2023

## Reading

Actionable Insights for the specified ad-set, delivered in form of Ad Proposals.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-set-id}/campaign_actions HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fcampaign_actions&version=v25.0)

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

A list of [CampaignActionsData](https://developers.facebook.com/docs/graph-api/reference/campaign-actions-data) nodes.

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
