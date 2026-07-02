---
title: "Business Pending Client Ad Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_apps
---

# Business Pending Client Ad Accounts

Updated: Jul 29, 2019

## Reading

The business requested access to these ad accounts and is still waiting for approval by a client.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/pending_client_ad_accounts HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_client_ad_accounts&version=v25.0)

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

A list of BusinessAdAccountRequest nodes.

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

#### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
