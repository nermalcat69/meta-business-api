---
title: "System User Assigned Monetization Properties"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_offline_conversion_data_sets
---

# System User Assigned Monetization Properties

Updated: May 21, 2019

## Reading

AssignedMonetizationProperties

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{system-user-id}/assigned_monetization_properties HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_monetization_properties&version=v25.0)

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

A list of AdMonetizationProperty nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `tasks` *list<string>* | tasks    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total number of objects on this edge    default |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
