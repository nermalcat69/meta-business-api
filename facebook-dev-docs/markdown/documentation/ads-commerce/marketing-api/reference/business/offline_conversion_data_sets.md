---
title: "Business Measurement Reports"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/offline_conversion_data_sets
---

# Business Measurement Reports

Updated: May 21, 2019

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/measurement_reports HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fmeasurement_reports&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `filters` *list<Object>* | Filter reports by key-value pairs from metadata  ---   `key` *string* required  `value` *string* required  `comparison` *string*  Show child parameters |
| `report_type` *enum {third\_party\_mta\_report, partner\_lift\_study\_report, mmm\_report\_v2}* | Filter reports based on the type  required |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of MeasurementReport nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
