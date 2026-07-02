---
title: "Ad Volume"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/app-event-api
---

# Ad Volume

Updated: Apr 2, 2024

View the volume of ads *running or in review* for your ad accounts. Ads that are running or in review count against the per-Page ad limit introduced in 2021. Query the number of ads running or in review for a given ad account.

## View ad volume for your ad account

To see the ad volume for your ad account:

```
curl -G \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/v<API_VERSION>/act_<AD_ACCOUNT_ID>/ads_volume"
```

**Response**

```
{"data":[{"ads_running_or_in_review_count":2}]}
```

For information on managing ad volume, see [About Managing Ad Volume⁠](https://www.facebook.com/business/help/2720085414702598).

## View running or in review status

To determine if an ad is running or in review, the system checks `effective_status`, then `configured_status`, and the ad account's status:

* If an ad has `effective_status` of `1` - `active`, it is considered in *running or in review* state.
* If an ad has `configured_status` of `active` and `effective_status` of `9` - `pending review` or `17` - `pending processing`, it is considered *running* or *in review*.
* The ad can be *running* or *in review* only if the ad account status is in `1` - `active`, `8` - `pending settlement`, or `9` - `in grace period`.

Whether an ad is running or in review is also determined based on the ad set's schedule:

* If start time is before current time, and current time is before end time, then the ad is considered running or in review.
* If start time is before current time and the ad set has no end time, it is also considered running or in review.

For example, if the ad set is scheduled to run in the future, the ads are not running or in review. However, if the ad set is scheduled to run from now until 3 months from now, the ads are considered running or in review.

If you are using special ads scheduling features, such as day-parting, the ad is considered running or in review the *whole day*, not just for the part of the day when the ad starts running.

## Breakdown by actors

Use the `show_breakdown_by_actor` field to get a breakdown of ad limits by a specific `actor_id`:

```
curl -G \
  -d "show_breakdown_by_actor=true" \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/v<API_VERSION>/act_<AD_ACCOUNT_ID>/ads_volume"
```

**Response**

```
{  
  "data": [  
    {  
      "ads_running_or_in_review_count": 0,  
      "current_account_ads_running_or_in_review_count": 0,  
      "actor_id": "<ACTOR_ID_1>",  
      "recommendations": [  
      ]  
    },  
    {  
      "ads_running_or_in_review_count": 2,  
      "current_account_ads_running_or_in_review_count": 2,  
      "actor_id": "<ACTOR_ID_2>",  
      "recommendations": [  
      ]  
    }  
  ],  
}
```

Use `page_id` to get the ad limits for a specific page:

```
curl -G \
  -d "page_id=<PAGE_ID>" \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/v<API_VERSION>/act_<AD_ACCOUNT_ID>/ads_volume"
```

**Response**

```
{  
  "data": [  
    {  
      "ads_running_or_in_review_count": 2,  
      "current_account_ads_running_or_in_review_count": 2,  
      "actor_id": "<ACTOR_ID>",  
      "recommendations": [  
      ]  
    }  
  ],  
}
```

### Supported fields

| Field | Description |
| --- | --- |
| `actor_id` | Actor that the limit is enforced against. Currently, this is always the page ID. |
| `ads_running_or_in_review_count` | Number of ads running or in review for a specific actor. |
| `current_account_ads_running_or_in_review_count` | Number of ads running or in review within the current ad account on a specific actor. |
| `actor_name` | Actor that the ads volume aggregated on. Currently, it can only be page name. |
| `ad_limit_scope_business` | Used in cases where an ad account belongs to a Meta Business Suite **and** the ad account is subject to Meta Business Suite level ad limits.  This field has the business that defines the ad limits for an ad account. |
| `ad_limit_scope_business_manager_id` | Used in cases where an ad account belongs to a Meta Business Suite **and** the ad account is subject to Meta Business Suite level ad limits.   This field has the Meta Business Suite ID for a business that defines the ad limits for an ad account. |
| `ad_limit_set_by_page_admin` | Ad limit set by a page admin for the business that owns the ad account. |
| `ads_running_or_in_review_count_subject_to_limit_set_by_page` | Number of ads running or in review for a group of ad accounts. In this case, the group can contain ad accounts that belong to a business or individual ad accounts.   If ad limit is not set by the page owner, it returns `null`.   If ad limit is set by the page owner, it returns the number of ads running or in review for the group of ad accounts. |
| `future_limit_activation_date` | Starting date of ad limit that will be effective in the future. |
| `future_limit_on_ads_running_or_in_review` | Ad limit that will be effective in the future. This limit is related to the number of ads running or in review for the given actor. |
| `limit_on_ads_running_or_in_review` | Current ad limit for a given actor ID. This limit is related to the number of ads running or in review. |
| `recommendations` | Recommendations to help reduce the ad volume. Currently, supported values are:   * `zero_impression` * `learning_limited` * `top_campaigns_with_ads_under_cap` * `top_adsets_with_ads_under_cap`   More information can be found in the [Business Help Center⁠](https://www.facebook.com/business/help/2720085414702598). |

### Parameters

| Field | Description |
| --- | --- |
| `recommendation_type` | Type of the recommendation to help reduce the ad volume. Currently, supported values are:   * `zero_impression` * `learning_limited` * `top_campaigns_with_ads_under_cap` * `top_adsets_with_ads_under_cap`   See more information about [managing ad volume⁠](https://www.facebook.com/business/help/2720085414702598). |
