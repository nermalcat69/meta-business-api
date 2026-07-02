---
title: "Ads Pixel Shared Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_accounts
---

# Ads Pixel Shared Accounts

Updated: Sep 14, 2021

## Reading

At the end of September 2024, the `POST /{pixel-id}/shared_accounts` API (including previous versions) will not support sharing of pixels with an ad account, if a business account does not have access to both pixel and ad account. Refer to the [pixel sharing API solution](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) to use `POST /{pixel-id}/agencies` or use `POST {ad_account}/agencies` to share into a business account, then use `POST /{pixel-id}/shared_accounts` to link pixel and ad account

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
GET /v25.0/{pixel-id}/shared_accounts?business=%7Bbusiness-id%7D HTTP/1.1
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bpixel-id%7D%2Fshared_accounts%3Fbusiness%3D%257Bbusiness-id%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `business` *numeric string or integer* | ID of the business whose ad accounts the pixel was shared to are fetched  required |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

##### data

A list of [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) nodes.

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

### /{ads\_pixel\_id}/shared\_accounts

You can make a POST request to *shared\_accounts* edge from the following paths:

* [/{ads\_pixel\_id}/shared\_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_accounts)

When posting to this edge, no Graph object will be created.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
POST /v25.0/{pixel-id}/shared_accounts HTTP/1.1
Host: graph.facebook.com

account_id=%7Bad-account-id%7D&business=%7Bbusiness-id%7D
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%7Bpixel-id%7D%2Fshared_accounts%3Faccount_id%3D%257Bad-account-id%257D%26business%3D%257Bbusiness-id%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `account_id` *numeric string* | SELF\_EXPLANATORY  required |
| `business` *numeric string or integer* | SELF\_EXPLANATORY  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

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
| 190 | Invalid OAuth 2.0 Access Token |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

### /{ads\_pixel\_id}/shared\_accounts

You can dissociate an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) from an [AdsPixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel) by making a DELETE request to [/{ads\_pixel\_id}/shared\_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_accounts).

#### Parameters

| Parameter | Description |
| --- | --- |
| `account_id` *numeric string* | SELF\_EXPLANATORY  required |
| `business` *numeric string or integer* | SELF\_EXPLANATORY  required |

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

---
