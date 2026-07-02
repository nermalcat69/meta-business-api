---
title: "Business User Assigned Apps"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_business_asset_groups
---

# Business User Assigned Apps

Updated: May 21, 2019

## Reading

AssignedApps

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-user-id}/assigned_apps HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-user-id%7D%2Fassigned_apps&version=v25.0)

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

A list of [Application](https://developers.facebook.com/docs/graph-api/reference/application) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `can_be_removed` *bool* | A boolean to allow this object can be removed or not |
| `permitted_tasks` *list<string>* | Tasks that are assignable on this object |
| `tasks` *list<string>* | Tasks of this particular user on this object    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total number of objects on this edge    default |

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
