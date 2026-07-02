---
title: "System User"
source_url: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_ad_accounts
---

# System User

Updated: Aug 4, 2022

## Reading

Represents a system user

#### Example

Select language

HTTPPHP SDKJavaScript SDKAndroid SDKiOS SDK

---

```
GET /v25.0/{system-user-id} HTTP/1.1  
Host: graph.facebook.com
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Parameters

This endpoint doesn't have any parameters.

#### Fields

| Field | Description |
| --- | --- |
| `id` *numeric string* | System user ID.    default |
| `created_by` *[User](https://developers.facebook.com/docs/graph-api/reference/user)* | The creator of this system user. |
| `created_time` *datetime* | The creation time of this system user. |
| `finance_permission` *string* | Financial permission role of the user in business manager, such as Editor, Analyst, and so on. |
| `ip_permission` *string* | Ads right permission role of the user in business manager, such as Reviewer, and so on. |
| `name` *string* | Name used to identify this system user.    default |

#### Edges

| Edge | Description |
| --- | --- |
| [`assigned_business_asset_groups`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_business_asset_groups) *Edge<BusinessAssetGroup>* | Business asset groups that are assign to this business scoped user |
| [`assigned_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_pages) *Edge<Page>* | Pages that are assigned to this business scoped user |
| [`assigned_product_catalogs`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_product_catalogs) *Edge<ProductCatalog>* | Product catalogs that are assigned to this business scoped user |
| [`assigned_whatsapp_business_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_whatsapp_business_accounts) *Edge<WhatsAppBusinessAccount>* | WhatsApp business accounts that are assigned to the business user |

#### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 110 | Invalid user id |

## Creating

### /{business\_id}/system\_users

You can make a POST request to *system\_users* edge from the following paths:

* [/{business\_id}/system\_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_users)

When posting to this edge, a [SystemUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user) will be created.

#### Parameters

| Parameter | Description |
| --- | --- |
| `name` *string* | Name of system user to be added to this business.  required |
| `role` *enum {FINANCE\_EDITOR, FINANCE\_ANALYST, ADS\_RIGHTS\_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER\_CENTER\_ADMIN, PARTNER\_CENTER\_ANALYST, PARTNER\_CENTER\_OPERATIONS, PARTNER\_CENTER\_MARKETING, PARTNER\_CENTER\_EDUCATION, MANAGE, DEFAULT, FINANCE\_EDIT, FINANCE\_VIEW}* | Role of system user to be added to this business. |
| `system_user_id` *int* | ID of system user. |

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
| 104001 | In order to create a system user, an app must be part of this business. Please add an app and then try again. |
| 100 | Invalid parameter |
| 3949 | This Business Manager has reached maximum number of system user limit. |
| 3965 | This Business Manager has reached maximum number of admin system user limit. |

---

## Updating

You can't perform this operation on this endpoint.

## Deleting

You can't perform this operation on this endpoint.
