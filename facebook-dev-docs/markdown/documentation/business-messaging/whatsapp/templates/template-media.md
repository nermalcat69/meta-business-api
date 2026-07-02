---
title: "Template archival"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-media
---

# Template archival

Updated: Jun 2, 2026

Templates that have been inactive for 12 months or more are automatically archived. Archived templates cannot be sent in template messages and are scheduled for deletion after 28 days. You can unarchive a template within the 28-day window to restore it to its previous status.

## Auto-archival

All WhatsApp Business accounts have auto-archival enabled. You cannot opt out of auto-archival.

A template is eligible for auto-archival when all of the following are true:

* The template status is not `PENDING_DELETION`, `DELETED`, or `ARCHIVED`.
* The template has been inactive for longer than 12 months.

Template activity includes creating, editing, sending, appealing, or unarchiving a template.

## Archive templates

You can manually archive one or more templates through WhatsApp Manager or the API.

In WhatsApp Manager, select one or more templates and choose the **Archive** action. This works the same as the existing bulk delete feature.

To archive templates through the API, send a `POST` request to the `/<WABA_ID>/message_templates/archive` endpoint.

### Request syntax

```
```
curl -X POST 'https://api.facebook.com/<WABA_ID>/message_templates/archive' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "hsm_ids": ["<TEMPLATE_ID_1>", "<TEMPLATE_ID_2>"]  
}'
```
```

### Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<WABA_ID>`  *String* | Your WhatsApp Business account ID. | `102290129340398` |
| `<TEMPLATE_ID_1>`, `<TEMPLATE_ID_2>`  *String* | Template IDs to archive. You can include up to 100 template IDs per request. | `1387372356726668` |

### Example response

```
```
{  
  "archived_templates": ["<TEMPLATE_ID_1>"],  
  "failed_templates": {  
    "<TEMPLATE_ID_2>": "Only approved or rejected templates can be archived"  
  }  
}
```
```

## Unarchive templates

You can unarchive one or more templates within 28 days of archival through WhatsApp Manager or the API.

In WhatsApp Manager, select one or more archived templates and choose the **Unarchive** action.

To unarchive templates through the API, send a `POST` request to the `/<WABA_ID>/message_templates/unarchive` endpoint. Unarchiving a template restores it to its previous status before it was archived (for example, `APPROVED`). If no previous status is available, the template is restored to `APPROVED`.

Unarchiving a template resets its inactivity clock. If you unarchive a template, it is not eligible for auto-archival again until another 12 months of inactivity have passed.

### Request syntax

```
```
curl -X POST 'https://api.facebook.com/<WABA_ID>/message_templates/unarchive' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-H 'Content-Type: application/json' \  
-d '  
{  
  "hsm_ids": ["<TEMPLATE_ID_1>", "<TEMPLATE_ID_2>"]  
}'
```
```

### Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<WABA_ID>`  *String* | Your WhatsApp Business account ID. | `102290129340398` |
| `<TEMPLATE_ID_1>`, `<TEMPLATE_ID_2>`  *String* | Template IDs to unarchive. You can include up to 100 template IDs per request. | `1387372356726668` |

### Example response

```
```
{  
  "unarchived_templates": ["<TEMPLATE_ID_1>"],  
  "failed_templates": {  
    "<TEMPLATE_ID_2>": "Template is not archived"  
  }  
}
```
```

## Post-archival deletion

WhatsApp automatically deletes archived templates 28 days after archival. Once deleted, the template cannot be recovered. If you unarchive a template before the 28-day window expires, the scheduled deletion is cancelled.

## Notifications

When templates are archived, you are notified through the following channels:

* **Webhook** — A [message\_template\_status\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/message_template_status_update) webhook is sent for each template that is archived or unarchived.
* **Email** — An email is sent when templates are archived, listing the affected templates with a link to view and unarchive them in WhatsApp Manager.
