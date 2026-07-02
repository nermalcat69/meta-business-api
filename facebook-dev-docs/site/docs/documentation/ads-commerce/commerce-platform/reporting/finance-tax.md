---
title: "Transactions"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax
---

# Transactions

Updated: Feb 10, 2026

As a seller, you can use the [Payouts](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/payouts) endpoint to access the payout history for your store (with limited details about those payouts). To access more detailed information about a specific payout, see the [Transactions endpoint](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions).

Query the Payouts endpoint using `payout_reference_id` to obtain information, such as which orders were included in a given payout, whether the payout was a sale or a refund, and tax details. See also [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories).

Below is an example request to get all transactions and their order details for the month of June.

We recommend to pull transactions few days before the payout date and until the payout date. For the July example, pull orders from middle of June until end of July. It might take a few more days after you received the payout to get updates from our payment provider. **Allow up to 3 business days**.

```
curl -X GET -G \
  -d 'payout_reference_id="FBMP123123"' \
  -d 'start_time=1557878400' \
  -d 'end_time=1598867200' \
  -d 'fields="transaction_type,transaction_date,order_details,transfer_id,processing_fee,net_payment_amount,tax_rate,payout_reference_id"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/commerce_transactions
```

## Request

| Attribute | Type | Description |
| --- | --- | --- |
| `payout_reference_id` | `string` | Reference ID associated with a payout. |
| `start_time` | [Unix Timestamp⁠](https://www.unixtimestamp.com/) | Starting time period for orders returned. |
| `end_time` | [Unix Timestamp⁠](https://www.unixtimestamp.com/) | Ending time period for orders returned. |
| `fields` |  | Returns specified fields:  `transaction_type`, `transaction_date`, `order_details`, `transfer_id`, `processing_fee`, `net_payment_amount`, `tax_rate`, `payout_reference_id`. See [transaction\_detail](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#transaction_detail) for details. |

## Response

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | `array` of [`transaction_detail`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#transaction_detail) | Transaction details. |

### `transaction_detail` object

| Attribute | Type | Description |
| --- | --- | --- |
| `items` | array of `order_items` | Array of [`order_items`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#order-items). |
| `transaction_type` | `string` | Type of transaction. Supported values: `SALE` or `REFUND`. |
| `transaction_date` | `string` | Order last update time in [ISO 8601 format⁠](https://en.wikipedia.org/wiki/ISO_8601). |
| `order_details` | [`Order`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#order%22) object | Details about this order. |
| `transfer_id` | `string` | The ID of the transfer. |
| `processing_fee` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#currency_amount) | Processing fee. |
| `net_payment_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#currency_amount) | Net payment amount. |
| `tax_rate` | `string` | Percentage tax rate. |
| `tax_details` | array of [`tax_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#tax_details) | Tax details. See also [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories). |
| `payout_reference_id` | `string` | The reference ID associated with this payout. |

### `order_items` object

| Attribute | Type | Description |
| --- | --- | --- |
| `order_items` | array | Array of order items that includes the following fields:   * `id` — Retailer product ID * `product_id` — Facebook product ID * `product_name` — Facebook product name. * `quantity` — Quantity of this product. * `price_per_unit` — See [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#currency_amount) * `tax_details` — See [`tax_detail_object`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#tax_details) and [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories). * `selected_shipping_option` — See [`selected_shipping_option`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#selected_shipping_option) |

### `tax_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | array of [`tax_detail`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#tax_detail) | See [`item_tax_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#item_tax_details) and [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories). |

### `tax_detail` object

| Attribute | Type | Description |
| --- | --- | --- |
| `tax_category` | `string` | Facebook tax category. See also [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories). |
| `jurisdiction` | `string` | Jurisdiction for this tax item; for example, estate, city, finance authority, and so on. |
| `imposition` | `string` | Imposed tax; for example: Sales and Use Tax. |
| `item_tax_rate` | `string` | Tax rate for item. See also [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories). |
| `item_tax_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#currency_amount) | Tax amount for item. See also [GPT to Facebook Tax Category Mappings](https://developers.facebook.com/docs/commerce-platform/reporting/tax-categories). |

### `currency_amount` object

| Attribute | Type | Description |
| --- | --- | --- |
| `amount` | `string` | Amount in decimal format. Example: `4.99` |
| `currency` | `string` | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase. Format the currency as a number, followed by the 3-digit ISO currency code [(ISO 4217 standards)⁠](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency. Example: `USD` |

### `selected_shipping_option` object

| Attribute | Type | Description |
| --- | --- | --- |
| `name` | `string` | Human readable name of the shipping option. |
| `price` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#currency_amount) | Shipping cost. |
| `calculated_tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/finance-tax#currency_amount) | Shipping tax amount. This amount is updated as the order is fulfilled, you can do additional API calls to [update this amount](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices/ship-fulfillment#update-estimated-taxes). |
| `estimated_shipping_time` | `estimated_shipping_time` | Estimated shipping time |

### Sample Response

```
```
{  
  "data": [  
    {  
      "transaction_type": "REFUND",  
      "transaction_date": "2019-09-06T19:56:53+00:00",  
      "order_details": {  
        "id": "420069168636230",  
        "order_status": {  
          "state": "COMPLETED"  
        },  
        "created": "2019-08-27T21:08:42+00:00",  
        "last_updated": "2019-09-06T19:56:56+00:00"  
      },  
      "processing_fee": {  
        "amount": "0.00",  
        "currency": "USD"  
      },  
      "net_payment_amount": {  
        "amount": "-0.40",  
        "currency": "USD"  
      },  
      "tax_rate": "0%;0%"  
    },  
    {  
      "transaction_type": "REFUND",  
      "transaction_date": "2019-09-06T19:56:53+00:00",  
      "order_details": {  
        "id": "420069168636230",  
        "order_status": {  
          "state": "COMPLETED"  
        },  
        "created": "2019-08-27T21:08:42+00:00",  
        "last_updated": "2019-09-06T19:56:56+00:00"  
      },  
      "processing_fee": {  
        "amount": "0.00",  
        "currency": "USD"  
      },  
      "net_payment_amount": {  
        "amount": "-0.11",  
        "currency": "USD"  
      },  
      "tax_rate": "0%;0%"  
    },  
  ],  
  "paging": {  
    "cursors": {  
      "before": "MAZDZD",  
      "after": "MTgZD"  
    }  
  }  
}
```
```
