---
title: "Ad Label"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label
---

# Ad Label

Updated: Dec 4, 2025

API users tend to create 1000s of campaigns/ad sets/ads, and would like to have the ability to group together sets of ad objects arbitrarily. For example, an advertiser may want to track all campaigns that are targeting men or women, or track all ads that are using the same creative. Or use external data, like, track all campaigns that were created by a particular team, as a part of a particular marketing initiative.

Until now this could be achieved by overloading the name of the ad object. API developers have come up with complicated naming schemes, creating campaigns with names like **"[client]-[fmp]-[autogen]-[18-34-oregon]-[custaudience-141]"**, and these names are used to parse out tags.

With the introduction of Labels API, we allow developers to tag ad objects with multiple "labels" (strings). Developers can query by these labels, so they can quickly collate and query ad objects such as campaigns, ad sets, ads and creatives that belong to the same "label".

### Limits

The following are the limits on ad sets

| Limit | Value |
| --- | --- |
| Maximum number of ad labels per regular ad account | 100,000 non-deleted ad labels |
| Maximum number of ad labels specified in the spec (to be associated with an ad object) | 50 ad labels spec |

## Reading

An AdLabel

### Getting ad objects associated with a given label

For an ad account, one can retrieve ad objects associated with an ad label. This can be achieved by:

* for campaigns, using endpoint `/campaignsbylabels`
* for ad sets, using endpoint `/adsetsbylabels`
* for ads, using endpoint `/adsbylabels`
* for creatives, using endpoint `/adcreativesbylabels`

Supported operators are `ALL` and `ANY`:
for ids and label names matching, partial string matching is not supported.

```
curl -G \
  -d 'ad_label_ids=["<AD_LABEL_ID>"]' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsbylabels
```

Similarly, field filtering can be used for finding ads, ad sets, campaigns just as done on the insights edge.

The filtering parameter is an array of filter object. Each filter object has three fields: 'field', 'operator' and 'value'. Valid filter operator could be ('EQUAL', 'NOT\_EQUAL', 'GREATER\_THAN', 'GREATER\_THAN\_OR\_EQUAL', 'LESS\_THAN', 'LESS\_THAN\_OR\_EQUAL', 'IN\_RANGE', 'NOT\_IN\_RANGE', 'CONTAIN', 'NOT\_CONTAIN', 'IN', 'NOT\_IN', 'ANY', 'ALL', 'NONE').

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

| Field | Description |
| --- | --- |
| `id` *numeric string* | Ad Label ID |
| `created_time` *datetime* | Created time |
| `name` *string* | Ad Label name    default |
| `updated_time` *datetime* | Updated time |

#### Edges

| Edge | Description |
| --- | --- |
| [`adcreatives`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label/adcreatives) *Edge<AdCreative>* | Creatives associated with this label |
| [`ads`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label/ads) *Edge<Adgroup>* | Ads associated with this label |
| [`adsets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label/adsets) *Edge<AdCampaign>* | Ad sets associated with this label |
| [`campaigns`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label/campaigns) *Edge<AdCampaignGroup>* | Campaigns associated with this label |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

### /act\_{ad\_account\_id}/adlabels

You can make a POST request to *adlabels* edge from the following paths:

* [/act\_{ad\_account\_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adlabels)

When posting to this edge, an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) will be created.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDKcURL

---

```
POST /v25.0/act_<AD_ACCOUNT_ID>/adlabels HTTP/1.1  
Host: graph.facebook.com  
  
name=My+Label
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fadlabels%3Fname%3DMy%2BLabel&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | AdLabel name  required |

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

This endpoint overrides all set of labels associated with this object, whereas <OBJECT\_ID>/adlabels modifies (adds new or reuses specified). If only the label name is supplied, and a label with the name does not exist, then a new label is created and then associated with the ad object.

### /{ad\_label\_id}

You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{ad\_label\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label).

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | AdLabel name  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

### /{ad\_creative\_id}/adlabels

You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{ad\_creative\_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative/adlabels).

#### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels` *list<Object>* | Specification of ad labels to be associated with the creative  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

### /{ad\_id}/adlabels

You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{ad\_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adlabels).

#### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels` *list<Object>* | Specification of adlabels to be associated with the ad  required |
| `execution_options` *list<enum{validate\_only}>* | **Default value:** `Set`  An execution setting `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field.  If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

### /{campaign\_id}/adlabels

You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{campaign\_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adlabels).

#### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels` *list<Object>* | Specification of ad labels to be associated with the campaign  required |
| `execution_options` *list<enum{validate\_only}>* | **Default value:** `Set`  An execution setting `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field.  If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Deleting

### /{ad\_label\_id}

You can delete an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a DELETE request to [/{ad\_label\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label).

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

---
