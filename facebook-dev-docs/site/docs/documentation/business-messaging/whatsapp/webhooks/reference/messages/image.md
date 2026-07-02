---
title: "Group messages webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/image
---

# Group messages webhook reference

Updated: Jun 17, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **messages** webhook for messages that are sent to a group, or received from a group.

## Triggers

* A WhatsApp user or a business sends a message to a group.
* A WhatsApp user or a business receives a message within a group.

## Syntax

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>",  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "<WHATSAPP_USER_PROFILE_NAME>"  
                },  
                "wa_id": "<WHATSAPP_USER_ID>",  
                "identity_key_hash": "<IDENTITY_KEY_HASH>" <!-- only included if identity change check enabled -->  
              }  
            ],  
            "messages": [  
              {  
                "from": "<WHATSAPP_USER_PHONE_NUMBER>",  
                "group_id": "<GROUP_ID>",  
                "id": "<WHATSAPP_MESSAGE_ID>",  
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",  
                "text": {  
                  "body": "<MESSAGE_TEXT_BODY>"  
                },  
                "type": "<MESSAGE_TYPE>"  
              }  
            ],  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | Business phone number ID. | `106540352242922` |
| `<GROUP_ID>`  *String* | The string identifier of a group made using the Groups API.  This field appears when a WhatsApp user or business sends, receives, or reads a message in a group.  [Learn more about the Groups API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups) | `"Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD"` |
| `<IDENTITY_KEY_HASH>`  *String* | Identity key hash. Only included if you have enabled the [identity change check](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) feature. | `DF2lS5v2W6x=` |
| `<MESSAGE_TEXT_BODY>`  *String* | Text body of the message. | `What do you all think about this?` |
| `<MESSAGE_TYPE>`  *String* | The type of message being sent. Will change depending on the message sent to the group.  Currently, the Groups API supports:   * Text * Media * Text-based templates * Media-based templates | `text` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *String* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user phone number. This is the same value returned by the API as the `input` value when sending a message to a WhatsApp user. Note that a WhatsApp user’s phone number and ID may not always match. | `+16505551234` |
| `<WHATSAPP_USER_PROFILE_NAME>`  *String* | WhatsApp user’s name as it appears in their profile in the WhatsApp client. | `Sheena Nelson` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user ID. Note that a WhatsApp user’s ID and phone number may not always match. | `16505551234` |

## Example

The following example shows a group messages webhook payload.

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "102290129340398",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Tiago Mingo"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "group_id": "HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA",  
                "id": "wamid.HASDI128HJOPUERIH82ahdasd09ASDHi5>",  
                "timestamp": "1744344496",  
                "text": {  
                  "body": "What does everyone think about this?"  
                },  
                "type": "text"  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```
```
