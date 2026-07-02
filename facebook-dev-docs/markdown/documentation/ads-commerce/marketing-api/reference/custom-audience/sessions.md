---
title: "Custom Audience Health"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/sessions
---

# Custom Audience Health

Updated: May 2, 2025

## Reading

This endpoint will expose the aggregated user value data that is shared via Audience API.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{custom-audience-id}/health HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fhealth&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `calculated_date` *string* | The UTC calculated date / click date associated with this information, this will be a string in the format “YYYY-MM-DD” i.e. “2025-01-01” |
| `processed_date` *string* | The UTC date on which the data was received, this will be a string in the format “YYYY-MM-DD” i.e. “2025-02-01” |
| `value_aggregation_duration` *int64* | The duration over which this value type was calculated |
| `value_country` *string* | The country associated to the value field |
| `value_currency` *string* | The currency associated to the value field |
| `value_version` *int64* | The value version of this calculation (e.g. V1 data, V2 data represented as 1 or 2 respectively) |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of CustomAudienceHealth nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

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
