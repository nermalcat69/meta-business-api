---
title: "Interactive reply buttons messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/location-messages
---

# Interactive reply buttons messages

Updated: May 21, 2026

Interactive reply buttons messages allow you to send up to three predefined replies for users to choose from.

![WhatsApp interactive reply buttons message labeled with header image, body text, footer text, and two reply buttons](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/440749535_402938502645501_9105062754221017983_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=T0gHiw-i2wIQ7kNvwHY4PBz&_nc_oc=Adpc5PDwu75xpy_G7ieGIqjJMCOSkI8aLzZ1uLwdz7AU_Bp4FzfJA1B0RCA3KMmzIsVsT1g0uxO16daeJXdXkdtI&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=SpyXG5zmsSr9VcBQzKp23A&_nc_ss=7b2a8&oh=00_AQDObmFhbefLxP6qOLSjvkXN_j8C2OnaNmnO5QX5ewTGpQ&oe=6A6056B1)

Users can respond to a message by selecting one of the predefined buttons, which triggers a messages webhook describing their selection.

![WhatsApp interactive reply buttons message with Change and Cancel buttons, and the user tapping Change as a reply](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/440803070_1108181003739406_7014741695346688945_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NCuBcedHoQkQ7kNvwHaK8aW&_nc_oc=AdpUx0ZwIMGVnJA_HR0oPxWk1NSi5xsbUWW-LwtDe9dhqSLi_u_nMOM8Z_tycCxxAxlDVYTQrExXIbW9OEoTU1oD&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=SpyXG5zmsSr9VcBQzKp23A&_nc_ss=7b2a8&oh=00_AQDYz73Xej7SHlPM9O6_StBWN0O_RmKwS74J-wHpS-sMsQ&oe=6A606046)

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an interactive reply buttons message to a WhatsApp user.

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "interactive",  
  "interactive": {  
    "type": "button",  
    "header": {<MESSAGE_HEADER>},  
    "body": {  
      "text": "<BODY_TEXT>"  
    },  
    "footer": {  
      "text": "<FOOTER_TEXT>"  
    },  
    "action": {  
      "buttons": [  
        {  
          "type": "reply",  
          "reply": {  
            "id": "<BUTTON_ID>",  
            "title": "<BUTTON_LABEL_TEXT>"  
          }  
        }  
        <!-- Additional buttons would go here (maximum 3) -->  
      ]  
    }  
  }  
}'
```
```

## Request parameters

| Placeholder | Description | Sample value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BODY_TEXT>`  *String* | **Required.**  Body text. URLs are automatically hyperlinked.  Maximum 1024 characters. | `Hi Pablo! Your gardening workshop is scheduled for 9am tomorrow. Use the buttons if you need to reschedule. Thank you!` |
| `<BUTTON_ID>`  *String* | **Required.**  A unique identifier for each button. Supports up to 3 buttons.  Maximum 256 characters. | `change-button` |
| `<BUTTON_LABEL_TEXT>`  *String* | **Required.**  Button label text. Must be unique if using multiple buttons.  Maximum 20 characters. | `Change` |
| `<FOOTER_TEXT>`  *String* | **Required if using a footer.**  Footer text. URLs are automatically hyperlinked.  Maximum 60 characters. | `Lucky Shrub: Your gateway to succulents!™` |
| `<MESSAGE_HEADER>`  *JSON Object* | **Optional.**  Header content. Supports the following types:   * `document` * `image` * `text` * `video`   Media assets can be sent using their [uploaded media](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) `id` or URL `link` (not recommended). | Image header example using uploaded media ID (same basic structure for all media types):  ``` { "type": "image", "image": { "id": "2762702990552401" } ```  Image header example using hosted media:  ``` { "type": "image", "image": { "link": "https://www.luckyshrub.com/media/workshop-banner.png" } ```  Text header example:  ``` { "type":"text", "text": "Workshop Details" } ``` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Example request

Example request to send an interactive reply buttons message with an image header, body text, footer text, and two reply buttons.

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
    "type": "button",
    "header": {
      "type": "image",
      "image": {
        "id": "2762702990552401"
      }
    },
    "body": {
      "text": "Hi Pablo! Your gardening workshop is scheduled for 9am tomorrow. Use the buttons if you need to reschedule. Thank you!"
    },
    "footer": {
      "text": "Lucky Shrub: Your gateway to succulents!™"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "change-button",
            "title": "Change"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "cancel-button",
            "title": "Cancel"
          }
        }
      ]
    }
  }
}'
```

## Example response

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
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```
```

## Webhooks

When a WhatsApp user taps on a reply button, a **messages** webhook is triggered that describes their selection in a `button_reply` object:

```
```
"button_reply": {  
  "id": "<BUTTON_ID>",  
  "title": "<BUTTON_LABEL_TEXT>"  
}
```
```

* `<BUTTON_ID>` — The button ID of the button tapped by the user.
* `<BUTTON_LABEL_TEXT>` — The button label text of the button tapped by the user.

### Example webhook

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
                  "name": "Pablo Morales"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "context": {  
                  "from": "15550783881",  
                  "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBJBM0Y4RUU0RUNFQkFDMjYzQUMA"  
                },  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgASGBQzQThBREYwNzc2RDc2QjA1QTIwMgA=",  
                "timestamp": "1714510003",  
                "type": "interactive",  
                "interactive": {  
                  "type": "button_reply",  
                  "button_reply": {  
                    "id": "change-button",  
                    "title": "Change"  
                  }  
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
