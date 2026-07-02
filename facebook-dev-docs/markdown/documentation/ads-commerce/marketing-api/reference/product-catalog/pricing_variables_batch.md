---
title: "Product Catalog Marketplace Partner Signals"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/pricing_variables_batch
---

# Product Catalog Marketplace Partner Signals

Updated: Mar 5, 2026

## Reading

You can’t perform this operation on this endpoint.

## Creating

You can't perform this operation on this endpoint.

## Updating

### /{product\_catalog\_id}/marketplace\_partner\_signals

You can update a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a POST request to [/{product\_catalog\_id}/marketplace\_partner\_signals](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/marketplace_partner_signals).

#### Parameters

| Parameter | Description |
| --- | --- |
| `conversion_type` *enum {ATTRIBUTED, IN\_SESSION}* | conversion\_type  Identifier on whether the specified event happened within the original session of the user landing on the partner's page (IN\_SESSION) or within the attribution window after the initial session (ATTRIBUTED) |
| `event_id` *string* | event\_id  Unique identifier for conversion events. If there are multiple conversion events tied to a single `mp_clid`, this field will be used to differentiate between those events |
| `event_name` *enum {PURCHASE, ADD\_TO\_CART, VIEW\_ITEM, OFFER\_SUBMITTED, PURCHASE\_VIA\_OFFER, TEST}* | event\_name  `TEST` events can be used to send test data to confirm API functionality that Marketplace will ignore  required |
| `event_source_url` *string* | event\_source\_url |
| `event_time` *datetime/timestamp* | event\_time  required |
| `offer_data` *JSON object* | offer\_data  ---   `original_price` *float* original\_price  required  `offer_price` *float* offer\_price  required  `currency` *string* currency  required  Show child parameters |
| `order_data` *JSON object* | order\_data  ---   `order_details` *array<JSON object>* **Default value:** `[]` order\_details  ---   `item_price` *float* item\_price  required  `item_quantity` *int64* item\_quantity  required  `item_id` *string* item\_id  required  Show child parameters  `currency` *string* currency  required  `order_total` *float* order\_total  required  Show child parameters |
| `user_data` *JSON object* | user\_data  required  ---   `mp_clid` *string* mp\_clid  required  Show child parameters |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
validation_status:  List  [ Struct  {
errors:  List  [ Struct  {
message: string,
}],
warnings:  List  [ Struct  {
message: string,
}],
}],
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Deleting

You can't perform this operation on this endpoint.
