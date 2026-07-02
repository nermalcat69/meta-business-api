---
title: "Unsupported messages webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/video
---

# Unsupported messages webhook reference

Updated: Jun 26, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **messages** webhook for unsupported messages.

## Triggers

* A WhatsApp user sends a message type not supported by Cloud API.
* You use the API to send a message to a number already in use with the API. When the number is already in use, Cloud API sends the webhook to the owner of the recipient number.
* A WhatsApp user messages a business [onboarded with a WhatsApp Business app phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users) for the first time. This is especially common when users tap one of the business's [ads that click to WhatsApp⁠](https://business.whatsapp.com/products/create-ads-that-click-to-whatsapp?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4skP3VPmjGpBYDgSN2x_dQdBAQ3Ju2uxmtaUYHQiWGhH9xXI84lSAPId-QNw_aem_UjwPupq5p4L6Ore_-px4qg) and immediately send a message.

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
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",  
                "errors": [  
                  {  
                    "code": <ERROR_CODE>,  
                    "title": "<ERROR_TITLE>",  
                    "message": "<ERROR_MESSAGE>",  
                    "error_data": {  
                      "details": "<ERROR_DETAILS>"  
                    }  
                  }  
                ],  
                "type": "unsupported",  
                "unsupported": {  
                  "type": "<UNSUPPORTED_TYPE>"  
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
| `<IDENTITY_KEY_HASH>`  *String* | Identity key hash. Only included if you have enabled the [identity change check](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) feature. | `DF2lS5v2W6x=` |
| `<ERROR_CODE>` | The error code. Possible values:   * `131051` — Cloud API does not support the message type. * `131060` — The message is currently unavailable. This typically occurs when a WhatsApp user messages a business [onboarded with a WhatsApp Business app phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users), for the first time. | `131051` |
| `<ERROR_DETAILS>` | A human-readable description of the error. | `Message type is currently not supported.` |
| `<ERROR_MESSAGE>` | A human-readable error message. Same as `ERROR_TITLE`. | `Message type unknown` |
| `<ERROR_TITLE>` | A human-readable error title. Possible values:   * `Message type unknown` — Corresponds to error code `131051`. * `This message is currently unavailable.` — Corresponds to error code `131060`. | `Message type unknown` |
| `<UNSUPPORTED_TYPE>` | Contains the type of message that is unsupported.  Values can be:   * `button` * `edit` * `errors` * `gif` * `group_invite` * `hsm` * `image` * `interactive` * `keep_in_chat` * `link_preview` * `list` * `location` * `media_placeholder` * `order` * `pin` * `poll_creation` * `poll_update` * `product` * `reaction` | `poll_update` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *String* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user ID. Note that a WhatsApp user's ID and phone number may not always match. | `16505551234` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user phone number. This is the same value returned by the API as the `input` value when sending a message to a WhatsApp user. Note that a WhatsApp user's phone number and ID may not always match. | `+16505551234` |
| `<WHATSAPP_USER_PROFILE_NAME>`  *String* | WhatsApp user's name as it appears in their profile in the WhatsApp client. | `Sheena Nelson` |

## Example

The following example shows a webhook triggered by a WhatsApp user sending an unsupported message type (error code `131051`). For unavailable messages (error code `131060`), the payload structure is the same but the `errors` object values differ — see the [`ERROR_CODE`](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/video#parameters) parameter for details.

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
                "timestamp": "1750090702",  
                "errors": [  
                  {  
                    "code": 131051,  
                    "title": "Message type unknown",  
                    "message": "Message type unknown",  
                    "error_data": {  
                      "details": "Message type is currently not supported."  
                    }  
                  }  
                ],  
                "type": "unsupported",  
                "unsupported": {  
                  "type": "edit"  
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
