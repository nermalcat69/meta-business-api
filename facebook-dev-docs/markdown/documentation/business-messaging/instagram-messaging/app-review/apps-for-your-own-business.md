---
title: "Apps For Other Businesses"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review/apps-for-your-own-business
---

# Apps For Other Businesses

Updated: Jun 30, 2026

If your app will be used by other Instagram professional accounts to create automated experiences or custom inbox solutions that can process messages sent to their own Instagram professional accounts, follow the guidelines below. If your app can only process messages sent to your own Instagram professional account, follow [this guide](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review/apps-for-your-own-business) instead.

If you are unfamiliar with App Review, refer to our [App Review for Instagram Messaging Apps](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review) document before proceeding.

## Screen recording

Create a [screen recording](https://developers.facebook.com/videos/2021/developing-for-success-how-to-produce-a-screencast-for-app-review/) showing us how to use your app to set up an automated experience or custom inbox solution of our own. Also, show us how to test that experience or solution once we have created it. You will upload this video in later steps and our reviewers will refer to it when testing your app.

Show the following setup information:

* How to log into your app
* How to grant your app appropriate permissions with Facebook Login for Business
* How to set up an automated experience or custom inbox solution that can process [messages](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/send-message) and [conversations](https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversations)
* How to set up [quick replies](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/quick-replies), [ice breakers](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ice-breakers), or [generic templates](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/generic-template) (if your app allows users to set them up)

Show the following testing information:

* How to initiate a conversation with the experience or solution we create
* How to test unsent message processing
* If your app allows users to set up a custom inbox solution, show us how to send messages to it, and how to reply to and delete those messages.

Make sure that the app you are recording is the same app that you are submitting for review, otherwise your submission will be rejected.

## Verification details

![Screenshot of the App Verification Details window](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/258766493_278267257422315_3332814203790309683_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tpV-8qfv_zYQ7kNvwEWaBLq&_nc_oc=AdqwvOZIDWDRurljXGKjjrvTesUQfyMyf065YGFC8BbPZy8BvFSesz8vfAgDGwfTJ-3emDadm4U7vijO75LNu7vi&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=I3hKR6xfoKWSbadG9PEHTQ&_nc_ss=7b289&oh=00_AQBIw0vDCFX11kl7C3LMAlb_VQcGY6vIawvXJ_V0bb0-fw&oe=6A607B21)

### Platform settings

Set this to **Website** (click the **Add Platform** button if you haven't set a platform yet) and provide the URL where your app users can log into your service and set up an automated experience or custom inbox solution.

### Step-by-step instructions

Your step-by-step instructions should cover the following information:

* How to log into your website/service
* How to grant your app appropriate permissions with Facebook Login
* How to use your app to set up an automated experience or custom inbox solution that can process messages and conversations

If you wish, use the template below as a starting point when writing your step-by-step instructions:

To create an app:

* Go to {website testing URL}.
* Log in with test credentials above.
* Click the {button} in the left nav.
* Click the 'Continue with Facebook' button and log in with a valid Facebook account.
* Click the 'Set Up an Automated Experience' button.
* ...

### Credentials

Select the dropdown menu option that best describes how app users access your app before they are able to create an automated experience or custom inbox solution.

* **I use Facebook Login for Business to log into my website** — Select this option if your app users can use Facebook Login for Business to create an account and sign into your app.
* **I don't use Facebook Login for Business to log into my website** — Select this option if app users cannot use Facebook Login for Business to create an account or sign in your app. Include a login and password for a test account that our app reviewers can use to access your app and set up an automated experience or inbox solution. Do not include personal Facebook or Instagram account details or Facebook or Instagram test user credentials. We will use our own Facebook accounts to test your service (our reviewers do not need to be granted any roles on your app).

## `instagram_basic`

![Screenshot of the App Verification Details window](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/238037066_1020002675454776_8809456492126932813_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=dWYOWcm1vx4Q7kNvwHdKtRu&_nc_oc=AdqJv-pT9nhhWHIf1T_JWCvmQqDtMXDpLyiWiarsNZUaBCM_y5TJdK5WkdVVAfwtA5as5vKYwODaZE11Ix9ztPBj&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=I3hKR6xfoKWSbadG9PEHTQ&_nc_ss=7b289&oh=00_AQD8y6BgzoDgIyV7v-6XmOAsFAgk86lBRF7K0lJQ71Hdzw&oe=6A60690A)

### Description

Describe how to use functionality in your app that relies on this permission and how your app uses data provided by endpoints that require this permission.

### Screen recording

Upload the [screen recording](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review/apps-for-your-own-business#screen-recording) you recorded earlier.

## `instagram_manage_messages`

![Screenshot of the App Verification Details window](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/651831862_1459945635864086_5668068271342756679_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z5ZoQKk_0YAQ7kNvwGH-E-G&_nc_oc=Adqe8ddDCfYmYP8yieU8R38YzkogOmUpPO5jNs2bCPGTEPbm-QkTkg-1TDquaJQ3na2GlQtEg2euO6_KqUuSKeHa&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=I3hKR6xfoKWSbadG9PEHTQ&_nc_ss=7b289&oh=00_AQD_j3d3iYWJyIqPUPu5STk2Mo8KnBMx4zyqIYoak4Q-Nw&oe=6A607327)

### Description

Tell us how to test functionality in your app that relies on this permission, how your app uses data provided by endpoints that require this permission, and how to initiate a conversation with the experience or solution that we have created.

### Custom inbox solution

A custom inbox solution is functionality that an agent can use to manually process (such as reading, replying, and deleting) messages that an automated experience is unable to process for any reason.

* **Yes** — If we are able to use your app to create a custom inbox solution, tell us how to manually process messages.
* **No** — If we are unable to use your app to create a custom inbox solution (meaning we can only create automated experiences), tell us how to test how our automated experience escalates a message to a human agent.
  * Show how an Instagram business can set up a simple automation flow.
  * Show a user sending a message to the Instagram business account.
  * Show how the automated experience responds to the user message within 30 seconds.
  * Implement features such as quick replies, icebreakers, and persistent menu to show how the user can interact with the automated experience in various ways.

### Unsent messages

Tell us how to test how the automated experience or custom inbox solution we have created handles unsent messages.

### Screen recording

Upload the [screen recording](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review/apps-for-your-own-business#screen-recording) you recorded earlier.

## `business_management`

When requesting the `business_management` permission, call out the following in your app review submission:

* State that you are requesting this permission as a dependency for the `pages_messaging` and `pages_show_list` permissions.
* For Instagram Messaging, state that you are requesting this permission as a dependency for the `instagram_manage_messages` permission.
* In the app review screencast, clearly show the Page admin navigating the Facebook Login flow, picking the pages or Instagram handles and providing the necessary permissions to the app.

In your app, make sure to inform the Page admin that they need to explicitly provide permissions to the app to manage their business assets. You will need to add the `business_management` permission as part of the [Facebook Login for Business](https://developers.facebook.com/documentation/facebook-login/facebook-login-for-business) flow.

## Human agent

This feature is optional. Only request this feature if you have a custom inbox solution to process [human agent escalations](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation) and your agents need up to 7 days to respond to escalations using [message tags](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/send-api).

![Screenshot of the App Verification Details window](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/239910954_569332724432948_7452403614394733750_n.png?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2QdLMO3V2yEQ7kNvwHYyyPf&_nc_oc=AdqAsmdybpIP6HjwKxXQEAsS-bvHDbWk76qJhJmfQiO6ryPOpQyCwiuudiPvJ3_fRsWiVMLka3UGVV9H4V0VQbhS&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=I3hKR6xfoKWSbadG9PEHTQ&_nc_ss=7b289&oh=00_AQAc-onWPlHIS-sSd8J9gZEhSS2Y_46gUwSa5dC3jcZDYQ&oe=6A60652F)

* **Description** — Explain why it can take someone up to 7 days to reply to a direct message instead of 24 hours.
* **Screen Recording** — If you are requesting this feature along with the instagram\_manages\_messages permission in the same App Review submission, upload the [screen recording](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/app-review/apps-for-your-own-business#screen-recording) you recorded earlier. Otherwise, capture a new screen recording that shows a human agent responding to a message.
