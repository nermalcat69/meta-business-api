---
title: "Business Publisher Block Lists"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_audience_permissions
---

# Business Publisher Block Lists

Updated: Jun 16, 2022

## Reading

This business has access to these publisher block lists.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/publisher_block_lists HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpublisher_block_lists&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `search_query` *string* | Search Query containing the block list name to filter |
| `sort_by` *enum {BLOCK\_LIST\_NAME\_ASCENDING, BLOCK\_LIST\_NAME\_DESCENDING, LAST\_UPDATED\_ASCENDING, LAST\_UPDATED\_DESCENDING}* | **Default value:** `"LAST_UPDATED_DESCENDING"`  Sort type for block lists |

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

A list of [PublisherBlockList](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | the number of publisher block lists owned by the business    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
