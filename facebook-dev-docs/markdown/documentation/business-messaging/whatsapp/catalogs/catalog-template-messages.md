---
title: "Catalog messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalog-template-messages
---

# Catalog messages

Updated: Jun 18, 2026

Catalog messages let you showcase your product catalog entirely within WhatsApp.

Catalog messages display a product thumbnail header image of your choice, custom body text, a fixed text header, a fixed text sub-header, and a **View catalog** button.

![Catalog message example showing View catalog button](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/353831413_931793014769642_1489938023342123500_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=YBz1HVL6XZQQ7kNvwHhk-iw&_nc_oc=AdpZ2vJdhJtjEh5MF6WTTq_lUBpUqgNtdnZV9x2p72ZDtTD69FD92-n1PVaCo8T5_ZP7NeVYdzn1M6uXt9Wb-C7E&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=4RN6Bcpla8HCjUVuhoChRg&_nc_ss=7b2a8&oh=00_AQCzNRl36opmnGI9a-nnUkwWqiZPfAlszaIXiocMstWRQg&oe=6A604255)

When a customer taps the **View catalog** button, your product catalog appears within WhatsApp.

![Product catalog displayed within WhatsApp](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/353808079_9331603410246288_3629219693038191737_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=o5BiBxEaBK8Q7kNvwHaL_lf&_nc_oc=AdqVh42k3eVf2g_kWYHCeCyd-7jJvrJaq-SDtgposmYhqp496Zmgh6pADrM5SG8RvqfOqVVDi11Am3aO0MOyCq-B&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=4RN6Bcpla8HCjUVuhoChRg&_nc_ss=7b2a8&oh=00_AQDCBGWuJdoqpGEZdtm78-fsJsRfd5wWsibZQt-KHg3VMg&oe=6A606FA8)

## Requirements

You must have [inventory uploaded to Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/upload-inventory) in an ecommerce catalog [connected to your WhatsApp Business account⁠](https://www.facebook.com/business/help/158662536425974).

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send a catalog message.

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages
```

## Post body

```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<TO>",  
  "type": "interactive",  
  "interactive" : {  
    "type" : "catalog_message",  
    "body" : {  
      "text": "<BODY_TEXT>"  
    },  
    "action": {  
      "name": "catalog_message",  
  
      /* Parameters object is optional */  
      "parameters": {  
        "thumbnail_product_retailer_id": "<THUMBNAIL_PRODUCT_RETAILER_ID>"  
      }  
    },  
  
    /* Footer object is optional */  
    "footer": {  
      "text": "<FOOTER_TEXT>"  
  }  
}
```

## Properties

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<BODY_TEXT>`  *String* | **Required.**  Text to appear in the message body.  Maximum 1024 characters. | `Hello! Thanks for your interest. Ordering is easy. Just visit our catalog and add items to purchase.` |
| `<FOOTER_TEXT>`  *String* | **Optional.**  Text to appear in the message footer.  Maximum 60 characters. | `Best grocery deals on WhatsApp!` |
| `<THUMBNAIL_PRODUCT_RETAILER_ID>`  *String* | **Optional.**  Item SKU number. Labeled as **Content ID** in the Commerce Manager.  WhatsApp uses the thumbnail of this item as the message's header image.  If you omit the `parameters` object, WhatsApp uses the product image of the first item in your catalog. | `2lc20305pt` |
| `<TO>`  *String* | Customer phone number. | `+16505551234` |

## Example request

```
curl 'https://graph.facebook.com/v17.0/106540352242922/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer EAAJB...' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "+16505551234",  
  "type": "interactive",  
  "interactive": {  
    "type": "catalog_message",  
    "body": {  
      "text": "Hello! Thanks for your interest. Ordering is easy. Just visit our catalog and add items to purchase."  
    },  
    "action": {  
      "name": "catalog_message",  
      "parameters": {  
        "thumbnail_product_retailer_id": "2lc20305pt"  
      }  
    },  
    "footer": {  
      "text": "Best grocery deals on WhatsApp!"  
    }  
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
      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI0ODVEREUwQzEzQkVBRjQ1RUUA"  
    }  
  ]  
}
```
