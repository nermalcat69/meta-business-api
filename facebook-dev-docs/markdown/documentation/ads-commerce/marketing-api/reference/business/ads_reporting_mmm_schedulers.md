---
title: "Business Ads Reporting Mmm Reports"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_mmm_schedulers
---

# Business Ads Reporting Mmm Reports

Updated: Jun 1, 2023

## Reading

Edge between business and MMM reports.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/ads_reporting_mmm_reports HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_reporting_mmm_reports&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `filtering` *array<JSON object>* | filtering  ---   `field` *string* field  required  `operator` *enum {AFTER, ALL, ANY, BEFORE, CONTAIN, EQUAL, GREATER\_THAN, GREATER\_THAN\_OR\_EQUAL, IN, IN\_RANGE, LESS\_THAN, LESS\_THAN\_OR\_EQUAL, NONE, NOT\_CONTAIN, NOT\_EQUAL, NOT\_IN, NOT\_IN\_RANGE, ON\_OR\_AFTER, ON\_OR\_BEFORE, STARTS\_WITH, MATCH, STEM\_MATCH, TOP, CONTAINS\_ANY, CONTAINS\_ALL, NOT\_CONTAINS\_ANY}* operator  required  `value` *string* value  required  Show child parameters |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsReportBuilderMMMReport nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 2616 | The reporting data you are trying to fetch has too many rows. Please pull data for shorter time periods or use filters to restrict the number of ad IDs |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
