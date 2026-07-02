---
title: "Ad Campaign Asyncadrequests"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/asyncadrequests
---

# Ad Campaign Asyncadrequests

Updated: May 21, 2019

## Reading

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{ad-set-id}/asyncadrequests HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fasyncadrequests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `statuses` *list<enum {INITIAL, IN\_PROGRESS, SUCCESS, ERROR, CANCELED, PENDING\_DEPENDENCY, CANCELED\_DEPENDENCY, ERROR\_DEPENDENCY, ERROR\_CONFLICTS, USER\_CANCELED, USER\_CANCELED\_DEPENDENCY, PROCESS\_BY\_EVENT\_PROCESSOR, PROCESS\_BY\_AD\_ASYNC\_ENGINE}>* | SELF\_EXPLANATORY |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of AdAsyncRequest nodes.

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
