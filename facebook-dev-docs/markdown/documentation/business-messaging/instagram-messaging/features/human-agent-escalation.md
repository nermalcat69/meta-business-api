---
title: "Conversation Control APIs"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation
---

# Conversation Control APIs

Updated: Jun 21, 2026

Instagram Platform Conversation Routing provides Conversation Control APIs, allowing you to:

* Pass control to another app
* Release thread control from the current app
* Take thread control from another app (primary behavior only)
* Extend thread control for your app
* Request control of a conversation from another app (default behavior only)
* Determine which app currently controls a conversation
* Check whether conversation routing is configured for your account

This document outlines the specifics of conversation control invocations to change or retrieve thread control details.

## Send API: Message send with thread controls

Thread control support within the Send API is only available when conversation routing is enabled.

### Pass thread control

You can pass thread control to a specific app by setting the `app_id` and `control_type` fields in the `thread_control` parameter.
If `app_id` is not specified, thread control will be passed to the default application.

#### Sample request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "messaging_type": "RESPONSE",  
  "thread_control": {  
  "app_id": "<APPLICATION_ID>",  
  "control_type": "pass"  
  },  
  "recipient": {  
  "id": "<IGSID>"  
  },  
  "message": {  
  "text" : "Let me transfer you to our live agent"  
  }  
}' "https://graph.facebook.com/v12.0/me/messages?access_token=<ACCESS_TOKEN>"
```
```

#### Sample response

```
```
{  
  "recipient_id":"<IGSID>",  
  "message_id":"MESSAGE-ID"  
}
```
```

### Release thread control

Release thread control by setting the `control_type` field in the `thread_control` parameter.

#### Sample request

```
```
curl -X POST -H "Content-Type: application/json" -d '{  
  "messaging_type": "RESPONSE",  
  "thread_control": {  
    "control_type": "release"  
  },  
  "recipient": {  
    "id": "<IGSID>"  
  },  
  "message": {  
    "text" : "Let me transfer you to our live agent"  
  }  
}' "https://graph.facebook.com/v12.0/me/messages?access_token=<ACCESS_TOKEN>"
```
```

#### Sample response

```
```
{  
  "recipient_id":"<IGSID>",  
  "message_id":"MESSAGE-ID"  
}
```
```

| Parameter | Description |
| --- | --- |
| `thread_control` | Specifies which Conversation Routing control flow to invoke after sending the message. |
| `control_type` | Indicates whether to pass or release thread control.   * `pass`: Passes thread control to the specified app (or the default app) and sends a webhook to the app telling it to continue the conversation. * `release`: Releases thread control to idle. No webhook is sent. Should be used when the app in control determines that no further action is needed on the conversation. |
| `app_id` (optional) | Used in the pass thread control flow to define the application ID that should become the thread owner. |

## Thread control APIs

### Pass thread control

When your app needs to hand over the conversation to another application, send a POST request to the `/PAGE_ID/pass_thread_control` endpoint.

* Set the `recipient` parameter to the IGSID of the customer.
* Set the `target_app_id` parameter to the ID of the app that should get control.
* Optionally, set the `metadata` parameter with information about the conversation.

**Notes:**

* To pass control to an Inbox, use `263902037430900` for the Page Inbox and `1217981644879628` for the Instagram Inbox.
* This API can only be invoked if:
  * You are the current thread owner, or
  * The thread is in idle state
* If the target app is not specified, control will be passed to the default application (if conversation routing is enabled).
* The target app cannot be itself to extend thread control if you are the current owner.

#### Sample request

```
```
curl -X POST "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/pass_thread_control  
  ?recipient={id:IGSID}  
  &target_app_id=APP-GETTING-CONTROL  
  &metadata=Information about the conversation  
  &access_token=PAGE-ACCESS-TOKEN"
```
```

#### Sample response

```
```
{  
  "success" : true  
}
```
```

#### Webhook notification example

```
```
{  
  "sender":{  
     "id":"IGSID" // The Instagram-scoped ID for the person who sent the message to the business  
  },  
  "recipient":{  
     "id":"BusinessId"  
  },  
  "timestamp":UNIX-TIMESTAMP,  
  "pass_thread_control":{  
     "previous_owner_app_id":"APP-RELEASING-CONTROL",  
      "new_owner_app_id": "APP-GETTING-CONTROL",  
      "metadata":"Information about the conversation"  
  }  
}
```
```

### Release thread control

Release control of the conversation (returning it to idle) as soon as your app is finished, rather than waiting for the response window to expire.

To release thread control, send a POST request to `/PAGE-ID/release_thread_control`.

* Set the `recipient` parameter to the ID of the person who sent the message.
* Optionally, set the `metadata` parameter.

**Notes:**

* Only the current thread owner can invoke this API.

#### Sample request

```
```
curl -X POST "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/release_thread_control  
  ?recipient={id:IGSID}  
  &metadata=Information about the conversation  
  &access_token=PAGE-ACCESS-TOKEN"
```
```

#### Sample response

```
```
{  
  "success" : true  
}
```
```

After a successful request, the conversation status changes to idle.

### Take thread control

To take control of a conversation, send a POST request to `/PAGE-ID/take_thread_control`.

* Set the `recipient` parameter to the ID of the person who sent the message.
* Optionally, set the `metadata` parameter.

**Notes:**

* Only supported when conversation routing is enabled.
* The thread control takeover setting must be enabled for the app in Page Settings → Page Setup → Advanced Messaging.
* You cannot invoke this API to extend thread control if you are already the thread owner.

#### Sample request

```
```
curl -X POST "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/take_thread_control  
  ?recipient={id:ID}  
  &metadata=Information about the conversation  
  &access_token=PAGE_ACCESS_TOKEN"
```
```

#### Sample response

```
```
{  
  "success" : true  
}
```
```

#### Webhook notification example

The thread owner from whom the control was taken will receive a notification with the IGSID for the person who sent the message, the ID for the Instagram Professional account that received the message, the ID for the previous app that controlled the conversation, the ID for the app that now controls the conversation, and any metadata about the conversation that was sent in the API request that triggered the webhook. If the thread was taken from idle state, no webhooks would be sent.

```
```
{  
  "sender":{  
    "id":"IGSID"  
  },  
  "recipient":{  
    "id":"BusinessId"  
  },  
  "timestamp":UNIX-TIMESTAMP,  
  "take_thread_control":{  
    "previous_owner_app_id":"PREVIOUS-OWNER-APP-ID",  
    "new_owner_app_id": "NEW-OWNER-APP-ID",  
    "metadata":"Information about the conversation"  
  }  
}
```
```

### Extend thread control

To give your app more time to respond to a message, you can extend control past the 24-hour response time frame. You can extend the time up to 7 days.

To extend control of a conversation, send a POST request to `/PAGE-ID/extend_thread_control`.

* Set the `recipient` parameter to the ID of the person who sent the message.
* Set `duration` to the length of time in seconds.

**Notes:**

* Only the current thread owner can invoke this API.

#### Sample request

```
```
curl -X POST "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/extend_thread_control  
  ?recipient={id:IGSID}  
  &duration=86400   //Length of time, in seconds  
  &access_token=PAGE-ACCESS-TOKEN"
```
```

#### Sample response

```
```
{  
  "success" : true  
}
```
```

### Request thread control

Request Thread control is only available when conversation routing is not enabled (Default message routing behavior).

To request control of a conversation from another app, send a POST request to `/PAGE-ID/request_thread_control`.

* Set the `recipient` parameter to the PSID of the customer.
* Optionally, set the `metadata` parameter.

**Notes:**

* You cannot request thread control if you are already the thread owner.
* If the thread is idle, control will be passed to you and a pass thread control webhook will be sent.

#### Sample request

```
```
curl -X POST "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/request_thread_control  
  ?recipient={id:PSID}  
  &metadata=Information about the conversation  
  &access_token=PAGE-ACCESS-TOKEN"
```
```

#### Sample response

```
```
{  
  "success" : true  
}
```
```

#### Webhook notification example

The following webhook notification will be received by the current thread owner.

```
```
{  
  "sender":{  
     "id":"IGSID" // The Instagram-scoped ID for the person who sent the message to the business  
  },  
  "recipient":{  
     "id":"BusinessId"  
  },  
  "timestamp":UNIX-TIMESTAMP,  
  "request_thread_control":{  
     "requested_owner_app_id":"APP-ASKING-FOR-THREAD-CONTROL",  
     "metadata":"Information about the conversation"  
  }  
}
```
```

### Find the app in control

To find which app currently controls a conversation, send a GET request to `/PAGE-ID/thread_owner` with the `recipient` parameter set to the Instagram-scoped ID.

* Set the `recipient` parameter to the IGSID.
* Set the `access_token` parameter to your page access token.

#### Sample request

```
```
curl -X GET "https://graph.facebook.com/LATEST-API-VERSION/PAGE-ID/thread_owner  
  ?recipient=IGSID  
  &access_token=PAGE-ACCESS-TOKEN"
```
```

#### Sample response

* If your app is the current thread owner or the default app, you'll receive the `app_id` and expiration timestamp.
* Otherwise, if the thread is not idle, you'll receive the expiration timestamp only.
* Otherwise, you'll receive an empty response.

```
```
{  
  "data": [  
    {  
      "thread_owner": {  
        "app_id": APP-ID,  
        "expiration": UNIX-TIMESTAMP  
      }  
    }  
  ]  
}
```
```

### Messaging feature status API

Check the Conversation Routing status of a Facebook Page for Messenger or a business ID for Instagram Direct (IGD) messaging.

* Send a GET request to `/v12.0/me` with the `fields=messaging_feature_status` and your `access_token`.

#### Sample request

```
```
curl -X GET "https://graph.facebook.com/v12.0/me?fields=messaging_feature_status&access_token=<ACCESS_TOKEN>"
```
```

#### Sample response

```
```
{  
  "messaging_feature_status": {  
    "hop_v2": false,  
    "msgr_multi_app": true,  
    "ig_multi_app": false  
  },  
  "id": "<page_id>"  
}
```
```
