---
title: "Mobile App Custom Audiences"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences
---

# Mobile App Custom Audiences

Updated: Apr 30, 2026

Build audiences based on people's actions in your app that meet your criteria. This feature allows you to build an audience who, for example:

* "Passed Level 8 in the last 10 days"
* "Used app in the last 8 days but hasn't purchased anything"
* "Added to cart but not purchased"

This solution uses logged named events through our [Facebook SDKs](https://developers.facebook.com/docs/app-ads/sdk), [App Events API](https://developers.facebook.com/docs/app-events), or via [Mobile Measurement Partners](https://developers.facebook.com/docs/app-ads/measuring/measurement-partners). Examples of events to log include "Installed", "Added to Cart", "Purchased", or "Achieved a Level".

### Limitations

* `subtype` for engagement custom audiences is only supported for video.
* Mobile App Custom Audiences for inclusion targeting is no longer supported for the `POST /{ad-account-id}/adsets` endpoint for iOS 14.5 SKAdNetwork campaigns.
* New iOS 14.5 app install campaigns will no longer be able to use app connections targeting.

## Create an audience

To create Custom Audiences from your mobile app, the ad account must accept the [Terms of Service for Custom Audiences⁠](https://www.facebook.com/ads/manage/customaudiences/tos.php), in [Ads Manager⁠](https://business.facebook.com/adsmanager/manage). To sign the terms:

* You need to be an Admin, Developer, or Insights User for the ad account.
* Your ad account should be listed as an Advertising account on [your app](https://developers.facebook.com/apps) settings.

To create your audience:

```
curl -X POST \
  -F 'name="My Test Mobile App Custom Audience"' \
  -F 'rule={
       "inclusions": {
         "operator": "or",
         "rules": [
           {
             "event_sources": [
               {
                 "id": "<APP_ID>",
                 "type": "app"
               }
             ],
             "retention_seconds": 8400,
             "filter": {
               "operator": "and",
               "filters": [
                 {
                   "field": "event",
                   "operator": "eq",
                   "value": "fb_mobile_purchase"
                 }
               ]
             }
           }
         ]
       }
     }' \
  -F 'prefill=1' \
  -F 'audience_labels=["HIGH_VALUE_CUSTOMERS"]' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

This returns the `id` of the audience upon success. These parameters are most relevant:

| Name | Description |
| --- | --- |
| `name`  type: String | **Required.**  Name of your custom audience. |
| `description`  type: String | **Optional.**  Description of your custom audience. |
| `rule`  type: JSON object | **Optional.**  Rule to define the audience. See [Audience Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules). |

Each ad account can create a maximum of `200` custom audiences via Custom Audiences from Your Mobile App. Make a `POST` request to:

```
https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/customaudiences
```

Use these fields:

| Name | Description |
| --- | --- |
| `name`  type: string | **Required.**  Name of your Custom Audience |
| `retention_days`  type: integer | **Required.**  How long someone is in this audience. The minimum number is `1`. The maximum number is `180`. If `retention_days` is 14, and on day 13, an audience member triggers an app event matching your criteria, then Facebook extends their time in the audience 14 more days. Someone is in an audience N days from the last matching event they triggered. |
| `rule`  type: JSON Object | **Required.**  Rules to define the audience. See [Audience Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#rules) |
| `audience_labels`  type: string | **Optional.**  Choose a label that describes this audience. Labels may be used to find audiences for your ads more effectively. [About audience labels⁠](https://www.facebook.com/business/help/706325895111530).  **Engaged audiences:**   * `QUALIFIED_LEADS` — Leads that meet your qualification criteria. * `DISQUALIFIED_LEADS` — Leads that don't meet your qualification criteria. * `APP_USERS` — People that are currently using your app. * `TRIAL_USERS` — People who started a trial of your product. * `ENGAGED_USERS` — People that showed interest but are not customers.   **Customers:**   * `HIGH_VALUE_CUSTOMERS` — Customers you consider valuable to your business. * `LOW_VALUE_CUSTOMERS` — Customers who are of low or negative value to your business. * `AT_RISK` — Customers who are showing signs of disengaging or churning. * `DISENGAGED` — Customers who have not made a purchase recently or stopped subscribing. * `CUSTOMERS` — Your existing customers. |

## Audience rules

To determine who gets added to the Custom Audience, define a rule based on events in your app. A rule is a JSON object with key-value pairs and can reference multiple app events. You can define the rule based on specific events and their parameters and also the aggregation. See [Audience Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules) for more information. See also:

* [Audience Rule Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#audience-rules-syntax)
* [Rule Set Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#rule_set_syntax)
* [Inclusion And Exclusion Rule Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#inclusion-exclusion): Under `event_sources`, set `id` to your app's ID and `type` to `app`.
* [Filters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#filter)
* [Filter Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#filter-rules):
  * Use `'event'` as `field`, if the filter is to specify an event. Parameters that match App events sent by app; for example, "\_appVersion", "\_value", and so on.
  * If the `field` attribute is set to `"event"`, the value must be set to an event name. Use the App Event API to see app events and parameters reported by the pixel.
* [Aggregation Functions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#aggregate): The following aggregation functions are available for Mobile App Custom Audiences: `"count"`,`"sum"`, `"avg"`, `"min"`, and `"max"`.

### Example mobile app custom audience rules

#### Standard event example

All mobile app purchasers in the last 30 days for app id `55064006`:

```
{
    "inclusions: {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "id": 55064006,
                        "type": "app"
                    }
                ],
                "retention_seconds: 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "=",
                            "value": "fb_mobile_purchase"
                        }
                    ]
                }
            }
        ]
    }
}
```

#### Custom event with parameters example

All users who passed back custom `"timeOnPanel"` events in the last 30 days for app id `55064006`:

```
{
    "inclusions: {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "id": 55064006,
                        "type": "app"
                    }
                ],
                "retention_seconds: 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "=",
                            "value": "timeOnPanel"
                        }
                    ]
                }
            }
        ]
    }
}
```

All users who passed back custom `"timeOnPanel"` events where event value is greater than 30, color is `"red"` or `"blue"`, and favorite dessert contains `"banana"`:

```
{
    "inclusions: {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "id": 55064006,
                        "type": "app",
                    }
                ],
                "retention_seconds: 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "=",
                            "value": "timeOnPanel",
                        },
                        {
                            "field": "_value",
                            "operator": ">",
                            "value": 30,
                        },
                        {
                            "field": "color",
                            "operator": "is_any",
                            "value": ["red", "blue"],
                        },
                        {
                            "field": "favoriteDessert",
                            "operator": "contains",
                            "value": "banana",
                        }
                    ]
                }
            }
        ]
    }
}
```

#### Aggregation example

Top 20% purchasers based on the purchases in the last 30 days:

```
{
    "inclusions: {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "id": 55064006,
                        "type": "app"
                    }
                ],
                "retention_seconds: 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "=",
                            "value": "fb_mobile_purchase"
                        }
                    ]
                }
                "aggregation": {
                    "type": "count",
                    "method": "percentile",
                    "operator": "in_range",
                    "from": 75,
                    "to": 100,
                }
            }
        ]
    }
}
```

#### Exclusions example

The following example includes people who added to cart, but not purchased:

```
{
    "inclusions: {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "id": 55064006,
                        "type": "app"
                    }
                ],
                "retention_seconds: 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "=",
                            "value": "add_to_cart"
                        }
                    ]
                }
            }
        ]
    },
    "exclusions": {
        "operator": "or",
        "rules": [
            {
                "event_sources": [
                    {
                        "id": 55064006,
                        "type": "app"
                    }
                ],
                "retention_seconds: 2592000,
                "filter": {
                    "operator": "and",
                    "filters": [
                        {
                            "field": "event",
                            "operator": "=",
                            "value": "fb_mobile_purchase"
                        }
                    ]
                }
            }
        ]
    }
}
```

## App events API

Query which app events and parameters an app reported to Facebook. You can use these events and parameters directly for [creating Custom Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#create). You need an access token associated with the `app_id` with an admin, developer, or advertiser role.

Make a `GET` request:

```
https://graph.facebook.com/<API_VERSION>/<APP_ID>/app_event_types
```

The response is JSON containing a `data` array of JSON dictionaries having these fields:

| Name | Description |
| --- | --- |
| `event_name`  type: string | App event type to use in [rule](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#rules). |
| `display_name`  type: string | Human-readable name of event type |
| `description`  type: string | Verbose description of standard event |
| `parameters`  type: array | array of JSON dictionaries describing parameters for this event `{``"parameter_name": "fb_currency",` `"display_name": "Currency",` `"description": "Currency for event"``}` `parameter_name`: string, App param type to use in [rule](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#rules) `display_name`: string, Human-readable name of event type  `description`: string, Verbose description of parameter, if a standard param |

See full list of event names

See full list of parameter names

## Managing audiences

* To get information about your audience, see [Custom Audience, Read](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience#read).
* To update, see [Custom Audience, Update](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience#update).
* To delete, see [Custom Audience, Delete](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience#delete).

## Resources

* [iOS Apps, Retargeting with App Events](https://developers.facebook.com/docs/ios/app-events) - Reengaging users on your iOS app.
* [Android Apps, Retargeting with App Events](https://developers.facebook.com/docs/android/app-events) - Retarget ads on your Android app.
* [Custom Audience Targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience)
* [Lookalike Targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences)
* [Reference, Targeting Spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting)
* [Reference, Mobile App Ads for Engagement](https://developers.facebook.com/docs/reference/ads-api/mobile-app-ads-engagement)
