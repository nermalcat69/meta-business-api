---
title: "Get started"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/features
---

# Get started

Updated: Jun 30, 2026

Learn how to send a template message with the Marketing Messages API for WhatsApp (MM API for WhatsApp).

## Requirements

* You have an active WhatsApp Business account and are in a [country eligible for MM API for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/get-started#geographic-availability-of-features).
* You have an approved [marketing template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates).
* You are subscribed to the [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages) webhook.

## Step 1: Accept Terms of Service

* Navigate to the [**App Dashboard**](https://developers.facebook.com/apps) > **WhatsApp** > **Quickstart** panel.
* Locate the "**Improve ROI with marketing messages with optimizations**" module and click the "**Get started**" button.
* Click on "**Continue to integration guide**" and accept the Terms of Service.

## Step 2: Send a marketing template message

Use the `marketing_messages` endpoint to send a template message to yourself.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/marketing_messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d  
'{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "template",  
  "template": {  
      "name": "<TEMPLATE_NAME>",  
      "language": {  
          "code": "<LANGUAGE_AND_LOCALE_CODE>"  
      },  
      "components": [  
          {  
              "type": "body",  
              "parameters": [  
                  {  
                      "type": "text",  
                      "text": "text-string"  
                  }  
              ]  
          }  
      ]  
  }  
}'
```

## Step 3: Verify message was sent through the `status` webhook

MM API for WhatsApp triggers [status messages webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) for events such as sent, delivered, and read. When a message is sent via MM API for WhatsApp, the webhook payload will have `category` and `conversation.origin.type` set to `marketing_lite`.

```
{  
  "conversation": {  
    "id": "<CONVERSATION_ID>",  
    "origin": {  
      "type": "marketing_lite"  
    }  
  },  
  "pricing": {  
    "billable": true,  
    "pricing_model": "PMP",  
    "category": "marketing_lite"  
  }  
}
```

## Geographic availability of features

Some advanced features and reporting capabilities of MM API for WhatsApp are available only in particular geographies due to Meta policy and/or local regulation.

### European Economic Area, United Kingdom, Japan, South Korea, Nigeria, South Africa

* Messages sent from a business phone number in these countries, or to a WhatsApp user in these countries, will not receive delivery optimizations. **Note** that [per-user marketing message template limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits) are also not active in these countries, so a lack of delivery optimizations will not have any effect on message delivery.
* Messages sent from a business phone number in these countries, or to a WhatsApp user in these countries, will not have click and conversion reporting metrics available.
* For businesses in these countries, metrics are not available on Ads Manager UI or Insights API. As with Cloud API, metrics will be available via Business Management API and WhatsApp Manager UI 'conversation' metrics.

### United States

* Starting April 1, 2025, Meta does not deliver marketing messages sent to WhatsApp users in the United States (error code 131049). The United States marketing message restriction is not specific to MM API for WhatsApp - it is in place across all Business Messaging APIs (including Cloud API, [see per-user marketing message template limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits)).
* Business phone numbers in the US can still use MM API for WhatsApp to message users outside of the United States.

### Cuba, Iran, North Korea, Syria, Venezuela, and three sanctioned regions in the Ukraine (Crimea, Donetsk, Luhansk)

* Businesses in these regions are not eligible to onboard, and messages cannot be sent to a WhatsApp user in these regions. The sanctioned-region restriction is not specific to MM API for WhatsApp - it is in place across all Business Messaging APIs (including Cloud API, [see country restrictions](https://developers.facebook.com/documentation/business-messaging/whatsapp/support#country-restrictions)).

### Russia, Belarus

Starting June 20, 2025, businesses in Russia and Belarus will be able to use MM API for WhatsApp with the following feature exceptions:

* Messages sent by a business with a Meta business profile in Russia or Belarus, or using a payment method with a Russia or Belarus address, will not receive delivery optimizations.
* Messages sent from a business phone number in these countries, or to a WhatsApp user in these countries, will not have click and conversion reporting metrics available. For businesses in these countries, metrics are not available on Ads Manager UI or Insights API. As with Cloud API, metrics will continue to be available via Business Management API and WhatsApp Manager UI conversation metrics.
* Messages sent to a WhatsApp user in these countries will not use optimization features such as max pricing.
* All other features of MM API for WhatsApp continue to be available.

## Learn more

* Learn about additional [marketing message formats](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates)
* [Onboard WhatsApp Business app users](https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboard-business-customers#onboard-whatsapp-business-app-users) — businesses already using the WhatsApp Business app can also be onboarded to use MM API for WhatsApp
