---
title: "Ice Breakers"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links
---

# Ice Breakers

Updated: Jun 24, 2026

Ice Breakers provide a way for users to start a conversation with a business with a list of frequently asked questions. Use the Ice Breaker API to set a maximum of 4 questions.

![Instagram chat with the Coast Clothing business showing four Ice Breakers questions above the message box](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/118818823_700834857168298_1003772079812652258_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=qv60WVUKlZIQ7kNvwGdk6pZ&_nc_oc=AdpAQKlCdfyl9EFjhjW9xJFUTYGrknjr6JNgM9gTjgFhpKnD9Ye_YGULQ_kk3l7NeXK1KaKZEIFwuckUSxyAqiiq&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=qJs1v9uY4lMyFWyqbTkTvA&_nc_ss=7b289&oh=00_AQCB0op2GSNftR5jjczRQ-S7jp9g5_JU4xrSkXFMQ-YmjQ&oe=6A6056DE)

## Limitations

Ice Breakers are currently not available on desktop.

## Setting ice breakers

```
```
    curl -X POST -H "Content-Type: application/json" -d '{  
     "platform": "instagram",  
     "ice_breakers":[  
       {  
          "call_to_actions":[  
             {  
                "question":"<QUESTION>",  
                "payload":"<PAYLOAD>"  
             },  
             {  
                "question":"<QUESTION>",  
                "payload":"<PAYLOAD>"  
             }  
          ],  
          "locale":"default" // default locale is REQUIRED  
       },  
       {  
          "call_to_actions":[  
             {  
                "question":"<QUESTION>",  
                "payload":"<PAYLOAD>"  
             },  
             {  
                "question":"<QUESTION>",  
                "payload":"<PAYLOAD>"  
             }  
          ],  
          "locale":"en_GB"  
       }  
    ]  
}' "https://graph.facebook.com/v11.0/me/messenger_profile?platform=instagram&access_token=<PAGE_ACCESS_TOKEN>"
```
```

## Getting ice breakers

```
```
curl -X GET "https://graph.facebook.com/v11.0/me/messenger_profile?fields=ice_breakers&platform=instagram&access_token=<PAGE_ACCESS_TOKEN>"
```
```

```
```
{  
   "data": [  
        {  
          "call_to_actions" : [  
               {  
                "question": "<QUESTION>",  
                "payload": "<PAYLOAD>",  
  
               },  
               {  
                "question": "<QUESTION>",  
                "payload": "<PAYLOAD>",  
  
               },  
          ],  
          "locale": "<LOCALE>",  
      },  
      {  
          "call_to_actions" : [  
               {  
                "question": "<QUESTION>",  
                "payload": "<PAYLOAD>",  
  
               },  
               {  
                "question": "<QUESTION>",  
                "payload": "<PAYLOAD>",  
  
               },  
          ],  
          "locale": "<LOCALE>",  
      }  
   ]  
}
```
```

## Deleting ice breakers

```
```
curl -X DELETE -H "Content-Type: application/json" -d '{  
  "fields": [  
    "ice_breakers",  
  ]  
}' "https://graph.facebook.com/v11.0/me/messenger_profile?platform=instagram&access_token=%lt;PAGE_ACCESS_TOKEN>"
```
```

## Webhook event

To receive postback webhooks from Ice Breakers, subscribe your app to the `messaging_postbacks` webhook under the Instagram topic in your app settings.

The webhook will receive a JSON payload similar to the example below.

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
          "postback": {
            "title": "<SELECTED_ICEBREAKER_QUESTION>",
            "payload": "<USER_DEFINED_PAYLOAD>",
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
