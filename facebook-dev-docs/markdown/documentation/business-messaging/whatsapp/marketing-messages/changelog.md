---
title: "Enroll in the max price feature"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/marketing-messages/changelog
---

# Enroll in the max price feature

Updated: Jun 30, 2026

To use the max price feature during the Limited Beta period (May 15 to October 2026), you must sign the beta agreement. Solution Partners must also allowlist the end-businesses they want to enroll.

* **Direct integrators:** Sign the beta agreement (Step 1 only).
* **Solution Partners:** Sign the beta agreement (Step 1), then allowlist end-businesses (Step 2).

Partner-enabled end-businesses do not need to sign the beta agreement.

## Before you begin

* An active Meta Business Suite with WhatsApp Business API access.
* Your app must have an access token with the `business_management` permission.
* For Solution Partners: The end-businesses you want to allowlist must own or share their WhatsApp Business Accounts (WABAs) with you.

## Step 1: Sign the beta agreement

Sign the max price beta agreement once per Meta Business Suite. The caller must be an admin user of the Meta Business Suite. The signer receives an email with an acceptance link.

### Request syntax

```
POST /<BUSINESS_ID>/max_price_agreements
```

### Example request

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/max_price_agreements' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{  
  "signer_name": "<SIGNER_NAME>",  
  "signer_email": "<SIGNER_EMAIL>"  
}'
```

### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BUSINESS_ID>`  *String* | **Required.**  ID of your Meta Business Suite. | `529216684107530` |
| `<SIGNER_NAME>`  *String* | **Required.**  Name of the person signing the agreement. | `Jane Doe` |
| `<SIGNER_EMAIL>`  *String* | **Required.**  Email address where Meta sends the agreement link. | `jane.doe@example.com` |

### Example response

```
{  
  "status": "pending",  
  "signer_name": "Jane Doe",  
  "signer_email": "jane.doe@bsp.example",  
  "message": "Agreement email sent to jane.doe@bsp.example"  
}
```

Re-posting while the agreement is pending resends the email (5-minute cooldown). You can pass an updated `signer_email` to redirect the link.

When the owner of the Meta Business Suite ID formally accepts the agreement, Meta automatically allowlists all self-owned and internally owned WABA IDs of the Meta Business Suite.

Meta collects the `signer_name` and `signer_email` you provide solely to execute the Max Price Beta Agreement. `signer_name` appears on the agreement as the designated signer, and Meta uses `signer_email` only to deliver the acceptance link. Meta does not retain either field for marketing, associate it with the signer's other Meta identities, or share it with third parties. Once you accept the agreement, Meta makes no further use of this information.

## Check agreement status

### Request syntax

```
curl -X GET 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/max_price_agreements' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

### Example responses

Agreement accepted:

```
{"status": "accepted", "signer_name": "Jane Doe", "signer_email": "jane.doe@bsp.example"}
```

Agreement pending:

```
{"status": "pending", "signer_name": "Jane Doe", "signer_email": "jane.doe@bsp.example"}
```

No agreement:

```
{"status": "none"}
```

Possible `status` values: `none`, `pending`, `accepted`.

## Step 2: Allowlist end-businesses (Solution Partner only)

Direct integrators skip this step. They are the end-business and do not need to allowlist themselves.

Once your beta agreement is accepted, allowlist the end-business IDs whose WABAs should access the max price feature. Each Solution Partner can hold up to 15 active allowlist entries during the Limited Beta period.

### Add end-businesses

#### Request syntax

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<SOLUTION_PARTNER_BUSINESS_ID>/max_price_end_businesses' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{"end_business_ids": [<END_BUSINESS_IDS>]}'
```

#### Request parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<SOLUTION_PARTNER_BUSINESS_ID>`  *String* | **Required.**  ID of your Solution Partner Meta Business Suite. | `529216684107530` |
| `<END_BUSINESS_IDS>`  *Array* | **Required.**  List of end-business IDs to allowlist. Maximum 15 entries. | `["111111111", "222222222"]` |

#### Example response

```
{  
  "results": [  
    {"end_business_id": "111111111", "status": "enrolled"},  
    {"end_business_id": "222222222", "status": "rejected", "reason": "No shared WABA"}  
  ]  
}
```

Requests are additive and idempotent. Duplicate enrollments are no-ops.

### List allowlisted end-businesses

#### Request syntax

```
curl -X GET 'https://graph.facebook.com/<API_VERSION>/<SOLUTION_PARTNER_BUSINESS_ID>/max_price_end_businesses' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Example response

```
{  
  "data": [  
    {"end_business_id": "111111111", "end_business_name": "Acme Foods", "enrolled_time": 1714500000}  
  ]  
}
```

Returns an empty `data` array if no allowlist exists yet. `end_business_name` is the display name of the enrolled end-business, or `null` if the business can't be resolved (for example, if it was deactivated or deleted).

### Remove end-businesses

#### Request syntax

```
curl -X DELETE 'https://graph.facebook.com/<API_VERSION>/<SOLUTION_PARTNER_BUSINESS_ID>/max_price_end_businesses' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{"end_business_ids": [<END_BUSINESS_IDS>]}'
```

#### Example response

```
{  
  "results": [  
    {"end_business_id": "111111111", "status": "removed"}  
  ]  
}
```

Per-ID `status` is `removed` (was present, now deleted) or `not_found` (was not in the allowlist). Both are non-errors.

## Error handling

| Condition | Behavior |
| --- | --- |
| Missing or invalid parameters | HTTP 400 with parameter validation error |
| Solution Partner does not have an accepted agreement | HTTP 403 "Agreement required" |
| `POST` agreement called within 5 minutes of last email send | HTTP 429 with `retry_after` |
| End-business not eligible (no shared WABA, not onboarded to Marketing Messages API) | HTTP 200 with per-ID `{"status": "rejected", "reason": "..."}` |
| Allowlist already at cap of 15 | HTTP 200 with per-ID `{"status": "rejected", "reason": "The allowlist has reached the maximum of 15 end-businesses."}` |
