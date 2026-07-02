---
title: "Story Mention"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/moderate-conversations
---

# Story Mention

Updated: Jun 26, 2026

Instagram notifies an Instagram Professional account when a user mentions it in a story. When this happens, the IG Professional account gets a message in the inbox referencing the story that the user posted. Because a story is temporary (it disappears after 24 hours or when deleted by the user), you must meet specific requirements and implementation guidelines to comply and respect user privacy for ephemeral content.

## Important points

* A story mention webhook will only flow in if the user mentioning the account has their account set up as public. Story mentions from a private account will only flow in if the account follows the said account.
* You must not store or cache the media content on your server.

## Developer implementation flow

* You get a webhook for every story mention received with the story CDN URL. You can store the CDN URL on your system to avoid repeated calls to conversation API. You must not store the media content on your server.
* When the agent clicks on the content or opens the thread, it will trigger a call to your server.
* The agent’s browser renders the content using the CDN URL obtained via webhooks/Conversation API.
* Once the user deletes the story or it expires, the URL will stop rendering and you should show a placeholder message indicating that the story content is no longer available.

## Rendering story in agent’s inbox/client view

There are several options where you can choose to render the story content in the agent’s inbox:

* *In-thread rendering* - For this scenario/behavior, when the agent clicks a particular thread, you will load the CDN URL and render it on the client’s side.
* *User action rendering* - For this scenario/behavior, the client renders story content with a placeholder, and when the user clicks the display/view button, you will load the CDN URL and render it on the client’s side.

## Example webhook

```
```
  {  
  "object": "instagram",  
  "entry": [  
    {  
      "id": "<IGID>",  
      "time": 1569262486134,  
      "messaging": [  
        {  
          "sender": {  
            "id": "<IGSID>"  
          },  
          "recipient": {  
            "id": "<IGID>"  
          },  
          "timestamp": 1569262485349,  
          "message": {  
            "mid": "<MESSAGE_ID>",  
            "attachments":[  
              {  
                  "type":"story_mention",  
                  "payload":{  
                     "url":"<CDN_URL>"  
                  }  
              }  
            ]  
          }  
        }  
      ]  
    }  
  ],  
}
```
```

## Example request to retrieve story mention via Conversation API

```
```
GET <MESSAGE_ID>?fields=story  
  
{  
  "story": {  
    "mention": {  
      "link": "<CDN_URL>",  
      "id": "<STORY_ID>"  
    }  
  },  
  "id": "<MESSAGE_ID>"  
}
```
```

### Developer Support

* Use the [Meta Status tool⁠](https://metastatus.com/) to check for the status and outages of Meta business products.
* Use the [Meta Developer Support tool](https://developers.facebook.com/support) to report bugs and view reported bugs, get help with Ads or Business Manager, and more.
