---
title: "Business Sso Migrated Business Users"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/sso_unmigrated_business_users
---

# Business Sso Migrated Business Users

Updated: Aug 20, 2020

## Reading

BusinessSSOMigratedBusinessUsers

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/sso_migrated_business_users HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsso_migrated_business_users&version=v25.0)

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

A list of [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `role` *string* | Role name of the user in the business manager. Note that this field only contains base roles including Admin and Employee    default |

##### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total\_count).

| Field | Description |
| --- | --- |
| `total_count` *unsigned int32* | number of users |

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
