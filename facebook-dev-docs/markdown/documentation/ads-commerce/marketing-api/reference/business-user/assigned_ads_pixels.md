---
title: "Business User Assigned Ad Accounts"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_ads_pixels
---

# Business User Assigned Ad Accounts

Updated: Sep 14, 2021

## Reading

Ad accounts that are assigned to this business scoped user.

At the end of September 2024, the `POST /{pixel-id}/shared_accounts` API (including previous versions) will not support sharing of pixels with an ad account, if a business account does not have access to both pixel and ad account. Refer to the [pixel sharing API solution](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) to use `POST /{pixel-id}/agencies` or use `POST {ad_account}/agencies` to share into a business account, then use `POST /{pixel-id}/shared_accounts` to link pixel and ad account

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-user-id}/assigned_ad_accounts HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-user-id%7D%2Fassigned_ad_accounts&version=v25.0)

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

A list of [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks` *list<string>* | Tasks that are assignable on this object |
| `tasks` *list<string>* | All unpacked roles/tasks of this particular user on this object    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total number of objects on this edge    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
