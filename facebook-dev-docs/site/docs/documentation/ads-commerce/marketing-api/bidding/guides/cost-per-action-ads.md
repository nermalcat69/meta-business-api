---
title: "Optimized Cost Per Mille Ads"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/guides/cost-per-action-ads
---

# Optimized Cost Per Mille Ads

Updated: Jun 26, 2026

Optimized Cost Per Mille allows you to prioritize your marketing goals, then automatically deliver ads toward those goals. Specify goals in absolute values, such as how much you value the fulfillment of a particular goal. These goal values are *not bids*. Each goal value should be the value you place on an outcome.

An alternative to optimized CPM is [Cost Per Action](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/guides/cost-per-action-ads), which lets you specify conversion events and get charged by the number of conversions. CPM and optimized CPM ads are different, since they charge per impression served on the site.

## How it works

The ad system automatically bids on your behalf, constrained by your defined campaign budget. The dynamic bids target impressions that are most likely to convert for your goals.

Optimize your campaigns by defining the [ad set’s `optimization_goal`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign).

**Optimized CPM for Mobile App Installs is only available if the application has reported an install event in the last 28 days via the Facebook SDK or a mobile measurement partner.**

## Create an optimized CPM ad

The [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) object contains bid information. To create an optimized CPM ad:

```
curl \
  -F 'name=My Ad Set for optimized CPM' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'optimization_goal=LINK_CLICKS' \
  -F 'bid_amount=150' \
  -F 'campaign_id=<CAMPAIGN_ID>' \
  -F 'daily_budget=1000' \
  -F 'targeting={"geo_locations":{"countries":["US"]}}' \
  -F 'status=PAUSED' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

When you create the ad set, these fields must follow the restrictions below:

| Name | Description |
| --- | --- |
| `billing_event` | You must set to `IMPRESSIONS`. |
| `optimization_goal` | Set to what action you want to optimize. |
| `bid_amount` | Value you place on the optimization goal, specified in cents. |

See [Validation best practices](https://developers.facebook.com/docs/reference/ads-api/validation) for ad units that support optimized CPM bidding.

## Budget and pricing

An Optimized CPM campaign must have a budget. The ad system bids on each impression on your behalf, bidding high when the impression is likely to work for your goals, and bidding low when the impression is unlikely to work for your goals.

This dynamic bidding selects the highest-value impressions for your goals, and you should expect the total ROI on the campaign to surpass your traditional CPC or CPM campaign. Note that Ads Manager and the API provide stats for each goal, so you can check your ad’s performance and gauge the success of a campaign, based on your goals.
