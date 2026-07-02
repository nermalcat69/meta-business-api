---
title: "Advantage+ App Campaigns"
source_url: https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations
---

# Advantage+ App Campaigns

Updated: May 8, 2026

We are introducing a new, unified, and streamlined process for creating campaigns, replacing the existing separate workflows for Manual, Advantage+ Shopping Campaigns (ASC) and Advantage+ App Campaigns.

As of v25.0, Marketing API developers will no longer be able to use or the Advantage+ app campaign API with the `smart_promotion_type=SMART_APP_PROMOTION` field to create AAC campaigns. Instead, developers will need to use [Advantage+ audience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-expansion/advantage-audience), [Advantage+ campaign budget](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/guides/advantage-campaign-budget), and Advantage+ placements to create campaigns with an `advantage_state` that reflects the type of Advantage+ campaign. Refer to the [Advantage+ Campaigns documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-campaigns) to start creating Advantage+ campaigns today and avoid disruption with the releases of v24.0 and v.25.0.

Advantage+ app campaigns (formerly known as Automated App Ads) use machine learning and automated systems to drive more results for your app install ads. This solution helps you scale campaigns and, ultimately, it makes your work more efficient.

Regular app ads versus Advantage+ app campaigns:

| Manual App Ads | Advantage+ App Campaigns |
| --- | --- |
| 1 campaign  Multiple ad sets  Multiple ads | 1 campaign  1 ad set  Multiple ads |
| Reliance on manual adjustments. | Reliance on machine learning adjustments. |
| Manually test up to 50 creative combinations. | Manually test up to 50 creative combinations. |

SKAdNetwork Advantage+ app campaigns targeting iOS 14 users are now available.

### Before You Start

To use Advantage+ app campaigns, you need:

* A Meta developer account
* A [Meta app](https://developers.facebook.com/documentation/development/create-an-app)
* The following permissions: `ads_management` and `ads_read`

You must be authorized to make `GET` and `POST` calls to the ad account used to fund your ads.

## Step 1: Create Campaign

Send a `POST` request to [`/act_{ad_account_id}/campaigns`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) with the following required, and optional, parameters:

| Parameter | Description |
| --- | --- |
| `adlabels`  *list of objects* | Ad Labels associated with the Advantage+ app campaigns campaign. **Optional.** |
| `buying_type`  *string* | Currently, Advantage+ app campaigns only supports the `buying_type AUCTION`. **Required.** |
| `execution_options`  *list of enums* | Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error is returned with more details. **Optional.** |
| `is_skadnetwork_attribution`  *string* | Identifies a SKAdsNetwork Campaign. **Optional** |
| `name`  *string* | Name for the Advantage+ App Campaign. |
| `objective`  *enum* | This is the campaign goal. Specify `APP_INSTALLS` for this type of ads. **Required.** |
| `promoted_object`  *object* | The object this ad set is promoting across all its ads. For Advantage+ app campaigns, provide `application_id` and `object_store_url`.  If your optimization goal is not `APP_INSTALLS`, provide:  | Standard Events | Custom Events | | --- | --- | | `application_id`, `object_store_url`, and `custom_event_type` | `application_id`, `object_store_url`, `custom_event_str` and specify `custom_event_type = OTHER` |  **Required if is\_skadnetwork\_attribution is set to true.** |
| `smart_promotion_type`  *list of objects* | To specify this is an Advantage+ App Campaign, smart promotion type should be set to `SMART_APP_PROMOTION`. **Optional.** |
| `special_ad_categories`  *list of objects* | Advantage+ app campaigns currently does not support special ad categories. Please specify this as an empty list, like so `[]`. **Required.** |
| `status`  *enum* | Valid options are: `PAUSED` and `ACTIVE`.  If this status is `PAUSED`, all its active ad sets and ads will be paused and have an effective status `CAMPAIGN_PAUSED`. **Required.** |
| `topline_id`  *numeric string or integer* | Topline ID. **Optional.** |

### Campaign Creation Call Example

```
curl -X POST \
  -F 'name=Advantage+ app campaigns sample campaign' \
  -F 'objective=APP_INSTALLS' \
  -F 'status=ACTIVE' \
  -F 'special_ad_categories=[]' \
  -F 'smart_promotion_type=SMART_APP_PROMOTION' \
  -F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_{ad-account-id}/campaigns
```

If you already have a campaign and want to update it, see [After Launch, Update Campaign](https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations#update-campaign).

## Step 2: Verify Campaign Creation (Optional)

As an option, you can check if you have successfully created an Advantage+ App Campaign. To do that, make a `GET` request to `/{ad-campaign-id}` with the field `smart_promotion_type`. A valid Advantage+ App Campaign returns `SMART_APP_PROMOTION`.

### Campaign Verification Call Example

```
curl -X GET -G \
  -d 'fields="smart_promotion_type"' \
  -d 'access_token={access-token}' \
https://graph.facebook.com/v25.0/{ad-campaign-id}
```

Example response, if a valid Advantage+ App Campaign was created:

```
{
  "smart_promotion_type": "SMART_APP_PROMOTION",
  "id": {ad-campaign-id}
}
```

## Step 3: Create Ad Set

Once you have an ad campaign, create your [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign). An ad set is a group of ads that share the same daily or lifetime budget, schedule, bid type, bid info, and targeting data.

To create an ad set, make a `POST` request to `/act_{ad_account_id}/adsets`. You may include the following parameters:

| Parameter | Description |
| --- | --- |
| `adlabels`  *list of objects* | Specifies list of labels to be associated with this object. **Optional.** |
| `bid_amount`  *integer* | **Required if `bid_strategy` is set to `LOWEST_COST_WITH_BID_CAP`.**  Bid cap or target cost for this ad set. The bid cap used in a lowest cost bid strategy is defined as the maximum bid you want to pay for a result based on your `optimization_goal`. The target cost used in a target cost bid strategy lets Facebook bid to meet your target on average and keep costs stable as you spend.   If an ad level `bid_amount` is specified, updating this value will overwrite the previous ad level bid.   The bid amount's unit is cents for currencies like USD, EUR, and the basic unit for currencies like JPY, KRW. The bid amount is for each occurrence, and has a minimum value 1 US cents. The minimum bid amounts of other currencies are of similar value to the US Dollar values provided. |
| `bid_constraints`  *list of objects* | **Required if `bid_strategy` is set to `lowest_cost_with_min_roas`.**  Similar to an ad set budget, minimum Return on Ads Spend (ROAS) bidding uses this to provide the ROAS floor, but you cannot use `bid_amount` with `bid_constraints`. |
| `bid_strategy`  *enum* | Choose a bid strategy for this ad set to suit your specific business goals. Each strategy has tradeoffs and may be available for certain `optimization_goals`. See [Bidding Overview, Bid Strategies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/bid-strategy) for more information.   For Advantage+ app campaigns, the following strategies are available:   * `LOWEST_COST_WITHOUT_CAP` * `LOWEST_COST_WITH_BID_CAP` * `LOWEST_COST_WITH_MIN_ROAS`**Required.** |
| `billing_event`  *enum* | The billing event that this ad set is using. For Automated App Aps, specify `IMPRESSIONS`. **Required.** |
| `campaign_id`  *numeric string or integer* | The ID for a valid Advantage+ app campaigns ad campaign you wish to add this ad set to. **Required.** |
| `campaign_attribution`  *enum* | The campaign attribution type used by this ad set.   * If you want to use Meta's Aggregated Event Measurement, then set this field to `AEM`. * If you want to use Apple's SKAdNetwork, then this field should be set to `SKADNETWORK`.   When one campaign has multiple ad sets, the campaign attribution type should be the same across all ad sets.  **This field is required when creating an iOS 14+ campaign.** |
| `daily_budget`  *int64* | The daily budget defined in your account currency, allowed only for ad sets with a duration (difference between `end_time` and `start_time`) longer than 24 hours.  Either `daily_budget` or `lifetime_budget` must be greater than 0. **Optional.** |
| `end_time`  *datetime* | **Required when `lifetime_budget` is specified.**  When creating an ad set with a `daily_budget`, specify `end_time=0` to set the ad set as ongoing with no end date. Time should be provided in UTC UNIX timestamp.   For example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. |
| `lifetime_budget`  *int64* | Lifetime budget, defined in your account currency. If specified, you must also specify an `end_time`.  Either `daily_budget` or `lifetime_budget` must be greater than 0. **Optional.** |
| `name`  *string* | Name for the Advantage+ app campaigns ad set. **Required.** |
| `optimization_goal`  *enum* | What the ad set is optimizing for. Advantage+ app campaigns supports the following optimization goals:   * `APP_INSTALLS`: Optimizes for people more likely to install your app. * `OFFSITE_CONVERSIONS`: Optimizes for people more likely to make a conversion in your site. * `APP_INSTALLS_AND_OFFSITE_CONVERSIONS`: Optimizes for people more likely to install your app and make a conversion in your site. * `VALUE`: Optimizes for maximum total purchase value within the specified attribution window.   **Required.** |
| `promoted_object`  *object* | The object this ad set is promoting across all its ads. For Advantage+ app campaigns, provide `application_id` and `object_store_url`.  If your optimization goal is not `APP_INSTALLS`, provide:  | Standard Events | Custom Events | | --- | --- | | `application_id`, `object_store_url`, and `custom_event_type` | `application_id`, `object_store_url`, `custom_event_str` and specify `custom_event_type = OTHER` |  **Required for all campaigns except SKAdNetwork Campaign**. Optional for SKAdNetwork Campaign. |
| `status`  *enum* | Only `ACTIVE` and `PAUSED` are valid for creation. The other statuses can be used for updates. If an ad set is set to `PAUSED`, all its active ads will be paused and have an effective status `ADSET_PAUSED`. **Required.** |
| `start_time`  *datetime* | The start time of the set. For example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. Must be provided as a UTC UNIX timestamp. |
| `targeting`  *targeting object* | An Advantage+ App Campaign ad set's targeting structure. Valid targeting options are `geo_locations` and `locales`. See [Targeting Fields](https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations#create-ad-set-targeting).   For example:  ``` {    "geo_location": {      "countries": ["US"]      },    "locales": [8] } ```  Advantage+ app campaigns do not support operating system targeting, however SKAdsNetwork Advantage+ app campaigns will only target iOS14.5+ users. **Required.** |
| `time_start`  *datetime* | Time to start running this ad set. |
| `time_stop`  *datetime* | Time to stop running this ad set. |

#### Targeting Fields

| Parameter | Description |
| --- | --- |
| `geo_locations`  *array* | Used to limit the audience of the ad set via the required argument countries. Valid value: `countries`. An array of [2 digit ISO 3166 format codes⁠](https://www.iso.org/obp/ui/#search). **Required.** |
| `locales`  *array* | Target people with language other than common language for a location. To use this field, provide an ID for the language, such as 5 for German. See [Targeting Search, Locales](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search#locale) for more information. |

### Ad Set Creation Call Example

```
curl -X POST \
  -F 'name=Advantage+ app campaigns sample ad set' \
  -F 'campaign_id={campaign-id}' \
  -F 'optimization_goal=APP_INSTALLS' \
  -F 'promoted_object={ "application_id": "{app-id}", "object_store_url": "{store-object-id} }' \
  -F 'daily_budget=<num>' \
  -F 'billing_event=IMPRESSIONS' \
  -F 'targeting={"geo_locations": {"countries": ["US"]}​}' \
  -F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_{ad-account-id}/adsets
```

If you already have an ad set and want to update it, see [After Launch, Update Ad Sets](https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations#update-ad-sets).

### Optimization Compatibility

At the ad set level, you must specify optimization goal, [bid strategy](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/bid-strategy) and custom event type. The following table outlines valid combinations of these fields.

| Optimization Goal | Bid Strategy | Custom Event Type |
| --- | --- | --- |
| `APP_INSTALLS` | `LOWEST_COST_WITHOUT_CAP` and `LOWEST_COST_WITH_BID_CAP` | Not applicable. |
| `APP_INSTALLS_AND_OFFSITE_CONVERSIONS` | `LOWEST_COST_WITHOUT_CAP` | `PURCHASE` |
| `OFFSITE_CONVERSIONS` | `LOWEST_COST_WITHOUT_CAP` and `LOWEST_COST_WITH_BID_CAP` | All [standard app events](https://developers.facebook.com/documentation/app-ads/optimizing-your-app-ad#app-event-optimization), including `PURCHASE`, `ADD_TO_CART`, `INITIATED_CHECKOUT`, and more. |
| `VALUE` | `LOWEST_COST_WITHOUT_CAP` and `LOWEST_COST_WITH_MIN_ROAS` | `PURCHASE` |

### SKAdNetwork Set Creation Call Example

```
curl -X POST \  
  -F 'name=Advantage+ app campaigns sample campaign' \  
  -F 'objective=APP_INSTALLS' \  
  -F 'status=ACTIVE' \  
  -F 'special_ad_categories=[]' \  
  -F 'smart_promotion_type=SMART_APP_PROMOTION' \  
  -F 'is_skadnetwork_attribution=true' \  
  -F 'promoted_object={ "application_id": "{app-id}", "object_store_url": "{object-store-url}" }' \  
  -F 'access_token={access-token}' \  
https://graph.facebook.com/act_{ad-account-id}/campaigns
```

## Step 4: Provide Creative and Create Ads

Once you have an ad set, you can create your ad by posting to the `/act_{ad_account_id}/ads` endpoint. You may include the following parameters:

| Parameter | Description |
| --- | --- |
| `adset_id`  *int64* | **Required.**  The ID of the ad set. |
| `adlabels`  *list of objects* | **Optional.**  Ad labels associated with this ad. |
| `creative`  *AdCreative* | **Required.**  The creative spec of the ad creative to be used by this ad. Valid fields are `object_story_spec`, `asset_feed_spec`, and `use_page_actor_override`. See [Creative Fields](https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations#ad-creation-creative) for more information.   You can provide the creative in the following format:  ``` {   "creative_id":  {creative-id} } ```  Provide a creative spec:  ``` {   "creative": {     \"name\": \"<NAME>\",     \"object_story_spec\": <SPEC>   } } ``` |
| `execution_options`  *list of enums* | **Optional.**  Default value: `set`.  Other options are:   * `validate_only`: when this option is specified, the API call does not perform the mutation but runs through the validation rules against values of each field. * `synchronous_ad_review`: this option should not be used by itself. It should always be specified with `validate_only`. When these options are specified, the API call performs Ads Integrity validations, which include message language checking, image 20% text rule, and so on, as well as the validation logics. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object's configuration will be included. A separate section recommendations will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. |
| `name`  *string* | **Required.**  Name of the ad. |
| `status`  *AdCreative*  type: enum | **Required.**  Valid options during creation: `ACTIVE` and `PAUSED`. During testing, it is recommended to set ads to a `PAUSED` status so as to not incur accidental spend. |

#### Creative Fields

| Parameter | Description |
| --- | --- |
| `asset_feed_spec`  *AdAssetFeedSpec* | **Required when using [`/adcreatives`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives).**  Used for [Placement Asset Customization](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization) and [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads) to customize the creative assets displayed in different ad placements or different languages. Formatted as a JSON string.   Available fields:   * `images` * `videos` * `carousels` * `bodies` * `call_to_action_types` * `titles` * `descriptions` * `link_urls` * `ad_formats` * `optimization_type` * `asset_customization_rules`   Refer to [Asset Feed Options](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/asset-feed-spec/options) for more information on each field. |
| `object_story_spec`  *AdCreativeObjectStorySpec* | **Required.** Use if you want to attach images or videos to an ad, or if you want to use the carousel ad format. You can also use this if you want to create a new unpublished Page post and turn the post into an ad.   Available fields:   * `page_id` (*numeric string*) - **Required.** ID of a Facebook Page. An unpublished Page post will be created on this Page. Users must have the [Admin or Editor role⁠](https://www.facebook.com/help/1206330326045914) for the Page. * `instagram_user_id` (*numeric string*) - **Optional.** The Instagram User account that the story will be posted to. * `link_data` - Follow the instructions in [App Ads: Create](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads#create) to specify the call to actions, photo, and carousel. * `video_data` - Follow the instructions in [App Ads: Create with Video](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads#create_video) to specify the video. |
| `use_page_actor_override`  *AdCreative* | If set to `true`, we display the Facebook page associated with the App Ads. |

### Ad Creation Call Example

If you provide your creative formatted as creative spec:

```
curl -X POST \
  -F 'name=Advantage+ app campaigns sample ad' \
  -F 'adset_id={adset-id}' \
  -F 'creative={"name": {name}, "object_story_spec": {specifications}​}' \
  -F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_{ad-account-id}/ads
```

If you would like to use `creative_id`, you must first provide your creative with a [`/adcreatives`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives) call:

```
curl -X POST \
-F 'object_story_spec={object-story-specifications}' \
-F 'asset_feed_spec={asset-feed-specifications}' \
-F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_act_{ad-account-id}/adcreatives
```

On success, the previous call returns a `creative_id` you can use in your [`/ads`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads) call:

```
curl -X POST \
  -F 'name=Advantage+ app campaigns sample ad' \
  -F 'adset_id={adset-id}' \
  -F 'creative={creative-id}' \
  -F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_{ad-account-id}/ads
```

If you already have an ad and want to update it, go to [After Launch, Update Ads](https://developers.facebook.com/documentation/app-ads/SKAdNetwork-aem-and-limitations#update-ads).

### Static Image/Video Example

```
curl -X POST \
  -F 'name=Advantage+ app campaigns static image/video sample ad' \
  -F 'adset_id={adset-id}' \
  -F 'creative={
        "media_type": "SINGLE_IMAGE",
        "object_story_spec": {
          "instagram_user_id": "<IG_USER_ID>",
          "page_id": "{page-id}",
          "link_data": {
            "call_to_action": {
              "type": "INSTALL_MOBILE_APP"
            },
            "image_hash": "{image-hash}",
            "link": "{link}",
            "message": "{message}",
            "name": "{name}"
          }
        }
      }' \
  -F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_{ad-account-id}/ads
```

#### Placement Asset Customization Example

When you want to customize the creative assets displayed in different ad placements. Check [Placement Asset Customization](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization) page for details.

```
curl -X POST \
-F 'object_story_spec={
  "instagram_user_id": "<IG_USER_ID>",
  "page_id": "{page-id}"
    }' \
-F 'asset_feed_spec={
  "ad_formats": [
    "SINGLE_IMAGE"
  ],
  "asset_customization_rules": [
    {
      "customization_spec": {
        "publisher_platforms": [
          "facebook"
        ],
        "facebook_positions": [
          "feed",
          "instream_video"
        ]
      },
      "image_label": {
        "name": "{image-label1}"
      }
    },
    {
      "customization_spec": {
        "publisher_platforms": [
          "instagram"
        ],
        "instagram_positions": [
          "stream"
        ]
      },
      "image_label": {
        "name": "{image-label2}"
      }
    }
  ],
  "bodies": [
    {
      "text": "{text}"
    }
  ],
  "call_to_action_types": [
    "INSTALL_MOBILE_APP"
  ],
  "images": [
    {
      "hash": "{image-hash1}",
      "adlabels": [
        {
          "name": "{image-label1}"
        }
      ]
    },
    {
      "hash": "{image-hash2}",
      "adlabels": [
        {
          "name": "{image-label2}"
        }
      ]
    }
  ],
  "link_urls": [
    {
      "website_url": "{website-url}",
      "display_url": "{display-url}",
      "deeplink_url": "{deeplink-url}"
    }
  ],
  "titles": [
    {
      "text": "{title}"
    }
  ]
}' \
-F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_act_{ad-account-id}/adcreatives
```

#### Multi-Language Ads Example

When you want to customize different parts of ad creative such as the image, video, text, and body of an ad to reach speakers of different language. Check [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads) page for details.

```
curl -X POST \
-F 'object_story_spec={
  "instagram_user_id": "<IG_USER_ID>",
  "page_id": "{page-id}"
    }' \
-F 'asset_feed_spec={
  "ad_formats": [
    "SINGLE_IMAGE"
  ],
  "asset_customization_rules": [
    {
      "is_default": true,
      "customization_spec": {
        "locales": [
          24
        ]
      },
      "title_label": {
        "name": "{title-label-english}"
      },
      "body_label": {
        "name": "{body-label-english}"
      },
      "link_url_label": {
        "name": "{link-label-english}"
      },
      "image_label": {
        "name": "{image-label1}"
      }
    },
    {
      "customization_spec": {
        "locales": [
          9,
          44
        ]
      },
      "title_label": {
        "name": "{title-label-french}"
      },
      "body_label": {
        "name": "{body-label-french}"
      },
      "link_url_label": {
        "name": "{link-label-french}"
      },
      "image_label": {
        "name": "{image-label2}"
      }
    }
  ],
  "bodies": [
    {
      "text": "Primary Text in English",
      "adlabels": [
        {
          "name": "{body-label-english}"
        }
      ]
    },
    {
      "text": "Primary Text in French",
      "adlabels": [
        {
          "name": "{body-label-french}"
        }
      ]
    }
  ],
  "call_to_action_types": [
    "INSTALL_MOBILE_APP"
  ],
  "images": [
    {
      "hash": "{image-hash1}",
      "adlabels": [
        {
          "name": "{image-label1}"
        }
      ]
    },
    {
      "hash": "{image-hash2}",
      "adlabels": [
        {
          "name": "{image-label2}"
        }
      ]
    }
  ],
  "link_urls": [
    {
      "website_url": "{website-url}",
      "display_url": "{display-url}",
      "deeplink_url": "{deeplink-url}",
      "adlabels": [
        {
          "name": "{link-label-english}"
        }
      ]
    },
    {
      "website_url": "{website-url}",
      "display_url": "{display-url}",
      "deeplink_url": "{deeplink-url}",
      "adlabels": [
        {
          "name": "{link-label-french}"
        }
      ]
    }
  ],
  "titles": [
    {
      "text": "English Title",
      "adlabels": [
        {
          "name": "{title-label-english}"
        }
      ]
    },
    {
      "text": "French Title",
      "adlabels": [
        {
          "name": "{title-label-french}"
        }
      ]
    }
  ]
}' \
-F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_act_{ad-account-id}/adcreatives
```

#### Multi-Text Example

When you want to provide more than 1 Primary Text or Headline.

```
curl -X POST \
-F 'object_story_spec={
  "instagram_user_id": "<IG_USER_ID>",
  "page_id": "{page-id}"
    }' \
-F 'asset_feed_spec={
  "asset_feed_spec": {
    "optimization_type": "DEGREES_OF_FREEDOM",
    "bodies": [
      {
        "text": "Primary Text 1"
      },
      {
        "text": "Primary Text 2"
      },
      {
        "text": "Primary Text 3"
      },
      {
        "text": "Primary Text 4"
      },
      {
        "text": "Primary Text 5"
      }
    ],
    "call_to_action_types": [
      "INSTALL_MOBILE_APP"
    ],
    "images": [
      {
        "hash": "{image-hash}"
      }
    ],
    "link_urls": [
      {
        "website_url": "{website-url}",
        "display_url": "{display-url}",
        "deeplink_url": "{deeplink-url}"
      }
    ],
    "titles": [
      {
        "text": "Title 1"
      },
      {
        "text": "Title 2"
      },
      {
        "text": "Title 3"
      },
      {
        "text": "Title 4"
      },
      {
        "text": "Title 5"
      }
    ]
  }
}' \
-F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_act_{ad-account-id}/adcreatives
```

#### Placement Asset Customization + Multi-Text Example

```
curl -X POST \
-F 'object_story_spec={
  "instagram_user_id": "<IG_USER_ID>",
  "page_id": "{page-id}"
    }' \
-F 'asset_feed_spec={
  "ad_formats": [
    "SINGLE_IMAGE"
  ],
  "asset_customization_rules": [
    {
      "customization_spec": {
        "publisher_platforms": [
          "facebook"
        ],
        "facebook_positions": [
          "feed",
          "instream_video"
        ]
      },
      "image_label": {
        "name": "{image-label1}"
      },
      "body_label": {
        "name": "{body-label1}"
      },
      "title_label": {
        "name": "{title-label1}"
      }
    },
    {
      "customization_spec": {
        "publisher_platforms": [
          "instagram"
        ],
        "instagram_positions": [
          "stream"
        ]
      },
      "image_label": {
        "name": "{image-label2}"
      },
      "body_label": {
        "name": "{body-label2}"
      },
      "title_label": {
        "name": "{title-label2}"
      }
    }
  ],
  "bodies": [
    {
      "text": "Primary Text 1",
      "adlabels": [
        {
          "name": "{body-label1}"
        },
        {
          "name": "{body-label2}"
        }
      ]
    },
    {
      "text": "Primary Text 2",
      "adlabels": [
        {
          "name": "{body-label1}"
        },
        {
          "name": "{body-label2}"
        }
      ]
    },
    {
      "text": "Primary Text 3",
      "adlabels": [
        {
          "name": "{body-label1}"
        },
        {
          "name": "{body-label2}"
        }
      ]
    },
    {
      "text": "Primary Text 4",
      "adlabels": [
        {
          "name": "{body-label1}"
        },
        {
          "name": "{body-label2}"
        }
      ]
    },
    {
      "text": "Primary Text 5",
      "adlabels": [
        {
          "name": "{body-label1}"
        },
        {
          "name": "{body-label2}"
        }
      ]
    }
  ],
  "call_to_action_types": [
    "INSTALL_MOBILE_APP"
  ],
  "images": [
    {
      "hash": "{image-hash1}",
      "adlabels": [
        {
          "name": "{image-label1}"
        }
      ]
    },
    {
      "hash": "{image-hash2}",
      "adlabels": [
        {
          "name": "{image-label2}"
        }
      ]
    }
  ],
  "link_urls": [
    {
      "website_url": "{website-url}",
      "display_url": "{display-url}",
      "deeplink_url": "{deeplink-url}"
    }
  ],
  "titles": [
    {
      "text": "Title 1",
      "adlabels": [
        {
          "name": "{title-label1}"
        },
        {
          "name": "{title-label2}"
        }
      ]
    },
    {
      "text": "Title 2",
      "adlabels": [
        {
          "name": "{title-label1}"
        },
        {
          "name": "{title-label2}"
        }
      ]
    },
    {
      "text": "Title 3",
      "adlabels": [
        {
          "name": "{title-label1}"
        },
        {
          "name": "{title-label2}"
        }
      ]
    },
    {
      "text": "Title 4",
      "adlabels": [
        {
          "name": "{title-label1}"
        },
        {
          "name": "{title-label2}"
        }
      ]
    },
    {
      "text": "Title 5",
      "adlabels": [
        {
          "name": "{title-label1}"
        },
        {
          "name": "{title-label2}"
        }
      ]
    }
  ]
}' \
-F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/act_act_{ad-account-id}/adcreatives
```

## After Launch

After you launch your Advantage+ app campaigns, you may need to update or read your ad objects —see how to perform those actions below. For ad insights information, see our [Asset Feed Spec, Insights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/asset-feed-spec/insights) documentation.

### Update Campaigns

If you need to update an Automatic App Ads campaign, make a `POST` request to `/{campaign_id}`. You can use the following parameters in your API call:

| Parameter | Description |
| --- | --- |
| `adlabels`  *list of object* | Ad Labels that should be associated with the Advantage+ App Campaign. |
| `execution_options`  *list of enums* | Default value: `set`. Other available options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response is `{"success": true}`. If the call does not pass, an error is returned with more details. |
| `name`  *string* | New name you would like to give to your Advantage+ App Campaign. |
| `status`  *enum* | You can use the following status for an update API call:   * `ACTIVE` * `PAUSED` * `DELETED` * `ARCHIVED`   If an ad campaign is set to `PAUSED`, its active child objects will be paused and have an effective status `CAMPAIGN_PAUSED`. |
| `topline_id`  *numeric string or integer* | Topline ID. |

#### Campaign Update Example

```
curl -X POST \
-F 'name=Advantage+ app campaigns Update Sample Campaign' \
-F 'status=PAUSED' \
-F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/{campaign-id}
```

### Update Ad Sets

If you need to update an Automatic App Ads ad set, make a `POST` request to `/{ad_set_id}`. You can use the following parameters in your API call:

| Parameter | Description |
| --- | --- |
| `adlabels`  *list of objects* | Specifies list of labels to be associated with this object. **Optional.** |
| `bid_amount`  *integer* | **Required if `bid_strategy` is set to `LOWEST_COST_WITH_BID_CAP`.**  Bid cap or target cost for this ad set. The bid cap used in a lowest cost bid strategy is defined as the maximum bid you want to pay for a result based on your `optimization_goal`. The target cost used in a target cost bid strategy lets Facebook bid to meet your target on average and keep costs stable as you spend.   If an ad level `bid_amount` is specified, updating this value will overwrite the previous ad level bid.   The bid amount's unit is cents for currencies like USD, EUR, and the basic unit for currencies like JPY, KRW. The bid amount is for each occurrence, and has a minimum value 1 US cents. The minimum bid amounts of other currencies are of similar value to the US Dollar values provided. |
| `bid_strategy`  *enum* | Choose a bid strategy for this ad set to suit your specific business goals. Each strategy has tradeoffs and may be available for certain `optimization_goals`. See [Bidding Overview, Bid Strategies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/bid-strategy) for more information.  To update Advantage+ App Campaign sets, the following strategies are available:   * `LOWEST_COST_WITHOUT_CAP` * `LOWEST_COST_WITH_BID_CAP`   If you enable [Campaign Budget Optimization](https://developers.facebook.com/docs/marketing-api/bidding/guides/campaign-budget-optimization), set `bid_strategy` at the parent campaign level. |
| `daily_budget`  *int64* | The daily budget defined in your account currency, allowed only for ad sets with a duration (difference between `end_time` and `start_time`) longer than 24 hours. Either `daily_budget` or `lifetime_budget` must be greater than 0. |
| `end_time`  *datetime* | End time, required when `lifetime_budget` is specified. Must be provided in UTC UNIX timestamp. For example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`.   When creating an ad set with a daily budget, specify `end_time=0` to set the ad set as ongoing with no end date. |
| `execution_options`  *list of enums* | **Optional.**  Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response is `{"success": true}`. If the call does not pass, an error is returned with more details. |
| `lifetime_budget`  *int64* | Lifetime budget, defined in your account currency. If specified, you must also specify an `end_time`. Either `daily_budget` or `lifetime_budget` must be greater than 0. |
| `promoted_object`  *object* | **Required with certain campaign objectives.**  The object this ad set is promoting across all its ads.   If your optimization goal is not `APP_INSTALLS`, available options include:   * `custom_event_type` * `custom_event_str` (if `custom_event_type = OTHER`) |
| `start_time`  *datetime* | The start time of the set. Must be provided in UTC UNIX timestamp. For example: `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. |
| `status`  *enum* | Available options for updates:   * `ACTIVE` * `PAUSED` * `DELETED` * `ARCHIVED` |
| `time_start`  *datetime* | Time to start running this ad set. |
| `time_stop`  *datetime* | Time to stop running this ad set. |

#### Ad Set Update Example

```
curl -X POST \
  -F 'name=Advantage+ app campaigns sample updated ad set' \
  -F 'bid_strategy=LOWEST_COST_WITH_BID_CAP' \
  -F 'bid_amount=200' \
  -F 'access_token={access-token}' \
https://graph.facebook.com/v25.0/{ad-set-id}
```

### Update Ads

If you need to update an Automatic App Ads ad, make a `POST` request to `/{ad_id}`. You can use the following parameters in your API call:

| Parameter | Description |
| --- | --- |
| `name`  *string* | Name of the ad. |
| `adlabels`  *list of objects* | Ad labels associated with this ad. |
| `execution_options`  *list of enums* | **Optional.**  Default value: `set`. Other options are:   * `validate_only`: when this option is specified, the API call does not perform the mutation but runs through the validation rules against values of each field. * `synchronous_ad_review`: this option should not be used by itself. It should always be specified with `validate_only`. When these options are specified, the API call performs ads integrity validations, which include message language checking, image 20% text rule, and so on, as well as the validation logics. * `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for an object's configuration are included. A separate section recommendations is included in the response, but only if recommendations for this specification exist.   If the call passes validation or review, the response is `{"success": true}`. If the call does not pass, an error is returned with more details. |
| `status`  *enum* | Options are:   * `ACTIVE` * `PAUSED` * `DELETED` * `ARCHIVED`   During testing, it is recommended to set ads to a `PAUSED` status so as to not incur accidental spend. |
| `creative`  *AdCreative* | The creative spec of the ad creative to be used by this ad. Valid fields can be found on Creative Fields. Provide the creative spec as follows:  ``` {   "creative": {     \"name\": \"<NAME>\",     \"object_story_spec\": <SPEC>    } } ``` |

#### Ad Update Example

```
curl -X POST \
-F 'name=Advantage+ app campaigns sample update ad' \
-F 'creative={"name": {name}, "object_story_spec": {specifications}​}' \
-F 'access_token={access-token}' \
https://graph.facebook.com/{ad-id}
```
