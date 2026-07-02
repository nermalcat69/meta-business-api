---
title: "Product card carousel templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/single-product-messages
---

# Product card carousel templates

Updated: Jun 18, 2026

Product card carousel templates allow you to send a single text message accompanied by a set of up to 10 product cards in a horizontally scrollable view:

![WhatsApp Product Card Carousel message with body text and a scrollable product card showing Black Prince Echeveria, $9.99, and a View button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/456451243_832660229062364_6760679807399209749_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ItcNZ4ccvogQ7kNvwG8IGk4&_nc_oc=AdpCeWwbN_E21pUnSe_lnwnlkIZWfKoDje3SioZZcjFGTu5sawyVcTnHICcdp6_iYchxOXPLG9Ft_V2WsFG4icBH&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=PDybkLcpSVAuX67x8OdHPw&_nc_ss=7b2a8&oh=00_AQDuK0JdwJDY718KG2oGaEoiWWKoi_liZrQfoo7I7KJNFg&oe=6A6071E3)

When a WhatsApp user taps the **View** button, they can view more information about the product, add the product to a shopping cart, and place an order, all without leaving the WhatsApp client experience. If instead you prefer to send the user to your website when they click the button, see [Media Card Carousel Templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/media-card-carousel-templates).

## Product cards

Carousel templates support up to 10 product cards, composed of message body text, a product image, product title, product price, and a single View button or URL button. All cards defined on a template must have the same components.

![Product card carousel diagram labeling message body text, product image, product title, product price, and View button across three succulent product cards](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/456183425_819329683713319_8287896812760303277_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=A8iciGilpOIQ7kNvwFKNH8y&_nc_oc=AdpNiNgcxJPRIvR_qlpiBnzWD7PnivmMhaGHSaUJYCXmPZprvVa_Qfu9d2wtufYTFox2IGe1XIt65yQZP8OB15uk&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=PDybkLcpSVAuX67x8OdHPw&_nc_ss=7b2a8&oh=00_AQBf6SiIjJWizfdfM710KOih03NnESwc_vT7Gg6QdL7_RQ&oe=6A6043FA)

## View buttons

When a WhatsApp user taps the button, the product details view appears, displaying product information pulled from your product catalog.

![Product details view for Black Prince Echeveria, $9.99, with description, Message business, and Add to order request buttons](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/456536571_1403706086934453_4366317090049712342_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=kIGr_PgiejcQ7kNvwGZdkHm&_nc_oc=Adr5Zo3BFt5bfV6IM1qmy5qGc5FwkTtIuSDu90X-xIAfUHlM8Yz0N3HsieDCEii9anvCOnD-KGFvqKtZbGCx9uIK&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=PDybkLcpSVAuX67x8OdHPw&_nc_ss=7b2a8&oh=00_AQAyakE6HW2-k1UaHl1xRONYBSmo1H1WJOykN2zfEY9BaA&oe=6A604A7A)

Users can then add the product to a cart and place an order.

![Your cart view with 1 item, Black Prince Echeveria at $9.99, an estimated total of $9.99, and a Place order button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/456294794_1915042982315160_3191620650033958999_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=67pfS28PKZ0Q7kNvwEm407Z&_nc_oc=AdoEQE_USMKY-kTFD1qRNdAbx1-_mZrMutR76PDMWN6ZiIOXdTEhv137WEaV5JWVsCec709U-_fi0E8wTfQH-qQd&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=PDybkLcpSVAuX67x8OdHPw&_nc_ss=7b2a8&oh=00_AQBhLq6gt6MkKRh73uMq9arzGtXrc6NiE4V6-5e4CAGBuQ&oe=6A6042AE)

When a user submits the cart, a [webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/single-product-messages#webhooks) will be triggered describing the order, and an order confirmation message will appear in the message thread.

![WhatsApp message thread order confirmation reading Order via catalog, 1 item, $9.99 estimated total, with a View details button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/456482022_473045605708419_6165153125141611284_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fb9rR9yJxcUQ7kNvwE2n4mz&_nc_oc=Ado4MZe0AwMqMpjJTCWyGi7RaQVrhAvQ3UqGgeISN2foDLrDEJMs80jLvaNoItZgoYGpqLfW5Of2vaEAlKybzCIO&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=PDybkLcpSVAuX67x8OdHPw&_nc_ss=7b2a8&oh=00_AQCgmMMBucVzb6kHZMM1MfjCFujiXrkDH6OOlCEP7_aypw&oe=6A6058A1)

Users who have placed an order can see the contents of the order by tapping the **View details** button.

![Your sent cart view with 1 item, Black Prince Echeveria, $9.99, Quantity 1, and an estimated total of $9.99](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/456576172_505851605146576_6951890413402171834_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-bfQivzynqQQ7kNvwFXjHvE&_nc_oc=Ado7e5xFyR4HMWY8OgJ0AU2hmWqWb2iRL-2eVM-I3v7CI2H2tmT7PPTiif5gGpso50fUiE39qGfCdh8gLeobBPAL&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=PDybkLcpSVAuX67x8OdHPw&_nc_ss=7b2a8&oh=00_AQC61KBLN7EpjBwd4_yZJVby4KQsDCwjSeTJNeti2op7Nw&oe=6A6065C1)

## URL buttons

To send users to your website, use **URL** buttons instead of **View** buttons. When a WhatsApp user taps a URL button to buy a product, the URL mapped to the button is loaded in the device’s default web browser, which takes the user out of the WhatsApp client experience. URL button flows can be useful when you want to load the product in your mobile checkout page where users can add promo codes and find related products.

With URL button flows, order placement happens outside of the WhatsApp client, so WhatsApp does not trigger order webhooks for URL-button flows.

## Catalogs

To use product card carousel templates, you must have an e-commerce product catalog, with inventory, connected to your WhatsApp Business account. See the Cloud API [Commerce](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/catalogs-overview) guide to learn more about connecting a catalog to your account.

## Webhooks

If you send a carousel template composed of product cards that use a **View** button, when a customer adds one or more products to their cart and submits an order, an [order messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/order) webhook is triggered, describing the order.

## Creating product card carousel templates

Use the [**Message Templates API**](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create a product card carousel template.

### Request syntax

Define only two product cards when you create the template. An approved template with two product cards can be used to send up to 10 cards in a template message.

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates" \
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
                "format": "product"
              },
              {
                "type": "buttons",
                "buttons": [
                  {
                    "type": "spm",
                    "text": "View"
                  }
                  // OR, for a URL button, use the following instead:
                  // {
                  //   "type": "url",
                  //   "text": "<URL_BUTTON_LABEL_TEXT>",
                  //   "url": "<URL_BUTTON_URL>",
                  //   "example": [
                  //     "<URL_BUTTON_URL_VARIABLE_EXAMPLE>"
                  //   ]
                  // }
                ]
              }
            ]
          }
          // Add a second product card here, following the same structure as above
        ]
      }
    ]
  }'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<MESSAGE_BODY_TEXT>`  *String* | **Required.**  Message body text. Supports variables.  Maximum 1024 characters. | `Rare succulents for sale! {{1}}, add these unique plants to your collection.` |
| `<MESSAGE_BODY_TEXT_VARIABLE_EXAMPLE>`  *String* | **Required if message body text string uses variables.**  Message body text example variable string(s). Number of strings must match the number of variable placeholders in the message body text string.  If message body text uses a single variable, `body_text` value can be a string, otherwise it must be an array containing an array of strings. | `Pablo` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `carousel_template_product_cards_v1` |
| `<URL_BUTTON_LABEL_TEXT>`  *String* | **Required if using a URL button.**  URL button label text.  25 characters maximum. | `Buy now` |
| `<URL_BUTTON_URL>`  *String* | **Required if using a URL button.**  URL to be loaded in the device’s default web browser when the WhatsApp user taps the button.  Supports 1 variable. Variable placeholder must be appended to the end of the URL string.  Maximum 2000 characters. | `https://www.luckyshrub.com/rare-succulents/{{1}}` |
| `<URL_BUTTON_URL_VARIABLE_EXAMPLE>`  *String* | **Required if URL button URL uses a variable.**  URL button URL example variable string.  Maximum 2000 characters. | `BUDDHA` |

### Example request

This example request creates a product card carousel template with a message body that uses a single variable and two product cards. Once approved, it can be used to send up to 10 product cards in a template message.

```
curl 'https://graph.facebook.com/v25.0/161311403722088/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "carousel_template_product_cards_v1",
  "language": "en_US",
  "category": "marketing",
  "components": [
    {
      "type": "body",
      "text": "Rare succulents for sale! {{1}}, add these unique plants to your collection. All three of these rare succulents are available for purchase on our website, and they come with a 100% satisfaction guarantee. Whether you're a seasoned succulent enthusiast or just starting your plant collection, these rare succulents are sure to impress. Shop now and add some unique and beautiful plants to your collection!",
      "example": {
        "body_text": "Pablo"
      }
    },
    {
      "type": "carousel",
      "cards": [
        {
          "components": [
            {
              "type": "header",
              "format": "product"
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
        },
        {
          "components": [
            {
              "type": "header",
              "format": "product"
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
        }
      ]
    }
  ]
}'
```

## Sending product card carousel templates

### Request syntax

Use the [**Messages API**](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an approved product card carousel template to a WhatsApp user.

```
curl -X POST "https://graph.facebook.com/v23.0/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
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
                      "type": "product",
                      "product": {
                        "product_retailer_id": "<PRODUCT_ID_1>",
                        "catalog_id": "<CATALOG_ID>"
                      }
                    }
                  ]
                }
                // Add additional components (e.g., buttons) here if your template defines them
              ]
            }
            // Add additional cards here, incrementing card_index for each
          ]
        }
      ]
    }
  }'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<CARD_INDEX>`  *Integer* | **Required.**  Zero-indexed order in which card should appear within the card carousel. `0` indicates first card, `1` indicates second card, etc. | `0` |
| `<CATALOG_ID>`  *String* | **Required.**  ID of [connected ecommerce catalog⁠](https://www.facebook.com/business/help/158662536425974) containing the product. | `194836987003835` |
| `<MESSAGE_BODY_TEXT_VARIABLE>`  *Object* | **Required if template message body text uses variables, otherwise omit.**  Object describing a message variable. If the template uses multiple variables, you must define an object for each variable.  Supports `text`, `currency`, and `date_time` types. See [Messages Parameters](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#parameter-object).  There is no maximum character limit on this value, but it does count against the message body text limit of 1024 characters. | ``` { "type":"text", "text": "Pablo" } ``` |
| `<PRODUCT_ID>`  *String* | **Required.**  Product ID. | `vrpj01fvwp` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `carousel_template_media_cards_v1` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

This example request sends an approved template named `carousel_template_product_cards_v1`. It supplies a single body text variable value (which the template requires) and three product cards. Each card identifies where it should appear in the carousel (card\_index), as well as the product ID and catalog ID where the card’s product details (such as title, description, and price) can be found.

```
curl 'https://graph.facebook.com/v25.0/179776755229976/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "carousel_template_product_cards_v1",
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
                    "type": "product",
                    "product": {
                      "product_retailer_id": "vrpj01fvwp",
                      "catalog_id": "194836987003835"
                    }
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
                    "type": "product",
                    "product": {
                      "product_retailer_id": "va2l5ioeat",
                      "catalog_id": "194836987003835"
                    }
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
                    "type": "product",
                    "product": {
                      "product_retailer_id": "sqpjv0mgde",
                      "catalog_id": "194836987003835"
                    }
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
