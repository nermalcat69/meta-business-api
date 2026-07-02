---
title: "Single-product message templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview
---

# Single-product message templates

Updated: Jun 24, 2026

Single-product message (SPM) templates let you present a single product from your catalog. This guide describes their uses and how to use them.

SPM templates are marketing templates that allow you to present a single product from your ecommerce catalog, accompanied by a product image, product title, and product price (all pulled from your product within your catalog), along with customizable body text, optional footer text, and an interactive **View** button.

![Single-product message annotated with product image, product title, price, card body text, footer, and View button](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/456611074_369667709517740_8197750041061962345_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DSEs-y9wjL8Q7kNvwHwXf70&_nc_oc=Adroz97B3Th-yOT17tEysNOy-YRAUI4BgIPBOXoMEneIY_1FuXz03uAemnEMgA6Ivi82v691y8x0Ij5ttZIuUFJp&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=763o4yX6rmcBZsJNb34Ncg&_nc_ss=7b2a8&oh=00_AQDpCzEGl-xWy42V7OmerAAwrQZLs6WuWljNmLxk6kJQaw&oe=6A60634A)

WhatsApp users can tap the button to see details about the product, and can add or remove the product from the WhatsApp shopping cart:

![WhatsApp product Details screen for the Echeveria product with Message business and Add to order request buttons](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/455731119_491422670275236_7231575948344280249_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=OIMAYIoGnu4Q7kNvwFKV1s2&_nc_oc=AdoxQOT4Si01nW0JQPbFJ4HCj9cFGGG73TyIlnBB75OQCSaumkzqNqX7ILWC20fQVGfdjkAHIGE-r0b346_JJJMr&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=763o4yX6rmcBZsJNb34Ncg&_nc_ss=7b2a8&oh=00_AQDv4Bd0MTbFGkwk-P8PbpKETW_bDDCBOm3G7XwOHfJclw&oe=6A6046BF)

If the WhatsApp user adds the product to the cart and submits an order, you will be notified via webhook and the user will see that an order has been placed:

![WhatsApp Order via catalog message showing 1 item at 25.00 dollars estimated total with a View details link](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/455346606_8499522813412387_6714135406583255031_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PX0Yfjw6NdIQ7kNvwG5Vm84&_nc_oc=Adq27sgRTeBj4q6izQKbOR3rFmei4L8JHBGtZ43pssyKi5sgIwWHPU9IYTbgRrTB1eqwfxFIF3cMZSoXhXg0TI6e&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=763o4yX6rmcBZsJNb34Ncg&_nc_ss=7b2a8&oh=00_AQAk0GKlI24j3P_FmepI04ErLK2JRaFdvtvL92uRF5Vi1A&oe=6A606E45)

Users who place an order are also able to use the View details button to see information about the order:

![WhatsApp Your sent cart order details for Echeveria, Quantity 1, with a 25.00 dollars estimated total](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/455798578_1140213730376391_4808743486596066303_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=KADrieLTZPoQ7kNvwEY-Z8k&_nc_oc=Ado-7OY_yMcbWoCKkoZffWBwcKjV6TATCSUcLForCml4uA3ZJkeeVPVpEUrm799rfYkBkTG-y7gTyJBVUxk6bQNk&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=763o4yX6rmcBZsJNb34Ncg&_nc_ss=7b2a8&oh=00_AQDuzNpIL0RrRcdq0U9BNmYxNiw7umgZdtFfMhSdVVx9PA&oe=6A605CBF)

## Limitations

* WhatsApp users must be using WhatsApp v2.22.24 or later.
* Message forwarding is disabled for SPM templates.

## Catalogs

You must have an ecommerce product catalog, with inventory, connected to your WhatsApp Business account. See the Cloud API [Commerce](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview) guide to learn more about connecting a catalog to your account.

## Webhooks

When a WhatsApp user adds one or more products to their cart and submits an order, an [order messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/order) webhook is triggered, describing the order.

## Creating SPM templates

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create an SPM template.

### Request syntax

```
curl 'https://graph.facebook.com/v25.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "name": "<TEMPLATE_NAME>",
  "language": "<TEMPLATE_LANGUAGE>",
  "category": "marketing",
  "parameter_format": "<PARAMETER_FORMAT>",
  "components": [
    {
      "type": "header",
      "format": "product"
    },
    {
      "type": "body",
      "text": "<CARD_BODY_TEXT>",

      <!-- Example parameter values required, if body text contains parameters -->
      "example": {
        "body_text_named_params": [
          {
            "param_name": "<PARAMETER_NAME>",
            "example": "<PARAMETER_EXAMPLE>"
          },
          <!-- Additional parameters would follow -->
        ]
      }

    },
    {
      "type": "footer",
      "text": "<CARD_FOOTER_TEXT>"
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "spm",
          "text": "View"
        }
      ]
    }
  ]
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  Access token. | `EAAAN...` |
| `<CARD_BODY_TEXT>`  *String* | **Required.**  Card body text. Supports variables.  Maximum 160 characters. | `Use code {{1}} to get {{2}} off our newest succulent!` |
| `<CARD_FOOTER_TEXT>`  *String* | **Optional.**  Footer text.  Maximum 60 characters. | `September 30, 2024` |
| `<PARAMETER_NAME>`  *String* | **Required if body text uses parameters.**  Example parameter value string(s). You must include a parameter example for each parameter in your body text. | `25OFF` |
| `<PARAMETER_FORMAT>`  *String* | **Optional.**  [Parameter format](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#parameter-formats). Value can be:   * `named` * `positional`   If the `parameter_format` property is omitted, the template will use positional formatting. | `Lucky Shrub: Your gateway to succulents!` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `abandoned_cart_offer` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required.**  WhatsApp Business account ID. | `546151681022936` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/161311403722088/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "spm_template_named_params",
  "language": "en_US",
  "category": "marketing",
  "parameter_format": "named",
  "components": [
    {
      "type": "header",
      "format": "product"
    },
    {
      "type": "body",
      "text": "Use code {{code}} to get {{percent}} off our newest succulent!",
      "example": {
        "body_text_named_params": [
          {
            "param_name": "code",
            "example": "15OFF"
          },
          {
            "param_name": "percent",
            "example": "15%"
          }
        ]
      }
    },
    {
      "type": "footer",
      "text": "Offer ends September 22, 2024"
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "spm",
          "text": "View"
        }
      ]
    }
  ]
}'
```

## Sending single-product template messages

### Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an SPM template message.

```
curl 'https://graph.facebook.com/v25.0/<BUSINESS_PHONE_NUMBER_ID>/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",
  "type": "template",
  "template": {
    "name": "<TEMPLATE_NAME>",
    "language": {
      "code": "<TEMPLATE_LANGUAGE>"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "product",
            "product": {
              "product_retailer_id": "<PRODUCT_ID>",
              "catalog_id": "<CATALOG_ID>"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "<PARAMETER_NAME>",
            "text": "<PARAMETER_VALUE>"
          },
          <!-- Additional parameter values would follow, if required by template -->
        ]
      }
    ]
  }
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  Access token | `EAAAN...` |
| `<BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp Business phone number ID. | `106540352242922` |
| `<CATALOG_ID>`  *String* | **Required.**  ID of [connected ecommerce catalog⁠](https://www.facebook.com/business/help/158662536425974) containing the product. | `194836987003835` |
| `<PARAMETER_NAME>`  *String* | **Required if template uses one or more named parameters.**  Name of [named parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#named-parameters). | `code` |
| `<PARAMETER_VALUE>`  *String* | **Required if template uses one or more named parameters.**  [Named parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#named-parameters) value. | `10OFF` |
| `<PRODUCT_ID>`  *String* | **Required.**  Product ID. | `nqryix03ez` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `spm_template_named_params` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

This example sends an approved template named `spm_template_named_params` which injects parameters (a discount code and the percentage discounted) into the template body, and which includes a footer. The product image is pulled from the catalog and displayed in the message header.

```
curl 'https://graph.facebook.com/v25.0/179776755229976/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "16505551234",
  "type": "template",
  "template": {
    "name": "spm_template_named_params",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "header",
        "parameters": [
          {
            "type": "product",
            "product": {
              "product_retailer_id": "nqryix03ez",
              "catalog_id": "194836987003835"
            }
          }
        ]
      },
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "code",
            "text": "25OFF"
          },
          {
            "type": "text",
            "parameter_name": "percent",
            "text": "25%"
          }
        ]
      }
    ]
  }
}'
```
