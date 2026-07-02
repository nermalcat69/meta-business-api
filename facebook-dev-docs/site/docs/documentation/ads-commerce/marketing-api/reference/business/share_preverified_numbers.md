---
title: "Business Sent Inprogress Onbehalf Requests"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/share_preverified_numbers
---

# Business Sent Inprogress Onbehalf Requests

Updated: May 21, 2019

## Reading

IN\_PROGRESS on behalf requests sent by the business

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/sent_inprogress_onbehalf_requests HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsent_inprogress_onbehalf_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of BusinessOwnedObjectOnBehalfOfRequest nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
