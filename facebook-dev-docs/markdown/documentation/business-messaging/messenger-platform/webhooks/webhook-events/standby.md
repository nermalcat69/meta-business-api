---
title: "response_feedback Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/standby
---

# response\_feedback Webhook Event Reference

Updated: Oct 8, 2024

This event will be sent to your webhook when a user provides feedback on a message on Messenger. Users provide feedback by clicking the "thumbs up"/"thumbs down" buttons or by pressing the "Good response"/"Bad response" buttons. You can subscribe to this callback by selecting the `response_feedback` field when setting up your webhook.

By subscribing to the `response_feedback` field for a particular page, all messages sent by your app on behalf of that page will have the response feedback options in the message thread. If you do not want those options in the thread, you can unsubscribe from the webhook field.

## User Experience

Once you subscribe to the response\_feedback webhook event, users will see the feedback options in thread in the two following ways:

Thumbs up and thumbs down buttons  
![Messenger business chat thread with thumbs up and thumbs down feedback buttons below a bot message](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/462213684_1547974455811572_7942823417244053832_n.png?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lwiSh3QjkiAQ7kNvwF-4Uuv&_nc_oc=Adrc57xSIHfi50w9iF8AdwbiZQNuEXdBR-DnXShd922T8dIbYF-B4rF9AhLwiRPoia15jR17iNxTI0XzGQvZNzQ-&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=MD5x_IyGPyS9VP2cALlphw&_nc_ss=7b289&oh=00_AQBWuEOK3KbK32o3NKnZzojnvOiULMuIZbsyZHmdttS5FA&oe=6A605045)

Good response and bad response buttons in long press menu

![Messenger message long press menu showing Good response and Bad response feedback options](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/462194548_538809912167769_8878195043133998042_n.png?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=XVfrEwxQ4NIQ7kNvwHik8Cz&_nc_oc=AdrzWm0oElUNU9KOcRL_S5qQA9tUXIT9f504-cAUfmyvK7PHbSdWuFU4Cr7L70MgPvOhPGSfg7AQ2hP9VrAM0gxO&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=MD5x_IyGPyS9VP2cALlphw&_nc_ss=7b289&oh=00_AQD4veSYgbc6ES6TminJQIS4DKVMWMtM8LbNl_9Wfx2fig&oe=6A60637F)

Once the user successfully submits the feedback, they will see the following submission confirmation:

![Messenger business chat thread with a Submitted confirmation overlay and checkmark after feedback is sent](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/462155708_442211091718132_5337542394737304415_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Tdua3lGkJZYQ7kNvwE-yLlZ&_nc_oc=AdqyM5zE-Bne_rMXRqX2NDby0Y2sSUA5kezfa5jm7ZnyXHJOEIY7tEUXs_BKQhOMyGhGgoYGa84lriU5klhOB1Oi&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=MD5x_IyGPyS9VP2cALlphw&_nc_ss=7b289&oh=00_AQCUHltEzYA9y2ho07NITEwlwU8e1mN25HKIe9i6FITTqQ&oe=6A607419)

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
   "response_feedback":{
         "feedback": "Good response | Bad response",
         "mid": "<Message-id>",
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

### `response_feedback`

| Property | Type | Description |
| --- | --- | --- |
| `feedback` | string | Feedback, provided by the user, on the business message.  Possible values: `Good response`, `Bad response` |
| `mid` | string | Reference to the |
