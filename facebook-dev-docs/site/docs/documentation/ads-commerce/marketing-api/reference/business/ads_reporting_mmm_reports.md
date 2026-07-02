---
title: "Business Ads Reporting Exports"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_mmm_reports
---

# Business Ads Reporting Exports

Updated: Oct 20, 2020

## Reading

BusinessAdsReportingExports

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/ads_reporting_exports HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_reporting_exports&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `filtering` *Filters used in report builder* | **Default value:** `Vec` filtering  ---   `field` *string* required  `operator` *enum {EQUAL, NOT\_EQUAL, GREATER\_THAN, GREATER\_THAN\_OR\_EQUAL, LESS\_THAN, LESS\_THAN\_OR\_EQUAL, IN\_RANGE, NOT\_IN\_RANGE, CONTAIN, NOT\_CONTAIN, CONTAINS\_ANY, CONTAINS\_ALL, NOT\_CONTAINS\_ANY, STEM\_MATCH, IN, NOT\_IN, STARTS\_WITH, ENDS\_WITH, ANY, ALL, AFTER, BEFORE, ON\_OR\_AFTER, ON\_OR\_BEFORE, NONE, TOP}* required  `value` *string* required  Show child parameters |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdsReportBuilderExportCore nodes.

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
