---
title: "Change billing currency via API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing
---

# Change billing currency via API

Updated: Jun 23, 2026

The Currency Migration API allows you to change the billing currency or payment method on a WhatsApp Business account (WABA) by creating a new WABA and automatically migrating your phone numbers, message templates, and Flows.

Use this API when you need to:

* **Change currency**: Clone an existing WABA into a new WABA with a different currency while migrating assets (phone numbers, templates, Flows). This can make it easier for you to opt-in to be charged in a [newly-available currency](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#updates-to-rate-cards), like Mexican pesos (available as of January 1, 2026).
* **Change payment method**: Move a WABA from one payment method to another while preserving assets.

## Before you begin

* The second call moves phone numbers and deprecates the old WABA. Plan for any operational timing requirements.
* Coexistence and Authorized Agents WABAs are not eligible for migration via this API.
* For payment method changes, only credit card to Line of Credit and Line of Credit to Line of Credit migrations are supported. Migrating from Line of Credit to credit card or credit card to credit card is not supported.
* Lines of Credit are always denominated in USD, regardless of your WABA’s billing currency. You do not need a Line of Credit in the target currency. If your migration requires Line of Credit billing, attach your existing USD Line of Credit.
* You are billed in your WABA’s currency. Your WABA’s currency and your legal entity’s headquarters address together determine which Meta billing entity issues your invoices.
* Phone number limits are preserved on the new WABA (for example, expanded limits of up to 1,200 numbers carry over).

| API Call | What is migrated | What is not migrated | Result | Can WABA be used to send messages? |
| --- | --- | --- | --- | --- |
| First call (Initiate) | * Templates (all statuses: Approved, Pending, Disabled, Rejected, Under Review) * Flows * App installation * Users/permissions | * Templates with outdated formats * Phone numbers in “manual review” state * Insights/analytics | New WABA in selected currency, with assets migrated | Not yet – No phone number attached |
| Second call (Complete) | Phone numbers | Historical insights (remain on old WABA) | Phone number migrated to this new WABA | Yes |

| Insights | Before Migration | After Migration |
| --- | --- | --- |
| Phone Insights | Available on old WABA | Historical data remains on old WABA. New data appears on the new WABA after migration. |
| Template Insights | Available on old WABA | Historical data remains on old WABA. New template analytics appear on new WABA. |
| Message Insights (send, delivery) | Available on old WABA | Historical data remains on old WABA. New message data appears on the new WABA. |
| Pricing Insights (cost, volume) | Available on old WABA | Historical cost and volume data remains on old WABA. New billing data appears on the new WABA in the new currency. |
| Call Insights (cost, duration, count) | Available on old WABA | Historical call data remains on old WABA. New call data appears on the new WABA. |

### Template migration behavior

During migration, note the following behavior:

* New templates created on the old WABA after the phone migration will not be cloned to the new WABA.
* Template status and category are locked during the migration process. Once migration is complete, both can change again.

### Prerequisites

Before initiating a migration, ensure the following:

* You have admin access to the source WABA.
* You have a valid access token with `whatsapp_business_management` and `whatsapp_business_messaging` permissions. No additional Business Portfolio Admin permissions or business approvals are required.
* If your migration requires Line of Credit billing, have your Line of Credit (also called a CreditLine) identifier ready to provide during the [Complete migration](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#complete-migration) step. Lines of Credit are always denominated in USD, so you do not need one in the target currency.

## Initiate migration

Use the POST /<WHATSAPP\_BUSINESS\_ACCOUNT\_ID>/`set_payment_method_migration_intent` endpoint to initiate the migration process. This validates the source WABA, creates a cloned WABA, and begins migrating assets such as templates and Flows.

**Request syntax**

```
```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/set_payment_method_migration_intent" \  
-H "Authorization: Bearer <ACCESS_TOKEN>" \  
-H "Content-Type: application/json" \  
-d '  
{  
  "currency": "<CURRENCY>",  
  
  <!-- Optional -->  
  "extended_credit_id": "<EXTENDED_CREDIT_ID>"  
}'
```
```

**Response syntax**

```
```
{  
  "migration_id": "<MIGRATION_ID>",  
  "migration_status": "<MIGRATION_STATUS>"  
}
```
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>` | The source WhatsApp Business account (WABA) ID you are initiating migration from. Used in the endpoint path. | `123456789012345` |
| `<ACCESS_TOKEN>` | Access token with permissions to manage the WABA and perform migration actions. Used in the Authorization header. | `EAABsbCS1iHgBA...` |
| `<CURRENCY>` | **Required.**  Target currency for the cloned (new) WABA. | `INR` |
| `<EXTENDED_CREDIT_ID>` | **Optional.**  Line of Credit identifier. Required only if migrating to Line of Credit billing. If the WABA uses credit card billing, omit this parameter — migration works regardless of the current payment method. | `987654321098765` |

### Example request

```
```
curl 'https://graph.facebook.com/v23.0/123456789012345/set_payment_method_migration_intent' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer EAABsbCS1iHgBA...' \  
-d '  
{  
  "currency": "INR",  
  "extended_credit_id": "987654321098765"  
}'
```
```

### Example response

```
```
{  
  "migration_id": "mig_01HZYK3ABCDEF4567890",  
  "migration_status": "INITIATED"  
}
```
```

## Check migration status

Use the GET /<MIGRATION\_ID> endpoint to check the current status of a migration. Poll this endpoint to monitor progress until the status reaches `READY_TO_COMPLETE` or `COMPLETED`.

### Request syntax

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<MIGRATION_ID>' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>'
```
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<MIGRATION_ID>`  *String* | **Required.**  The `migration_id` returned by the initiate migration endpoint. | `mig_01HZYK3ABCDEF4567890` |

### Example request

```
```
curl 'https://graph.facebook.com/v23.0/mig_01HZYK3ABCDEF4567890' \  
-H 'Authorization: Bearer EAABsbCS1iHgBA...'
```
```

### Example response

```
```
{  
  "status": "READY_TO_COMPLETE",  
  "destination_waba": {  
    "id": "998877665544332",  
    "name": "Acme WABA (INR)",  
    "currency": "INR",  
    "timezone_id": "1",  
    "message_template_namespace": "1234abcd_namespace"  
  },  
  "id": "mig_01HZYK3ABCDEF4567890"  
}
```
```

## Pre-completion verification

Before completing the migration, verify the following on the new (destination) WABA:

* **Templates**: Confirm that your templates have been cloned to the new WABA. Templates with outdated formats may not migrate. Note that template IDs on the new WABA will differ from the original WABA.
* **App installation**: Verify that your app is installed on the new WABA.
* **Users**: Confirm that users and permissions have been synced correctly to the new WABA.

Once you have verified these items, proceed to [Complete migration](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#complete-migration).

## Complete migration

Once the migration status reaches `READY_TO_COMPLETE`, call the resume migration endpoint as the final step. This detaches phone numbers from the old WABA and attaches them to the new WABA.

### Prerequisites

Before completing the migration:

* Verify that the migration status is `READY_TO_COMPLETE` by [checking the migration status](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#check-migration-status).
* The new currency in the input is not the same as the existing currency on the WABA.
* If your migration requires Line of Credit billing, have your `CreditLine` identifier ready to attach.

After this step completes:

* The new WABA becomes the active account with the migrated phone numbers.
* The old WABA can no longer send messages.
* Continue referencing the old WABA for historical insights and analytics.

**Request syntax**

```
```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<MIGRATION_ID>/resume_migration" \  
-H "Authorization: Bearer <ACCESS_TOKEN>"
```
```

**Response example**

```
```
{  
  "status": "<STATUS>",  
  "destination_waba": {  
    "id": "<CLONED_WABA_ID>",  
    "name": "<CLONED_WABA_NAME>",  
    "currency": "<NEW_CURRENCY>",  
    "timezone_id": "<CLONED_WABA_TIMEZONE>",  
    "message_template_namespace": "<NAMESPACE_FOR_TEMPLATES>"  
  },  
  "id": "<MIGRATION_ID>"  
}
```
```

## Verify migration

After the migration status is `COMPLETED`, run these checks to confirm the new WABA is operational.

### WABA cloning and asset migration

* In Meta Business Suite, under WhatsApp Accounts, verify you see two WABAs: the original (original currency) and the new WABA (new currency).
* In the new WABA, verify that templates have been migrated.
* Confirm all phone numbers that were on the original WABA are now attached to the new WABA.

### Messaging validation

* Send a test message from the new WABA using one of the migrated phone numbers.
* Confirm the message is delivered successfully and that message and cost insights appear under the new WABA.

## Insights and analytics after migration

Insights and analytics do not migrate to the new WABA. The original WABA is not deleted — it remains visible in all linked Business Managers for historical reference. After migration:

* **Historical data**: Continue querying the old WABA ID for all historical insights, analytics, and billing data generated before the migration.
* **New data**: All new messaging insights, analytics, and billing data will appear under the new WABA ID after migration is complete.

## Original WABA after migration

The original WABA is not deleted after migration. It remains visible in all linked Business Managers and accessible for historical reference. There is no plan to automatically delete original WABAs.

* The original WABA can no longer send messages after the migration is complete.
* All historical insights, analytics, and billing data remain on the original WABA.
* The new WABA becomes the active account with migrated phone numbers and assets.

## Migration status values

The following status values are returned by the migration API. For error statuses, see the recommended actions in the [Troubleshooting](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#troubleshooting) section below.

| Status | Description |
| --- | --- |
| `INITIATED` | Migration has been initiated. The system is validating the source WABA and beginning asset cloning. |
| `ACCEPTED` | Migration request has been accepted and is queued for processing. |
| `IN_PROGRESS` | Assets such as templates and Flows are being cloned to the new WABA. |
| `READY_TO_COMPLETE` | Asset cloning is finished. You can now call the resume migration endpoint to complete the migration. |
| `COMPLETED` | Migration is complete. Phone numbers have been moved to the new WABA. |
| `FAILED` | Migration failed during asset cloning. |
| `FAILED_TO_COMPLETE` | Migration failed during the final completion step (phone number move). |
| `REJECTED` | Migration request was rejected due to validation errors. |

## Troubleshooting

| Status | Issue | Possible reasons and solutions |
| --- | --- | --- |
| `REJECTED` | Migration request was rejected due to validation errors. | Verify that you have admin access to the source WABA and that your access token has the required permissions. Check that the source WABA is eligible for migration and retry. |
| `FAILED` | Migration failed during asset cloning (templates, Flows). | Initiate a new migration by calling the `set_payment_method_migration_intent` endpoint again. If the issue persists, contact support. |
| `FAILED_TO_COMPLETE` | Migration failed during the final completion step (phone number move). | Call the resume migration endpoint again to retry. If the issue persists, contact support. |
| `IN_PROGRESS` (extended) | Migration has been in progress longer than expected. | Continue polling the [check migration status](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing#check-migration-status) endpoint. Migration duration varies depending on the number of templates and assets. If the status does not change after an extended period, contact support. |
