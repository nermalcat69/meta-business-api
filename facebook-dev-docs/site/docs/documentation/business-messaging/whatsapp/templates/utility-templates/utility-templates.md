---
title: "In-App Signup"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/utility-templates
---

# In-App Signup

Updated: Jun 11, 2026

In-App Signup lets you create opt-in deep links that WhatsApp users can click to subscribe to your messages. When a WhatsApp user subscribes through a deep link, you receive a webhook notification and the user receives a confirmation message.

## Overview

The In-App Signup API is available in Graph API v22.0 and later. The API supports the following operations:

| Operation | Method | Endpoint | Description |
| --- | --- | --- | --- |
| Create signup | `POST` | `/<WABA_ID>/signups` | Create a new signup deep link under a WABA. |
| Get signup details | `GET` | `/signups/<SIGNUP_ID>` | Retrieve metadata for a specific signup. |
| List signups | `GET` | `/<WABA_ID>/signups` | List all signups for a WABA. |
| Update signup | `POST` | `/signups/<SIGNUP_ID>` | Update signup metadata or disable a signup. |

### Deep link format

After creating a signup, the API returns the signup entity ID. Use this ID along with your phone number to construct the deep link URL you share with WhatsApp users:

```
wa.me/<PHONE_NUMBER>/signup/<SIGNUP_ID>
```

The signup entity isn't tied to a specific phone number. You can construct deep link URLs with the same signup ID and any phone number associated with your WABA.

### Terms of service

You must accept the Terms of Service before creating your first signup. In your first create request, include the `policy` object with the `tos` field set to the WhatsApp Business Terms of Service URL, `https://www.facebook.com/legal/ads-manager-marketing-messages-terms`, and `accepted` set to `true`. Subsequent requests don't require the `policy` object.

### Permissions

All endpoints require the `whatsapp_business_management` permission.

### Promo codes

You can include a promotional code in the confirmation message by adding the `{​{promo_code}​}` placeholder to your `confirmation_message` and providing a `promo_code` value. When a WhatsApp user subscribes, the placeholder is replaced with the promo code value in the delivered message.

If you use `{​{promo_code}​}` in the `confirmation_message` but don't provide a `promo_code` value, the API returns an error. Unknown placeholders also return an error.

## Create signup

Use the In-App Signup API to create a signup deep link entity under your WhatsApp Business account.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/signups' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "signup_message": "<SIGNUP_MESSAGE>",  
  "confirmation_message": "<CONFIRMATION_MESSAGE>",  
  "privacy_policy_url": "<PRIVACY_POLICY_URL>",  
  "website_url": "<WEBSITE_URL>",  
  "promo_code": "<PROMO_CODE>",  
  "display_name": "<DISPLAY_NAME>",  
  "policy": {  
    "tos": "<TOS_URL>",  
    "accepted": true  
  }  
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WABA_ID>`  *String* | **Required.**  Your WhatsApp Business account ID. | `102290129340398` |
| `<SIGNUP_MESSAGE>`  *String* | **Required.**  The description shown on the pre-consent screen when a WhatsApp user opens the deep link. Supports WhatsApp formatting. Must be 1-300 characters. | `Get exclusive offers and news delivered directly to your WhatsApp!` |
| `<CONFIRMATION_MESSAGE>`  *String* | **Required.**  The message sent to the WhatsApp user immediately after a successful opt-in. Can contain the `{​{promo_code}​}` placeholder, which is replaced with the `promo_code` value in the delivered message. Must be 1-300 characters. | `Thank you for signing up!` |
| `<PRIVACY_POLICY_URL>`  *String* | **Required.**  A link to your privacy policy. Must start with `http://` or `https://`. Immutable after creation. | `https://example-business.com/privacy-policy` |
| `<WEBSITE_URL>`  *String* | **Optional.**  Your business website URL. Must start with `https://`. | `https://example-business.com` |
| `<PROMO_CODE>`  *String* | **Optional.**  A promotional code value. Must contain only alphanumeric characters (letters and numbers) and be 1-50 characters. Replaces `{​{promo_code}​}` in the confirmation message. | `WELCOME10` |
| `<DISPLAY_NAME>`  *String* | **Optional.**  A business-facing nickname for the signup link. Not shown to WhatsApp users. Must be 1-256 characters. | `Summer Sale Signup` |
| `<TOS_URL>`  *String* | **Required** on the first signup creation per business.  The Terms of Service URL. Include the `policy` object with `"accepted": true`. | `https://www.facebook.com/legal/ads-manager-marketing-messages-terms` |

### Example request

This example creates a signup deep link with a welcome promo code.

```
curl 'https://graph.facebook.com/v25.0/102290129340398/signups' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "signup_message": "Get exclusive offers and news delivered directly to your WhatsApp!",
  "confirmation_message": "Thank you for signing up! Here is your welcome code: {​{promo_code}​}.",
  "privacy_policy_url": "https://example-business.com/privacy-policy",
  "promo_code": "WELCOME10",
  "display_name": "Summer Sale Signup",
  "website_url": "https://example-business.com",
  "policy": {
    "tos": "https://www.facebook.com/legal/ads-manager-marketing-messages-terms",
    "accepted": true
  }
}'
```

### Example response

Upon success, the API returns the signup entity ID:

```
{  
  "id": "9876543210123456"  
}
```

Use the returned `id` to construct the deep link:

```
wa.me/15551234567/signup/9876543210123456
```

## Get signup details

Use the In-App Signup API to get the metadata for a specific signup deep link.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/signups/<SIGNUP_ID>' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<SIGNUP_ID>`  *String* | **Required.**  The ID of the signup entity to retrieve. | `9876543210123456` |

### Response fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | *String* | The signup entity ID. |
| `waba_id` | *String* | The parent WhatsApp Business account ID. |
| `signup_message` | *String* | The description shown on the pre-consent screen. |
| `confirmation_message` | *String* | The message sent to the WhatsApp user after opt-in. |
| `privacy_policy_url` | *String* | Your privacy policy URL. |
| `promo_code` | *String* | The promotional code value, if set. |
| `status` | *String* | Current status: `ACTIVE` or `DISABLED`. |
| `display_name` | *String* | The business-facing nickname for the signup link, if set. Not shown to WhatsApp users. |
| `website_url` | *String* | Your business website URL, if set. |

### Example request

```
curl 'https://graph.facebook.com/v25.0/signups/9876543210123456' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
{  
  "id": "9876543210123456",  
  "waba_id": "102290129340398",  
  "signup_message": "Get exclusive offers and news delivered directly to your WhatsApp!",  
  "confirmation_message": "Thank you for signing up!",  
  "privacy_policy_url": "https://example-business.com/privacy-policy",  
  "promo_code": "WELCOME10",  
  "status": "ACTIVE",  
  "display_name": "Summer Sale Signup",  
  "website_url": "https://example-business.com"  
}
```

## List signups

Use the In-App Signup API to list all signups for a WABA, with pagination.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/signups?limit=<LIMIT>' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WABA_ID>`  *String* | **Required.**  Your WhatsApp Business account ID. | `102290129340398` |
| `<LIMIT>`  *Integer* | **Optional.**  Maximum number of signups to return per page. | `10` |

### Example request

This example lists signups, 10 per page.

```
curl 'https://graph.facebook.com/v25.0/102290129340398/signups?limit=10' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
{
  "data": [
    {
      "id": "9876543210123456",
      "signup_message": "Get exclusive offers and news...",
      "status": "ACTIVE"
    },
    {
      "id": "9876543210654321",
      "signup_message": "Subscribe for weekly updates...",
      "status": "ACTIVE"
    }
  ],
  "paging": {
    "cursors": {
      "before": "xyz789",
      "after": "abc123"
    },
    "next": "https://graph.facebook.com/v25.0/102290129340398/signups?limit=10&after=abc123"
  }
}
```

## Update signup

Use the In-App Signup API to update a signup deep link. Only the fields you include in the request body are changed.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/signups/<SIGNUP_ID>' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "status": "<STATUS>",  
  "signup_message": "<SIGNUP_MESSAGE>",  
  "confirmation_message": "<CONFIRMATION_MESSAGE>",  
  "promo_code": "<PROMO_CODE>",  
  "display_name": "<DISPLAY_NAME>",  
  "website_url": "<WEBSITE_URL>"  
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<SIGNUP_ID>`  *String* | **Required.**  The ID of the signup entity to update. | `9876543210123456` |
| `<STATUS>`  *String* | **Optional.**  Updated status: `ACTIVE` or `DISABLED`. | `DISABLED` |
| `<SIGNUP_MESSAGE>`  *String* | **Optional.**  Updated pre-consent screen description. Must be 1-300 characters. | `Subscribe for weekly deals!` |
| `<CONFIRMATION_MESSAGE>`  *String* | **Optional.**  Updated post-opt-in message. Supports `{​{promo_code}​}`. Must be 1-300 characters. | `Welcome! Use code {​{promo_code}​} for 20% off.` |
| `<PROMO_CODE>`  *String* | **Optional.**  Updated promotional code value. Must contain only alphanumeric characters (letters and numbers) and be 1-50 characters. | `SAVE20` |
| `<DISPLAY_NAME>`  *String* | **Optional.**  Updated business-facing nickname for the signup link. Must be 1-256 characters. | `Summer Sale Signup` |
| `<WEBSITE_URL>`  *String* | **Optional.**  Updated business website URL. | `https://example-business.com` |

The `privacy_policy_url` field is immutable and cannot be updated.

### Disable a signup

To deactivate a signup deep link, set `status` to `DISABLED`. WhatsApp users who click a disabled deep link see an error. You can reactivate the signup at any time by setting `status` back to `ACTIVE`.

There is no delete endpoint; setting `status` to `DISABLED` is the only way to stop a signup.

### Example request: disable a signup

```
curl 'https://graph.facebook.com/v25.0/signups/9876543210123456' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "status": "DISABLED"
}'
```

### Example request: update message and promo code

```
curl 'https://graph.facebook.com/v25.0/signups/9876543210123456' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "confirmation_message": "Welcome! Use code {​{promo_code}​} for 20% off your first order.",
  "promo_code": "SAVE20"
}'
```

### Example response

A successful update returns:

```
{  
  "success": true  
}
```

## Error codes

| HTTP status | Error code | Description | Operations |
| --- | --- | --- | --- |
| `400` | `2494164`  SIGNUP\_NOT\_FOUND | The specified signup entity does not exist. | Get, Update |
| `400` | `2494165`  SIGNUPS\_API\_NOT\_AVAILABLE | The In-App Signup API is not enabled for this WABA. | Create |
| `400` | `2494166`  SIGNUP\_UNKNOWN\_PLACEHOLDER | The `confirmation_message` contains an unknown placeholder. | Create, Update |
| `400` | `2494167`  SIGNUP\_MISSING\_PLACEHOLDER\_VALUE | The `confirmation_message` uses the `{​{promo_code}​}` placeholder but no `promo_code` value was provided. | Create, Update |
| `400` | `2494168`  SIGNUP\_TOS\_NOT\_ACCEPTED | The Terms of Service were not accepted. | Create |
| `400` | `2494177`  SIGNUP\_TOS\_URL\_NOT\_ALLOWED | The URL provided in `policy.tos` is not an approved Terms of Service URL. Use the URL shown in the [Terms of Service](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/utility-templates#terms-of-service) section. | Create |
| `400` | `2494176`  SIGNUP\_TOS\_ALREADY\_ACCEPTED | The business has already accepted the Terms of Service, but the request still included the `policy` object. Omit the `policy` object on subsequent create requests. | Create |
| `400` | `2494179`  SIGNUP\_WEBSITE\_URL\_SCHEME\_NOT\_ALLOWED | The `website_url` does not use the `https://` scheme. | Create, Update |
| `403` | — | Missing the `whatsapp_business_management` permission. | All |

## Messaging customer bases

When WhatsApp users opt in through a signup deep link, they are added to a messaging customer base. A default messaging customer base is created automatically when you create your first signup deep link. Use the following endpoints to create additional messaging customer bases, set the default for your WABA, and check which one is active.

## Create a messaging customer base

Use the Messaging Customer Base API to create a new messaging customer base under your business.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/messaging_customer_base' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_customer_base_name": "<MESSAGING_CUSTOMER_BASE_NAME>"  
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BUSINESS_ID>`  *String* | **Required.**  Your Meta Business ID. | `109876543210` |
| `<MESSAGING_CUSTOMER_BASE_NAME>`  *String* | **Required.**  A name for the messaging customer base. | `Summer 2026 Subscribers` |

### Example response

```
{  
  "messaging_customer_base_id": "456789012345678"  
}
```

## List messaging customer bases

Use the Messaging Customer Base API to list all messaging customer bases under your business.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/messaging_customer_base' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Example response

```
{  
  "messaging_customer_bases": [  
    {  
      "id": "456789012345678",  
      "name": "Summer 2026 Subscribers"  
    }  
  ]  
}
```

## Set the default messaging customer base for a WABA

Use the Default Messaging Customer Base API to set or update the default messaging customer base for your WABA. Signups associated with this WABA route new subscribers into the default messaging customer base.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/default_messaging_customer_base' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_customer_base_id": "<MESSAGING_CUSTOMER_BASE_ID>"  
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<WABA_ID>`  *String* | **Required.**  Your WhatsApp Business account ID. | `102290129340398` |
| `<MESSAGING_CUSTOMER_BASE_ID>`  *String* | **Required.**  The messaging customer base ID to set as default. | `456789012345678` |

### Example response

```
{  
  "default_messaging_customer_base_id": "456789012345678",  
  "updated_time": "2026-06-03T19:20:00+0000"  
}
```

## Get the default messaging customer base for a WABA

Use the Default Messaging Customer Base API to retrieve the default messaging customer base for your WABA.

### Request syntax

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/default_messaging_customer_base' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Example response

```
{  
  "default_messaging_customer_base_id": "456789012345678",  
  "updated_time": "2026-06-03T19:20:00+0000"  
}
```
