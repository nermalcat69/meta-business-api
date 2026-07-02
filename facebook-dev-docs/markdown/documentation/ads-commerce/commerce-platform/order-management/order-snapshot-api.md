---
title: "Acknowledgement API Reference"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-snapshot-api
---

# Acknowledgement API Reference

Updated: Feb 9, 2026

When an order is completed with being processed on the Commerce Platform (fraud checks, remorse period, ...), its state is automatically changed to `CREATED`. Acknowledging an order confirms that you have moved the order into your Order Management System and are ready to fulfill it. Acknowledging an order changes its state to `IN_PROGRESS`.

By default, your shop is configured to automatically move orders to the `IN_PROGRESS` state when finalized. To enable order acknowledgement, you must first associate your shop with your app. This one-time operation is recommended if you are planning to fulfill orders using the API, and will leave finalized orders in the `CREATED` state until you acknowledge them.

## Associate Commerce Seller Settings with Your App

To manage orders via API, an app must first be associated with the commerce seller settings representing your shop. **This action only needs to be performed once**, and instructs the Commerce Platform to leave finalized orders in the `CREATED` state for you to acknowledge.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<CMS_ID>/order_management_apps
```

The token here is `PAGE_ACCESS_TOKEN`

### Request

| Attribute | Description |
| --- | --- |
| `cms-id`  Type: string | Commerce seller settings ID for the page that you want to extract orders. You can find `{cms-id}` by logging into [Facebook Commerce Manager⁠](https://www.facebook.com/commerce_manager) and then select the page that you want to extract orders. You will be redirected to www.facebook.com/ commerce\_manager/`{cms-id}` |

### Sample Response

```
{  
    "success": true  
}
```

## Acknowledge One Order

Acknowledge one specific order that was retrieved using the [List Orders API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api). This action marks the order as `IN_PROGRESS`, and can be filtered out from future pulls.

Be sure to capture errors, take action according to the error messages, and retry accordingly. **Do not start processing orders in your systems that have not been successfully acknowledged.**

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/acknowledge_order
```

The token here is `PAGE_ACCESS_TOKEN`

### Request

| Attribute | Description |
| --- | --- |
| `merchant_order_reference`  Type: string | **Optional**  ID representing the order in your order management system. |
| `idempotency_key`  Type: string | **Required**  Unique key per request |

### Sample Request

```
{  
  "idempotency_key": "cb090e84-e75a-9a34-45d3-5163bec88b65",  
  "merchant_order_reference": "external_order-id-1"  
}
```

### Sample Response

```
{  
  "id": "64000841784004",  
  "state": "IN_PROGRESS"  
}
```

## Acknowledge Multiple Orders

Acknowledge order batches have a maximum of 100 orders per batch.

Acknowledge orders that were received by the [List Orders API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api), in a batch. This action marks orders as `IN_PROGRESS`, and can be filtered out from future pulls.

```
curl -X POST \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/acknowledge_orders
```

The token here is `PAGE_ACCESS_TOKEN`

### Request

| Attribute | Description |
| --- | --- |
| `orders` Type: `array` of [`order_id`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-snapshot-api#order_id) | **Required**  Array of 100 or less order IDs. |
| `idempotency_key`  Type: string | **Required**  Unique key per request |

### `order_id` object

| Attribute | Description |
| --- | --- |
| `id`  Type: string | **Required**  ID of the order. |
| `merchant_order_reference`  Type: string | **Optional**  ID representing the order in your order management system |

You can Acknowledge multiple orders in one request. If few orders were in `FB_PROCESSING` state, then you **cannot ACK** them and receive a **coded exception**. Retrying these requests with same idempotency key returns the same result. **When you get a coded exception, please use new idempotency key and retry.**

### Sample Request

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

### Response

| Attribute | Description |
| --- | --- |
| `orders`  Type: `array` of [`order_id_and_state`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-snapshot-api#order_id_and_state) | Array of order ID and order state. |

#### `order_id_and_state` object

| Attribute | Description |
| --- | --- |
| `id`  Type: string | ID of the order. |
| `state`  Type: [`order_state`](https://developers.facebook.com/docs/commerce-platform/order-management/overview#orders_states) | Order state. |

### Sample Response

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
