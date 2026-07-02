---
title: "WhatsApp Business Multi-Partner Solutions - Solution Details API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-reject-api
---

# WhatsApp Business Multi-Partner Solutions - Solution Details API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api/v25.0.openapi.yaml/)

API for retrieving Multi-Partner Solution details and configuration information.

This endpoint allows solution partners to retrieve comprehensive information about their

Multi-Partner Solutions, including status, permissions, and ownership details.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Solution-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-reject-api#get-version-solution-id) |

---

## GET /{Version}/{Solution-ID}

Retrieve comprehensive details about a Multi-Partner Solution, including its current status,

pending status transitions, ownership information, and granted permissions.

Use Cases:

* Monitor solution lifecycle and status changes
* Verify solution configuration before business onboarding
* Check pending approval requests and status transitions
* Retrieve solution ownership and permission details

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Solution details can be cached for short periods, but status information may change

frequently during transitions. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Solution-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "active_solution": {  
    "summary": "Active solution with full details",  
    "value": {  
      "id": "1234567890123456",  
      "name": "E-commerce Integration Solution",  
      "status": "ACTIVE",  
      "status_for_pending_request": "NONE",  
      "owner_app": {  
        "id": "9876543210987654",  
        "name": "Solution Partner App"  
      },  
      "owner_permissions": [  
        "MANAGE",  
        "DEVELOP",  
        "MANAGE_TEMPLATES",  
        "VIEW_COST"  
      ]  
    }  
  },  
  "draft_solution": {  
    "summary": "Draft solution with minimal details",  
    "value": {  
      "id": "2345678901234567",  
      "name": "Customer Support Solution",  
      "status": "DRAFT",  
      "status_for_pending_request": "NONE"  
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

Solution-IDstring·required

Your Multi-Partner Solution ID. This ID is provided when you create the solution

and can be found in your Partner Dashboard or through solution management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (name, status, status\_for\_pending\_request).

Available fields: id, name, status, status\_for\_pending\_request, owner\_app, owner\_permissions

Responses

---

Retrieve comprehensive details about a Multi-Partner Solution, including its current status,

pending status transitions, ownership information, and granted permissions.

Use Cases:

* Monitor solution lifecycle and status changes
* Verify solution configuration before business onboarding
* Check pending approval requests and status transitions
* Retrieve solution ownership and permission details

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Solution details can be cached for short periods, but status information may change

frequently during transitions. Implement appropriate cache invalidation strategies.

200

Successfully retrieved Multi-Partner Solution details

Content Type: application/json

Schema: WhatsAppBusinessSolution

Show child attributes

---

WhatsAppBusinessSolution

---

idstring·required

Unique identifier for the Multi-Partner Solution

---

namestring·required

Human-readable name of the Multi-Partner Solution

---

statusWhatsAppBusinessSolutionStatus·required

Current effective status of the Multi-Partner Solution

---

status\_for\_pending\_requestWhatsAppBusinessSolutionPendingStatus·required

Status of any pending solution status transition requests

---

owner\_appApplicationNode

Meta application that owns the Multi-Partner Solution

Show child attributes

---

idstring

Unique identifier for the Meta application

---

namestring

Name of the Meta application

---

owner\_permissionsarray of WhatsAppBusinessAccountPermissionTask

List of WhatsApp Business Account permissions granted to the solution owner

Show child attributes

---

owner\_permissions[]WhatsAppBusinessAccountPermissionTask

Granular permission tasks for WhatsApp Business Account access

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

Not Found - Solution ID does not exist or is not accessible

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "active_solution": {  
    "summary": "Active solution with full details",  
    "value": {  
      "id": "1234567890123456",  
      "name": "E-commerce Integration Solution",  
      "status": "ACTIVE",  
      "status_for_pending_request": "NONE",  
      "owner_app": {  
        "id": "9876543210987654",  
        "name": "Solution Partner App"  
      },  
      "owner_permissions": [  
        "MANAGE",  
        "DEVELOP",  
        "MANAGE_TEMPLATES",  
        "VIEW_COST"  
      ]  
    }  
  },  
  "draft_solution": {  
    "summary": "Draft solution with minimal details",  
    "value": {  
      "id": "2345678901234567",  
      "name": "Customer Support Solution",  
      "status": "DRAFT",  
      "status_for_pending_request": "NONE"  
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
