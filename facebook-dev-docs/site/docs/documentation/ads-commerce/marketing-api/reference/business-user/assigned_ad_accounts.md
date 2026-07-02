---
title: "Business User"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_ad_accounts
---

# Business User

Updated: Apr 14, 2025

In Graph API v9.0, [access to this endpoint was restricted](https://developers.facebook.com/docs/graph-api/changelog/version9.0#business). In Graph API v10.0, [access has been restored to all apps](https://developers.facebook.com/docs/graph-api/changelog/version10.0#business), but apps can now only target businesses (or child businesses of those businesses) that have claimed them.

## Reading

Represents a business user. A business user can be an employee of the business or an admin of the business. An Employee can see all of information in business settings and be assigned roles by business admins. An Admin can control all aspects of the business including modifying or deleting the account and adding or removing people from the employee list

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{business-user-id} HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-user-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

| Field | Description |
| --- | --- |
| `id` *numeric string* | The business user's ID.    default |
| `business` *[Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business)* | Business user is associated with this business.    default |
| `email` *string* | User's email as provided in Business Manager. |
| `finance_permission` *string* | Financial permission role of the user in Business Manager, such as `EDITOR`, `ANALYST`, and so on. |
| `first_name` *string* | User's first name as provided in Business Manager. |
| `ip_permission` *string* | This user's ads right permission role in Business Manager, such as Reviewer and so on. |
| `last_name` *string* | User's last name as provided in Business Manager. |
| `name` *string* | Name of user as provided in Business Manager.    default |
| `pending_email` *string* | Email for the business user that is still pending verification. |
| `role` *string* | Role of the user in Business Manager, such as Admin, Employee, and so on. |
| `title` *string* | The title of the user in this business. |
| `two_fac_status` *string* | Two-factor authentication status of the business-scoped user. |

#### Edges

| Edge | Description |
| --- | --- |
| [`assigned_business_asset_groups`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_business_asset_groups) *Edge<BusinessAssetGroup>* | Business asset groups that are assign to this business scoped user |
| [`assigned_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_pages) *Edge<Page>* | Pages that are assigned to this business scoped user |
| [`assigned_product_catalogs`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_product_catalogs) *Edge<ProductCatalog>* | Product catalogs that are assigned to this business scoped user |
| [`assigned_whatsapp_business_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user/assigned_whatsapp_business_accounts) *Edge<WhatsAppBusinessAccount>* | WhatsApp business accounts that are assigned to the business user |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 104 | Incorrect signature |

## Creating

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

### /{business\_user\_id}

You can update a [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) by making a POST request to [/{business\_user\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user).

#### Parameters

| Parameter | Description |
| --- | --- |
| `email` *string* | The email of the user at this business. |
| `first_name` *string* | First name for this business user. |
| `last_name` *string* | Last name for this business user. |
| `role` *enum {FINANCE\_EDITOR, FINANCE\_ANALYST, ADS\_RIGHTS\_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER\_CENTER\_ADMIN, PARTNER\_CENTER\_ANALYST, PARTNER\_CENTER\_OPERATIONS, PARTNER\_CENTER\_MARKETING, PARTNER\_CENTER\_EDUCATION, MANAGE, DEFAULT, FINANCE\_EDIT, FINANCE\_VIEW}* | The role of the user at this business, such as `ADMIN` and so on. |
| `skip_verification_email` *boolean* | Whether to skip sending the verification email. The business persona email still requires verification - but just won't receive an email. |

#### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 3914 | It looks like you're trying to remove the last admin from this Business Manager. At least one admin is required in Business Manager. |

---

## Deleting

### /{business\_user\_id}

You can delete a [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) by making a DELETE request to [/{business\_user\_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user).

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
| 3914 | It looks like you're trying to remove the last admin from this Business Manager. At least one admin is required in Business Manager. |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |

---
