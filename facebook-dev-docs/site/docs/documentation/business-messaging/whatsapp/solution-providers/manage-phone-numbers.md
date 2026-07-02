---
title: "Manage WhatsApp Business accounts"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-phone-numbers
---

# Manage WhatsApp Business accounts

Updated: Jun 28, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document describes how to use the [Client WhatsApp Business Accounts API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/client-whatsapp-business-accounts-api), [Owned WhatsApp Business Accounts API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts), and [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) to manage your clients’ WhatsApp Business accounts.

The API calls on this page use the `whatsapp_business_management` permission to access WABAs not owned by your business. If your app lacks **Advanced access** for this permission, these calls return error code `200`. See [App Review](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/app-review) to request **Advanced access**.

## Get shared WABA ID with access token

After a business finishes the Embedded Signup flow, you can get the shared WABA ID using the returned `accessToken` with the [Debug Token](https://developers.facebook.com/docs/graph-api/reference/debug_token) endpoint. Include your [System User access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#generating-system-user-access-tokens) in a request header prepended with `Authorization: Bearer` for this API call.

### Request syntax

```
GET https://graph.facebook.com/v25.0/debug_token
  ?input_token=<TOKEN_RETURNED_FROM_SIGNUP_FLOW>
```

### Sample request

```
curl \
'https://graph.facebook.com/v25.0/debug_token?input_token=EAAFl...' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample response

```
```
{  
  "data" : {  
    "app_id" : "670843887433847",  
    "application" : "JaspersMarket",  
    "data_access_expires_at" : 1672092840,  
    "expires_at" : 1665090000,  
    "granular_scopes" : [  
      {  
        "scope" : "whatsapp_business_management",  
        "target_ids" : [  
          "102289599326934", // ID of newest WABA to grant app whatsapp_business_management  
          "101569239400667"  
        ]  
      },  
      {  
        "scope" : "whatsapp_business_messaging",  
        "target_ids" : [  
          "102289599326934",  
          "101569239400667"  
        ]  
      }  
    ],  
    "is_valid" : true,  
    "scopes" : [  
       "whatsapp_business_management",  
       "whatsapp_business_messaging",  
       "public_profile"  
    ],  
    "type" : "USER",  
    "user_id" : "10222270944537964"  
  }  
}
```
```

Each object in the `granular_scopes` array identifies the IDs of every WABA that has granted your app a given permission (`scope`). IDs for the most recently onboarded WABAs appear first, so capture the first ID in the `target_ids` array for the `whatsapp_business_management` scope.

## Get list of shared WABAs

Use the [Client WhatsApp Business Accounts API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/client-whatsapp-business-accounts-api) to [retrieve a list of all the WABAs](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/client-whatsapp-business-accounts-api#get-version-business-id-client-whatsapp-business-accounts) assigned to or shared with your business portfolio after the business completes the Embedded Signup flow.

You can call this API periodically to track WABAs shared with you as a fallback to the [Debug Token endpoint](https://developers.facebook.com/docs/graph-api/reference/debug_token) approach described in [Get shared WABA ID with access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-phone-numbers#get-shared-waba-id-with-access-token).

For available WABA fields, see the [WhatsApp Business account reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#fields).

### Request syntax

```
GET https://graph.facebook.com/v25.0/<BUSINESS_PORTFOLIO_ID>/client_whatsapp_business_accounts
```

### Sample request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/client_whatsapp_business_accounts/' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample response

```
```
{  
  "data": [  
    {  
      "id": "1906385232743451",  
      "name": "My WhatsApp Business Account",  
      "currency": "USD",  
      "timezone_id": "1",  
      "message_template_namespace": "abcdefghijk_12lmnop"  
    },  
    {  
      "id": "1972385232742141",  
      "name": "My Regional Account",  
      "currency": "INR",  
      "timezone_id": "5",  
      "message_template_namespace": "12abcdefghijk_34lmnop"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "abcdefghij",  
      "after": "klmnopqr"  
    }  
  }  
}
```
```

## Understanding shared WABAs

### Permissions

As a partner, you have the following permissions in a shared WABA:

* Add phone numbers
* Create templates
* Send messages to customers
* Assign users to the account
* Access metrics
* View payment information

Your clients onboarding via Embedded Signup can see and do the following:

| Category | What can businesses see? |
| --- | --- |
| Insights | Messaging, cost, and quality state changes. |
| Quality | Quality statuses and ratings. |

| Category | What can businesses do? |
| --- | --- |
| Assets | Add and manage phone numbers and templates. |
| WABA management | Unshare WABA with a Solution Partner, delete WABA, and change settings. |
| Integration with other Meta products | Integrate with Ads that Click to WhatsApp. |

You cannot disable what your clients can see or do, or customize their views.

Your clients can visit [Manage your WhatsApp Solution Partner’s permissions⁠](https://www.facebook.com/business/help/861444384718867) for more information.

### Notifications

You receive relevant notifications via webhooks and through Meta Business Suite when:

* A client shares a WABA.
* Messaging limits or quality rating changes for a client’s WABA.
* A phone number display name or a template is approved.

If a client leaves the Embedded Signup flow before completing it, the client may have shared the WABA but the phone number’s certificate may not be ready. Without a ready certificate, you cannot register the number for API use. Reach out to the client to help them complete the Embedded Signup flow.

## Get list of owned WhatsApp Business accounts

Use the [Owned WhatsApp Business Accounts API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts) to [get a list of the WABAs](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts#get-version-business-id-owned-whatsapp-business-accounts) that your business owns. For the request, use your system user’s access token.

### Request syntax

```
GET https://graph.facebook.com/v25.0/<BUSINESS_PORTFOLIO_ID>/owned_whatsapp_business_accounts
```

### Sample request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/owned_whatsapp_business_accounts/' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample response

```
```
{  
  "data": [  
    {  
      "id": "1906385232743451",  
      "name": "My WhatsApp Business Account",  
      "currency": "USD",  
      "timezone_id": "1",  
      "message_template_namespace": "abcdefghijk_12lmnop"  
    },  
    {  
      "id": "1972385232742141",  
      "name": "My Regional Account",  
      "currency": "INR",  
      "timezone_id": "5",  
      "message_template_namespace": "12abcdefghijk_34lmnop"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "abcdefghij",  
      "after": "klmnopqr"  
    }  
  }  
}
```
```

## Filter WABAs by creation time

You can filter client and owned WhatsApp Business accounts based on their creation time using the [Owned WhatsApp Business Accounts API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts). Use the parameters listed below.

### Request syntax

```
GET https://graph.facebook.com/v25.0/<BUSINESS_PORTFOLIO_ID>/owned_whatsapp_business_accounts
  ?filtering=<FILTERING>
```

The `filtering` value can be an array containing a single object comprised of the following properties:

### Filtering object properties

| Name | Description |
| --- | --- |
| `field` | Contains the field being used for filtering. Set to `creation_time`. |
| `operator` | Contains how you want to filter the accounts. Supported values:   * `LESS_THAN` * `GREATER_THAN` |
| `value` | A UNIX timestamp to filter on. |

### Sample object

```
```
[  
  {  
    "field" : "creation_time",  
    "operator" : "GREATER_THAN",  
    "value" : "1604962813"  
  }  
]
```
```

### Sample request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/owned_whatsapp_business_accounts?filtering=%5B%7B%22field%22%3A%22creation_time%22%2C%22operator%22%3A%22GREATER_THAN%22%2C%22value%22%3A%221604962813%22%7D%5D' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample response

```
{
  "data": [
    {
      "id": "12312321312",
      "name": "test",
      "currency": "USD",
      "timezone_id": "1",
      "message_template_namespace": "46fe_814"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUm9",
      "after": "QVFIUklX"
    },
    "next": "https://graph.facebook.com/v25.0/"
  }
}
```

## Sort WABAs by creation time

You can sort shared and owned WhatsApp Business accounts based on their creation time using the [Owned WhatsApp Business Accounts API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts).

### Request syntax

```
GET https://graph.facebook.com/v25.0/<BUSINESS_PORTFOLIO_ID>/owned_whatsapp_business_accounts
  ?sort=<SORT>
```

The `sort` value can be `creation_time_ascending` or `creation_time_descending`.

### Sample request

```
curl \
'https://graph.facebook.com/v25.0/805021500648488/owned_whatsapp_business_accounts?sort=creation_time_ascending' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample response

```
```
{  
  "data": [  
    {  
      "id": "1906385232743451",  
      "name": "My WhatsApp Business Account",  
      "currency": "USD",  
      "timezone_id": "1",  
      "message_template_namespace": "abcdefghijk_12lmnop"  
    },  
    {  
      "id": "1972385232742141",  
      "name": "My Regional Account",  
      "currency": "INR",  
      "timezone_id": "5",  
      "message_template_namespace": "12abcdefghijk_34lmnop"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "abcdefghij",  
      "after": "klmnopqr"  
    }  
  }  
}
```
```

## Retrieve WABA review status

Use the [WhatsApp Business Account API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) to [get a WhatsApp Business account’s review status](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) by requesting the `account_review_status` field.

### Request syntax

```
GET https://graph.facebook.com/v25.0/<WABA_ID>
  ?fields=account_review_status
```

### Sample request

```
curl \
'https://graph.facebook.com/v25.0/106526625562206?fields=account_review_status' \
-H 'Authorization: Bearer EAAJi...'
```

### Sample response

```
```
{  
  "account_review_status": "APPROVED",  
  "id": "1111111111111"  
}
```
```

The `account_review_status` property can have one of the following values: `PENDING`, `APPROVED`, and `REJECTED`.

## See also

* [Business Management API](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform#business-management-api)
* Reference: [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business)
* Reference: [WhatsApp Business account](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)
