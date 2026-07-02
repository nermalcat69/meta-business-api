---
title: "Two-Step Verification"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/conversational-components
---

# Two-Step Verification

Updated: Jun 28, 2026

Set up two-step verification for your phone number to require a 6-digit PIN when registering the phone number. Use the [WhatsApp Business Phone Number API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#post-version-phone-number-id) to set it up with the parameters below. There is no endpoint to disable two-step verification.

| Endpoint | Authentication |
| --- | --- |
| `/PHONE_NUMBER_ID`  (See [Get Phone Number ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers#get-all-phone-numbers)) | Solution Partners must authenticate themselves with an access token with the `whatsapp_business_management` and `whatsapp_business_messaging` permissions. |

### Parameters

| Name | Description |
| --- | --- |
| `pin` | **Required.**  A 6-digit PIN you wish to use for two-step verification. |

### Example

Sample request:

```
curl -X  POST \
 'https://graph.facebook.com/v25.0/FROM_PHONE_NUMBER_ID' \
 -H 'Authorization: Bearer ACCESS_TOKEN' \
 -H 'Content-Type: application/json' \
 -d '{"pin" : "6_DIGIT_PIN"}'
```

Sample response:

```
```
{  
  "success": true  
}
```
```

All API calls require authentication with access tokens.

Developers can authenticate their API calls with the access token generated in the **App Dashboard** > **WhatsApp** > **API Setup**.

Solution Partners must authenticate themselves with an access token with the `whatsapp_business_messaging` and `whatsapp_business_management` permissions. See [System User Access Tokens](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) for information.

## Reset your PIN

Resetting your PIN is the non-API alternative to the API setup above. If you forget or misplace your PIN, update your PIN in WhatsApp Manager by following these steps:

* Go to [settings⁠](https://business.facebook.com/settings/) and log in to your Facebook Business. Click the business you use to manage your WABA (WhatsApp Business account).
* In the settings screen, click **WhatsApp Accounts**. Find the WABA you want to update. Click the WABA. A panel with its info displays.
* In the WABA info panel, click **Settings**.
* In the new tab, click **WhatsApp Manager**.
* In WhatsApp Manager, find your phone number and click **Settings**.
* Click **Two-step verification**.
* In the Two-step verification tab, click **Change PIN**.
* Enter a new PIN and confirm it to complete the update.
