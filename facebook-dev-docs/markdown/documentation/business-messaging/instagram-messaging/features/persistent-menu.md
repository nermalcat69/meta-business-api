---
title: "Using ig.me Links"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu
---

# Using ig.me Links

Updated: Jun 24, 2026

`ig.me` is a shortened URL service operated by Meta that redirects users to a conversation in Instagram. You can use ig.me links on your website, email newsletters, and more.

When a user opens an ig.me link to start or continue a conversation with your Instagram account, the user is redirected to a new or existing thread, based on whether the user had previously messaged your Instagram account.

### Contents

* [Link Format](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu#format)
* [Referral Parameters](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu#refparams)
* [Examples](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu#examples)
* [User Experience](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu#userexperience)
* [Limitations](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu#limitations)

## Link format

The format of the link is as follows:

```
https://ig.me/m/<USERNAME>
```

`USERNAME` is the Instagram handle of the Instagram account.

## Referral parameters

You can pass a referral parameter using these links.

Referral parameters can serve the following purposes:

* Track different links in different channels
* Tie an Instagram user to a session or account in an external app
* Direct the user to specific content or features available within your Instagram account

This is an ig.me link with an added parameter:

```
https://ig.me/m/<USERNAME>?ref=<REF_PARAM>
```

`REF_PARAM` is passed to the server via a webhook.

### Requirements

To properly use ig.me links, you must meet the following requirements:

* Your Instagram experience must have [Icebreakers](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ice-breakers) set to receive the referral parameter for new conversations
* The referral parameter must be a string up to 2,083 characters in length
* The Instagram account that the app is connected to must be published to receive the referral parameter for all users, except those that have the developer, tester, or admin role for your bot
* You are using iOS and Android versions 235 and above

### Reading the passed parameter

The referral portion always follows this format:

```
  "referral": {
     "ref": "ref_data_in_ig_dot_me_param"
     "source": "SHORTLINKS"
     "type":  "OPEN_THREAD"
}
```

| Field Value | Description |
| --- | --- |
| `ref` | The arbitrary data that was originally passed in the `ref` param added to the ig.me link. Only alphanumeric characters, and -, \_, = are supported |
| `source` | The source of this referral. For ig.me links, the value of source is `"SHORTLINK"` |
| `type` | The identifier for the referral. For a referral from ig.me links, it is always `"OPEN_THREAD"` |

When an ig.me link with a `ref` parameter opens the Instagram app, there are three possible scenarios:

#### 1. New thread + icebreaker

If you have configured Icebreakers for your Instagram Account and the user taps on an Icebreaker, your app receives the `messaging_postback` webhook event which includes the passed referral parameter.

The `messaging_postback` webhook event follows this format:

```
{
  "object": "instagram",
  "entry": [
    {
      "id": "<IGSID>",
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
            "mid":"<MESSAGE_ID>",
            "title": "<SELECTED_ICEBREAKER_QUESTION>",
            "payload": "<USER_DEFINED_PAYLOAD>,
            "referral": {
                   "ref": "ref_data_in_ig_dot_me_param"
                   "source": "SHORTLINKS"
                   "type":  "OPEN_THREAD"
             }
          }
        }
      ]
    }
  ]
}
```

`USER_DEFINED_PAYLOAD` refers to the payload you previously configured to be sent in the postback.

#### 2. New thread + message send

If you have configured Icebreakers for your Instagram Account and the user doesn’t tap on an Icebreaker, and chooses to send a message via the composer, your app receives the `messages` webhook event which includes the passed referral parameter.

The `messages` webhook event follows this format:

```
{
  "object": "instagram",
  "entry": [
    {
      "id": "<IGSID>",
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
              "mid":"<MESSAGE_ID>",
              "referral": {
                   "ref": "ref_data_in_ig_dot_me_param"
                   "source": "SHORTLINKS"
                   "type":  "OPEN_THREAD"
              }
           }
        }
      ]
    }
  ]
}
```

#### 3. Existing thread

If the user has an existing thread with your Instagram Business, when the user follows your ig.me link, Instagram just opens that respective thread. To be notified of the referral, your webhook must be subscribed to the `messaging_referral` event.

This action resets the [24-hour window for standard messaging](https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy#standard_messaging), allowing the app to reply after getting the webhook event with the `ref` parameter.

The `messaging_referral` webhook event follows this format:

```
{
  "object": "instagram",
  "entry": [
    {
      "id": "<IGSID>",
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
          "referral": {
                 "ref": "ref_data_in_ig_dot_me_param"
                 "source": "SHORTLINKS"
                 "type":  "OPEN_THREAD"
          }
        }
      ]
    }
  ]
}
```

## Examples

Here are some ways you can use ig.me links:

* Use ig.me links + QR code on product packaging to allow people to reach out to you for support or get a coupon towards the next purchase.
* Use ig.me + QR code on out of home advertising such as billboards, TV ads, physical stores to sign up for loyalty/membership accounts.
* Use ig.me links on the Contact Us page on a website to allow people to contact you via messaging instead of relying on calling.
* Provide callers an option to message you on Instagram by sending an ig.me link with [referral param](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/persistent-menu#refparams) via SMS.

## User experience

| New threads | Existing threads |
| --- | --- |
| Instagram shows the user the following disclosure:  You opened this conversation from a link. `<Ig Business Handle>` will see that you used their link once you send a message.  Instagram chat with Original Coast Clothing showing the new-thread link disclosure and Icebreaker quick-reply buttons | Instagram shows the user the following disclosure:  You opened this conversation from a link. `<Ig Business Handle>` can see that you used their link. If you wish to stop receiving messages from them, you can turn off messages.  Instagram chat with Original Coast Clothing showing a sent 'Hello' and the existing-thread link disclosure |

## Limitations

ig.me links are currently not supported on Instagram Web.
