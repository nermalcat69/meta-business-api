---
title: "Business Offline Conversion Data Sets"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/openbridge_configurations
---

# Business Offline Conversion Data Sets

Updated: Nov 22, 2019

## Reading

BusinessOfflineConversionDataSets

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/offline_conversion_data_sets HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Foffline_conversion_data_sets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

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

A list of [OfflineConversionDataSet](https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `access_permission` *string* | Access permission regarding this data set    default |
| `access_permission_details` *string* | Access permission details regarding this data set |
| `access_type` *enum* | "OWNER" if this asset belongs to the referenced business and "AGENCY" if it belongs to the client business, that gave a permission for agency to manage this asset"    default |
| `is_assigned_to_ad_accounts_in_business` *bool* | True if data set is assigned to any ad accounts in given busienss    default |
| `permitted_roles` *list<string>* | Roles given for this asset to the referenced business    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | total\_count    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
