---
title: "Button Template"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/api-reference/text
---

# Button Template

Updated: Oct 23, 2025

The button template sends a text message with up to three attached buttons. This template is useful for offering the message recipient a button link to your webpage or setup a webhook for automatic replies to users. As of now, available buttons supported by the API include:

* web\_url
* [postback](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages/postback)

```
{  
  "message_id": "<MESSAGE_ID>",  
  "messenger_delivery_data": {  
    "subscription_token": "<SUBSCRIPTION_TOKEN>"  
  },  
  "message": {  
    "attachment": {  
      "type": "template",  
      "payload": {  
        "template_type": "button",  
        "text": "Welcome!",  
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
    }  
  }  
}
```
