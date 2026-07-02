---
title: "Detailed Targeting"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-description
---

# Detailed Targeting

Updated: May 21, 2026

With [Targeting Search](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-search), you can find targeting with one targeting type in a single API call. With the Detailed Targeting API, you can search for multiple targeting types in a single request. You can also get suggestions based on your query.

The API has four endpoints: [Search](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-description#search), [Suggestions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-description#suggestions), [Browse](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-description#browse), and [Validation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-description#validation).

The response for these endpoints contains the following:

| Name | Description |
| --- | --- |
| `id`  type: string | Target audience ID |
| `name`  type: string | Name of the target audience |
| `audience_size_lower_bound`  type: integer | Estimated lower bound target audience size |
| `audience_size_upper_bound`  type: integer | Estimated upper bound target audience size |
| `path`  type: array of strings | Includes the category and any parent categories the targeting falls into |
| `description`  type: string | A short description of the target audience |

If you do not provide `limit_type`, the API filters results with fewer than 2,000 people into four categories: `work_employers`, `work_positions`, `education_majors`, `education_schools`. Otherwise you get fewer meaningful results. When you use `limit_type`, results are filtered for one of those four categories and not everything is returned.

## Search

Retrieve target audiences for your ads that match your search query. You can provide the following parameters at this endpoint:

```
curl -G \
-d "q=harvard" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/targetingsearch
```

| Name | Description |
| --- | --- |
| `q`  type: string | **Required.**  Query string. |
| `limit`  type: integer | **Optional.**  Number of results. |
| `limit_type`  type: string | **Optional.**  Limit the type of audience to retrieve. Defaults to all types.  Valid values:   * `interests` * `education_schools` * `education_majors` * `work_positions` * `work_employers` * `relationship_statuses` * `college_years` * `education_statuses` * `family_statuses` * `industries` * `life_events` * `behaviors` * `income` |
| `locale`  type: string | **Optional.**  The locale to display audience names and descriptions, if available. Defaults to the ad account’s locale. |

## Suggestions

Returns additional audiences you can target based on the audiences you provide.

```
curl -G \
-d "targeting_list=[{'type':'interests','id':6003263791114}]" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/targetingsuggestions
```

Provide these parameters:

| Name | Description |
| --- | --- |
| `targeting_list`  type: array of `{'type':'{TYPE}', 'id':{ID}}` | **Required.**  Array of `{'type':'{TYPE}', 'id':{ID}}` pairs as input audience for suggestions. |
| `limit`  type: integer | **Optional.**  Number of results. Default is 30. Maximum is 45. |
| `limit_type`  type: string | **Optional.**  Limit the type of audience to retrieve. Defaults to all types.  Valid values:   * `interests` * `education_schools` * `education_majors` * `work_positions` * `work_employers` * `relationship_statuses` * `college_years` * `education_statuses` * `family_statuses` * `industries` * `life_events` * `behaviors` * `income` |
| `locale`  type: string | **Optional.**  The locale to display audience names and descriptions. Defaults to the ad account’s locale. |

## Browse

Get targeting in a structured taxonomy for Facebook categories, third-party data providers, and some interests. Results from this endpoint appear in the Browse function of the Detailed Targeting UI component in Ads Manager.

```
curl -G \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/targetingbrowse
```

Provide the following optional parameters:

| Name | Description |
| --- | --- |
| `limit_type`  type: string | **Optional.**  Limit the type of audience to retrieve. Defaults to all types. |
| `locale`  type: string | **Optional.**  The locale to display audience names and descriptions. Defaults to the ad account’s locale. |

## Validation

Verify whether an audience is valid for targeting. Validation is helpful if you have already created an ad set and want to verify its targeting spec is still valid. If the targeting is not valid, remove it from the targeting spec.

```
curl -G \
-d "targeting_list=[{'type':'interests','id':6003283735711}, {'type':'relationship_statuses','id':100}]" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/targetingvalidation
```

In addition to the standard Detailed Targeting response fields, this endpoint also returns:

| Name | Description |
| --- | --- |
| `valid`  type: boolean | Whether the audience is valid. |

Here is the list of input parameters:

| Name | Description |
| --- | --- |
| `targeting_list`  type: array of `{'type':'{TYPE}', 'id':{ID}}` | Array of `{'type':'{TYPE}', 'id':{ID}}` pairs for validation. Preferred. |
| `id_list`  type: array of strings | Array of IDs for validation. Succeeds only if an ID is uniquely identifiable in the Meta audience database. |
| `name_list`  type: array of strings | Array of strings for validation. Interests only. Case-insensitive. |
| `locale`  type: string | Locale to display audience names and descriptions. Defaults to ad account’s locale. |

Provide at least one of the following: `targeting_list`, `id_list`, or `name_list`.
