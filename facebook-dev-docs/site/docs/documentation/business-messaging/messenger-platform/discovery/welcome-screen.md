---
title: "Private Replies"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/welcome-screen
---

# Private Replies

Updated: Apr 16, 2026

Private Replies allows a business to send a single message to a person who published a post on your business' Facebook Page or who commented on a post or comment on the business' Facebook Page or Group. The message will contain a link to the post or comment that the person published.

### Limitations

* Only one message can be sent to the person who commented
* The message must be sent within 7 days from when the post or comment was created
* Only when a person responds to the private message can you continue the conversation within the 24-hour messaging window.
* Standard Access apps can only access data for people who have a role on the app
* Cannot send private reply message to another facebook page

### Before You Start

You will need:

* A Page access token requested by a person who can perform the `MESSAGING` task on the Page
* The `pages_messaging` permission
* The ID for your business' Facebook Page
* The ID for the post or comment made by the person to whom you are sending the private reply. The ID can be obtained from the `pages_feed` webhooks (recommended to avoid rate limiting) or an API call to the `/page/feed` endpoint

Optional, but recommended:

* Subscribe to your app to the messaging webhooks fields
* Subscribe your app to the `groups_feed` webhooks field, if your business has a Facebook group.

To receive webhooks for private replies, the group settings for private replies must be on. Private replies are **On** by default. To confirm this setting, the admin of the Facebook Page can go to the Facebook Group, tap **Manage** in the left panel and scroll down to **Settings**. Tap **Group settings**, scroll down to **Manage discussion** and look for **On** under **Private replies**.

### Message Types

All messaging types available for using the Send API are available for private replies.

## Send a Private Reply

To send a private reply to a post or comment, send a `POST` request to the `/PAGE-ID/messages` endpoint with the `recipient` parameter with `post_id` or `comment_id` set to the ID for the post or comment and the `message` parameter set to the message you wish to send.

### Example Request

The following example shows a reply to a post published on your Page by a customer:

*Hi, I want to buy a gift for my nephew. Do you have any suggestions?*

```
curl -X POST -H "Content-Type: application/json" -d '{
    "recipient": {
        "post_id": "PAGE-POST-ID"
    },

    "message": {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":"Of course, what is your budget for the gift?",
          "buttons":[
              {
                  "type": "postback",
                  "title": "LESS THAN $20",
                  "payload": "GIFT_BUDGET_20_PAYLOAD"
              },
              {
                  "type": "postback",
                  "title": "$20 TO $50",
                  "payload": "GIFT_BUDGET_20_TO_50_PAYLOAD"
              },
              {
                  "type": "postback",
                  "title": "MORE THAN $50",
                  "payload": "GIFT_BUDGET_50_PAYLOAD"
              }
          ]
        }
      }
    }
}' "https://graph.facebook.com/v25.0/PAGE-ID/messages?access_token=<PAGE-ACCESS-TOKEN>"
```

![Facebook Page post asking about a gift, arrow to a Messenger private reply with budget buttons](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/643514822_1445181554007161_5056785733591771631_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=DudlZwxtRaAQ7kNvwFIjzEj&_nc_oc=Ado4jIRATCTOgz01eX0md65MgRaCKN02S_0Hq2SRkOZtWheFnyYz8XUmJa1yG2QcReiX4mdqd7lc4PbmbWRU_NV8&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=pz2D5iNMAy1YJCM0PKKUJw&_nc_ss=7b289&oh=00_AQC9m2Kb39kcCt1oQaJKyuwbXvLajI5Hd7Y87QwyxH6KUA&oe=6A607A53)

## See also

* [Groups Feed Webhooks Reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/group-feed)
* [Messenger Platform – Message Types](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages)
* [Messenger Platform – Rate Limits](https://developers.facebook.com/documentation/business-messaging/messenger-platform/overview#rate-limits)
* [Meta Webhooks for Facebook Pages](https://developers.facebook.com/docs/pages/webhooks)
* [Page Feed Reference](https://developers.facebook.com/docs/graph-api/reference/page/feed)
