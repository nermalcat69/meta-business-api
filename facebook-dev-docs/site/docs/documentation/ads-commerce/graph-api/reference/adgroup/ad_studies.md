---
title: "Ad"
source_url: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/ad_studies
---

# Ad

Updated: May 6, 2026

Contains information to display an ad and associate it with an ad set. Each ad is associated with an ad set and all ads in a set have the same daily or lifetime budget, schedule, and targeting. Creating multiple ads in an ad set helps optimize their delivery based on variations in images, links, video, text or placements.

Note that results returned by `synchronous_ad_review` does not represent the final decision made during full review of your ad.

### Ads with Political Content

To increase transparency of ads on Facebook, we require advertisers running ads with political content to complete authorization. We will begin enforcing this in the next few weeks. You must also indicate that your ad has political content and provide the name of the funding source for the ad:

* Your ad account must be authorized by a Page admin to run political ads for this Page. This is done by a Page admin on the `Issue, Electoral or Political Ads` tab under `Page Settings`.
* Ad account users must go through a verification process.

### Ads with Page Mentions

With Facebook's ads tools such as [Ads Manager⁠](https://www.facebook.com/ads/manager/accounts) or light-weight interfaces, you can create an ad with a *Page Mention*. This displays a link in your ad which opens an advertiser's Facebook page. **We do not provide this functionality in Marketing API**. If you try to create an ad with the API with a Page Mention it will succeed, however we will deliver the ad without the mention. Instead, use one of Facebook's ads tools.

### Targeting DSA Regulated Locations (European Union)

To create or copy an ad which is in an ad set targeted in the European Union’s Digital Services Act (DSA) regulated locations, please set the payor/beneficiary information first. For your convenience, if the `default_dsa_payor` and `default_dsa_beneficiary` are set in an ad account, during the copying process, even if the original ad set does not set payor or beneficiary, it will be filled with saved default values. For more information on copying ads that target DSA regulated locations in the EU, see the [Ad Copies reference documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup/copies#targeting-dsa-regulated-locations--european-union-).

### Targeting Youth in European Union (EU), European Economic Area (EEA), and Switzerland

Meta will stop showing ads to youth in the EU, EEA, and Switzerland as early as the week of November 6, 2023. When creating new ad sets or updating existing ones that target youth in the EU, EEA, and Switzerland, they will be prevented. Existing ad sets targeting youth in the EU, EEA and Switzerland, will pause delivery as early as the week of November 6, 2023. Existing ad sets targeting youth in the EU, EEA, and Switzerland and in other regions will see a warning that the ads in the ad sets will no longer be delivered to youth in the EU, EEA, and Switzerland.

### Examples

Creating an ad:

```
curl -X POST \
  -F 'name="My Ad"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads
```

To create a political ad, provide `authorization_category` with the value `POLITICAL` . For example:

```
curl -X POST \
  -F 'name="My AdGroup"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'authorization_category="POLITICAL"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads
```

See:

* [Ad Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group), [Ad Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign), and [Ad Creative](https://developers.facebook.com/docs/reference/ads-api/adcreative)
* [Storing Ad Objects](https://developers.facebook.com/documentation/ads-commerce/marketing-api/best-practices/manage-your-ad-object-status)

## Reading

An ad object contains the data necessary to visually display an ad and associate it with a corresponding ad set.

### By ad ID

```
curl -X GET \
  -d 'fields="id,name"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>/
```

### By ad account

To read all ads from one ad account:

Select language

PHP Business SDKPython Business SDKcURL

---

```
use FacebookAds\Object\AdAccount;  
use FacebookAds\Object\Fields\AdFields;  
  
$account = new AdAccount($account_id);  
$ads = $account->getAds(array(  
  AdFields::NAME,  
));  
  
// Outputs names of Ads.  
foreach ($ads as $ad) {  
  echo $ad->name;  
}
```

### By ad campaign

Read all ads from a campaign:

```
curl -X GET \
  -d 'fields="name"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_CAMPAIGN_ID>/ads
```

### By ad set

To read all ads from one ad set:

Select language

PHP Business SDKPython Business SDKcURL

---

```
use FacebookAds\Object\AdSet;  
use FacebookAds\Object\Fields\AdSetFields;  
  
$adset = new AdSet($adset_id);  
$ads = $adset->getAds(array(  
  AdFields::NAME,  
));  
  
// Outputs names of Ads .  
foreach ($ads as $ad) {  
  echo $ad->name;  
}
```

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
GET /v25.0/<ADGROUP_ID>/?fields=id%2Cname HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CADGROUP_ID%3E%2F%3Ffields%3Did%252Cname&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset` *enum{today, yesterday, this\_month, last\_month, this\_quarter, maximum, data\_maximum, last\_3d, last\_7d, last\_14d, last\_28d, last\_30d, last\_90d, last\_week\_mon\_sun, last\_week\_sun\_sat, last\_quarter, last\_year, this\_week\_mon\_today, this\_week\_sun\_today, this\_year}* | Date Preset |
| `review_feedback_breakdown` *boolean* | **Default value:** `false`  review\_feedback\_breakdown |
| `time_range` *{‘since’:YYYY-MM-DD,’until’:YYYY-MM-DD}* | Time Range. Note if time range is invalid, it will be ignored.  ---   `since` *datetime* A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.  `until` *datetime* A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.  Show child parameters |

#### Fields

| Field | Description |
| --- | --- |
| `id` *numeric string* | id    default |
| `account_id` *numeric string* | account\_id |
| `ad_active_time` *numeric string* | ad\_active\_time |
| `ad_review_feedback` *[AdgroupReviewFeedback](https://developers.facebook.com/docs/marketing-api/reference/adgroup-review-feedback)* | ad\_review\_feedback |
| `ad_schedule_end_time` *datetime* | ad\_schedule\_end\_time |
| `ad_schedule_start_time` *datetime* | ad\_schedule\_start\_time |
| `adlabels` *[list<AdLabel>](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label)* | adlabels |
| `adset` *[AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)* | adset |
| `adset_id` *numeric string* | adset\_id |
| `bid_amount` *int32* | bid\_amount |
| `bid_info` *map<string, unsigned int32>* | bid\_info |
| `bid_type` *enum {CPC, CPM, MULTI\_PREMIUM, ABSOLUTE\_OCPM, CPA}* | bid\_type |
| `campaign` *[Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group)* | campaign |
| `campaign_id` *numeric string* | campaign\_id |
| `configured_status` *enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | configured\_status |
| `conversion_domain` *string* | conversion\_domain |
| `conversion_specs` *[list<ConversionActionQuery>](https://developers.facebook.com/docs/marketing-api/reference/conversion-action-query)* | conversion\_specs |
| `created_time` *datetime* | created\_time |
| `creative` *[AdCreative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)* | creative |
| `creative_asset_groups_spec` *[AdCreativeAssetGroupsSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-asset-groups-spec)* | creative\_asset\_groups\_spec |
| `demolink_hash` *string* | demolink\_hash |
| `display_sequence` *int32* | display\_sequence |
| `effective_status` *enum {ACTIVE, PAUSED, DELETED, PENDING\_REVIEW, DISAPPROVED, PREAPPROVED, PENDING\_BILLING\_INFO, CAMPAIGN\_PAUSED, ARCHIVED, ADSET\_PAUSED, IN\_PROCESS, WITH\_ISSUES}* | effective\_status |
| `engagement_audience` *bool* | engagement\_audience |
| `failed_delivery_checks` *[list<DeliveryCheck>](https://developers.facebook.com/docs/marketing-api/adgroup/deliverychecks)* | failed\_delivery\_checks |
| `is_autobid` *bool* | is\_autobid |
| `issues_info` *[list<AdgroupIssuesInfo>](https://developers.facebook.com/docs/marketing-api/reference/adgroup-issues-info)* | issues\_info |
| `last_updated_by_app_id` *id* | last\_updated\_by\_app\_id |
| `name` *string* | name |
| `preview_shareable_link` *string* | preview\_shareable\_link |
| `priority` *unsigned int32* | priority |
| `recommendations` *list<AdRecommendation>* | recommendations |
| `source_ad` *[Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup)* | source\_ad |
| `source_ad_id` *numeric string* | source\_ad\_id |
| `special_ad_categories` *list<enum>* | special\_ad\_categories |
| `status` *enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | status |
| `targeting` *Targeting* | targeting |
| `tracking_and_conversion_with_defaults` *TrackingAndConversionWithDefaults* | tracking\_and\_conversion\_with\_defaults |
| `tracking_specs` *[list<ConversionActionQuery>](https://developers.facebook.com/docs/marketing-api/reference/conversion-action-query)* | tracking\_specs |
| `updated_time` *datetime* | updated\_time |

#### Edges

| Edge | Description |
| --- | --- |
| [`adcreatives`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adcreatives) *Edge<AdCreative>* | adcreatives |
| [`adrules_governed`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adrules_governed) *Edge<AdRule>* | adrules\_governed |
| [`copies`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/copies) *Edge<Adgroup>* | copies |
| [`insights`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/insights) *Edge<AdsInsights>* | insights |
| [`leads`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/leads) *Edge<UserLeadGenInfo>* | leads |
| [`previews`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/previews) *Edge<AdPreview>* | previews |
| [`targetingsentencelines`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/targetingsentencelines) *Edge<TargetingSentenceLine>* | targetingsentencelines |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 613 | Calls to this api have exceeded the rate limit. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 2500 | Error parsing graph query |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 200 | Permissions error |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |

## Creating

Before you create an ad, you need an existing [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) and [ad creative](https://developers.facebook.com/docs/reference/ads-api/adcreative). You can create ads synchronously and asynchronously.

**New ads are in pending state and do not run until Facebook approves or rejects them**. After we approve an ad it runs. If you do not want an ad to automatically run after approval, create it and set its ad set to `paused` (see [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)). Run the [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) when you are ready.

Due to iOS 14.5 changes, [Deferred Deep Linking](https://developers.facebook.com/docs/app-ads/deep-linking#deferred-deep-linking) is no longer available for [SKAdsNetwork Campaigns](https://developers.facebook.com/docs/audience-network/guides/SKAdNetwork).

### Synchronous Creation

Creates one ad at a time:

```
curl -X POST \
  -F 'name="My Ad"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads
```

### Asynchronous Creation

Create multiple ads at a time asynchronously. Receive a notification when all the ads in the request exist. Make an `HTTP POST` to: `https://graph.facebook.com/{API_VERSION}/act_{AD_ACCOUNT_ID}/asyncadrequestsets`

Use these fields:

| Field | Description |
| --- | --- |
| **name**  type: string | Required.  Name of ad set for newly created ads. |
| **ad\_specs**  type: array of ad specs | Required.  Ads can be created for different ad sets inside the current ad account. To use images in ad creative, provide `image_hash` in ad spec after you upload the image at `https://graph.facebook.com/{API_VERSION}/act_{AD_ACCOUNT_ID}/adimages`. `image_file` inside ad\_specs. |
| **notification\_uri**  type: string | Optional.  Async job completed. This URI notifies the caller with a `POST` and ad set id. |
| **notification\_mode**  type: string | Optional.  Notification mode: `OFF` – No notification `ON_COMPLETE` – Send notification when all ads for set created. |

For information on asynchronous request sets, see [Asynchronous Requests](https://developers.facebook.com/documentation/ads-commerce/marketing-api/asyncrequests).

### Limits

These are the maximum number of ads per object:

| Limit | Value |
| --- | --- |
| Ads in regular ad account | 5000 non-deleted ads |
| Ads in bulk ad account | 50000 non-deleted ads |
| Ads in an ad set | 50 non-deleted ads |
| Archived ads in an ad account | 100,000 archived ads |

### Examples

Download details for an ad:

```
curl -X POST \
  -F 'name="My AdGroup with Redownload"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'redownload=1' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads
```

### /{ad\_id}/copies

You can make a POST request to *copies* edge from the following paths:

* [/{ad\_id}/copies](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/copies)

When posting to this edge, an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `adset_id` *numeric string or integer* | Single ID of an adset object to make the parent of the copy. Ignore if you want to keep the copy under the original adset parent. |
| `creative_parameters` *AdCreative* | Creative inputs which will be used to construct the creative in the new ad. Overwrites happen at the top level. If no input is provided, the new ad will be created with an identical ad creative. If some input is provided, those parameters will be assigned to the ad creative created by this API call.  Accepts all ad creative parameters as specified in /documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives  supports emoji |
| `rename_options` *JSON or object-like arrays* | Rename options  ---   `rename_strategy` *enum {DEEP\_RENAME, ONLY\_TOP\_LEVEL\_RENAME, NO\_RENAME}* **Default value:** `ONLY_TOP_LEVEL_RENAME` `DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object  `rename_prefix` *string* A prefix to copy names. Defaults to null if not provided.  `rename_suffix` *string* A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.  Show child parameters |
| `status_option` *enum {ACTIVE, PAUSED, INHERITED\_FROM\_SOURCE}* | **Default value:** `PAUSED`  `ACTIVE`: the copied ad will have active status. `PAUSED`: the copied ad will have paused status. `INHERITED_FROM_SOURCE`: the copied ad will have the parent status. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied\_ad\_id* in the return type.

```
Struct  {
copied_ad_id: numeric string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

---

### /act\_{ad\_account\_id}/ads

You can make a POST request to *ads* edge from the following paths:

* [/act\_{ad\_account\_id}/ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads)

When posting to this edge, an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) will be created.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
POST /v25.0/act_<AD_ACCOUNT_ID>/ads HTTP/1.1  
Host: graph.facebook.com  
  
name=My+Ad&adset_id=%3CAD_SET_ID%3E&creative=%7B%22creative_id%22%3A%22%3CCREATIVE_ID%3E%22%7D&status=PAUSED
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fads%3Fname%3DMy%2BAd%26adset_id%3D%253CAD_SET_ID%253E%26creative%3D%257B%2522creative_id%2522%253A%2522%253CCREATIVE_ID%253E%2522%257D%26status%3DPAUSED&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `ad_schedule_end_time` *datetime* | An optional parameter that defines the end time of an individual ad. If no end time is defined, the ad will run on the campaign’s schedule.  This parameter is only available for sales and app promotion campaigns. |
| `ad_schedule_start_time` *datetime* | An optional parameter that defines the start time of an individual ad. If no start time is defined, the ad will run on the campaign’s schedule.  This parameter is only available for sales and app promotion campaigns. |
| `adlabels` *list<Object>* | Ad labels associated with this ad |
| `adset_id` *int64* | The ID of the ad set, required on creation. |
| `adset_spec` *Ad set spec* | The ad set spec for this ad. When the spec is provided, adset\_id field is not required. |
| `audience_id` *string* | The ID of the audience. |
| `bid_amount` *integer* | **Deprecated.** We no longer allow setting the `bid_amount` value on an ad. Please set `bid_amount` for the ad set. |
| `conversion_domain` *string* | The domain where conversions happen. Required to create or update an ad in a campaign that shares data with a pixel. This field will be auto-populated for existing ads by inferring from destination URLs . Note that this field should contain only the first and second level domains, and not the full URL. For example `facebook.com`. |
| `creative` *AdCreative* | This field is required for create. The ID or creative spec of the ad creative to be used by this ad. You can read more about creatives [here](https://developers.facebook.com/docs/marketing-api/adcreative). You may supply the ID within an object as follows:  `{"creative_id": <CREATIVE_ID>}` or creative spec as follow:  `{"creative": {\"name\": \"<NAME>\", \"object_story_spec\": <SPEC>}}`  required  supports emoji |
| `creative_asset_groups_spec` *string (CreativeAssetGroupsSpec)* | creative\_asset\_groups\_spec  supports emoji |
| `date_format` *string* | The format of the date. |
| `display_sequence` *int64* | The sequence of the ad within the same campaign |
| `engagement_audience` *boolean* | Flag to create a new audience based on users who engage with this ad |
| `execution_options` *list<enum{validate\_only, synchronous\_ad\_review, include\_recommendations}>* | **Default value:** `Set`  An execution setting `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field.  `include_recommendations`: this option cannot be used by itself. When this option is used, recommendations for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist. `synchronous_ad_review`: this option should not be used by itself. It should always be specified with `validate_only`. When these options are specified, the API call will perform Ads Integrity validations, which include message language checking, image 20% text rule, and so on, as well as the validation logics. If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review. |
| `include_demolink_hashes` *boolean* | Include the demolink hashes. |
| `name` *string* | Name of the ad.  required  supports emoji |
| `priority` *int64* | Priority |
| `source_ad_id` *numeric string or integer* | ID of the source Ad, if applicable. |
| `status` *enum{ACTIVE, PAUSED, DELETED, ARCHIVED}* | Only `ACTIVE` and `PAUSED` are valid during creation. Other statuses can be used for update. When an ad is created, it will first go through ad review, and will have the ad status `PENDING_REVIEW` before it finishes review and reverts back to your selected status of `ACTIVE` or `PAUSED`. During testing, it is recommended to set ads to a `PAUSED` status so as to not incur accidental spend. |
| `tracking_specs` *Object* | With Tracking Specs, you log actions taken by people on your ad. See [Tracking and Conversion Specs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/tracking-specs). |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 613 | Calls to this api have exceeded the rate limit. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 194 | Missing at least one required parameter |
| 500 | Message contains banned content |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 105 | The number of parameters exceeded the maximum for this operation |

---

## Updating

Update certain fields:

```
curl -X POST \
  -F 'name="My New Ad"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>/
```

### Limitations

* Only update fields that were used during ad creation can be updated.
* `adset_id` and `social_prefs` can not be updated.
* Ads with `status = ARCHIVED` have only two mutable fields: `name` and `status`. You can only change the latter to `DELETED`.
* Ads with `status = DELETED` only can have `name` changed.
* Ads in an ad set with `creative_sequence` set cannot be changed to `PAUSED`, `ARCHIVED`, or `DELETED`.
* Trying to duplicate existing objective campaigns to use the new objective values (`OUTCOME_APP_PROMOTION`, `OUTCOME_AWARENESS`, `OUTCOME_ENGAGEMENT`, `OUTCOME_LEADS`, `OUTCOME_SALES`, `OUTCOME_TRAFFIC`) may throw an error.

### Examples

Update the name:

```
curl -X POST \
  -F 'name="My New Ad"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>/
```

Update the name and download ad information:

```
curl -X POST \
  -F 'adgroup_status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>/
```

Update the status:

```
curl -X POST \
  -F 'adgroup_status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>/
```

You can't perform this operation on this endpoint.

## Deleting

#### Deleting an ad

You can remove values for any optional fields by [updating](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/ad_studies#Updating) the value to empty. You cannot delete ads in ad set with `creative_sequence` settings.

```
curl -X DELETE \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v25.0/<AD_ID>/
```

### /{ad\_id}

You can delete an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) by making a DELETE request to [/{ad\_id}](https://developers.facebook.com/docs/graph-api/reference/adgroup).

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
DELETE /v25.0/<ADGROUP_ID>/ HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=DELETE&path=%3CADGROUP_ID%3E%2F&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Return Type

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

---
