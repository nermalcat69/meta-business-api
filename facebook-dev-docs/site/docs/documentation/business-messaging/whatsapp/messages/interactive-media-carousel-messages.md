---
title: "Interactive list messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/interactive-media-carousel-messages
---

# Interactive list messages

Updated: Jun 28, 2026

Interactive list messages allow you to present WhatsApp users with a list of options to choose from (options are defined as rows in the request payload):

![WhatsApp interactive list message with callouts labeling the header, body, footer, and button text](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/439906651_815131396632137_2393939757123941379_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=0vMEaOrR-HkQ7kNvwFKANiy&_nc_oc=Adrj5yO4Qt0WBI6MSkz9u2bwyskq5FjeXaSXDkMhECFKYjdXbLlrh9oKQxHzlq7RmtATbHmms96CveMy2KTKhs0l&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=Ki-WZhDS-yLZBeKjAXO17A&_nc_ss=7b2a8&oh=00_AQBnkORL_HtwU632nWx0Gc6hJnCaryjv969Pdgg31F5Vug&oe=6A606091)

When a user taps the button in the message, WhatsApp displays a modal that lists the available options:

![Interactive list message modal of shipping options with callouts labeling the section title, row title, and row description](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/440772174_1215031642793437_4263879536705453309_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=L6vcIaraJF4Q7kNvwHWjwGu&_nc_oc=Adqhw1rJGDyjj6uLg3ckQXIwB5aGahZOO_MZclkPircQ5IHb0UuqK55sP78rVwfH9lIfDqy1_epjI7cLwHJ3r7PZ&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=Ki-WZhDS-yLZBeKjAXO17A&_nc_ss=7b2a8&oh=00_AQCVSE0PA4zutjzJlau7NZd1WTic5ro1rJkyO7lV1YdVBA&oe=6A6049C3)

Users can then choose one option, and WhatsApp sends their selection as a reply:

![WhatsApp chat showing the interactive list message followed by the user reply with their selected option](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/440751989_956441365805448_2344471884869029846_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PeZ5ubJ0WKEQ7kNvwHMGKX2&_nc_oc=AdoI2rh8lPuYxxjUPqwNSR-U9-X0WXKJmQSDZmHSozrXVCYJVF9RLEeDJEQchaCMxkWDSFfxQTrmFVDO3RXNaVky&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=Ki-WZhDS-yLZBeKjAXO17A&_nc_ss=7b2a8&oh=00_AQAnb2AsqGKl36QRjeTc3JUE48aI5YETlCvk-7_xMB2U5w&oe=6A606293)

Selecting an option triggers a webhook, which identifies the user's selected option.

Interactive list messages support up to 10 sections, with up to 10 rows for all sections combined, and can include an optional header and footer.

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an interactive list message to a WhatsApp user.

```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "interactive",  
  "interactive": {  
    "type": "list",  
    "header": {  
      "type": "text",  
      "text": "<MESSAGE_HEADER_TEXT>"  
    },  
    "body": {  
      "text": "<MESSAGE_BODY_TEXT>"  
    },  
    "footer": {  
      "text": "<MESSAGE_FOOTER_TEXT>"  
    },  
    "action": {  
      "button": "<BUTTON_TEXT>",  
      "sections": [  
        {  
          "title": "<SECTION_TITLE_TEXT>",  
          "rows": [  
            {  
              "id": "<ROW_ID>",  
              "title": "<ROW_TITLE_TEXT>",  
              "description": "<ROW_DESCRIPTION_TEXT>"  
            }  
            <!-- Additional rows would go here -->  
          ]  
        }  
        <!-- Additional sections would go here -->  
      ]  
    }  
  }  
}'
```

## Request parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BUTTON_TEXT>`  *String* | **Required.**  Button label text. When tapped, reveals rows (options the WhatsApp user can tap). Supports a single button.  Maximum 20 characters. | `Shipping Options` |
| `<MESSAGE_BODY_TEXT>`  *String* | **Required.**  Message body text. Supports URLs.  Maximum 4096 characters. | `Which shipping option do you prefer?` |
| `<MESSAGE_FOOTER_TEXT>`  *String* | **Optional.**  Message footer text.  Maximum 60 characters. | `Lucky Shrub: Your gateway to succulents™` |
| `<MESSAGE_HEADER_TEXT>`  *String* | **Optional.**  The `header` object is optional. Supports `text` header type only.  Maximum 60 characters. | `Choose Shipping Option` |
| `<ROW_DESCRIPTION_TEXT>`  *String* | **Optional.**  Row description.  Maximum 72 characters. | `Next Day to 2 Days` |
| `<ROW_ID>`  *String* | **Required.**  Arbitrary string identifying the row. This ID will be included in the webhook payload if the user submits the selection.  At least one row is required. Supports up to 10 rows.  Maximum 200 characters. | `priority_express` |
| `<ROW_TITLE_TEXT>`  *String* | **Required.**  Row title. At least 1 row is required. Supports up to 10 rows.  Maximum 24 characters. | `Priority Mail Express` |
| `<SECTION_TITLE_TEXT>`  *String* | **Required.**  Section title text. At least 1 section is required. Supports up to 10 sections.  Maximum 24 characters. | `I want it ASAP!` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Example request

Example request to send an interactive list message with a header, body, footer, and two sections containing two rows each.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "interactive",
  "interactive": {
    "type": "list",
    "header": {
      "type": "text",
      "text": "Choose Shipping Option"
    },
    "body": {
      "text": "Which shipping option do you prefer?"
    },
    "footer": {
      "text": "Lucky Shrub: Your gateway to succulents™"
    },
    "action": {
      "button": "Shipping Options",
      "sections": [
        {
          "title": "I want it ASAP!",
          "rows": [
            {
              "id": "priority_express",
              "title": "Priority Mail Express",
              "description": "Next Day to 2 Days"
            },
            {
              "id": "priority_mail",
              "title": "Priority Mail",
              "description": "1–3 Days"
            }
          ]
        },
        {
          "title": "I can wait a bit",
          "rows": [
            {
              "id": "usps_ground_advantage",
              "title": "USPS Ground Advantage",
              "description": "2–5 Days"
            },
            {
              "id": "media_mail",
              "title": "Media Mail",
              "description": "2–8 Days"
            }
          ]
        }
      ]
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
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```

## Webhooks

When a WhatsApp user selects an option and sends their message, WhatsApp triggers a **messages** webhook identifying the ID (`id`) of the option they chose.

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
                  "name": "Pablo Morales"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "context": {  
                  "from": "15550783881",  
                  "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBIwMjg0RkMxOEMyMkNEQUFFRDgA"  
                },  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQTZDMzFGRUFBQjlDMzIzMzlEQwA=",  
                "timestamp": "1712595443",  
                "type": "interactive",  
                "interactive": {  
                  "type": "list_reply",  
                  "list_reply": {  
                    "id": "priority_express",  
                    "title": "Priority Mail Express",  
                    "description": "Next Day to 2 Days"  
                  }  
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
