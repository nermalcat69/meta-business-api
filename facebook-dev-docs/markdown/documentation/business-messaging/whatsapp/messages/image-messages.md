---
title: "Image messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/image-messages
---

# Image messages

Updated: Jun 24, 2026

Image messages are messages that display a single image and an optional caption.

![WhatsApp image message showing a single image with an optional caption](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/440788911_1344094656981591_356280964045551612_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Nku5RrrilzQQ7kNvwH0adZC&_nc_oc=AdrO6T9bpbfxEGLuba8T_ssL_-Bk33m504uLGlM0FzLXvaQE3VSUocuzVuEXr2kMt8pkXFEzNMJMSsyw_00SCwa2&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=voALXFGF4zvvIkqZOzV2WQ&_nc_ss=7b2a8&oh=00_AQDpv69leMjxten3REatAJPugzBIv3j-4GByjF00kpqiEg&oe=6A6073C9)

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an image message to a WhatsApp user.

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
  "type": "image",  
  "image": {  
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->  
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->  
    "caption": "<MEDIA_CAPTION_TEXT>"  
  }  
}'
```
```

## Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<MEDIA_CAPTION_TEXT>`  *String* | **Optional.**  Media asset caption text.  Maximum 1024 characters. | `The best succulent ever?` |
| `<MEDIA_ID>`  *String* | **Required if using uploaded media, otherwise omit.**  ID of the [uploaded media asset](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media). | `1013859600285441` |
| `<MEDIA_URL>`  *String* | **Required if using hosted media, otherwise omit.**  URL of the media asset hosted on your public server. For better performance, we recommend using `id` and an [uploaded media asset ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) instead. | `https://www.luckyshrub.com/assets/succulents/aloe.png` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Supported image formats

Images must be 8-bit, RGB or RGBA.

| Image Type | Extension | MIME Type | Max Size |
| --- | --- | --- | --- |
| JPEG | .jpeg | image/jpeg | 5 MB |
| PNG | .png | image/png | 5 MB |

## Example request

Example request to send an image message with a caption to a WhatsApp user.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "image",
  "image": {
    "id" : "1479537139650973",
    "caption": "The best succulent ever?"
  }
}'
```

## Example response

Example response after successfully sending an image message.

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

A request fails if the `<MEDIA_ID>` is invalid or has expired, if the image format isn’t supported, or if the image exceeds the maximum size listed in [Supported image formats](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/image-messages#supported-image-formats). When a request fails, the API returns an error response instead of a message ID.

For the full list of error codes and recommended handling, see [WhatsApp Cloud API error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).
