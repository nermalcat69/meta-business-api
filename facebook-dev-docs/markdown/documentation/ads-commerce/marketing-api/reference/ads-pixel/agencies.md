---
title: "Ads Pixel Agencies"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/agencies
---

# Ads Pixel Agencies

Updated: Aug 5, 2024

## Reading

AdsPixelAgencies

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/agencies HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fagencies&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

##### data

A list of [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_roles` *list<string>* | permitted\_roles |
| `permitted_tasks` *list<string>* | permitted\_tasks |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | total\_count    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

## Deleting

## Reference

Refer to [Pixel Agency Sharing](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) guide
