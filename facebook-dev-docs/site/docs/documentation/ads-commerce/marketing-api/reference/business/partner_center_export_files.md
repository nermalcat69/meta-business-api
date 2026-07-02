---
title: "Business Partner Account Linking"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partner_center_export_files
---

# Business Partner Account Linking

Updated: Jan 24, 2024

## Reading

get partner\_account\_linking for specific business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/partner_account_linking HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpartner_account_linking&version=v25.0)

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

A list of [PartnerAccountLinking](https://developers.facebook.com/docs/graph-api/reference/partner-account-linking) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
