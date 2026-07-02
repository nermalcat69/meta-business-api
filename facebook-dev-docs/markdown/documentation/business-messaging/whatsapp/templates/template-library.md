---
title: "Template Comparison"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library
---

# Template Comparison

Updated: Jun 24, 2026

You can compare two templates by examining how often each one is sent, which one has the lower ratio of blocks to sends, and each template's top reason for being blocked.

## Requirements

* A [User](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#user-access-tokens) or [System User](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) access token.
* The [whatsapp\_business\_management](https://developers.facebook.com/docs/permissions/reference/whatsapp_business_management) permission.

## Limitations

* Only two templates can be compared at a time.
* Both templates must be in the same WhatsApp Business account.
* Templates must have been sent at least 1,000 times in the query's specified timeframe.
* Lookback windows are limited to 7, 30, 60, and 90 days from the time of the request.

## Comparing templates

Use the [Template Comparison API](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm/compare) to target one template and compare it with another.

### Request syntax

```
GET /<WHATSAPP_MESSAGE_TEMPLATE_ID>/compare  
  ?template_ids=[<TEMPLATE_IDS>]  
  &start=<START>  
  &end=<END>
```

### Query parameters

| Placeholder | Description |
| --- | --- |
| `<WHATSAPP_MESSAGE_TEMPLATE_ID>` | ID of the WhatsApp Message Template to target. |
| `<TEMPLATE_IDS>` | ID of the WhatsApp Message Template to compare the target to. |
| `<START>` | Unix timestamp indicating start of timeframe. See [Timeframes](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library#timeframes). |
| `<END>` | Unix timestamp indicating end of timeframe. See [Timeframes](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-library#timeframes). |

### Timeframes

Timeframes (lookback windows) are limited to 7, 30, 60, and 90 days from the time of the request. To define a timeframe, set your end date to the current time as a Unix timestamp, then subtract the number of days for your desired timeframe, in seconds, from that value:

Each value below is the number of seconds to subtract from the current Unix end timestamp:

* Subtract `604800` for a 7-day window.
* Subtract `2592000` for a 30-day window.
* Subtract `5184000` for a 60-day window.
* Subtract `7776000` for a 90-day window.

### Response

Upon success, the API returns a list of [WhatsApp Business Template Comparison](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-hsm-comparison) nodes describing each template's block rate, number of times sent, and top reason for being blocked.

```
{  
  "data": [  
    {  
      "metric": "BLOCK_RATE",  
      "type": "RELATIVE",  
      "order_by_relative_metric": [<ORDER_BY_RELATIVE_METRIC>]  
    },  
    {  
      "metric": "MESSAGE_SENDS",  
      "type": "NUMBER_VALUES",  
      "number_values": [<NUMBER_VALUES>]  
    },  
    {  
      "metric": "TOP_BLOCK_REASON",  
      "type": "STRING_VALUES",  
      "string_values": [<STRING_VALUES>]  
    }  
  ]  
}
```

### Response contents

| Placeholder | Description |
| --- | --- |
| `<ORDER_BY_RELATIVE_METRIC>` | Array of template ID strings, in increasing order of block rate (ratio of blocks to sends). |
| `<NUMBER_VALUES>` | Array of message send number value objects. Objects have the following properties:     * `key` — *String.* WhatsApp Message Template ID. * `value` — *Integer.* Number of times the template was sent. |
| `<STRING_VALUES>` | Array of top block reason string value objects. Objects have the following properties:     * `key` — *String.* WhatsApp Message Template ID. * `value` — *String.* Top block reason.   Block reasons can be:     * `NO_LONGER_NEEDED` * `NO_REASON` * `NO_REASON_GIVEN` * `NO_SIGN_UP` * `OFFENSIVE_MESSAGES` * `OTHER` * `OTP_DID_NOT_REQUEST` * `SPAM` * `UNKNOWN_BLOCK_REASON`   See the [View metrics for your WhatsApp Business message template⁠](https://www.facebook.com/business/help/511126334359303/) help center topic for descriptions of these reasons. |

### Example request

```
curl -X GET 'https://graph.facebook.com/v25.0/5289179717853347/compare?template_ids=[1533406637136032]&start=1674844791182&end=1674845395982' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
{  
  "data": [  
    {  
      "metric": "BLOCK_RATE",  
      "type": "RELATIVE",  
      "order_by_relative_metric": [  
        "1533406637136032",  
        "5289179717853347"  
      ]  
    },  
    {  
      "metric": "MESSAGE_SENDS",  
      "type": "NUMBER_VALUES",  
      "number_values": [  
        {  
          "key": "5289179717853347",  
          "value": 1273  
        },  
        {  
          "key": "1533406637136032",  
          "value": 1042  
        }  
      ]  
    },  
    {  
      "metric": "TOP_BLOCK_REASON",  
      "type": "STRING_VALUES",  
      "string_values": [  
        {  
          "key": "5289179717853347",  
          "value": "UNKNOWN_BLOCK_REASON"  
        },  
        {  
          "key": "1533406637136032",  
          "value": "UNKNOWN_BLOCK_REASON"  
        }  
      ]  
    }  
  ]  
}
```
