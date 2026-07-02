---
title: "Errors messages webhooks reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/group
---

# Errors messages webhooks reference

Updated: Jun 17, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **messages** webhook for errors messages.

## Triggers

* A system-level problem prevents a request from being processed.
* An app- or account-level problem prevents a request from being processed.

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
            "errors": [  
              {  
                "code": <ERROR_CODE>,  
                "title": "<ERROR_TITLE>",  
                "message": "<ERROR_MESSAGE>",  
                "error_data": {  
                  "details": "<ERROR_DETAILS>"  
                },  
                "href": "<ERROR_CODES_URL>"  
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
| `<ERROR_CODE>`  *Integer* | [Error code](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes). | `130429` |
| `<ERROR_CODES_URL>`  *String* | Link to [error code documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes). | `/docs/whatsapp/cloud-api/support/error-codes/` |
| `<ERROR_DETAILS>`  *String* | [Error code](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) details. | `Message failed to send because there were too many messages sent from this phone number in a short period of time` |
| `<ERROR_MESSAGE>`  *String* | [Error code](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) message. This value is the same as the `title` property value. | `Rate limit hit` |
| `<ERROR_TITLE>`  *String* | [Error code](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes) title. This value is the same as the `message` property value. | `Rate limit hit` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |

## Example

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
            "errors": [  
              {  
                "code": 130429,  
                "title": "Rate limit hit",  
                "message": "Rate limit hit",  
                "error_data": {  
                  "details": "Message failed to send because there were too many messages sent from this phone number in a short period of time"  
                },  
                "href": "/documentation/business-messaging/whatsapp/support/error-codes"  
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
