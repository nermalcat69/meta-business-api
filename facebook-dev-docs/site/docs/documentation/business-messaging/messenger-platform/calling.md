---
title: "standby Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling
---

# standby Webhook Event Reference

Updated: Sep 25, 2024

For bots using the [handover protocol](https://developers.facebook.com/docs/messenger-platform/handover-protocol) and [conversation routing](https://developers.facebook.com/documentation/business-messaging/messenger-platform/conversation-routing), this callback will occur when a message has been sent to your page, but your application is not the current thread owner.

Instead of delivering the callback through the normal `messaging` channel, the events will be delivered to `standby` channel. You can receive [message](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messages), [read](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/message-reads), and [delivery](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/message-deliveries) events through history messages.

You can subscribe to this callback by selecting the `standby` field when [setting up](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks#setup) your webhook.

### Contents

* [Supported Events](https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling#events)
* [Example Event](https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling#example)
* [Properties](https://developers.facebook.com/documentation/business-messaging/messenger-platform/calling#properties)

## Supported Events

The following events are delivered to the standby channel:

* [`message_reads`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/message-reads)
* [`message_deliveries`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/message-deliveries)
* [`messages`](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messages)
* [`messaging_postbacks`](https://developers.facebook.com/docs/messenger-platform/webhooks/webhook-events/messaging-postbacks)

Note that `messaging_postback` events delivered via the Standby channel will not include the postback payload. The app that originally sent the [postback button](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons/postback) will receive the normal [`messaging_postbacks`](https://developers.facebook.com/docs/messenger-platform/webhooks/webhook-events/messaging-postbacks) webhook event that includes the postback payload.

## Example Event

```
{
  "object":"page",
  "entry":[
    {
      "id":"<PAGE_ID>",
      "time":1458692752478,
      "standby":[
        {
          "sender":{
            "id":"<USER_ID>"
          },
          "recipient":{
            "id":"<PAGE_ID>"
          },

          ...
        }
      ]
    }
  ]
}
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| `id` | String | The PSID of the user that triggered the webhook event. |
| `time` | Timestamp | Timestamp of the message send. |
| `standby` | Array | Array of messages received in the standby channel. |
