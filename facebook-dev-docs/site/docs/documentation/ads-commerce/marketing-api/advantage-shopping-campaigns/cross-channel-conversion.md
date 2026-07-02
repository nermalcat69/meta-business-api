---
title: "Advantage+ Shopping Campaigns"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion
---

# Advantage+ Shopping Campaigns

Updated: Jun 16, 2026

Meta is introducing a new, unified, and streamlined process for creating campaigns, replacing the existing separate workflows for Manual, Advantage+ Shopping Campaigns (ASC), and Advantage+ App Campaigns.

As of v25.0, Marketing API developers will no longer be able to use the ASC API with the `smart_promotion_type=AUTOMATED_SHOPPING_ADS` field to create ASC campaigns. Instead, developers will need to use [Advantage+ audience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-expansion/advantage-audience), [Advantage+ campaign budget](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/guides/advantage-campaign-budget), and Advantage+ placements to create campaigns with an `advantage_state` that reflects the type of Advantage+ campaign. Refer to the [Advantage+ Campaigns documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-campaigns) to start creating Advantage+ campaigns today and avoid disruption with the releases of v24.0 and v.25.0.

Advantage+ shopping campaigns is a solution that enables ecommerce and retail direct-to-consumer and brand advertisers to potentially achieve better performance, greater personalization and more efficiency. These campaigns provide greater flexibility to control levers such as creative, targeting, placements, and budget, and more opportunities to optimize campaigns that drive conversions.

Advantage+ Shopping Campaigns empower advertisers to use automation and AI to:

* deliver campaigns at scale with sustained performance
* increase efficiency with minimum effort to set up and manage different campaigns

It replaces a portfolio of manual sales campaigns using a combination of targeting, bidding, destination, creative, placement, and budget set-ups within a single campaign to test up to 150 different combinations and optimize for the highest performing ads.

Learn more about the context and benefits of ASC in our [blog](https://developers.facebook.com/blog/post/2024/10/31/advantage-plus-shopping-campaigns-automated-ecommerce-advertising/).

## Manual campaign setup compared to Advantage+ shopping campaigns

| Manual BAU Campaign Setup | Advantage+ Shopping Campaign |
| --- | --- |
| Multiple BAU campaigns | BAU portfolio replacement |
| Manual Targeting with 7 Targeting levers | Automated targeting, automation to increase setup efficiency with 1 country input |
| Strict budget allocations in multiple campaigns | Budget liquidity within 1 campaign |
| Test up to 50 creative combinations | Allows both dynamic and static ads with up to 150 creative combinations |

This document outlines the steps you need to follow to set up your integration for Advantage+ shopping campaigns. You will need to:

* [Define Existing Customers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion#step-1)
* [Create Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion#step-2)
* [Verify Campaign Creation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion#step-3)
* [Create Ad Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion#step-4)
* [Provide Creative and Create Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion#step-5)
* [Set Minimum Age Constraint and Geo Exclusion](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion#step-6) [(See Ad Account Controls reference doc)](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls)
* Have a `pixel_id` to set up Advantage+ Shopping Campaigns

Learn more about [Cross-Channel Conversion Optimization for Advantage+ shopping campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion).

## Step 1: Define your existing customers (optional)

Optionally, Advantage+ shopping campaigns allow you to define your existing customers as a collection of custom audience IDs. Your existing customers are users who are already familiar with your business/product. Once this definition is set up, you can use this to segment your budget for Advantage+ shopping campaigns to limit spend on existing customers via `existing_customer_budget_percentage`. Meta also provides metrics reporting the performance of your campaigns among these different segments. This step is **not required** unless you plan on using `existing_customer_budget_percentage`.

| Parameter | Description |
| --- | --- |
| `existing_customers`  Array<string> | Array of custom audience IDs that the ad account has access to. Currently the supported sources for the custom audience are website, app activity, customer list, catalog, and offline activity.   For information on how to create a custom audience, refer to [this page](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience). |

#### Example

```
curl -X POST \
  -F 'existing_customers=[<CUSTOM_AUDIENCE_ID>, <CUSTOM_AUDIENCE_ID>]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>
```

For more information on tracking new and existing audiences in third-party tracking tools, see [Audience Type URL Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/audience-type-url-parameters).

## Step 2: Create Campaign

Start by creating your ad [campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group). To do this, make a `POST` request to
`/act_{ad_account_id}/campaigns`.

* Set `campaign_objective` to `OUTCOME_SALES`
* Set `smart_promotion_type` to `AUTOMATED_SHOPPING_ADS` to indicate that the campaign you’re creating is an ASC campaign

ASC can be created only with the `OUTCOME_SALES` campaign objective.

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | **Required**  Name for the Advantage+ shopping campaign |
| `objective` *enum* | **Required**  Campaign’s objective. Specify `OUTCOME_SALES` for this type of ad |
| `special_ad_categories`  list<Object> | **Required**  Special ad categories associated with the Advantage+ shopping campaign |
| `adlabels`  list<Object> | **Optional**  Ad Labels associated with the Advantage+ shopping campaign |
| `buying_type` *string* | **Optional**  Advantage+ shopping campaigns only support the value `AUCTION` |
| `execution_options`  list<enum> | **Optional**  Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object’s configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. |
| `smart_promotion_type` *enum* | **Required**  To specify this is an Advantage+ shopping campaign, the smart promotion type should be set to `AUTOMATED_SHOPPING_ADS` |
| `status` *enum* | **Optional**  Valid options are: `PAUSED` and `ACTIVE`.  If this status is `PAUSED`, all its active ad sets and ads will be paused and have an effective status `CAMPAIGN_PAUSED` |

### Campaign create example

```
curl -X POST \
  -F 'name=Advantage+ Shopping Campaign' \
  -F 'objective=OUTCOME_SALES' \
  -F 'status=ACTIVE' \
  -F 'special_ad_categories=[]' \
  -F 'smart_promotion_type=AUTOMATED_SHOPPING_ADS' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/campaigns
```

#### Response

```
{
   "id": "<campaign_id>"
}
```

### Updating

You can update a Campaign by making a `POST` request to `/{campaign_id}`.

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | Name for the Advantage+ shopping campaign |
| `special_ad_categories`  list<Object> | Special ad categories associated with the Advantage+ shopping campaign |
| `adlabels`  list<Object> | Ad Labels associated with the Advantage+ shopping campaign |
| `execution_options`  list<enum> | Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object’s configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. |
| `topline_id` *numeric string or integer* | Topline ID |
| `status` *enum* | You can use the following status for an update API call:   * `ACTIVE` * `PAUSED` * `DELETED` * `ARCHIVED`   If an ad campaign is set to `PAUSED`, its active child objects will be paused and have an effective status `CAMPAIGN_PAUSED`. |

### Campaign update example

```
curl -X POST \
  -F 'name=Advantage+ Shopping Update Sample Campaign' \
  -F 'status=PAUSED' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<CAMPAIGN_ID>
```

## Step 3: Verify campaign creation

To verify that you have successfully created an Advantage+ shopping campaign, you can make a `GET` request to `/<AD_CAMPAIGN_ID>` with the field `smart_promotion_type`.

A valid Advantage+ shopping campaign will return the field value `AUTOMATED_SHOPPING_ADS`.

#### Example

```
curl -X GET -G \
  -d 'fields=smart_promotion_type' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_CAMPAIGN_ID>
```

#### Response

```
{
  "smart_promotion_type": "AUTOMATED_SHOPPING_ADS",
  "id": <AD_CAMPAIGN_ID>
}
```

## Step 4: Create Ad Set

Once you have completed the campaign creation, you can create an ASC [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign). Make a `POST` request to `/act_{ad_account_id}/adsets.`

Only **one** Ad Set can be associated with each ASC campaign.

For ad sets targeting Taiwan, the `regional_regulated_categories` and `regional_regulation_identities` fields must be set to identify the name of the individual or organization paying for and/or benefitting from the ad. Please see the [Ad Set documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#fields) for more details.

For a lightweight Ad Set creation:

* Set performance goal to maximize the number of conversions (`optimization_goal=OFFSITE_CONVERSIONS`)
* Use auto-bidding (`bid_strategy=LOWEST_COST_WITHOUT_CAP`)
* Target by ISO country code using `geo_locations` field
* Choose either a `daily_budget` or a `lifetime_budget.` If you choose to specify a `lifetime_budget`, you must also set the `end_time`
* Set the conversion location to website under the `promoted_object` by specifying the `pixel_id` for your website and setting `custom_event_type=PURCHASE`
* Set `billing_event=IMPRESSIONS.` This is the only supported billing event for ASC.

#### Parameters

| Parameter | Description |
| --- | --- |
| `campaign_id` *numeric string or integer* | **Required**  A valid Advantage+ shopping campaign you wish to add this ad set to. |
| `name` *string* | **Required**  Name for the Advantage+ shopping campaign |
| `promoted_object` *Object* | **Required**  The object this ad set is promoting across all its ads. For Advantage+ shopping campaigns, provide:   * `pixel_id` * `custom_event_type`: Advantage+ shopping ad set supports the following events: `PURCHASE`, `ADD_TO_CART`, `INITIATED_CHECKOUT`, `ADD_PAYMENT_INFO`, `ADD_TO_WISHLIST`, `CONTENT_VIEW`, `COMPLETE_REGISTRATION`, `DONATE`, `START_TRIAL`, `SUBSCRIBE`, `SEARCH`, `DONATE` (Website-only conversion location), `OTHER` (Website-only conversion location for custom events), and [custom conversions](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion).   **Restrictions**   * `optimization_goal=VALUE` only supports `PURCHASE` as the conversion event * All conversion events are supported for `optimization_goal=OFFSITE_CONVERSIONS` * Website and Shop conversion location only supports `PURCHASE` as a conversion event. If an advertiser selects anything else, the campaign will convert to the Website conversion location   There are 2 types of cross-channel conversion configurations in `promoted_object`. Cross-channel conversion is optional. For a Website-only conversion location, specify the `pixel_id` for your website and set `custom_event_type=PURCHASE`.   * **Website and App:** Use this if you can track the same web and app events, such as with an active Meta Pixel or Facebook SDK. You will need to specify the app information under `promoted_object` using `omnichannel_object`. * **Website and Shop:**   Use this if your business has an onsite Shop. This is for businesses with both an app and an eligible Shop. Specify Shop information by setting `destination_type=SHOP_AUTOMATIC` and using `omnichannel_object` under `promoted_object` to specify `commerce_merchant_settings_id`.   Learn more about and view configuration examples for [cross-channel conversion optimization for Advantage+ shopping campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion). |
| `targeting` *Targeting object* | **Required**  An Advantage+ shopping ad set’s targeting structure. Only `geo_locations` are allowed to be specified. |
| `geo_locations` *array* | **Required**  Used to limit the audience of the ad set by   * `countries` — Country targeting. Requires an array of [2-digit ISO 3166 format codes⁠](https://www.iso.org/obp/ui/?fbclid=IwAR1YmS49RmpBU82fxGYkzApeLmwUU3Df9w8EQuYnobkee-a4IT4YnkHSZmw#home).    **Example:** ```   {   "geo_locations": {   "countries": ["US"]   },   }   ``` * `regions` — State, province, or region. See [Targeting Search, Regions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search#regions) for available values. **Limit:** 200.    **Example:** ```   {   "geo_locations": {   "regions": [{"key":"3847"}]   },   }   ``` |
| `daily_budget` *int64* | **Optional**  The daily budget defined in your account currency, allowed only for ad sets with a duration (difference between `end_time` and `start_time`) longer than 24 hours.   Either `daily_budget` or `lifetime_budget` must be greater than 0. |
| `lifetime_budget` *int64* | **Optional**  Lifetime budget, defined in your account currency. If specified, you must also specify an `end_time`.   Either `daily_budget` or `lifetime_budget` must be greater than 0. |
| `end_time` *datetime* | **Required when `lifetime_budget` is specified.**  When creating an ad set with a `daily_budget`, specify `end_time=0` to set the ad set as ongoing with no end date. UTC UNIX timestamp   Example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. |
| `optimization_goal` *enum* | **Optional**  Select `OFFSITE_CONVERSIONS` to target delivery to individuals more likely to take a specific action on your website.  Select `VALUE` as the optimization goal if you want to target delivery to individuals who are more likely to make high-value purchases. In Ads Manager, we display Highest Value as your bid strategy.  `VALUE` optimization goal is only available for Website conversion location and requires `promoted_object` to have a specified `pixel_id` for your website and the `custom_event_type=PURCHASE`. |
| `bid_strategy` *enum* | **Optional**   * `LOWEST_COST_WITHOUT_CAP`: Facebook automatically bids on your behalf and gets you the lowest cost results. Automatically increase your effective bid as needed to get the results you want based on your given `optimization_goal`. This is the default `bid_strategy` when `optimization_goal` is `OFFSITE_CONVERSION` or `VALUE`. * `LOWEST_COST_WITH_MIN_ROAS`: Specific bidding option for value optimization. You must specify a `roas_average_floor`, which is the minimum return wanted from ads spend. Allows advertisers to keep return on ad spend around an average amount over the course of their campaign. You must specify `roas_average_floor`, which is the minimum return wanted from ads spend, within the `bid_constraints` object. This strategy is available for Website-only conversion location. It is compatible with VALUE as the `optimization_goal`. See [Minimum Return on Advertiser Spend Bidding](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/bid-strategy#min-roas-bidding). * `COST_CAP`: Get the most results possible while we strive to meet the cost per action you set. You must provide a cap number in the `bid_amount` field. Allows advertisers to scale conversions while keeping costs around their desired average CPA. You must provide a cap number in `bid_amount` to use this strategy. It is available for Website and Website and App conversion locations, and is compatible with `OFFSITE_CONVERSIONS` as the `optimization_goal`.   Adherence to cost cap limits is not guaranteed. See [Cost Cap](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/bid-strategy#cap). |
| `bid_amount` | **Required if bid\_strategy is `COST_CAP`.** |
| `bid_constraints` *JSON object* | **Optional**   * `optimization_goal` must be `VALUE`. * `bid_strategy` must be `LOWEST_COST_WITH_MIN_ROAS`. * Min ROAS bidding uses `bid_constraints` to pass the “ROAS floor”, but you cannot use with `bid_constraints`, use `roas_average_floor` instead. See [Minimum Return on Advertiser Spend Bidding](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/bid-strategy#min-roas-bidding). * The valid range of `roas_average_floor` is `[100, 10000000]`, inclusive. This means that the valid range of “minimum ROAS” is `[0.01, 1000.0]` or `[1%, 100000.0%]`, inclusive. |
| `billing_event` *enum* | **Required**  A billing event for the ad set. Only `IMPRESSIONS` is supported for Advantage+ shopping campaigns. |
| `existing_customer_budget_percentage` *number* | **Optional**  Specifies the maximum percentage of the budget that can be spent on the existing customers associated with this ad account. Lower values may lead to higher costs per conversion. Valid values are between 0-100. |
| `adlabels`  list<Object> | **Optional**  Specifies a list of labels to be associated with this object. |
| `start_time` *datetime* | **Optional.**  The start time of the set. UTC UNIX timestamp   Example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. |
| `time_start` *datetime* | **Optional**  Time start |
| `time_stop` *datetime* | **Optional**  Time stop |
| `attribution_spec`  list<JSON Object> | **Optional**  Conversion attribution spec used for attributing conversions for optimization. |

### Ad Set Create Example

```
curl -X POST \
  -F 'name=Advantage+ Shopping Sample Ad Set' \
  -F 'campaign_id=<CAMPAIGN_ID>' \
  -F 'promoted_object={ "pixel_id": "<PIXEL_ID>", "CUSTOM_EVENT_TYPE": "PURCHASE" }' \
  -F 'daily_budget=<NUM>' \
  -F 'existing_customer_budget_percentage=<NUM>' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'targeting={"geo_locations": {"countries": ["US"]}}' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

**Example Response**

```
"id": "<adset_id>"
```

#### Ad Set Create Example where `bid_strategy=COST_CAP`:

```
curl \
  -F 'name=My Ad Set' \
  -F 'optimization_goal=OFFSITE_CONVERSIONS \
  -F 'billing_event=IMPRESSIONS'
  -F 'bid_strategy=COST_CAP'
  -F 'bid_amount=200' \
  -F 'daily_budget=1000' \
  -F 'campaign_id=<CAMPAIGN_ID>' \
  -F 'targeting={"geo_locations":{"countries":["US"]}}' \
  -F 'status=PAUSED' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/<VERSION>/act_<AD_ACCOUNT_ID>/adsets
```

#### Ad Set Create Example where `bid_strategy=LOWEST_COST_WITH_MIN_ROAS`:

```
  curl \
  -F 'name=My Ad Set' \
  -F 'optimization_goal=OFFSITE_CONVERSIONS \
  -F 'billing_event=IMPRESSIONS'
  -F 'bid_strategy=LOWEST_COST_WITH_MIN_ROAS
  -F 'bid_constraints={"roas_average_floor": 1000} \
  -F 'daily_budget=1000' \
  -F 'campaign_id=<CAMPAIGN_ID>' \
  -F 'targeting={"geo_locations":{"countries":["US"]}}' \
  -F 'status=PAUSED' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/<VERSION>/act_<AD_ACCOUNT_ID>/adsets
```

### Updating

You can update an [Ad Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) by making a `POST` request to `/{ad_set_id}`.

#### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`  list<Object> | Specifies a list of labels to be associated with this object. This field is optional. |
| `daily_budget` *int64* | The daily budget defined in your account currency, allowed only for ad sets with a duration (difference between `end_time` and `start_time`) longer than 24 hours.   Either `daily_budget` or `lifetime_budget` must be greater than 0. |
| `existing_customer_budget_percentage` *number* | Specifies the maximum percentage of the budget that can be spent on the existing customers associated with this ad account. Lower values may lead to higher costs per conversion. Valid values are between 0-100. |
| `end_time` *datetime* | End time, required when `lifetime_budget` is specified.   Example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`  When creating an ad set with a daily budget, specify `end_time=0` to set the ad set as ongoing with no end date.  UTC UNIX timestamp. |
| `execution_options`  list<enum> | Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object’s configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. |
| `start_time` *datetime* | The start time of the set. Must be provided in UTC UNIX timestamp.   Example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. |
| `status` *enum* | Available options for updates:   * `ACTIVE` * `PAUSED` * `DELETED` * `ARCHIVED`   If it is set to `PAUSED`, all its active ads will be paused and have an effective status `ADSET_PAUSED`. |
| `lifetime_budget` *int64* | Lifetime budget, defined in your account currency. If specified, you must also specify an `end_time`.   Either `daily_budget` or `lifetime_budget` must be greater than 0. |
| `time_start` *datetime* | Time start |
| `time_stop` *datetime* | Time stop |
| `targeting` *Targeting object* | Targeting structure for your ad set. Valid values for targeting are `geo_locations`. |
| `geo_locations` *array* | **Required**  Used to limit the audience of the ad set by   * `countries` — Country targeting. Requires an array of [2-digit ISO 3166 format codes⁠](https://www.iso.org/obp/ui/?fbclid=IwAR1YmS49RmpBU82fxGYkzApeLmwUU3Df9w8EQuYnobkee-a4IT4YnkHSZmw#home).    **Example:** ```   {   "geo_locations": {   "countries": ["US"]   },   }   ``` * `regions` — State, province, or region. See [Targeting Search, Regions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search#regions) for available values. **Limit:** 200.    **Example:** ```   {   "geo_locations": {   "regions": [{"key":"3847"}]   },   }   ``` |
| `attribution_spec`  list<JSON Object> | **Optional**  Conversion attribution spec used for attributing conversions for optimization. |

### Ad Set Update Example

```
curl -X POST \
  -F 'name=Advantage+ Shopping Sample Updated Ad Set' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_SET_ID>
```

## Step 5: Provide Creative and Create Ads

Once you have an ad set, you can create your ad by posting to the `/act_{ad_account_id}/ads` endpoint. Creating Ads in Advantage+ Shopping Campaigns follows the same process as in manual sales campaigns. Please refer to the links below to create Ads under Advantage+ Shopping Campaigns:

* [Manual Ads (non-Catalog Ads)](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)
* [Advantage+ Catalog Ads (formerly known as Dynamic Ads)](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads)
* [Shops Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/shops-ads)
* [Localized Catalogs (or Advantage+ Catalog Ads for Multiple Languages or Countries)](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/localized-catalog)

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | **Required**  Name of the ad |
| `adset_id` *int64* | **Required**  The ID of the ad set, required on creation. |
| `creative` *AdCreative* | **Required**  The creative spec or the ID of the ad creative to be used by this ad. Valid fields are:   * `object_story_spec` * `product_set_id` * `use_page_actor_override` * `creative_id`   You can read more about creatives [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)  Provide the creative in the following format: `{"creative_id": <CREATIVE_ID>}`  Or provide a creative spec:  ``` {         "creative": {           "name": <NAME>,           "object_story_spec": <SPEC>,           "product_set_id": <PRODUCT_SET_ID>         } } ``` |
| `status` *enum* | **Optional**  Only `ACTIVE` and `PAUSED` are valid during creation. During testing, it is recommended to set ads to a `PAUSED` status so as to not incur accidental spend. |
| `adlabels`  list<Object> | **Optional**  Ad Labels associated with this ad |
| `execution_options`  list<enum> | **Optional**  Default value: `set`.   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `synchronous_ad_review`: this option should not be used by itself. It should always be specified with `validate_only`. When these options are specified, the API call will perform Ads Integrity validations, which include message language checking, image 20% text rule, and so on, as well as the validation logics. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object’s configuration will be included. A separate section recommendations will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. |

### Ad Create Example

```
curl -X POST \
  -F 'name=Advantage+ Shopping campaign Sample Ad' \
  -F 'adset_id=<ADSET_ID>' \
  -F 'creative={"name": <NAME>, "object_story_spec": <SPEC>}' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads
```

### Individual Ad Scheduling

Individual Ad Scheduling allows advertisers to have more granular control to run their Ads during a specific time period by scheduling the start and end time. This feature is available for all campaign types.

#### Example

```
{
  "ad_schedule_end_time": "2024-07-30T09:00:00+0100",
  "ad_schedule_start_time": "2024-07-26T12:00:32+0100"
}
```

These are the [parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup#parameters-2).

### Creative Fields

For a full list of [Ad Creative fields, see here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative#overview).

| Field | Description |
| --- | --- |
| `object_story_spec` *[AdCreativeObjectStorySpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-object-story-spec)* | **Required**  Use if you want to create a new unpublished page post and turn the post into an ad. The Page ID and the content to create a new unpublished page post. |
| `use_page_actor_override` *AdCreative* | **Required**  If `true`, we display the Facebook page associated with the Advantage shopping ads. |

### Create Creative Example

```
curl -X POST \
  -F 'object_story_spec=<SPEC>' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

### Updating

You can update an [Ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup) by making a `POST` request to `/{ad_id}`.

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | New name of the ad |
| `adlabels`  list<Object> | Ad labels associated with this ad. |
| `execution_options`  list<enum> | Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `synchronous_ad_review`: this option should not be used by itself. It should always be specified with `validate_only`. When these options are specified, the API call will perform Ads Integrity validations, which include message language checking, image 20% text rule, and so on, as well as the validation logics. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object’s configuration will be included. A separate section recommendations will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. |
| `status` *enum* | Options are:   * `ACTIVE` * `PAUSED` * `DELETED` * `ARCHIVED`   During testing, it is recommended to set ads to a `PAUSED` status so as to not incur accidental spend. |
| `creative` *AdCreative* | The creative spec of the ad creative to be used by this ad. Valid fields are `object_story_spec`, `asset_feed_spec`, and `use_page_actor_override` and can be viewed [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative). You can read more about creatives [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)  Provide the creative in the following format:  ``` {     "creative": {       "name": <NAME>,       "object_story_spec": <SPEC>,       "product_set_id": <PRODUCT_SET_ID>     } } ``` |

### Ad Update Example

```
curl -X POST \
  -F 'name=Advantage+ Shopping campaign Sample Update Ad' \
  -F 'creative={"name": <NAME>, "object_story_spec": <SPEC>}' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_ID>
```

## Step 6: Ad Account Controls (Optional)

If your business has constraints, such as unable to show ads to people under a certain age, or is restricted to some countries, you can use Ad Account controls to choose how your ads are delivered. These constraints will apply across all new and existing campaigns (manual sales and ASC) across the account.

You can set the following optional features at the Ad Account Control level:

* **Minimum Age Constraint:** You can set the minimum age from 18 to 25. You cannot set the maximum age.
* **Exclude Geo Locations:** You can exclude certain locations from ad delivery based on country, state/province, city, DMA or zip code. See [targeting search](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search#targeting-search) for available values.
* **Geo Inclusions:** You can include locations at the country level.
* **Placement Exclusions:** You can exclude certain placements to prevent ads appearing on specific surfaces. Available placements for exclusions are Audience Network, Facebook Marketplace, and Facebook’s Right Column. See [available values](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls#parameters-2) on the Marketing API.

### Define Constraints

Make a `POST` request to `/act_{ad_account_id}/account_controls`:

* Set `age_min` to a value between 18 - 25
* Exclude locations you do not want your Ads to deliver in using `exclude_geo_locations`
* Exclude ad placements where you do not want your Ads to appear using `placement_exclusions`
* Include a specific country

#### Example Request

```
curl -X POST \
-F 'audience_controls={
"age_min": 20,
"excluded_geo_locations": {"countries": ["US"]}' \
"geo_locations":{"countries": ["GB"]} \
-F 'placement_controls = {"placement_exclusions": ["facebook_marketplace"]} \
-F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/account_controls
```

#### Example Response

```
{
  "id": "<ad_account_business_constraints_id>",
  "success": true
}
```

## Learn More

* [How to Create a Custom Audience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience)
* [Campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group)
* [Ad Sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)
* [Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)
* [Ad Creative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)
* [Ad Recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation)
* [Ad Creative Object Story Spec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-object-story-spec)
* [Cross-channel conversion optimization for Advantage+ shopping campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-shopping-campaigns/cross-channel-conversion)
