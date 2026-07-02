---
title: "Custom Audience Shared Account Info"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users
---

# Custom Audience Shared Account Info

Updated: Jun 28, 2019

Information specific to each ad account that has access to a custom audience shared with the account. Includes sharing status for the audience, such as `SHARED`, `IN_PROGRESS` and `NOT_SHARED`.

Only audiences shared outside of your business are covered by sharing agreements. Therefore this field is `null` in all other cases to avoid confusion.

For information about sharing a custom audiences between businesse, see [Business Manager API, Sharing Custom Audiences between Business Managers](https://developers.facebook.com/docs/marketing-api/businessmanager/assets#share).

## Reading

CustomAudiencesharedAccountInfo

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{custom-audience-id}/shared_account_info HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fshared_account_info&version=v25.0)

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

A list of CustomAudiencesharedAccountInfo nodes.

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
