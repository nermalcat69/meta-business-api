---
title: "Set a max price for marketing messages (BETA)"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/pricing/enroll-max-price
---

# Set a max price for marketing messages (BETA)

Updated: Jun 26, 2026

Amidst the introduction of the max price feature on the Marketing Messages API for WhatsApp, there is no change to how Meta charges on the WhatsApp Business Platform. Meta continues to charge on a per-message basis, as outlined in [WhatsApp pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).

The max price feature is available in Limited Beta as of May 15 and will be **optional** throughout 2026. Meta plans to make max price generally available — and required — in Q2 2027.

**Action required: `bid_spec` is being replaced by `optimization_spec`.** As of June 18, 2026, set the max price using the new `optimization_spec` object. The `bid_amount` and `bid_strategy` fields are unchanged — only the enclosing object name changes. Both `bid_spec` and `optimization_spec` are accepted until July 31, 2026, after which `bid_spec` is no longer supported. Update your create, retrieve, and update calls before July 31, 2026.

## What is a max price?

In 2026, Meta is introducing new pricing features on the Marketing Messages API for WhatsApp to enable businesses to control and optimize spend for their marketing messaging campaigns.

The first pricing feature allows you to **set a maximum price (max price) per marketing message delivery; when a max price is set, Meta will charge that max price or lower for delivery**. Businesses can choose to set a max price the same as, lower than, or higher than the published rate to achieve their objectives per campaign.

* *Lower costs while maintaining delivery rates similar to current WhatsApp campaigns*, by setting max prices the same as published rates.
* Reach more customer cohorts on WhatsApp at lower cost, by setting max prices lower than published rates.
* Increase delivery rates during periods such as holidays and peak sales periods, by setting max prices higher than published rates.

The second pricing feature is the **reach estimation tool**, which helps businesses set the right max price by helping them understand estimated delivery rates and costs at different max prices.

### Max price explainer

The max price feature allows you to set the maximum price you are willing to pay per message delivery. Meta charges your max price or lower. In the API, you express this as a `bid_amount` value per 1,000 deliveries within the `optimization_spec` object.

* [Max price explainer PDF⁠](https://meta.highspot.com/items/69aedbc000c74039fc1633d7?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4vtMiWribYV0_SoUNRdSl3gjxdjx_XZgF438NmTlQcjV_tUtRP3c7CBA8OrQ_aem_wMVJfDH-8b_ygwtAgI_wvg#1)

## Phased roll-out of the max price feature

The max price feature rolls out in three phases:

* Limited Beta starting **May 15, 2026** -- Any partner and any directly integrated business can integrate and use the max price feature and reach estimation tool. Each partner can enable these features for a limited number of clients.
* Open Beta starting **October 2026** -- Any partner can enable these features for all their clients.
* General Availability (GA) as of **Q2 2027** -- The max price feature will become required in eligible geographies and fixed, published rates for marketing messages will only apply on the Cloud API.

## Before you begin

To use the max price feature, you must:

* Have an active WhatsApp Business account that has been [onboarded](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboarding) to the Marketing Messages API for WhatsApp.
* Be in a [country eligible for MM API for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/get-started#geographic-availability-of-features).

## Recommendations

Max price is an early-stage feature; performance may vary as Meta's systems learn and improve.

* **Set your max price at the template level.** The `bid_amount` in `optimization_spec` is what Meta's delivery system optimizes against. Setting the right max price when you create the template gives the system the best signal for delivery optimization.
* **Use `per_message_bid_multiplier` for individual message adjustments only.** The `per_message_bid_multiplier` scales the template's `bid_amount` up or down for individual messages, but the delivery system generally gives better performance optimizing based on the original template-level `bid_amount` for bulk changes.

  For example, if you set a template's `bid_amount` to 50,000 and then apply a multiplier of 2.0 on every single message, delivery performance might differ from setting the template's `bid_amount` to 100,000 directly — even though the effective max price is the same. For best results, set the bid at the template level and update the template's `optimization_spec` as needed rather than changing the message level multiplier as a workaround for such cases.
* **Ramp up traffic gradually.** When sending messages with a new max price template for the first time, increase volume slowly before sending at scale. This aligns with [Template pacing](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pacing) best practices and helps the delivery system optimize effectively.
* **Start with A/B tests.** This helps you assess the impact of different bidding rates on your delivery rates and cost per delivery. Run a four-arm test (10,000 send requests per arm) with a similar audience and time window, with the following conditions:

  * Arm A: No max price set
  * Arm B: Max price set at rate card
  * Arm C: Max price set at 1.5x rate card (1.2x for India and Saudi Arabia)
  * Arm D: Max price set at 0.9x rate card

## Create templates with max price

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to set a maximum price and include the `optimization_spec` object in the request body.

`optimization_spec` replaces `bid_spec` as of June 18, 2026. `bid_spec` continues to be accepted until July 31, 2026, after which it is no longer supported. The `bid_amount` and `bid_strategy` fields are identical in both objects.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '  
  {  
    "name": "seasonal_sale_promo",  
    "category": "MARKETING",  
    "language": "en",  
    "components": [  
      {  
        "type": "BODY",  
        "text": "Shop our seasonal sale! Up to 50% off selected items."  
      }  
    ],  
    "optimization_spec": {  
      "bid_amount": <BID_AMOUNT>,  
      "bid_strategy": "LOWEST_COST_WITH_BID_CAP"  
    }  
}'
```

If `optimization_spec` is not included, the template uses standard rate card pricing.

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WABA_ID>`*String* | **Required.**  WhatsApp Business Account ID. | `102290129340398` |
| `<BID_AMOUNT>`  *int32* | **Required.**  Maximum price per 1,000 message deliveries, expressed in your WABA currency's smallest unit (cents for USD, paise for INR, peso for MXN). See [supported currencies](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#updates-to-rate-cards) for a list of currencies. | `87000` |
| `<BID_STRATEGY>`  *Enum* | **Required.**  The bid strategy to use. Currently supports only `LOWEST_COST_WITH_BID_CAP`. | `LOWEST_COST_WITH_BID_CAP` |

### Calculating max price amounts

The `bid_amount` represents your max price per 1,000 deliveries in your WABA currency's smallest unit. To convert from your desired per-delivery price:

* Convert your desired per-delivery price to your WABA currency's smallest unit
* Multiply by 1,000 to express the value per 1,000 deliveries

**Example**: To set a max price of ₹0.87 per delivery:

* Convert to paise: 0.87 Rupees = 87 paise
* Multiply by 1,000: 87 x 1,000 = 87,000

Set `bid_amount` to `87000`.

**Example**: To set a max price of $0.05 USD per delivery:

* Convert to cents: $0.05 = 5 cents
* Multiply by 1,000: 5 x 1,000 = 5,000

Set `bid_amount` to `5000`.

## Retrieve max price information

Use the [Template API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#get-version-template-id) to get the max price setting on an existing template by querying the `optimization_spec` field.

Query `optimization_spec` as of June 18, 2026. Querying `bid_spec` continues to return the max price configuration until July 31, 2026, after which only `optimization_spec` is supported.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<TEMPLATE_ID>/?fields=optimization_spec' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<TEMPLATE_ID>`  *String* | **Required.**  ID of the WhatsApp message template. | `1733678867511493` |

### Example response

```
{  
  "optimization_spec": {  
    "bid_strategy": "LOWEST_COST_WITH_BID_CAP",  
    "bid_amount": 87000  
  },  
  "id": "1733678867511493"  
}
```

## Update max price for templates

Use the [Template API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-template-id) to update the max price setting on an existing template.

You can update the `optimization_spec` on templates that were originally created with a max price. The same parameters apply.

You cannot add `optimization_spec` to an existing template that was created without it. You must create a new template with `optimization_spec` included.

Send updates using `optimization_spec` as of June 18, 2026. Updates sent with `bid_spec` continue to be accepted until July 31, 2026, after which only `optimization_spec` is supported.

Other constraints follow the standard [template editing limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview):

* **Approved templates**: Up to 100 edits per hour, 2,400 per day. Content edits still follow the existing limit of 1 per day and 10 per 30 days.
* **Rejected or paused templates**: Unlimited edits

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<TEMPLATE_ID>/' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{  
  "optimization_spec": {  
    "bid_strategy": "LOWEST_COST_WITH_BID_CAP",  
    "bid_amount": <BID_AMOUNT>  
  }  
}'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<TEMPLATE_ID>`  *String* | **Required.**  ID of the WhatsApp message template. The template must have been originally created with `optimization_spec`. | `1733678867511493` |
| `<BID_AMOUNT>`  *int32* | **Required.**  Updated maximum price per 1,000 message deliveries, expressed in your WABA currency's smallest unit. | `4000` |

## Adjust max price when sending messages

The message-level max price multiplier is subject to change during the beta period.

Use the [Marketing Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/marketing-messages-api-for-whatsapp) to apply a multiplier at sending time to adjust the template-level max price for individual messages. This allows you to adjust the max price for individual messages without editing the template.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{  
  "recipient_type": "individual",  
  "messaging_product": "whatsapp",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "template",  
  "template": {  
    "name": "seasonal_sale_promo",  
    "language": {  
      "code": "en"  
    }  
  },  
  "bid_spec": {  
    "per_message_bid_multiplier": "<PER_MESSAGE_BID_MULTIPLIER>"  
  }  
}'
```

In this example, the multiplier of 1.5 increases the template's `bid_amount` by 50%. If the template's `bid_amount` is 2000, the effective max price for this message becomes 3000.

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |
| `<PER_MESSAGE_BID_MULTIPLIER>`  *Float* | **Optional.** Default: `1`  A positive multiplier applied to the template's `bid_amount`. For example, `1.5` increases the max price by 50%, `0.5` decreases it by 50%, and `1` (default) uses the template's max price amount unchanged. | `1.5` |

## Estimate reach and costs

The Reach estimation helps you understand your expected deliveries and costs at different max price levels.

### Request syntax

Use the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) to get the estimated delivery ranges and cost ranges at various max price amounts.

Meta generates estimates from historical data, and they are for informational and planning purposes only. They do not guarantee future delivery outcomes, costs, or performance. Actual results may differ due to changes in platform conditions or other variables.

The `targeting_spec` value must be serialized JSON. For example:

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/reachestimate?targeting_spec={"geo_locations":{"countries":["IN"]}​}&date_interval=<DATE_INTERVAL>' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WABA_ID>`*String* | **Required.**  WhatsApp Business Account ID. | `102290129340398` |
| `<DATE_INTERVAL>`  *Enum* | **Required.**  Lookback period for the historical data used to generate estimates. One of: `L1D` (last 1 day), `L7D` (last 7 days), `L14D` (last 14 days), `L28D` (last 28 days). | `L7D` |
| `<TARGETING_SPEC>`  *JSON* | **Required.**  Serialized JSON specifying geographic targeting. Must include `geo_locations` with a `countries` array. | `{"geo_locations":{"countries":["IN"]}​}` |

### Example response

```
{  
  "waba_currency": "USD",  
  "estimates": [  
    {  
      "bid_amount": 400,  
      "users": 1000,  
      "deliveries_lower_bound": 500,  
      "deliveries_upper_bound": 570,  
      "cost_lower_bound": 389.74,  
      "cost_upper_bound": 390.74  
    },  
    {  
      "bid_amount": 520,  
      "users": 1000,  
      "deliveries_lower_bound": 600,  
      "deliveries_upper_bound": 650,  
      "cost_lower_bound": 400.74,  
      "cost_upper_bound": 510.74  
    }  
  ]  
}
```

The response contains multiple `estimates` entries at different max price amounts, allowing you to compare expected delivery volumes and costs across price points.

### Response fields

| Field | Description |
| --- | --- |
| `waba_currency` | The currency of your WhatsApp Business account. |
| `bid_amount` | Max price per 1,000 message deliveries, in the WABA currency's smallest unit. |
| `users` | Targeted user count. Fixed at 1,000 during beta. |
| `deliveries_lower_bound` | Lower bound of the estimated delivery range for this max price amount. |
| `deliveries_upper_bound` | Upper bound of the estimated delivery range for this max price amount. |
| `cost_lower_bound` | Lower bound of the estimated average cost per 1,000 deliveries, in the WABA currency's smallest unit. |
| `cost_upper_bound` | Upper bound of the estimated average cost per 1,000 deliveries, in the WABA currency's smallest unit. |

## Metrics and billing

Messages sent with or without the max price feature use the same **Marketing Lite** product type (SKU) for billing purposes.

Marketing messages sent with max price appear in analytics with the following identifiers:

* **Pricing Analytics**[`/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=pricing_analytics`](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#pricing-analytics): `pricing_category` = `MARKETING_LITE`
* **Template Analytics**[`/<WHATSAPP_BUSINESS_ACCOUNT_ID>?fields=template_analytics`](https://developers.facebook.com/documentation/business-messaging/whatsapp/analytics#template-analytics): `product_type` = `MARKETING_MESSAGES_LITE_API`

Webhooks use lowercase `marketing_lite` for `pricing.category`, while analytics APIs use uppercase `MARKETING_LITE` for `pricing_category`. When max price is enabled, the delivered and read status webhooks also include a `cost` object with the estimated charge for the message.

### Delivered/read webhook example (with max price)

```
"pricing": {  
  "billable": true,  
  "pricing_model": "PMP",  
  "category": "marketing_lite",  
  "type": "regular",  
  "cost": {  
    "amount": 0.035,  
    "currency": "USD"  
  }  
}
```

#### Webhook cost fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | Float | Cost of the delivered or read message. Appears on `delivered` and `read` events. The unit is the currency base unit (dollar for USD, rupee for INR), consistent with the analytics API `cost` field. |
| `currency` | String | WABA-supported currency in ISO format. |

*The price reported in the delivered/read webhook may differ from the final charge on your invoice due to small variations in data processing (same as Analytics API). Your billing invoice is the source of truth for final pricing.*

### Pricing analytics response example

```
{  
  "pricing_analytics": {  
    "data": [  
      {  
        "data_points": [  
          {  
            "start": 1748761200,  
            "end": 1748847600,  
            "country": "IN",  
            "pricing_type": "REGULAR",  
            "pricing_category": "MARKETING_LITE",  
            "volume": 1,  
            "cost": 10  
          }  
        ]  
      }  
    ]  
  }  
}
```

### Template analytics response example

```
{  
  "data": [  
    {  
      "granularity": "DAILY",  
      "product_type": "MARKETING_MESSAGES_LITE_API",  
      "data_points": [  
        {  
          "template_id": "1421988012088524",  
          "start": 1718064000,  
          "end": 1718150400,  
          "sent": 1,  
          "delivered": 1,  
          "read": 1,  
          "cost": [  
            {  
              "type": "amount_spent",  
              "value": 0.01  
            },  
            {  
              "type": "cost_per_delivered",  
              "value": 0.01  
            }  
          ]  
        }  
      ]  
    }  
  ]  
}
```

For more details on metrics, see [Viewing metrics](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/view-metrics).

## Error codes

| Code | Message | Possible reasons and solutions |
| --- | --- | --- |
| 131061 | Marketing templates containing bid\_spec are not supported by the Cloud API. To use templates with bid\_spec, please use the Marketing Messages API for WhatsApp. | You are sending a template that has a max price set (`optimization_spec`, or `bid_spec` before its July 31, 2026 deprecation) to the Cloud API `/messages` endpoint. Send to the `/marketing_messages` endpoint instead. |
| 100 | You need to sign the testing legal agreement before sending out messages. | You have not signed the testing legal agreement. Please sign the agreement to gain access to this feature. |

For a full list of error codes, see [Error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).
