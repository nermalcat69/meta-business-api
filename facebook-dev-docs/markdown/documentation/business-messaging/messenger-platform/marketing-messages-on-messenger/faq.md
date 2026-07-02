---
title: "Grow your Audience for Marketing Message API for Messenger"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq
---

# Grow your Audience for Marketing Message API for Messenger

Updated: Jun 21, 2026

This guide discusses how a business using your app can increase their number of subscribers. A subscription token represents a person who has subscribed, opted in to receiving marketing messages from a business' Facebook Page. This guide shows how to increase a business' number of subscribers using the following options:

* [Custom Audience API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq#custom-audience-api)
* [Click to Messenger ads](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq#click-to-messenger-ads)
* [Opt-in Requests](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq#opt-in-requests)
* [Organic Automations](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq#organic-automations)

You can also use the [Unsubscribe API](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq#unsubscribe-api) to unsubscribe matched users from a Page's marketing messages audience.

## Growing your audience options

### Option 1: Custom Audience API

For businesses that have a list of customer data such as phone numbers and emails, you can upload this data to match to Facebook users and have subscription tokens be created.

#### Step 1: Create a Messenger Marketing Messages Custom Audience

Send a `POST` request to the `act_<AD_ACCOUNT_ID>/customaudiences` endpoint with the following required parameters:

* `customer_file_source` – set to `USER_PROVIDED_ONLY`
* `description` – set to the description of the custom audience
* `marketing_message_channels` – set to an object with `MESSENGER` set to the business' Facebook Page ID
* `name` – set to the name of the custom audience
* `subscription_info` – set to an array with `"MESSENGER"` as the only item
* `subtype` – set to `CUSTOM`
* `use_for_products` – set to an array with `"MARKETING_MESSAGES"` as the only item

#### Sample request

*Formatted for readability.*

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/customaudiences" \  
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \  
     -H "Content-Type: application/json" \  
     -d '{  
           "subtype": "CUSTOM",  
           "customer_file_source": "USER_PROVIDED_ONLY",  
           "name": "<CUSTOM_AUDIENCE_NAME>",  
           "description": "<CUSTOM_AUDIENCE_DESCRIPTION>",  
           "use_for_products": ["MARKETING_MESSAGES"],  
           "subscription_info": ["MESSENGER"],  
           "marketing_message_channels": {  
             "MESSENGER":  "<PAGE_ID>"  
           }  
        }'
```

On success, your app receives a JSON object with a custom audience ID.

```
{  
  "data": [  
    {  
      "id": "<CUSTOM_AUDIENCE_ID>"  
    }  
  ]  
}
```

#### Step 2: Upload users to Custom Audience

After creating a custom audience, you can upload custom information to match with Facebook users. Every user that is matched in the upload will be given a subscription token.
You can add an unlimited number of records to an audience, but only up to 10000 at a time. Changes to your Custom Audiences don't happen immediately and can take up to 24 hours. Match rates range from 20% to 70%, depending on factors such as the quality of the list and the type of identifiers provided.

To safeguard user privacy, the `/<PAGE_ID>/notification_message_tokens` endpoint will only return subscription tokens for a given Custom Audience if there are 100 or more matched users in the upload. If fewer than 100 users match, tokens for that Custom Audience will be excluded from the response.

Send a POST request to the `/<CUSTOM_AUDIENCE_ID>/users` endpoint with the following required parameters:

#### Parameters

| Name | Description |
| --- | --- |
| `payload`  JSON Object | **Required**  Includes `schema` and `data`.  For each row in `data`, you must include `EMAIL` or `PHONE` as the identifier to conduct identity matching. `EMAIL` and `PHONE` can both be included for a single row, but at least one of the two must be present. Each value in each row of the data should be hashed using *SHA256 encoding*.  Expected format for `PHONE`: Remove symbols, letters, and any leading zeroes.  ``` Input: (+84) 091-2345678 Output: 84912345678 ```  For additional schema options such as `FN` and `LN`, see [Customer File Custom Audiences API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/custom-audiences).  **Example**  ``` {   "schema": [       "EMAIL",       "PHONE",       "FN",       "LN",     ]   "data":     [       [         "<HASHED_EMAIL>",         "<HASHED_PHONE>",         "<HASHED_FIRST_NAME>",         "<HASHED_LAST_NAME>"       ],       [         "<HASHED_EMAIL>",         "<HASHED_PHONE>",         "<HASHED_FIRST_NAME>",         "<HASHED_LAST_NAME>"       ],       [         "<HASHED_EMAIL>",         "<HASHED_PHONE>",         "<HASHED_FIRST_NAME>",         "<HASHED_LAST_NAME>"       ],     ] } ``` |

#### Sample request

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<CUSTOM_AUDIENCE_ID>/users" \  
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \  
     -H "Content-Type: application/json" \  
     -d '{  
           "payload": {  
              "schema":[  
                "EMAIL",  
                "PHONE",  
                "FN",  
                "LN",  
              ]  
              "data":  
              [  
                [  
                  "<HASHED_EMAIL>",  
                  "<HASHED_PHONE>",  
                  "<HASHED_FIRST_NAME>",  
                  "<HASHED_LAST_NAME>"  
                ],  
                [  
                  "<HASHED_EMAIL>",  
                  "<HASHED_PHONE>",  
                  "<HASHED_FIRST_NAME>",  
                  "<HASHED_LAST_NAME>"  
                ],  
                [  
                  "<HASHED_EMAIL>",  
                  "<HASHED_PHONE>",  
                  "<HASHED_FIRST_NAME>",  
                  "<HASHED_LAST_NAME>"  
                ],  
              ]  
            }  
        }'
```

On success, your app receives a JSON object with the number of valid and invalid entries. A job will run asynchronously to match the customer information to Facebook users and create the subscription tokens.

```
{  
  "audience_id": "<CUSTOM_AUDIENCE_ID>",  
  "num_received": 3,  
  "num_invalid_entries": 0,  
  "invalid_entry_samples": {  
  }  
}
```

#### Step 3: Remove users from Custom Audience

To delete subscriber records from a Custom Audience, send a `DELETE` request to the `/<CUSTOM_AUDIENCE_ID>/users` endpoint. Use the same `payload` parameter described in [Step 2: Upload users to Custom Audience](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/faq#upload-users-to-custom-audience).

**Note:** If a user should no longer be part of your marketing messages audience, remove that user from every subscriber list or Custom Audience where they appear. This endpoint removes users only from the Custom Audience specified by `<CUSTOM_AUDIENCE_ID>`.

#### Sample request

```
  curl -X DELETE "https://graph.facebook.com/<API_VERSION>/<CUSTOM_AUDIENCE_ID>/users" \
       -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
       -H "Content-Type: application/json" \
       -d '{
             "payload": {
               "schema": ["EMAIL"],
               "data": [
                 [
                   "<HASHED_EMAIL>"
                 ],
                 [
                   "<HASHED_EMAIL>"
                 ]
               ]
             }
          }'
```

On success, your app receives a JSON object with the number of valid and invalid entries.

```
  {  
    "audience_id": "<CUSTOM_AUDIENCE_ID>",  
    "session_id": "<SESSION_ID>",  
    "num_received": 2,  
    "num_invalid_entries": 0,  
    "invalid_entry_samples": {  
    }  
  }
```

#### Step 4: Webhook notification for uploaded customer rows matching process

Each time a batch of uploaded customer rows matching process completes, a notification is sent to apps subscribed to the `marketing_messages_subscriber_upload_status` event for that page. To receive these notifications through a webhook, follow the [setup instructions in the Meta Webhooks for Messenger Platform](https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks).

#### Sample payload

```
{  
   "field": "marketing_messages_subscriber_upload_status",  
   "app_id": 12313123123123,  
   "page_id": 134141414124123,  
   "custom_audience_id": 140984918491243,  
   "ad_account_id": 12348141984909088,  
   "timestamp": 41412414141,  
   "num_rows": 1000,  
   "business_id": 12313123123123,  
   "approximate_count_lower_bound": 105,  
   "approximate_count_upper_bound": 120,  
   "batch_uploading_status": "SUCCESS"  
}
```

#### Field reference

| Property | Description |
| --- | --- |
| `field` | `marketing_messages_subscriber_upload_status` |
| `app_id` | Application ID |
| `page_id` | Page ID |
| `custom_audience_id` | Custom Audience ID |
| `ad_account_id` | Ad Account ID |
| `timestamp` | Timestamp when the event happened |
| `num_rows` | Number of uploaded customer rows that have been processed |
| `business_id` | The end business ID for the page |
| `approximate_count_lower_bound` | Lower bound of the approximate number of people in this Custom Audience |
| `approximate_count_upper_bound` | Upper bound of the approximate number of people in this Custom Audience |
| `batch_uploading_status` | Status of the upload for this batch of uploaded customers |

#### Step 5: Retrieve existing Custom Audiences

In order to get a list of Messenger marketing message custom audiences, you can add the following fields and filter to the `/act_<AD_ACCOUNT_ID>/customaudiences` endpoint.

Fields:

```
fields=id,name,messenger_marketing_messages_page
```

Filters:

```
filtering=[{"field":"data_source.subtype","operator":"IN","value":[1010]}]
```

Filters (URL Encoded version):

```
filtering=%5B%7B%22field%22%3A%22data_source.subtype%22%2C%22operator%22%3A%22IN%22%2C%22value%22%3A%5B1010%5D%7D%5D
```

#### Sample request

```
curl -X GET "https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/customaudiences?fields=id,name,messenger_marketing_messages_page&filtering=%5B%7B%22field%22%3A%22data_source.subtype%22%2C%22operator%22%3A%22IN%22%2C%22value%22%3A%5B1010%5D%7D%5D" \  
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \  
     -H "Content-Type: application/json"
```

### Option 2: Click to Messenger ads

Customers or potential customers who click and respond to [Click to Messenger](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-messenger) ads are automatically subscribed to receive marketing messages; no additional opt-in flow is needed.

Businesses that have onboarded to your app automatically get this functionality for all Click to Messenger ad campaigns.

Visit our Marketing API documentation to learn more about [Ads that Click to Messenger](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-messenger).

### Option 3: Opt-in Requests

A customer, or potential customer, must first send a message via Messenger to the business' Facebook Page. This event triggers a webhook notification that is sent to your server. This webhook notification contains a Page-scoped ID (PSID) that represents the customer. Your app then uses this PSID to send the customer an opt-in request from the business' Facebook Page.

Visit our Messenger Platform documentation to learn ways to [send opt-in requests](https://developers.facebook.com/docs/messenger-platform/marketing-messages#request-permission-to-send-marketing-messages).

#### Step 1: Send an opt-in request on Messenger

The following is an example of an opt-in request.

Send a `POST` request to the `/<PAGE_ID>/messages` endpoint, where `<PAGE_ID>` is the ID for the business's Facebook Page, and include the following properties:

* `recipient` – an object with `id` set to the customer's PSID
* `page` – set to the business' Facebook Page ID
* `message.attachment` – an object with the following parameters:
  * `type` – set to `template`
  * `payload` – an object set to the message content and any additional information to be sent in the webhooks information
    * `template_type` – set to `notification_messages`
    * `notification_messages_timezone` – set to the customer's time zone
    * `title` – set to the message title
    * `image_url` – set to the url for the image in the message
    * `payload` – set to any addition webhook information

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<PAGE_ID>/messages" \  
     -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>" \  
     -Header "Content-Type: application/json" \  
     -d '{  
           "recipient": { "id": "<PSID>" },  
           "page": "<PAGE_ID>",  
           "message": {  
             "attachment": {  
               "type": "template",  
               "payload": {  
                 "template_type": "notification_messages",  
                 "notification_messages_timezone": "<CUSTOMERS_TIME_ZONE>",  
                 "title": "<MESSAGE_TITLE>",  
                 "image_url": "<IMAGE_URL>",  
                 "payload": "<ADDITIONAL_WEBHOOK_INFORMATION>"  
               }  
             }  
           }  
        }'
```

On success, your app receives a JSON response with the recipient's PSID and message ID.

```
{  
   "recipient": {  
       "id":"<PSID>",  
       "message_id":"<MESSAGE_ID>",  
   }  
}
```

Visit the Messenger Platform documentation to learn more about [available message attachment properties](https://developers.facebook.com/docs/messenger-platform/marketing-messages#request-permission-to-send-marketing-messages).

#### Step 2: Handle successful opt-in

When a customer opts in, the `messaging_optin` webhook event is triggered and a notification is sent to your webhooks server. This webhook contains the subscription token ID your app uses to send marketing messages.

##### Webhook notification payload

```
{  
  "sender": {  
    "id": "<PSID>",  
  },  
  "recipient": {  
    "id": "<PAGE-ID>",  
  },  
  "timestamp": "<TIMESTAMP>}",  
  "optin": {  
    "type": "notification_messages",  
      "payload": "<ADDITIONAL-WEBHOOK-INFORMATION>",  
      "notification_messages_token": "<SUBSCRIPTION_TOKEN_ID>",   // Subscription token  
      "notification_messages_timezone": "<TIMEZONE-ID>",  
      "user_token_status": "<TOKEN-STATUS>"  
      "notification_messages_status": "<MESSAGE-STATUS>",  
      "title": "<TITLE-FOR-THE-NOTIFICATION>"  
    }  
}
```

### Option 4: Organic Automations

Development for the Business Settings page to enable and disable the automations is in progress. Until then, businesses can only adjust these settings through the onboarding flow.

Enabling organic automations during the business onboarding flow helps boost user engagement and streamline communication. Currently, two automation types are available:

* High-Intent Comments:  
  When a user comments on a business's public Facebook post with one of six key intents—Purchase, Price, Payment, Product Inquiry, or Appointment Booking—they're automatically prompted to sign up for updates and promotions through Messenger.
* Stale Thread Follow-Up (No Reply in 48 Hours):  
  If a Messenger conversation between a business's Facebook Page and a user goes inactive (no replies for 48 hours), the user will receive a prompt inviting them to sign up for updates and promotions via Messenger.

These automations make it easy for businesses to re-engage interested users and nurture leads, creating more opportunities for meaningful connections.

#### Enable the organic automations during the onboarding experience

![Onboarding dialog 'Grow your messaging customer base' with the 'Automate future invites' toggle enabled](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/658975550_1471621534696496_1904812339622535904_n.png?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=NK1BzHwQv_IQ7kNvwE_vs6e&_nc_oc=AdqgHF8fuiqX11iSvKApNiZExBZtGUjlM8cqnQLJ6u4wXIHDd6TdBXd-KQxUdVJEExfDmrF4DB3Z2qa7_vIOR3jl&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=gqODBr3lC-Kcc8XJV2e9oA&_nc_ss=7b289&oh=00_AQBxAN6t9aE0-jMBH3W-afdmor3WHPRS9mLk-giK3BEmrw&oe=6A605B64)

## Unsubscribe API

To unsubscribe users from a Page's marketing messages audience, send a `POST` request to the `/<PAGE_ID>/messaging_customer_base/unsubscribe` endpoint. Use the Page access token generated through your Marketing Messages API for Messenger app. No new credentials are needed for this endpoint.

This endpoint unsubscribes matched users from the Page's marketing messages audience. Removing a user from a Custom Audience is different from unsubscribing the user from the Page's marketing messages audience. The `DELETE /<CUSTOM_AUDIENCE_ID>/users` endpoint removes users only from the specified Custom Audience, while this endpoint unsubscribes matched users at the Page level.

The `data` parameter is required and must be a non-empty array of rows. Each row must use one of the following identifier combinations:

* `phone`
* `email`
* `phone` and `email`
* `psid`
* `subscriber_token`

Do not combine `psid` and `subscriber_token` with each other or with phone or email identifiers in the same row. Phone and email values can be raw or SHA-256 hashed. For raw phone numbers, use E.164 format, such as `+14155551234`. For raw email addresses, use lowercase values.

### Sample request

```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<PAGE_ID>/messaging_customer_base/unsubscribe" \
     -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{
           "data": [
             {
               "phone": "<E164_PHONE_NUMBER>"
             },
             {
               "email": "<EMAIL>"
             },
             {
               "phone": "<SHA256_HASHED_PHONE>",
               "email": "<SHA256_HASHED_EMAIL>"
             },
             {
               "psid": "<PSID>"
             },
             {
               "subscriber_token": "<SUBSCRIPTION_TOKEN_ID>"
             }
           ]
         }'
```

On success, your app receives a JSON object that includes `invalid_rows_count`, the number of rows that were not processed because they used invalid identifiers, invalid identifier combinations, or incorrectly formatted values.

```
{  
  "invalid_rows_count": 0  
}
```

## Best practices

Use the text to explain how to grow marketing messages audience in your app.

**About your marketing messages audience**  
To send marketing messages you need people who have agreed to receive marketing communication from your business.
  
  
**Send messages to your existing people subscribed to your marketing messages**  
If you've previously received consent from people to send marketing messages to them before, you can continue messaging those people.
  
  
**Upload customer list custom audience**  
Upload a CSV or TXT file from your database, containing everyone subscribed to your marketing messages. Upload list [replace with a relevant link to in your app]. This list must contain at least 100 customers containing an email or phone number for each customer.
  
  
**Create an ad that clicks to Messenger**  
Create an ad that clicks to Messenger. People who respond to your ad will be invited to subscribe to marketing messages.
  
  
**Set up automated invites**  
Automatically invite people to subscribe to your marketing messages when they've interacted with your business. Set up automated invites in the Meta Business Suite (https://business.facebook.com/latest/settings/pages).

## Next steps

Now that you have subscription tokens, start [sending marketing messages](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/send-messages).
