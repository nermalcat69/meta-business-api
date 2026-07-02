---
title: "Ad Campaign Group Budget Schedules"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/copies
---

# Ad Campaign Group Budget Schedules

Updated: Nov 17, 2023

Budget scheduling allows you to schedule budget increases for your campaign or ad set budget based on days or times when you anticipate higher sales opportunities, peak traffic periods or other promotional time periods. You can find additional information in the [Meta Business Help Center⁠](https://www.facebook.com/business/help/633318028866693) and in the [About budget scheduling](https://developers.facebook.com/docs/graph-api/reference/high-demand-period) section

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{campaign-id}/budget_schedules HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fbudget_schedules&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

### Search Parameter Usage Example :

If we have three high demand periods set up with following specs

```
high_demand_periods:[{
      id:1,
      time_start:1,
      time_end:3,
      ...
},{
      id:2,
      time_start:3,
      time_end:5,
      ...
},{
      id:3,
      time_start:6,
      time_end:8,
      ...
}]
```

A request can be made with `time_start` prameter as shown below

```
curl -X GET
 -d 'access_token={ACCESS_TOKEN}'
 https://graph.facebook.com/{API_VERSION}/{CAMPAIGN_ID}/budget_schedules?time_start=5
```

This request will fetch all high demand periods with `time_end` value greater than `time_start` parameter, returning

```
data:[{
      id:3,
      time_start:6,
      time_end:8,
      ...
}]
```

A similar request can be made with `time_stop` parameter as shown below

```
curl -X GET
 -d 'access_token={ACCESS_TOKEN}'
 https://graph.facebook.com/{API_VERSION}/{CAMPAIGN_ID}/budget_schedules?time_stop=3
```

This request will fetch all high demand periods with `time_start` value less than `time_stop` parameter, returning

```
data:[{
      id:1,
      time_start:1,
      time_end:3,
      ...
}]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `time_start` *datetime/timestamp* | Search period start time. Filters out any HDPs with stop time <= time\_start from the response. |
| `time_stop` *datetime/timestamp* | Search period stop time. Filters out any HDPs with start time >= time\_stop from the response. |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [HighDemandPeriod](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/high-demand-period) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |

## Creating

### /{campaign\_id}/budget\_schedules

You can make a POST request to *budget\_schedules* edge from the following paths:

* [/{campaign\_id}/budget\_schedules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/budget_schedules)

When posting to this edge, no Graph object will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `budget_value` *int64* | Amount of budget increase during the high demand period. Can be expressed in either an absolute amount, or a multiplier value. The type is specified through the budget value type.  required |
| `budget_value_type` *enum{ABSOLUTE, MULTIPLIER}* | Type of budget value. This sets if the specified budget value is an increase by an absolute amount or by a multiplier value.  required |
| `time_end` *int64* | Time when the high demand period should end.  required |
| `time_start` *int64* | Time when the high demand period should start.  required |

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

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
