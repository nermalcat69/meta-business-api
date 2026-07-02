---
title: "Promotions"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices
---

# Promotions

Updated: Oct 3, 2022

Use the Promotions API to manage promotions on your commerce account.

## Order-Level Promotion Details

Returns all promotions applied to an order. See [Get Order Details API](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_order_details) for more information. Returned attributes must be specified as fields in the request.

#### Request

```
curl -X GET -G \
 -d 'access_token=<ACCESS_TOKEN>' \
 -d 'fields=promotion_details{applied_after_tax,applied_amount,campaign_name,promotion_id,target_granularity,sponsor,coupon_code,retailer_id}' \
 https://graph.facebook.com/<ORDER_ID>
```

#### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `promotion_details` | [`promotion_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices#promotion_details_object) | Details about promotions applied to an order. |

### `promotion_details` object

| Attribute | Type | Description |
| --- | --- | --- |
| `applied_after_tax` | boolean | Promotion is applied after tax (`True`); otherwise (`False`). |
| `applied_amount` | [`currency_amount`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices#currency_amount) | Total discount amount. |
| `campaign_name` | string | Promotion campaign name. |
| `promotion_id` | string | Unique ID representing the promotion. |
| `target_granularity` | [`offer target granularity enum`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices#otg-enum) | The granularity of the promotion. For example, `order_level` means the discount is distributed across the entire order (e.g, a coupon for $10 off an entire order.) |
| `sponsor` | [`sponsor enum`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices#sponsor-enum) | Entity sponsoring the promotion. |
| `coupon_code` | string | Coupon code label. |
| `retailer_id` | string | Unique coupon ID used to identify the coupon in the merchant system. |

### `currency_amount` object

| Attribute | Type | Description |
| --- | --- | --- |
| `amount` | string | Amount in decimal format. Example: `5.5` |
| `currency` | string | [Three digit ISO-4217-3 code](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies) for the amount, e.g. USD. |

### `sponsor enum`

| Value | Description |
| --- | --- |
| `merchant` | Promotion sponsored by the merchant. |
| `facebook` | Promotion sponsored by Meta. |

### `offer target granularity enum`

| Value | Description |
| --- | --- |
| `item_level` | Discount is applied to each target product item included at checkout (e.g., a $5.00 discount targeting all footwear would deduct $5.00 for each pair of shoes in a user's shopping cart at checkout.) |
| `order_level` | Discount is applied per merchant order and distributed across the target items (e.g., a coupon for $10 off an entire order). |

#### Sample Request

```
curl -X GET -G \
 -d 'access_token=<ACCESS_TOKEN>' \
 -d 'fields=promotion_details{promotion_id,retailer_id,applied_amount,campaign_name,target_granularity}' \
 https://graph.facebook.com/<ORDER_ID>
```

#### Sample Response

```
{
    "promotion_details":
    {
        "data":
        [
            {
                "promotion_id": "123456789",
                "applied_amount":
                {
                    "amount": "0.60",
                    "currency": "USD"
                },
                "campaign_name": "$0.60 off",
                "target_granularity": "order_level"
            },
            {
                "promotion_id": "987654321",
                "retailer_id": "sample_retailer_id",
                "applied_amount":
                {
                    "amount": "23.00",
                    "currency": "USD"
                },
                "campaign_name": "$23 Off",
                "target_granularity": "order_level"
            }
        ]
    }
}
```

## Item-Level Promotion Details

Promotions applied to an Order Item. See [List Order Items](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/order-management/order-api#get_order_items) for more information.

#### Request

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
  -d 'fields=promotion_details{applied_after_tax,applied_amount,campaign_name,target_granularity,promotion_id,sponsor,coupon_code,retailer_id}' \
  https://graph.facebook.com/<ORDER_ID>/items
```

#### Response

| Attribute | Type | Description |
| --- | --- | --- |
| `promotion_details` | [`promotion_details`](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/best-practices#promotion_details_object) | Details about promotions applied to an item. |

#### Sample Request

```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
  -d 'fields=promotion_details{applied_after_tax,applied_amount,campaign_name,promotion_id,target_granularity,sponsor,retailer_id}' \
  https://graph.facebook.com/<ORDER_ID>/items
```

#### Sample Response

```
{
    "data":
    [
        {
            "promotion_details":
            {
                "data":
                [
                    {
                        "applied_after_tax": true,
                        "applied_amount":
                        {
                            "amount": "0.60",
                            "currency": "USD"
                        },
                        "campaign_name": "$0.60 off",
                        "promotion_id": "123456789",
                        "sponsor": "facebook",
                        "target_granularity": "item_level"
                    },
                    {
                        "applied_after_tax": false,
                        "applied_amount":
                        {
                            "amount": "23.00",
                            "currency": "USD"
                        },
                        "campaign_name": "$23 Off",
                        "promotion_id": "987654321",
                        "sponsor": "merchant",
                        "retailer_id": "sample_retailer_id",
                        "target_granularity": "item_level"
                    }
                ]
            }
        }
    ],
}
```
