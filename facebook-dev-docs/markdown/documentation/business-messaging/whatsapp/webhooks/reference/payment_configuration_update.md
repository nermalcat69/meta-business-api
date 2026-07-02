---
title: "partner_solutions webhook reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/payment_configuration_update
---

# partner\_solutions webhook reference

Updated: Jun 17, 2026

This reference describes trigger events and payload contents for the WhatsApp Business account **partner\_solutions** webhook.

The **partner\_solutions webhook** describes changes to the status of a [Multi-Partner Solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions).

## Triggers

* A multi-partner solution is saved as a draft (solution\_status: `DRAFT`).
* A multi-partner solution request is sent to a partner (solution\_status: `INITIATED`).
* A multi-partner solution partner accepts a solution request (solution\_status: `ACTIVE`).
* A multi-partner solution partner rejects a solution request (solution\_status: `REJECTED`).
* A multi-partner solution partner requests deactivation of a solution.
* A multi-partner solution is deactivated (solution\_status: `DEACTIVATED`).

## Syntax

```
```
{  
  "entry": [  
    {  
      "changes": [  
        {  
          "field": "partner_solutions",  
          "value": {  
            "event": "<EVENT>",  
            "solution_id": "<SOLUTION_ID>",  
            "solution_status": "<SOLUTION_STATUS>"  
          }  
        }  
      ],  
      "id": "<BUSINESS_PORTFOLIO_ID>",  
      "time": <WEBHOOK_TRIGGER_TIMESTAMP>  
    }  
  ],  
  "object": "whatsapp_business_account"  
}
```
```

## Parameters

| Placeholder | Description | Example value |
| --- | --- | --- |
| `<BUSINESS_PORTFOLIO_ID>`  *String* | Business portfolio ID. | `506914307656634` |
| `<EVENT>`  *String* | Change event. Values can be:  `SOLUTION_CREATED` - Indicates a new solution was saved as a draft or sent as a request to a partner.  `SOLUTION_UPDATED` - Indicates an existing solution has been updated. | `SOLUTION_CREATED` |
| `<SOLUTION_ID>`  *String* | Solution ID. | `774485461512159` |
| `<SOLUTION_STATUS>`  *String* | Solution status. Values can be:  `ACTIVE` - The solution partner accepted the solution request and the solution can now be used.  `DEACTIVATED` - The solution is deactivated.  `DRAFT` - The solution is drafted but an invitation request has not been sent to a partner.  `INITIATED` - The solution is created and the invitation request sent, but it has not been accepted or rejected yet.  `PENDING_DEACTIVATION` - The solution owner requested deactivation of the solution but the solution partner has yet to accept or decline the deactivation request.  `REJECTED` - The solution partner has rejected the solution request. | `INITIATED` |
| `<WEBHOOK_TRIGGER_TIMESTAMP>`  *Integer* | Unix timestamp indicating when the webhook was triggered. | `1739321024` |

## Example

```
```
{  
  "entry": [  
    {  
      "changes": [  
        {  
          "field": "partner_solutions",  
          "value": {  
            "event": "SOLUTION_CREATED",  
            "solution_id": "774485461512159",  
            "solution_status": "INITIATED"  
          }  
        }  
      ],  
      "id": "506914307656634",  
      "time": 1739321024  
    }  
  ],  
  "object": "whatsapp_business_account"  
}
```
```
