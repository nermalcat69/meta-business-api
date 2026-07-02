---
title: "Order Snapshot API"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api
---

# Order Snapshot API

Updated: Aug 8, 2024

Use this API to provide the most recent snapshot of an order and update it on Shops.

## Before You Begin

While Meta offers [many APIs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management) to manage orders and shops, some sellers may benefit from a simpler integration depending on how their Order Management System (OMS) works. The Order Snapshot API is ideal for an OMS that is able to provide full, item-level order details without regard for what has "changed." The API is also singular, compared to the several Order Management APIs that would be required to integrate in an event-based setup.

Please review the Meta Commerce [Seller Integration Guide](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/project-guide) for sellers who want to sell on Facebook and Instagram while managing orders using the Commerce API.

## Concepts

**Seller Source of Truth**: The Order Snapshot API uses the seller's Order Management System (OMS) as the source of truth. When a seller uses the API, Meta will update the order on Meta's system to match the seller's, within certain constraints (see [Caveats](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#caveats)).

**Snapshot model**: The Order Snapshot API is snapshot-based, meaning that sellers only need to give the current state of the order in the seller's OMS. It is not necessary to be able to provide only the iterative changes to an order (which is common for an event-based OMS, and how other Order Management APIs typically work)

**Idempotent**: Using the snapshot model, the Order Snapshot API is idempotent. Duplicate API requests will produce the same result as executing it once. Meta will take the most recent API call and assume that to be the Source of Truth.

Given the above concepts, the API can be integrated as a recurring update "job" if desired, though it can fit just as well into an event-based OMS if all order details are available.

## Item-Level Order Snapshot

Read this section to learn how to update an order using an item-level snapshot. Refer to the [Order Lifecycle](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-lifecycle) documentation for the expected flow of a typical order.

```
curl -X POST \  
  -F 'access_token=<ACCESS_TOKEN>' \  
    https://graph.facebook.com/{order-id}/item_updates
```

### Request

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `merchant_order_reference` | string | Y | Unique ID representing the order in your (seller) Order Management System. This should not change once set. |
| `items` | `array` of [`item`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#order-snapshot-api-item) | Y | Item-level representation of the order state. |

### `item` object

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item_id` | string | Y | Meta's item ID. |
| `fulfill_quantity` | number | Y | Fulfilled quantity of the item. |
| `cancel_quantity` | number | Y | Canceled quantity of the item. |
| `refund_quantity` | number | Y | Refunded quantity of the item. |
| `tracking_info` | `array` of [`tracking_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#tracking_info) | N | Array of [`tracking_info` objects](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#tracking_info) associated with the item, if any quantity has been fulfilled. |
| `fulfillment` | [`fulfillment`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#fulfillment) | N | Fulfillment origin location, only if different than the default location configured for the shop. Used to properly calculate taxes. |
| `shipping_refund` | [`shipping_refund`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#shipping_refund) | N | The shipping refunded associated with the item, if any. |
| `deductions` | `array` of [`deduction`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#deductions) | N | Array of [`deduction` objects](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#deductions) associated with the item, if any quantity has been refunded. |
| `cancel_reason` | [`cancel_reason`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_reason) | N | The cancellation reason and description, if any quantity has been canceled. |
| `refund_reason` | [`refund_reason`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api#order-snapshot-api-refund-reason) | N | The refund reason and description, if any quantity has been refunded. |

### `refund_reason` object

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason_code` | [`refund_reason_code`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_reason_code) | N | Reason code for the refund. |
| `reason_description` | string | N | Reason for the refund. This message may be presented to the user. |

### Response

**Note**: The Order Snapshot API supports [read-after-write](https://developers.facebook.com/docs/graph-api/reference/commerce-order), which will read the latest Commerce Order Details after you POST to the API.

| Field | Type | Details |
| --- | --- | --- |
| `success` | boolean | If success; otherwise, error message is shown. |

## Examples

### Order Fulfillment

Once you are ready to fulfill and ship the order, use the Order Snapshot API to ship individual order items

```
{  
  "items": [  
    {  
      "item_id": "meta_item_id",  
      "fulfill_quantity": 1,  
      "refund_quantity": 0,  
      "cancel_quantity": 0,  
      "tracking_info": [  
        {  
          "tracking_number": "test_tracking_number",  
          "carrier": "UPS"  
        }  
      ]  
    }  
  ],  
  "merchant_order_reference": "seller_order_123"  
}
```

### Order Cancellation

If you need to cancel the order, use the Order Snapshot API to cancel individual order items.

```
{  
  "items": [  
    {  
      "item_id": "meta_item_id",  
      "fulfill_quantity": 0,  
      "refund_quantity": 0,  
      "cancel_quantity": 1,  
      "cancel_reason": {  
        "reason_code": "CUSTOMER_REQUESTED",  
        "reason_description": "No longer needed"  
      }  
    }  
  ],  
  "merchant_order_reference": "seller_order_123"  
}
```

**Note**: the API will return an error if you are trying to cancel items already fulfilled/refunded. You can always [get the order details](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_order_details) to review the current status of items in an order

### Order Refunds

If you need to refund the order, use the Order Snapshot API to refund individual order items.

```
{  
  "items": [  
    {  
      "item_id": "meta_item_id",  
      "fulfill_quantity": 0,  
      "refund_quantity": 1,  
      "cancel_quantity": 0,  
      "shipping_refund": {  
        "shipping_refund": {  
          "currency": "USD",  
          "amount": "5.00"  
        }  
      }  
      "refund_reason": {  
        "reason_code": "BUYERS_REMORSE",  
        "reason_description": "No longer needed"  
      }  
    }  
  ],  
  "merchant_order_reference": "seller_order_123"  
}
```

**Note**: the API will return an error if you are trying to refund items already canceled. You can always [get the order details](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_order_details) to review the current status of items in an order

### Partial Fulfillment / Cancellation / Refunds

Orders may contain one or more order line items. Order line items represent individual products that a customer has purchased in one order. As a seller, you may process each order line item independently.

The following is a sample order request with two different line items, where we operate on two line items with different operations independently. One item has been fulfilled and subsequently refunded, whereas the other item was canceled before it was fulfilled.

```
{  
  "items": [  
    {  
      "item_id": "meta_item_id_1",  
      "fulfill_quantity": 0,  
      "refund_quantity": 2,  
      "cancel_quantity": 0,  
      "tracking_info": [  
        {  
          "tracking_number": "test_tracking_number",  
          "carrier": "UPS"  
        }  
      ]  
    },  
    {  
      "item_id": "meta_item_id_2",  
      "fulfill_quantity": 0,  
      "refund_quantity": 0,  
      "cancel_quantity": 2  
    }  
  ],  
  "merchant_order_reference": "seller_order_123"  
}
```

## Caveats

Meta will apply your order state within certain constraints and subject to typical order flow. For example, if an order is canceled but then later marked as fulfilled, Meta will be unable to apply this state as we cannot capture canceled orders. Similarly, we cannot retroactively apply changes that would result in an updated tax calculation once the order has already been captured.

For other types of updates, such as reason codes, we may not send new notifications to buyers if we've already notified them with the previous reason, though we may still apply the update to the order.

## Learn More

* [Cancellation and Refund API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api)
* [Fulfillment API Reference](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api)
