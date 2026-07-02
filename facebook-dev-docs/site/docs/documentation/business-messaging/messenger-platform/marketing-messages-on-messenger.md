---
title: "Quick replies"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger
---

# Quick replies

Updated: Jun 17, 2026

Quick replies provide a way to present a set of up to 13 buttons in-conversation that contain a title and optional image, and appear prominently above the composer. You can also use quick replies to request a person's location, email address, and phone number.

![Messenger conversation showing quick reply buttons above the composer](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/653704888_1459945669197416_1856728963803525854_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sCJ-CLbf4_cQ7kNvwH4lagl&_nc_oc=AdoBsZimZaXEmTsjuc2xqKnSJvUnqN4XEPc_6BrqdxlaChN_vB9DpgWQtmcDEiTELCGN0z_yVPbSwW37k_ljduNK&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=xnHKMkf7qmr38HoBia9O6Q&_nc_ss=7b289&oh=00_AQBqXwHzdblQJnUE2WfVbbLMYTLelp3OObWq-j1Wi58eTw&oe=6A606A9E)

When a quick reply is tapped, the buttons are dismissed, and the title of the tapped button is posted to the conversation as a message. A `messages` event is sent to your webhook that contains the button title and an optional payload.

## Send quick replies

To send a quick reply, add the `quick_replies` array to a text message, and include objects that define up to 13 quick reply buttons.

The following quick reply types are supported:

* [Text](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger#text)
* [Phone number](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger#phone)
* [Email](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger#email)

```
curl -X POST -H "Content-Type: application/json" -d '{
  "recipient":{
    "id":"{PSID}"
  },
  "messaging_type": "RESPONSE",
  "message":{
    "text": "Pick a color:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Red",
        "payload":"{POSTBACK_PAYLOAD}",
        "image_url":"http://example.com/img/red.png"
      },{
        "content_type":"text",
        "title":"Green",
        "payload":"{POSTBACK_PAYLOAD}",
        "image_url":"http://example.com/img/green.png"
      }
    ]
  }
  }' "https://graph.facebook.com/v25.0/me/messages?access_token={PAGE_ACCESS_TOKEN}"
```

## Message properties

| Property | Type | Description |
| --- | --- | --- |
| `text` | String | Non-empty message text to send with the quick replies. `text` or `attachment` must be set. |
| `attachment` | Object | An attachment to send with the quick replies. `text` or `attachment` must be set. |
| `quick_replies` | Array | An array of `quick_reply` objects that describe the quick reply buttons to send. A maximum of 13 quick replies are supported. |

### `quick_reply` object properties

| Property | Type | Description |
| --- | --- | --- |
| `content_type` | String | Must be one of: `text` (sends a text button), `user_phone_number` (sends a button allowing recipient to send the phone number associated with their account), `user_email` (sends a button allowing recipient to send the email associated with their account). |
| `title` | String | Required if `content_type` is `text`. The text to display on the quick reply button. 20 character limit. |
| `payload` | String or Number | Required if `content_type` is `text`. Custom data sent back to you via the `messaging_postbacks` webhook event. 1000 character limit. May be set to an empty string if `image_url` is set. |
| `image_url` | String | *Optional.* URL of image to display on the quick reply button for text quick replies. Image should be a minimum of 24px x 24px. Larger images are automatically cropped and resized. Required if `title` is an empty string. |

## Text quick reply

Text quick replies may also be sent with an optional image that appears as an icon beside the title. If the `content_type` for a quick reply is specified as `text`, you must specify a non-empty `title`.

### Syntax

```
{  
  "content_type": "text",  
  "title": "<BUTTON_TEXT>",  
  "image_url": "http://example.com/img/red.png",  
  "payload": "<DEVELOPER_DEFINED_PAYLOAD>"  
}
```

### Webhook event

When a quick reply is tapped, a text message is sent to your webhook [Message Received Callback](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messages).

The `text` property of the event corresponds to the title of the quick reply. The message object also contains a field named `quick_reply` containing the `payload` data on the quick reply.

```
{
  "object": "page",
  "entry": [
    {
      "id": "<PAGE_ID>",
      "time": 1502905976963,
      "messaging": [
        {
          "sender": {
            "id": "1254459154682919"
          },
          "recipient": {
            "id": "682498171943165"
          },
          "timestamp": 1502905976377,
          "message": {
            "quick_reply": {
              "payload": "DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
            },
            "mid": "m_AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P",
            "text": "Green"
          }
        }
      ]
    }
  ]
}
```

## User phone number quick reply

The user phone number quick reply allows you to ask a user for their phone number. When sent, the Messenger Platform automatically pre-fills the displayed quick reply with the phone number from the user's profile information.

If the user's profile does not have a phone number, the quick reply is not shown. You do not receive the phone number until the user taps the quick reply. Choosing the quick reply transmits the information once and does not constitute permission to access the information in the future.

### Syntax

```
{  
  "content_type": "user_phone_number"  
}
```

### Webhook event

When the user taps the quick reply, the phone number is passed in the `payload` attribute of the `messages` webhook event.

```
{  
  "object": "page",  
  "entry": [  
    {  
      "id": "<PAGE_ID>",  
      "time": 1502905976963,  
      "messaging": [  
        {  
          "sender": {  
            "id": "<SENDER_PSID>"  
          },  
          "recipient": {  
            "id": "<PAGE_ID>"  
          },  
          "timestamp": 1502905976377,  
          "message": {  
            "quick_reply": {  
              "payload": "<PHONE_NUMBER>"  
            },  
            "mid": "<MESSAGE_ID>",  
            "text": "<PHONE_NUMBER>"  
          }  
        }  
      ]  
    }  
  ]  
}
```

## User email quick reply

The user email quick reply allows you to ask a user for their email. When sent, the Messenger Platform automatically pre-fills the displayed quick reply with the email from the user's profile information.

If the user's profile does not have an email address, the quick reply is not shown. The bot does not receive the email until the user taps the quick reply. Choosing the quick reply transmits the information once and does not constitute permission to access the information in the future.

### Syntax

```
{  
  "content_type": "user_email"  
}
```

### Webhook event

When the user taps the quick reply, the email address is passed in the `payload` attribute of the `messages` webhook event.

```
{  
  "object": "page",  
  "entry": [  
    {  
      "id": "<PAGE_ID>",  
      "time": 1502905976963,  
      "messaging": [  
        {  
          "sender": {  
            "id": "<SENDER_PSID>"  
          },  
          "recipient": {  
            "id": "<PAGE_ID>"  
          },  
          "timestamp": 1502905976377,  
          "message": {  
            "quick_reply": {  
              "payload": "<EMAIL_ADDRESS>"  
            },  
            "mid": "<MESSAGE_ID>",  
            "text": "<EMAIL_ADDRESS>"  
          }  
        }  
      ]  
    }  
  ]  
}
```

## Best practices

* Use quick replies to prompt for specific next steps.
* Be brief — long quick replies are truncated.
* Do not use for actions you want to be permanent. Quick replies disappear after the next message.

## Learn more

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
