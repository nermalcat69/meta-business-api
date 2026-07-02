---
title: "Ad Campaign Adrules Governed"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/adrules_governed
---

# Ad Campaign Adrules Governed

Updated: May 21, 2019

## Reading

Ad rules that govern this ad set - by default, this only returns rules that either directly mention the ad set by id or indirectly through the set entity\_type

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-set-id}/adrules_governed HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fadrules_governed&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `pass_evaluation` *boolean* | If set, this will further filter the rules to only include those for which the ad set would evaluate to the boolean value of this param |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [AdRule](https://developers.facebook.com/docs/marketing-api/reference/ad-rule) nodes.

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
