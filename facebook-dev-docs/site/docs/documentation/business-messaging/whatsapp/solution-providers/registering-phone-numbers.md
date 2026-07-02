---
title: "Client phone numbers"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers
---

# Client phone numbers

Updated: Jun 30, 2026

**Embedded signup v2 will be deprecated on October 15, 2026.** Migrate your integration to [v4](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/version-4) before that date to avoid disruption. See [Versions](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/versions) for the full upgrade path.

This document describes client phone numbers, their requirements, and endpoints commonly used to manage business phone numbers.

## Basics

Your clients need a dedicated number to use WhatsApp. Phone numbers already in use with the WhatsApp app are not supported, but numbers in use with the WhatsApp Business app [can be registered](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users).

Clients can have multiple phone numbers associated with their [Meta Business Account⁠](https://business.facebook.com/settings/), so they can [add another number for API use](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#adding-more-phone-numbers) if they wish.

When completing the Embedded Signup flow, your clients should use a phone number and display name that they want to have appear in the WhatsApp app. Avoid signing up with a test or personal number, or a test display name, because these are difficult to change later.

* For more detailed information relating to phone numbers and WhatsApp for Business Platform, see [Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers).
* For information on how to migrate an existing registered WhatsApp phone number, see [Migrate Phone Number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup).

## Instructions for clients

This section guides clients of Embedded Signup on actions they can perform relating to phone numbers.

### Add phone numbers to a WhatsApp Business account

There are two methods to add additional numbers to a WhatsApp Business account (WABA):

* **[Recommended]** Go through the Embedded Signup flow again, select the existing Meta Business Suite and WABA, add the number, and verify it.
* In the **Meta Business Suite**, go to the **Phone Numbers** tab of **WhatsApp Manager**, and select **Add Phone Number**. When using this option, the Solution Partner has to manually verify the phone number as phone verification is not available in WhatsApp Manager. For this reason, it is recommended that businesses follow the Embedded Signup flow to add additional numbers.

## Instructions for Solution Partners

This section provides Solution Partners with instructions for managing client phone numbers.

### Getting phone numbers

Use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#get-version-waba-id-phone-numbers) to get a list of business phone numbers on a client’s WABA.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<CUSTOMER_WABA_ID>/phone_numbers' \
-H 'Authorization: Bearer <CUSTOMER_BUSINESS_TOKEN>'
```

#### Response

Upon success:

```
{
  "data": [
    {
      "verified_name": "<VERIFIED_DISPLAY_NAME>",
      "code_verification_status": "<VERIFICATION_STATUS>",
      "display_phone_number": "<DISPLAY_PHONE_NUMBER>",
      "quality_rating": "<QUALITY_RATING>",
      "platform_type": "CLOUD_API",
      "throughput": {
        "level": "<THROUGHPUT_LEVEL>"
      },
      "webhook_configuration": {
        "application": "<WEBHOOK_CALLBACK_URL>"
      },
      "id": "<BUSINESS_PHONE_NUMBER_ID>"
    }
  ],
  "paging": {
    "cursors": {
      "before": "<BEFORE_CURSOR>",
      "after": "<AFTER_CURSOR>"
    }
  }
}
```

### Register phone numbers

After a client successfully completes the Embedded Signup flow and their phone number is verified, you must register the number for Cloud API use by calling the [Register API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#post-version-phone-number-id-register) with the `messaging_product` and `pin` parameters. See [Step 4: Register the number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/registering-phone-numbers#step-4--register-the-number) for details.

Alternatively, **you can pre-verify phone numbers** and offer them to your clients in the new Embedded Signup flow. This prevents clients from having to contact you for a one-time password during the onboarding process. See [Pre-Verified Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers).

A phone number **must** be registered up to 14 days after going through the Embedded Signup flow. If a number is not registered during that window, the phone must go through to the Embedded Signup flow again prior to registration.

### Get phone metadata

The [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#get-version-waba-id-phone-numbers) allows you to see the status of a phone number’s display name and other metadata.

#### Example request

In the following example, use the ID for the assigned WABA.

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers
  ?fields=
    display_phone_number,
    name_status,
    new_name_status
  &access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

To find the ID of a WhatsApp Business Account, go to [**Business Manager**⁠](https://business.facebook.com/) > **Business Settings** > **Accounts** > **WhatsApp Business Accounts**. Find the account you want to use and click on it. A panel opens, with information about the account, including the ID.

#### Example response

```
{
  "data": [
    {
      "id": "1972385232742141",
      "display_phone_number": "+1 631-555-1111",
      "last_onboarded_time": "2023-08-22T19:05:53+0000",
      "name_status": "APPROVED",
      "new_name_status": "APPROVED"
    }
  ]
}
```

### Response parameters

| Name | Description |
| --- | --- |
| `name_status` | The review status of the current display name request. Available Options:   * `APPROVED`: The name has been approved. * `DECLINED`: The name has not been approved. * `EXPIRED`: The approved name has expired. * `PENDING_REVIEW`: Your name request is under review. * `NONE`: No display name has been set. |
| `new_name_status` | The review status of a display name change request. This field returns data only if a display name change was requested. |

### Get phone number OTP status

To see if a phone number has been verified via OTP (one-time password), check that number’s `code_verification_status` field. Use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#get-version-waba-id-phone-numbers) to get phone numbers on the WABA:

```
curl -i -X GET \
"https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers
  ?access_token=<ACCESS_TOKEN>"
```

The response includes the `code_verification_status` with one of the following options: `VERIFIED` or `NOT_VERIFIED`. A sample response looks like this:

```
[
  {
    "code_verification_status": "NOT_VERIFIED",
    "id": "1754951608042154"
  }
]
```

Alternatively, you can get the status by calling a phone number’s ID:

```
curl -i -X GET \
"https://graph.facebook.com/<API_VERSION>/<PHONE_NUMBER_ID>
  ?access_token=<ACCESS_TOKEN>"
```

Use the [WhatsApp Business Account > Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#Reading) endpoint to get a phone number’s ID. See [Retrieve Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers) for usage details.

### Filter phone numbers by account mode

You can query phone numbers and filter them based on their `account_mode`. For the request, you can use the parameters listed below.

#### Request parameters

| Name | Description |
| --- | --- |
| `field` | Contains the field being used for filtering. In this example, you should use `account_mode`. |
| `operator` | Contains how you want to filter the accounts. In this example, you should use `EQUAL`. |
| `value` | Contains the account mode you are looking for. Supported Values:   * `SANDBOX`: The account is unverified. * `LIVE`: The account is not eligible for the unverified trial experience or it has upgraded to a verified account. |

#### Example request

In the following example, use the ID for the assigned WABA.

```
curl -i -X GET "https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers
  ?filtering=[{
    "field":"account_mode",
    "operator":"EQUAL",
    "value":"SANDBOX"}]
  &access_token=<SYSTEM_USER_ACCESS_TOKEN>"
```

#### Example response

```
{
  "data": [
    {
      "id": "1972385232742141",
      "display_phone_number": "+1 631-555-1111",
      "verified_name": "John's Cake Shop",
      "quality_rating": "UNKNOWN"
    }
  ],
  "paging": {
  "cursors": {
    "before": "abcdefghij",
    "after": "klmnopqr"
  }
   }
}
```

## Learn more

* [Phone numbers: WhatsApp for Business Platform Overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)
* [Phone numbers: Migrate an existing registered number](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup)
* Reference: [WhatsApp Business account](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api)
