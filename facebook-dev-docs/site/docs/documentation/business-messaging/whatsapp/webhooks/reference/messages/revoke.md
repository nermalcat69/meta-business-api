---
title: "Reaction messages webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/revoke
---

# Reaction messages webhook reference

Updated: May 21, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **messages** webhook for messages containing a reaction to a previous message sent by a business.

**Note:** When an end user removes a reaction emoji, a webhook without the "emoji" field will be sent as shown in the sample webhooks below.

## Triggers

* A WhatsApp user reacts to a previous message sent by a business within the last 30 days.
* A WhatsApp user removes a previously sent reaction to a previous message sent by a business within the last 30 days.

## Syntax

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
            "contacts": [  
              {  
                "profile": {  
                  "name": "<WHATSAPP_USER_PROFILE_NAME>"  
                },  
                "wa_id": "<WHATSAPP_USER_ID>",  
                "identity_key_hash": "<IDENTITY_KEY_HASH>" <!-- only included if identity change check enabled -->  
              }  
            ],  
            "messages": [  
              {  
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",  
                "id": "<WHATSAPP_MESSAGE_ID>",  
                "timestamp": "<REACTION_TIMESTAMP>",  
                "type": "reaction",  
                "reaction": {  
                  "message_id": "<CONTEXTUAL_WHATSAPP_MESSAGE_ID>",  
                  "emoji": "<EMOJI_UNICODE>" <!-- omitted if user removes reaction -->  
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

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | Business phone number ID. | `106540352242922` |
| `<CONTEXTUAL_WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID of the message the WhatsApp user reacted to. | `wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=` |
| `<EMOJI_UNICODE>`  *String* | Unicode of emoji sent by the WhatsApp user as a reaction.  If the user removes their initial reaction, another webhook is triggered, but the `emoji` property will be omitted from the payload. | `U+1F44D` |
| `<IDENTITY_KEY_HASH>`  *String* | Identity key hash. Only included if you have enabled the [identity change check](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) feature. | `DF2lS5v2W6x=` |
| `<REACTION_TIMESTAMP>`  *String* | Unix timestamp indicating when the WhatsApp user sent the reaction. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user ID. Note that a WhatsApp user's ID and phone number may not always match. | `16505551234` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user phone number. This is the same value returned by the API as the `input` value when sending a message to a WhatsApp user. Note that a WhatsApp user's phone number and ID may not always match. | `+16505551234` |
| `<WHATSAPP_USER_PROFILE_NAME>`  *String* | WhatsApp user's name as it appears in their profile in the WhatsApp client. | `Sheena Nelson` |

## Sample Webhooks

***Receiving a reaction***

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Sheena Nelson"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",  
                "timestamp": "1749419544",  
                "type": "reaction",  
                "reaction": {  
                  "message_id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA=",  
                  "emoji": "👍"  
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

***Reaction removed by end user***

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Sheena Nelson"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",  
                "timestamp": "1749419544",  
                "type": "reaction",  
                "reaction": {  
                  "message_id": "wamid.HBgLMTQxMjU1NTA4MjkVAgASGBQzQUNCNjk5RDUwNUZGMUZEM0VBRAA="  
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
