---
title: "Location templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates
---

# Location templates

Updated: May 21, 2026

Location templates include a map header that displays a specific location. When a WhatsApp user taps the map, their default map app opens to the specified coordinates. Location templates are useful for order tracking, delivery updates, ride-hailing pickup and drop-off, and locating physical stores.

Location templates can be categorized as either `MARKETING` or `UTILITY`. This page demonstrates creating and sending a location template with the `UTILITY` category. See [Location templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/location-templates/) for a marketing example.

Real-time locations are not supported. The location is specified when you send the template, not when you create it.

![A location template message in WhatsApp showing a map header with a pinned location, body text with customer name and order number parameters, a footer, and a quick reply button](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/686944279_1908189836567121_5655838442554637446_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=T5iBbb-IU3QQ7kNvwEjcEy0&_nc_oc=AdqfI5edVZ08oFc7dV8YUV41FG03q-sVat1rQDwsR61NlTFquBgncbWZAh2n06TwO0UkjrH8jEJEDrrbhTcDZ6ei&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=uCoXryK1ZaRSOIF0TvtgRQ&_nc_ss=7b2a8&oh=00_AQDoIOVnjBADWGofymtKaWBDTnCCVg_rRUReSvYTWuPtzg&oe=6A604072)

## Limitations

* Only templates categorized as `UTILITY` or `MARKETING` can include a location header
* Real-time locations are not supported
* The location (latitude, longitude, name, address) is specified at send time, not at template creation time

## Create a location template

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api) to [create a location template](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates).

### Supported components

Location templates support the following components:

* 1 location header (**required**)
* 1 body (**required**; supports named parameters)
* 1 footer (optional)
* Buttons (optional)

### Request syntax

```
curl -X POST \
  'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "<TEMPLATE_NAME>",
    "language": "<TEMPLATE_LANGUAGE>",
    "category": "<CATEGORY>",
    "parameter_format": "named",
    "components": [
      {
        "type": "header",
        "format": "location"
      },
      {
        "type": "body",
        "text": "<BODY_TEXT>",
        "example": {
          "body_text_named_params": [
            {
              "param_name": "<BODY_PARAM_NAME>",
              "example": "<BODY_PARAM_EXAMPLE>"
            }
          ]
        }
      },
      {
        "type": "footer",
        "text": "<FOOTER_TEXT>"
      }
    ]
}'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BODY_PARAM_EXAMPLE>`  *String* | **Required if body text contains named parameters.**  Example value for the named parameter. You must supply one example for each parameter in your body text. | `Mark` |
| `<BODY_PARAM_NAME>`  *String* | **Required if body text contains named parameters.**  Name of the parameter, matching the placeholder in the body text. | `customer_name` |
| `<BODY_TEXT>`  *String* | **Required.**  Body text string. Supports named parameters in `{{parameter_name}}` format.  Maximum 1024 characters. | `Good news {{customer_name}}! Your order #{{order_number}} is on its way. Check the map above for the delivery location.` |
| `<CATEGORY>`  *Enum* | **Required.**  Template category. Must be `UTILITY` or `MARKETING` for location templates. | `UTILITY` |
| `<FOOTER_TEXT>`  *String* | **Optional.**  Footer text. Maximum 60 characters. | `Tap the button below to stop delivery updates.` |
| `<TEMPLATE_LANGUAGE>`  *Enum* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `order_delivery_update` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required.**  WhatsApp Business account ID. | `106540352242922` |

### Example request

Create a utility template with a location header, body with named parameters, footer, and a quick reply button:

```
curl -X POST \
  'https://graph.facebook.com/v25.0/106540352242922/message_templates' \
  -H 'Authorization: Bearer EAAJB...' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "order_delivery_update",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "named",
    "components": [
      {
        "type": "HEADER",
        "format": "LOCATION"
      },
      {
        "type": "BODY",
        "text": "Good news {{customer_name}}! Your order #{{order_number}} is on its way to the location above. Thank you for your order!",
        "example": {
          "body_text_named_params": [
            {
              "param_name": "customer_name",
              "example": "Mark"
            },
            {
              "param_name": "order_number",
              "example": "566701"
            }
          ]
        }
      },
      {
        "type": "FOOTER",
        "text": "To stop receiving delivery updates, tap the button below."
      },
      {
        "type": "BUTTONS",
        "buttons": [
          {
            "type": "QUICK_REPLY",
            "text": "Stop Delivery Updates"
          }
        ]
      }
    ]
}'
```

### Example response

```
```
{  
  "id": "546151681022936",  
  "status": "PENDING",  
  "category": "UTILITY"  
}
```
```

## Send a location template

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) to [send an approved location template](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) in a template message. You must specify the location coordinates at send time in the header component.

### Request syntax

```
curl -X POST \
  'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",
    "type": "template",
    "template": {
      "name": "<TEMPLATE_NAME>",
      "language": {
        "policy": "deterministic",
        "code": "<TEMPLATE_LANGUAGE_CODE>"
      },
      "components": [
        {
          "type": "header",
          "parameters": [
            {
              "type": "location",
              "location": {
                "latitude": "<LOCATION_LATITUDE>",
                "longitude": "<LOCATION_LONGITUDE>",
                "name": "<LOCATION_NAME>",
                "address": "<LOCATION_ADDRESS>"
              }
            }
          ]
        },
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "parameter_name": "<BODY_PARAM_NAME>",
              "text": "<BODY_PARAM_VALUE>"
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
| `<BODY_PARAM_NAME>`  *String* | **Required if the template body uses named parameters.**  Name of the parameter to replace in the template body. | `customer_name` |
| `<BODY_PARAM_VALUE>`  *String* | **Required if the template body uses named parameters.**  Value to substitute for the named parameter. | `Jane` |
| `<LOCATION_ADDRESS>`  *String* | **Optional.**  Location address. | `101 Forest Ave, Palo Alto, CA 94301` |
| `<LOCATION_LATITUDE>`  *String* | **Required.**  Location latitude in decimal degrees. | `37.44211676562361` |
| `<LOCATION_LONGITUDE>`  *String* | **Required.**  Location longitude in decimal degrees. | `-122.16155960083124` |
| `<LOCATION_NAME>`  *String* | **Optional.**  Location name. | `Philz Coffee` |
| `<TEMPLATE_LANGUAGE_CODE>`  *Enum* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Name of the template to send. | `order_delivery_update` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

Send the template [created in the example request above](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#example-request). The location coordinates and body parameter values are provided at send time. Note that the send-time values differ from the creation-time example values to demonstrate that they are independent.

```
curl -X POST \
  'https://graph.facebook.com/v25.0/106540352242922/messages' \
  -H 'Authorization: Bearer EAAJB...' \
  -H 'Content-Type: application/json' \
  -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "+16505551234",
    "type": "template",
    "template": {
      "name": "order_delivery_update",
      "language": {
        "policy": "deterministic",
        "code": "en_US"
      },
      "components": [
        {
          "type": "header",
          "parameters": [
            {
              "type": "location",
              "location": {
                "latitude": "37.44211676562361",
                "longitude": "-122.16155960083124",
                "name": "Philz Coffee",
                "address": "101 Forest Ave, Palo Alto, CA 94301"
              }
            }
          ]
        },
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "parameter_name": "customer_name",
              "text": "Jane"
            },
            {
              "type": "text",
              "parameter_name": "order_number",
              "text": "892104"
            }
          ]
        }
      ]
    }
}'
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
      "id": "wamid.HBgLMTY1MDU..."  
    }  
  ]  
}
```
```
