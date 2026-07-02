---
title: "Offline Custom Audiences"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/dynamic-product-audiences
---

# Offline Custom Audiences

Updated: Jun 16, 2026

Group people who visited your store, made calls to your customer service, or took action offline and target them with Facebook ads.

For example, to target people who spent more than USD 1,000 in the past 90 days:

```
curl \
-F 'name=90d High Value' \
-F 'rule={"inclusions":{"operator":"or","rules":[{"retention_seconds":7776000,"event_sources":[{"id":"<OFFLINE_EVENT_SET_ID>","type":"offline_events"}],"filter":{"operator":"and","filters":[{"operator":"=","field":"event","value":"Purchase"}]},"aggregation":{"type":"sum","field":"value","operator":">","value":"1000"}​}]}​}' \
-F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/<VERSION>/act_<AD_ACCOUNT_ID>/customaudiences"
```

You build Custom Audiences from the conversion events you upload to an offline event set. See [Offline Conversions API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/documentation/ads-commerce/conversions-api/offline-events) documentation.

Since September 2018, Meta does not support `subtype` for custom audiences for websites, apps, engagement custom audiences, and audiences from offline conversion data. The one exception is that `subtype` is still supported for engagement custom audiences for video.

## Create an audience

To create a custom audience from your offline event set, the account needs to have already accepted the Terms of Service for Custom Audiences, in [Ads Manager⁠](https://www.facebook.com/ads/manage/powereditor/):

```
curl \
  -F 'name=My New Offline Event Set' \
  -F 'rule={"inclusions":{"operator":"or","rules":[{"retention_seconds":2592000,"event_sources":[{"id":"<OFFLINE_EVENT_SET_ID>","type":"offline_events"}],"filter":{"operator":"and","filters":[{"operator":"=","field":"event","value":"Purchase"},{"operator":">","field":"value","value":"50+Sheet1!A2+Sheet1!A2+Sheet1!A2+"}]}​}]}​}'
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<VERSION>/act_<AD_ACCOUNT_ID>/customaudiences
```

These parameters are most relevant for custom audiences from your offline event sets:

| Name | Description |
| --- | --- |
| `name`  type: string | **Required.**  The name for the audience. |
| `rule`  type: string | **Required.**  Audience rules to be applied on the referrer URL. |
| `description`  type: string | **Optional.**  Description of your custom audience. |

## Audience rules

Rules determine whether an Accounts Center account should be added to this audience. These rules apply to Offline Events sent through the [Offline Conversions API](https://developers.facebook.com/documentation/ads-commerce/conversions-api/offline-events) or uploaded manually with Offline Event Manager. Rules are applied on specific events or the `custom_data` field. See [Audience Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules) for complete information. See also:

* [Audience Rules Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#audience-rules-syntax)
* [Rule Set Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#rule_set_syntax)
* [Inclusion/Exclusion Rule Syntax](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#inclusion-exclusion): Under `event_source`, set `id` to your Pixel ID and `type` to `pixel`.
* [Filters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#filter)
* [Filter Rules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#filter-rules): Under `field`, use `"event"` if the filter is to specify an event. Parameters that match events sent by pixel (for example, `'ViewContent'`, `'Purchase'`).
* [Aggregate Functions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/audience-rules#aggregate)

### Example offline custom audience rules

```
//Match all referring `favorite_food` containing the string `'pizza'` in the last 30 days:  
  
{  
    "inclusions": {  
        "operator": "or",  
        "rules": [  
            {  
                "event_sources": [  
                    {  
                        "type": "offline_events",  
                        "id": "<OFFLINE_EVENT_SET_ID>",  
                    }  
                ],  
                "retention_seconds": 2592000,  
                "filter": {  
                    "operator": "and",  
                    "filters": [  
                        {  
                            "field": "custom_data.favorite_food",  
                            "operator": "i_contains",  
                            "value": "pizza"  
                        }  
                    ]  
                },  
            }  
        ]  
    }  
}
```

Match Purchase events where cost is greater than or equal to USD 100 in the last 30 days. Use this rule for the following event:

```
{  
    "inclusions": {  
        "operator": "or",  
        "rules": [  
            {  
                "event_sources": [  
                    {  
                        "type": "offline_events",  
                        "id": "<OFFLINE_EVENT_SET_ID>"  
                    }  
                ],  
                "retention_seconds": 2592000,  
                "filter": {  
                    "operator": "and",  
                    "filters": [  
                        {  
                            "field": "event",  
                            "operator": "eq",  
                            "value": "Purchase"  
                        },  
                        {  
                            "operator": "or",  
                            "filters": [  
                                {  
                                    "field": "value",  
                                    "operator": ">=",  
                                    "value": "100"  
                                }  
                            ]  
                        }  
                    ]  
                }  
            }  
        ]  
    }  
}
```

Match Purchase events where the product's color is `blue` defined by offline event attributes in the `custom_data` field called 'color' in the last 30 days. Use this rule for the following event:

```
{  
    "inclusions": {  
        "operator": "or",  
        "rules": [  
            {  
                "event_sources": [  
                    {  
                        "type": "offline_events",  
                        "id": "<OFFLINE_EVENT_SET_ID>"  
                    }  
                ],  
                "retention_seconds": 2592000,  
                "filter": {  
                    "operator": "and",  
                    "filters": [  
                        {  
                            "field": "event",  
                            "operator": "eq",  
                            "value": "Purchase"  
                        },  
                        {  
                            "operator": "or",  
                            "filters": [  
                                {  
                                    "field": "custom_data.color",  
                                    "operator": "eq",  
                                    "value": "blue"  
                                }  
                            ]  
                        }  
                    ]  
                }  
            }  
        ]  
    }  
}
```

## Best practices

* Experiment with different audiences, for example, people who purchased frequently in the past that did not return recently or people who purchased only from one category.
* Create Lookalike audiences based on audiences that have the highest performance.
