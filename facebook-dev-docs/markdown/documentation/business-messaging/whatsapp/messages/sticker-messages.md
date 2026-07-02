---
title: "Reaction messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/sticker-messages
---

# Reaction messages

Updated: May 21, 2026

Reaction messages are emoji-reactions that you can apply to a WhatsApp user message you received.

![WhatsApp chat showing a user message 'Perfect, thank you!' with a grinning face emoji reaction applied below it](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/440791676_2613895758778914_1777908069161322734_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KFXbacZ2sTgQ7kNvwEt9EbZ&_nc_oc=AdpHh2Agi-xVy-BCCHd6J7zwKKRnEARrCZhbGRMC9Rx57lMuoblweMPXH0N1QCKSpUZXieH6qwlm_rcrCQxyjSDs&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=So0Zj5JxJK1FpuP-jxZs4A&_nc_ss=7b2a8&oh=00_AQAg5qc1oRE6fjQaKXPBmty0TI7K7vWgIg1R14RqZCCCXg&oe=6A605EF1)

## Limitations

When you send a reaction message, WhatsApp triggers only a [sent message webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) (`status` set to `sent`); it does not trigger delivered or read message webhooks.

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to apply an emoji reaction on a message you have received from a WhatsApp user.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "reaction",  
  "reaction": {  
    "message_id": "<WHATSAPP_MESSAGE_ID>",  
    "emoji": "<EMOJI>"  
  }  
}'
```

## Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<EMOJI>`  *String* | **Required.**  Unicode escape sequence of the emoji, or the emoji itself, to apply to the user message. | Unicode escape sequence example:  `\uD83D\uDE00`  Emoji example:  😀 |
| `<WHATSAPP_MESSAGE_ID>`  *String* | **Required.**  WhatsApp message ID of message you want to apply the emoji to.  If the message you are reacting to is more than 30 days old, doesn't correspond to any message in the chat thread, has been deleted, or is itself a reaction message, the reaction message will not be delivered and you will receive a **messages** webhook with error code `131009`. | `wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQUZCMTY0MDc2MUYwNzBDNTY5MAA=` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Example request

Example request to apply the grinning face emoji (😀) to a previously received user message.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "reaction",
  "reaction": {
    "message_id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQUZCMTY0MDc2MUYwNzBDNTY5MAA=",
    "emoji": "\uD83D\uDE00"
  }
}'
```

## Example response

```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "+16505551234",  
      "wa_id": "16505551234"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```
