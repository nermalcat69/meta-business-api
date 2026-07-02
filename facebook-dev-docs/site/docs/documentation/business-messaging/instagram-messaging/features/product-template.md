---
title: "Button Template"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/product-template
---

# Button Template

Updated: Jun 30, 2026

![Button template message showing text with up to three tappable buttons](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/641522860_1445181614007155_7769621650703982533_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9ZRxsTPMUr8Q7kNvwGczfvh&_nc_oc=Adr2NmSqSMxsuyqT-InmFzr_IIr23rB0M_yEqCVKOhHmEyyQHw8LgYdqw_WOmsySbDkQ6xmY_9j0RpvUOHUFNjMU&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=5o6GJHGOlMpRyYmMfZmB1g&_nc_ss=7b289&oh=00_AQCZZivRKMb1nqb4AIuDcGY0ytESE45CgYHHhMAeynQ5dA&oe=6A606905)

The button template sends a text message with up to three attached buttons. This template is useful for offering the message recipient options to choose from, such as predetermined responses to a question, or actions to take.

## Limitations

The button template is currently not available in the web version.

## Template payload

For a complete list of template properties, refer to the [Properties](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/product-template#properties) section below. Replace each `<BUTTON_OBJECT>` with a URL button or postback button object, as described in [Available buttons](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/product-template#buttons).

```
"payload": {
  "template_type":"button",
  "text":"<MESSAGE_TEXT>",
  "buttons":[
    <BUTTON_OBJECT>,
    <BUTTON_OBJECT>,
    ...
  ]
}
```

## Available buttons

### URL button

The URL button opens a web page in the in-app browser. The URL button lets you add a web-based view to the conversation. For example, you might display a product summary in-conversation, then use the URL button to open the full product page on your website.

#### Button format

```
{
  "type": "web_url",
  "url": "<URL_TO_OPEN_IN_WEBVIEW>",
  "title": "<BUTTON_TEXT>",
}
```

### Postback button

The postback button sends a [`messaging_postbacks`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/webhook-events/messaging_postbacks) event to your webhook with the string set in the `payload` property. This allows you to take arbitrary actions when the button is tapped. For example, you might display a list of products, then send the product ID in the postback to your webhook, where it can be used to query your database and return the product details as a structured message.

#### Button format

For a complete list of button properties, see the [postback button reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/buttons/postback).

```
{
  "type": "postback",
  "title": "<BUTTON_TEXT>",
  "payload": "<STRING_SENT_TO_WEBHOOK>"
}
```

## Example request

For complete request details and properties, refer to the [Properties](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/product-template#properties) section below.

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"<IGID>"  
  },  
  "message":{  
    "attachment":{  
      "type":"template",  
      "payload":{  
        "template_type":"button",  
        "text":"What do you want to do next?",  
        "buttons":[  
          {  
            "type":"web_url",  
            "url":"https://www.messenger.com",  
            "title":"Visit Messenger"  
          },  
          {  
            ...  
          },  
          {...}  
        ]  
      }  
    }  
  }  
}' "https://graph.facebook.com/v13.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>"
```
```

## Example response

A successful request returns a JSON response containing the recipient ID and the message ID, as shown in the following example:

```
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}
```

## Properties

### `recipient`

Description of the message recipient. All requests must include one of the following properties to identify the recipient.

| Property | Type | Description |
| --- | --- | --- |
| `recipient.id` | String | IG Scoped User ID (IGSID) of the message recipient. |

### `message`

Description of the message to be sent.

| Property | Type | Description |
| --- | --- | --- |
| `message.attachment` | Object | An object describing attachments to the message. |

### `message.attachment`

| Property | Type | Description |
| --- | --- | --- |
| `type` | String | Value must be `template`. |
| `payload` | Object | `payload` of the template. |

### `message.attachment.payload`

| Property | Type | Description |
| --- | --- | --- |
| `template_type` | String | Value must be `button`. |
| `text` | String | UTF-8-encoded text of up to 640 characters. The text appears above the buttons. |
| `buttons` | Array<button> | Set of 1-3 buttons that appear as call-to-actions. |
