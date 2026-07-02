---
title: "Ads Pixel Assigned Users"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/assigned_users
---

# Ads Pixel Assigned Users

Updated: Jun 7, 2019

## Reading

Fetch users that are assigned to the pixel.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ads-pixel-id}/assigned_users HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fassigned_users&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `business` *numeric string or integer* | business  required |

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

A list of AssignedUser nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks` *list<string>* | Tasks that are assignable on this object |
| `tasks` *list<string>* | All unpacked roles/tasks of this particular user on this object    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | Total number of business and system users assigned to this pixel |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
