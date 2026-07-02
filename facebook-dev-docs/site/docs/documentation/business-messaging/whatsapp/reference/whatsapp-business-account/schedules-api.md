---
title: "WhatsApp Business Account - Schedules API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api
---

# WhatsApp Business Account - Schedules API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api/v25.0.openapi.yaml/)

API for managing WhatsApp Business Account campaign schedules.

This endpoint allows businesses to schedule marketing campaign deliveries

for their WhatsApp Business Account.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{WABA-ID}/schedules](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api#get-version-waba-id-schedules) |
| POST | [/{Version}/{WABA-ID}/schedules](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/schedules-api#post-version-waba-id-schedules) |

---

## GET /{Version}/{WABA-ID}/schedules

Retrieve campaign schedules associated with a WhatsApp Business Account.

### Request Syntax

**GET** /{Version}/{WABA-ID}/schedules

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403

---

```
{  
  "schedules_list": {  
    "summary": "Campaign schedules",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Spring Sale Campaign",  
          "description": "Weekly promotional campaign",  
          "delivery_time": 1706097600,  
          "status": "SCHEDULED"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Welcome Series",  
          "description": "New customer welcome messages",  
          "delivery_time": 1706011200,  
          "status": "COMPLETED"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE="  
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

Default fields: name, description, delivery\_time, status.

Available fields: id, name, description, delivery\_time, status

limitinteger [min: 1, max: 100]

Maximum number of schedules to return per page

afterstring

Cursor for pagination - retrieve records after this cursor

beforestring

Cursor for pagination - retrieve records before this cursor

Responses

---

Retrieve campaign schedules associated with a WhatsApp Business Account.

200

Successfully retrieved WhatsApp Business Account schedules

Content Type: application/json

Schema: WhatsAppBusinessCampaignSchedulesConnection

Show child attributes

---

WhatsAppBusinessCampaignSchedulesConnection

---

dataarray of WhatsAppBusinessCampaignSchedule·required

Array of schedule records

Show child attributes

---

data[]WhatsAppBusinessCampaignSchedule

WhatsApp Business Account campaign schedule

Show child attributes

---

idstring

Unique identifier for the schedule

---

delivery\_timeinteger (int64)

Unix timestamp for scheduled delivery time

---

descriptionstring

Description of the schedule

---

namestring

Name of the schedule

---

statusWhatsAppBusinessCampaignScheduleStatus

Current status of the campaign schedule

---

pagingCursorPaging

Cursor-based pagination information

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page

---

afterstring

Cursor pointing to the end of the page

---

previousstring

URL for the previous page of results

---

nextstring

URL for the next page of results

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

Forbidden - Insufficient permissions or access denied

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
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403

---

```
{  
  "schedules_list": {  
    "summary": "Campaign schedules",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Spring Sale Campaign",  
          "description": "Weekly promotional campaign",  
          "delivery_time": 1706097600,  
          "status": "SCHEDULED"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Welcome Series",  
          "description": "New customer welcome messages",  
          "delivery_time": 1706011200,  
          "status": "COMPLETED"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE="  
        }  
      }  
    }  
  }  
}
```

---

## POST /{Version}/{WABA-ID}/schedules

Create a new campaign schedule for a WhatsApp Business Account.

### Request Syntax

**POST** /{Version}/{WABA-ID}/schedules

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "hsm_id": "9876543210987654",  
  "audience_id": "1111222233334444",  
  "waba_cs_id": "5555666677778888",  
  "description": "Weekly promotional campaign",  
  "name": "Spring Sale Campaign",  
  "delivery_time": 1706097600  
}'
```

Select status code

200400401403

---

```
{  
  "successful_creation": {  
    "summary": "Schedule successfully created",  
    "value": {  
      "id": "1234567890123456"  
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

Request BodyRequired

---

Content Type: application/json

Schema: ScheduleCreateRequest

Show child attributes

---

ScheduleCreateRequest

---

hsm\_idstring·required

Template (HSM) ID for the campaign

---

audience\_idstring·required

Audience ID for the campaign

---

waba\_cs\_idstring·required

WABA customer status ID (phone number)

---

descriptionstring·required

Description of the schedule

---

namestring·required

Name of the schedule

---

delivery\_timeinteger (int64)·required

Unix timestamp for scheduled delivery time

Responses

---

Create a new campaign schedule for a WhatsApp Business Account.

200

Successfully created schedule

Content Type: application/json

Schema: ScheduleCreateResponse

Show child attributes

---

ScheduleCreateResponse

---

idstring·required

Unique identifier for the created schedule

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
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/schedules' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "hsm_id": "9876543210987654",  
  "audience_id": "1111222233334444",  
  "waba_cs_id": "5555666677778888",  
  "description": "Weekly promotional campaign",  
  "name": "Spring Sale Campaign",  
  "delivery_time": 1706097600  
}'
```

Select status code

200400401403

---

```
{  
  "successful_creation": {  
    "summary": "Schedule successfully created",  
    "value": {  
      "id": "1234567890123456"  
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
