---
title: "messaging_account_linking Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/message-deliveries
---

# messaging\_account\_linking Webhook Event Reference

Updated: Nov 16, 2017

When using [Account Linking](https://developers.facebook.com/documentation/business-messaging/messenger-platform/identity/account-linking), this callback will occur when the [Link Account](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) or [Unlink Account](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) button have been tapped.

The `status` parameter tells you whether the user linked or unlinked their account. The `authorization_code` is a pass-through parameter. allowing you to match the business user entity to the page-scoped ID (PSID) of the `sender`.

### Example

```
{
  "sender":{
    "id":"USER_ID"
  },
  "recipient":{
    "id":"PAGE_ID"
  },
  "timestamp":1234567890,
  "account_linking":{
    "status":"linked",
    "authorization_code":"PASS_THROUGH_AUTHORIZATION_CODE"
  }
}
```

```
{
  "sender":{
    "id":"USER_ID"
  },
  "recipient":{
    "id":"PAGE_ID"
  },
  "timestamp":1234567890,
  "account_linking":{
    "status":"unlinked"
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

### `account_linking`

| Property | Description | Type |
| --- | --- | --- |
| `status` | `linked` or `unlinked` | String |
| `authorization_code` | Value of pass-through `authorization_code` provided in the [Account Linking](https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/buttons) flow | String |

Note: `authorization_code` is only available when `status` is `linked`
