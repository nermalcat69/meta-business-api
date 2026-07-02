---
title: "Cancellation and Refund API"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api
---

# Cancellation and Refund API

Updated: Dec 4, 2025

Use the cancellation and refund API to initiate cancellations or refunds on a given order.

## Cancel Order

You can only cancel an order or items (unshipped) fully or partially.

Orders can be canceled after they are moved out of the `FB_PROCESSING` state, with an exception of orders in the `FB_PROCESSING` state for more than 24 hours. An order can be in the `FB_PROCESSING` state for that long due to: 1) the inability to complete the buyer risk check or 2) a sanction on the buyer's account.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/cancellations
```

### Request

| Attribute | Description |
| --- | --- |
| `cancel_reason`  Type: [`cancel_reason`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#cancel_reason) | **Optional**  Why the seller is canceling the order; for example, out of stock. |
| `restock_items`  Type: boolean | **Optional**  By default, the value is `false`. A seller can set this value to `true` to be added back to the inventory. |
| `items`  Type: array of [`items`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#cancel_item) | **Optional**  Array of items being canceled. |
| `idempotency_key`  Type: string | **Required**  Unique key per request. |

### `cancel_reason` object

| Attribute | Description |
| --- | --- |
| `reason_code`  Type: [`reason_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#reason_code) | **Optional**  Reason for the cancellation. |
| `reason_description`  Type: string | **Optional**  Reason for the cancellation, this message may be presented to the user. |

### `items`

| Attribute | Description |
| --- | --- |
| `retailer_id`  Type: string | **Required if `item_id` is not provided**.  ID representing the product in the seller's catalog. You must provide `retailer_id` or `item_id`, but not both. If `item_id` is provided, `retailer_id` must not be provided. |
| `item_id`  Type: string | **Required if `retailer_id` is not provided**.  A Meta-generated ID representing the line item on the order. This value is readable as the `id` field of the [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#item) response. You must provide `retailer_id` or `item_id`, but not both. If `retailer_id` is provided, `item_id` must not be provided. |
| `quantity`  Type: number | **Required**  Number of items canceled. |

### `reason_code` enum

| Value | Description |
| --- | --- |
| `CUSTOMER_REQUESTED` | Cancellation requested by the buyer. |
| `OUT_OF_STOCK` | Product is out of stock at fulfillment. |
| `INVALID_ADDRESS` | Unable to ship to address provided by the buyer. |
| `SUSPICIOUS_ORDER` | Order is suspicious/possible fraud. |
| `CANCEL_REASON_OTHER` | Other cancellation reason. |

#### Sample Request (Full Order)

```
{  
  "cancel_reason": {  
    "reason_code": "CUSTOMER_REQUESTED",  
    "reason_description": "Buyer did not need it anymore"  
  },  
  "restock_items": true,  
  "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
  
}
```

#### Sample Request (Partial Order)

```
{  
  "cancel_reason": {  
    "reason_code": "OUT_OF_STOCK",  
    "reason_description": "Ran out of item"  
  },  
  "restock_items": false,  
  "items": [  
    {  
      "retailer_id": "FB_product_1234",  
      "quantity": 1  
    }  
  ],  
  "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
}
```

#### Sample Response

If successful:

```
{
  "success": true
}
```

Otherwise, a relevant error message is returned.

## Refund Order

You can only refund an order or items (shipped), fully or partially (by quantity or price).

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/refunds
```

### Request

| Attribute | Description |
| --- | --- |
| `items`  Type: array of [`refund_item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_item) | **Optional**  For partial refund, specify the item-level breakdown. Not required for a full refund. |
| `reason_code`  Type: [`refund_reason_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_reason_code) | **Required**  Reason for the refund. |
| `reason_text`  Type: string | **Optional**  Reason for the refund. This message is presented to the user. |
| `idempotency_key`  Type: string | **Required**  Unique key per request. |
| `shipping`  Type: [`shipping_refund`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#shipping_refund) object | **Optional**  Amount to be refunded for shipping. |
| `deductions`  Type: array of [`deductions`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#deductions) object | **Optional**  Amount to be deducted off of the refund. Commonly used for a return label fee for order returns. |
| `return_id`  Type: string | **Optional**  ID representing the return to which the refund is associated. See [Returns API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/returns-api) |

### `deductions` object

| Attribute | Description |
| --- | --- |
| `deduction_type`  Type: string | **Required**  Currently `RETURN_SHIPPING` is the only allowed type. |
| `deduction_amount`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#currency_amount) | **Required**  Amount to be deducted for shipping. See [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#currency_amount). |

### `shipping_refund` object

| Attribute | Description |
| --- | --- |
| `shipping_refund`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#currency_amount) | **Required**  Amount to be refunded for shipping. See [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#currency_amount). |

### `refund_item` object

| Attribute | Description |
| --- | --- |
| `retailer_id`  Type: string | **Required if `item_id` is not provided**.  ID representing the product in the seller's catalog. You must provide `retailer_id` or `item_id`, but not both. If `item_id` is provided, `retailer_id` must not be provided. |
| `item_id`  Type: string | **Required if `retailer_id` is not provided**.  A Meta-generated ID representing the line item on the order. This value is readable as the `id` field of the [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#item) response. You must provide `retailer_id` or `item_id`, but not both. If `retailer_id` is provided, `item_id` must not be provided. |
| `item_refund_amount`  Type: [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#currency_amount) | **Required if `item_refund_quantity` is not provided**.  Amount to refund, before any tax. Can be any value up to the full value of the item. See [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#currency_amount). |
| `item_refund_quantity`  Type: number | **Required if `item_refund_amount` is not provided**.  Number of items to be refunded fully. |

### `currency_amount` object

| Attribute | Description |
| --- | --- |
| `amount`  Type: string | **Required**  Amount in decimal format. Example: `5.5` |
| `currency`  Type: string | **Required**  [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase. Format the currency as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.  Example: `30 USD` |

### `refund_reason_code` enum

| Value | Description |
| --- | --- |
| `BUYERS_REMORSE` | Refunded by buyers remorse. |
| `DAMAGED_GOODS` | Refunded as goods were delivered damaged. |
| `NOT_AS_DESCRIBED` | Product not as described. |
| `QUALITY_ISSUE` | Product had quality issues. |
| `REFUND_REASON_OTHER` | Other refund reason. |
| `WRONG_ITEM` | Wrong product delivered. |
| `FACEBOOK_INITIATED` | Refund issued by the Facebook support team, usually in response of a dispute with the buyer. |

#### Sample Request (Full Order)

```
{  
    "reason_code": "WRONG_ITEM",  
    "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
}
```

#### Sample Request (Partial Order)

```
{  
  "items": [  
    {  
      "retailer_id": "1234",  
      "item_refund_quantity": 1  
    },  
    {  
      "retailer_id": "38383838",  
      "item_refund_amount": {  
        "amount": "2.5",  
        "currency": "USD"  
      }  
    }  
  ],  
  "shipping": {  
    "shipping_refund": {  
      "amount": "2.4",  
      "currency": "USD"  
    }  
  },  
  "deductions": [  
    {  
      "deduction_type": "RETURN_SHIPPING",  
      "deduction_amount": {  
        "amount": "5.5",  
        "currency": "USD"  
      }  
    }  
  ],  
  "reason_code": "WRONG_ITEM",  
  "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
}
```

#### Response

If successful:

```
{  
  "success": true  
}
```

Otherwise, a relevant error message is returned.

If you received an error that this order couldn't be refunded until the customer's payment method had been charged, validate if [the payment was captured](https://developers.facebook.com/docs/commerce-platform/reporting/payments-and-promotions#transaction_detail_object).

## List Cancellations

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/cancellations
```

### Response

If successful:

```
{  
  "data": [  
    {  
      "id": "412737486183265",  
      "items": {  
        "data": [  
          {  
            "id": "32121321312",  
            "product_id": "2082596341811586",  
            "retailer_id": "FB_product_1234",  
            "quantity": 1  
          }  
        ]  
      },  
      "cancel_reason": {  
        "reason_code": "CUSTOMER_REQUESTED",  
        "reason_description": "Buyer did not need it anymore"  
      }  
    }  
  ]  
}
```

## List Refunds

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/refunds
```

### Response

| Attribute and Type |
| --- |
| `data`  Type: array of [`refund_item_object`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_item_object) |

### `refund_item_object`

| Attribute | Description | Default Display |
| --- | --- | --- |
| `id`  Type: string | Refund unique ID. | Yes |
| `items`  Type: [`items`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#items) | Array of refunded items. | Yes |
| `refund_amount`  Type: [`refund_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_amount) | Total refund amount. See [`refund_subtotal` object](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_subtotal). | Yes |
| `refund_reason`  Type: number | Reason for the refund. See [`refund_reason_code` enum](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_reason_code). | Yes |

### `items` object

| Attribute and Type |
| --- |
| `data`  Type: array of [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#item) |

### `item` object

| Attribute | Description |
| --- | --- |
| `id`  Type: string | Unique ID for order item. |
| `product_id`  Type: string | Unique product ID. |
| `retailer_id`  Type: string | Unique product ID set by seller. |
| `refund_subtotal`  Type: object | Subtotal of refund. |
| `quantity`  Type: number | **Optional**  Item refund quantity, only present when refunding an order with [`item_refund_quantity`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/legacy-api#refund_item). |

### `refund_subtotal` object

| Attribute | Description | Default Display |
| --- | --- | --- |
| `amount`  Type: string | Amount in decimal format. Example: `1.64` | Yes |
| `currency`  Type: string | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase.  Format the currency as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.  Example: `30 USD` | Yes |

### `refund_amount` object

| Attribute | Description | Default Display |
| --- | --- | --- |
| `amount`  Type: string | Amount in decimal format. Example: `1.64` | Yes |
| `currency`  Type: string | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase.  Format the currency as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.  Example: `30 USD` | Yes |
| `tax`  Type: string | Amount in decimal format with negative sign. Example: `-0.14` | No |
| `shipping`  Type: string | Amount in decimal format with negative sign. Example: `-0.14` | No |
| `subtotal`  Type: string | Amount in decimal format. Example: `0.50` | No |
| `total`  Type: string | Amount in decimal format. Example: `1.64` | No |

#### Sample Request with All Fields

```
curl GET \
  -d 'fields=id,items{product_id,retailer_id,refund_subtotal,quantity},refund_reason,refund_amount{subtotal,tax,total,amount,currency}' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/refunds
```

#### Sample Response

If successful:

```
{  
  "data": [  
    {  
      "id": "498980194169539",  
      "items": {  
        "data": [  
          {  
            "id": "486602442073981",  
            "product_id": "2452389501475182",  
            "retailer_id": "FB_shirt_1234",  
             "refund_subtotal": {  
                "amount": "1.00",  
                "currency": "USD"  
              },  
              "quantity": 1  
          }  
        ]  
      },  
      "refund_reason": {  
        "reason_code": "BUYERS_REMORSE"  
      },  
      "refund_amount": {  
        "subtotal": "1.00",  
        "shipping": "10.00",  
        "tax": "-1.02",  
        "total": "12.02",  
        "amount": "12.02",  
        "currency": "USD"  
      },  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "QVFIUkdCNjRRQ2tpZAloxbFlZAMnZABN3pYcnB5TzZALYlAzTVo2eF8wM3BraFRRRWNLZAnJwczAtanA0VUE4WnB4dVZAQYUE3OTRZASTBMZAjBWYWxOZAGJJdm9vODRn",  
      "after": "QVFIUkdCNjRRQ2tpZAloxbFlZAMnZABN3pYcnB5TzZALYlAzTVo2eF8wM3BraFRRRWNLZAnJwczAtanA0VUE4WnB4dVZAQYUE3OTRZASTBMZAjBWYWxOZAGJJdm9vODRn"  
    }  
  }  
}
```
