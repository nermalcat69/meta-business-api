---
title: "Measure Campaign Performance on Marketing Message API for Messenger"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/grow-marketing-messages-audience
---

# Measure Campaign Performance on Marketing Message API for Messenger

Updated: May 22, 2026

This document explains how to obtain insights for a marketing message campaign, including:

* Number of messages delivered
* Message read and click rate
* Cost per delivery and click
* Website conversion events attributed to Meta Pixel or Conversions API
* Website purchase value and return on ad spend

## Insights on delivered messages

Send a `GET` request to the `<MESSAGE_CAMPAIGN_ID>/insights` endpoint to get insights for marketing messages campaign with the `fields` parameter set to one or more of the following fields:

* `marketing_messages_cost_per_delivered`
* `marketing_messages_cost_per_link_btn_click`
* `marketing_messages_delivered`
* `marketing_messages_link_btn_click`
* `marketing_messages_link_btn_click_rate`
* `marketing_messages_read_rate`
* `marketing_messages_spend`

### Sample request

*Formatted for readability.*

```
curl -i -X GET \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
     "https://graph.facebook.com/<API_VERSION>/<MESSAGE_CAMPAIGN_ID>/insights \
       ?fields=marketing_messages_delivered,marketing_messages_read_rate"
```

On success, your app receives a JSON object with the number of messages delivered, the read rate, and the start and stop date of the messaging campaign.

### Example response

```
{  
  "data": [  
    {  
      "marketing_messages_delivered": "2755",  
      "marketing_messages_link_btn_click": "268",  
      "marketing_messages_spend": "38.87",  
      "marketing_messages_read_rate": "79.419238",  
      "marketing_messages_link_btn_click_rate": "9.727768",  
      "marketing_messages_cost_per_link_btn_click": "0.145037",  
      "marketing_messages_delivery_rate": "0",  
      "marketing_messages_cost_per_delivered": "0.014109",  
      "date_start": "2024-05-01",  
      "date_stop": "2025-07-29"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "MAZDZD",  
      "after": "MAZDZD"  
    }  
  }  
}
```

## Insights on offsite conversions

If the marketing messages campaign is configured for pixel attribution, you can query website conversion metrics attributed to the campaign. These metrics report website events tracked by Meta Pixel or Conversions API after a person clicks a link in your marketing message.

Query offsite conversions through the standard Ads Insights action fields:

* `actions` returns conversion counts.
* `action_values` returns attributed conversion values for value-bearing events, such as purchases.
* `website_purchase_roas` returns return on ad spend from website purchase events.

Use `action_breakdowns=action_type` and filter for the exact offsite conversion action types you want to return.

### Sample request

*Formatted for readability.*

```
curl -i -X GET \
     -H "Authorization: Bearer <SYSTEM_USER_ACCESS_TOKEN>" \
     "https://graph.facebook.com/<API_VERSION>/<MESSAGE_CAMPAIGN_ID>/insights \
       ?fields=actions,action_values,website_purchase_roas,marketing_messages_spend \
       &time_range={'since':'<YYYY-MM-DD>','until':'<YYYY-MM-DD>'} \
       &action_breakdowns=action_type \
       &filtering=[{'field':'action_type','operator':'IN','value':['offsite_conversion.fb_pixel_purchase','offsite_conversion.fb_pixel_add_to_cart','offsite_conversion.fb_pixel_initiate_checkout','offsite_conversion.fb_pixel_lead','offsite_conversion.fb_pixel_view_content','offsite_conversion.fb_pixel_custom']}]"
```

On success, your app receives a JSON object with the requested action stats, spend metrics, and the start and stop date of the query.

### Example response

```
{  
  "data": [  
    {  
      "actions": [  
        {  
          "action_type": "offsite_conversion.fb_pixel_purchase",  
          "value": "3"  
        },  
        {  
          "action_type": "offsite_conversion.fb_pixel_add_to_cart",  
          "value": "8"  
        }  
      ],  
      "action_values": [  
        {  
          "action_type": "offsite_conversion.fb_pixel_purchase",  
          "value": "249.99"  
        }  
      ],  
      "website_purchase_roas": [  
        {  
          "action_type": "offsite_conversion.fb_pixel_purchase",  
          "value": "6.43"  
        }  
      ],  
      "marketing_messages_spend": "38.87",  
      "date_start": "<YYYY-MM-DD>",  
      "date_stop": "<YYYY-MM-DD>"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "MAZDZD",  
      "after": "MAZDZD"  
    }  
  }  
}
```

If an offsite conversion action type has no attributed events in the selected date range, it may be omitted from the response.

Additionally, insights under an ad account can be obtained by the `act_<AD_ACCOUNT_ID>/insights` endpoint.

Querying on time ranges and date presets is also supported for campaigns created March 1 or later. Below are query parameter options you can use to query on specific dates:

| Parameter Name | Description |
| --- | --- |
| `time_range`  {'since':YYYY-MM-DD,'until':YYYY-MM-DD} | A single `time range` object. UNIX timestamp not supported. |
| `date_preset`  enum{`today`, `yesterday`, `this_month`, `last_month`, `this_quarter`, `maximum`, `data_maximum`, `last_3d`, `last_7d`, `last_14d`, `last_28d`, `last_30d`, `last_90d`, `last_week_mon_sun`, `last_week_sun_sat`, `last_quarter`, `last_year`, `this_week_mon_today`, `this_week_sun_today`, `this_year`} | Default value: `last_30d`  Represents a relative time range. This field is ignored if `time_range` is specified. |

### Field reference

| Field or action type | Description |
| --- | --- |
| `marketing_messages_cost_per_delivered` | The average cost per message delivered. |
| `marketing_messages_cost_per_link_btn_click` | The average cost for each message link click. This metric doesn't include messages sent to Europe, Argentina, Turkey, South Korea and Japan. |
| `marketing_messages_delivered` | The number of messages a business sent to users that were delivered. Some messages may not be delivered, such as when a user's device is out of service. This metric doesn't include messages delivered to Europe and Japan. In some cases, this metric may be estimated and may differ from what's shown on your invoice due to small variations in data processing. |
| `marketing_messages_link_btn_click` | The number of clicks or taps within the marketing message that led to advertiser-specified destinations, on or off Meta technologies. This metric doesn't include messages sent to Europe, Argentina, Turkey, South Korea and Japan. |
| `marketing_messages_link_btn_click_rate` | The percentage of delivered messages that received a link click out of the total number of messages delivered. This metric doesn't include messages sent to Europe, Argentina, Turkey, South Korea and Japan. |
| `marketing_messages_read_rate` | The number of messages read divided by the number of messages delivered. Some message reads may not be captured, such as when a customer has turned off read receipts. This metric doesn't include messages sent to Europe and Japan. |
| `marketing_messages_spend` | The total amount of money you've spent on your campaign, set or message during its schedule. |
| `offsite_conversion.fb_pixel_purchase` | Website Purchases. The number of purchase events tracked by the pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_purchase` | Website Purchases Conversion Value. The total value of website purchases.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_initiate_checkout` | Website Checkouts Initiated. The number of initiate checkout events tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_add_to_cart` | Website Adds to Cart. The number of add to cart events tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_custom` | Custom pixel event. The number of custom events tracked by the Facebook pixel on your website and attributed to your ads. Custom events are actions that occur on your website that you have set up to track, such as a user adding an item to their cart or completing a purchase.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_complete_registration` | Website Registrations Completed. The number of complete registration events tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_search` | Website Searches. The number of search events tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_view_content` | Website Content Views. The number of view content events tracked by the pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_add_payment_info` | Website Adds of Payment Info. The number of add payment info events tracked by the Meta Pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_add_to_wishlist` | Website Adds to Wishlist. The number of add to wishlist events tracked by the pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `offsite_conversion.fb_pixel_lead` | Website Leads. The number of lead events tracked by the pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |
| `website_purchase_roas` | Website Purchase ROAS (Return on Ad Spend). The total return on ad spend (ROAS) from website purchases. This is based on the value of website purchase events recorded by the Meta Pixel or Conversions API on your website and attributed to your ads.[This metric is estimated⁠](https://www.facebook.com/business/help/metrics-labeling). |

## Next steps

Now that you have learned how to get insights on your campaign, learn how to [increase a business' subscribers](https://developers.facebook.com/documentation/business-messaging/messenger-platform/marketing-messages-on-messenger/get-subscription-tokens).
