---
title: "group_feed"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messages
---

# group\_feed

Updated: Mar 18, 2026

This guide shows you the webhook notification properties sent when a person comments on a post, published as the business' Facebook Page, in your business' Facebook Group.

To receive webhooks for private replies, the group settings for private replies must be on. Private replies are **On** by default. To confirm this setting, the admin of the Facebook Page can go to the Facebook Group, tap **Manage** in the left panel and scroll down to **Settings**. Tap **Group settings**, scroll down to **Manage discussion** and look for **On** under **Private replies**.

The `group_feed` field for
[the Page topic webhooks](https://developers.facebook.com/docs/graph-api/webhooks/reference/page)
returns information about comments published by a person on your business' Facebook Group. With this information you can privately reply to the person who published the comment.

### Example Webhooks Notification

The following is an example webhook notification sent to your server when a person comments on a post in a business' Facebook group.

```
[  
  {  
    "object": "page",  
    "entry": [  
      {  
        "time": 1680575902263,  
        "id": "PAGE-ID",  
        "messaging": [  
          {  
           "recipient": {  
              "id": "PAGE-ID"  
            },  
            "from": {  
              "id": "USER-ID",  
              "name": "Cinderella Hoover"  
            },  
            "group_id": "GROUP-ID",  
            "comment_id": "COMMENT-ID",  
            "parent_id": "PARENT-ID",  
            "post_id": "POST-ID",  
            "created_time": 1680575789,  
            "item": "comment",  
            "verb": "add",  
            "message": "Does this shirt come in blue?",  
            "field": "group_feed"  
          }  
        ],  
        "hop_context": null  
      }  
    ]  
  }  
]
```

## Messaging Properties

The following `messaging` properties are included in the webhooks notification.

| Property Name | Description |
| --- | --- |
| `comment_id` | The ID for the comment made by a person on a business' Facebook group post |
| `created_time` | The time the update was made |
| `field` | The value `group_feed` for the Page messaging webhook |
| `group_id` | The ID for the Facebook group where the post or comment was published |
| `item` | The value for the item published in the Facebook group is `comment` |
| `message` | The text of the comment made by the person |
| `post_id` | The ID for the post that the person commented on |
| `parent_id` | The ID for the parent post or comment to which the reply was made |
| `recipient` | The field representing ID for the Facebook Page for the business that owns or administers the Facebook Group |
| `from` | The field representing ID and name of the person that commented on business' Facebook group post |
| `verb` | The action take that triggered the webhook. The value `add` is the action for publishing comment in the group |

## See Also

* Find more [messaging webhooks fields](https://developers.facebook.com/docs/graph-api/webhooks/reference/page) that your app should subscribe to.
* Learn how to [set up your server to accept](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks) Webhooks notifications from Meta.
