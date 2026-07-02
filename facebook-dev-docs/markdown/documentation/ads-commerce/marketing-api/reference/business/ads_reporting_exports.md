---
title: "Business Ads Custom Pivots Preview"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_exports
---

# Business Ads Custom Pivots Preview

Updated: Apr 23, 2020

## Reading

Provides ad object data of each custom pivot grouping

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/ads_custom_pivots_preview HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_custom_pivots_preview&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_ids` *array<int64>* | List of ad accounts |
| `date_preset` *enum {today, yesterday, this\_month, last\_month, this\_quarter, maximum, data\_maximum, last\_3d, last\_7d, last\_14d, last\_28d, last\_30d, last\_90d, last\_week\_mon\_sun, last\_week\_sun\_sat, last\_quarter, last\_year, this\_week\_mon\_today, this\_week\_sun\_today, this\_year}* | The date preset |
| `dimensions` *array<string>* | dimensions |
| `group_name` *string* | group\_name |
| `sorting` *array<JSON object>* | sorting  ---   `field` *string* field  required  `direction` *enum {asc, desc}* **Default value:** `"desc"` direction  Show child parameters |
| `time_range` *{‘since’:YYYY-MM-DD,’until’:YYYY-MM-DD}* | The time range  ---   `since` *datetime* A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.  `until` *datetime* A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.  Show child parameters |

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

A list of AdsCustomPivotsPreview nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `counts` *list<AdsCustomPivotsPreviewCount>* | counts    default |

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
