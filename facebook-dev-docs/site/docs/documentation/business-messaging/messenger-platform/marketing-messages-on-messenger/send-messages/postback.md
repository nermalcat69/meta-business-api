---
title: "Quick Replies"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages/postback
---

# Quick Replies

Updated: Nov 19, 2025

Quick replies provide a way to present a set of up to 13 buttons in-conversation that contain a title and optional image, and appear prominently above the composer. You can also use quick replies to request a person's location, email address, and phone number.

![Two Messenger chats with Quick Reply buttons: 'Pick a size' (Small, Medium, Large) and 'Pick a color' (Red, Green)](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/653704888_1459945669197416_1856728963803525854_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=sCJ-CLbf4_cQ7kNvwH4lagl&_nc_oc=AdoBsZimZaXEmTsjuc2xqKnSJvUnqN4XEPc_6BrqdxlaChN_vB9DpgWQtmcDEiTELCGN0z_yVPbSwW37k_ljduNK&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=p-mUGOgkboEw3ZsISsnLFw&_nc_ss=7b289&oh=00_AQCx2iieoSTfbZCl1pJBTBTiA_8AOHmH5pJ5cUMxy5X9Cg&oe=6A606A9E)

When a quick reply is tapped, the buttons are dismissed, and the title of the tapped button is posted to the conversation as a message. A `messages` event will be sent to your webhook that contains the button title and an optional payload.

For a complete list of request properties, see the [Quick Replies Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/buttons/quick-replies).

## Sending Quick Replies

To send a quick reply, add the `quick_replies` array to message, and include objects that define up to 13 quick reply buttons.

The following quick reply types are supported:

* [Text](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages/postback#text)
* [Phone Number](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages/postback#phone)
* [Email](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages/postback#email)

```
{  
  "message_id": "<MESSAGE_ID>",  
  "messenger_delivery_data": {  
    "subscription_token": "<SUBSCRIPTION_TOKEN>"  
  },  
  "message":{  
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
    "attachment":{  
      "type":"template",  
      "payload":{  
        "template_type":"generic",  
        "elements":[  
           {  
            "title":"Welcome!",  
            "image_url":"<IMAGE_URL>",  
            "subtitle":"We have the right hat for everyone.",  
            "buttons":[  
              {  
                "type":"web_url",  
                "url":"<BUTTON_URL>",  
                "title":"View Website"  
              },{  
                "type":"postback",  
                "title":"Start Chatting",  
                "payload":"<PAYLOAD_WEBHOOK>"  
              }  
            ]  
          }  
        ]  
      }  
    }  
  }  
}
```

### Webhook Event

When a quick reply is tapped, a text message will be sent to your webhook [Message Received Callback](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messages).

The `text` property of the event will correspond to the title of the Quick Reply. The message object will also contain a field named `quick_reply` containing the `payload` data on the Quick Reply.

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

## User Phone Number Quick Reply

![Messenger conversation asking the user for their phone number, with a pre-filled phone number Quick Reply button below](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/23417458_1117232598379764_7436715136921894912_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NV_0B1qm7L0Q7kNvwEaXO7i&_nc_oc=AdqIX5v59YhyZUXRdLv6BQDNCA1QyNtHJokjcllqUUnmNK5PIfSKjx8XdKvTx59bbuDD4g-oZM182aZMqOVdOvgv&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=p-mUGOgkboEw3ZsISsnLFw&_nc_ss=7b289&oh=00_AQAs_r1qqBaE0TsrnK-BTux2fE4hMFH0POGYIWA3r1TBzw&oe=6A60696B)

The user phone number quick reply allows you to ask a user for their phone number. When the phone number quick reply is sent, the Messenger Platform will automatically pre-fill the displayed quick reply with the phone number from the user's profile information.

If the user's profile does not have a phone number, the quick reply will not be shown.

The bot will not receive the phone number until the user clicks the quick reply.

Choosing the quick reply transmits the information once and does not constitute permission to access the information in the future.

### Syntax

```
{
  "content_type":"user_phone_number"
}
```

### Webhook Event

When the user taps the quick reply, the phone number will be passed in the `payload` attribute of the `messages` webhook event.

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
              "payload": "<PHONE_NUMBER>"
            },
            "mid": "m_AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P",
            "text": "<PHONE_NUMBER>"
          }
        }
      ]
    }
  ]
}
```

## User Email Quick Reply

![Messenger conversation asking the user to send their email, with a pre-filled email address Quick Reply button below](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/27807597_203144990422079_3327502058327638016_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=GrD8Owhsz4MQ7kNvwGsrH-s&_nc_oc=Adrx_wdPwqZGUZ-Ao9J5rCydmAQ4ilsZpnrtetFa8-gHYZ-iC--S_k56m0YM0Ak2nRNEyEy-6jhcmNkApNMB4E1T&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=p-mUGOgkboEw3ZsISsnLFw&_nc_ss=7b289&oh=00_AQAifdF1DBEPD2Bttj_3dpwBTiRupvC5eIhINZAwjcOg4Q&oe=6A6061FA)

The user email quick reply allows you to ask a user for their email. When the email quick reply is sent, the Messenger Platform will automatically pre-fill the displayed quick reply with the email from the user's profile information.

If the user's profile does not have an email address, the quick reply will not be shown.

The bot will not receive the email until the user clicks the quick reply.

Choosing the quick reply transmits the information once and does not constitute permission to access the information in the future.

### Syntax

```
{
  "content_type":"user_email"
}
```

### Webhook Event

When the user taps the quick reply, the email address will be passed in the `payload` attribute of the `messages` webhook event.

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
              "payload": "<EMAIL_ADDRESS>"
            },
            "mid": "m_AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P",
            "text": "<EMAIL_ADDRESS>"
          }
        }
      ]
    }
  ]
}
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `content_type` | String | Must be one of the following   * `text`: Sends a text button * `user_phone_number`: Sends a button allowing recipient to send the phone number associated with their account. * `user_email`: Sends a button allowing recipient to send the email associated with their account. |
| `title` | String | Required if `content_type` is 'text'. The text to display on the quick reply button. 20 character limit. |
| `payload` | String, Number | Required if `content_type` is 'text'. Custom data that will be sent back to you via the `messaging_postbacks` webhook event. 1000 character limit.   May be set to an empty string if `image_url` is set. |
| `image_url` | String | ***Optional.*** URL of image to display on the quick reply button for text quick replies. Image should be a minimum of 24px x 24px. Larger images will be automatically cropped and resized.   Required if `title` is an empty string. |

## Best Practices

✅ Use quick replies to prompt for specific next steps.

✅ Be brief — long quick replies will be truncated.

❌ Don't use for actions you'd like to be permanent: quick replies disappear after the next message.
