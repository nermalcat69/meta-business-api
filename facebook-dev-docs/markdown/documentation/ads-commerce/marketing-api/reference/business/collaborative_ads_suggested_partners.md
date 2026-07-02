---
title: "Business Collaborative Ads Collaboration Requests"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/collaborative_ads_suggested_partners
---

# Business Collaborative Ads Collaboration Requests

Updated: Apr 28, 2026

## Reading

All collaborative ads collaboration requests initiated by the business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/collaborative_ads_collaboration_requests HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcollaborative_ads_collaboration_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `request_role` *enum {SENDER, RECEIVER}* | **Default value:** `"SENDER"`  Requesting as sender or receiver business |
| `since` *datetime/timestamp* | Start time for range of requests |
| `status` *string* | status |
| `until` *datetime/timestamp* | End time for range of requests |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of [CPASCollaborationRequest](https://developers.facebook.com/docs/marketing-api/reference/cpas-collaboration-request) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
