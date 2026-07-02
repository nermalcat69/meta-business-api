---
title: "Migrating customers off a Multi-Partner Solution using Meta Business Suite"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/adding-waba-to-mps
---

# Migrating customers off a Multi-Partner Solution using Meta Business Suite

Updated: Jun 30, 2026

If you are a Tech Provider, you can migrate a client off a [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions) by tagging their WhatsApp Business account ("WABA") for migration and instructing them to use [Meta Business Suite⁠](https://business.facebook.com/) to review and accept the request. Once migrated, you can provide messaging services to the client independently.

Migrating a customer off a solution via Meta Business Suite does not require business phone number reverification, so it eliminates any downtime caused by reverification.

## Requirements

Your app must already be approved for advanced access for the **whatsapp\_business\_management** permission.

## Templates

Templates are automatically duplicated in the destination WABA and initially granted the same status as their source counterparts.

After duplication however, templates are re-checked to ensure they are correctly categorized according to our [guidelines](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). This may result in some duplicated templates having their `status` set to `REJECTED`.

Only templates with both a `status` of `APPROVED` and `quality_score` of `GREEN` are eligible for duplication. If the destination WABA cannot accommodate all of the new templates, we will duplicate as many as we can until the destination WABA's template limit has been reached. Unduplicated templates must be re-created and submitted for approval if they are to be used by the destination WABA.

Note that **template quality ratings are not duplicated**. All duplicated templates will start with an `UNKNOWN` rating. This rating will remain for the first 24 hours, after which a new rating will be generated if sufficient data is available.

## Billing

Messages delivered before migration is complete are charged to the old Solution Partner. Undelivered messages sent before migration is complete will be charged to the old Solution Partner if they are delivered after migration is complete.

Messages delivered after migration is complete are charged to the business customer.

## Step 1: Disable two-step verification on the business phone number

If you have access to the client's WABA in WhatsApp Manager, disable two-step verification on the business phone number associated with their WABA.

Alternatively, you can instruct the client to do this on their own. You can provide them with these instructions:

* *Access WhatsApp Manager at [https://business.facebook.com/latest/whatsapp\_manager/⁠](https://business.facebook.com/latest/whatsapp_manager/).*
* *Navigate to **Account tools** > **Phone numbers**, and click the phone number's settings (gear) icon. If you don't see your business phone number, click **Overview** in the menu on the left, then locate the number and click it.*
* *Click the **Two-step verification** tab.*
* *Click the **Turn off two-step verification** button and complete the flow.*

## Step 2: Tag the customer's WABA for migration

Use the [POST /<WHATSAPP\_BUSINESS\_ACCOUNT>/set\_solution\_migration\_intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/set-solution-migration-intent-api#Creating) endpoint to tag the business customer's WABA for migration. This generates a [migration intent](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/migration-intent-api), which indicates your intent to migrate the WABA.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/set_solution_migration_intent' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \  
-d '  
{  
  "app_id": "<YOUR_APP_ID>"  
}'
```

#### Response

Upon success:

```
{  
  "id": "<MIGRATION_INTENT_ID>"  
}
```

Capture the migration intent ID.

## Step 3: Instruct the customer to accept the request and add a payment method

Instruct the client to use the Meta Business Suite to review and accept the request. Until the client adds a payment method, they will be unable to use your app to send template messages to their own customers.

You can provide them with these instructions:

* *Access Meta Business Suite's **Business settings** panel at [https://business.facebook.com/settings/⁠](https://business.facebook.com/settings/).*
* *Navigate to **Requests** > **Received**.*
* *Locate the request and click the **Review** button.*
* *Complete the flow.*

![Meta Business settings Requests page showing a Tech Provider partner access request to a WhatsApp Business account with a Review button](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/468478543_895393666016721_7634462766366671655_n.png?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=-tOlUw2qIYsQ7kNvwH6rJ6y&_nc_oc=AdoJxiZwTmHYhIQ-RhPf1rBaquoVHcblb3TgwsHqTMD8Min1RD74FR7ZI_m791yxcS8xtm0fxO8HdjPXT1OtDct2&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=xeH1Dn0GVX15c5tp13xSEg&_nc_ss=7b2a8&oh=00_AQCIB7GmbAfbjYPj8--ezQSg8T7LZau-DXPbvQqxdwJBhA&oe=6A60575E)

**WhatsApp for Business** (notification@facebookmail.com) also sends an email to anyone who has admin access on the WABA, requesting review and acceptance of the request. The button in the email loads the Business settings panel in a new window, so any WABA admin can review and accept the request.

## Step 4: Get migration status and WABA ID

Use the [Migration Intent API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account-migration-intent/migration-intent-details-api#get-version-migration-intent-id) to get the status of the migration intent as well as the client's new WABA ID.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<MIGRATION_INTENT_ID>' \  
-H 'Authorization: Bearer <SYSTEM_TOKEN>'
```

#### Response

Upon success:

```
{  
  "status": "<MIGRATION_INTENT_STATUS>",  
  "destination_waba": {  
    "id": "<BUSINESS_CUSTOMER_WABA_ID>",  
    "name": "<BUSINESS_CUSTOMER_WABA_NAME>",  
    "currency": "<BUSINESS_CUSTOMER_WABA_CURRENCY>",  
    "timezone_id": "<BUSINESS_CUSTOMER_WABA_TIMEZONE>",  
    "business_type": "ent",  
    "message_template_namespace": "<BUSINESS_CUSTOMER_WABA_TEMPLATE_NAMESPACE>"  
  },  
  "id": "<MIGRATION_INTENT_ID>"  
}
```

Be sure to capture the client's destination WABA ID (`<BUSINESS_CUSTOMER_WABA_ID>`).

If `<MIGRATION_INTENT_STATUS>` is `ACCEPTED`, the client has reviewed and accepted the migration intent and you can proceed to the next step. **If the status is any other value, do not proceed.**

## Step 5: Get the client's business token

Use the [System User Access Tokens API](https://developers.facebook.com/documentation/facebook-login/facebook-login-for-business#business-integration-system-user-access-tokens) to get the client's business token.

## Step 6: Subscribe to webhooks on the customer's WABA

Use the [POST /<WABA\_ID>/subscribed\_apps](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/subscribed-apps-api#post-version-waba-id-subscribed-apps) endpoint to subscribe your app to webhooks on the business customer's WABA. If you want the customer's webhooks to be sent to a different callback URL than the one set on your app, you have multiple [webhook override](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override) options.

Use the customer's **destination** WABA ID for `<WABA_ID>`.

#### Request

```
curl -X POST 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/subscribed_apps' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```

#### Response

Upon success:

```
{  
  "success": true  
}
```

## Step 7: Get the customer's connected phone number ID

Use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#get-version-waba-id-phone-numbers) and request the `status` field to get a list of business phone numbers, and their Cloud API registration statuses, on the client's **source** WABA.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers?fields=status' \  
-H 'Authorization: Bearer <BUSINESS_TOKEN>'
```

#### Response

Upon success:

```
{  
  "data": [  
    {  
      "status": "<STATUS>",  
      "id": "<BUSINESS_PHONE_NUMBER_ID>"  
    }  
  ],  
  "paging": {  
    "cursors": {  
      "before": "<PAGING_BEFORE_CURSOR>",  
      "after": "<PAGE_AFTER_CURSOR>"  
    }  
  }  
}
```

A `status` of `CONNECTED` indicates that the customer's business phone number is registered and in use with Cloud API.

## Step 8: Migrate the customer's phone number to their new WABA

Use the [Phone Numbers API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#post-version-waba-id-phone-numbers) to migrate the customer's business phone number to their **destination** WABA.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<WABA_ID>/phone_numbers' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \  
-d '  
{  
  "migrate_phone_number": true,  
  "cc": "<BUSINESS_PHONE_NUMBER_COUNTRY_CALLING_CODE>",  
  "phone_number": "<BUSINESS_PHONE_NUMBER>",  
  "display_phone_number": "<BUSINESS_PHONE_NUMBER_DISPLAY_NUMBER>",  
  "verified_name": "<BUSINESS_PHONE_NUMBER_VERIFIED_NAME>"  
}'
```

* Set `<BUSINESS_PHONE_NUMBER_COUNTRY_CALLING_CODE>` to the business phone number's country calling code.
* Set `<BUSINESS_PHONE_NUMBER>` to the business phone number without a plus symbol or country calling code.
* Set `<BUSINESS_PHONE_NUMBER_DISPLAY_NUMBER>` to the business phone number, with or without a plus symbol and country calling code.
* Set `<BUSINESS_PHONE_NUMBER_VERIFIED_NAME>` to the business phone number's existing display name.

#### Response

Upon success, the API returns a business phone number ID. Capture this ID for use in the next step.

```
{  
  "id": "<BUSINESS_PHONE_NUMBER_ID>"  
}
```

## Step 9: Register the customer's number

Use the [Register API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/register-api#post-version-phone-number-id-register) to register the customer's business phone number for use with Cloud API.

#### Request

```
curl 'https://graph.facebook.com/<API_VERSION>/<BUSINESS_PHONE_NUMBER_ID>/register' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <BUSINESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "pin": "<DESIRED_PIN>"  
}'
```

#### Response

Upon success:

```
{  
  "success": true  
}
```
