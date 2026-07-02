---
title: "Business Ad Studies"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adaccount
---

# Business Ad Studies

Updated: Mar 24, 2026

## Reading

This business owns these ads-related studies. Includes lift studies, split tests and so on.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/ad_studies HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fad_studies&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [AdStudy](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-study) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 104 | Incorrect signature |

## Creating

### /{business\_id}/ad\_studies

You can make a POST request to *ad\_studies* edge from the following paths:

* [/{business\_id}/ad\_studies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_studies)

When posting to this edge, an [AdStudy](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-study) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `cells` *list<Object>* | Describes the cells in the study.  required  ---   `description` *string*  `id` *int64*  `name` *string*  `creation_template` *enum {AUTOMATIC\_PLACEMENTS, BRAND\_AWARENESS, FACEBOOK, FACEBOOK\_AUDIENCE\_NETWORK, FACEBOOK\_INSTAGRAM, FACEBOOK\_NEWS\_FEED, FACEBOOK\_NEWS\_FEED\_IN\_STREAM\_VIDEO, IN\_STREAM\_VIDEO, INSTAGRAM, MOBILE\_OPTIMIZED\_VIDEO, PAGE\_POST\_ENGAGEMENT, REACH, TV\_COMMERCIAL, TV\_FACEBOOK, VIDEO\_VIEW\_OPTIMIZATION, LOW\_FREQUENCY, MEDIUM\_FREQUENCY, HIGH\_FREQUENCY}*  `adaccounts` *list<int64>*  `ads` *list<numeric string or integer>*  `adsets` *list<numeric string or integer>*  `campaigns` *list<numeric string or integer>*  `control_percentage` *float with at most two digits after decimal point*  `treatment_percentage` *float with at most two digits after decimal point*  Show child parameters |
| `client_business` *numeric string or integer* | Business associated with the study. |
| `confidence_level` *float* | Confidence level used in power calculations and final study report. |
| `cooldown_start_time` *integer* | Start of the pre-measurement cool-down period. This period ends when the study period starts. |
| `creative_test_config` *JSON object* | (Optional) Configuration for launching a 2-5 cell creative test. Specify either daily\_budget or lifetime\_budget\_percentage to set the budget allocation for the study across the cells' ads. The study's "type" field must also be defined as SPLIT\_TEST\_V2 when creative\_test\_config is included in the request. |
| `description` *string* | The purpose of the study. |
| `end_time` *integer* | Time when the study period ends.  required |
| `name` *string* | Name of the study.  required |
| `objectives` *list<Object>* | A vector of objects describing the objectives assigned to this study.  ---   `id` *numeric string or integer*  `is_primary` *boolean*  `name` *string*  `type` *enum {SALES, NONSALES, MAE, TELCO, FTL, MAI, PARTNER, BRANDLIFT, BRAND, MPC\_CONVERSION, CONVERSIONS}*  `offsite_datasets` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  `adspixels` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  `customconversions` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  `applications` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  `offline_conversion_data_sets` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  `product_sets` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  `product_catalogs` *list<JSON or object-like arrays>* ---   `id` *numeric string or integer* required  `event_names` *list<string>*  Show child parameters  Show child parameters |
| `observation_end_time` *integer* | The end of the observation period for this study. This period starts when the study period ends. |
| `start_time` *integer* | The time when the study period starts.  required |
| `type` *enum {LIFT, SPLIT\_TEST, CONTINUOUS\_LIFT\_CONFIG, GEO\_LIFT, BACKEND\_AB\_TESTING, CREATIVE\_SPEND\_ENFORCEMENT, PORTFOLIO\_OPTIMIZER, VERSION\_CONTROL}* | The type of ad study, such as `SPLIT_TEST` or `LIFT`. |
| `viewers` *list<int>* | This study is shared with these people. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
