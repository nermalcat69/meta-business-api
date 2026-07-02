---
title: "Tap target title URL override"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-quality
---

# Tap target title URL override

Updated: May 21, 2026

This document explains how to send approved message templates using the `tap_target_configuration` component within a template message. Tap target override enables image-based, text-based, and header-less message templates to function as interactive Call-to-Action URL buttons. These buttons display a custom title and open the destination linked to the first URL button.

WhatsApp Business Accounts (WABAs) must be fully verified and consistently maintain high-quality standards to ensure compliance and access to this component.

![WhatsApp template message with a plant image header and an Offer Details tap target button, annotated tap target configuration and button type](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/520579996_716872931262110_1406523760843053750_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=spTNnXqjNgYQ7kNvwEpdFl3&_nc_oc=AdphslpnifFeDmlbZ4s9OBdgddGvsLxnkRAzCJ9eTKSVGgUFnUAi-3KKM62tBZUwJTJy5_kfFRuu2JIGuMq-Pcpo&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=HkfddKmGud4ARgAox2tfYA&_nc_ss=7b2a8&oh=00_AQCRrKnjwfk5lYw3TifAz50VTuDXzGl7KvzwuqNTrydrTg&oe=6A6056F5)

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send a text message template to a WhatsApp user.

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "template",  
  "template": {  
    "name": "<TEMPLATE_NAME>",  
    "language": {  
      "code": "<LANGUAGE_AND_LOCALE_CODE>"  
    },  
    "components": [  
      {  
        "type": "tap_target_configuration",  
        "parameters": [  
          {  
            "type": "tap_target_configuration",  
            "tap_target_configuration": [  
              {  
                "url": "<URL>",  
                "title": "<TITLE>"  
              }  
            ]  
          }  
        ]  
      },  
          <!-- Add additional components -->  
    ]  
  }  
}
```
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<LANGUAGE_AND_LOCAL_CODE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Name of template. | `august_promotion` |
| `<TITLE>`  *String* | **Required.**  URL Title. | `Offer Details!` |
| `<URL>`  *String* | **Required.**  URL. | `https://www.luckyshrubs.com` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Example request

Example request to send a template message with the `tap_target_configuration` type.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+1233214532",
  "type": "template",
  "template": {
    "name": "august_promotion",
    "language": {
      "code": "en"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "image",
            "image": {
              "link": "https://www.luckyshrubs.com"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Hello Andy..."
          }
        ]
      },
      {
        "type": "tap_target_configuration",
        "parameters": [
          {
            "type": "tap_target_configuration",
            "tap_target_configuration": [
              {
                "url": "https://www.luckyshrubs.com/",
                "title": "Offer Details"
              }
            ]
          }
        ]
      }
    ]
  }
}'
```

## Example response

```
```
{  
   "messaging_product": "whatsapp",  
   "contacts": [  
       {  
           "input": "+1233214532",  
           "wa_id": "1233214532"  
       }  
   ],  
   "messages": [  
       {  
           "id": "wamid.HBgLMTMyMzI4NjU2NzgVAgARGBJBQzRBRDBEMDEwQzVBM0M0QkIA",  
           "message_status": "accepted"  
       }  
   ]  
}
```
```
