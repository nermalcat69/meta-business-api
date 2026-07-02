---
title: "Payments"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions
---

# Payments

Updated: Dec 4, 2025

Use the Payments endpoint to obtain additional financial details for a specific order.

## Get Order Payments

An order can have multiple shipments where each shipment corresponds to one payment. In future we may have one payment for multiple shipments.

Fetch all payment details for a given order.

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<ORDER_ID>/payments
```

### Request

| Attribute | Type | Description |
| --- | --- | --- |
| `fields` | `id, subtotal, tax, tax_remitted, total_amount, shipments, transaction_details` | Returns specified fields |

### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | array of [`payment_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#payment_details) |  |

### `payment_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | array of [`payment_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#payment_info) |  |

### `payment_info` object

| Attribute | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the payment for the order |
| `subtotal` | [`subtotal`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#subtotal) | Subtotal amounts on the order |
| `tax` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) | Tax amount charged on the order |
| `tax_remitted` | `boolean` | `true` if taxes are collected by Facebook |
| `total_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) | Total amount charged in this payment |
| `shipments` | [`shipments`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#shipments) | Shipment associated with this payment |
| `transaction_details` | [`transaction_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#transaction_details) | **Optional**. Details of successful transactions associated with this payment. This field is missing in the case of failed payment capture, and orders without this field cannot be refunded. |

### `subtotal` object

| Attribute | Type | Description |
| --- | --- | --- |
| `items` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) | Amount of the item associated with this payment. |
| `shipping` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) | We prorate shipping based on the shipping profile. For example, if the seller ships 1 item, then the 2nd item.  Example 1 - The shipping is USD 5 base cost, then USD 1 per additional item. We will charge $5 shipping on first shipment, $1 on second shipment  Example 2 - shipping is $6 flat cost. We will charge $6 shipping on first shipment, $0 on second shipment |

### `shipments` object

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | array of [`shipment_info`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#shipment_info) | Each shipment will correspond to one payment so today this is an array with one element only. In future we may add multiple shipments to one payment. |

### `shipment_info` object

| Attribute | Type | Description |
| --- | --- | --- |
| `id` | `string` | Facebook shipment ID |
| `external_shipment_id` | `string` | ID representing the shipment in your database. This ID can be used to perform updates on tracking info set on a shipment. **Optional but recommended.** |

### `transaction_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | array of [`transaction_detail`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#transaction_detail) |  |

### `transaction_detail` object

| Attribute | Type | Description |
| --- | --- | --- |
| `transaction_type` | `string` | Type of transaction. Allowed values are: `SALE` or `REFUND`. |
| `transaction_date` | `string` | Order’s latest update datetime in [ISO 8601 format⁠](https://en.wikipedia.org/wiki/ISO_8601). |
| `transfer_id` | `string` |  |
| `processing_fee` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) | Processing fee |
| `net_payment_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) | Net payment amount |
| `tax_rate` | `string` | Percentage tax rate |
| `tax_details` | array of [`tax_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#tax_details) | Tax details object |
| `payout_reference_id` | string | The bank reference ID associated with the payout in which this transaction is included. Note: only available for payouts processed after 5/15/19. |

### `tax_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `data` | array of [`tax_detail`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#tax_detail) |  |

### `tax_detail` object

| Attribute | Type | Description |
| --- | --- | --- |
| `tax_category` | `string` |  |
| `jurisdiction` | `string` |  |
| `imposition` | `string` |  |
| `item_tax_rate` | `string` |  |
| `item_tax_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions#currency_amount) |  |

### `currency_amount` object

| Attribute | Type | Description |
| --- | --- | --- |
| `amount` | `string` | Amount in decimal format, eg. “5.5”. |
| `currency` | `string` | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase, e.g. USD. |

### Sample Response

```
```
{  
  "data": [  
    {  
      "id": "2381232183",  
      "subtotal": {  
        "items": {  
          "amount": "40.00",  
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
      "tax_remitted": true,  
      "total_amount": {  
        "amount": "44.06",  
        "currency": "USD"  
      },  
      "shipments": {  
        "data": [  
          {  
            "id": "2121312213",  
            "external_shipment_id": "shopify-shipment-1"  
          },  
          {  
            "id": "2121312213",  
            "external_shipment_id": "shopify-shipment-2"  
          }  
        ]  
      },  
      "transaction_details": {  
        "data": [  
          {  
            "transaction_type": "SALE",  
            "transaction_date": "2019-01-03T09:16:21+00:00",  
            "transfer_id": "po_1DqSkwFN7vzsfPbcs4aFsknN",  
            "processing_fee": {  
              "amount": "-0.33",  
              "currency": "USD"  
            },  
            "net_payment_amount": {  
              "amount": "0.67",  
              "currency": "USD"  
            }  
          },  
          {  
            "transaction_type": "REFUND",  
            "transaction_date": "2019-01-09T06:18:50+00:00",  
            "processing_fee": {  
              "amount": "0.33",  
              "currency": "USD"  
            },  
            "net_payment_amount": {  
              "amount": "-0.67",  
              "currency": "USD"  
            },  
            "tax_rate": "8.25%",  
            "tax_details": {  
              "data": [  
                {  
                  "tax_category": "FBMP_OTHER_TAXABLE",  
                  "jurisdiction": "CALIFORNIA",  
                  "imposition": "Sales and Use Tax",  
                  "item_tax_rate": "6%",  
                  "item_tax_amount": {  
                    "amount": "0.06",  
                    "currency": "USD"  
                  }  
                },  
                {  
                  "tax_category": "FBMP_OTHER_TAXABLE",  
                  "jurisdiction": "ALAMEDA",  
                  "imposition": "Local Sales and Use Tax",  
                  "item_tax_rate": "1.25%",  
                  "item_tax_amount": {  
                    "amount": "0.01",  
                    "currency": "USD"  
                  }  
                }, // and more  
              ]  
            }  
          }  
        ]  
      }  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "--sanitized_key--",  
      "after": "--sanitized_key--"  
    }  
  }  
}
```
```

## Learn More

[Promotions](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/promotions)
