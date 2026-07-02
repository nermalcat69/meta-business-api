---
title: "Fulfillment API Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api
---

# Fulfillment API Reference

Updated: Dec 4, 2025

Use this API to manage shipments (including **partial shipments**) on a given order.

## Attach a Shipment

Read this section to learn how to attach a shipment to a given order.

Shipments may include one and **only one tracking number**. For example, if you have an order with 2 items using 2 different tracking numbers, you make 2 API requests.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/shipments
```

### Request

| Attribute & Type | Description |
| --- | --- |
| `external_shipment_id`  Type: string | **Optional**  Unique external shipment ID representing a shipment as identified by the seller. Allowed characters are `alphanumeric` and `_`. |
| `items`  Type: `array` of [`items`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#items) | **Optional**  If omitted, all unfulfilled quantities of items on the order will be included in the shipment. |
| `tracking_info`  Type: [`tracking_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#tracking_info) | **Optional**  While optional, Meta recommends including tracking information, when available, for an improved buyer experience. |
| `fulfillment`  Type: [`fulfillment`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#fulfillment) | **Optional** |
| `idempotency_key`  Type: string | **Required**  Unique key per request. |
| `merchant_order_reference`  Type: string | **Optional**  ID representing the order in your (seller) order management system. Added only if this ID was not updated during [ACK](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_order) call. If this ID differs from the existing `merchant_order_reference` ID, then the exception is returned. |

### `items` object

| Attribute & Type | Description |
| --- | --- |
| `retailer_id`  Type: string | **Required if `item_id` is not provided**.  ID representing the product in the seller’s catalog. You must provide `retailer_id` or `item_id`, but not both. If `item_id` is provided, `retailer_id` must not be provided. |
| `item_id`  Type: string | **Required if `retailer_id` is not provided**.  A Meta-generated ID representing the line item on the order. This value is readable as the `id` field of the [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#item) response in the read. You must provide `retailer_id` or `item_id`, but not both. If `retailer_id` is provided, `item_id` must not be provided. |
| `quantity`  Type: number | **Required**  Number/quantity of items that are part of this shipment. |

### `tracking_info` object

| Attribute & Type | Type |
| --- | --- |
| `carrier`  Type: [`carrier_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#carrier_code) | **Required**  Carrier used for this package. |
| `tracking_number`  Type: string | **Required**  Carrier tracking number. |
| `shipping_method_name`  Type: string | **Optional**  Human readable description of the shipping method. |

### `fulfillment` object

| Attribute & Type | Description |
| --- | --- |
| `fulfillment_address`  Type: [`fulfillment_address`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#fulfillment_address) | **Optional if `fulfillment_location_id` is provided; otherwise, Required**.  Address of your fulfillment location from which the order is shipped for origin-based tax calculation. |
| `fulfillment_location_id`  Type: string | **Optional if `fulfillment_address` is provided; otherwise, Required**.  ID of the fulfillment location from which the order is shipped, previously set up in the **Tax** tab in your Commerce Manager. You can query the `/{commerce-account-id}/tax_settings` endpoint to pull all fulfillment locations set up in Commerce Manager. |

### `fulfillment_address` object

| Attribute & Type | Description |
| --- | --- |
| `street_1`  Type: string | **Required**  Street address of the fulfillment location. |
| `street_2`  Type: string | **Optional**  Second line of the address; typically the number of the apartment, suite, or unit. |
| `city`  Type: string | **Required**  City of the fulfillment location. |
| `state`  Type: string | **Required**  Two-letter state abbreviation. Example: `NY`. |
| `country`  Type: string | **Required**  Country of the fulfillment location. |
| `postal_code`  Type: string | **Required**  Postal code of the fulfillment location. |
| `province_code`  Type: string | **Optional**  Province of the fulfillment location. |

### `carrier_code` enum

Below is a list of common carrier codes:

* `dhl`
* `dhl_ecommerce_us`
* `eagle`
* `fedex`
* `ontrac`
* `tnt`
* `ups`
* `usps`

The full list of supported carrier codes is available [here](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/carrier-codes).

### Sample Request

```
{
  "external_shipment_id": "external_shipment_1",
  "items": [
    {
      "retailer_id": "FB_product_1238",
      "quantity": 1
    },
    {
      "retailer_id": "FB_product_5624",
      "quantity": 2
    }
  ],
  "tracking_info": {
    "tracking_number": "ship 1",
    "carrier": "FEDEX",
    "shipping_method_name": "2 Day Fedex"
  },
  "fulfillment": {
    "fulfillment_location_id": "2153613121365"
  },
  "idempotency_key": "cb091e84-e75a-3a34-45d3-5153bec88b65"
}
```

### Response

If successful:

```
{
  "success": true
}
```

Otherwise, a relevant error message is returned.

## Update a Shipment

Update shipping tracking information set on a shipment. You can update shipments based on:

* [External shipment ID](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#external_shipment_id)
* [Facebook shipment ID](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#facebook_shipment_id)

### Using an External Shipment ID

```
curl -X POST \
  -F `access_token=<ACCESS_TOKEN>` \
  https://graph.facebook.com/{order-id}/update_shipment
```

### Request

| Attribute & Type | Description |
| --- | --- |
| `external_shipment_id`  Type: string | **Required**  ID representing a shipment as identified by the seller. |
| `tracking_info`  Type: [`tracking_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#tracking_info) | **Required**  Status of shipment to track. |
| `idempotency_key`  Type: string | **Required**  Unique key per request. |

### Sample Request

```
{
   "external_shipment_id": "external_shipment_1",
   "tracking_info" : {
        "tracking_number": "12345abcd",
        "carrier": "FEDEX",
        "shipping_method_name": "2 Day Fedex"
    },
    "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"
}
```

### Sample Response

If successful:

```
{
  "success": true
}
```

Otherwise, a relevant error message will be returned.

### Using a Facebook Shipment ID

```
curl -X POST \
  -F `access_token=<ACCESS_TOKEN>` \
  https://graph.facebook.com/{order-id}/update_shipment
```

### Request

| Attribute & Type | Description |
| --- | --- |
| `shipment_id`  Type: string | **Required**  ID representing a shipment as identified by Facebook. |
| `tracking_info`  Type: [`tracking_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#tracking_info) | **Required**  Status of shipment to track. |
| `idempotency_key`  Type: string | **Required**  Unique key per request. |

### Sample Request

```
```
{  
   "shipment_id" : "45752147666494713",  
   "tracking_info" : {  
        "tracking_number": "12345abcd",  
        "carrier": "FEDEX",  
        "shipping_method_name": "2 Day Fedex"  
    },  
    "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
}
```
```

### Sample Response

If successful:

```
```
{  
  "success": true  
}
```
```

Otherwise, a relevant error message will be returned.

## List Shipments

Fetch all shipments for a given order.

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/shipments
```

### Response

| Attribute & Type | Description |
| --- | --- |
| `data`  Type: `array` of [`shipment`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#shipment) |  |

### `shipment` object

| Attribute & Type | Description | Default |
| --- | --- | --- |
| `id`  Type: string | Unique ID representing shipment. | Yes |
| `external_shipment_id`  Type: string | Unique external shipment ID representing a shipment as identified by the seller. Allowed characters are `alphanumeric` and `_`. | No |
| `items`  Type: [`data`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#item_data_object) |  | Yes |
| `tracking_info`  Type: [`tracking_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#tracking_info) |  | Yes |

### `data` object

| Attribute & Type | Description |
| --- | --- |
| `data`  Type: `array` of [`shipped_item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#shipped_item) |  |

### `shipped_item` object

| Attribute & Type | Description |
| --- | --- |
| `id`  Type: string | Unique ID representing the item as identified by Facebook. |
| `retailer_id`  Type: string | ID representing the product in the seller’s catalog. |
| `product_id`  Type: string | ID representing the product in the Facebook catalog. |
| `quantity`  Type: number | Number of items ordered. |
| `tax`  Type: [`tax`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#tax) |  |

### `tax` object

| Attribute & Type | Description |
| --- | --- |
| `final_tax`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#currency_amount) |  |

### `currency_amount` object

| Attribute & Type | Description |
| --- | --- |
| `amount`  Type: string | Amount in decimal format. Example: `5.5` |
| `currency`  Type: string | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase. Example: `USD` |

### Sample Response

```
{
  "data": [
    {
      "id": "491193461614879",
      "items": {
        "data": [
          {
            "id": "486602442073981",
            "product_id": "2452389501475182",
            "retailer_id": "FB_shirt_1234",
            "quantity": 1,
            "tax": {
              "final_tax": {
                "amount": "0.04",
                "currency": "USD"
              }
            }
          }
        ]
      },
      "tracking_info": {
        "tracking_number": "ship 1",
        "carrier": "fedex"
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "--sanitized_key--",
      "after": "--sanitized_key--"
    }
  }
}
```
