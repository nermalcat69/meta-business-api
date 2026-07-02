---
title: "Media card carousel templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/onboarding
---

# Media card carousel templates

Updated: Jun 24, 2026

Media card carousel templates allow you to send a single **marketing template** message accompanied by a set of up to 10 product media cards in a horizontally scrollable view:

![WhatsApp marketing template message with body text and a horizontally scrollable Media Card Carousel of succulent product cards](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/461961248_1048610163180196_3907313698557856900_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=0HgaSt-zluIQ7kNvwFmevo_&_nc_oc=AdrsmCcC9uFMABifANrFQMn3Dv-t10TvrDdlB1ZvgyU4WASmUM0ONPCFBPfwOhnSpoP_IVaa4TxDbLBmGvD40cXO&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=o2z3H_DDtHVubJa39docjA&_nc_ss=7b2a8&oh=00_AQCRM4l0RnOtBUaXjleLqtTUEmQc_eeeYQeeBOXNrvhWDQ&oe=6A6052BC)

When a WhatsApp user taps a media card’s **URL** button to buy a product, the URL mapped to the button is loaded in the device’s default web browser, thus taking the WhatsApp user out of the WhatsApp client experience. If you prefer to keep the user in the WhatsApp client, see [Product Card Carousel Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/product-card-carousel-template-messages). Note that carousel cards are only available for marketing template messages.

## Media cards

Carousel templates consist of a message body text and up to 10 product media cards. Each card in the template has an image or video header asset and can optionally include a body text and up to two buttons. Button combinations can be a mix of [quick reply buttons](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components#quick-reply-buttons), [phone number buttons](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components#phone-number-buttons), and [URL buttons](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components#url-buttons).

All cards defined on a template must have the same components.

![Media Card Carousel template annotated with message body text, card media header, card body text, and card buttons across three succulent cards](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/461975373_1069581831199988_6558232856590657854_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-r8R-XBNZg0Q7kNvwGkHdOg&_nc_oc=Adr28OmUcF2jLhaLikzYkrPffrmC19BMR6ODftovjN78x-MIFQOCTHgP9riiKqdQO0mGM5IYEo8aacSvo6rrIrVm&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=o2z3H_DDtHVubJa39docjA&_nc_ss=7b2a8&oh=00_AQBzjn4JYIJq4Ysex3wkO7ExpMPDhBgeHxu59Swxqyfj5g&oe=6A606BD3)

When WhatsApp users place an order, they do so outside of the WhatsApp client, so no webhooks are triggered describing their order.

## Creating media card carousel templates

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create a media card carousel template.

### Request syntax

Define the exact number of product cards (minimum 2, maximum 10) when you create the template. An approved template can only be used to send the same number of cards as defined during its creation. If any card in the carousel includes a card body text, then all cards must include a card body text to ensure consistent card heights.

```
curl -X POST "https://graph.facebook.com/v25.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '
{
    "name": "<TEMPLATE_NAME>",
    "language": "<TEMPLATE_LANGUAGE>",
    "category": "marketing",
    "components": [
      {
        "type": "body",
        "text": "<MESSAGE_BODY_TEXT>",
        "example": {
          "body_text": [
            [
              "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE_1>",
              "<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE_2>"
            ]
          ]
        }
      },
      {
        "type": "carousel",
        "cards": [
          {
            "components": [
              {
                "type": "header",
                "format": "<CARD_HEADER_FORMAT>",
                "example": {
                  "header_handle": [
                    "<CARD_HEADER_ASSET_HANDLE>"
                  ]
                }
              },
              {
                "type": "buttons",
                "buttons": [
                  {
                    "type": "quick_reply",
                    "text": "<QUICK_REPLY_BUTTON_LABEL_TEXT>"
                  },
                  {
                    "type": "url",
                    "text": "<URL_BUTTON_LABEL_TEXT>",
                    "url": "<URL_BUTTON_URL>",
                    "example": [
                      "<URL_BUTTON_URL_VARIABLE_EXAMPLE>"
                    ]
                  },
                  {
                    "type": "phone_number",
                    "text": "<PHONE_NUMBER_BUTTON_LABEL_TEXT>",
                    "phone_number": "<PHONE_NUMBER>"
                  }
                ]
              }
            ]
          }
          // Add additional cards here, following the same structure
        ]
      }
    ]
  }'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<CARD_HEADER_ASSET_HANDLE>`  *String* | **Required.**  Uploaded media asset handle. Use the [Resumable Upload API](https://developers.facebook.com/docs/graph-api/guides/upload) to generate an asset handle.  Media assets are automatically cropped to a wide ratio based on the WhatsApp user’s device. | `4::anBlZw==:ARa525ZJ1g0J-8egeiRvb4Z4r9RSi9qeKF7-wXsUiaDFsll5CKbu5H7h_9mTW0TDfA8LEGHC4bAeXtJJiVQADMp5Ooe2huQlhpBxMadJiu3qVg:e:1724535430:634974688087057:100089620928913:ARaQoFQMm6BlbI3MYo4` |
| `<CARD_HEADER_FORMAT>`  *String* | **Required.**  Card header format. Value can be `image` or `video`. | `image` |
| `<MESSAGE_BODY_TEXT>`  *String* | **Required.**  Message body text. Supports variables.  Maximum 1024 characters. | `Rare succulents for sale! {{1}}, add these unique plants to your collection. Each of these rare succulents are {{2}} if you checkout using code {{3}}. Shop now and add some unique and beautiful plants to your collection!` |
| `<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>`  *String* | **Required if message body text string uses variables.**  Message body text example variable string(s). Number of strings must match the number of variable placeholders in the message body text string.  If message body text uses a single variable, `body_text` value can be a string, otherwise it must be an array containing an array of strings. | `20OFF` |
| `<PHONE_NUMBER>`  *String* | **Required if using a phone number button.**  Alphanumeric string. Business phone number to be called when the WhatsApp user taps the button.  Maximum 20 characters. | `+15550051310` |
| `<PHONE_NUMBER_BUTTON_LABEL_TEXT>`  *String* | **Required if using a phone number button.**  Phone number button label text.  Maximum 25 characters. | `Call` |
| `<QUICK_REPLY_BUTTON_LABEL_TEXT>`  *String* | **Required if using a quick-reply button.**  Quick-reply button label text.  Maximum 25 characters. | `Send more like this!` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `carousel_template_media_cards_v1` |
| `<URL_BUTTON_LABEL_TEXT>`  *String* | **Required if using a URL button.**  URL button label text.  25 characters maximum. | `Shop` |
| `<URL_BUTTON_URL>`  *String* | **Required if using a URL button.**  URL to be loaded in the device’s default web browser when the WhatsApp user taps the button.  Supports 1 variable. Variable placeholder must be appended to the end of the URL string.  Maximum 2000 characters. | `https://www.luckyshrub.com/rare-succulents/{{1}}` |
| `<URL_BUTTON_URL_VARIABLE_EXAMPLE>`  *String* | **Required if URL button URL uses a variable.**  URL button URL example variable string.  Maximum 2000 characters. | `BUDDHA` |

### Example request

This example creates a media card carousel template with 3 variables and 3 media cards. Each media card has a quick reply button, and a URL button that uses a variable.

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "carousel_template_media_cards_v1",
  "language": "en_US",
  "category": "marketing",
  "components": [
    {
      "type": "body",
      "text": "Rare succulents for sale! {{1}}, add these unique plants to your collection. Each of these rare succulents are {{2}} if you checkout using code {{3}}. Shop now and add some unique and beautiful plants to your collection!",
      "example": {
        "body_text": [
          [
            "Pablo",
            "30%",
            "30OFF"
          ]
        ]
      }
    },
    {
      "type": "carousel",
      "cards": [
        {
          "components": [
            {
              "type": "header",
              "format": "image",
              "example": {
                "header_handle": [
                  "4::an..."
                ]
              }
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "quick_reply",
                  "text": "Send me more like this!"
                },
                {
                  "type": "url",
                  "text": "Shop",
                  "url": "https://www.luckyshrub.com/rare-succulents/{{1}}",
                  "example": [
                    "BLUE_ELF"
                  ]
                }
              ]
            }
          ]
        },
        {
          "components": [
            {
              "type": "header",
              "format": "image",
              "example": {
                "header_handle": [
                  "4::an..."
                ]
              }
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "quick_reply",
                  "text": "Send me more like this!"
                },
                {
                  "type": "url",
                  "text": "Shop",
                  "url": "https://www.luckyshrub.com/rare-succulents/{{1}}",
                  "example": [
                    "BUDDHA"
                  ]
                }
              ]
            }
          ]
        },
        {
          "components": [
            {
              "type": "header",
              "format": "image",
              "example": {
                "header_handle": [
                  "4::an..."
                ]
              }
            },
            {
              "type": "buttons",
              "buttons": [
                {
                  "type": "quick_reply",
                  "text": "Send me more like this!"
                },
                {
                  "type": "url",
                  "text": "Shop",
                  "url": "https://www.luckyshrub.com/rare-succulents/{{1}}",
                  "example": [
                    "BLACK_PRINCE"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}'
```

## Sending media card carousel templates

To send approved [media card carousel templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates) to WhatsApp users, use the request syntax that follows.

### Request syntax

```
curl -X POST "https://graph.facebook.com/v25.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
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
          "type": "body",
          "parameters": [
            { "type": "text", "text": "<MESSAGE_BODY_TEXT_VARIABLE_1>" },
            { "type": "text", "text": "<MESSAGE_BODY_TEXT_VARIABLE_2>" }
          ]
        },
        {
          "type": "carousel",
          "cards": [
            {
              "card_index": 0,
              "components": [
                {
                  "type": "header",
                  "parameters": [
                    {
                      "type": "<MESSAGE_HEADER_FORMAT>",
                      "<MESSAGE_HEADER_FORMAT>": {
                        "id": "<MESSAGE_HEADER_ASSET_ID>"
                      }
                    }
                  ]
                },
                {
                  "type": "body",
                  "parameters": [
                    { "type": "text", "text": "<CARD_BODY_VARIABLE_1>" },
                    { "type": "text", "text": "<CARD_BODY_VARIABLE_2>" }
                  ]
                },
                {
                  "type": "button",
                  "sub_type": "quick_reply",
                  "index": 0,
                  "parameters": [
                    {
                      "type": "payload",
                      "payload": "<QUICK_REPLY_BUTTON_PAYLOAD>"
                    }
                  ]
                },
                {
                  "type": "button",
                  "sub_type": "url",
                  "index": 1,
                  "parameters": [
                    {
                      "type": "text",
                      "text": "<URL_BUTTON_URL_VARIABLE>"
                    }
                  ]
                }
              ]
            }
            // Add additional cards here, following the same structure
          ]
        }
      ]
    }
  }'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUTTON_INDEX>`  *Integer* | **Required.**  Zero-indexed order in which button appears at the bottom of the template message. `0` indicates the first button, `1` indicates second button, etc.  Note that if any buttons use variables, the type and order of buttons must match the type and order defined on the template, so you can’t use the index values to arrange the order of the buttons in the sent template.  For example, if the template defines a phone number button first (which equates to index `0`) and a URL button that supports a single variable second (which equates to index `1`), if you attempt to send the template with the URL button index set to `0` , the API would return an error (“Parameter value for URL was expected but was not found”) because it’s expecting a button object with an index of `1` to be present in the post body payload. | `0` |
| `<CARD_BODY_VARIABLE>`  *Object* | **Required if the template card body text uses variables, otherwise omit.**  Object describing a card body variable. If the template uses multiple variables, you must define an object for each variable.  Supports `text`, `currency`, and `date_time` types. See [Messages Parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).  There is no maximum character limit on this value, but does count against the card body text limit of 160 characters. | ``` { "type":"text", "text": "Pablo" } ``` |
| `<CARD_INDEX>`  *Integer* | **Required.**  Zero-indexed order in which card should appear within the card carousel. `0` indicates first card, `1` indicates second card, etc. | `0` |
| `<MESSAGE_BODY_TEXT_VARIABLE>`  *Object* | **Required if template message body text uses variables, otherwise omit.**  Object describing a message variable. If the template uses multiple variables, you must define an object for each variable.  Supports `text`, `currency`, and `date_time` types. See [Messages Parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).  There is no maximum character limit on this value, but it does count against the message body text limit of 1024 characters. | ``` { "type":"text", "text": "Pablo" } ``` |
| `<MESSAGE_HEADER_ASSET_ID>`  *String* | **Required.**  Header asset’s uploaded media asset ID. Use the [**POST /<BUSINESS\_PHONE\_NUMBER\_ID>/media**](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) endpoint to generate an asset ID. | `1558081531584829` |
| `<MESSAGE_HEADER_FORMAT>`  *String* | **Required.**  Indicates header type and a matching property name.  Note that the `<MESSAGE_HEADER_FORMAT>` placeholder appears twice in the post body example above, as it serves as a placeholder for the type property’s value and its matching property name.  Value can be `image` or `video`. | `image` |
| `<QUICK_REPLY_BUTTON_PAYLOAD>`  *String* | **Optional.**  Value to be included in messages webhooks (`messages.button.payload`) when the button is tapped. | `more-aloes` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `carousel_template_media_cards_v1` |
| `<URL_BUTTON_URL_VARIABLE>`  *String* | **Required if the URL button URL uses a variable.**  URL button variable value. | `blue-elf` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

This example request sends a media card carousel template named `carousel_template_media_cards_v1`. It supplies three body text variables (which the template requires) and contents for three cards (which the template also requires). For each card, the request supplies an image asset ID, a quick-reply button payload (to be included in webhooks when the button is tapped), and a text string to be injected into the URL mapped to the card’s URL button (which is defined on the template).

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "carousel_template_media_cards_v1",
    "language": {
      "code": "en_US"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "Pablo"
          },
          {
            "type": "text",
            "text": "20%"
          },
          {
            "type": "text",
            "text": "20OFF"
          }
        ]
      },
      {
        "type": "carousel",
        "cards": [
          {
            "card_index": 0,
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "image",
                    "image": {
                      "id": "1558081531584829"
                    }
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "quick_reply",
                "index": "0",
                "parameters": [
                  {
                    "type": "payload",
                    "payload": "more-aloes"
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "url",
                "index": "1",
                "parameters": [
                  {
                    "type": "text",
                    "text": "blue-elf"
                  }
                ]
              }
            ]
          },
          {
            "card_index": 1,
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "image",
                    "image": {
                      "id": "861236878885705"
                    }
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "quick_reply",
                "index": "0",
                "parameters": [
                  {
                    "type": "payload",
                    "payload": "more-crassulas"
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "url",
                "index": "1",
                "parameters": [
                  {
                    "type": "text",
                    "text": "buddhas-temple"
                  }
                ]
              }
            ]
          },
          {
            "card_index": 2,
            "components": [
              {
                "type": "header",
                "parameters": [
                  {
                    "type": "image",
                    "image": {
                      "id": "1587064918516321"
                    }
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "quick_reply",
                "index": "0",
                "parameters": [
                  {
                    "type": "payload",
                    "payload": "more-echeverias"
                  }
                ]
              },
              {
                "type": "button",
                "sub_type": "url",
                "index": "1",
                "parameters": [
                  {
                    "type": "text",
                    "text": "black-prince"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}'
```
