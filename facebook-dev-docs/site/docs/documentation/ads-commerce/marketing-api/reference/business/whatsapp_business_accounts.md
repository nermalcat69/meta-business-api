---
title: "Business Videos"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/whatsapp_business_accounts
---

# Business Videos

Updated: Mar 20, 2025

## Reading

BusinessVideos

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/videos HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fvideos&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `creative_folder_id` *numeric string* | ID of the target creative folder |
| `max_aspect_ratio` *float* | max\_aspect\_ratio |
| `maxheight` *int64* | maxheight |
| `maxlength` *int64* | maxlength |
| `maxwidth` *int64* | maxwidth |
| `min_aspect_ratio` *float* | min\_aspect\_ratio |
| `minheight` *int64* | minheight |
| `minlength` *int64* | minlength |
| `minwidth` *int64* | minwidth |
| `title` *string* | title |

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

A list of [Video](https://developers.facebook.com/docs/graph-api/reference/video) nodes.

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

## Creating

You can't perform this operation on this endpoint.

## Updating

## Deleting

You can't perform this operation on this endpoint.
