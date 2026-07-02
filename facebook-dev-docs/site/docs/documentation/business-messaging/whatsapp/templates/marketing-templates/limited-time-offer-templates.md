---
title: "Coupon code templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates
---

# Coupon code templates

Updated: May 28, 2026

Coupon code templates are marketing templates that display a single copy code button. When the app user taps the button, WhatsApp copies the coupon code to the clipboard.

![A coupon code template message in WhatsApp with annotations showing the body text, coupon_code, and discount parameters, copy code button, and quick reply button](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/709527691_1447341403830737_1304824227142991309_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZvvrjjVyrfwQ7kNvwFn1FeW&_nc_oc=AdpxGgGEMXbmOWi4T-zs3LDq4c_Aw-v8aFanxM1MlnLDv3G0QPS_HGjwblypm6r3UiOHI9ebkX5eyR4Ng-kx1Fm_&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=YNPxVdx8SeESLHqIwqyYrQ&_nc_ss=7b2a8&oh=00_AQDsT-rt_EBwwqwI_7dvTNdUa30ma0uuGhQfxF58GfUVJg&oe=6A605B8A)

## Limitations

* Coupon code templates are currently not supported by the WhatsApp web client.
* Copy code button text cannot be customized.
* Templates are limited to one copy code button.

To create and send a coupon code template, follow these steps:

* [Create a coupon code template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates#step-1-create-a-coupon-code-template) using the Message Templates API.
* [Send a coupon code template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/limited-time-offer-templates#step-2-send-a-coupon-code-template) using the Messages API.

## Properties set at creation vs. send

Some properties are defined when you create the template, while others are provided when you send it. Some properties span both steps.

**Creation only:**

* Header text
* Body text (with parameter placeholders)
* Quick reply button label
* Copy code button example code

**Send only:**

* Body parameter values (`coupon_code`, `discount`)
* Coupon code (copy code button value)

**Both creation and send:**

* Template name, language (referenced at both steps)

## Step 1: Create a coupon code template

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create a coupon code template.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "name": "<TEMPLATE_NAME>",  
  "language": "<TEMPLATE_LANGUAGE>",  
  "category": "MARKETING",  
  "parameter_format": "named",  
  "components": [  
    {  
      "type": "HEADER",  
      "format": "TEXT",  
      "text": "<HEADER_TEXT>"  
    },  
    {  
      "type": "BODY",  
      "text": "<BODY_TEXT>",  
      "example": {  
        "body_text_named_params": [  
          {  
            "param_name": "<BODY_PARAMETER_NAME>",  
            "example": "<BODY_PARAMETER_EXAMPLE_VALUE>"  
          }  
        ]  
      }  
    },  
    {  
      "type": "BUTTONS",  
      "buttons": [  
        {  
          "type": "QUICK_REPLY",  
          "text": "<QUICK_REPLY_BUTTON_LABEL_TEXT>"  
        },  
        {  
          "type": "COPY_CODE",  
          "example": "<COPY_CODE_BUTTON_EXAMPLE_CODE>"  
        }  
      ]  
    }  
  ]  
}'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BODY_PARAMETER_EXAMPLE_VALUE>`  *String* | **Required if using a body component string that includes one or more parameters.**  Example parameter value. You must supply an example for each parameter defined in your body component string. | `WINTER25` |
| `<BODY_PARAMETER_NAME>`  *String* | **Required if using named parameters.**  Parameter name. Must be a unique string, composed of lowercase characters and underscores. | `coupon_code` |
| `<BODY_TEXT>`  *String* | **Required.**  Template body text. Variables are supported.  Maximum 1024 characters. | `Shop now through the end of December and use the one-time use code {​{coupon_code}​} to get {​{discount}​} off of your entire order!` |
| `<COPY_CODE_BUTTON_EXAMPLE_CODE>`  *String* | **Required.**  String to copy to device clipboard.  Maximum 20 characters. | `WINTER25` |
| `<HEADER_TEXT>`  *String* | **Required if using a text header component.**  Header text.  Maximum 60 characters. | `Our Winter Sale is on!` |
| `<QUICK_REPLY_BUTTON_LABEL_TEXT>`  *String* | **Required if using a quick-reply button.**  Button label text. Maximum 25 characters. Alphanumeric characters only. | `Unsubscribe` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name. Must be unique, unless existing templates with the same name have a different template language.  Maximum 512 characters. Lowercase, alphanumeric characters and underscores only. | `winter_sale_coupon` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required.**  WhatsApp Business account ID. | `102290129340398` |

### Response syntax

Upon success, the API responds with:

```
{  
  "id": "<TEMPLATE_ID>",  
  "status": "<TEMPLATE_STATUS>",  
  "category": "<TEMPLATE_CATEGORY>"  
}
```

### Response parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<TEMPLATE_CATEGORY>` | [Template category](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization). | `MARKETING` |
| `<TEMPLATE_ID>` | Template ID. | `1627019861106475` |
| `<TEMPLATE_STATUS>` | [Template status](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#template-status). | `PENDING` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "winter_sale_coupon",
  "language": "en_US",
  "category": "MARKETING",
  "parameter_format": "named",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our Winter Sale is on!"
    },
    {
      "type": "BODY",
      "text": "Shop now through the end of December and use the one-time use code {​{coupon_code}​} to get {​{discount}​} off of your entire order!",
      "example": {
        "body_text_named_params": [
          {
            "param_name": "coupon_code",
            "example": "WINTER25"
          },
          {
            "param_name": "discount",
            "example": "30%"
          }
        ]
      }
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe"
        },
        {
          "type": "COPY_CODE",
          "example": "WINTER25"
        }
      ]
    }
  ]
}'
```

### Example response

```
{  
  "category" : "MARKETING",  
  "id" : "1924084211297547",  
  "status" : "PENDING"  
}
```

## Step 2: Send a coupon code template

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an approved coupon template in a template message.

### Request syntax

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \  
  -H "Authorization: Bearer <ACCESS_TOKEN>" \  
  -H "Content-Type: application/json" \  
  -d '  
{  
    "messaging_product": "whatsapp",  
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
    "type": "template",  
    "template": {  
      "name": "<TEMPLATE_NAME>",  
      "language": {  
        "code": "<TEMPLATE_LANGUAGE>"  
      },  
      "components": [  
        {  
          "type": "body",  
          "parameters": [  
            {  
              "type": "text",  
              "parameter_name": "<PARAMETER_NAME>",  
              "text": "<PARAMETER_VALUE>"  
            }  
          ]  
        },  
        {  
          "type": "button",  
          "sub_type": "copy_code",  
          "index": <BUTTON_INDEX>,  
          "parameters": [  
            {  
              "type": "coupon_code",  
              "coupon_code": "<COUPON_CODE>"  
            }  
          ]  
        }  
      ]  
    }  
  }'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<BUTTON_INDEX>`  *Integer* | **Required.**  Indicates the order in which a button appears, if the template uses multiple buttons.  Buttons are zero-indexed, so setting the value to `0` causes the button to appear first, and another button with an index of `1` appears next, and so on. | `0` |
| `<COUPON_CODE>`  *String* | **Required.**  String to copy to device clipboard.  Maximum 20 characters. | `WINTER25` |
| `<PARAMETER_NAME>`  *String* | **Required if template uses one or more named parameters.**  [Named parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#named-parameters) name. | `coupon_code` |
| `<PARAMETER_VALUE>`  *String* | **Required if template uses one or more named parameters.**  [Named parameter](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#named-parameters) value. | `WINTER25` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Name of the template to be sent. | `winter_sale_coupon` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  The template's language and locale code. | `en_US` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Response syntax

Upon success, the API responds with:

```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "<WHATSAPP_USER_PHONE_NUMBER>",  
      "wa_id": "<WHATSAPP_USER_ID>"  
    }  
  ],  
  "messages": [  
    {  
      "id": "<WHATSAPP_MESSAGE_ID>",  
      "group_id": "<GROUP_ID>", <!-- Only included if messaging a group -->  
      "message_status": "<PACING_STATUS>" <!-- Only included if sending a template -->  
    }  
  ]  
}
```

### Response parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<GROUP_ID>`  *String* | The string identifier of a group made using the Groups API.  This field shows when messages are sent, received, or read from a group.  [Learn more about the Groups API](https://developers.facebook.com/documentation/business-messaging/whatsapp/groups) | `Y2FwaV9ncm91cDoxNzA1NTU1MDEzOToxMjAzNjM0MDQ2OTQyMzM4MjAZD` |
| `<PACING_STATUS>`  *String* | Indicates [template pacing](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-pacing) status. The `message_status` property is only included in responses when sending a [template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) that uses a template that is being paced. | `wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | WhatsApp user's WhatsApp phone number. May not match `wa_id` value. | `+16505551234` |
| `<WHATSAPP_USER_ID>`  *String* | WhatsApp user's WhatsApp ID. May not match `input` value. | `16505551234` |
| `<WHATSAPP_MESSAGE_ID>`  *String* | WhatsApp Message ID. This ID appears in associated **messages** webhooks, such as sent, read, and delivered webhooks. | `wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI4MjZGRDA0OUE2OTQ3RkEyMzcA` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "to": "16505551234",
  "type": "template",
  "template": {
    "name": "winter_sale_coupon",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "coupon_code",
            "text": "WINTER25"
          },
          {
            "type": "text",
            "parameter_name": "discount",
            "text": "30%"
          }
        ]
      },
      {
        "type": "button",
        "sub_type": "copy_code",
        "index": 1,
        "parameters": [
          {
            "type": "coupon_code",
            "coupon_code": "WINTER25"
          }
        ]
      }
    ]
  }
}'
```

### Example response

```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "16505551234",  
      "wa_id": "16505551234"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBIxRjk1REYzMDBERDE3RUI0RDYA"  
    }  
  ]  
}
```
