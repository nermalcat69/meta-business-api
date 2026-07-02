---
title: "Business Images"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/initiated_audience_sharing_requests
---

# Business Images

Updated: Apr 14, 2022

## Reading

Get a list of images viewer has access to for this business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/images HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fimages&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `creative_folder_id` *numeric string* | ID of the target creative folder |

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

A list of [BusinessImage](https://developers.facebook.com/docs/marketing-api/reference/business-image) nodes.

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
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 104 | Incorrect signature |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
