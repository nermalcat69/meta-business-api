---
title: "Product Template for Instagram Messaging"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/quick-replies
---

# Product Template for Instagram Messaging

Updated: Jun 30, 2026

Send Instagram messages with product information that you have uploaded to [your product catalog⁠](https://www.facebook.com/business/help/1275400645914358) using the product template. The product template automatically pulls product details (image, title, price) from the product catalog.

You can create messages that have one product or a horizontally scrollable carousel of products using the product template.

![Single product card showing a travel bag photo with title 'Travel Bag' and price 49.90](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/641352279_1445181600673823_1203756503381479998_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ykFlbft_PKkQ7kNvwF4hPk-&_nc_oc=AdpWPj6IUZsOvNAW_YoCn1kf2HhwvcZHkrKPRgsHfT6BLNJ6tQ2lciP5ZnVB1PRcGTvSmZTxNoQ9a-TRooIS37wT&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=v9BjNUmLPRRlUtTvrjDLrw&_nc_ss=7b289&oh=00_AQA_wkPYve3jaqe9OQIO_Gwz_w4f02oYA0y4UIQ1N8aMbA&oe=6A605A1C)![Scrollable carousel of product cards with photos, titles, and a 'Schedule now' button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/653709911_1459945609197422_5713478735784336329_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=F2206Id-qA8Q7kNvwFpHnTB&_nc_oc=AdqVp72_C2rwPQ-eahaVIqjE59d9N13Mf4L0EU-Lv_Og3GdsJplgFfw9Rhu68BSnsc_1AOGM3X9FxdRrEFJstJfF&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=v9BjNUmLPRRlUtTvrjDLrw&_nc_ss=7b289&oh=00_AQCFgLYbVE4gT-8nbQ0bZaUAtp4SdT9aWoqsy9oJgIQP6w&oe=6A606DB3)

## Before you start

You will need:

* The ID, or IDs, for the product from your Facebook catalog – You can get IDs from [Catalog API](https://developers.facebook.com/documentation/ads-commerce/catalog) or [Commerce Manager⁠](https://www.facebook.com/business/help/2371372636254534).
* A Page Access Token from the Page that owns the products in the catalog
* [Meta Webhooks for Instagram Messaging subscriptions](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks)
* The ID for your Instagram Professional account
* The ID for the Page linked to your Instagram Professional account
* The Instagram Scoped ID for the person to whom you are sending the message

## Send a product message

To send a product message to a person, send a `POST` request to the `/PAGE-ID/messages` endpoint with the `recipient.id` property set to the Instagram-scoped ID of the person receiving the message. Include the `type` and `payload` properties in the `message.attachment` object. Set `type` to `template` and set the `payload.template_type` property to `product` and `payload.elements` to a list of product ID key-value pairs.

```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"INSTAGRAM-SCOPED-ID"  
  },  
  "message":{  
    "attachment":{  
      "type":"template",  
      "payload": {  
        "template_type": "product",  
        "elements": [  
          {  
            "id": "PRODUCT-ID"  
          }  
        ]  
      }  
    }  
  }  
}' "https://graph.facebook.com/LATEST-GRAPH-API-VERSION/PAGE-ID/messages?access_token=PAGE-ACCESS-TOKEN"
```

### Send a carousel

To send a product carousel, add more product key-value pairs to the `payload.elements` property. You can include up to 10 products in your request.

```
...  
      "payload": {  
        "template_type": "product",  
        "elements": [  
          {  
            "id": "PRODUCT-ID-1"  
          },  
          {  
            "id": "PRODUCT-ID-2"  
          },  
          {  
            "id": "PRODUCT-ID-3"  
          }  
        ]  
      }  
...
```

On success your app will receive the following JSON object with the recipient ID and the message ID.

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```

## Send an opt-in request

To send an opt-in request to a person to receive recurring marketing messages, send a `POST` request to `/PAGE-ID/messages` endpoint with the `recipient.id` property set to the Instagram-scoped ID of the person receiving the message. In the `message` `attachment.payload` property set `template_type` to `notification_messages`. In the `payload.elements` property include the `image_url`, `title`, `payload`, `notification_messages_frequency`, and `notification_messages_cta_text`.

```
curl -X POST -H "Content-Type:application/json" -d '{  
  "recipient": {  
    "id": "INSTAGRAM-SCOPED-ID"  
  },  
  "message": {  
    "attachment": {  
      "type": "template",  
      "payload": {  
        "template_type": "notification_messages",  
        "elements": [  
          {  
            "image_url": "IMAGE-URL",  
            "title": "TEXT-TO-DISPLAY",  
            "payload": "INFORMATION-ABOUT-THIS-MESSAGE",  
            "notification_messages_frequency": "DAILY",  
            "notification_messages_cta_text": "GET_UPDATES"  
          }  
        ]  
      }  
    }  
  }  
}' "https://graph.intern.facebook.com/LATEST-GRAPH-API-VERSION/PAGE-ID/messages?access_token=PAGE-ACCESS-TOKEN"
```

### Properties

| Property | Value |
| --- | --- |
| `image_url` *string* | The URL for the image to display in the template |
| `notification_messages_cta_text` *enum { `ALLOW`, `FREQUENCY`, `GET`, `GET_UPDATES`, `OPT_IN`, `SIGN_UP` }* | Set the call-to-action button text using one of the following values:   * `ALLOW` – set opt-in message button text to **Allow messages** * `FREQUENCY` – set opt-in message button text to **Get daily messages** * `GET` – set opt-in message button text to **Get messages** * `GET_UPDATES` – set opt-in message button text to **Get updates**, this is also default if `notification_messages_cta_text` is not set * `OPT_IN` – set opt-in message button text to **Opt in to messages** * `SIGN_UP` – set opt-in message button text to **Sign up for messages** |
| `notification_messages_frequency` *enum { `DAILY`, `WEEKLY`, `MONTHLY` }* | Message frequency for this recurring notification opt-in request.   * `DAILY` – Opt in to receive one notification per 24 hour period for 6 months * `WEEKLY` – Opt in to receive one notification per 7 day period for 9 months * `MONTHLY` – Opt in to receive one notification per 1 month period for 12 months |
| `payload` *string* | The type of recurring notification, such as promotional messaging or product release messaging, for this recurring notification opt-in request |
| `title` *string* | The title to display in the template, cannot exceed 65 characters. If no value is assigned, the value defaults to "Updates and promotions" |

## Next steps

Now that people have opted in to receive recurring marketing messages, learn how to [send your marketing messages](https://developers.facebook.com/docs/messenger-platform/instagram/features/recurring-notifications#message-attachment-payload).

## See also

* [Common Error Codes Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes)
* [Message Attachment Payload Reference](https://developers.facebook.com/docs/messenger-platform/instagram/features/recurring-notifications#message-attachment-payload)
