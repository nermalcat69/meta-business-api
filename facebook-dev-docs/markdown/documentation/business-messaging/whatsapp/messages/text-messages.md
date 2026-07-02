---
title: "Sticker messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/text-messages
---

# Sticker messages

Updated: Jun 24, 2026

Sticker messages display animated or static sticker images in a WhatsApp message.

![WhatsApp message showing an animated sticker delivered to a user](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/441292863_1203428507688350_9164958282076997505_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=aQFhwXSX8YkQ7kNvwF4sPX7&_nc_oc=AdrPU4Dvz-2fiMzamSYSO22G83xTCb7BjN0vvQm7eb00uO9rHDTbVOOjb0l8Ya1JMW9ueBWvLVS15CWQZBJnelUK&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=q6jbE-4tUvfYwd0Ges36rw&_nc_ss=7b2a8&oh=00_AQBOlgq-BFErJYeiu31QAK25cvcbtkSjjRahaPHxRYQL6A&oe=6A60653C)

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send a sticker message to a WhatsApp user.

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
  "type": "sticker",  
  "sticker": {  
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->  
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->  
  }  
}'
```
```

### Post body parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<MEDIA_ID>`  *String* | **Required if using uploaded media, otherwise omit.**  ID of the [uploaded media asset](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media). | `1013859600285441` |
| `<MEDIA_URL>`  *String* | **Required if using hosted media, otherwise omit.**  URL of the media asset hosted on your public server. For better performance, we recommend using `id` and an [uploaded media asset ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) instead. | `https://www.luckyshrub.com/assets/animated-smiling-plant.webp` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Supported sticker formats

WhatsApp supports the following sticker file formats and size limits for sticker messages.

| Sticker Type | Extension | MIME Type | Max Size |
| --- | --- | --- | --- |
| Animated sticker | .webp | image/webp | 500 KB |
| Static sticker | .webp | image/webp | 100 KB |

## Example request

Example request to send an animated sticker image to a WhatsApp user.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "sticker",
  "sticker": {
    "id" : "798882015472548"
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
      "input": "+16505551234",  
      "wa_id": "16505551234"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```
```

## Error handling

A request fails if the `<MEDIA_ID>` is invalid or has expired, if the sticker isn’t a supported WebP type, or if the file exceeds the maximum size listed in [Supported sticker formats](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/text-messages#supported-sticker-formats). When a request fails, the API returns an error response instead of a message ID.

For the full list of error codes and recommended handling, see [WhatsApp Cloud API error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).
