---
title: "Send Messages on Marketing Message API for Messenger"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages/quick-replies
---

# Send Messages on Marketing Message API for Messenger

Updated: Jun 30, 2026

This guide shows you how to programmatically create a marketing messages campaign, build the marketing message payload, and send a marketing message on Messenger to a list of subscribers.

## Overview

The `act_<AD_ACCOUNT_ID>/message_campaign` endpoint is used to create and manage a marketing campaign that has the same overall objective (marketing messages), targets an audience (subscribers), and defines the budget. Each campaign can have multiple messages targeting specific audiences. For example, a message campaign can have a message that targets new subscribers, a message that targets existing subscribers, and a message that targets everyone.

The `act_<AD_ACCOUNT_ID>/messages` endpoint is used to create and send marketing messages to subscribers.

### Before you start

This guide assumes that you have created a [configuration, invoked the login dialog in your app, tested the login flow](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/onboard-businesses) and obtained [a business’ list of subscription tokens](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/get-subscription-tokens).

The Marketing Message API for Messenger is available exclusively to [**tech providers**](https://developers.facebook.com/docs/development/release/tech-providers) with an existing app that has successfully completed [Meta App Review](https://developers.facebook.com/docs/app-review) for the following permissions:

* ads\_management
* pages\_messaging
* paid\_marketing\_messages or marketing\_messages\_messenger

Currently, tech providers can only serve **businesses** located in the following regions:

* Australia
* Brazil
* Chile
* Colombia
* Hong Kong

* India
* Indonesia
* Israel
* Malaysia
* Mexico

* New Zealand
* Peru
* Philippines
* Saudi Arabia
* Singapore

* Taiwan
* Thailand
* United Arab Emirates
* United States
* Vietnam (VN)

In addition, messages can be sent to **users/subscribers** in all regions **except**:

* European Union
* Japan
* South Korea
* Australia
* United Kingdom

The Marketing Message API for Messenger is only available for Web applications.

## Step 1. Create a marketing messages campaign

You need to create a marketing messages campaign before you can send marketing messages.

Send a `POST` request to the `act_<AD_ACCOUNT_ID>/message_campaign` endpoint with the following parameters:

| Parameter | Description |
| --- | --- |
| `daily_budget` | Set to the average amount, in cents, that the business is willing to spend per day. If you provide `daily_budget`, it must be greater than 0.   * **Weekly Cap**: Your total spend in any calendar week (Sunday to Saturday) will never exceed 7 times your daily budget. * **Flexibility**: On some days, you may spend up to 75% more than your daily budget. For example, if your daily budget is $100, you may spend up to $175 on a single day, so long as you haven’t hit the Weekly Cap. * **The Daily Budget is an average, not a strict daily cap.**   For more details about daily budgets, refer to the [Help Center⁠](https://www.facebook.com/business/help/190490051321426?id=629338044106215). |
| `lifetime_budget` | Set to the total amount, in cents, that the business is willing to spend on the campaign. If you provide `lifetime_budget`, it must be greater than 0.   * The total amount you want to spend over the entire duration of your campaign.   For more details about lifetime budgets, refer to the [Help Center⁠](https://www.facebook.com/business/help/190490051321426?id=629338044106215). |
| `name` | Set to the campaign’s name. |
| `page_id` | Set to the business’ Facebook Page ID that is sending messages. |
| `pixel_id` | Optional. Set to the Meta Pixel ID to use for offsite conversion attribution. The pixel must be active and accessible by the ad account or business.  If `pixel_id` is not provided and the ad account has exactly one active accessible pixel, Meta may use that pixel for attribution. If the ad account has no active pixels or more than one active pixel, the campaign is still created without pixel tracking. To avoid ambiguity, provide `pixel_id` explicitly when you want offsite conversion attribution. |
| `start_time` | Optional. Datetime strings or Unix timestamp Default: Current time if it is not passed. The time the campaign should begin delivering. Must be now or in the future and within 30 days of the current time. |
| `end_time` | Optional. Datetime strings or Unix timestamp Default: For lifetime budget → start\_time + 30 days; daily budget → none. The time the campaign should automatically stop delivering. Must be after start\_time. |

### Campaign budget behavior

When you create a Marketing Messages campaign, campaign budget is optional. If you do not provide a `daily_budget` or `lifetime_budget`, Meta may set an estimated daily budget cap for the campaign. This cap is the maximum amount the campaign can spend per day under the campaign budget. It does not guarantee delivery, reach, or spend. Actual charges may be lower and are based only on billable message delivery.

### Using your own budget

You can provide a `daily_budget` or `lifetime_budget` when creating or updating a campaign. If the budget you provide is lower than the generated budget reference for the campaign, the API may return a non-blocking warning. Your campaign will still use the budget you provided.

### Sending and charges

Creating a campaign does not send messages or create charges by itself. You control message sending through the send API. Charges accrue only for billable message delivery, and campaign spend remains subject to the campaign budget cap and existing account-level controls.

### Sample request

*Formatted for readability. This example includes `pixel_id` to enable offsite conversion attribution and `start_time` and `end_time` to schedule the campaign.*

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/message_campaign" \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "<MESSAGE_CAMPAIGN_NAME>",
           "lifetime_budget": <LIFETIME_BUDGET>,
           "page_id": <PAGE_ID>,
           "pixel_id": <PIXEL_ID>,
           "start_time": <START_TIME>,
           "end_time": <END_TIME>
         }'
```

This sample provides `lifetime_budget`. To let Meta set an estimated daily budget cap, omit both `daily_budget` and `lifetime_budget`.

On success, your app receives a JSON object containing the message campaign ID, which will be used for sending messages in step 3. If Meta sets an estimated daily budget cap or detects that your provided budget is below an estimated budget reference, the response may include `info` or `warning`.

```
```
{  
  "id": "<MESSAGE_CAMPAIGN_ID>"  
}
```
```

If you are familiar with Meta’s Marketing API, this endpoint is similar to a combination of the [`campaigns` and `adsets` endpoints](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/basic-ad-creation).

Guidance for minimum lifetime budget:

* Minimum budget per day for a currency can be obtained from the [`minimum_budgets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/minimum_budgets) call, specifically from the `min_daily_budget_imp` value.
* To calculate the minimum lifetime budget, multiply the `min_daily_budget_imp` value by a lifetime of 30 days.
* For example if the `min_daily_budget_imp` for USD is 100 cents, the minimum `lifetime_budget` should be $30
* Note: Amount denomination refers to the smallest unit of currency used in an ad account, such as cents for USD.

Learn more about daily and lifetime budgets in the [Marketing API documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/budgets).

## Step 2. Build the message payload

This step covers building the message attachment used when sending a message.

For additional information on the different types of templates supported, see the [API reference](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/api-reference).

### Preview the message attachment

For `message_payload`, use the payload from above.

```
curl -X GET \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
        "https://graph.facebook.com/<API_VERSION>/`act_<AD_ACCOUNT_ID>/generatepreviews
          ?ad_format=MESSENGER_MARKETING_MESSAGES_MEDIA&creative={"marketing_message_structured_spec":{},"object_story_spec":{"page_id":<PAGE_ID>,"link_data":{}}}&message=<MESSAGE_PAYLOAD>"
```

On success, your app receives a JSON object containing an iframe that, when clicked, displays how your message attachment looks.

```
```
{  
  "data": [  
    {  
"body": "<iframe src=\"https://business.facebook.com/ads/api/preview_iframe.php?d=AQJlIRwQZEB3DV_-9n9Vb7-OXjwuI8tfX-md415ofVW34Lm2fJKx5-e8KinQU7b15t8J5aWQMvd_uv6yZ7XfNtPbJeGWsZoqh7AgvVKKr60cISQMHlRdCOUNKfzSKIBNbkCj-GScUH7XoI16u0LK6EiMgARt9Idn4Ojob58Vtr6ehE6p1VNz3usdjd8OcTf5Tn2oN1s-NDRcSSM_6Dhue7rBif_4upZQ88uUePP6y4WwTYe8N4aVUYphxDT2hnoMoioMX18gzqQ40MibOtvOwbK16EYaajefdzNxi24ptBgXb7B4R_btrz5d3aKeqRN4ZEQhTzYXdmO_I_NZuLUl5n8He0by8mLNQOFNGeMOWvO-H-bOi7vKnubv7fGu3lp0WiAXhY-QTtLASsTU3puD5nbY2-59gND3HKVFnFNtGA95ndRUfrviqlMzDXKNMaRZIX-J0rk-HYPuE9B8z1xV2j-Q&t=AQLPJ9fLVIxT7JDnNo8\" width=\"274\" height=\"213\" scrolling=\"yes\" style=\"border: none;\"><\<iframe>"  
    }  
  ]  
}
```
```

## Step 3. Send a marketing message

When a business’ customer or potential customer opts in to receive marketing messages from the business, your app receives a subscription token ID. Each subscriber is assigned only one subscription token ID, which represents the relationship between the subscriber and the business’s Facebook Page.

If your app has sent marketing messages using the [Marketing Messages API in Messenger](https://developers.facebook.com/docs/messenger-platform/marketing-messages), all subscription token IDs acquired previously can be used in this new API.

To send a marketing message to a subscriber, make a `POST` request to the `act_<AD_ACCOUNT_ID>/messages` endpoint with the following parameters:

| Parameter | Description |
| --- | --- |
| `message_id` | Required. Set to the `<MESSAGE_CAMPAIGN_ID>` received in step 1. |
| `messenger_delivery_data.subscription_token` | Required. Set to the subscription token of the subscriber. |
| `message` | Required. Set to the `attachment` object built in step 2. |
| `min_conversation_gap_seconds` | Optional. Set to a positive number of seconds to prevent sending when recent organic Messenger thread activity between the Page and the end user is inside the requested gap. When this control prevents a send, the API returns error code `2300052` with the message `This person is not available right now.` |

### Limitations

* You can only send one message every 12 hours per `subscription_token`. If sending multiple messages, ensure you delay subsequent messages by at least 12 hours to avoid errors.

### Sample request

*Formatted for readability.*

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/messages" \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{
           "message_id": "<MESSAGE_CAMPAIGN_ID_FROM_STEP_1>",
           "messenger_delivery_data": {
             "subscription_token": "<SUBSCRIPTION_TOKEN_ID>"
           },
           "message": "<MESSAGE_ATTACHMENT_OBJECT_FROM_STEP_2>",
           "min_conversation_gap_seconds": <MIN_CONVERSATION_GAP_SECONDS>
        }'
```

On success, your app receives the following JSON object with `success` set to `true` and a `marketing_message_tracking_id` for tracking this message-sending request in subsequent webhook notifications.

```
```
{  
  "success": true,  
  "marketing_message_tracking_id": "98ecd977-245a-4ec0-a8e0-8b8ecaad8030"  
}
```
```

If you are familiar with Meta’s Marketing API, this endpoint is similar to the [`ads` endpoint](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/basic-ad-creation).

### Complete example

*Formatted for readability.*

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/messages" \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{
           "message_id": "<MESSAGE_CAMPAIGN_ID_FROM_STEP_1>",
           "messenger_delivery_data": {
             "subscription_token": "<SUBSCRIPTION_TOKEN_ID>"
           },
           "message": {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "generic",
                  "elements": [
                    {
                      "title": "<MESSAGE_TITLE>",
                      "image_url": "<IMAGE_URL>",
                      "subtitle": "<ADDITIONAL_MESSAGE_TEXT>",
                      "default_action": {
                        "type": "web_url",
                        "url": "<DEFAULT_URL_TO_OPEN>",
                        "webview_height_ratio": "<COMPACT_FULL_TALL>"
                      },
                      "buttons": [
                        {
                          "type": "web_url",
                          "url": "<BUTTON_URL>",
                          "title": "<BUTTON_TEXT>"
                        }
                      ]
                    }
                  ]
                }
              }
            }
         }'
```

### Webhook delivery failure notification

When a marketing message fails to be delivered from a page to a user, a notification is sent to apps subscribed to the `marketing_message_delivery_failed` event for that page. To receive these notifications through a webhook, follow the [setup instructions in the Meta Webhooks for Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks):

#### Sample payload

```
```
{  
   "app_id": 12313123123123,  
   "business_id": 134141414124123,  
   "page_id": 140984918491243,  
   "messenger_subscription_token": "12348141984909088",  
   "timestamp": 41412414141,  
   "error_message": "Unknown Error",  
   "message_id": "124141414124"  
}
```
```

#### Field reference

| Property | Description |
| --- | --- |
| `app_id` | The application ID |
| `business_id` | The end business ID for the page |
| `page_id` | The page ID |
| `messenger_subscription_token` | The `subscription_token` of the recipient who has opted in to receiving marketing messages. |
| `timestamp` | Timestamp when the error happened |
| `error_message` | Error message for the marketing message sending failure |
| `message_id` | The ID of the marketing message campaign |

### Webhook message sent notification

When a marketing message has been sent from the page to a user, a notification is sent to apps subscribed to the `marketing_message_echoes` event for that page. To receive these notifications through a webhook, follow the [setup instructions in the Meta Webhooks for Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks):

#### Sample payload

```
```
{  
  "field": "marketing_message_echoes",  
  "recipient_id": 123123123123,  
  "page_id": 140984918491243,  
  "app_id": 12313123123123,  
  "timestamp": 41412414141,  
  "mid": "mid.$c12312312312312",  
  "marketing_message_tracking_id": "98ecd977-245a-4ec0-a8e0-8b8ecaad8030",  
  "messenger_subscription_token": "12348141984909088",  
  "message_id": "124141414124"  
}
```
```

#### Field reference

| Property | Description |
| --- | --- |
| `field` | `marketing_message_echoes` |
| `recipient_id` | The Page-scoped ID for the person who received a message from your business  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `page_id` | The page ID |
| `app_id` | The application ID |
| `timestamp` | Timestamp when the error happened |
| `mid` | ID representing a Messenger’s message.  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `marketing_message_tracking_id` | A unique identifier for tracking marketing message requests. |
| `messenger_subscription_token` | The `subscription_token` of the recipient who has opted in to receiving marketing messages. |
| `message_id` | The ID of the marketing message campaign |

### Webhook message delivery notification

When a marketing message has been delivered from the page to a user, a notification is sent to apps subscribed to the `marketing_message_deliveries` event for that page. To receive these notifications through a webhook, follow the [setup instructions in the Meta Webhooks for Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks):

#### Sample payload

```
```
{  
  "field": "marketing_message_deliveries",  
  "recipient_id": 123123123123,  
  "page_id": 140984918491243,  
  "app_id": 12313123123123,  
  "timestamp": 41412414141,  
  "mid": "mid.$c12312312312312",  
  "marketing_message_tracking_id": "98ecd977-245a-4ec0-a8e0-8b8ecaad8030",  
  "messenger_subscription_token": "12348141984909088",  
  "message_id": "124141414124"  
}
```
```

#### Field reference

| Property | Description |
| --- | --- |
| `field` | `marketing_message_deliveries` |
| `recipient_id` | The Page-scoped ID for the person who received a message from your business  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `page_id` | The page ID |
| `app_id` | The application ID |
| `timestamp` | Timestamp when the error happened |
| `mid` | ID representing a Messenger’s message.  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `marketing_message_tracking_id` | A unique identifier for tracking marketing message requests. |
| `messenger_subscription_token` | The `subscription_token` of the recipient who has opted in to receiving marketing messages. |
| `message_id` | The ID of the marketing message campaign |

### Webhook message read notification

When a user reads a marketing message, a notification is sent to apps subscribed to the `marketing_message_reads` event for that page. To receive these notifications through a webhook, follow the [setup instructions in the Meta Webhooks for Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks):

#### Sample payload

```
```
{  
  "field": "marketing_message_reads",  
  "recipient_id": 123123123123,  
  "page_id": 140984918491243,  
  "app_id": 12313123123123,  
  "timestamp": 41412414141,  
  "marketing_message_tracking_id": "98ecd977-245a-4ec0-a8e0-8b8ecaad8030",  
  "messenger_subscription_token": "12348141984909088",  
  "message_id": "124141414124"  
}
```
```

#### Field reference

| Property | Description |
| --- | --- |
| `field` | `marketing_message_reads` |
| `recipient_id` | The Page-scoped ID for the person who received a message from your business  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `page_id` | The page ID |
| `timestamp` | Timestamp when the error happened |
| `marketing_message_tracking_id` | A unique identifier for tracking marketing message requests. |
| `messenger_subscription_token` | The `subscription_token` of the recipient who has opted in to receiving marketing messages. |
| `message_id` | The ID of the marketing message campaign |

### Webhook message click notification

When a user clicks a marketing message, a notification is sent to apps subscribed to the `marketing_message_clicks` event for that page. To receive these notifications through a webhook, follow the [setup instructions in the Meta Webhooks for Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks):

#### Sample payload

```
```
{  
  "field": "marketing_message_clicks",  
  "recipient_id": 123123123123,  
  "page_id": 140984918491243,  
  "timestamp": 41412414141,  
  "mid": "mid.$c12312312312312",  
  "messenger_subscription_token": "12348141984909088",  
  "message_id": "124141414124"  
}
```
```

#### Field reference

| Property | Description |
| --- | --- |
| `field` | `marketing_message_clicks` |
| `recipient_id` | The Page-scoped ID for the person who received a message from your business  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `page_id` | The page ID |
| `timestamp` | Timestamp when the error happened |
| `mid` | ID representing a Messenger’s message.  *Note: This field will be invisible if the subscriber is acquired from the [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience#custom-audience-api) method.* |
| `messenger_subscription_token` | The `subscription_token` of the recipient who has opted in to receiving marketing messages. |
| `message_id` | The ID of the marketing message campaign |

## Get all campaigns

Use Meta’s Marketing API `<AD_ACCOUNT_ID>/ads` endpoint to get a list of all marketing messages campaigns for a business.

Send a `GET` request to the `<AD_ACCOUNT_ID>/ads` endpoint and include the `fields` parameter with the following fields:

* `adset` – Included the following parameters:
  * `name` – to get the name of the `adset`
  * `daily_budget` – The average daily spend over the life of the campaign
  * `lifetime_budget` – The amount spent over the life of the campaign
  * `start_time` – When the campaign started (UNIX timestamp)
  * `end_time` – When the campaign ended (UNIX timestamp)
* `campaign` – include the following parameters:
  * `name` – to get the name of the campaign
  * `is_message_campaign` – to only return marketing message campaigns
  * `is_direct_send_campaign` – included for marketing message campaigns
* `id` – the ID for the message that was sent

### Sample request

*Formatted for readability.*

```
curl -X GET \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
        "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/ads
          ?fields=id,
                  adset{name,daily_budget,lifetime_budget,start_time,end_time},
                  campaign{name,is_direct_send_campaign,is_message_campaign}"
```

On success your app receives a JSON object with basic information about the marketing messaging campaign and message sent during the campaign.

```
```
{  
  "data": [  
    {  
      "id": "<MESSAGE_ID>",  
      "adset": {  
        "name": "<ADSET_NAME>",  
        "lifetime_budget": "<LIFETIME_BUDGET>",  
        "daily_budget": "<DAILY_BUDGET>",  
        "start_time": "<START_TIME>",  
        "end_time": "<END_TIME>",  
        "id": "<ADSET_ID>"  
      },  
      "campaign": {  
        "name": "<MESSAGE_CAMPAIGN_NAME>",  
        "is_message_campaign": true,  
        "is_direct_send_campaign": true,  
        "id": "<MESSAGE_CAMPAIGN_ID>"  
      }  
    },  
  ...  
  ]  
}
```
```

### Get a campaign

Send a `GET` request to the `<MESSAGE_CAMPAIGN_ID>` endpoint to get information about a specific marketing messages campaign. Include the `fields` parameter with the following fields:

* `adset` – Included the following parameters:
  * `name` – to get the name of the `adset`
  * `daily_budget` – The average daily spend over the life of the campaign
  * `lifetime_budget` – The amount spent over the life of the campaign
  * `start_time` – When the campaign started (UNIX timestamp)
  * `end_time` – When the campaign ended (UNIX timestamp)
  * `promoted_object{pixel_id}` – Pixel ID, if pixel attribution is enabled for the campaign
* `campaign{name}` – to get the name of the campaign
* `creative{actor_id}` – to get the Facebook Page ID of the business
* `id` – the ID for the message

### Sample request

*Formatted for readability.*

```
curl -X GET \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
        "https://graph.facebook.com/<MESSAGE_CAMPAIGN_ID> \
          ?fields=id,
                  campaign{name},
                  creative{actor_id},
                  adset{name,lifetime_budget,daily_budget,start_time,end_time,promoted_object{pixel_id}}"
```

On success, your app receives a JSON object with basic information about the marketing messaging campaign and message sent during the campaign.

```
```
{  
  "id": "<MESSAGE_CAMPAIGN_ID>",  
  "campaign": {  
    "name": "<MESSAGE_CAMPAIGN_NAME>"  
  },  
  "adset": {  
    "lifetime_budget": "<LIFETIME_BUDGET>",  
    "daily_budget": "<DAILY_BUDGET>",  
    "start_time": "<START_TIME>",  
    "end_time": "<END_TIME>",  
    "promoted_object": {  
      "pixel_id": "<PIXEL_ID>"  
    }  
  },  
  "creative": {  
    "actor_id": "<PAGE_ID>"  
  }  
}
```
```

## Delete a marketing messages campaign

Send a `DELETE` request to the `/<MESSAGE_CAMPAIGN_ID>` endpoint.

Be cautious when deleting campaigns, as this action cannot be undone. Always double-check the message campaign ID before deletion to avoid accidental loss of data.

```
curl -X DELETE "https://graph.facebook.com/<API_VERSION>/<MESSAGE_CAMPAIGN_ID>" \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>"
```

On success, your app receives a JSON object with `success` set to `true`.

```
```
{  
   "success": bool  
}
```
```

## Delivery estimation

Use the Delivery Estimation API to provide an estimate of the number of send message API calls and cost for a given input. This estimate is based on factors such as budget, number of available subscribers, and per-country pricing. This is an estimate and true numbers may vary.

To get a delivery estimation, send a `GET` request to the `/act_<AD_ACCOUNT_ID>/message_delivery_estimate` endpoint with the following parameters:

* `daily_budget` – set to daily spend, **or**`lifetime_budget` – set to lifetime spend. Can be omitted to estimate the cost for your full audience without a budget constraint
* `lifetime_in_days` – set to the campaign duration in days
* `pacing_type` – set to `no_pacing` for direct send campaigns
* `fields` – set to a comma separated list with :
  \* `estimate_delivery_upper_bound` – The upper bound of the estimated message delivery
  * `estimate_delivery_lower_bound` – The lower bound of the estimated message delivery
  * `estimate_cost_upper_bound` – The upper bound of the estimated message cost in ad account currency
  * `estimate_cost_lower_bound` – The lower bound of the estimated message cost in ad account currency
* `is_direct_send_campaign` – set to `true`
* `promoted_object` – set to an object with `page_id` set to the business’ Facebook Page ID
* `targeting_spec` – set to an object with the following properties:
* `publisher_platforms` – set to an array with `"messenger"`
* `messenger_positions` – set to an array with `"marketing_messages"`

#### Example request

```
curl -X GET  "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/message_delivery_estimate"
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
     -d 'fields=estimate_delivery_upper_bound,estimate_delivery_lower_bound,estimate_cost_upper_bound,estimate_cost_lower_bound' \
     -d 'targeting_spec={messenger_positions: ["marketing_messages"], publisher_platforms:["messenger"]}' \
     -d 'promoted_object={page_id: <PAGE_ID>}' \
     -d 'daily_budget=<BUDGET_IN_CENTS>' \
     -d 'is_direct_send_campaign=true' \
     -d 'pacing_type=no_pacing'
```

On success your app receives a JSON object with both delivery and cost estimates:

```
```
{  
  "data": [  
    {  
      "estimate_delivery_upper_bound": <UPPER_BOUND_ESTIMATED_NUMBER_API_CALLS>,  
      "estimate_delivery_lower_bound": <LOWER_BOUND_ESTIMATED_NUMBER_API_CALLS>,  
      "estimate_cost_upper_bound": <UPPER_BOUND_ESTIMATED_COST>,  
      "estimate_cost_lower_bound": <LOWER_BOUND_ESTIMATED_COST>  
    }  
  ]  
}
```
```

#### Notes

* Cost values are in ad account currency lowest denomination(For example cents)
* These metrics are [estimated and in development⁠](https://www.facebook.com/business/help/metrics-labeling#estimated).

## Next steps

You’ve sent messages, now it’s time to [measure their performance](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/measure-performance).
