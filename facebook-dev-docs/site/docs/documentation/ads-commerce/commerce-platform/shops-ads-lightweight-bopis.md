---
title: "Simplified Shops Ads Experiences: Enable Subscriptions"
source_url: https://developers.facebook.com/documentation/ads-commerce/commerce-platform/shops-ads-lightweight-bopis
---

# Simplified Shops Ads Experiences: Enable Subscriptions

Updated: Feb 2, 2026

**Note**: Enabling subscriptions can only be completed after you finish integration work for the new simplified Shops ads experiences feature.

You can add subscriptions products into your Meta catalog using a catalog feed. (Estimated effort <1 week)

## User Experience

| PDP | Cart | Checkout via Seller's Website in IAB |
| --- | --- | --- |
| Subscription product detail page showing two purchase plans, 'Deliver every month' and 'Deliver every 2 months' | Cart screen with a subscription item billed every 2 months and a 'Checkout on seller's website' button | Seller's website checkout in an in-app browser with contact and delivery address fields filled in |

## How to Use Catalog Feed

### 1. Catalog Feed

A new field `subscription_plans` in the catalog is now supported. This field is a JSON encoded string with fields `requires_subscription_plan` and `plans`.

| Attribute | Required | Description |
| --- | --- | --- |
| `requires_subscription_plan`  bool | true | If true, the product item only supports subscription purchase. One-time purchase is not supported. If false, both subscription purchase and one-time purchase are supported. |
| `plans`  list<SellingPlan> | true | A list of SellingPlan |

### SellingPlan object

| Attribute | Required | Description |
| --- | --- | --- |
| `id`  string | true | The id of the subscription plan, Meta will be passing this within the checkout URL. |
| `billing_frequency`  BillingFrequency | false | The billing frequency |
| `delivery_frequency`  DeliveryFrequency | false | The delivery frequency |
| `price_adjustment`  PriceAdjustment | false | The price adjustment |

### BillingFrequency object

| Attribute | Required | Description |
| --- | --- | --- |
| `interval`  string | true | Supported values: day, month, week, year |
| `interval_count`  integer | true | Frequency of billing  Example value: 1 |

### DeliveryFrequency object

| Attribute | Required | Description |
| --- | --- | --- |
| `interval`  string | true | Supported values: day, month, week, year |
| `interval_count`  integer | true | Frequency of delivery  Example value: 1 |

### PriceAdjustment object

| Attribute | Required | Description |
| --- | --- | --- |
| `adjustment_value_type`  string | true | Supported values: fixed\_amount, percentage |
| `adjustment_percent_value`  float | false | The percent off for percentage type  Example value: 10 |
| `adjustment_fixed_value_amount`  float | false | The amount off for fixed\_amount type  Example value: 20 |

### Example

```
{
 "requires_subscription_plan": true,
 "plans": [
   {
     "id": "monthly plan",
     "delivery_frequency": {
       "interval": "month",
       "interval_count": 1
     }
   },
   {
     "id": "monthly plan with 10% off",
     "delivery_frequency": {
       "interval": "month",
       "interval_count": 1
     },
     "price_adjustment": {
       "adjustment_value_type": "percentage",
       "adjustment_percent_value": 10,
       "adjustment_fixed_value_amount": null
     }
   },
   {
     "id": "monthly plan with $10 off and annual bill",
     "delivery_frequency": {
       "interval": "month",
       "interval_count": 1
     },
     "price_adjustment": {
       "adjustment_value_type": "fixed_amount",
       "adjustment_percent_value": 10,
       "adjustment_fixed_value_amount": null
     },
     "billing_frequency": {
       "interval": "year",
       "interval_count": 1
     }
   }
 ]
}
```

#### Example of the subscription PDP

![Subscription product detail page with color selector and two delivery-frequency purchase options](https://scontent.fdel27-1.fna.fbcdn.net/v/t39.2365-6/653406107_1459945392530777_1237512790866079225_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=_a9bhERT09EQ7kNvwFSdKYq&_nc_oc=AdrGdabIPjjEg2Ysy_Yxulapwh1s6J4e1VKZ1Owoz2U7jARnLOlE55UEx5dFhh8rij8YEpCbK7CMp1qMbKe8spbn&_nc_zt=14&_nc_ht=scontent.fdel27-1.fna&_nc_gid=NJGCDmtcH3hf4if40gdXSA&_nc_ss=7b289&oh=00_AQB87LVuK9gZmofqRQh3C85unz6rk69y_mqAJYZzMSbpQw&oe=6A609611)

### 2. Checkout URL

You will need to make changes to the custom [checkout URL](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url) that allows Meta to send a buyer to your checkout screen.

| Query Parameter | Description | Examples |
| --- | --- | --- |
| `products` | **Required.**  A comma-separated list of products. For each product, the ID and quantity are separated by a colon. Commas (%2C) and colons (%3A) are escaped according to [RFC 3986⁠](https://datatracker.ietf.org/doc/html/rfc3986).  Your web server should provide an API similar to decodeURIComponent to parse these parameters.  Products with comma (,) or colon (:) characters in their ID are not supported. | `products=12345%3A3%2C23456%3A1`  This example cart has the following two products:   * product ID 12345 with quantity 3 and * product ID 23456 with quantity 1 |
| `coupon` | **Optional.**  A single coupon code to apply at checkout. This may include an email opt-in promo code. | `coupon=SUMMERSALE20` |
| `products_json` | **Optional.**  A JSON object that contains metadata to support product-specific features such as subscriptions, customizations, etc. Braces (%257B & %257D), quotations (%2522), commas (%252C) and colons (%253A) are escaped according to [RFC 3986⁠](https://datatracker.ietf.org/doc/html/rfc3986). | **Encoded example**:  %257B%252212345%2522%253A%257B%2522selling\_plan%2522%253A%2522plan\_1%2522%257D%257D  **Decoded example:**  {“12345”:{“selling\_plan”:”plan\_1”}} |

#### URL with no subscription selected

```
https://your-website.com/any-url?products=<product-id:1>&coupon=<promo>
```

#### URL with subscription selected::

```
https://your-website.com/any-url?products=<product-id:1>&coupon=<promo>&products_json=<products_json>
```

## See Also

* [Set Up a Checkout URL](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url)
* [Catalog and Inventory](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/catalog)
