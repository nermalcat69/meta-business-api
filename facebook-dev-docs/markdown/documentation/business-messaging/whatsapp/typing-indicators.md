---
title: "Contextual replies"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/typing-indicators
---

# Contextual replies

Updated: Jun 28, 2026

Contextual replies are a special way of responding to a WhatsApp user message. Sending a message as a contextual reply makes it clearer to the user which message you are replying to by quoting the previous message in a contextual bubble:

![Annotated WhatsApp chat showing a contextual reply, labeling the previous message, contextual bubble, and text message reply](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/441349069_1363509007609494_6528221959622289637_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sBFrch8NProQ7kNvwGkW5jo&_nc_oc=Adq-AxReFXhgh5G7R5L3jMrk9ee2OwAWjj-1ouIapGcQCI-0FD7MpThUoD3DeyOzlfPeLBjordA8QN9kTWOLNHzH&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=5rm_cEPVidJX3qNAV4NPVg&_nc_ss=7b2a8&oh=00_AQCxmwyFikR7iIav8PcBLunNKLT9NPHebO-X5z2l35DnnQ&oe=6A6047EB)

## Limitations

* You cannot send a [reaction message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/reaction-messages) as a contextual reply.

The contextual bubble does not appear at the top of the delivered message if:

* The previous message has been deleted or moved to long term storage (messages are typically moved to long term storage after 30 days, unless you have enabled [local storage](https://developers.facebook.com/documentation/business-messaging/whatsapp/local-storage)).
* You reply with an [audio](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/audio-messages), [image](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/image-messages), or [video message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/video-messages) and the WhatsApp user is running KaiOS.
* You use the WhatsApp client to reply with a [push-to-talk⁠](https://faq.whatsapp.com/657157755756612/?cms_platform=web&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR44c3RXf1-nO0s9KlwHj43-0ETkDwBa_NNHyBsO0hDgP0A3qqR4WoeUAdFTVQ_aem_28Muvjl9lU6sjjRIbtyCTw) message and the WhatsApp user is running KaiOS.
* You reply with a [template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview).

## Request syntax

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

### Post body

```
```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "context": {  
    "message_id": "WAMID_TO_REPLY_TO"  
  },  
  
  /* Message type and type contents goes here */  
  
}
```
```

### Post body parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<WAMID_TO_REPLY_TO>`  *String* | **Required.**  WhatsApp message ID (wamid) of the previous message you want to reply to. | `wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTdCNTg5RjY1MEMyRjlGMjRGNgA=` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Example request

Example of a text message sent as a reply to a previous message.

```
```
curl 'https://graph.facebook.com/v19.0/106540352242922/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer EAAJB...' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "+16505551234",  
  "context": {  
    "message_id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTdCNTg5RjY1MEMyRjlGMjRGNgA="  
  },  
  "type": "text",  
  "text": {  
    "body": "You're welcome, Pablo!"  
  }  
}'
```
```
