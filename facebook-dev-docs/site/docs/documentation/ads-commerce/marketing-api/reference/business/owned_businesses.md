---
title: "Business Owned Apps"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses
---

# Business Owned Apps

Updated: Jul 25, 2019

## Reading

List all apps owned by this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/owned_apps HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_apps&version=v25.0)

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

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |

## Creating

### /{business\_id}/owned\_apps

You can make a POST request to *owned\_apps* edge from the following paths:

* [/{business\_id}/owned\_apps](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_apps)

When posting to this edge, an [Application](https://developers.facebook.com/docs/graph-api/reference/application) will be created.

#### Parameters

This endpoint doesn't have any parameters.

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_status: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
