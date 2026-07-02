---
title: "Business Parent Advertiser Infos"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partner_account_linking
---

# Business Parent Advertiser Infos

Updated: Sep 4, 2024

## Reading

BusinessParentAdvertiserInfos

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/parent_advertiser_infos HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fparent_advertiser_infos&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_id` *numeric string or integer* | ad\_account\_id |
| `parent_advertiser_id` *string* | parent\_advertiser\_id |
| `user_id` *numeric string or integer* | user\_id |

#### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

##### data

A list of ALMEndAdvertiserInfo nodes.

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
