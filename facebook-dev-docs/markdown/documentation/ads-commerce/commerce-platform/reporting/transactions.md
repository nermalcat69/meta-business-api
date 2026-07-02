---
title: "Payouts"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions
---

# Payouts

Updated: Dec 4, 2025

After a customer places an order from your Facebook Shop or Instagram Shopping account and you mark the order as shipped, you'll be [paid for the order](https://developers.facebook.com/docs/commerce-platform/concepts/finance-and-tax#getting-paid) within 2 to 30 days.

This endpoint provides the payout history for your account, which you can filter by time range. It will also include a `payout_reference_id` which you can combine with the [Transactions](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions) endpoint to query more details for that particular payout.

Below is an example request to get all payouts for the month of June.

For payouts before May 15, 2019 the `payout_reference_id` field is not defined.

```
curl -X GET -G \
  -d 'start_time=1559347200' \
  -d 'end_time=1561939200' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<PAGE_ID>/commerce_payouts
```

### Request

| Attribute | Type | Description |
| --- | --- | --- |
| `start_time` | Unix timestamp | Starting time period for payout report |
| `end_time` | Unix timestamp | Ending time period for payout report |

### Response

| Value | Type | Description |
| --- | --- | --- |
| `amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/reporting/transactions#currency_amount) |  |
| `payout_date` | ISO 8601 Datetime | Indicates the date at which the transaction was initiated. If a row has this date, then it means that the transaction was included in the payout initiated on that day. **If this field is empty, it means that the transaction is still in the seller's balance with the payment processor and is not paid out yet.** It may take from 3 to 5 business days for payout to be reflected in you bank account after it is initiated. |
| `payout_reference_id` | String | The bank reference ID associated with this payout. Note: only available for payouts processed after 5/15/19. |
| `status` | String | Payout status, either `COMPLETED` or `FAILED` |

### `currency_amount` object

| Attribute | Type | Description |
| --- | --- | --- |
| `amount` | `string` | Amount in decimal format, eg. `4.99`. |
| `currency` | `string` | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the purchase, e.g. USD. |

### Sample response

```
{  
  "data": [  
    {  
      "amount": {  
        "amount": "0.70",  
        "currency": "USD"  
      },  
      "payout_date": "2019-06-28T11:47:11+00:00",  
      "payout_reference_id": "FBMPUSS5191u01g",  
      "status": "COMPLETED"  
    },  
    {  
      "amount": {  
        "amount": "0.10",  
        "currency": "USD"  
      },  
      "payout_date": "2019-06-27T14:11:32+00:00",  
      "payout_reference_id": "FBMPUSR5191ox2x",  
      "status": "COMPLETED"  
    }  
  ]  
}
```
