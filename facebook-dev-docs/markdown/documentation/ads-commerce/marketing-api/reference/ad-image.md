---
title: "Ad Campaign Group Video Groups"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image
---

# Ad Campaign Group Video Groups

Updated: May 18, 2019

## Reading

This endpoint fetches video groups used in a campaign group.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{campaign-id}/video_groups HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fvideo_groups&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `date_range` *JSON object* | This field contains the date range for which we want to display the video assets.  ---   `start` *datetime/timestamp* **Default value:** `0` start  `end` *datetime/timestamp* **Default value:** `<request_time>` end  Show child parameters |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of VideoGroup nodes.

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
