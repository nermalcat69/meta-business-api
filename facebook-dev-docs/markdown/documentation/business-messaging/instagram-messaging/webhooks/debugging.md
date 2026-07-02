---
title: "Apps For Your Own Business"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks/debugging
---

# Apps For Your Own Business

Updated: Jun 30, 2026

If your app is an automated experience or a custom inbox solution that can only process messages sent to your own Instagram Professional account, follow these guidelines when completing App Review. If your app will be used to process messages on behalf of other businesses, follow [this guide](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review/apps-for-other-businesses) instead.

If you are unfamiliar with App Review, refer to our [App Review for Instagram Messaging Apps](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review) document before proceeding.

## Screen recording

Create a [screen recording](https://developers.facebook.com/videos/2021/developing-for-success-how-to-produce-a-screencast-for-app-review/) showing us how to test your app. You will upload this video in later steps and our reviewers will refer to it when testing your app.

Show the following:

* How to initiate a conversation with your app
* How your app processes a message
* How your app processes [quick replies](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/quick-replies), [ice breakers](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ice-breakers), or [generic templates](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/generic-template), if you have implemented them
* How your app processes [rich media](https://developers.facebook.com/documentation/business-messaging/messenger-platform/overview#content-design-network-urls)
* How your app processes messages the sender unsent

Make sure that the app you are recording is the same app that you are submitting for review, otherwise your submission will be rejected.

## Verification details

Providing verification details is optional. If you do want to provide this information, use the guidance below.

![Screenshot of the App Verification Details window](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/258779682_672778047037720_5895450097279284281_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=MomHJ6VrmuMQ7kNvwGCk2E4&_nc_oc=AdoPjtwt0iIVybktDVwmj08C6bNBGggZBI7ziX_A2X6um2y5FnXeSRR2g-LDoe1UsUZIJyI7XaKeDRR6tDjtTGZY&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=rdBlCdRbzic5gIyZJq5fMQ&_nc_ss=7b289&oh=00_AQDuHCZWP0oB6O6cj6_yAmao7boW3wto9CaoD5d8gTcVHA&oe=6A606584)

### Platform settings

Set the platform to **Website** (click the **Add Platform** button if you haven’t set a platform yet) and use your business’s website URL.

### Credentials

Leave this section blank.

## `instagram_manage_messages`

![App Review form for requesting the instagram_manage_messages permission with description and screen recording fields](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/641668262_1445181454007171_7295215445309758039_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=snsLRXY60SAQ7kNvwHooXv-&_nc_oc=AdpxWHEjX2u4ZqZFYfA3iw5uWerezZcNfWQPJ_kWcGbSI05nTxGWpicxZ5Sd7nwIvWYsaQ7yNxTeKwz_-BzP64gx&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=rdBlCdRbzic5gIyZJq5fMQ&_nc_ss=7b289&oh=00_AQDlQVPykcz7STHgEmp_qTZrEC50Z7VBR1kTeI2eJc5sSA&oe=6A6064F7)

### Description

* Tell us if your app is an automated experience, a custom inbox solution, or both.
* Tell us how to initiate a conversation with your app.
* If your app is an automated experience, provide a set of commands we can test. Include commands that can trigger [quick replies](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/quick-replies), [ice breakers](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ice-breakers), or [generic templates](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/generic-template), if you have implemented them.

### Instagram account

Enter your Instagram profile handle.

### Primary experience

Choose an option that best describes what we can build using your app.

* **Automated** — Choose this option if we can use your app to build an automated experience that automatically processes messages in real-time.
* **Live Agent** — Choose this option if we can only use your app to build a custom inbox solution that agents can use to manually process (read, reply, delete, and so on) direct messages.

### Screen recording

Upload the [screen recording](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks/debugging#screen-recording) you recorded earlier.

## business\_management

When requesting the `business_management` permission, call out the following in your app review submission:

* This permission is a dependency for the `pages_messaging` and `pages_show_list` permissions.
* For Instagram Messaging, call out that this permission is a dependency for the `instagram_manage_messages` permission.
* In the app review screencast, clearly show the Page admin navigating the Facebook Login flow, picking the pages or Instagram handles and providing the necessary permissions to the app.

In your app, make sure to inform the Page admin that they need to explicitly provide permissions to the app to manage their business assets. You will need to add the `business_management` permission as part of the [Facebook Login for Business](https://developers.facebook.com/documentation/facebook-login/facebook-login-for-business) flow.

## Human agent

The Human Agent feature is optional. Only request this feature if you have a custom inbox solution to process [human agent escalations](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation) and your agents need up to 7 days to respond to escalations using [message tags](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/send-api).

![Screenshot of the App Verification Details window](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/259362305_259059542917474_1848277544194004737_n.png?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=6OdtudVbIqYQ7kNvwFP0qSL&_nc_oc=AdpxfgZ0y1bGGOkYoexYbkpjdMoz7UhXNqUf_EupWvSpRA9HO5kmj0qvM1IDimnYMznFdF-yXr9kt_EQA5RaBDEs&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=rdBlCdRbzic5gIyZJq5fMQ&_nc_ss=7b289&oh=00_AQAiD7Aa6IBPv9ljc1g5IMfuCCDwz_0lMZM8iVftWz_LSA&oe=6A607CF1)

### Description

Explain why it can take someone up to 7 days to reply to a direct message instead of 24 hours.

### Screen recording

If you are requesting this feature along with the `instagram_manages_messages` permission in the same App Review submission, upload the [screen recording](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/webhooks/debugging#screen-recording) you recorded earlier. Otherwise, capture a new screen recording that shows a human agent responding to a message.
