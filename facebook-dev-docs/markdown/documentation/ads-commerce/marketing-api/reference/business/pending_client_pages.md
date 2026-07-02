---
title: "Business Pending Client Apps"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_pages
---

# Business Pending Client Apps

Updated: Jul 29, 2019

## Reading

The business requested access to these client apps waits for approval.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/pending_client_apps HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_client_apps&version=v25.0)

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

A list of BusinessApplicationRequest nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `is_requested` *bool* | True if the business requested access to the app and false if the app is being shared to the business |
| `permitted_tasks` *list<string>* | permitted\_tasks |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |

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
