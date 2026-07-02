---
title: "Send order details template message"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-request-cta
---

# Send order details template message

Updated: Jun 30, 2026

## Overview

Order details message template is a template with [interactive components](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#components) that extends the call-to-action button to support sending order details, letting you display itemized orders, totals, and payment options that templates with only text components cannot.

Once you create and approve your order details message templates, you can use the approved template to send the template message with order or bill information to prompt customers to make a payment.

Before sending an order details template message, create a template with an "order details" call-to-action button. See [Create Message Templates for Your WhatsApp Business account⁠](https://www.facebook.com/business/help/2055875911147364?id=2129163877102343) for more information on prerequisites and how to create a template.

## Creating an order details template on WhatsApp Manager

To create an order details template, you need a business portfolio with a WhatsApp Business account.

In **WhatsApp Manager** > **Account tools**:

* Click `Create template`.
* Select `Utility` or `Marketing` category to see the `Order details` template format option.
* Select `Order details` template format, and click **Next**
* Enter the desired `template name` and supported `locale`
  * Depending on the number of `locales` selected there will be an equal number of template variants and you fill in the template details in the respective locale.
* Fill in template components such as `Header`, `Body`, and optional `footer` text.
  * For the `Header`, you can choose one of three media types: `Text`, `Image` or `Document`. Choose `Document` if you want to send **PDF files** in the header of this template.
* Click submit.
* Once submitted, templates will be [categorized as per the guidelines](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization#template-category-guidelines) and undergo the [approval process](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review#approval-process).
* The system approves or rejects the template after verifying its components.
  * If you believe the assigned category is not consistent with the template category guidelines, confirm there are no [common issues](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review) that leads to rejections and if you are looking for further clarification you may [request a review](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization#requesting-review) of the template via [Business Support⁠](https://business.facebook.com/business-support-home/)
* Once approved template [status](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#template-status) will be changed to `ACTIVE`
  * A template's status can change automatically from `ACTIVE` to `PAUSED` or `DISABLED` based on customer feedback and engagement. [Monitor status changes](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review#common-rejection-reasons) and take appropriate action whenever such a change occurs.

## Creating an order details template using template creation APIs

To create a template through API and understand the general syntax, required categories and
components please refer to [templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#creating-templates). All the guidelines outlined above in creating templates apply through API as well.

Order details template can be categorized as "Utility" or "Marketing" template and apart from 'name' and 'language' of
choice, the template has general template components such as HEADER, BODY, FOOTER, and a fixed BUTTON with "ORDER\_DETAILS" type.

The `category` must be `UTILITY` or `MARKETING`, and the header `format` must be `TEXT`, `IMAGE`, or `DOCUMENT`.

### Endpoint

```
POST /{WHATSAPP_BUSINESS_ACCOUNT_ID}/message_templates
```

### Request body

```
{  
  "name": "<TEMPLATE_NAME>",  
  "language": "<LANGUAGE_CODE>",  
  "category": "<CATEGORY>",  
  "display_format": "ORDER_DETAILS",  
  "components": [  
    {  
      "type": "HEADER",  
      "format": "<FORMAT>",  
      "text": "<HEADER_TEXT>"  
    },  
    {  
      "type": "BODY",  
      "text": "<BODY_TEXT>"  
    },  
    {  
      "type": "FOOTER",  
      "text": "<FOOTER_TEXT>"  
    },  
    {  
      "type": "BUTTONS",  
      "buttons": [  
        {  
          "type": "ORDER_DETAILS",  
          "text": "<COPY_PIX_CODE>"  
        }  
      ]  
    }  
  ]  
}
```

## Sending order details template message

Order details template message allows the businesses to send invoice (order\_details) message as predefined `order details` call-to-action button component parameters. The order details template message supports businesses to send all payment integration (such as [Dynamic Pix code](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix), [Payment Links](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/payment-links), [Boleto](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/boleto), and so on) integration as button parameters.

To send an order details template message, make a `POST` call to `/PHONE_NUMBER_ID/messages` endpoint and attach a message object with `type=template`. Then, add a template object with a predefined `order details` call-to-action button.

The following image shows an example of an order details template message rendered in WhatsApp, with itemized products, payment options, and call-to-action buttons.

![Order details template message in WhatsApp showing product image, itemized cart, payment options, total amount, body text, and Copy Pix code and Open payment link buttons](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/678958103_1490152929510023_7441374409453210970_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Svi9LxTauO0Q7kNvwFZkC-G&_nc_oc=Adpw1eO93SZMGv1jG0WevBDjst6BxgFaGu4-Fzh7oFbk0HTHw_TUkWhyAxOKmYWbqlTjQ5pfc_IQhLwmut_G8_nl&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=uQWSHkAyi-LbCGaMKfVMEA&_nc_ss=7b2a8&oh=00_AQAZ88RRjYR5eb1InzM3SRwgQlciYtWWk-Kid90A6jUdbA&oe=6A606888)

You can optionally include a **PDF file** as an attachment in the `header` component of the template message. To do so, you use `type=document` in the `parameter` object of the `header` component object, as described in the [Components](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components#media-header) document.

For example, the following sample describes how to send [Copy Pix code](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/offsite-pix) in order details template message parameters to prompt the consumer to make a payment.

### Endpoint

```
POST /{PHONE_NUMBER_ID}/messages
```

### Request body

```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<PHONE_NUMBER>",  
  "type": "template",  
  "template": {  
    "name": "<TEMPLATE_NAME>",  
    "language": {  
      "policy": "deterministic",  
      "code": "<LANGUAGE_AND_LOCALE_CODE>"  
    },  
    "components": [  
      {  
        "type": "button",  
        "sub_type": "order_details",  
        "index": 0,  
        "parameters": [  
          {  
            "type": "action",  
            "action": {  
              "order_details": {  
                "reference_id": "<UNIQUE_REFERENCE_ID>",  
                "type": "digital-goods",  
                "payment_type": "br",  
                "payment_settings": [  
                  {  
                    "type": "pix_dynamic_code",  
                    "pix_dynamic_code": {  
                      "code": "00020101021226700014br.gov.bcb.pix2548pix.example.com...",  
                      "merchant_name": "Account holder name",  
                      "key": "39580525000189",  
                      "key_type": "CNPJ"  
                    }  
                  }  
                ],  
                "currency": "BRL",  
                "total_amount": {  
                  "value": 50000,  
                  "offset": 100  
                },  
                "order": {  
                  "status": "pending",  
                  "tax": {  
                    "value": 0,  
                    "offset": 100,  
                    "description": "optional text"  
                  },  
                  "items": [  
                    {  
                      "retailer_id": "1234567",  
                      "name": "Cake",  
                      "amount": {  
                        "value": 50000,  
                        "offset": 100  
                      },  
                      "quantity": 1  
                    }  
                  ],  
                  "subtotal": {  
                    "value": 50000,  
                    "offset": 100  
                  }  
                }  
              }  
            }  
          }  
        ]  
      }  
    ]  
  }  
}
```

Once the order details template message is delivered, a successful response includes an object with an identifier prefixed with `wamid`. Use the ID listed after `wamid` to track your message status.

```
{  
    "messaging_product": "whatsapp",  
    "contacts": [  
        {  
            "input": "<PHONE_NUMBER>",  
            "wa_id": "<WHATSAPP_ID>"  
        }  
    ],  
    "messages": [  
        {  
            "id": "wamid.ID"  
        }  
    ]  
}
```

## Post order details template message flow

After the order details template message delivery the rest of the payment flow is the same as "Sending invoice in customer session window" and depends on the chosen [payment integration](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview) order details parameters.
