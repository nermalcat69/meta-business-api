---
title: "Image grid template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates/instant-form-template
---

# Image grid template

Updated: Jun 30, 2026

The image grid template displays a collection of 2 to 6 images arranged in a grid within a single message. Each image can have its own tap action that opens a URL or sends a postback to your webhook, and you can add an optional title, subtitle, and up to three buttons below the grid.

## Request URI

```
https://graph.facebook.com/v25.0/me/messages?access_token={PAGE_ACCESS_TOKEN}
```

## Payload properties

| Property | Type | Description |
| --- | --- | --- |
| `template_type` | String | Must be `image_grid`. |
| `elements` | Array | An array containing exactly one `element` object that describes the grid. Maximum of 1 element. |

### `element` properties

| Property | Type | Description |
| --- | --- | --- |
| `images` | Array | An array of `image` objects to display in the grid. Minimum of 2, maximum of 6. |
| `title` | String | *Optional.* The title to display with the grid. 45 character limit. |
| `subtitle` | String | *Optional.* The subtitle to display with the grid. 80 character limit. |
| `buttons` | Array | *Optional.* An array of buttons to append below the grid. Only [URL](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/url) and [postback](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/postback) buttons are supported. Maximum of 3 buttons. |

### `image` properties

| Property | Type | Description |
| --- | --- | --- |
| `url` | String | *Required.* The URL of the image to display. |
| `is_hero_image` | Boolean | *Optional.* Set to `true` to feature this image more prominently in the grid layout. At most one image in the grid can have `is_hero_image` set to `true`; sending more than one fails with an error. Defaults to `false`. |
| `action` | Object | *Optional.* The action executed when this image is tapped. An image can have at most one action. See [`action` properties](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/templates/instant-form-template#action-properties). |

### `action` properties

An image action opens a URL or sends a postback. Set `type` to `web_url` or `postback`, then include the fields required for that type.

| Property | Type | Description |
| --- | --- | --- |
| `type` | String | The action type. Must be `web_url` or `postback`. |
| `url` | String | The URL to open when the image is tapped. Required when `type` is `web_url`. Not allowed when `type` is `postback`. |
| `payload` | String | The payload sent to your webhook in a [`messaging_postbacks`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_postbacks) event when the image is tapped. Required when `type` is `postback`. Not allowed when `type` is `web_url`. |
| `text` | String | The text shown in the conversation as the recipient's reply when the image is tapped. Required when `type` is `postback`. Not allowed when `type` is `web_url`. |

## Sample request

The following request sends a grid of four images. The first image is featured as the hero image and opens a URL when tapped, the second sends a postback, and the remaining images have no action.

```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient": {  
    "id": "<PSID>"  
  },  
  "message": {  
    "attachment": {  
      "type": "template",  
      "payload": {  
        "template_type": "image_grid",  
        "elements": [  
          {  
            "title": "Spring collection",  
            "subtitle": "Tap an item to learn more",  
            "images": [  
              {  
                "url": "https://www.example.com/images/jacket.jpg",  
                "is_hero_image": true,  
                "action": {  
                  "type": "web_url",  
                  "url": "https://www.example.com/products/jacket"  
                }  
              },  
              {  
                "url": "https://www.example.com/images/boots.jpg",  
                "action": {  
                  "type": "postback",  
                  "payload": "PRODUCT_BOOTS",  
                  "text": "Tell me about the hiking boots"  
                }  
              },  
              {  
                "url": "https://www.example.com/images/hat.jpg"  
              },  
              {  
                "url": "https://www.example.com/images/gloves.jpg"  
              }  
            ],  
            "buttons": [  
              {  
                "type": "web_url",  
                "url": "https://www.example.com/shop",  
                "title": "View all"  
              }  
            ]  
          }  
        ]  
      }  
    }  
  }  
}' "https://graph.facebook.com/<API_VERSION>/<PAGE_ID>/messages?access_token=<PAGE_ACCESS_TOKEN>"
```

## Sample response

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```

## Per-image actions

Each image in the grid can have a single tap `action`:

* **`web_url`** — Opens the specified `url` in the Messenger webview when the image is tapped. See the [URL button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/url) reference for related behavior.
* **`postback`** — Sends the `payload` to your webhook in a [`messaging_postbacks`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_postbacks) event when the image is tapped, and posts `text` into the conversation as the recipient's reply. See the [Postback button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/postback) reference for related behavior.

Images without an `action` are not tappable.

## Best practices

* Use the image grid template to present a set of related images, such as product variants, gallery photos, or a small catalog, in a single message.
* Provide 2 to 6 images. The grid layout adapts to the number of images you send.
* Use `is_hero_image` to draw attention to your most important image.
* Add a per-image `action` when tapping different images should do different things — for example, each product image opening its own product page (`web_url`), or each image sending a different reply to your webhook so you can respond (`postback`).
* Keep text short. The grid's `title` is limited to 45 characters and its `subtitle` to 80 characters.
