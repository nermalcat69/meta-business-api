---
title: "Generic Template"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/button-template
---

# Generic Template

Updated: Apr 1, 2026

![Generic Template card with an image, the title Cards to Uplift and Inspire, subtitle, and Shop Now and Help Me Choose buttons](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/197000352_210164414260511_1056569475973147004_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rk433A7X5_8Q7kNvwEn725g&_nc_oc=AdpygKSMHlJcHHHpwkqqpiUFka9aXPHag2q_hGCQABU2zyg6r1tNiUAeNGqXniwVyy_xnQEq1y-F2EhTn1S08GTS&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=hJnCW6kKVPrjnyIICeY9ig&_nc_ss=7b289&oh=00_AQAKzp9k0j5EDd8wSPdYOx6yYZpBk5N5lTat9uy18guAfA&oe=6A607C2A)

The generic template allows you to send a structured message that includes an image, text, and buttons. A generic template with multiple templates described in the [`elements`](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/button-template#elements) array will send a horizontally scrollable carousel of items, each composed of an image, text, and buttons.

### Limitations

This feature is currently not available in the web version.

## Request URI

```
https://graph.facebook.com/v25.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>
```

## Example request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"<IGSID>"  
  },  
  "message":{  
    "attachment":{  
      "type":"template",  
      "payload":{  
        "template_type":"generic",  
        "elements":[  
           {  
            "title":"Welcome!",  
            "image_url":"https://github.com/fbsamples/original-coast-clothing/blob/main/public/looks/male-work.jpg",  
            "subtitle":"We have the right hat for everyone.",  
            "default_action": {  
              "type": "web_url",  
              "url": "https://www.originalcoastclothing.com",  
            },  
            "buttons":[  
              {  
                "type":"web_url",  
                "url":"https://www.originalcoastclothing.com",  
                "title":"View Website"  
              },{  
                "type":"postback",  
                "title":"Start Chatting",  
                "payload":"DEVELOPER_DEFINED_PAYLOAD"  
              }  
            ]  
          }  
        ]  
      }  
    }  
  }  
}' "https://graph.facebook.com/v10.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>"
```
```

## Example response

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
| `type` | String | Value must be `template` |
| `payload` | Object | [`payload`](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/button-template#payload) of the template. |

### `message.attachment.payload`

| Property | Type | Description |
| --- | --- | --- |
| `template_type` | String | Value must be `generic` |
| `elements` | Array<[`element`](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/button-template#elements)> | An array of [`element`](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/button-template#elements) objects that describe instances of the generic template to be sent. Specifying multiple elements will send a horizontally scrollable carousel of templates. A maximum of 10 elements is supported. |

### `message.attachment.payload.elements`

The generic template supports a maximum of 10 elements per message. At least one property must be set in addition to `title`.

| Property Name | Type | Description |
| --- | --- | --- |
| `title` | String | The title to display in the template. 80 character limit. |
| `subtitle` | String | ***Optional.*** The subtitle to display in the template. 80 character limit. |
| `image_url` | String | ***Optional.*** The URL of the image to display in the template. |
| `default_action` | Object | ***Optional.*** The default action executed when the template is tapped. Accepts the same properties as [URL button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons), except `title`. |
| `buttons` | Array<[`button`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/buttons)> | ***Optional.*** An array of [buttons](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) to append to the template. A maximum of 3 buttons per element is supported. Only `postback` and `web_url` buttons are supported. |

## Learn more

Visit the [`message.attachment.data`](https://developers.facebook.com/docs/graph-api/reference/message) for GIFs and Stickers.
