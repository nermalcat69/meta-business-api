---
title: "Business Client Apps"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_business_asset_groups
---

# Business Client Apps

Updated: Aug 8, 2023

## Reading

This business can access these client-owned apps.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/client_apps HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_apps&version=v25.0)

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
| `permitted_tasks` *list<string>* | Tasks that are assignable to users on this asset |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total number of apps.    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

## Creating

### /{business\_id}/client\_apps

You can make a POST request to *client\_apps* edge from the following paths:

* [/{business\_id}/client\_apps](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_apps)

When posting to this edge, an [Application](https://developers.facebook.com/docs/graph-api/reference/application) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `app_id` | App ID.  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_status: enum,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting
