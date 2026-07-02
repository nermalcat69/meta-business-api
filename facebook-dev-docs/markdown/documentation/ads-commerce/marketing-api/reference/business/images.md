---
title: "Business Ig Bc Ad Permissions"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/images
---

# Business Ig Bc Ad Permissions

Updated: Jun 30, 2022

## Reading

BusinessIGBCAdPermissions

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/ig_bc_ad_permissions HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fig_bc_ad_permissions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

| Parameter | Description |
| --- | --- |
| `brand_instagram_accounts` *list<int64>* | Filter the branded content permissions results by the given brand instagram accounts |
| `creator_username` *string* | Filter the branded content permissions results by ones that match the given creator username |
| `permission_status` *list<int64>* | Used to filter the branded content permissions results by the permission status |

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

A list of IGBCAdsPermission nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `brand_ig_fbid` *numeric string* | brand\_ig\_fbid    default |
| `brand_ig_user` *[IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user)* | brand\_ig\_user |
| `brand_linked_fb_page` *[Page](https://developers.facebook.com/docs/graph-api/reference/page)* | brand\_linked\_fb\_page |
| `creator_ig_user` *[IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user)* | creator\_ig\_user    default |
| `creator_linked_fb_page` *[Page](https://developers.facebook.com/docs/graph-api/reference/page)* | creator\_linked\_fb\_page |
| `permission_created_time` *integer* | permission\_created\_time |
| `permission_status` *integer* | permission\_status    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=\_\_type\_\_).

| Field | Description |
| --- | --- |
| `pending_permission_count` *integer* | The count of pending permissions associated with the business    default |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

## Creating

You can't perform this operation on this endpoint.

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
