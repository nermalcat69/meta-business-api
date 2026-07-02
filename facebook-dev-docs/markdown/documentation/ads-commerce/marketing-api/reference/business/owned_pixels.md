---
title: "Business Owned Pages"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pixels
---

# Business Owned Pages

Updated: Sep 6, 2023

## Reading

Get all Facebook pages owned by this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/owned_pages HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_pages&version=v25.0)

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

A list of [Page](https://developers.facebook.com/docs/graph-api/reference/page) nodes.

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `total_count` *int32* | Total number of pages for this business.    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 80002 | There have been too many calls to this Instagram account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |

## Creating

### /{business\_id}/owned\_pages

You can make a POST request to *owned\_pages* edge from the following paths:

* [/{business\_id}/owned\_pages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pages)

When posting to this edge, a [Page](https://developers.facebook.com/docs/graph-api/reference/page) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `entry_point` *string* | entry point of claiming BusinessClaimAssetEntryPoint |
| `page_id` *Page ID* | Page ID.  required |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_status: string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 3944 | Your Business Manager already has access to this object. |
| 3977 | To claim a Page in Business Manager, you must already be an Admin of the Page. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 100 | Invalid parameter |
| 42001 | This Page can't be removed because it's already linked to an Instagram business profile. To remove this Page from Business Manager, go to Instagram and convert to a personal account or change the Page linked to your business profile. |
| 200 | Permissions error |
| 413 | Invalid password |
| 3982 | You do not have sufficient permissions to import this asset into the given Business Manager. |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
