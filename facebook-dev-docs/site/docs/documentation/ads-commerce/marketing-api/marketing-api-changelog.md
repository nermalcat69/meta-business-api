---
title: "System User Assigned Whatsapp Business Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/marketing-api-changelog
---

# System User Assigned Whatsapp Business Accounts

Updated: May 18, 2019

## Reading

WhatsApp business accounts that are assigned to the business user

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{system-user-id}/assigned_whatsapp_business_accounts HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_whatsapp_business_accounts&version=v25.0)

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

A list of [WhatsAppBusinessAccount](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `tasks` *list<string>* | Tasks the user has on the WABA    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | total\_count |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
