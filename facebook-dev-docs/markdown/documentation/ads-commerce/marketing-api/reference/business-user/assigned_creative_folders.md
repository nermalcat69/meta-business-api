---
title: "Business User Assigned Business Asset Groups"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_creative_folders
---

# Business User Assigned Business Asset Groups

Updated: Aug 20, 2019

## Reading

Get list of business asset groups for user

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-user-id}/assigned_business_asset_groups HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-user-id%7D%2Fassigned_business_asset_groups&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `contained_asset_id` *numeric string or integer* | contained\_asset\_id |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

##### data

A list of BusinessAssetGroup nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `adaccount_tasks` *list<string>* | Permission tasks for ad accounts contained in business asset group.    default |
| `offline_conversion_data_set_tasks` *list<string>* | Permission tasks for offline conversion datasets contained in business asset group.    default |
| `page_tasks` *list<string>* | Permission tasks fo pages contained in business asset group.    default |
| `pixel_tasks` *list<string>* | Permission tasks for ads pixels contained in business asset group.    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total count of business asset groups    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
