---
title: "Catalog templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/multi-product-messages
---

# Catalog templates

Updated: Jun 18, 2026

This document explains how to create catalog templates. See [Sell Products and Services](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview) to learn more about product catalogs and ways to showcase your products.

Catalog templates are marketing templates that allow you to showcase your product catalog entirely within WhatsApp. Catalog templates display a product thumbnail header image of your choice and custom body text, along with a fixed text header and fixed text sub-header.

![WhatsApp catalog template message annotated with its product thumbnail header, body text, and View catalog button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/354047426_125269187252102_7173148343631613735_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=mCfOEiHr9p8Q7kNvwHudc19&_nc_oc=Adq3Fvn84MGfNOXB3OxnGyHW-a1xiVDzi_foTSDI3mpczMdbIr21KR4O0mQNWGEDaYQFyuJEq-3mBM9s2ZHYV5ma&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=Ekw2CVWdEBJSWdtj4ZaTYg&_nc_ss=7b2a8&oh=00_AQBdxbnxQQWWipMK5i-pyKV0PpNIXx9wLI1rCH4ctzAEKg&oe=6A6069E6)

When a customer taps the **View catalog** button in a catalog template message, your product catalog appears within WhatsApp.

![Product catalog open within WhatsApp listing grocery items with prices and a View cart button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/353808079_9331603410246288_3629219693038191737_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=o5BiBxEaBK8Q7kNvwHaL_lf&_nc_oc=AdqVh42k3eVf2g_kWYHCeCyd-7jJvrJaq-SDtgposmYhqp496Zmgh6pADrM5SG8RvqfOqVVDi11Am3aO0MOyCq-B&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=Ekw2CVWdEBJSWdtj4ZaTYg&_nc_ss=7b2a8&oh=00_AQC-MggCXStd4JKGD2Ssnr3hg_T98v2__osyEJ1MDZZKGw&oe=6A606FA8)

## Creating catalog templates

### Requirements

You must have [inventory uploaded to Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/upload-inventory) in an e-commerce catalog [connected to your WhatsApp Business account⁠](https://www.facebook.com/business/help/158662536425974).

### Request syntax

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create a catalog template. Once your template is approved, you can use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send it in a template message.

```
```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \  
  -H "Authorization: Bearer <ACCESS_TOKEN>" \  
  -H "Content-Type: application/json" \  
  -d '  
{  
    "name": "<NAME>",  
    "language": "<LANGUAGE>",  
    "category": "MARKETING",  
    "components": [  
      {  
        "type": "BODY",  
        "text": "<BODY_TEXT>",  
        "example": {  
          "body_text": [  
            [  
              "<EXAMPLE_BODY_TEXT>"  
            ]  
          ]  
        }  
      },  
      {  
        "type": "FOOTER",  
        "text": "<FOOTER_TEXT>"  
      },  
      {  
        "type": "BUTTONS",  
        "buttons": [  
          {  
            "type": "CATALOG",  
            "text": "View catalog"  
          }  
        ]  
      }  
    ]  
  }'
```
```

### Request parameters

| Placeholder | Description | Sample value |
| --- | --- | --- |
| `<BODY_TEXT>`  *String* | **Required.**  Template body text. Variables are supported.  Maximum 1024 characters. | `Now shop for your favorite products right here on WhatsApp! Get Rs {{1}} off on all orders above {{2}}Rs! Valid for your first {{3}} orders placed on WhatsApp!` |
| `<EXAMPLE_BODY_TEXT>`  *String (of an array of strings)* | **Required if body text uses variables.**  Sample strings to replace variable placeholders in `<BODY_TEXT>` string.  Maximum 1024 characters. | `100` |
| `<FOOTER_TEXT>`  *String* | **Optional.**  Template footer text. Variables are supported.  Maximum 60 characters. | `Best grocery deals on WhatsApp!` |
| `<LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `intro_catalog_offer` |

### Example request

```
```
curl 'https://graph.facebook.com/v17.0/102290129340398/message_templates' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer EAAJB...' \  
-d '  
{  
  "name": "intro_catalog_offer",  
  "language": "en_US",  
  "category": "MARKETING",  
  "components": [  
    {  
      "type": "BODY",  
      "text": "Now shop for your favorite products right here on WhatsApp! Get Rs {{1}} off on all orders above {{2}}Rs! Valid for your first {{3}} orders placed on WhatsApp!",  
      "example": {  
        "body_text": [  
          [  
            "100",  
            "400",  
            "3"  
          ]  
        ]  
      }  
    },  
    {  
      "type": "FOOTER",  
      "text": "Best grocery deals on WhatsApp!"  
    },  
    {  
      "type": "BUTTONS",  
      "buttons": [  
        {  
          "type": "CATALOG",  
          "text": "View catalog"  
        }  
      ]  
    }  
  ]  
}'
```
```

### Example response

```
```
{  
  "id": "546151681022936",  
  "status": "PENDING",  
  "category": "MARKETING"  
}
```
```

## Sending catalog template messages

You can send approved [catalog templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalog-template-messages) in a template message. See [Sell Products and Services](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview) to learn more about product catalogs and ways to showcase your products.

### Requirements

You must have [inventory uploaded to Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/upload-inventory) in an e-commerce catalog [connected to your WhatsApp Business account⁠](https://www.facebook.com/business/help/158662536425974).

### Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send a catalog template message using a catalog template with an `APPROVED` status.

```
```
curl -X POST "https://graph.facebook.com/v19.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \  
  -H "Authorization: Bearer <ACCESS_TOKEN>" \  
  -H "Content-Type: application/json" \  
  -d '  
{  
    "messaging_product": "whatsapp",  
    "recipient_type": "individual",  
    "to": "<TO>",  
    "type": "template",  
    "template": {  
      "name": "<NAME>",  
      "language": {  
        "code": "<CODE>"  
      },  
      "components": [  
        {  
          "type": "body",  
          "parameters": [  
            {  
              "type": "<TYPE>",  
              "text": "<TEXT>"  
            }  
          ]  
        },  
        {  
          "type": "button",  
          "sub_type": "CATALOG",  
          "index": 0,  
          "parameters": [  
            {  
              "type": "action",  
              "action": {  
                "thumbnail_product_retailer_id": "<THUMBNAIL_PRODUCT_RETAILER_ID>"  
              }  
            }  
          ]  
        }  
      ]  
    }  
  }'
```
```

### Request parameters

| Placeholder | Description | Sample value |
| --- | --- | --- |
| `<CODE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<NAME>`  *String* | **Required.**  Template name. | `intro_catalog_offer` |
| `<THUMBNAIL_PRODUCT_RETAILER_ID>`  *String* | **Optional.**  Item SKU number. Labeled as Content ID in the Commerce Manager.  The thumbnail of this item will be used as the message’s header image.  If the `parameters` object is omitted, the product image of the first item in your catalog will be used. | `2lc20305pt` |
| `<TEXT>`  *String* | **Required if template uses variables.**  Template variable. | `100` |
| `<TO>`  *String* | **Required.**  Customer phone number. | `+16505551234` |
| `<TYPE>`  *String* | **Required if template uses variables.**  Template variable type. | `text` |

### Example request

```
```
curl 'https://graph.facebook.com/v17.0/106540352242922/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer EAAJB...' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "+16505551234",  
  "type": "template",  
  "template": {  
    "name": "intro_catalog_offer",  
    "language": {  
      "code": "en_US"  
    },  
    "components": [  
      {  
        "type": "body",  
        "parameters": [  
          {  
            "type": "text",  
            "text": "100"  
          },  
          {  
            "type": "text",  
            "text": "400"  
          },  
          {  
            "type": "text",  
            "text": "3"  
          }  
        ]  
      },  
      {  
        "type": "button",  
        "sub_type": "CATALOG",  
        "index": 0,  
        "parameters": [  
          {  
            "type": "action",  
            "action": {  
              "thumbnail_product_retailer_id": "2lc20305pt"  
            }  
          }  
        ]  
      }  
    ]  
  }  
}'
```
```

### Example response

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
      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI5RkEwM0EyODFEQzQ2NDYzQTMA"  
    }  
  ]  
}
```
```

## See also

* [Sell Products and Services](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview)
* [Catalog Messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/share-products#catalog-messages)
