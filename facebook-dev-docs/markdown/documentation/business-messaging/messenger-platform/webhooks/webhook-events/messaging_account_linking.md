---
title: "messages Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_account_linking
---

# messages Webhook Event Reference

Updated: Jun 1, 2026

This callback will occur when a message has been sent to your Page. Messages are always sent in order. You may receive text messages or messages with attachments.

Attachment types `image`, `audio`, `video`, `file`, `sticker`, `reel`, `ig_reel`, `post`, `ig_post` and `appointment_booking` are the main supported types. You may also receive `fallback` attachments. A common example of a ‘fallback’ is when a user shares a URL with a Page, an attachment is created based on [link sharing](https://developers.facebook.com/docs/sharing/web). For unsupported shares made by users to your Page a `fallback` with no payload might be sent.

> **Sticker attachment type transition (until August 30, 2026):** Sticker messages in webhooks now include a new `sticker` attachment type with `sticker_id` metadata. During the 90-day transition period, both the `sticker` and `image` attachment types are present in the payload. After August 30, 2026, only the `sticker` attachment type will be sent. Update your webhook handlers to recognize the `sticker` attachment type before this date. The same change applies to [message echoes](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/message-echoes).

You can subscribe to this callback by selecting `message` when [setting up](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks#setup) your webhook.

## Examples

### Text message

```
{
  "sender":{
    "id":"<PSID>"
  },
  "recipient":{
    "id":"<PAGE_ID>"
  },
  "timestamp":1458692752478,
  "message":{
    "mid":"mid.1457764197618:41d102a3e1ae206a38",
    "text":"hello, world!",
    "quick_reply": {
      "payload": "<DEVELOPER_DEFINED_PAYLOAD>"
    }
  }
}
```

### Reply message

```
{
  "sender":{
    "id":"<PSID>"
  },
  "recipient":{
    "id":"<PAGE_ID>"
  },
  "timestamp":1458692752478,
  "message":{
    "mid":"m_1457764197618:41d102a3e1ae206a38",
    "text":"hello, world!",
    "reply_to": {
      "mid":"m_1fTq8oLumEyIp3Q2MR-aY7IfLZDamVrALniheU",
      "is_self_reply": false
    }
  }
}
```

### Message with attachment

```
{
  "id": "682498302938465",
  "time": 1518479195594,
  "messaging": [
    {
      "sender": {
        "id": "<PSID>"
      },
      "recipient": {
        "id": "<PAGE_ID>"
      },
      "timestamp": 1518479195308,
      "message": {
        "mid": "mid.$cAAJdkrCd2ORnva8ErFhjGm0X_Q_c",
        "attachments": [
          {
  "type": "<image|video|audio|file|sticker|reel|ig_reel>",
            "payload": {
              "url": "<ATTACHMENT_URL>"
            }
          }
        ]
      }
    }
  ]
}
```

### Message with sticker attachment

```
{
  "id": "682498302938465",
  "time": 1518479195594,
  "messaging": [
    {
      "sender": {
        "id": "<PSID>"
      },
      "recipient": {
        "id": "<PAGE_ID>"
      },
      "timestamp": 1518479195308,
      "message": {
        "mid": "mid.$cAAJdkrCd2ORnva8ErFhjGm0X_Q_c",
        "attachments": [
          {
            "type": "sticker",
            "payload": {
              "url": "<STICKER_URL>",
              "sticker_id": 369239263222822
            }
          }
        ]
      }
    }
  ]
}
```

### Message with appointment booking

```
{
  "id": "682498302938465",
  "time": 1518479195594,
  "messaging": [
    {
      "sender": {
        "id": "<PSID>"
      },
      "recipient": {
        "id": "<PAGE_ID>"
      },
      "timestamp": 1518479195308,
      "message": {
        "mid": "mid.$cAAJdkrCd2ORnva8ErFhjGm0X_Q_c",
        "attachments": [
          {
            "type": "appointment_booking",
            "payload": {
              "booking_id": "<BOOKING_ID>"
              "status": ""<requested|confirmed|declined|cancelled>",
              "start_time": 1739612400,
              "end_time": 1739616000,
              "timezone": "America/Los_Angeles"
            }
          }
        ]
      }
    }
  ]
}
```

### Message with post attachment

```
{
  "id": "682498302938465",
  "time": 1518479195594,
  "messaging": [
    {
      "sender": {
        "id": "<PSID>"
      },
      "recipient": {
        "id": "<PAGE_ID>"
      },
      "timestamp": 1518479195308,
      "message": {
        "mid": "mid.$cAAJdkrCd2ORnva8ErFhjGm0X_Q_c",
        "attachments": [
          {
            "type": "<post|ig_post>",
            "payload": {
              "url": "<ATTACHMENT_URL>",
              "title": "<ATTACHMENT_TITLE>",
              "id": <ATTACHMENT_ID>
            }
          }
        ]
      }
    }
  ]
}
```

### Message with product template

This webhook applies to the scenario when user shares products from other threads or sharing flow to the page. This webhook is limited to only products that are owned by the page. App will need to have [`catalog_management`](https://developers.facebook.com/docs/permissions/reference/catalog_management) permission approved to receive product details in webhooks.

```
{
  "id": "682498302938465",
  "time": 1518479195594,
  "messaging": [
    {
      "sender": {
        "id": "<PSID>"
      },
      "recipient": {
        "id": "<PAGE_ID>"
      },
      "timestamp": 1518479195308,
      "message": {
        "mid": "mid.$cAAJdkrCd2ORnva8ErFhjGm0X_Q_c",
        "attachments": [
          {
            "type": "template",
            "payload": {
              "product":{
               "elements":[ // multiple elements for Hscroll
                 {
                   "id":"<PRODUCT_ID>",
                   "retailer_id":"<EXTERNAL_ID>",
                   "image_url":"https://fb.cdn.com/sdsd",
                   "title":"Some product title",
                   "subtitle": "$40",
                 },
                 {...},
               ]
            }
          }
        ]
      }
    }
  ]
}
```

### Message with fallback attachment

Example applicable to `messages` on version +v6.0

```
{
    "object": "page",
    "entry": [
        {
            "id": "<PAGE_ID>",
            "time": 1583173667623,
            "messaging": [
                {
                    "sender": {
                        "id": "<PSID>"
                    },
                    "recipient": {
                        "id": "<PAGE_ID>"
                    },
                    "timestamp": 1583173666767,
                    "message": {
                        "mid": "m_toDnmD...",
                        "text": "This is where I want to go: https:\/\/youtu.be\/bbo_fZAjIhg",
                        "attachments": [
                            {
                                "type": "fallback",
                                "payload": {
                                    "url": "<ATTACHMENT_URL >",
                                    "title": "TAHITI - Heaven on Earth"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
```

### Message from Shops product detail page

```
{
  "sender":{
    "id":"<PSID>"
  },
  "recipient":{
    "id":"<PAGE_ID>"
  },
  "timestamp":1458692752478,
  "message":{
    "mid":"mid.1457764197618:41d102a3e1ae206a38",
    "text":"hello, world!",
    "referral": {
      "product": {
        "id":"<PRODUCT_ID>"
      }
    }
  }
}
```

### Message with Ads referral information

This webhook applies to the scenario when a user clicks on a CTM (Click-to-Messenger) advertisement and sends a message to a Facebook page. In addition to the message details included, the application will receive ads referral information.

#### Requirements

Message with Ads Referral Information requires the application to have page subscriptions to both the `messages` and the `messaging_referrals` fields.

```
```
{  
  "sender":{  
    "id":"<PSID>"  
  },  
  "recipient":{  
    "id":"<PAGE_ID>"  
  },  
  "timestamp":1458692752478,  
  "message":{  
    "mid":"mid.1457764197618:41d102a3e1ae206a38",  
    "text":"hello, world!",  
    "referral": {  
      "ref": "<REF_DATA_IF_SPECIFIED_IN_THE_AD>",  
      "ad_id": "<ID_OF_THE_AD>",  
      "source": "ADS",  
      "type": "OPEN_THREAD",  
      "ads_context_data": {  
        "ad_title": "<TITLE_OF_THE_AD>",  
        "photo_url": "<URL_OF_THE_IMAGE_FROM_AD_THE_USER_IS_INTERESTED_IN>",  
        "video_url": "<THUMBNAIL_URL_OF_THE_VIDEO_FROM_THE_AD>",  
        "post_id": "<ID_OF_THE_POST>",  
        "product_id": "<PRODUCT_ID>",  
        "flow_id": "<ID_OF_THE_PARTNER_APP_WELCOME_MESSAGE_FLOW>"  
      }  
    }  
  }  
}
```
```

For more information about the flow ID, please refer to [Welcome Message Flows](https://developers.facebook.com/documentation/business-messaging/messenger-platform/ads/ads-welcome-message-flows).

### Message with commands

```
```
{  
  "object": "page",  
  "entry": [  
    {  
      "id": "<PAGE_ID>",  
      "time": 1697643211842,  
      "messaging": [  
        {  
          "sender": {  
            "id": "<PSID>"  
          },  
          "recipient": {  
            "id": "<PAGE_ID>"  
          },  
          "timestamp": 1697643027400,  
          "message": {  
            "mid": "m_3vs...",  
            "text": "find flights from SFO to LAX next Thursday",  
            "commands": [  
              {  
                "name": "flights"  
              }  
            ]  
          }  
        }  
      ]  
    }  
  ]  
}
```
```

## Properties

### `sender`

| `sender` Field | Description |
| --- | --- |
| `id` *string* | The Page-scoped ID for the person who sent a message to your business |

### `recipient`

| `recipient` Field | Description |
| --- | --- |
| `id` *string* | The ID for your Facebook Page |

### `message`

| Property | Type | Description |
| --- | --- | --- |
| `mid` | String | Message ID |
| `text` | String | Text of message |
| `quick_reply` | Object | Optional custom data provided by the sending app |
| `reply_to` | Object | Reference to the message id (mid) that this message is replying to |
| `attachments` | Array<[`attachments`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_account_linking#attachments)> | Array containing attachment data |
| `referral` | Object | Referral of the message from Shops product details page. |

### `message.quick_reply`

A `quick_reply` payload is only provided with a text message when the user taps a [Quick Replies](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/quick-replies) button.

| Property | Type | Description |
| --- | --- | --- |
| `payload` | String | Custom data provided by the app |

### `message.reply_to`

| Property | Type | Description |
| --- | --- | --- |
| `mid` | String | Reference to the message ID that this message is replying to |
| `is_self_reply` | Boolean | Indicates whether the message is a self-reply. |

### `message.attachments`

| Property | Type | Description |
| --- | --- | --- |
| `type` | String | `audio`, `file`, `image` (including gif), `sticker`, `video`, `fallback`, `reel`, `ig_reel`, `post`, `ig_post` or `appointment_booking` |
| `payload` | String | [`message.attachments.payload`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_account_linking#payload) |

### `message.attachments.payload`

| Property | Type | Description |
| --- | --- | --- |
| `url` | String | URL of the attachment type. Applicable to attachment type: `audio`, `file`, `image`, `video`, `fallback`, `reel`, `ig_reel`, `post`, `ig_post` |
| `title` | String | Title of the attachment. Applicable to attachment type: `fallback`, `reel`, `ig_reel`, `post` and `ig_post` |
| `sticker_id` | Number | Persistent id of this sticker, for example `369239263222822` references the Like sticker. Applicable to attachment type: `sticker`. During the transition period (until August 30, 2026), also present in attachment type: `image` when a sticker is sent. |
| `reel_video_id` | Number | ID of the video associated with the attached reel. Applicable to attachment type: `reel` and `ig_reel` |
| `id` | Number | ID of the shared post. Applicable to attachment type: `post` and `ig_post` |
| `booking_id` | String | ID of the booking associated with the appointment. Applicable to attachment type: `appointment_booking` |
| `status` | String | Current status of the appointment. Can be `requested`, `confirmed`, `declined`, `cancelled`. Applicable to attachment type: `appointment_booking` |
| `start_time` | Integer | Appointment start time as a Unix timestamp (seconds). Applicable to attachment type: `appointment_booking` |
| `end_time` | Integer | Appointment end time as a Unix timestamp (seconds). Applicable to attachment type: `appointment_booking` |
| `timezone` | String | IANA timezone identifier (e.g., `America/Los_Angeles`). Applicable to attachment type: `appointment_booking` |

### `message.attachments.payload.product.elements`

| Property | Type | Description |
| --- | --- | --- |
| `id` | String | Product ID from [Facebook product catalog](https://developers.facebook.com/documentation/ads-commerce/catalog/overview) |
| `retailer_id` | String | External ID that is associated with the Product. (ex: SKU/ Content ID) |
| `image_url` | String | URL of product |
| `title` | String | Title of product |
| `subtitle` | String | Subtitle of product |

### `message.referral`

`referral` payload is only provided when the user sends a message from the Shops product detail page.

| Property | Type | Description |
| --- | --- | --- |
| `product` | Object | Product information |
| `source` | String | The source of the referral. Supported values: `ADS` (only ads referral supported). |
| `type` | String | The referral type. Currently supports `OPEN_THREAD`. |
| `ref` | String | The optional `ref` attribute set in the referrer. Only alphanumeric characters and `-`, `_`, and `=` are supported. |
| `ad_id` | String | Advertisement ID from Ads Manager. |
| `ads_context_data` | Object | Advertisement context data from Ads Manager. |

### `message.referral.product`

| Property | Type | Description |
| --- | --- | --- |
| `id` | String | Product ID |

### `message.referral.ads_context_data`

| Property | Type | Description |
| --- | --- | --- |
| `ad_title` | String | Title of the ad in Ads Manager. |
| `photo_url` | String | [Optional] URL of the image from the ad. |
| `video_url` | String | [Optional] Thumbnail URL of the video from the ad. |
| `post_id` | String | ID of the ad post in Ads manager. |
| `product_id` | String | [Optional] Product ID from the ad. |

### `message.commands`

| Property | Type | Description |
| --- | --- | --- |
| `name` | String | The name of the command |
