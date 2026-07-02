---
title: "account_review_update webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update
---

# account\_review\_update webhook reference

Updated: Jun 17, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account (WABA) `account_review_update` webhook.

The **account\_review\_update** webhook notifies you when a WhatsApp Business Account has been reviewed against our policy guidelines.

## Triggers

WhatsApp triggers the `account_review_update` webhook when:

* A WhatsApp Business account is approved.
* A WhatsApp Business account is rejected.
* A decision on a WhatsApp Business account approval has been deferred or is awaiting more information.

## Syntax

The `account_review_update` field has the following payload syntax:

```
{  
  "entry": [  
    {  
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",  
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>,  
      "changes": [  
        {  
          "value": {  
            "decision": "<DECISION>"  
          },  
          "field": "account_review_update"  
        }  
      ]  
    }  
  ],  
  "object": "whatsapp_business_account"  
}
```

## Payload parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<DECISION>`  *String* | Indicates WABA review outcome.  Values can be:  `APPROVED` — Indicates the WABA is approved and ready for use.  `REJECTED` — Indicates the WABA was rejected because it doesn't meet our policy requirements and cannot be used with our APIs.  `PENDING` — Indicates a review decision is still pending and the WABA currently cannot be used with our APIs.  `DEFERRED` — Indicates a review decision has been deferred and the WABA currently cannot be used with our APIs. | `APPROVED` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | WhatsApp Business Account ID. | `102290129340398` |

## Example payload

```
{  
  "entry": [  
    {  
      "id": "102290129340398",  
      "time": 1739321024,  
      "changes": [  
        {  
          "value": {  
            "decision": "APPROVED"  
          },  
          "field": "account_review_update"  
        }  
      ]  
    }  
  ],  
  "object": "whatsapp_business_account"  
}
```
