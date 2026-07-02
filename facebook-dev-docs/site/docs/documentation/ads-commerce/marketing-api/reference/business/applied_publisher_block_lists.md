---
title: "Business An Publisher Blocklist Pages"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/applied_publisher_block_lists
---

# Business An Publisher Blocklist Pages

Updated: Sep 19, 2023

## Reading

Pages publisher blocklist for AN business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/an_publisher_blocklist_pages HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fan_publisher_blocklist_pages&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `page_ids` *array<numeric string>* | Returns data only for these IDs if specified |

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

A list of PagePublisher nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `an_blocklist_entry_type` *enum* | Blocklist entry type - either WHITELISTED or BLACKLISTED    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
