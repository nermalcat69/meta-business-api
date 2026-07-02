---
title: "Business Role Request"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request/assigned_client_assets
---

# Business Role Request

Updated: Apr 2, 2025

## Reading

Represents a business user request. See the requests from an admin of the Business for people to join as member of this business.

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-role-request-id} HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-role-request-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

| Field | Description |
| --- | --- |
| `id` *numeric string* | Business role invitation request ID.    default |
| `created_by` *BusinessUser|SystemUser* | User who sent the invitation to join this business. |
| `created_time` *datetime* | Admin sent this request to someone to join a business at this time. |
| `email` *string* | Email of user invited to join the business.    default |
| `expiration_time` *datetime* | Invitation to join business expires at this time. |
| `finance_role` *enum* | When you invite someone to join business, pre-assign the Finance role. |
| `invited_user_type` *list<enum>* | Invited user type of this role request |
| `owner` *[Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business)* | Invite someone to join this business. |
| `role` *enum* | Business role for user invited to the business.    default |
| `status` *enum* | Status of the invitation, such as accepted, declined, expired and so on.    default |
| `updated_by` *BusinessUser|SystemUser* | User who updated the invitation. |
| `updated_time` *datetime* | Time invitation updated. |

#### Edges

| Edge | Description |
| --- | --- |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

## Creating

You can't perform this operation on this endpoint.

## Updating

### /{business\_role\_request\_id}

You can update a [BusinessRoleRequest](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request) by making a POST request to [/{business\_role\_request\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request).

#### Parameters

| Parameter | Description |
| --- | --- |
| `role` *enum {FINANCE\_EDITOR, FINANCE\_ANALYST, ADS\_RIGHTS\_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER\_CENTER\_ADMIN, PARTNER\_CENTER\_ANALYST, PARTNER\_CENTER\_OPERATIONS, PARTNER\_CENTER\_MARKETING, PARTNER\_CENTER\_EDUCATION, MANAGE, DEFAULT, FINANCE\_EDIT, FINANCE\_VIEW}* | Update invitation to include this role, such as `ADMIN`. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
id: numeric string,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

## Deleting

### /{business\_role\_request\_id}

You can delete a [BusinessRoleRequest](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request) by making a DELETE request to [/{business\_role\_request\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request).

#### Parameters

This endpoint doesn't have any parameters.

#### Return Type

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

---
