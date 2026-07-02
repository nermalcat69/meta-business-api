---
title: "message_reads Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_referrals
---

# message\_reads Webhook Event Reference

Updated: Jun 21, 2022

This event will be sent to your webhook when a message a Page has sent has been read by the user.  
You can subscribe to this callback by selecting the `message_reads` field when [setting up](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks#setup) your webhook.

## Example

```
{
   "sender":{
      "id":"<PSID>"
   },
   "recipient":{
      "id":"<PAGE_ID>"
   },
   "timestamp":1458668856463,
   "read":{
      "watermark":1458668856253
   }
}
```

## Properties

### `sender`

| `sender` Field | Description |
| --- | --- |
| `id` *string* | The Page-scoped ID for the person who sent a message to your business |

### `recipient`

| `recipient` Field | Description |
| --- | --- |
| `id` *string* | The ID for your Facebook Page |

### `read`

| Property | Type | Description |
| --- | --- | --- |
| `watermark` | Number | All messages that were sent before or at this timestamp were read |

The `watermark` field is used to determine which messages were read. It represents a timestamp indicating that all messages with a timestamp before `watermark` were read by the recipient.
