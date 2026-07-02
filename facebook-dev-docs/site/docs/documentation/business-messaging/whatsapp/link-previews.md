---
title: "Typing indicators"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews
---

# Typing indicators

Updated: Jun 17, 2026

When you get a **messages** webhook indicating a [received message](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages), you can use the `message.id` value to mark the message as read and display a typing indicator so the WhatsApp user knows you are preparing a response. This is good practice if it will take you a few seconds to respond.

![WhatsApp chat showing a typing indicator while the business prepares a response](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/488360772_654124507349470_2240843625651955811_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JB2PPACQmdkQ7kNvwHsyxTE&_nc_oc=Adr8o-3cYSy-fJKoVipi0G1OawE9Dgr9szAmwY54Wen57tazuNHwp3WtFTy2etP5nw9dHbDK8KAMJ6atJfSiWYV2&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=YBzRCpDBd8hwdQZbw1FqOg&_nc_ss=7b2a8&oh=00_AQDsm6CMNMhx9F-WndAszFbRn6culRxlo3Tj68fjb1dtSw&oe=6A606A1C)

The typing indicator will be dismissed once you respond, or after 25 seconds, whichever comes first. To prevent a poor user experience, only display a typing indicator if you are going to respond.

## Request syntax

```
curl -X POST \  
'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages'  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "status": "read",  
  "message_id": "<WHATSAPP_MESSAGE_ID>",  
  "typing_indicator": {  
    "type": "text"  
  }  
}'
```

## Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | **Required.**  WhatsApp message ID. This ID is assigned to the `messages.id` property in **received message** [messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages) webhooks. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA` |

## Response

Upon success:

```
{  
  "success": true  
}
```

## Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "status": "read",
  "message_id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJDQjZCMzlEQUE4OTJBMTE4RTUA",
  "typing_indicator": {
    "type": "text"
  }
}'
```

## Example response

Upon success:

```
{  
  "success": true  
}
```
