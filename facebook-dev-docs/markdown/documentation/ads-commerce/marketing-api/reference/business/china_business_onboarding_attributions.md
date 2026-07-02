---
title: "Business Business Users"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/china_business_onboarding_attributions
---

# Business Business Users

Updated: Jul 31, 2025

## Reading

List all business users associated with this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-id}/business_users HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fbusiness_users&version=v25.0)

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
| `total_count` *unsigned int32* | Total number of business users associated with this business. |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

## Creating

Apps can only target businesses (or child businesses of those businesses) that have claimed them.

### /{business\_id}/business\_users

You can make a POST request to *business\_users* edge from the following paths:

* [/{business\_id}/business\_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_users)

When posting to this edge, a [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `email` *string* | Email of user to be added to this business.  required |
| `invited_user_type` *array<enum {FB, MWA}>* | Not passing a value will default to 'FB'.  Use 'MWA' for inviting a user with their Meta account managed by their organization. |
| `role` *enum {FINANCE\_EDITOR, FINANCE\_ANALYST, ADS\_RIGHTS\_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER\_CENTER\_ADMIN, PARTNER\_CENTER\_ANALYST, PARTNER\_CENTER\_OPERATIONS, PARTNER\_CENTER\_MARKETING, PARTNER\_CENTER\_EDUCATION, MANAGE, DEFAULT, FINANCE\_EDIT, FINANCE\_VIEW}* | Role of user to add to this business. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 613 | Calls to this api have exceeded the rate limit. |
| 457 | The session has an invalid origin |
| 190 | Invalid OAuth 2.0 Access Token |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 200 | Permissions error |
| 370 | Invalid call to update this page |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
