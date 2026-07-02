---
title: "Registering business phone numbers"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-system-users
---

# Registering business phone numbers

Updated: Jun 28, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document describes the steps to programmatically register business phone numbers on WhatsApp Business Accounts (WABA).

**Embedded Signup performs steps 1-3 automatically** (unless you are [bypassing the phone number addition screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition)) so you only need to perform step 4 when a client completes the flow. If you have disabled phone number selection, however, you must perform all 4 steps.

Registering business phone numbers is a four-step process:

* Create the number on a WABA.
* Get a verification code for that number.
* Use the code to verify the number.
* Register the verified number for API use.

The following sections describe each step.

You can also perform all 4 steps repeatedly to register business phone numbers in bulk.

## Limitations

Business phone numbers must meet our [phone number requirements](https://developers.facebook.com/docs/whatsapp/phone-numbers#requirements).

## Step 1: Create the phone number

Use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#post-version-waba-id-phone-numbers) to create a business phone number on a WABA.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/phone_numbers
```

### Post body

```
```
{  
  "cc": "<CC>",  
  "phone_number": "<PHONE_NUMBER>",  
  "verified_name": "<VERIFIED_NAME>"  
}
```
```

### Body properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<CC>`  *String* | **Required.**  The phone number’s country calling code. | `1` |
| `<PHONE_NUMBER>`  *String* | **Required.**  The phone number, with or without the country calling code. | `15551234` |
| `<VERIFIED_NAME>`  *String* | **Required.**  The phone number’s [display name⁠](https://www.facebook.com/business/help/338047025165344). | `Lucky Shrub` |

### Response

Upon success, the API returns a business phone number ID. Capture this ID for use in the next step.

```
```
{  
  "id": "<ID>"  
}
```
```

### Response properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ID>` | An unverified [WhatsApp Business Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) ID. | `106540352242922` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/102290129340398/phone_numbers' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAH7...' \
-d '{
    "cc": "1",
    "phone_number": "14195551518",
    "verified_name": "Lucky Shrub"
}'
```

### Example response

```
```
{  
  "id": "110200345501442"  
}
```
```

## Step 2: Request a verification code

Use the [Request Code API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api#post-version-pre-verified-phone-number-id-request-code) to have a verification code sent to the business phone number.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/request_code
  ?code_method=<CODE_METHOD>
  &language=<LANGUAGE>
```

### Query string parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<CODE_METHOD>` | **Required.**  Indicates how you want the verification code delivered to the business phone number. Values can be `SMS` or `VOICE`. | `SMS` |
| `<LANGUAGE>` | **Required.**  Indicates language used in delivered verification code. | `en_US` |

### Response

```
```
{  
  "success": <SUCCESS>  
}
```
```

### Response properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<SUCCESS>` | Boolean indicating success or failure.  Upon success, the API responds with `true` and sends a verification code to the business phone number using the method specified in your request. | `true` |

### Example request

```
curl -X POST 'https://graph.facebook.com/v25.0/110200345501442/request_code?code_method=SMS&language=en_US' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
```
{  
  "success": true  
}
```
```

### Example SMS delivery

Example of an SMS message in English containing a verification code, delivered to a business phone number:

```
```
WhatsApp code 123-830
```
```

## Step 3: Verify the number

Use the [Verify Code API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/verify-code-api#post-version-phone-number-id-verify-code) to verify the business phone number, using the verification code contained in the SMS or voice message delivered to the number.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/verify_code
  ?code=<CODE>
```

### Query string parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<CODE>`  *String* | **Required.**  Verification code, without the hyphen. | `123830` |

### Response

```
```
{  
  "success": <SUCCESS>  
}
```
```

### Response properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<SUCCESS>` | Boolean indicating success or failure.  Upon success, the API responds with `true`, indicating that the business phone number has been verified. | `true` |

### Example request

```
curl -X POST 'https://graph.facebook.com/v25.0/110200345501442/verify_code?code=123830' \
-H 'Authorization: Bearer EAAJB...'
```

### Example response

```
```
{  
  "success": true  
}
```
```

## Step 4: Register the number

Use the [Register API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#post-version-phone-number-id-register) to register the business phone number for use with the API.

### Request syntax

```
POST /<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/register
```

### Post body

```
```
{  
  "messaging_product": "whatsapp",  
  "pin": "<PIN>"  
}
```
```

### Body properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<PIN>`  *String* | **Required.**  If the verified business phone number already has two-step verification enabled, set this value to the number’s 6-digit two-step verification PIN. If you do not recall the PIN, you can [update](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/two-step-verification#updating-verification-code) it.  If the verified business phone number does not have two-step verification enabled, set this value to a 6-digit number. This 6-digit number becomes the business phone number’s two-step verification PIN. | `123456` |

### Response

Upon success, the API responds with `true`, indicating successful registration.

```
```
{  
  "success": <SUCCESS>  
}
```
```

### Response properties

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<SUCCESS>` | Boolean indicating success or failure.  Upon success, the API responds with `true`, indicating successful registration. | `true` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/110200345501442/register' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "pin": "123456"
}'
```

### Example response

```
```
{  
  "success": true  
}
```
```
