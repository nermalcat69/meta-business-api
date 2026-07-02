---
title: "Ad Account Product Audiences"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/proposals
---

# Ad Account Product Audiences

Updated: May 18, 2019

## Reading

You can't perform this operation on this endpoint.

## Creating

### /act\_{ad\_account\_id}/product\_audiences

You can make a POST request to *product\_audiences* edge from the following paths:

* [/act\_{ad\_account\_id}/product\_audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/product_audiences)

When posting to this edge, an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) will be created.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
POST /v25.0/act_<AD_ACCOUNT_ID>/product_audiences HTTP/1.1  
Host: graph.facebook.com  
  
name=Test+Iphone+Product+Audience&product_set_id=%3CPRODUCT_SET_ID%3E&inclusions=%5B%7B%22retention_seconds%22%3A86400%2C%22rule%22%3A%7B%22and%22%3A%5B%7B%22event%22%3A%7B%22eq%22%3A%22AddToCart%22%7D%7D%2C%7B%22userAgent%22%3A%7B%22i_contains%22%3A%22iPhone%22%7D%7D%5D%7D%7D%5D&exclusions=%5B%7B%22retention_seconds%22%3A172800%2C%22rule%22%3A%7B%22event%22%3A%7B%22eq%22%3A%22Purchase%22%7D%7D%7D%5D
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fproduct_audiences%3Fname%3DTest%2BIphone%2BProduct%2BAudience%26product_set_id%3D%253CPRODUCT_SET_ID%253E%26inclusions%3D%255B%257B%2522retention_seconds%2522%253A86400%252C%2522rule%2522%253A%257B%2522and%2522%253A%255B%257B%2522event%2522%253A%257B%2522eq%2522%253A%2522AddToCart%2522%257D%257D%252C%257B%2522userAgent%2522%253A%257B%2522i_contains%2522%253A%2522iPhone%2522%257D%257D%255D%257D%257D%255D%26exclusions%3D%255B%257B%2522retention_seconds%2522%253A172800%252C%2522rule%2522%253A%257B%2522event%2522%253A%257B%2522eq%2522%253A%2522Purchase%2522%257D%257D%257D%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `associated_audience_id` *int64* | SELF\_EXPLANATORY |
| `creation_params` *dictionary { string : <string> }* | SELF\_EXPLANATORY |
| `description` *string* | SELF\_EXPLANATORY |
| `enable_fetch_or_create` *boolean* | enable\_fetch\_or\_create |
| `event_sources` *array<JSON object>* | event\_sources  ---   `id` *int64* id  required  `type` *enum {APP, OFFLINE\_EVENTS, PAGE, PIXEL}* type  required  Show child parameters |
| `exclusions` *list<Object>* | SELF\_EXPLANATORY  ---   `booking_window` *Object* ---   `min_seconds` *int64*  `max_seconds` *int64*  Show child parameters  `count` *Object*  `event` *string*  `type` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE\_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG\_OF\_ACCOUNTS, STUDY\_RULE\_AUDIENCE, FOX, MEASUREMENT, REGULATED\_CATEGORIES\_AUDIENCE, BIDDING, EXCLUSION, MESSENGER\_SUBSCRIBER\_LIST}*  `retention` *Object* ---   `min_seconds` *integer* required  `max_seconds` *integer* required  Show child parameters  `retention_days` *int64*  `retention_seconds` *integer*  `rule` *Object*  `pixel_id` *int64*  Show child parameters |
| `inclusions` *list<Object>* | SELF\_EXPLANATORY  ---   `booking_window` *Object* ---   `min_seconds` *int64*  `max_seconds` *int64*  Show child parameters  `count` *Object*  `event` *string*  `type` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE\_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG\_OF\_ACCOUNTS, STUDY\_RULE\_AUDIENCE, FOX, MEASUREMENT, REGULATED\_CATEGORIES\_AUDIENCE, BIDDING, EXCLUSION, MESSENGER\_SUBSCRIBER\_LIST}*  `retention` *Object* ---   `min_seconds` *integer* required  `max_seconds` *integer* required  Show child parameters  `retention_days` *int64*  `retention_seconds` *integer*  `rule` *Object*  `pixel_id` *int64*  Show child parameters |
| `name` *string* | SELF\_EXPLANATORY  required |
| `opt_out_link` *string* | SELF\_EXPLANATORY |
| `parent_audience_id` *int64* | SELF\_EXPLANATORY |
| `product_set_id` *numeric string or integer* | SELF\_EXPLANATORY  required |
| `subtype` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE\_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG\_OF\_ACCOUNTS, STUDY\_RULE\_AUDIENCE, FOX, MEASUREMENT, REGULATED\_CATEGORIES\_AUDIENCE, BIDDING, EXCLUSION, MESSENGER\_SUBSCRIBER\_LIST}* | SELF\_EXPLANATORY |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
message: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2654 | Failed to create custom audience |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
