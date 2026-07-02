---
title: "Order messages webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/reaction
---

# Order messages webhook reference

Updated: May 21, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **messages** webhook for order messages.

## Triggers

* A WhatsApp user orders one or more products via a [catalog, single-, or multi-product message](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview).

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
                "id": "<WHATSAPP_MESSAGE_ID>",  
                "timestamp": "<WEBHOOK_TRIGGER_TIMESTAMP>",  
                "type": "order",  
                "order": {  
                  "catalog_id": "<PRODUCT_CATALOG_ID>",  
                  "text": "<ORDER_TEXT>",  
                  "product_items": [  
                    {  
                      "product_retailer_id": "<PRODUCT_ID>",  
                      "quantity": <PRODUCT_QUANTITY>,  
                      "item_price": <PRODUCT_PRICE>,  
                      "currency": "<CURRENCY_CODE>"  
                    }  
                  ]  
                }  
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

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_DISPLAY_PHONE_NUMBER>`  *String* | Business display phone number. | `15550783881` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | Business phone number ID. | `106540352242922` |
| `<CURRENCY_CODE>`  *String* | Catalog currency code. | `USD` |
| `<IDENTITY_KEY_HASH>`  *String* | Identity key hash. Only included if you have enabled the [identity change check](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) feature. | `DF2lS5v2W6x=` |
| `<ORDER_TEXT>`  *String* | Text accompanying the order. | `Love these!` |
| `<PRODUCT_CATALOG_ID>`  *String* | [Product catalog ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview). | `194836987003835` |
| `<PRODUCT_ID>`  *String* | [Product ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview). | `di9ozbzfi4` |
| `<PRODUCT_PRICE>`  *Integer* | Individual product price. | `7.99` |
| `<PRODUCT_QUANTITY>`  *Integer* | Product quantity. | `2` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *String* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp message ID. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user ID. Note that a WhatsApp user’s ID and phone number may not always match. | `16505551234` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user phone number. This is the same value returned by the API as the `input` value when sending a message to a WhatsApp user. Note that a WhatsApp user’s phone number and ID may not always match. | `16505551234` |
| `<WHATSAPP_USER_PROFILE_NAME>`  *String* | WhatsApp user’s name as it appears in their profile in the WhatsApp client. | `Sheena Nelson` |

## Example

This example webhook describes an order placed by a WhatsApp user for 3 products via an interactive catalog message.

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
                  "name": "Sheena Nelson"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQUFERjg0NDEzNDdFODU3MUMxMAA=",  
                "timestamp": "1750096325",  
                "type": "order",  
                "order": {  
                  "catalog_id": "194836987003835",  
                  "text": "Love these!",  
                  "product_items": [  
                    {  
                      "product_retailer_id": "di9ozbzfi4",  
                      "quantity": 2,  
                      "item_price": 30,  
                      "currency": "USD"  
                    },  
                    {  
                      "product_retailer_id": "nqryix03ez",  
                      "quantity": 1,  
                      "item_price": 25,  
                      "currency": "USD"  
                    }  
                  ]  
                }  
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
