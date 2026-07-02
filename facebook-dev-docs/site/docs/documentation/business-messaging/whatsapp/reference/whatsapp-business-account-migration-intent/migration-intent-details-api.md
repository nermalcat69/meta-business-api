---
title: "WhatsApp Business Account - Migration Intent Details API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account-migration-intent/migration-intent-details-api
---

# WhatsApp Business Account - Migration Intent Details API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account-migration-intent/migration-intent-details-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account-migration-intent/migration-intent-details-api/v25.0.openapi.yaml/)

API for retrieving WhatsApp Business Account migration intent details and status information.

This endpoint allows solution partners to retrieve comprehensive information about their

WhatsApp Business Account migration intents, including current status and migration details.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Migration-Intent-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account-migration-intent/migration-intent-details-api#get-version-migration-intent-id) |

---

## GET /{Version}/{Migration-Intent-ID}

Retrieve comprehensive details about a WhatsApp Business Account migration intent,

including its current status and migration information.

Use Cases:

* Monitor migration intent lifecycle and status changes
* Verify migration intent configuration and current state
* Check migration progress and completion status
* Retrieve migration intent details for business workflows

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Migration intent details can be cached for short periods, but status information may change

frequently during migration processes. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Migration-Intent-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Migration-Intent-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "initiated_migration": {  
    "summary": "Initiated migration intent",  
    "value": {  
      "id": "1234567890123456",  
      "status": "INITIATED",  
      "destination_waba": {  
        "id": "2345678901234567"  
      },  
      "solution": {  
        "id": "3456789012345678"  
      },  
      "waba": {  
        "id": "4567890123456789"  
      }  
    }  
  },  
  "accepted_migration": {  
    "summary": "Accepted migration intent",  
    "value": {  
      "id": "2345678901234567",  
      "status": "ACCEPTED",  
      "destination_waba": {  
        "id": "3456789012345678"  
      },  
      "solution": {  
        "id": "4567890123456789"  
      },  
      "waba": {  
        "id": "5678901234567890"  
      }  
    }  
  },  
  "completed_migration": {  
    "summary": "Completed migration intent",  
    "value": {  
      "id": "3456789012345678",  
      "status": "COMPLETED",  
      "destination_waba": {  
        "id": "4567890123456789"  
      },  
      "solution": {  
        "id": "5678901234567890"  
      },  
      "waba": {  
        "id": "6789012345678901"  
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

Graph API version to use for this request. Determines the API behavior and available features.

Migration-Intent-IDstring·required

Your Migration Intent ID. This ID is provided when you create the migration intent

and can be found through migration management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (solution, status, destination\_waba).

Available fields: id, status, destination\_waba, solution, waba

Responses

---

Retrieve comprehensive details about a WhatsApp Business Account migration intent,

including its current status and migration information.

Use Cases:

* Monitor migration intent lifecycle and status changes
* Verify migration intent configuration and current state
* Check migration progress and completion status
* Retrieve migration intent details for business workflows

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Migration intent details can be cached for short periods, but status information may change

frequently during migration processes. Implement appropriate cache invalidation strategies.

200

Successfully retrieved migration intent details

Content Type: application/json

Schema: WhatsAppBusinessAccountMigrationIntent

Show child attributes

---

WhatsAppBusinessAccountMigrationIntent

---

idstring·required

Unique identifier for the migration intent

---

statusWhatsAppBusinessAccountMigrationStatus·required

Current status of the WhatsApp Business Account migration intent

---

destination\_wabaobject

Destination WhatsApp Business Account for the migration

Show child attributes

---

idstring

Unique identifier for the destination WABA

---

solutionobject

Multi-Partner Solution associated with the migration intent

Show child attributes

---

idstring

Unique identifier for the solution

---

wabaobject

Source WhatsApp Business Account for the migration

Show child attributes

---

idstring

Unique identifier for the source WABA

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

404

Not Found - Migration Intent ID does not exist or is not accessible

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

422

Unprocessable Entity - Request parameters are valid but cannot be processed

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

500

Internal Server Error - Unexpected server error

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
  --url 'https://graph.facebook.com/{Version}/{Migration-Intent-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "initiated_migration": {  
    "summary": "Initiated migration intent",  
    "value": {  
      "id": "1234567890123456",  
      "status": "INITIATED",  
      "destination_waba": {  
        "id": "2345678901234567"  
      },  
      "solution": {  
        "id": "3456789012345678"  
      },  
      "waba": {  
        "id": "4567890123456789"  
      }  
    }  
  },  
  "accepted_migration": {  
    "summary": "Accepted migration intent",  
    "value": {  
      "id": "2345678901234567",  
      "status": "ACCEPTED",  
      "destination_waba": {  
        "id": "3456789012345678"  
      },  
      "solution": {  
        "id": "4567890123456789"  
      },  
      "waba": {  
        "id": "5678901234567890"  
      }  
    }  
  },  
  "completed_migration": {  
    "summary": "Completed migration intent",  
    "value": {  
      "id": "3456789012345678",  
      "status": "COMPLETED",  
      "destination_waba": {  
        "id": "4567890123456789"  
      },  
      "solution": {  
        "id": "5678901234567890"  
      },  
      "waba": {  
        "id": "6789012345678901"  
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
