---
title: "Quick Replies"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/sender-actions
---

# Quick Replies

Updated: Jun 24, 2026

Quick replies provide a way to present a set of buttons in-conversation for users to reply with. A maximum of 13 quick replies are supported and each quick reply allows up to 20 characters before being truncated. Quick replies only support plain text.

![Instagram conversation showing tappable Quick Replies buttons: Schedule instore visit, Live chat now, Call](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/118773999_346285803169041_8806208626533285146_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=R5J-agJOb9YQ7kNvwFRbdCd&_nc_oc=AdprU10UBeRB4PHsFR0be6rGQGgq6EJIVWRx3SHaWr-0xzRlSlTVBtB5bqWUy9CLMFQsMlc5AdjnaMq9UQEmqSMJ&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=3AGsqwGyBlHevksbupmQKQ&_nc_ss=7b289&oh=00_AQCzU03LutNPWIcnXmBYNcGtFQGPHx9zODdyoVj7LT_Mcw&oe=6A605046)

When a quick reply is tapped, Instagram dismisses the buttons and posts the tapped button's title to the conversation as a message. Instagram then sends a messages event to your webhook that contains the button title and an optional payload.

This feature is currently not available on desktop.

## Sending quick replies

```
curl -X POST -H "Content-Type: application/json" -d '{  
  "recipient":{  
    "id":"<IGSID>"  
  },  
  "messaging_type": "RESPONSE",  
  "message":{  
    "text": "<SOME_TEXT>",  
    "quick_replies":[  
      {  
        "content_type":"text",  
        "title":"<TITLE_1>",  
        "payload":"<POSTBACK_PAYLOAD_1>"  
      },  
      {  
        "content_type":"text",  
        "title":"<TITLE_2>",  
        "payload":"<POSTBACK_PAYLOAD_2>"  
      }  
    ]  
  }  
}' "https://graph.facebook.com/<API_VERSON>/me/messages?access_token=<PAGE_ACCESS_TOKEN>"
```

## Webhook event

When a quick reply is tapped, Instagram sends a text message to your webhook.

The text property of the event will correspond to the title of the quick reply. The message object will also contain a field named `quick_reply` containing the payload data on the quick reply.

```
{  
  "object": "instagram",  
  "entry": [  
    {  
      "id": "<IGID>",  
      "time": 1502905976963,  
      "messaging": [  
        {  
          "sender": {  
            "id": "<IGSID>"  
          },  
          "recipient": {  
            "id": "<IGID>"  
          },  
          "timestamp": 1502905976377,  
          "message": {  
            "quick_reply": {  
              "payload": "<PAYLOAD>"  
            },  
            "mid": "<MID>",  
            "text": "<SOME_TEXT>"  
          }  
        }  
      ]  
    }  
  ]  
}
```

## User phone number quick reply

![Instagram chat asking 'Please send your phone number for tracking purposes' with a pre-filled phone number quick reply](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/653708829_1459945592530757_7940618060342376573_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2Pc1vUpC_hoQ7kNvwEamzI2&_nc_oc=Adoz5o_iXcAJHJ9RRh2WB58oHIcX-NPugV0z642So3AQanW3SAjl-XbviesdBo3fCpEBv4pMGXzRk1gqXgaV5Zwf&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=3AGsqwGyBlHevksbupmQKQ&_nc_ss=7b289&oh=00_AQCjbV4p9NcA1SmXmycShQFl725EiATt31cTKmBxzi5DUw&oe=6A604F83)

The user phone number quick reply allows you to ask a user for their phone number. When the phone number quick reply is sent, the Instagram Direct Platform will automatically pre-fill the displayed quick reply with the phone number from the user's profile information.

If the user's profile does not have a phone number, Instagram does not show the quick reply.

The bot will not receive the phone number until the user clicks the quick reply.

Choosing the quick reply transmits the information once and does not constitute permission to access the information in the future.

### Syntax

```
{
  "content_type":"user_phone_number"
}
```

### Webhook event

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
            "id": "<IGSID>"
          },
          "recipient": {
            "id": "<IGID>"
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

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
