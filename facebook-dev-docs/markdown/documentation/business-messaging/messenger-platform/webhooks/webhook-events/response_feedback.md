---
title: "messaging_referrals Webhook Event Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/response_feedback
---

# messaging\_referrals Webhook Event Reference

Updated: Jul 1, 2025

This callback will occur when the user already has a thread with the bot and user comes to the thread from:

* Following an [m.me link with a referral parameter](https://developers.facebook.com/documentation/business-messaging/messenger-platform/discovery/m-me-links)
* Clicking on a [Messenger Conversation Ad](https://developers.facebook.com/docs/messenger-platform/guides/ads)

For tracking referrals in new threads, refer to [Postback Event](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_postbacks).

To start receiving these events you need to subscribe to `messaging_referrals` in the webhook settings for your app.

### Contents

* [Examples](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/response_feedback#examples)
  * [m.me Links](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/response_feedback#m-me)
  * [Ad Referral](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/response_feedback#ads)
* [Properties](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/response_feedback#properties)

## Examples

### m.me Link

```
{
  "sender": {
    "id": "<PSID>"
  },
  "recipient": {
    "id": "<PAGE_ID>"
  },
  "timestamp": 1458692752478,
  "referral": {
    "ref": <REF_DATA_PASSED_IN_M.ME_PARAM>,
    "source": "SHORTLINK",
    "type": "OPEN_THREAD",
  }
}
```

### Ad Referral

```
{
  "sender": {
    "id": "<PSID>"
  },
  "recipient": {
    "id": "<PAGE_ID>"
  },
  "timestamp": 1458692752478,
  "referral": {
    "ref": <REF_DATA_IF_SPECIFIED_IN_THE_AD>,
    "ad_id": <ID_OF_THE_AD>,
    "source": "ADS",
    "type": "OPEN_THREAD",
    "ads_context_data": {
      "ad_title": <TITLE_OF_THE_AD>,
      "photo_url": <URL_OF_THE_IMAGE_FROM_AD_THE_USER_IS_INTERESTED_IN>,
      "video_url": <THUMBNAIL_URL_OF_THE_VIDEO_FROM_THE_AD>,
      "post_id": <ID_OF_THE_POST>,
      "product_id": <PRODUCT_ID>,
      "flow_id": <ID_OF_THE_PARTNER_APP_WELCOME_MESSAGE_FLOW>
    }
  }
}
```

For more information about the flow ID, please refer to [Welcome Message Flows](https://developers.facebook.com/documentation/business-messaging/messenger-platform/ads/ads-welcome-message-flows).

## Properties

### `sender`

| `sender` Field | Description |
| --- | --- |
| `id` *string* | The Page-scoped ID for the person who sent a message to your business |

### `recipient`

| `recipient` Field | Description |
| --- | --- |
| `id` *string* | The ID for your Facebook Page |

### `referral`

| Property | Type | Description |
| --- | --- | --- |
| `source` | String | The source of the referral. Supported values:   * `ADS` * `SHORTLINK` |
| `type` | String | The referral type. Currently supports `OPEN_THREAD`. |
| `ref` | String | The optional `ref` attribute set in the referrer. Only alphanumeric characters as well as -, \_, and = are supported. |
| `referer_uri` | String | The URI of the site where the message was sent. |
| `ads_context_data` | Object | The data contaning information about the CTM ad, the user initiated the thread from. |

### `ads_context_data`

| Property | Type | Description |
| --- | --- | --- |
| `ad_title` | String | Title of the Ad. |
| `photo_url` | String | [Optional] Url of the image from the Ad the user is interested. |
| `video_url` | String | [Optional] Thumbnail url of the the video from the ad. |
| `post_id` | String | ID of the post. |
| `product_id` | String | [Optional] Product ID from the Ad the user is interested. |
