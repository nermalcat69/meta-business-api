---
title: "Order Integration"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/glossary
---

# Order Integration

Updated: Apr 25, 2024

Providing high-quality order and post-purchase experiences is critical to customer trust and conversion/retention. Ensuring orders are processed and synced between Meta's systems and merchant's systems brings accuracy and reliability to customer experiences, reducing instances of both customer issues and merchant issues:

* Customer issues, such as cancellations or late deliveries, hurt merchant reputations and increase customer support needs.
* Merchant issues, such as or order fulfillment sync issues, can result in delayed or inability to get paid for orders not marked as fulfilled on Meta systems.

Failure to acknowledge/process post-purchase support in a timely manner for refunds/returns can result in support-initiated refunds at cost to the Merchant.

The best order management experience for sellers is one where they are able to complete the following Jobs-To-Be-Done (JTBDs) in the Order Management System (OMS) that they already use:

* Process and fulfill a new order
* Cancel a full or partial order to notify the customer of fulfillment problems
* Refund a full or partial order to the customer

Unless a product is marked as `final sale`, you are required to provide support for returning goods. Buyers are given 30 days to initiate a return by default, but sellers can configure item-level return policies as well. Buyers can go to their order summary to request a return, which initiates one of the following flows:

* Opens the seller's return website, if a `Returns URL` is configured in the shop's return settings.
* Sends an email to the seller's customer support contact address registered in their shop's setup.

If a return label is provided in the package, customers can also return items directly without using the Facebook or Instagram app. When the returned item has been received by the seller, a refund should be initiated.

To holistically understand the different order states, transitions, and operations associated with an order on Meta Commerce, see [Order Lifecycle](https://developers.facebook.com/docs/commerce-platform/order-management/overview). While this overview is described from the point of view of a direct seller (aka merchant) integration, this is very much applicable to partner-based integrations where the sellers are proxied by the partner platform.

After sellers have been successfully onboarded and their inventory has been uploaded to Meta, their products are ready to be purchased by consumers. From the Commerce Platform, you can use the [Order Management APIs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management) to move orders for the sellers you support into your system and manage their lifecycle.

## Requirements

You are required to do the following to meet our Shops [integration quality bar](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/overview#int-qual-bar):

[**Requirement 1**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/glossary#ack-orders): Receive and acknowledge orders from Meta

[**Requirement 2**](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/partners/glossary#sync-oms-meta): Synchronize order states from the OMS to Meta

## Before You Start

Your app must have the following permissions:

* [commerce\_manage\_accounts](https://developers.facebook.com/docs/permissions/reference/commerce_manage_accounts) **or** [commerce\_account\_read\_settings](https://developers.facebook.com/docs/permissions/reference/commerce_account_read_settings)
* [commerce\_account\_manage\_orders](https://developers.facebook.com/docs/permissions/reference/commerce_account_manage_orders) **or** [commerce\_account\_read\_orders](https://developers.facebook.com/docs/permissions/reference/commerce_account_read_orders)

## Requirement 1: Receive and Acknowledge Orders from Meta to the OMS

### Step 1: Receive New Orders

To manage orders via the API, an app must first be associated with the commerce seller settings representing a given shop. This action only needs to be performed once per shop, and instructs the Meta Commerce Platform to leave finalized orders in the `CREATED` state for you to acknowledge.

This must happen before going live with the shop; otherwise, orders are acknowledged automatically and sellers can't attach a merchant order reference ID to orders.

**Sample Request**

```
curl -X POST \  
  -F 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/{api-version}/{cms-id}/order_management_apps
```

**Sample Response**

```
{  
    "success": true  
}
```

Orders placed on Facebook or Instagram are put on hold while they are being processed by our internal systems. This delay is also designed to give a chance for buyers to cancel their orders in case of regret. After Meta has verified that a given transaction is legitimate, the corresponding order is made available for fulfillment. When the seller fulfills the order, the money associated with that fulfillment is captured and the payout process to the seller begins.

Use the [List Orders API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_orders) to discover new orders; a pull-based mechanism where you regularly poll the API in search of new orders to be fulfilled. The recommended polling interval is 5–15 minutes. By default, this API lists all the commerce orders associated with a Shop, returning only those orders in the `CREATED` state.

**Sample Request**

```
curl -X GET -G \  
  -d 'state=CREATED' \  
  -d 'fields=id,buyer_details,channel,merchant_order_id,order_status' \  
  -d 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/{api-version}/{cms-id}/commerce_orders
```

**Sample Response**

```
{  
  "data": [  
    {  
      "id": "3565497390177110",  
      "buyer_details": {  
        "name": "John Doe",  
        "email": "7dvra5wfy2@commerce.facebook.com",  
        "email_remarketing_option": false  
      },  
      "channel": "facebook",  
      "order_status": {  
        "state": "CREATED"  
      }  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "--SANITIZED--",  
      "after": "--SANITIZED--"  
    }  
  }  
}
```

The response contains the `ORDER_ID` variable in the `data[].id` field, which is used in subsequent requests to identify the operation on this specific order. There might be more new orders present in the response. To ensure you consumed all new orders, use the [pagination](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/using-api#pagination) cursors. Learn more about the [Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#response).

### Step 2: Acknowledge Orders

When an order is completed with being processed on the Meta Commerce Platform (fraud checks, and so on), its state is automatically changed to `CREATED`. Learn more about [order state](https://developers.facebook.com/docs/commerce-platform/order-management/overview#order_state).

Acknowledging an order confirms that you've moved the order into your Order Management System (OMS) and are ready for the seller to fulfill it. You should ensure that the seller has adequate inventory and that inventory is set aside as you acknowledge the order. Acknowledging an order changes its state to `IN_PROGRESS`.

Do not start processing orders in your systems that have not been successfully acknowledged.

You can pass a `merchant_order_reference` during acknowledgement. This represents the unique order ID as known by your internal OMS. This ID is displayed on the receipt and users can reference it when contacting your teams for support.

Depending on the volume of orders, you can acknowledge using the regular or [Batch API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api#acknowledge_orders). This API allows up to 100 orders to be acknowledged in a single request. If you expect a high volume of orders, we recommend that you acknowledge them in batches. If you acknowledge them individually, you might exceed our Page [rate limits](https://developers.facebook.com/docs/graph-api/overview/rate-limiting). If you go over the rate limits, your API calls will be throttled. To process orders in batches, use our bulk acknowledgement method. To acknowledge a created order, call the [Acknowledgement API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api) using the `ORDER_ID`.

**Sample Request**

```
curl -X POST \  
  -F '{  
    "idempotency_key": "<UUID>"  
  }' \  
  -F 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/{api-version}/{order-id]/acknowledge_order
```

**Sample Request (Non-batch)**

```
{  
  "id": "3565497390177110",  
  "state": "IN_PROGRESS"  
}
```

**Sample Request (Batch)**

```
{  
  "idempotency_key": "cb090e84-e75a-9a34-45d3-5163bec88b65",  
  "orders": [  
    {  
      "id": "64000841790004"  
    },  
    {  
      "id": "10100677592885259"  
    }  
  ]  
}
```

If a few orders were in `FB_PROCESSING` state, then you cannot `ACK` them and receive a coded exception. Retrying these requests with the same idempotency key returns the same result. When you get a coded exception, we recommend that you use a new idempotency key and retry.

**Sample Response (Batch)**

```
{  
  "orders": [  
    {  
      "id": "64000841790004",  
      "state": "IN_PROGRESS"  
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

Learn more about the [Acknowledgement API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/acknowledgement-api).

## Requirement 2: Synchronize order states from the OMS to Meta

### Step 1: Synchronize Order Cancellation

Sellers can cancel an order or partial items in an order that's in the `IN_PROGRESS` state. For example, if they have not been shipped already to notify buyers of fulfillment problems. When the seller initiates the cancellation in your OMS, synchronize this order cancellation state with Meta by calling the [Cancel Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order) with the `ORDER_ID`.

**Sample Request**

```
curl -X POST \  
  -F 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/{api-version}/{order-id}/cancellations
```

**Sample Request (Full Order)**

```
  "cancel_reason": {  
    "reason_code": "CUSTOMER_REQUESTED",  
    "reason_description": "Buyer did not need it anymore"  
  },  
  "restock_items": true,  
  "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
}
```

**Sample Request (Partial Order)**

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

**Sample Response**

```
{  
  "success": true  
}
```

Learn more about the [Cancellation API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order).

It is important to note that once an order is made available for fulfillment, the seller is subject to fulfillment SLAs. If the seller does not fulfill the order within the appropriate time window, Meta may automatically cancel unfulfilled items within the order.

Use the [List Orders API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_orders), a pull-based mechanism where you regularly poll the API, to search for orders with cancellations. A `has_cancellations` filter can be provided in the request. See also: the [List Cancellations API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#get_cancellations).

### Step 2: Synchronize Order Fulfillment

When the seller starts fulfilling an order, synchronize the fulfillment state of the order from your OMS into Meta by calling the shipments API using the `ORDER_ID` associating a carrier code and tracking number.

Sellers can choose to fulfill an order using one or more shipments. Use the `items` field to specify a list of `retailer_id` and `quantity` representing which products and how many are part of each shipment. Set the `external_shipment_id` request field to an (alphanumeric and "\_") identifier in your OMS to later reference this shipment. Once the shipment is attached to the order on Meta, the buyer is charged.

**Sample Request**

```
curl -X POST \  
  -F '{  
    "external_shipment_id": "shipment_1",  
    "items": [  
      {  
        "retailer_id": "FB_T_Shirt_001",  
        "quantity": 1  
      }  
    ],  
    "tracking_info": {  
      "tracking_number": "1Z204E380338943508",  
      "carrier": "UPS",  
    },  
    "idempotency_key": "<UUID>"  
  }' \  
  -F 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/{api-version]/{order-id}/shipments
```

**Sample Response**

```
{  
  "success": true  
}
```

Learn more about the [Fulfillment API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/fulfillment-api).

### Step 3: Synchronize Order Refund

Sellers can initiate a partial or full refund (by quantity or price) typically in response to a product issue reported by the buyer. When the seller initiates a refund action, synchronize the refunded order state from your OMS into Meta by calling the [Refund Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_order) with the `ORDER_ID` and reason code. (For a list of possible refund reasons, see [refund\_reason\_code enum](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_reason_code)). This triggers a reverse payment transaction by Meta to the buyer and deducts the corresponding amount from the seller's balance.

**Sample Request**

```
curl -X POST \  
  -F '{  
   "reason_code": "WRONG_ITEM",  
   "idempotency_key": "<UUID>"  
}' \  
  -F 'access_token=<ACCESS_TOKEN>' \  
  https://graph.facebook.com/{api-version}/{order-id}/refunds
```

**Sample Request (Full Order)**

```
{  
    "reason_code": "WRONG_ITEM",  
    "idempotency_key": "cb090e84-e75a-9a34-45d3-5153bec88b65"  
}
```

**Sample Request (Partial Order)**

```
{  
  "items": [  
    {  
      "item_id": "1234",  
      "item_refund_quantity": 1  
    },  
    {  
      "item_id": "38383838",  
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

**Sample Response**

```
{  
  "success": true  
}
```

Learn more about the [Refund API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#refund_order).

## Learn More

* [Order Management APIs](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management)
* [List Orders API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_orders)
* [Order State](https://developers.facebook.com/docs/commerce-platform/order-management/overview#order_state)
* [Cancel Order API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/cancellation-refund-api#cancel_order)
