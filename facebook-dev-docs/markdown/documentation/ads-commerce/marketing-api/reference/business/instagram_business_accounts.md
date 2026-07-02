---
title: "Business Instagram Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_business_accounts
---

# Business Instagram Accounts

Updated: Jul 31, 2019

## Reading

This business can access these Instagram accounts.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/instagram_accounts HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finstagram_accounts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

##### data

A list of [IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user) nodes.

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

### /{business\_id}/instagram\_accounts

You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business\_id}/instagram\_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_accounts).

#### Parameters

| Parameter | Description |
| --- | --- |
| `instagram_account` *numeric string* | Instagram account ID.  required |

#### Return Type

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

---
