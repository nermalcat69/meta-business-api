---
title: "WhatsApp Business Account Activities API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-activities-api
---

# WhatsApp Business Account Activities API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-activities-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-activities-api/v25.0.openapi.yaml/)

API for retrieving WhatsApp Business Account activity history.

This endpoint allows businesses to monitor and track activities performed on their

WhatsApp Business Account, including administrative actions, configuration changes,

and operational events.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{WABA-ID}/activities](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-activities-api#get-version-waba-id-activities) |

---

## GET /{Version}/{WABA-ID}/activities

Retrieve activity history for a WhatsApp Business Account.

Default fields returned: event\_type, timestamp.

### Request Syntax

**GET** /{Version}/{WABA-ID}/activities

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/activities' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403

---

```
{  
  "recent_activities": {  
    "summary": "Recent account activities",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "event_type": "PHONE_NUMBER_ADDED",  
          "category": "PHONE_NUMBER",  
          "timestamp": 1697377800,  
          "actor_id": "9876543210987654",  
          "actor_business_id": "5678901234567890"  
        },  
        {  
          "id": "1234567890123457",  
          "event_type": "USER_ADDED",  
          "category": "USER",  
          "timestamp": 1697374200,  
          "actor_id": "1111222233334444",  
          "actor_business_id": "5678901234567890"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "NDMyNzQyODI3OTQw",  
          "before": "MTAxNTExOTQ1MjAwNzI5NDE="  
        }  
      }  
    }  
  }  
}
```

Header Parameters

---

User-Agentstring

The user agent string identifying the client software making the request.

Authorizationstring·required

Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.

Path Parameters

---

Versionstring·required

Graph API version

WABA-IDstring·required

WhatsApp Business Account ID

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response.

Default fields: event\_type, timestamp.

Available fields: id, actor\_business\_id, actor\_id, category, event\_type, timestamp

limitinteger [min: 1, max: 100]

Maximum number of activity records to return per page

afterstring

Cursor for pagination

beforestring

Cursor for pagination

Responses

---

Retrieve activity history for a WhatsApp Business Account.

Default fields returned: event\_type, timestamp.

200

Successfully retrieved WhatsApp Business Account activities

Content Type: application/json

Schema: ActivityList

Show child attributes

---

ActivityList

---

dataarray of WhatsAppBusinessActivityHistory·required

Array of activity records

Show child attributes

---

data[]WhatsAppBusinessActivityHistory

WhatsApp Business Account activity history record

Show child attributes

---

idstring

Unique identifier for the activity record

---

actor\_business\_idstring

ID of the business that performed the activity

---

actor\_idstring

ID of the user or system that performed the activity

---

categoryWhatsAppBusinessAccountHistoryComponentType

Category of the activity

---

event\_typeWhatsAppBusinessAccountHistoryEventType

Specific event type of the activity

---

timestampinteger (int64)

Unix timestamp when the activity occurred

---

pagingPaging

Pagination information for activity results

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page of data

---

afterstring

Cursor pointing to the end of the page of data

---

previousstring

Graph API endpoint URL for the previous page of results

---

nextstring

Graph API endpoint URL for the next page of results

400

Bad Request - Invalid parameters or malformed request

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

401

Unauthorized - Invalid or missing access token

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

403

Forbidden - Insufficient permissions

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/activities' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403

---

```
{  
  "recent_activities": {  
    "summary": "Recent account activities",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "event_type": "PHONE_NUMBER_ADDED",  
          "category": "PHONE_NUMBER",  
          "timestamp": 1697377800,  
          "actor_id": "9876543210987654",  
          "actor_business_id": "5678901234567890"  
        },  
        {  
          "id": "1234567890123457",  
          "event_type": "USER_ADDED",  
          "category": "USER",  
          "timestamp": 1697374200,  
          "actor_id": "1111222233334444",  
          "actor_business_id": "5678901234567890"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "NDMyNzQyODI3OTQw",  
          "before": "MTAxNTExOTQ1MjAwNzI5NDE="  
        }  
      }  
    }  
  }  
}
```

## Authentication

|
|  |
| **Scheme** | **Type** | **Location** |
| bearerAuth | HTTP Bearer | Header: `Authorization` |

### Usage Examples

bearerAuth:

Include `Authorization: Bearer your-token-here` in request headers

### Global Authentication Requirements

All endpoints require:

bearerAuth
