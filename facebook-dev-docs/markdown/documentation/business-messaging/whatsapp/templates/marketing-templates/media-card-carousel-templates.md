---
title: "Location templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates
---

# Location templates

Updated: Jun 24, 2026

You can send marketing location template messages that include a map header that displays a specific location. When a WhatsApp user taps the map, their default map app opens to those coordinates. Location templates are useful for promoting store openings, event invitations, pop-up shops, and other location-based promotions.

Categorize a location template as either `MARKETING` or `UTILITY`. This page demonstrates creating and sending a location template with the `MARKETING` category. See [utility location templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/location-templates/) for a utility example.

WhatsApp does not support real-time locations. Specify the location at send time, not at template creation time.

![A marketing location template message in WhatsApp showing a map header with a pinned store location, body text with customer name and discount parameters, a footer, and a quick reply button](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/690742846_2366596883862056_5170819522180643394_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RMJPKr3FyF4Q7kNvwFWune-&_nc_oc=AdrsZZCqJC8_Xz15xsQNPpEvPrpdpCLvJKK8Srm6i0f4I0vrFYFGQFwkF1rOr-kypCl4yCyqTCmy883Vk48d2fHV&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=hDh4zXPCCW8IMhu2HU0Pmg&_nc_ss=7b2a8&oh=00_AQBeLEkkpJK2diJRMRf5ILNo4KPfOalhZaobXdj-j5e6Fw&oe=6A605527)

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
    "category": "MARKETING",
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
| `<BODY_PARAM_EXAMPLE>`  *String* | **Required if body text contains named parameters.**  Example value for the named parameter. You must supply one example for each parameter in your body text. | `Lisa` |
| `<BODY_PARAM_NAME>`  *String* | **Required if body text contains named parameters.**  Name of the parameter, matching the placeholder in the body text. | `customer_name` |
| `<BODY_TEXT>`  *String* | **Required.**  Body text string. Supports named parameters in `{​{parameter_name}​}` format.  Maximum 1024 characters. | `Hi {​{customer_name}​}! We are opening a new store near you. Visit us on opening day for {​{discount}​} off your first purchase!` |
| `<FOOTER_TEXT>`  *String* | **Optional.**  Footer text. Maximum 60 characters. | `Reply STOP to unsubscribe.` |
| `<TEMPLATE_LANGUAGE>`  *Enum* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `store_grand_opening` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required.**  WhatsApp Business account ID. | `106540352242922` |

### Example request

Create a marketing template with a location header, body with named parameters, footer, and a quick reply button:

```
curl -X POST \
  'https://graph.facebook.com/v25.0/106540352242922/message_templates' \
  -H 'Authorization: Bearer EAAJB...' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "store_grand_opening",
    "language": "en_US",
    "category": "MARKETING",
    "parameter_format": "named",
    "components": [
      {
        "type": "HEADER",
        "format": "LOCATION"
      },
      {
        "type": "BODY",
        "text": "Hi {​{customer_name}​}! We are opening a new store near you. Visit us on opening day for {​{discount}​} off your first purchase!",
        "example": {
          "body_text_named_params": [
            {
              "param_name": "customer_name",
              "example": "Lisa"
            },
            {
              "param_name": "discount",
              "example": "20%"
            }
          ]
        }
      },
      {
        "type": "FOOTER",
        "text": "Reply STOP to unsubscribe."
      },
      {
        "type": "BUTTONS",
        "buttons": [
          {
            "type": "QUICK_REPLY",
            "text": "Unsubscribe from Promos"
          }
        ]
      }
    ]
}'
```

### Example response

```
{  
  "id": "546151681022936",  
  "status": "PENDING",  
  "category": "MARKETING"  
}
```

## Send a location template

Call the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) to [send an approved location template](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) in a template message. You must specify the location coordinates at send time in the header component.

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
| `<BODY_PARAM_VALUE>`  *String* | **Required if the template body uses named parameters.**  Value to substitute for the named parameter. | `Maria` |
| `<LOCATION_ADDRESS>`  *String* | **Optional.**  Location address. | `3250 Ocean Park Blvd, Santa Monica, CA 90405` |
| `<LOCATION_LATITUDE>`  *String* | **Required.**  Location latitude in decimal degrees. | `34.01881798498779` |
| `<LOCATION_LONGITUDE>`  *String* | **Required.**  Location longitude in decimal degrees. | `-118.46708679200001` |
| `<LOCATION_NAME>`  *String* | **Optional.**  Location name. | `Lucky Shrub - Santa Monica` |
| `<TEMPLATE_LANGUAGE_CODE>`  *Enum* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Name of the template to send. | `store_grand_opening` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

Send the template [created in the example request above](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates#example-request). You provide the location coordinates and body parameter values at send time. Note that the send-time values differ from the creation-time example values to demonstrate that they are independent.

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
      "name": "store_grand_opening",
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
                "latitude": "34.01881798498779",
                "longitude": "-118.46708679200001",
                "name": "Lucky Shrub - Santa Monica",
                "address": "3250 Ocean Park Blvd, Santa Monica, CA 90405"
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
              "text": "Maria"
            },
            {
              "type": "text",
              "parameter_name": "discount",
              "text": "15%"
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
      "input": "+16505551234",  
      "wa_id": "16505551234"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```
