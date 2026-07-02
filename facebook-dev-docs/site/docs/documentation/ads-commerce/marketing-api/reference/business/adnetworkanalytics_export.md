---
title: "Business Adnetworkanalytics"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics_export
---

# Business Adnetworkanalytics

Updated: Oct 23, 2024

## Reading

Audience Network Insights for this publisher entity

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/adnetworkanalytics HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fadnetworkanalytics&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `aggregation_period` *enum {DAY, TOTAL}* | **Default value:** `"DAY"`  The interval to aggregate by |
| `breakdowns` *array<enum {AGE, APP, COUNTRY, DELIVERY\_METHOD, DISPLAY\_FORMAT, DEAL, DEAL\_AD, DEAL\_PAGE, GENDER, PLACEMENT, PLACEMENT\_NAME, AD\_SPACE, PLATFORM, PROPERTY, CLICKED\_VIEW\_TAG, FAIL\_REASON, SDK\_VERSION, INSTANT\_ARTICLE\_PAGE\_ID, INSTANT\_ARTICLE\_ID, AD\_SERVER\_CAMPAIGN\_ID, IS\_DEAL\_BACKFILL}>* | **Default value:** `[]`  Optional breakdowns for results |
| `filters` *array<JSON object>* | **Default value:** `[]` Additional filters for the query  ---   `field` *enum {AGE, APP, COUNTRY, DELIVERY\_METHOD, DISPLAY\_FORMAT, DEAL, DEAL\_AD, DEAL\_PAGE, GENDER, PLACEMENT, PLACEMENT\_NAME, AD\_SPACE, PLATFORM, PROPERTY, CLICKED\_VIEW\_TAG, FAIL\_REASON, SDK\_VERSION, INSTANT\_ARTICLE\_PAGE\_ID, INSTANT\_ARTICLE\_ID, AD\_SERVER\_CAMPAIGN\_ID, IS\_DEAL\_BACKFILL}* field  required  `operator` *enum {IN, NOT\_IN}* operator  required  `values` *array<string>* values  required  Show child parameters |
| `limit` *int64* | **Default value:** `2000`  Limit the number of rows returned |
| `metrics` *array<enum {FB\_AD\_NETWORK\_BIDDING\_REQUEST, FB\_AD\_NETWORK\_BIDDING\_RESPONSE, FB\_AD\_NETWORK\_BIDDING\_BID\_RATE, FB\_AD\_NETWORK\_BIDDING\_WIN\_RATE, FB\_AD\_NETWORK\_REQUEST, FB\_AD\_NETWORK\_FILLED\_REQUEST, FB\_AD\_NETWORK\_FILL\_RATE, FB\_AD\_NETWORK\_IMP, FB\_AD\_NETWORK\_IMPRESSION\_RATE, FB\_AD\_NETWORK\_CLICK, FB\_AD\_NETWORK\_CTR, FB\_AD\_NETWORK\_BIDDING\_REVENUE, FB\_AD\_NETWORK\_REVENUE, FB\_AD\_NETWORK\_CPM, FB\_AD\_NETWORK\_VIDEO\_GUARANTEE\_REVENUE, FB\_AD\_NETWORK\_VIDEO\_VIEW, FB\_AD\_NETWORK\_VIDEO\_VIEW\_RATE, FB\_AD\_NETWORK\_VIDEO\_MRC, FB\_AD\_NETWORK\_VIDEO\_MRC\_RATE, FB\_AD\_NETWORK\_SHOW\_RATE}>* | List of metrics to query for  required |
| `ordering_column` *enum {TIME, VALUE, METRIC}* | **Default value:** `"TIME"`  Order results by value (result of the aggregation) or by time. |
| `ordering_type` *enum {ASCENDING, DESCENDING}* | **Default value:** `"DESCENDING"`  Ascending or descending |
| `should_include_until` *boolean* | should\_include\_until |
| `since` *datetime/timestamp* | A unix timestamp or strtotime data value that indicates the start of the data range |
| `until` *datetime/timestamp* | A unix timestamp or strtotime data value that indicates the end of the data range |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdNetworkAnalyticsSyncQueryResult nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 3000 | Reading insights of a Page, business, app, domain or event source group not owned by the querying user or application |
| 104 | Incorrect signature |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 613 | Calls to this api have exceeded the rate limit. |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

### /{business\_id}/adnetworkanalytics

You can make a POST request to *adnetworkanalytics* edge from the following paths:

* [/{business\_id}/adnetworkanalytics](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics)

When posting to this edge, an [AnalyticsQueryResult](https://developers.facebook.com/docs/graph-api/reference/analytics-query-result) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `aggregation_period` *enum {DAY, TOTAL}* | **Default value:** `DAY`  The interval to aggregate by |
| `breakdowns` *list<enum {AGE, APP, COUNTRY, DELIVERY\_METHOD, DISPLAY\_FORMAT, DEAL, DEAL\_AD, DEAL\_PAGE, GENDER, PLACEMENT, PLACEMENT\_NAME, AD\_SPACE, PLATFORM, PROPERTY, CLICKED\_VIEW\_TAG, FAIL\_REASON, SDK\_VERSION, INSTANT\_ARTICLE\_PAGE\_ID, INSTANT\_ARTICLE\_ID, AD\_SERVER\_CAMPAIGN\_ID, IS\_DEAL\_BACKFILL}>* | **Default value:** `Vec`  Optional breakdowns for results |
| `filters` *list<Object>* | **Default value:** `Vec` Additional filters for the query  ---   `field` *enum {AGE, APP, COUNTRY, DELIVERY\_METHOD, DISPLAY\_FORMAT, DEAL, DEAL\_AD, DEAL\_PAGE, GENDER, PLACEMENT, PLACEMENT\_NAME, AD\_SPACE, PLATFORM, PROPERTY, CLICKED\_VIEW\_TAG, FAIL\_REASON, SDK\_VERSION, INSTANT\_ARTICLE\_PAGE\_ID, INSTANT\_ARTICLE\_ID, AD\_SERVER\_CAMPAIGN\_ID, IS\_DEAL\_BACKFILL}* Field on which filter is applied. Currently, only valid breakdowns are supported in filters. eg. Country, OS, etc.  required  `operator` *enum {IN, NOT\_IN}* The intended operation between field and values. eg. IN, etc.  required  `values` *list<string>* **Default value:** `Vec` Values of corresponding field which must be filtered in result subject to the operator. The results join the different field valuesdisjunctively. eg. For Filters = {"Country", "IN", ["US", UK]} translates to {"Country", "IN", "US"} OR {"Country", "IN", "UK"}  Show child parameters |
| `limit` *integer* | **Default value:** `20000`  Limit the number of rows returned |
| `metrics` *list<enum {FB\_AD\_NETWORK\_BIDDING\_REQUEST, FB\_AD\_NETWORK\_BIDDING\_RESPONSE, FB\_AD\_NETWORK\_BIDDING\_BID\_RATE, FB\_AD\_NETWORK\_BIDDING\_WIN\_RATE, FB\_AD\_NETWORK\_REQUEST, FB\_AD\_NETWORK\_FILLED\_REQUEST, FB\_AD\_NETWORK\_FILL\_RATE, FB\_AD\_NETWORK\_IMP, FB\_AD\_NETWORK\_IMPRESSION\_RATE, FB\_AD\_NETWORK\_CLICK, FB\_AD\_NETWORK\_CTR, FB\_AD\_NETWORK\_BIDDING\_REVENUE, FB\_AD\_NETWORK\_REVENUE, FB\_AD\_NETWORK\_CPM, FB\_AD\_NETWORK\_VIDEO\_GUARANTEE\_REVENUE, FB\_AD\_NETWORK\_VIDEO\_VIEW, FB\_AD\_NETWORK\_VIDEO\_VIEW\_RATE, FB\_AD\_NETWORK\_VIDEO\_MRC, FB\_AD\_NETWORK\_VIDEO\_MRC\_RATE, FB\_AD\_NETWORK\_SHOW\_RATE}>* | Metrics to return  required |
| `ordering_column` *enum {TIME, VALUE, METRIC}* | **Default value:** `TIME`  Order results by value (result of the aggregation) or by time. |
| `ordering_type` *enum {ASCENDING, DESCENDING}* | **Default value:** `DESCENDING`  Ascending or descending |
| `since` *datetime/timestamp* | A unix timestamp or strtotime data value that indicates the start of the data range |
| `until` *datetime/timestamp* | A unix timestamp or strtotime data value that indicates the end of the data range |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
query_id: string,
async_result_link: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 3000 | Reading insights of a Page, business, app, domain or event source group not owned by the querying user or application |
| 100 | Invalid parameter |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
