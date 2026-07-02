---
title: "Conversation Routing for Instagram"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/conversation-routing/apis
---

# Conversation Routing for Instagram

Updated: Jun 30, 2026

Meta no longer supports the Handover Protocol for Instagram. All businesses have been migrated to Conversation Routing. Conversation Routing is backwards compatible with most Handover Protocol APIs and functionalities, and is expected to function without interruption.

## Overview

Conversation Routing enables businesses to utilize multiple connected applications to respond to user messages in a coordinated manner, designating which application should take responsibility for responding. This allows both businesses and users to have a rich conversation experience without having to manage complex business logic within each individual application when responding to user queries.

Businesses can connect various types of applications, each serving different roles, such as:

* **Marketing Applications:** Send product marketing messages.
* **Sales Applications:** Handle customer orders, shipments, and schedule service appointments.
* **Customer Care Applications:** Provide human agent-based support.
* **Messaging Automation/Bot Applications:** Include AI agent bots for automated responses.

In some cases, a single application may fulfill multiple roles.

### When to use Conversation Routing

Use Conversation Routing when you have multiple messaging applications connected to your Instagram account and want Meta to automatically route messages to the appropriate application, based on how customers initiate conversations.

Some basic message routing features are available even without enabling Conversation Routing. For more details, see [Default Message Routing Behavior](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/conversation-routing/apis#default-message-routing-behavior--zero-config-behavior-).

## Conversation Routing for Instagram ads

To set up Conversation Routing for Instagram Ads, you’ll need to configure a message template as part of your ad creation process. For detailed steps, refer to the official [Facebook Business Help article⁠](https://www.facebook.com/business/help/198088077975174?id=371525583593535).

### Defining message templates

When creating your Instagram Ad, you’ll be prompted to select a Message template. You can either create a new template or use an existing one.

Within the message template, you can specify parameters such as the `receiving_app_id` and the thread window. This allows you to control which app receives the conversation and for how long it maintains control.

### Sample template

```
```
{  
    "message": {  
        "attachment": {  
            "type": "template",  
            "payload": {  
                "template_type": "button",  
                "text": "Hi! Please let us know how we can help you",  
                "buttons": [  
                    {  
                        "title": "Show me the product!",  
                        "type": "web_url",  
                        "url": "http://www.facebook.com/"  
                    },  
                    {  
                        "title": "Tell me more",  
                        "type": "postback",  
                        "payload": "USER_DEFINED_PAYLOAD"  
                    }  
                ]  
            }  
        },  
        "receiving_app_id": 1278416343931139,  
        "receiving_app_control_expiration": 4  
    }  
}
```
```

* `receiving_app_id`: The ID of the app that will receive the conversation.
* `receiving_app_control_expiration`: The duration (in days) for which the app will maintain control of the thread. Valid values are from 1 to 30.

## Thread control window

* When a conversation starts from an Instagram Ad, the designated app will have control of the thread for 1 day (24 hours) from the last user message by default.
* Businesses with longer lead or sales cycles can extend thread control for up to 30 days by setting `receiving_app_control_expiration` to a value between 1 and 30.
* If you set an invalid value for `receiving_app_control_expiration`, the thread control window will default to 1 day.
* Any
  Conversation Control
  actions (such as handover protocol events) will also reset the thread control window to 1 day.

## Configure Conversation Routing

This section explains how to enable Conversation Routing, configure entry point routing, manage thread ownership, and use conversation control flows for Instagram messaging integrations.

### Enable Conversation Routing

To use Conversation Routing for Instagram, you need:

* An Instagram Business account linked to a Facebook Page using the New Pages Experience.
* The Facebook Page must have messaging enabled and at least one connected app (with PAGES\_MESSAGING permissions and webhook subscriptions).
* You must be interacting as the owner for the Facebook Page.
* You must set up a default application.

![Facebook Settings & privacy Linked accounts page showing a Connected Instagram account with the Allow access to Instagram messages in Inbox toggle enabled.](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/557401024_3877875349022462_5203629662465522515_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wkT8GeDrw3UQ7kNvwGzwXSD&_nc_oc=AdrJTLurbkI2DPw1PUBo42aSjKRkQAyPS1p4scdVWkRsu4XEOTrvQliaTfdEjTGuWA3IpLScyvv4wHVJ3-2u-SAW&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQD1qsBBJQk7tqM3plsF-QFllvvHeYlJ65yXyX-EBAjCWg&oe=6A6085E7)

### Default application

The default application is the primary app allowed to respond to a conversation when no other app is currently assigned or configured to do so.

#### How to assign a default application

* Log in as the Page connected to your Instagram account.
* Go to your
  [Facebook Page settings⁠](https://www.facebook.com/settings).
* Go to Page Setup → Instagram Conversation Routing.
* Assign the desired app as the default application.

![Instagram Conversation Routing settings under Page setup, showing the Default routing app, Link routing, and Campaign routing sections.](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/557814088_1321002352759405_2809512243079325855_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=iJgTIdIWGykQ7kNvwG48QAa&_nc_oc=Adq9PsvKLQWDd5WcNy20SmjQVPT6r1uXSnNTFLUvFKqg6Cprni1cSl3Ie3HjIC1Jpzzd8i8HOR5QpmziTN98W9ev&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQBB3nL3b98gFOioA8G2T8RGCZb3taXwbmbmbHGt2C4dQg&oe=6A607BE0)

## Entry point routing

Entry point routing lets you direct conversations to specific apps based on how users initiate contact. Configure these routes in the Conversation Routing tab of your Facebook Page settings.

There are three types of entry point routing:

### 1. Link routing

* Configure multiple
  [ig.me links](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links) on third-party sites.
* Assign a routing app to each link.

![Add routing path dialog for link routing, with fields for link name, referral parameter, generated ig.me link, and the app to send the conversation to.](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/556394578_4022106128006295_8750907597174535625_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=3_4mJHECdjsQ7kNvwFdYowQ&_nc_oc=AdqXdWHDzwLPO_uiwcQjuAF3f7O_q6WJUnCXcLINdsqA_SBas7rg_0IkrSVzkkiQfF1SQkV_mVA6e35wphKt57zz&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQDoMnAeWXsld-WQUG5AgmS3DBmxms2i6oq583edCNySUw&oe=6A607BA4)

### 2. Campaign routing

* Route conversations from
  [Click-to-Direct (CTD) ads.⁠](https://www.facebook.com/business/help/198088077975174?id=371525583593535)
* Set up in Ads Manager.
* See **Conversation routing for Instagram Ads** for more details.

![Campaign routing section noting that routing must be set up in Ads Manager, with a Go to Ads Manager button and a Meta Business Help Center link.](https://scontent.fdel1-9.fna.fbcdn.net/v/t39.2365-6/557779966_1091057403017804_5368672729917145289_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=gVk1xxM3DqMQ7kNvwHyuTWd&_nc_oc=AdpKHsypzG1o7-5qoz9ryB6PU2UEzDtxqe_7DICWQkUEZk047T75bfdRsz1NZ1FNLVjD5J8aJrrxdBhyBzXRLLqG&_nc_zt=14&_nc_ht=scontent.fdel1-9.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQCg9mxkUnDpnFbZi_dRVNQOwn1zgb_r1JCd8UtfreDAwg&oe=6A60544E)

### 3. Default/organic routing

* Applies to any other entry point within the Meta ecosystem.

![Instagram Default routing app section showing the assigned app igv2test with its app ID and an options menu button.](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/555906699_1346584906811704_4985785832807926096_n.png?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NRQpnFoZSPIQ7kNvwGjxd3c&_nc_oc=AdomWZ0xPQcSk7ZeRAy6AGlrOc8vl6cDNu6h5uqmlMngH_qn0x29So8Yw8-qvlL_twSAXqnJG8vhr0BO4rlGNu5S&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQDvpT1KyhtHkho-W8fWKBPgWXu2j_3VGLqA-GbWFr-fkA&oe=6A60502A)

## Meta Business Suite Inbox support

* You can use Meta Business Suite Inbox as a connected application to continue conversations with users.
* The Inbox can also be assigned as a default application.

![Edit default routing app dialog with the App dropdown set to Inbox in Meta Business Suite and that option selected in the list.](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/556619958_761082143394573_6858419065996670168_n.png?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=PYyxD43zZ4AQ7kNvwFsgCpQ&_nc_oc=AdpwsJI8IETYanGhxETZY5RHznz_WEfRAHixm8Ah0_T7NlYSJeFtF04W7UrXzfTFPKUZzu3SDKJs12hJh31GS5hi&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQBFmWyLcT9BPh6Di5FdQ3yJLvGCvA79YmCbUr2uJPn-_w&oe=6A60715E)

## Conversation control and thread ownership

The application responsible for responding to a user-business conversation is said to have Conversation Control or be the Thread Owner.

### Thread owner states

#### Idle

No active conversation between user and business(no user-to-business message in the last 24 hours), or after the current thread owner releases control. Only the default application can send messages in this state (within the messaging window).

#### Active

There is an ongoing conversation between the user and a business application.

## Conversation control flows

Conversation control flows allow applications to change message routing for subsequent customer messages. There are five types of control flows:

### 1. Pass thread control

The current thread owner passes control to another application, making it the new thread owner.

**Examples:**

Marketing app passes control to Sales app to complete a transaction. AI support bot passes control to a human customer care agent.

### 2. Release thread control

The current thread owner releases control, setting the thread to idle once they are done with the conversation.

**Examples:**

The marketing app finishes answering queries and does not expect any further marketing queries from the customer, so it can release control for future queries. App cannot respond due to technical issues or unrelated queries and releases control to allow the default app to respond.

### 3. Take thread control

Applications which are allowed to **Take control of conversations** by the business are allowed to take thread control, which allows the application to set itself as the thread owner.

Apps with the Human Agent feature cannot take control via the Send API (with HA tag) unless allowed to **Take control of conversations** (configured in Page Settings → Page Setup → Advanced Messaging).

![App Settings dialog with Messenger and Instagram Permissions, including the Take control of conversations toggles enabled for the app.](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/557602820_4165034547145335_1640326007958894077_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=r2_yz59D_LsQ7kNvwHUnpm7&_nc_oc=Adrn32taKhhilmWaAur8V2w1l0aL5rNGHqdE4TJThYUFza4QD7aF9Uk4ALiXGVUqWI0SM4OdGzGeX6oAwmHhRJWB&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=pmGjyciwuKOcxumjTk9KmA&_nc_ss=7b289&oh=00_AQB4GSkbg0eIdgEIZkWrOetPC0ivyX2OBPVzhtCC6th1eQ&oe=6A608335)

**Example:**
Customer Care agent sees there is an issue with the Marketing bot application sending some invalid responses and can take thread control to continue conversation.

### 4. Extend thread control

Thread control usually expires after 24 hours of inactivity, but in some cases businesses might not have enough time to respond to the user, so they can use this API to extend thread control up to 7 days.

**Example:**

In a non-default customer sales application, customer sales agents answering the customer queries may require more time to find the product details requested by the users. In such a case, agents need to extend the thread control time period until they find the details, which they can use to extend thread control.

### 5. Request thread control

Use this flow to request thread control from another application that already has thread control. In certain scenarios, instead of taking thread control directly, ask the application in control to pass control to your application. If the current thread owner is done with the conversation, they can pass thread control to your application.

## Default message routing behavior (zero config behavior)

Default behavior, also known as zero config behavior, allows applications to use certain conversation controls even without configuring a Conversation Routing default application. However, there are some limitations to be aware of.

### When to use default behavior

* You have only a single application connected to your business, which is solely responsible for receiving and responding to user messages.
* You may use the Page Inbox to respond to users in addition to the application connected, but you are responsible for coordinating responses between your app and the Inbox to avoid sending multiple responses to the same user message.

### Key differences from Conversation Routing (primary behavior)

* **Multiple Apps Receive Webhooks:** If more than one application is connected, all applications will receive messaging webhooks.
* **No Coordination Between Apps:** All connected applications can respond to the same user message without restrictions or coordination, increasing the risk of duplicate responses.
* **Take Thread Control API Blocked:** The Take Thread Control API is not available. This feature is only enabled when a default application is set.
* **Pass Thread Control API Available:** The Pass Thread Control API is enabled. Any application can pass thread control to any other application (including itself) when the thread is in the idle state.
* **Request Thread Control API Available:** The Request Thread Control API is enabled. Any application can request thread control, but only the first application to invoke the API will receive control.
* **Limited Entry Point Routing:** Only **campaign routing** is available as an entry point routing option. Link routing and default/organic routing are not available for configuration.
