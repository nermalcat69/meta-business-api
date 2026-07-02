---
title: "Business Client Publisher Block Lists"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_whatsapp_business_accounts
---

# Business Client Publisher Block Lists

Updated: Jul 26, 2019

## Reading

This business has access to these client-owned publisher block lists.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/client_publisher_block_lists HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_publisher_block_lists&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [PublisherBlockList](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks` *list<string>* | Tasks that are assignable to users on this asset |

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
