---
title: "Pre-verified phone numbers"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition
---

# Pre-verified phone numbers

Updated: Jun 28, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document explains how to offer your business customers pre-verified phone numbers. A pre-verified phone number is a WhatsApp Business phone number that you have already verified. Pre-verifying a number eliminates the need for customers to contact you for a one-time password.

![Screenshot of pre-verified phone numbers in Embedded Signup flow](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/338350398_960573981782900_5133226701088650766_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=o_Kl3ziUdRwQ7kNvwF16Om7&_nc_oc=AdpLSwYxx1MavqI_DA9giEdFzZhFSVrY9qSIBYBHou1TtvWrRL_c3SoQne9n0FGyEP92lPLVQmEGZikK0I9RFdO9&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=cn8xd6KS1TycEFJRGbAjfA&_nc_ss=7b2a8&oh=00_AQDLRiBw0U4i13EmSL89V3hWSZZkfkb1BQvcPWP0f80FDQ&oe=6A604949)

Note that [WhatsApp Business Pre-Verified Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api) objects represent pre-verified numbers. WhatsApp Business Pre-Verified Phone Number objects are **temporary**. When a business customer selects one of these numbers and completes the Embedded Signup flow, WhatsApp replaces the temporary object with a valid [WhatsApp Business Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) object. You must [get this new object's ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition#getting-and-registering-claimed-phone-numbers) and use it to [register the number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number) within 90 days.

## Requirements

* Your business must be an approved Solution Partner.
* The app user must be a business admin on the business account that pre-verified business phone numbers are added to.
* A [User](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#user-access-tokens) or [System User access token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens).
* The [business\_management](https://developers.facebook.com/docs/permissions/reference/business_management) permission.
* Business phone numbers [must be valid](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).

## Limitations

* You are responsible for keeping track of who has claimed a pre-verified business phone number.
* If an end client does not claim a pre-verified business phone number in the Embedded Signup flow within 90 days of verification, the number will revert to an unverified status and you must verify it again to restore its status for another 90 days.
* Unclaimed pre-verified business phone numbers can't be re-verified until 45 days before they are scheduled to revert to an unverified status. The [`verification_expiry_time` field](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api#fields) indicates this time.
* If you add a phone number to your pool of pre-verified business phone numbers (Step 1) but do not verify it within 90 days (Step 3), WhatsApp removes it from your pool and you have to add it again.
* Once a business customer claims a pre-verified business phone number, you have 90 days to register it.

## Creating pre-verified numbers

Follow these steps to create a pre-verified business phone number, surface it in Embedded Signup, and register it after it has been claimed by a business customer.

### Step 1: Create a pre-verified business phone number

Use the [Add Phone Numbers API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/add_phone_numbers) to add a pre-verified business phone number to your business portfolio's pool of business phone numbers.

#### Request syntax

```
POST /<BUSINESS_PORTFOLIO_ID>/add_phone_numbers
  ?phone_number=<PHONE_NUMBER>
```

#### Response

Upon success, the API will return a [WhatsApp Business Pre-Verified Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api) ID. Capture this value for use in the next request.

```
{  
  "id": "<WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID>"  
}
```

#### Sample request

```
curl -X POST 'https://graph.facebook.com/v25.0/506914307656634/add_phone_numbers?phone_number=15550783881' \
-H 'Authorization: Bearer EAAJB...'
```

#### Sample response

```
{  
  "id": "106540352242922"  
}
```

### Step 2: Request a verification code

Use the [Request Verification Code API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api#post-version-pre-verified-phone-number-id-request-code) to request a one-time password over SMS or voice for the newly created pre-verified number. Use the `WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID` returned in the Step 1 response as the path parameter.

#### Request syntax

```
POST /<WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID>/request_code
  ?code_method=<CODE_METHOD>
  &language=<LANGUAGE>
```

#### Response

Upon success, the API will return `true`.

```
{  
  "success": <SUCCESS>  
}
```

In addition, WhatsApp sends an SMS or voice message containing a one-time password to the phone number. Capture the one-time password for use in the next request.

#### One-time-password SMS syntax

```
WhatsApp code <CODE>
```

#### One-time-password voice message syntax

Repeated three times.

```
Verification code is <CODE>
```

#### Sample request

```
curl -X POST 'https://graph.facebook.com/v25.0/106540352242922/request_code?code_method=SMS&language=en_US' \
-H 'Authorization: Bearer EAAJB...'
```

#### Sample response

```
{  
  "success": true  
}
```

#### Sample one-time-password SMS message

```
WhatsApp code 123-456
```

#### Sample one-time-password voice message

Repeated three times.

```
Verification code is 123456
```

### Step 3: Verify the number

Use the [Verify Code API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api#post-version-phone-number-id-verify-code) to verify the number using its one-time-password.

#### Request syntax

```
POST /<WHATSAPP_BUSINESS_PRE_VERIFIED_PHONE_NUMBER_ID>/verify_code
  ?code=<CODE>
```

#### Response

Upon success, the API will return `true` and the number will have its `code_verification_status` set to `VERIFIED` for 90 days.

```
{  
  "success": <SUCCESS>  
}
```

#### Sample request

```
curl -X POST 'https://graph.facebook.com/v25.0/106540352242922/verify_code?code=123456' \
-H 'Authorization: Bearer EAAJB...'
```

#### Sample response

```
{  
  "success": true  
}
```

Once you have a pre-verified business phone number with a verified status (or a set of such numbers), display them in the new Embedded Signup flow.

## Displaying pre-verified numbers in Embedded Signup

You can display pre-verified business phone numbers in the Embedded Signup flow using [pre-filled form data](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-filled-data). To do this, add a `preVerifiedPhone` object with an `ids` property to the `setup` object and assign the IDs of your pre-verified business phone numbers as an array of strings to the `ids` property:

```
{
  scope: "<SCOPE>",
  extras: {
    feature: "<FEATURE>",
    setup: {
      preVerifiedPhone: {
        ids: [<IDS>]
      }
    }
  }
}
```

For example:

```
{
  scope: "business_management,whatsapp_business_management",
  extras: {
    feature: "whatsapp_embedded_signup",
    version: 2,
    setup: {
  business: {
    name: "Acme Inc.",
    email: "johndoe@acme.com",
    phone: {
      code: 1,
      number: "6505551234"
        },
    website: "https://www.acme.com",
        address: {
          streetAddress1: "1 Acme Way",
          city: "Acme Town",
          state: "CA",
          zipPostal: "94000",
          country: "US"
        },
        timezone: "UTC-08:00"
      },
      phone: {
        displayName: "Acme Inc.",
        category: "ENTERTAIN",
        description: "Gears and widgets"
      },
      preVerifiedPhone: {
        ids: ["106540352242922","105954558954427"]
      }
    }
  }
}
```

Note that if no business customer claims a pre-verified business phone number with a status of `VERIFIED` within 90 days of verification, WhatsApp sets its status to `UNVERIFIED` but it will still appear in the Embedded Signup flow. If a business customer attempts to claim an unverified number, they must complete verification on their own, which means they must request a one-time password from you.

To prevent this experience, **keep track of when you verified a number and re-verify it before it reverts to an unverified state.**

If you don't know when you last verified a given pre-verified business phone number, request the `code_verification_time` and `verification_expiry_time` fields on the pre-verified business phone number ID. These fields indicate its most recent verification time and its verification expiration time.

## Determining if a number has been claimed through Embedded Signup

See [Getting claimed phone number IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition#getting-and-registering-claimed-phone-numbers).

## Getting and registering claimed phone numbers

Once a business customer claims a pre-verified business phone number, WhatsApp replaces it with a verified WhatsApp Business phone number (a [WhatsApp Business Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#get-version-phone-number-id) object with a `code_verification_status` set to `VERIFIED`).

You will have 90 days to [register this number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number) using its ID. If you do not register it within this time frame, it will revert to an `UNVERIFIED` status and you will have to [request a new verification code](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-2--request-a-verification-code) and use the code to [verify the WhatsApp Business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-3--verify-the-number) again.

### Getting claimed numbers via session logging

If you are using [session logging](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/implementation#session-logging-message-event-listener), the ID will be returned in a message event and captured by your event listener. Send this ID to your server and then use it to register the WhatsApp Business phone number.

### Getting claimed numbers via API

If you are not using session logging, use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api) to get a list of WhatsApp Business phone numbers on the WhatsApp Business account.

Parse for the `display_phone_number` property on each object returned in the result set. If an object in the result set has a `display_phone_number` value that matches a number you used to create a pre-verified business phone number, the object represents the WhatsApp Business phone number that has replaced the pre-verified business phone number. Copy this object's ID and use it to register the WhatsApp Business phone number.

Alternatively, you can use the same endpoint with `field` expansion to request the `display_phone_number` field and specify the display phone number. For example:

```
GET /102290129340398/phone_numbers?display_phone_number=16505551234
```

## Get pre-verified business phone numbers

Use the [Preverified Numbers API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/preverified_numbers) to get a list of all [WhatsApp Business Pre-Verified Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api) objects, regardless of their verification status, in your business account's pool of pre-verified business phone numbers:

```
GET /<BUSINESS_ACCOUNT_ID>/preverified_numbers
```

The API automatically sorts results in order of creation time. You can also use field expansion to request the `code_verification_status` field to have the API only return pre-verified business phone numbers with the indicated verification state:

```
GET /<BUSINESS_ACCOUNT_ID>/preverified_numbers?code_verification_status=VERIFIED
```

## Sharing and unsharing pre-verified numbers

Use the [Share Preverified Numbers API](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/share_preverified_numbers) to share pre-verified business phone numbers with a [multi-partner solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) you are a part of, or a DELETE request to the same endpoint to unshare them.

Partners of a solution can surface shared pre-verified business phone numbers in their implementation of Embedded Signup.

If you are sharing numbers with multiple business partners, advise your partners to [get a list of shared pre-verified numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition#get-pre-verified-business-phone-numbers) before surfacing them in Embedded Signup. This reduces the likelihood of a partner attempting to surface a number that has already been claimed (claimed numbers do not appear in the flow, but the partner might not know this and wonder why it's not appearing).

### Sharing request syntax

```
POST /<BUSINESS_ID>/share_preverified_numbers
  ?partner_business_id=<PARTNER_BUSINESS_ID>
  &preverified_id=<PREVERIFIED_ID>
```

### Unsharing request syntax

```
DELETE /<BUSINESS_ID>/share_preverified_numbers
  ?partner_business_id=<PARTNER_BUSINESS_ID>
  &preverified_id=<PREVERIFIED_ID>
```

### Response

Upon success, the API will return `true`. If sharing, notify your business partner of the newly shared pre-verified number and provide them with the number's ID. If unsharing, the number will no longer appear in the partner's implementation of Embedded Signup.

```
{  
  "success": <SUCCESS>  
}
```

### Example sharing request

```
curl -X POST 'https://graph.facebook.com/v17.0/share_preverified_numbers?partner_business_id=506914307656634&preverified_id=1706193509821738' \
-H 'Authorization: Bearer EAAH0...'
```

### Example unsharing request

```
curl -X DELETE 'https://graph.facebook.com/v17.0/share_preverified_numbers?partner_business_id=506914307656634&preverified_id=1706193509821738' \
-H 'Authorization: Bearer EAAH0...'
```

### Example response

```
{  
  "success": true  
}
```

## Registering pre-verified numbers programmatically

If you have customized Embedded Signup to [bypass the phone number addition screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition), you can register pre-verified business phone numbers on an onboarded business customer's WhatsApp Business account programmatically. To do this, first complete all of the steps to [create a pre-verified number](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/bypass-phone-addition#creating-pre-verified-numbers), then use the pre-verified number ID to complete **Step 1** and **Step 4** in the [Register Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers) document.
