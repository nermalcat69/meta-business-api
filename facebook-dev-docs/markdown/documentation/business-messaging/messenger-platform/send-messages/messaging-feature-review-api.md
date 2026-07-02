---
title: "App Events for experiences in Messenger"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/messaging-feature-review-api
---

# App Events for experiences in Messenger

Updated: Mar 13, 2026

App Events help you understand and track key events that take place in your Messenger experience. The Messenger Platform logs these automatically for several activities, but you can also manually log custom events from your bot using Graph API calls.

## Prerequisites

Before you can begin, you'll need to register your bot with Meta. See our [Messenger Platform Quick Start Guide](https://developers.facebook.com/documentation/business-messaging/messenger-platform/getting-started/quick-start) to learn more.

## Automatic event logging

App event logging is automatic when your Bots for Messenger app interacts with a user. To create your own events to log interactions or events that are not logged automatically, see the [Logging Custom Events](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/messaging-feature-review-api#logging-custom-events) section.

### Predefined events for Messenger bots

The events in this table are logged automatically by the Messenger Platform.

| Event Name | Description |
| --- | --- |
| `fb_messenger_bot_message_received` | The bot has received a message.  Message Received Event Parameters:   * `fb_messenger_bot_message_type`: The message type. * `fb_messenger_bot_message_template_type`: The message template type. |
| `fb_messenger_bot_message_sent` | The bot has sent a message.  Message Sent Event Parameters:   * `fb_messenger_bot_message_type`: The message type. * `fb_messenger_bot_message_template_type`: The message template type. |
| `fb_messenger_bot_postback_called` | The user has interacted with an element that initiated a postback, such as a call to action (CTA) button, persistent menu, or structured message.  Postback Called Event Parameters:   * `fb_messenger_bot_postback_event`: The postback event name. * `fb_messenger_bot_cta_id`: The ID of the CTA. * `fb_messenger_bot_cta_kind`: The type of the CTA. |
| `fb_messenger_bot_started` | The bot was unblocked by the user. |
| `fb_messenger_bot_stopped` | The bot was blocked by the user. |
| `fb_messenger_bot_thread_deleted` | A message thread was deleted by the user. |

## Logging custom events

In addition to the predefined events, bots can log custom events by using the **[Application Activities Graph API](https://developers.facebook.com/docs/graph-api/reference/application/activities)** endpoint.

The following table describes the properties and values that must be provided to the endpoint to log a custom bot event.

| Property | Description | Value |
| --- | --- | --- |
| `event` | Specifies the event type. | Use `CUSTOM_APP_EVENTS` to indicate that this is a custom event. |
| `custom_events` | Specifies the custom event details. | Use a JSON-encoded array to specify your custom event details. |
| `advertiser_tracking_enabled` | Specifies whether advertising tracking is enabled on iOS 14.5+ devices. | Use `0` to disable and `1` to enable |
| `application_tracking_enabled` | Specifies whether advertising tracking is enabled at the application level. | Use `0` to disable and `1` to enable |
| `extinfo` | Specifies the event source. | Use a JSON-encoded array with a single value of `mb1` to indicate that this event comes from a Messenger bot. |
| `page_id` | Specifies the page ID associated with the messenger bot that logs the event. | Use the Facebook page ID of the page associated with the bot. |
| `page_scoped_user_id` | Specifies the page-scoped user ID associated with the messenger bot that logs the event. | Use the page-scoped user ID provided to your webhook. |

### Purchase event example

The following example demonstrates how to log a **purchase** event.

#### Sample request

```
curl -X POST \  
  "https://graph.facebook.com/<APP_ID>/activities" \  
  -F 'event=CUSTOM_APP_EVENTS' \  
  -F 'custom_events=[{"_eventName":"fb_mobile_purchase","_valueToSum":55.22,"fb_currency":"USD"}]' \  
  -F 'advertiser_tracking_enabled=1' \  
  -F 'application_tracking_enabled=1' \  
  -F 'extinfo=["mb1"]' \  
  -F 'page_id=<PAGE_ID>' \  
  -F 'page_scoped_user_id=<PSID>'
```

#### Sample response

On success, your app will receive the following response:

```
{"success": true}
```

## Lead event example

The following example demonstrates how to log a **lead** event.

#### Sample request

```
curl -X POST \  
  "https://graph.facebook.com/<APP_ID>/activities" \  
  -F 'event=CUSTOM_APP_EVENTS' \  
  -F 'custom_events=[{"_eventName":"lead_submitted"}]' \  
  -F 'advertiser_tracking_enabled=1' \  
  -F 'application_tracking_enabled=1' \  
  -F 'extinfo=["mb1"]' \  
  -F 'page_id=<PAGE_ID>' \  
  -F 'page_scoped_user_id=<PSID>'
```

#### Sample response

On success, your app will receive the following response:

```
{"success": true}
```

## See also

* [App Events Best Practices Guide](https://developers.facebook.com/docs/app-events/best-practices)
* [Graph API Application Activities Reference](https://developers.facebook.com/docs/graph-api/reference/application/activities)
