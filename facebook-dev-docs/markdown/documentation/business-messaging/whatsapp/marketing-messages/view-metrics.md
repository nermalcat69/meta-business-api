---
title: "Tracking click events"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/view-metrics
---

# Tracking click events

Updated: Jun 30, 2026

*Available using Marketing Messages API for WhatsApp (MM API for WhatsApp) and Ads Manager only*

Meta delivers a webhook payload when a WhatsApp user clicks the body or call-to-action of your marketing message. You can subscribe to this webhook to capture this data and use it to inform your campaign decisions.

## Limitations

* This feature is currently in limited availability
* Click events are only available for messages sent in the last 7 days

## Webhooks

To receive this webhook, subscribe to the `whatsapp_business_account` webhook topic. Meta delivers the webhook payload on the `messages` field, as shown below:

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "user_actions": [  
              {  
                "action_type": "marketing_messages_link_click",  
                "timestamp": "<time_of_click>",  
                "marketing_messages_link_click_data": {  
                  "click_component": "cta" | "body",  
                  "product_id": "sku_id",  
                  "click_id": "click_id",  
                  "tracking_token": "example_token"  
                }  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```

| Field Name | Field Type | Field Description |
| --- | --- | --- |
| `action_type` | **Required** String | Name of the action |
| `timestamp` | **Required** Unix timestamp | Timestamp of when the event happened |
| `click_component` | **Optional** Enum | The click action Can either be `cta` or `body` |
| `click_id` | **Optional** String | The unique identifier for the click. It is also appended to the original URL when the user visits the URL. |
| `tracking_token` | **Optional** String | Internal Meta token for processing and tracking |
| `product_id` | **Optional** String | ID of the product, if it was assigned in Ads Manager or Marketing API. |
