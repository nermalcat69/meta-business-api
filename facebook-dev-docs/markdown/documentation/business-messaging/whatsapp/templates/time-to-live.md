---
title: "Template migration"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/time-to-live
---

# Template migration

Updated: Jun 24, 2026

This document describes how to migrate templates from one WhatsApp Business account (WABA) to another. Migration doesn’t move templates; it recreates them in the destination WABA.

## Limitations

* Templates can only be migrated between WABAs owned by the same Meta business.
* Only templates with a status of `APPROVED` and a `quality_score` of either `GREEN` or `UNKNOWN` are eligible for migration.

## Request syntax

Use the [Migrate Message Templates API](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account/migrate_message_templates) to migrate templates from one WABA to another.

```
```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<DESTINATION_WABA_ID>/migrate_message_templates" \  
-H "Authorization: Bearer <ACCESS_TOKEN>" \  
-H "Content-Type: application/json" \  
-d '  
{  
  "source_waba_id": "<SOURCE_WABA_ID>",  
  "page_number": <PAGE_NUMBER>,  
  "count": <COUNT>,  
  "template_ids": [<TEMPLATE_IDS>]  
}'
```
```

### Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<COUNT>`  *Integer* | **Optional.**  Overrides the default batch size with a maximum count of 500.  If the request takes longer than 30 seconds to execute and times out, reduce the count number. | `200` |
| `<DESTINATION_WABA_ID>`  *WhatsApp Business account ID* | **Required.**  Destination WhatsApp Business account ID. | `104996122399160` |
| `<PAGE_NUMBER>`  *Integer* | **Optional.**  Indicates the number of templates to migrate as sets of 500. Zero-indexed. For example, to migrate 1000 templates, send one request with this value set to `0` and another request with this value set to `1`, in parallel. | `0` |
| `<TEMPLATE_IDS>`  *Array of strings* | **Optional.**  Only use to migrate specific template IDs with a max array length of 500. For example, to migrate failed template IDs, add the specific template ID to the array. | `["35002248699842","351234565148","54382248699842"]` |
| `<SOURCE_WABA_ID>`  *WhatsApp Business account ID* | **Required.**  Source WhatsApp Business account ID. | `102290129340398` |

## Response

```
```
{  
  "migrated_templates": [<MIGRATED_TEMPLATES>],  
  "failed_templates": [<FAILED_TEMPLATES>]  
}
```
```

### Response properties

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<MIGRATED_TEMPLATES>`  *List* | List of template IDs that were successfully duplicated in the destination WhatsApp Business account. | `"1473688840035974","6162904357082268","6147830171896170"` |
| `<FAILED_TEMPLATES>`  *Map* | Map identifying templates that were not duplicated in the destination WhatsApp Business account.  Keys are template IDs and values are failure reasons. | `"1019496902803242":"Incorrect category",``"259672276895259":"Formatting error - dangling parameter",``"572279198452421":"Incorrect category"` |

## Example request

The following request migrates templates from the source WABA `102290129340398` to the destination WABA `104996122399160`:

```
curl -X POST 'https://graph.facebook.com/v25.0/104996122399160/migrate_message_templates?source_waba_id=102290129340398&page_number=0' \
-H 'Authorization: Bearer EAAJB...'
```

## Example response

```
```
{  
  "migrated_templates": [  
    "1473688840035974",  
    "6162904357082268",  
    "6147830171896170"  
  ],  
  "failed_templates": {  
    "1019496902803242": "Incorrect category",  
    "259672276895259": "Formatting error - dangling parameter",  
    "572279198452421": "Incorrect category"  
  }  
}
```
```
