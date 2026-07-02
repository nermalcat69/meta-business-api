---
title: "Button template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/template/coupon
---

# Button template

Updated: Jun 17, 2026

The button template sends a text message with up to three attached buttons. This template is useful for offering the message recipient options to choose from, such as pre-determined responses to a question or actions to take.

For a complete list of available buttons, see [Buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons).

## Request URI

```
https://graph.facebook.com/v25.0/me/messages?access_token={PAGE_ACCESS_TOKEN}
```

## Payload properties

| Property | Type | Description |
| --- | --- | --- |
| `template_type` | String | Must be `button`. |
| `text` | String | UTF-8-encoded text of up to 640 characters. Text appears above the buttons. |
| `buttons` | Array | Set of 1-3 [buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) that appear as call-to-actions. |

## Sample request

```
curl -X POST -H "Content-Type: application/json" -d '{
  "recipient":{
    "id":"{PSID}"
  },
  "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"web_url",
            "url":"https://www.messenger.com",
            "title":"Visit Messenger"
          }
        ]
      }
    }
  }
}' "https://graph.facebook.com/v25.0/me/messages?access_token={PAGE_ACCESS_TOKEN}"
```

## Sample response

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```
