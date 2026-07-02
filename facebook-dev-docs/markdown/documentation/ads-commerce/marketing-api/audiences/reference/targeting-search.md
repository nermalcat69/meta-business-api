---
title: "Placement Targeting"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search
---

# Placement Targeting

Updated: May 21, 2026

Deliver ads on specific placements, such as desktop Feed only or mobile Feed plus Audience Network Rewarded Video. **You can only use certain placement options depending on your [campaign objective](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group). See [Campaign, Objective, and Placements](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group#placement) for more information.**

The platforms and positions available are `device_platforms`, `publisher_platforms`, `facebook_positions`, `audience_network_positions`, `instagram_positions`, `threads_positions`, and `messenger_positions`. See the [Device, Publisher, and Positions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search#newplacement) section for more information.

```
curl -X POST \
  -F 'name="My AdSet"' \
  -F 'optimization_goal="REACH"' \
  -F 'billing_event="IMPRESSIONS"' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'targeting={
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "publisher_platforms": [
         "facebook"
       ],
       "facebook_positions": [
         "feed"
       ]
     }' \
  -F 'promoted_object={
       "page_id": "<PAGE_ID>"
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

If you do not specify anything for a particular placement field, Facebook considers **all possible default positions** for that field. For example, if you set `publisher_platforms` to `facebook`, but select nothing for `facebook_positions`, Facebook considers **all default** Facebook positions such as `feed`, `right_hand_column`, and so on. Or, if you do not select any `publisher_platforms`, Facebook considers **all default**`publisher_platforms`. Facebook may also automatically consider new positions or platforms as they become available.

On Audience Network, you can limit which publishers display your ads. Exclude publishers by category, or create a custom list of app store URLs or domain URLs to exclude.

You cannot use only `right_hand_column` alone as a placement for video, collection, or canvas ads.

Inventory Filter helps you control whether your ads display next to different types of content for in-content ads (Facebook in-stream videos, ads on Facebook Reels and ads on Instagram Reels), Audience Network ads and feed ads (Facebook Feed, Instagram Feed, Facebook Reels Feed and Instagram Reels Feed). To learn more about these content categories, see [Ads Help Center, Inventory Filter⁠](https://www.facebook.com/business/help/252190302162738?helpref=faq_content). You can choose separate values for in-content, Audience Network, and feed ads. Options include: `Expanded`, `Moderate`, and `Limited`. For details, see `brand_safety_content_filter_levels` below:

| Name | Description |
| --- | --- |
| `brand_safety_content_filter_levels`  array<string> | For in-content ads (Facebook in-stream and ads on Facebook Reels), Meta allows these values:   * `EXPANDED`: `FACEBOOK_RELAXED` * `MODERATE`: `FACEBOOK_STANDARD` * `LIMITED`: `FACEBOOK_STRICT`   For Audience Network, Meta allows these values:   * `EXPANDED`: `AN_RELAXED` * `MODERATE`: `AN_STANDARD` * `LIMITED`: `AN_STRICT`   For Feed ads (Facebook Feed, Instagram Feed, Facebook Reels Feed and Instagram Reels Feed), Meta allows these values:   * `EXPANDED`: `FEED_RELAXED` * `MODERATE`: `FEED_STANDARD` * `LIMITED`: `FEED_STRICT`   Example: `"brand_safety_content_filter_levels":["FACEBOOK_STRICT", "AN_RELAXED"]`  **Note:** When a filter is applied at the ad account level, only more restrictive options will be available at the campaign level. For example, if the account is set to `MODERATE`, the user will only be able to select `MODERATE` or `LIMITED` for a campaign. Less restrictive options (in this example, `EXPANDED`) will not be available. |
| `excluded_publisher_categories`  array<string> | Includes: `dating` and `gambling` |
| `excluded_publisher_list_ids`  array<numeric strings> | Each string is a list ID for exclusions. Create custom lists in [Ads Manager⁠](https://www.facebook.com/brand_safety/block_lists) or [Marketing API, Publisher Block List](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list).  **Example:** `"excluded_publisher_list_ids":["{block_list_id_1}","{block_list_id_2}"]` |

For example, to use `brand_safety_content_filter_levels`:

```
curl \
  -F 'name=My AdSet' \
  -F 'optimization_goal=REACH' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id=CAMPAIGN_ID' \
  -F 'targeting= { "geo_locations":{"countries":["US"]}, "brand_safety_content_filter_levels":["FACEBOOK_STRICT","AN_STANDARD"]}' \
  -F 'status=ACTIVE' \
  -F 'access_token=ACCESS_TOKEN' \
  https://graph.facebook.com/VERSION/AD_ACCOUNT_ID/adsets
```

For Audience Network and In-Stream video you can also exclude publishers by category:

| Name | Description |
| --- | --- |
| `excluded_publisher_categories`  array<string> | Includes:   * `debated_social_issues` * `mature_audiences` * `tragedy_and_conflict`   **Example:** `"excluded_publisher_categories": ["debated_social_issues", "mature_audiences"]` |

## Device, publisher, and positions

| Name: Options | Description |
| --- | --- |
| `device_platforms`: `mobile`, `desktop` | **Optional.** **Default**: All  The device types someone has who sees your ad. |
| `publisher_platforms`: `facebook`, `instagram`, `threads`, `messenger`, `audience_network` | **Optional.** **Default**: All  The publishing channel for your ad. You can set the publishing channel position by setting them within `facebook_positions`, `instagram_positions`, `threads_positions`, `audience_network_positions`, or `messenger_positions`.  **Notes:**   * If provided, `publisher_platforms` must include `facebook`, or do not provide it to default to all positions. * To deliver ads to Threads, include both `instagram` and `threads` under `publisher_platforms` in your ad set. |
| `facebook_positions`: `feed`, `right_hand_column`, `marketplace`, `video_feeds`, `story`, `search`, `instream_video`, `facebook_reels`, `facebook_reels_overlay`, `profile_feed`, `notification` | **Optional.** **Default**: All  **Notes:**   * If provided, `publisher_platforms` must include `facebook` or do not provide to default to all. * `feed` includes Feed for Desktop, Mobile, and the Friends Tab on Mobile. * For campaigns targeting the United States (US), United Kingdom (GB), France (FR), Spain (ES), Germany (DE), Mexico (MX), India (IN) and Thailand (TH), you can use `instream_video` without `feed` for the `VIDEO_VIEWS` and `POST_ENGAGEMENT` objectives. `instream_video` is not supported for the `CONVERSIONS` objective. * If you select `story`, you must use Facebook `feed` or Instagram `story` and `device_platforms: mobile` because Facebook Stories is mobile-only. * If you select `marketplace`, `search`, `profile_feed`, or `notification`, you must use `feed`. * As of v3.0, `right_hand_column` is only available for single image, single video, and carousel formats for the `TRAFFIC`, `CONVERSIONS`, and `PRODUCT_CATALOG_SALES` objectives. |
| `instagram_positions`: `stream`, `story`, `explore`, `explore_home`, `reels`, `profile_feed`, `ig_search`, `profile_reels` | **Optional.** **Default**: All  You can target Instagram carousel ads for Instagram `stream`, `story` or `ig_search`. If you are using unprompted carousel creative in stories, you cannot select both options for the same ad set.  Ads using `story` will be displayed in both the Instagram Desktop and Mobile web feeds. |
| `threads_positions`: `threads_stream` | **Optional.**  To use the Threads `threads_stream` placement, you must select the Instagram `stream` placement as well. |
| `audience_network_positions`: `classic`, `rewarded_video` | **Optional.** **Default**: All  By default, the API does not return `effective_audience_network_positions` when you read the targeting spec for an ad set. This may differ from your configured `audience_network_positions`. If you specify a position that is not supported for a given objective, it appears in the list of configured positions, but not in the list of effective positions. |
| `messenger_positions`: `sponsored_messages`, `story` | **Optional.** **Default**: `story`  **Notes:**   * If you select `story`, you must use Facebook `feed` or Instagram `story` and `device_platforms: mobile` because Messenger Stories is mobile-only. You can use `story` for single image and video formats in ad campaigns with the `CONVERSIONS`, `TRAFFIC`, `REACH`, `BRAND_AWARENESS`, and `APP_INSTALLS` objectives for ads driving traffic to websites and apps. * You cannot use `sponsored_messages` with the other placements, including Facebook placements. |
| `whatsapp_positions`: `status` | **Optional.**  **Notes:**   * To use the WhatsApp Status placement, you must select the Instagram story placement as well. * To use the WhatsApp Status placement, you must configure your settings for [Ads that Click to WhatsApp](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp). |

### Logic

* The logic for options in the same parameter is `OR`.  
  For example, `publisher_platforms=['facebook','instagram']` means deliver ads on Facebook and Instagram.
* The logic between parameters is `AND`.  
  For example, `publisher_platforms=['facebook']&device_platforms=['mobile']` means deliver these ads to Facebook Mobile only.
* If the logic results in targeting no one, such as `publisher_platforms=['instagram']& device_platforms=['desktop']`, you will see an error.

### Limitations

* You cannot use Audience Network alone, so `publisher_platforms: audience_network` cannot be selected by itself.
* The `audience_network` placement with the `VIDEO_VIEWS` objective must be used with the `THRUPLAYS` optimization goal.
* You cannot select `story` for `facebook_positions` by itself. If you select `story` for `facebook_positions`, you must also select Facebook `feed` or Instagram `story`.
* You cannot select `story` for `messenger_positions` by itself. If you select `story` for `messenger_positions`, you must also select either Facebook `feed` or Instagram `story`.
* You cannot select `notification` for `facebook_positions` by itself. If you select `notification` for `facebook_positions`, you must also select Facebook `feed`.
* Instagram Web Feeds ads use the `stream` placement and are checked for web eligibility to be delivered to both desktop and mobile web feeds. The compatible objectives are `BRAND_AWARENESS`, `REACH`, `LINK_CLICKS`, `POST_ENGAGEMENT`, `VIDEO_VIEWS`, and `CONVERSIONS`.
* You cannot select `threads_stream` for `threads_positions` by itself. If you select `threads_stream` for `threads_positions`, you must also select Instagram `stream`.
* You cannot select `status` for `whatsapp_positions` by itself. If you select `status` for `whatsapp_positions`, you must also select Instagram `story`.

### Limited spend on excluded placements

If you use placement controls to exclude certain placements for your ad sets, you can allow up to 5% of your spend to be allocated to each excluded placement when it’s likely to improve performance.

#### Opt-out with limited spend

To opt out of a placement with limited spend, pass the desired placement positions with the `placement_soft_opt_out` field when creating or updating an ad set.

The available positions are `facebook_positions`, `audience_network_positions`, `instagram_positions`, `threads_positions`, and `messenger_positions`.

##### Example request

```
```
"placement_soft_opt_out": {  
  "facebook_positions": [  
    "marketplace",  
    "profile_feed"  
  ],  
  "audience_network_positions": [  
    "classic",  
    "rewarded_video"  
  ]  
}
```
```

#### Retrieve limited spend settings

To see which placements have limited spend set, query an ad set’s `placement_soft_opt_out` field.

##### Example request

```
curl -G \
  -d "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/v25.0/<AD_SET_ID>?fields=placement_soft_opt_out"
```

## Examples

### Stories

To use Facebook Stories as your placement:

```
curl \
  -F 'name=My Ad Set'
  -F 'optimization_goal=CONVERSIONS'
  -F 'billing_event=IMPRESSIONS'
  -F 'bid_amount=2'
  -F 'daily_budget=1000'
  -F 'campaign_id=<AD_CAMPAIGN_ID>'
  -F 'targeting={"geo_locations":{"countries":["US"]}, "publisher_platforms":["messenger", "facebook"], "facebook_positions":["story"], "messenger_positions":["story"]}'
  -F 'status=ACTIVE'
  -F 'access_token=<ACCESS_TOKEN>'
  https://graph.facebook.com/API_VERSION/act_AD_ACCOUNT_ID/adsets
```

### In-stream Video

To create an ad set with only `instream_video` placement that targets a supported country listed above:

```
curl \
  -F 'name=My AdSet' \
  -F 'optimization_goal=REACH' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id=CAMPAIGN_ID' \
  -F 'targeting={"geo_locations":{"countries":["US"]},"publisher_platforms":["facebook"], "facebook_positions":["instream_video"]}' \
  -F 'status=ACTIVE' \
  -F 'access_token=ACCESS_TOKEN' \
  https://graph.facebook.com/API_VERSION/act_AD_ACCOUNT_ID/adsets
```

### Audience Network

To target the Audience Network Rewarded Video placement:

```
curl \
  -F 'name=My Ad Set' \
  -F 'optimization_goal=OFFSITE_CONVERSIONS' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'is_autobid=true' \
  -F 'daily_budget=40000' \
  -F 'campaign_id=<AD_CAMPAIGN_ID>' \
  -F 'targeting={"app_install_state": "not_installed","geo_locations":{"countries":["US"]},"facebook_positions":["feed"],"device_platforms": ["mobile"],"audience_network_positions": ["classic","rewarded_video"],"user_device": ["Android_Smartphone","Android_Tablet"],"user_os": ["Android_ver_4.4_and_above"]}' \
  -F 'promoted_object={"application_id": "<APPLICATION_ID>","custom_event_type": "PURCHASE","object_store_url": "<OBJECT_STORE_URL>"}' \
  -F 'status=ACTIVE' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<APIVERSION>/<AD_ACCOUNT_ID>/adsets
```

This returns:

```
{
  "targeting": {
    "audience_network_positions": [
      "classic",
      "rewarded_video"
    ],
    "effective_audience_network_positions": [
      "classic",
      "rewarded_video"
    ]
  },
  "id": "<AD_SET_ID>"
}
```

### Reels

To use Facebook Reels as your placement:

```
curl \
  -F 'name=My AdSet' \
  -F 'optimization_goal=REACH' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id=CAMPAIGN_ID' \
  -F 'targeting={"geo_locations":{"countries":["US"]},"publisher_platforms":["facebook"], "facebook_positions":["facebook_reels"]}' \
  -F 'status=ACTIVE' \
  -F 'access_token=ACCESS_TOKEN' \
  https://graph.facebook.com/API_VERSION/act_AD_ACCOUNT_ID/adsets
```

### Instagram Explore home

To create an ad set with the `explore_home` placement that targets a supported country (e.g., “US”):

```
curl -X POST \
  -F 'name="My AdSet"' \
  -F 'optimization_goal="LINK_CLICKS"' \
  -F 'billing_event="IMPRESSIONS"' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'targeting={
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "publisher_platforms": [
         "instagram"
       ],
       "instagram_positions": [
         "stream",
         "explore",
         "explore_home"
       ],
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

### Instagram search results

To create an ad set with the `ig_search` placement that targets a supported country (e.g., “US”):

```
curl -X POST \
  -F 'name="My AdSet"' \
  -F 'optimization_goal="LINK_CLICKS"' \
  -F 'billing_event="IMPRESSIONS"' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'targeting={
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "publisher_platforms": [
         "instagram"
       ],
       "instagram_positions": [
         "stream",
         "ig_search"
       ],
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

### Threads stream placement

```
curl \
  -F 'name=Threads Adset' \
  -F 'optimization_goal=LINK_CLICKS' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id=<CAMPAIGN_ID>' \
  -F 'targeting={
    "geo_locations": {"countries":["US"]},
    "publisher_platforms": ["instagram", "threads"],
    "instagram_positions": ["stream"],
    "threads_positions": ["threads_stream"],
    "user_os": ["iOS"]
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

### WhatsApp status placement

```
curl \
  -F 'name=Threads Adset' \
  -F 'optimization_goal=LINK_CLICKS' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id=<CAMPAIGN_ID>' \
  -F  'promoted_object =
       {
        "page_id":<PAGE_ID>,
        "whatsapp_phone_number": <PHONE_NUMBER>
       }' \
  -F 'targeting={
    "geo_locations": {"countries":["US"]},
    "publisher_platforms": ["instagram", "whatsapp"],
    "instagram_positions": ["story"],
    "whatsapp_positions": ["status"],
    "user_age_unknown": false
    }' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

## Effective placement with targeting

You create ad sets with placements in the targeting spec, however you do not always know if Facebook delivered your ad to the placements specified. This is because your selected placement may not apply to your chosen advertising objective. With the effective placements API for targeting, you can determine which placements your ad will deliver to, given your targeting options, and receive validation messages to understand why some placements are filtered out. If you do not provide targeting, you can still determine the effective placement based on ad set and ad campaign settings.

To read an effective placement based on your targeting, put `effective_` in front of the placement field name. For example:

```
curl -G \
  -d "fields=targeting{effective_publisher_platforms,effective_facebook_positions,effective_device_platforms,effective_audience_network_positions,effective_instagram_positions}" \
  -d "access_token=<access_token>" \
  https://graph.facebook.com/<VERSION>/<AD_SET_ID>
```

To see why some placements got filtered out use the `recommendation` field:

```
curl -G \
  -d "fields=recommendations" \
  -d "access_token=<access_token>" \
  https://graph.facebook.com/<VERSION>/23842573364570019
```

With the effective placements, you can determine which placements your ad will deliver to based on your ad set’s `billing_event`, `optimization_goal` and `promoted_object` as well as your ad campaign’s `buying_type` and `objective`. All parameters for `/ad_campaign_placement` include:

* Ad `account_id` and access token
* `billing_event`, such as `IMPRESSIONS`
* Buying Type, such as `AUCTION`
* Objective, such as `POST_ENGAGEMENT`
* Optimization Goal, which is optional, such as `POST_ENGAGEMENT`
* Promoted Object, such as `PIXEL_ID`

All parameters except for `promoted_object` and `optimization_goal` are required. If you do provide targeting, you can use Marketing API to determine the effective placement based on the ones permitted for your settings, see [Effective Placement with Targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting#effective_placement). For example:

```
curl -G \
-d 'account_id=<ACCOUNT_ID>' \
-d 'billing_event=IMPRESSIONS' \
-d 'buying_type=AUCTION' \
-d 'objective=PAGE_LIKES' \
-d 'optimization_goal=IMPRESSIONS' \
https://graph.facebook.com/<VERSION>/ad_campaign_placement?access_token=<TOKEN>
```

The call returns:

```
{
   "effective_device_platforms": [
      "mobile",
      "desktop"
   ],
   "effective_facebook_positions": [
      "feed",
      "right_hand_column"
   ],
   "effective_publisher_platforms": [
      "facebook"
   ],
   "recommendations": [
      {
         "title": "Placement Not Supported By Objective",
         "message": "Ads with PAGE_LIKES objective do not support facebook.instream_video, facebook.suggested_video, facebook.marketplace, audience_network.classic, audience_network.instream_video, audience_network.rewarded_video, instagram.stream, instagram.story",
         "code": 1815609,
         "importance": "LOW",
         "confidence": "HIGH",
         "blame_field": "targeting"
      },
      {
         "title": "Device Platform Not Supported By Objective",
         "message": "Ads with PAGE_LIKES objective do not support connected_tv.",
         "code": 1815610,
         "importance": "LOW",
         "confidence": "HIGH",
         "blame_field": "targeting"
      }
   ],
   }
}
```

You can use the `code` field from this result in a call to `/ad-recommendation` to see a detailed reason. For example, you can get this information:

```
[{"code": 1815610, "summary": "Device Platform Not Supported By Objective"},]
```

For more information, see [Ad Recommendation Reference](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) and [Effective Placement with Targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting#effective_placement).
