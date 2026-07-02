---
title: "Messaging Insights API"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/analytics/app-events
---

# Messaging Insights API

Updated: Mar 27, 2026

This document explains how to programmatically get metrics for messages that your business has sent or received. The Messaging Insights API is an extension of the Pages Insights API and allows you to get the same information that appears in the Page Insights tab of your Facebook Page.

### Before you start

This guide assumes you have read the Messenger Platform Overview and implemented the needed components for sending and receiving messages and notifications.

To view metrics for a Facebook Page you own or can perform the `ANALYZE` task on, your app needs:

* The Page ID for the Facebook Page for which you want to view metrics
  * For Instagram messaging this will be the Facebook Page linked to the Instagram Professional account
* A Page Access token
* The following permissions:
  * `pages_messaging`
  * `pages_read_engagement`
  * `pages_show_list`
  * `read_insights`
* Standard Access

To view metrics for a Facebook Page you don't own or cannot perform the `ANALYZE` task on, your app needs:

* The Page ID for the Facebook Page for which you want to view metrics
  * For Instagram messaging this will be the Facebook Page linked to the Instagram Professional account
* A Page Access token requested by a person who can perform the `ANALYZE` task on the Page
* The following permissions via Facebook Login:
  * `pages_messaging`
  * `pages_read_engagement`
  * `pages_show_list`
  * `read_insights`
* Advanced Access

### Limitations

* A new conversation is counted only after a person performs an action, such as sending a reply to your business. Until then, the conversation is visible only to the person.

## Read insights metrics

To read information for one or more metrics, send a `GET` request to the `/<PAGE_ID>/insights` endpoint with the `metric` parameter set to a comma-separated list of metrics you want to view.

### Sample request

*Formatted for readability.*

```
curl -X GET "https://graph.facebook.com/<LATEST_API_VERSION>/<PAGE_ID>/insights  
    ?metric=page_messages_new_conversations_unique,page_messages_blocked_conversations_unique  
    &access_token=<PAGE_ACCESS_TOKEN>"
```

On success your app will receive the following JSON response:

```
{  
  "data": [  
    {  
      "name": "page_messages_new_conversations_unique",  
      "period": "day",  
      "values": [  
        {  
          "value": "42",  
          "end_time": "1665175977"  
        },  
      ]  
    },  
    {  
      "name": "page_messages_blocked_conversations_unique",  
      "period": "day",  
      "values": [  
        {  
          "value": "0",  
          "end_time": "1665175977"  
        },  
      ]  
    }  
  ],  
}
```

### Total over range sample request

The following example finds the total number of new, unique conversations over a specific period of time by including the `period` parameter set to `total_over_range` with the time range defined by the `since` and `until` parameters in our API call.

*Formatted for readability.*

```
curl -i -X GET "https://graph.facebook.com/<LATEST_API_VERSION>/<PAGE_ID>/insights/  
    ?metric=page_messages_new_conversations_unique  
    &since=<UNIX_TIMESTAMP_START>  
    &until=<UNIX_TIMESTAMP_STOP>  
    &period=total_over_range  
    &access_token=<PAGE_ACCESS_TOKEN>"
```

On success your app will receive the following JSON response with the number of new, unique conversations and the end of the time range:

```
{  
  "data": [  
    {  
      "name": "page_messages_new_conversations_unique",  
      "period": "total_over_range",  
      "values": [  
        {  
          "value": 27,  
          "end_time": "1665175977"  
        }  
      ],  
    }  
  ]  
}
```

### Breakdown sample request

The following example finds the total number of recurring notifications tokens over a specific period of time and grouped by topic and frequency.

```
curl -i -X GET "https://graph.facebook.com/<LATEST_API_VERSION>/<PAGE_ID>/insights/  
    ?metric=recurring_notifications_tokens  
    &since=<UNIX_TIMESTAMP_START>  
    &until=<UNIX_TIMESTAMP_STOP>  
    &period=total_over_range  
    &breakdown=recurring_notifications_topic,recurring_notifications_frequency  
    &access_token=<PAGE_ACCESS_TOKEN>"
```

On success your app will receive the following JSON response with tokens grouped by topic, "newproducts" and "10percentsale", and message frequency available for each topic, "daily", "weekly", and "monthly" for "newproducts" and "daily" and "weekly" for "10percentsale":

```
{  
  "data": [  
    {  
      "name": "recurring_notifications_tokens",  
      "period": "total_over_range",  
      "values": [  
        {  
          "value": 3,  
          "end_time": "1665175977",  
          "recurring_notifications_topic": "newproducts",  
          "recurring_notifications_frequency": "daily"  
        },  
        {  
          "value": 15,  
          "end_time": "1665175977",  
          "recurring_notifications_topic": "newproducts",  
          "recurring_notifications_frequency": "weekly"  
        },  
        {  
          "value": 8,  
          "end_time": "1665175977",  
          "recurring_notifications_topic": "newproducts",  
          "recurring_notifications_frequency": "monthly"  
        },  
        {  
          "value": 17,  
          "end_time": "1665175977",  
          "recurring_notifications_topic": "10percentsale",  
          "recurring_notifications_frequency": "daily"  
        },  
        {  
          "value": 14,  
          "end_time": "1665175977",  
          "recurring_notifications_topic": "10percentsale",  
          "recurring_notifications_frequency": "weekly"  
        },  
      ]  
    }  
  ]  
}
```

## Insights parameters

| Parameter | Description |
| --- | --- |
| `breakdown` | Dimensions by which the response is grouped. May be one or more of the following:  | Name | Description | | --- | --- | | `campaign_id` | View your data by campaign ID number. Examples are "abc123", "Summer messaging campaign", and "Spring sale 2" | | `engagement_source` | View your data by the type of engagement with recurring notifications. Examples are primary and secondary CTA ID (which CTA was clicked on) | | `message_type` | View your data by the type of message your business sent. Examples are Marketing messages | | `messaging_channel` | View your data by the channel used to deliver messages to users. Examples are Messenger and Instagram | | `recurring_notifications_entry_point` | View your data by the entry point into recurring notifications. Examples are In-thread, CTM ads, Checkbox plugin, m.me or ig.me links, and Facebook Page | | `recurring_notifications_frequency` | View your data by the frequency allowed by the recurring notifications opt-in. Examples are Daily, Weekly, and Monthly | | `recurring_notifications_topic` | View your data by the recurring notifications topic. Examples are Promotional messages, Product launches, and Deals | |
| `date_preset` | Relative date range which can be used instead of `since` and `until`. May be `last_week`, `last_month`, `last_quarter`, and more. [See more values in the Page Insights guide.](https://developers.facebook.com/docs/graph-api/reference/v15.0/insights#parameters) |
| `metric` | **Required.** A comma-separated [list of metrics](https://developers.facebook.com/documentation/business-messaging/messenger-platform/analytics/app-events#metrics) to return |
| `period` | The aggregation provided within the since/until or date\_preset range. The `total_over_range` value gives a single value for the metric over the given date range. May be `day`, `week`, `month`, `days_28`, or `total_over_range`. |
| `since` | The start date for the date range during which you wish to view data. Includes data for the date set beginning at 12:00am. Format for the value is `YYYY-MM-DD`. A value of `2022-01-31` would give the data from January 31, 2022 at 12:00am. |
| `until` | The end date for the date range during which you wish to view data. Excludes data for the date set beginning at 12:00am. Format for the value is `YYYY-MM-DD`. A value of `2022-02-01` would give the data to January 31, 2022 at 11:59pm. |

### Available metrics

The following metrics are available via the Messaging Insights API:

| `metric` Name | Description |
| --- | --- |
| `page_messages_blocked_conversations_unique` | The number of conversations with the Page that have been blocked. |
| `page_messages_engagement` | The number of times customers interacted with marketing messages sent by your business Page by tapping on a call-to-action button.  Possible `breakdown` Values:   * `campaign_id` * `engagement_source` * `message_type` * `messaging_channel` * `recurring_notifications_topic`   This metric is in development. |
| `page_messages_new_conversations_unique` | The number of messaging conversations on Messenger that began with people who had never messaged with your business before. |
| `page_messages_order_count` | The number of times you created an order in messaging conversations or in third-party apps or websites used to manage messaging conversations.   This metric is in development. |
| `page_messages_paid_order_earnings` | The approximate amount of money you have earned from orders created through messaging conversations or through third-party apps or websites used to manage messaging conversations. Final earnings may differ due to currency conversions.   This metric is in development. |
| `page_messages_read_ratio` | The number of marketing messages read divided by the number of marketing messages sent by your Page.  Some message reads may not be captured, such as when a customer has turned off read receipts.  Possible `breakdown` Values:   * `campaign_id` * `message_type` * `messaging_channel` * `recurring_notifications_topic`   This metric is in development. |
| `page_messages_reported_conversations_unique` | The number of conversations from your Page that have been reported by people for reasons such as spam, or containing inappropriate content. |
| `page_messages_sent` | The number of marketing messages your business Page sent to customers.   Possible `breakdown` Values:   * `campaign_id` * `message_type` * `messaging_channel` * `recurring_notifications_topic`   This metric is in development. |
| `page_messages_total_messaging_connections` | The number of people your business can send messages to.   This metric shows the number of people who have ever sent a message to your business on Messenger, not including people who have blocked or reported your business on Messenger. There may be some constraints on your ability to send messages to connections, such as limitations on how many messages you can send during certain timeframes. This metric also only includes connections made since October 2016, when data became available. |
| `page_messages_with_business_outcomes` | The number of messaging connections with at least one order created.   This metric is in development. |
| `recurring_notifications_tokens` | The number of times an account has subscribed to receive marketing messages from your business. If an account has subscribed to multiple topics, it will be counted again for each topic.   How it's calculated: This metric counts the number of times accounts agreed to receive recurring messages minus the number of times accounts unsubscribed.   Possible `breakdown` Values:   * `messaging_channel` * `recurring_notifications_frequency` * `recurring_notifications_topic`   This metric is in development. |

Learn more about
[metrics in development.⁠](https://www.facebook.com/business/help/metrics-labeling#estimated)

## Response properties

The following information may be returned in a call to the Insights API.

| Property | Description |
| --- | --- |
| `data` *array of objects* | A list of metrics objects |
| `name` *string* | The name of the metric |
| `period` *string* | The time period over which data was reported |
| `values` *array of objects* | A list of data for a metric. |
| `value` *int* | The count for the requested metric during the date range specified |
| `end_time` *unix timestamp* | UTC timestamp of the end time for the metric |

## See also

* [Learn more about Page Insights](https://developers.facebook.com/docs/platforminsights/page)
* [Learn more about Insights object reference](https://developers.facebook.com/docs/graph-api/reference/insights)
