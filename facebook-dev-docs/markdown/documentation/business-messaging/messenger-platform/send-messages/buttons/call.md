---
title: "Postback button"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/call
---

# Postback button

Updated: Jun 17, 2026

The postback button sends a [`messaging_postbacks`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_postbacks) event to your webhook with the string set in the `payload` property. This allows you to take an arbitrary action when the button is tapped. For example, you might display a list of products, then send the product ID in the postback to your webhook, where the product ID can be used to query your database and return the product details as a structured message.

## Supported usage

Use the postback button with the following:

* Persistent menu
* Generic template
* List template
* Button template
* Media template

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `type` | String | Type of button. Must be `postback`. |
| `title` | String | Button title. 20 character limit. |
| `payload` | String | Messenger sends this data to your webhook. 1000 character limit. |

## Sample request

```
curl -X POST "https://graph.facebook.com/<LATEST_API_VERSION>/<PAGE_ID>/messages?access_token=<PAGE_ACCESS_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "recipient": {
      "id": "<PSID>"
    },
    "message": {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": "Try the postback button!",
          "buttons": [
            {
              "type": "postback",
              "title": "Postback Button",
              "payload": "DEVELOPER_DEFINED_PAYLOAD"
            }
          ]
        }
      }
    }
  }'
```

## Sample response

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```
