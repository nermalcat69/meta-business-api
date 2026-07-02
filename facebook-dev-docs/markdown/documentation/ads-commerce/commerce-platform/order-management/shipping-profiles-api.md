---
title: "Legacy Order Management API Reference v3.2"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api
---

# Legacy Order Management API Reference v3.2

Updated: Jan 12, 2026

This API is deprecated, and is provided for reference only. Please refer to the [Order Management API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management) moving forward.

After the user has completed the checkout flow and the payment transaction has been confirmed, the order will be made available for partners to manage. Order management consists of the following endpoints.

* [List Orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#listorders)
* [Acknowledge Order](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#acknowledge_order)
* [Acknowledge Orders](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#acknowledge_orders)
* [Attach Shipment](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#shipments)
* [Cancel Order](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#cancelorder)
* [Process Refund](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#refund)
* [Transaction Details](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#transactions)

**Access Tokens**

The Order Management API relies on a **Page Access Token** to act as the Facebook Page. The Page Role behind the token must be `EDITOR` or above. [Learn more about page roles.⁠](https://www.facebook.com/help/1206330326045914/)

Be sure to retrieve orders for all statuses, to maintain parity between Facebook and your system. Facebook may need to `CANCEL` orders from time to time due to fraud review.

## Pagination

To reliably retrieve all orders for all statuses, we recommend that you use cursor-based pagination.
The default max limit of orders per page is 25.
**Paging sizes may vary across statuses, and you may not get the same number of orders back per page.** Learn more about [cursor-based pagination](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

## List Orders

List commerce orders associated with a Page.

By default, it returns orders only in the `CREATED` state, unless the `status` parameter is specified.

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/commerce_orders
```

### Request

| Attribute & Type | Description |
| --- | --- |
| `updated_after`  Type: string | **Optional**  Returns orders for which the status changed after this date in a UNIX timestamp. |
| `status`  Type: vector of [`status_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#status_code) | **Optional**  Comma-separated list of statuses to filter. |

### `status_code` enum

| Value | Description |
| --- | --- |
| `FB_PROCESSING` | Order is still being processed by Facebook. `FB_PROCESSING` orders are for informative reasons only (for example, to confirm to buyers that the order was placed). There is no action needed. This order may not advance to the `CREATED` state. |
| `CREATED` | Order has been created on Facebook, not yet acknowledged by external sellers. |
| `IN_PROGRESS` | Order has been acknowledged, and now in progress. |
| `SHIPPED` | Order has been shipped. |
| `CANCELLED` | Order has been cancelled. |
| `REFUNDED` | Order has been refunded. |

### Sample Request

```
curl -X GET -G \
  -d 'updated_after=1529718360' \
  -d 'status="CREATED,IN_PROGRESS"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/commerce_orders
```

### Response

| Attribute & Type | Description |
| --- | --- |
| `data`  Type: array of [`order`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#order) |

### `order` object

| Attribute & Type | Description |
| --- | --- |
| `id`  Type: string | Unique ID representing the order. **Although numerical, manage order IDs as strings; order ID length and structure is subject to change.** |
| `email`  Type: string | Email address of the customer. Use for fulfillment purposes only, unless `email_remarketing_option` is set to `true` |
| `email_remarketing_option`  Type: boolean | Customer’s marketing opt-in status. Do not use email address for marketing purposes if set to `false.` |
| `created`  Type: string | Order’s creation datetime in [ISO 8601 format⁠](https://en.wikipedia.org/wiki/ISO_8601). |
| `last_updated`  Type: string | Order’s latest update datetime in [ISO 8601 format⁠](https://en.wikipedia.org/wiki/ISO_8601). |
| `ship_by_date`  Type: string | Expected date the order is to be shipped by. Date format: `y-m-d`. |
| `items`  Type: array of [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#item) |  |
| `order_status`  Type: array of [`order_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#order_status) |  |
| `selected_shipping_option`  Type: array of [`shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#shipping_option) | Shipping option selected for this order. |
| `shipping_address`  Type: array of [`shipping_address`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#shipping_address) |  |
| `payment_details`  Type: array of [`payment_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#payment_details) |  |

### `item` object

The `item` object payload contains minimal details about the product itself. You can fetch additional product information by making the following Graph API call:

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PRODUCT_ID>
```

| Attribute | Type | Description |
| --- | --- | --- |
| `fb_product_id` | `string` | **Unique ID** representing the item. Multiple quantities of any item will be represented in the quantity field (see below). |
| `retailer_id` | `string` | ID representing the product in the seller’s catalog. |
| `quantity` | `Number` | Number of items ordered. |
| `channel` | `string` | Either `facebook` or `instagram`. Note: The channel field does not appear in the response by default. In order to see it, it must be queried for explicitly using `?fields=` syntax. [Learn more about reading Graph API fields.](https://developers.facebook.com/docs/graph-api/using-graph-api#reading) |
| `price_per_unit` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Unit price for this item. |
| `calculated_tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Tax amount for all items without shipping. |
| `calculated_tax_rate` | `float` | Tax rate in decimal format. |

### `order_status` object

| Attribute | Type | Description |
| --- | --- | --- |
| `status_code` | [`status_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#status_code) |  |

### `shipping_option` object

| Attribute | Type | Description |
| --- | --- | --- |
| `name` | `string` | Human readable name of the shipping option. |
| `price` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Shipping cost. |
| `calculated_tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Shipping tax amount. |
| `estimated_shipping_time` | [`estimated_shipping_time`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#estimated_shipping_time) | Estimated shipping time |

### `shipping_address` object

| Attribute | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name on the shipping label. |
| `street1` | `string` |  |
| `street2` | `string` |  |
| `city` | `string` |  |
| `state` | `string` | Two-letter state abbreviation e.g. “NY” |
| `postal_code` | `string` |  |
| `country` | `string` |  |

### `payment_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `subtotal` | [`subtotal_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#subtotal_details) | Cost of items and shipping. |
| `tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Tax amount for the order. |
| `total_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Total amount for the order. |
| `tax_remitted` | `bool` | `true` if taxes are collected by Facebook. |

### `subtotal_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `items` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Cost of products items in this order. |
| `shipping` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Shipping cost for the order. |

### `currency_amount` object

| Attribute | Type | Description |
| --- | --- | --- |
| `amount` | `string` | Amount in decimal format, eg. “5.5”. |
| `currency` | `string` | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase, e.g. USD. |

### `estimated_shipping_time` object

| Attribute | Type | Description |
| --- | --- | --- |
| `min_days` | `Number` | Expected minimum number of days in shipping |
| `max_days` | `Number` | Expected maximum number of days in shipping |

### Sample Response

```
```
{  
  "data": [  
    {  
      "items": [  
        {  
          "fb_product_id": "1747144002010730",  
          "retailer_id": "1522693943pages_commerce_sell5ac27737cc5fc7490521823",  
          "quantity": 1,  
          "price_per_unit": {  
            "amount": "0.55",  
            "currency": "USD"  
          },  
          "calculated_tax": {  
            "amount": "0.06",  
            "currency": "USD"  
          },  
          "calculated_tax_rate": 0.101  
        }  
      ],  
      "order_status": {  
        "status_code": "IN_PROGRESS"  
      },  
      "email": "user@example.com",  
      "created": "2018-05-14T23:02:59+00:00",  
      "last_updated": "2018-05-14T23:03:22+00:00",  
      "ship_by_date": "2018-05-17",  
      "payment_details": {  
        "subtotal": {  
          "items": {  
            "amount": "0.55",  
            "currency": "USD"  
          },  
          "shipping": {  
            "amount": "0.00",  
            "currency": "USD"  
          }  
        },  
        "tax": {  
          "amount": "0.06",  
          "currency": "USD"  
        },  
        "total_amount": {  
          "amount": "0.61",  
          "currency": "USD"  
        },  
        "tax_remitted": true  
      },  
      "selected_shipping_option": {  
        "name": "STANDARD (3-5 Business days)",  
        "price": {  
          "amount": "0.00",  
          "currency": "USD"  
        },  
        "calculated_tax": {  
          "amount": "0.00",  
          "currency": "USD"  
        },  
        "estimated_shipping_time": {  
          "min_days": 5,  
          "max_days": 7  
        }  
      },  
      "shipping_address": {  
        "name": "John Smith",  
        "street1": "1101 Dexter Ave N",  
        "city": "Seattle",  
        "state": "WA",  
        "postal_code": "98109-3517",  
        "country": "US"  
      },  
      "id": "64000782776004"  
    }  
  ]  
}
```
```

## Acknowledge Order

Acknowledge one specific order that was retrieved using the List Orders API. This marks the order on FB side as acknowledged, and can be filtered out from future pulls.

Some orders may not acknowledge on the first attempt. Be sure to capture errors, take action according to error messages, and retry accordingly. **Do not start processing orders in your systems that have not been successfully acknowledged.**

Orders need to be acknowledged 12 hours after they have been created or less. To avoid SLA breach please acknowledge orders at least 2x a day, preferably more frequently. Most sellers with higher order volumes will want to acknowledge orders every 5-15 minutes, as soon as they are read from the List Orders API.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/acknowledge_order
```

### Request

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `merchant_order_reference` | `string` | Optional | ID representing the order in **your order management system.** |

### Sample Response

```
{
  "id": "64000841784004",
  "status": "IN_PROGRESS"
}
```

## Acknowledge Orders

Acknowledge order batches have a maximum of 100 orders per batch.

Acknowledge any orders that were received by list orders api, in a batch. This marks the order on FB side as acknowledged. This reduces unacknowledged orders in any future pulls of the List API.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/acknowledge_orders
```

### Request

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `orders` | `array` of [`order_id`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#order_id) | Required | Array of 100 or less order IDs. |

### `order_id` object

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Required | ID of the order. |
| `merchant_order_reference` | `string` | Optional | ID representing the order in **your order management system** |

### Sample Request

```
```
{  
  "orders": [  
    {  
      "id": "64000841790004"  
    },  
    {  
      "id": "10100677592885259"  
    }  
  ]  
}
```
```

### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `orders` | `array` of [`order_id_and_status`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#order_id_and_status) |  |

### `order_id_and_status` object

| Attribute | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the order. |
| `status` | [`status_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#status_code) |  |

### Sample Response

```
{
  "orders": [
    {
      "id": "64000841790004",
      "status": "IN_PROGRESS"
    },
    {
      "id": "10100677592885259",
      "error": {
        "error_code": 2361003,
        "error_message": "Invalid Order ID"
      }
    }
  ]
}
```

## Attach Shipment

Seller will use this API to update orders on Facebook side.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/shipments
```

### Request

| Attribute | Type | Description |
| --- | --- | --- |
| `items` | `array` of [`shipment_item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#shipment_item) |  |
| `tracking_info` | [`tracking_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#tracking_info) |  |

### `shipment_item` object

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `retailer_id` | `string` | Required | ID representing the product in the seller’s catalog. |
| `quantity` | `number` | Required | Quantity. |

### `tracking_info` object

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `carrier` | [`carrier_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#carrier_code) | Required | Carrier used for this package |
| `tracking_number` | `string` | Required | Carrier tracking number |
| `shipping_method_name` | `string` | Optional | Human readable description of the shipping method. |

### `carrier_code` enum

The following is a list of common carrier codes:

| Value |
| --- |
| `dhl` |
| `dhl_ecommerce_us` |
| `eagle` |
| `fedex` |
| `ontrac` |
| `tnt` |
| `ups` |
| `usps` |

### See the full list of carrier codes [here](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/carrier-codes).

### Sample Request

```
```
{  
    "items" : [  
        {  
            "retailer_id" : "fb_tee_001",  
            "quantity" : 3  
        }  
    ],  
    "tracking_info" : {  
        "tracking_number": "12345abcd",  
        "carrier": "FEDEX",  
        "shipping_method_name": "2 Day Fedex"  
    }  
}
```
```

### Response

If successful:

```
{
  "success": true
}
```

Otherwise a relevant error message will be returned.

## Cancel Order

Seller will use this API to cancel order on Facebook side.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/cancel_order
```

### Request

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `order_cancel_reason` | [`order_cancel_reason`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#order_cancel_reason) | Required |  |

### `order_cancel_reason` object

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `reason_code` | [`reason_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#reason_code) | Required |  |
| `reason_description` | `string` | Optional | Reason for the cancellation, this message may be presented to the user. |

### `reason_code` enum

| Value | Description |
| --- | --- |
| `CUSTOMER_REQUESTED` |  |
| `OUT_OF_STOCK` |  |
| `INVALID_ADDRESS` |  |
| `SUSPICIOUS_ORDER` |  |
| `CANCEL_REASON_OTHER` |  |

### Sample request

```
```
{  
  "order_cancel_reason": {  
    "reason_code": "CUSTOMER_REQUESTED",  
    "reason_description": "Buyer did not need it anymore"  
  }  
}
```
```

### Response

If successful:

```
{
  "success": true
}
```

Otherwise a relevant error message will be returned.

## Process Refund

Seller will use this API to initiate a refund. Two kinds of refunds are supported - Item level refund and full order refund. For a partial (by quantity or price) refund, use an item level refund. Refer Sample request for examples.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/refund_order
```

### Request

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `array` of [`refund_item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#refund_item) | Optional | For Partial refund specify item level breakdown, items are not required for full refunds. |
| `reason_code` | [`refund_reason_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#refund_reason_code) | Required |  |
| `reason_text` | `string` | Optional | Reason for the refund. This message is presented to the user. |

### `refund_item` object

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `retailer_id` | `string` | Required | Retailer identifier for the product. |
| `item_refund` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Required | Cost of item, before any tax. |
| `shipping_refund` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/shipping-profiles-api#currency_amount) | Required | Amount to be refunded for shipping. |

### `refund_reason_code` enum

| Value | Description |
| --- | --- |
| `BUYERS_REMORSE` |  |
| `DAMAGED_GOODS` |  |
| `NOT_AS_DESCRIBED` |  |
| `QUALITY_ISSUE` |  |
| `REFUND_REASON_OTHER` |  |
| `WRONG_ITEM` |  |

### Sample request

Seller will use this API to initiate a refund. Two kinds of refunds are supported

#### Partial/Item Level Refunds

The `amount` field can be any value up to the full value of the item.

```
```
{  
  "items": [  
    {  
      "retailer_id": "38383838",  
      "item_refund": {  
        "amount": "5.5",  
        "currency": "USD"  
      },  
      "shipping_refund": {  
        "amount": "2.4",  
        "currency": "USD"  
      }  
    }  
  ],  
  "reason_code": "WRONG_ITEM"  
}
```
```

#### Full Refunds

```
```
{  
  "reason_code": "WRONG_ITEM"  
}
```
```

### Response

If successful:

```
{
  "success": true
}
```

Otherwise a relevant error message will be returned.

## Reimbursements and Transactions

After shipping or refunding an order, pull Reimbursement and Transaction information on orders to reconcile your transaction data.

```
curl -X GET -G \
  -d 'updated_after=1529718360' \
  -d 'status="SHIPPED"' \
  -d 'fields="reimbursements,transaction_details{tax_rate,tax_details}"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/commerce_orders
```

### Request

| Attribute | Type | Required | Description |
| --- | --- | --- | --- |
| `updated_after` | Unix timestamp | Required | Reimbursements and transactions will only display for orders after this timestamp. |
| `status` | Either `SHIPPED` or `REFUNDED` | Required | Order status for transaction request |
| `fields` | `reimbursements, transaction_details{tax_rate,tax_details}` | Required | Returns specified fields for reimbursements and transaction details |

### Response: Reimbursements

Reimbursements include any incentives applied, along with reason codes for the reimbursement.

| Value | Type | Description |
| --- | --- | --- |
| `reason` | Reason code for the reimbursement | See Reason Codes below |
| `value` | `currency_amount` | Value of total reimbursement of this order |

### Reimbursement `reason` code enum

| Value | Description |
| --- | --- |
| `INCENTIVE` | A reimbursement made by Facebook to the seller for a specific reason. The amount is added to the seller’s reimbursement balance until it’s paid out to the seller’s bank account. |
| `PAYOUT` | The bank transfer made to the seller’s bank account which includes a set of reimbursements. Includes details on when the payout was initiated and the amount that was transferred to the seller’s bank account. Payout rows are included in the report after the 3 day delay from when the payout was actually initiated. |

### Response: Transaction details

List of orders and all transaction associated with each order. This list will contain only those orders which had a transaction after `updated_after` timestamp.

| Value | Type | Description |
| --- | --- | --- |
| `transaction_type` | Reason code for the transaction | See Reason Codes below |
| `transaction_date` | ISO 8601 datetime | Datetime of transaction |
| `processing_fee` | object | Contains `amount` and `currency` objects consisting of the processing fee |
| `net_payment_amount` | object | Contains `amount` and `currency` objects consisting of the net payment amount |
| `tax_rate` | string | Percentage tax rate |
| `tax_details` | object | Tax details object |
| `payout_reference_id` | string | The bank reference ID associated with the payout in which this transaction is included. Note: only available for payouts processed after 5/15/19. |

### Tax details object

| Value | Type | Description |
| --- | --- | --- |
| `tax_category` | string | Facebook tax category |
| `jurisdiction` | string | The Jurisdiction under which tax is applied. Jurisdiction can be a state (e.g. Washington), city (e.g. Seattle), county(e.g. King county) or even a specific tax policy (e.g. Regional Transit Authority). Indicates under which jurisdiction the tax was found to be required for the given transaction. |
| `imposition` | string | Type of imposition for the tax item, indicating what type of tax this is. For example, “Local Sales and Use Tax” and “Retail Sales and Use Tax” are common imposition values. |
| `item_tax_rate` | string | Item level tax rate for the given category, jurisdiction and imposition. This gives the tax percentage for the given tax item detail row. |
| `item_tax_amount` | object | Item level tax amount calculated for this tax item row. This is calculated using the item tax rate provided above. Contains `amount` and `currency` fields. |

### Transaction type enum

| Value | Description |
| --- | --- |
| `SALE` | Indicates a normal SALE transaction when the money is captured from the buyer and transferred to the seller’s balance |
| `REFUND` | Indicates that order is refunded and includes information on the refund itself |
| `CHARGEBACK` | Indicates that there was a chargeback filed by the buyer for this order. Usually, this type of transaction will be followed by a CHARGEBACK\_FEE transaction if the seller loses the chargeback claim. If the seller wins the chargeback claim, this will be followed by a CHARGEBACK\_REVERSAL transaction. |
| `CHARGEBACK_FEE` | Indicates the fee that was withheld if the seller loses in a chargeback claim. |
| `CHARGEBACK_REVERSAL` | Indicates that the seller won the chargeback claim and contains details on the chargeback being reversed |
| `GOODWILL_TRANSFER` | Goodwill transfer details that Facebook paid the seller. This can happen if Facebook covers the chargeback, or in other cases where Facebook pays the seller for their loss, such as the seller winning an appeal against a buyer protection claim from the buyer. |

### Sample response

```
```
{  
  "data": [  
    {  
      "reimbursements": {  
        "data": [  
          {  
            "reason": "FREE_SHIPPING",  
            "value": {  
              "amount": "0.06",  
              "currency": "USD"  
            }  
          },  
          {  
            "reason": "FLAT_BUYER_DISCOUNT",  
            "value": {  
              "amount": "0.06",  
              "currency": "USD"  
            }  
          }  
        ]  
      },  
      "transaction_details": {  
        "data": [  
          {  
            "transaction_type": "SALE",  
            "transaction_date": "2019-01-09T09:16:21+00:00",  
            "processing_fee": {  
              "amount": "-0.05",  
              "currency": "USD",  
            },  
            "net_payment_amount": {  
              "amount": "0.55",  
              "currency": "USD",  
             },  
            "tax_rate": "10%",  
            "tax_details": {  
              "data": [  
                {  
                  "tax_category": "FBMP_OTHER_TAXABLE",  
                  "jurisdiction": "WASHINGTON",  
                  "imposition": "Retail Sales and Use Tax",  
                  "item_tax_rate": "6.50%",  
                  "item_tax_amount": {  
                    "amount": "0.08",  
                    "currency": "USD"  
                  }  
                }  
              ]  
            },  
            "payout_reference_id": "FBMPUSS5191u01g"  
          }  
        ]  
      },  
      "id": "64000782776004"  
    }  
  ]  
}
```
```
