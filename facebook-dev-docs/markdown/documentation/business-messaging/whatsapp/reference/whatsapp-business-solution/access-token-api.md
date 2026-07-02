---
title: "WhatsApp Business Multi-Partner Solutions - Accept Deactivation Request API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api
---

# WhatsApp Business Multi-Partner Solutions - Accept Deactivation Request API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/accept-deactivation-request-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/accept-deactivation-request-api/v25.0.openapi.yaml/)

API for accepting deactivation requests for WhatsApp Business Multi-Partner Solutions.

This endpoint allows solution partners to accept pending deactivation requests for their

Multi-Partner Solutions.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Solution-ID}/accept\_deactivation\_request](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api#post-version-solution-id-accept-deactivation-request) |

---

## POST /{Version}/{Solution-ID}/accept\_deactivation\_request

Accepts a pending deactivation request for a WhatsApp Business Multi-Partner Solution.

This endpoint completes the partner approval workflow by accepting a deactivation request

that was previously initiated by another solution partner. Upon successful acceptance,

the solution status transitions from ACTIVE to DEACTIVATED, and the pending request

status changes from PENDING\_DEACTIVATION to NONE.

Important Business Logic:

* Solution must be in ACTIVE status with PENDING\_DEACTIVATION pending status
* All outstanding payments and invoices must be settled before acceptance
* Active marketing campaigns must be concluded or transferred
* Webhook notifications will be sent to all solution partners upon completion
* Solution resources and permissions will be cleaned up according to policy

### Request Syntax

**POST** /{Version}/{Solution-ID}/accept\_deactivation\_request

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept_deactivation_request' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "id": "12345678901234567",  
  "name": "Sample Business Solution Partnership",  
  "status": "DEACTIVATED",  
  "status_for_pending_request": "NONE",  
  "owner_permissions": [  
    "DEVELOP",  
    "MANAGE"  
  ]  
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

Solution-IDstring·required

Unique identifier for the WhatsApp Business Solution

Query Parameters

---

fieldsstring

Comma-separated list of fields to return in the response.

Available Fields: id, name, status, status\_for\_pending\_request, owner\_permissions

Default Fields: name, status, status\_for\_pending\_request

Request BodyOptional

---

Empty request body - no parameters required for this endpoint

Content Type: application/json

Schema: object

Responses

---

Accepts a pending deactivation request for a WhatsApp Business Multi-Partner Solution.

This endpoint completes the partner approval workflow by accepting a deactivation request

that was previously initiated by another solution partner. Upon successful acceptance,

the solution status transitions from ACTIVE to DEACTIVATED, and the pending request

status changes from PENDING\_DEACTIVATION to NONE.

Important Business Logic:

* Solution must be in ACTIVE status with PENDING\_DEACTIVATION pending status
* All outstanding payments and invoices must be settled before acceptance
* Active marketing campaigns must be concluded or transferred
* Webhook notifications will be sent to all solution partners upon completion
* Solution resources and permissions will be cleaned up according to policy

200

Deactivation request accepted successfully. Solution status updated to DEACTIVATED.

Content Type: application/json

Schema: WhatsAppBusinessSolution

Show child attributes

---

WhatsAppBusinessSolution

---

idstring·required

Unique identifier for the WhatsApp Business Solution

---

namestring·required

Human-readable name for the solution (UGC text, 2-75 characters)

---

statusWhatsAppBusinessSolutionStatus·required

Current status of the WhatsApp Business Solution

---

status\_for\_pending\_requestWhatsAppBusinessSolutionPendingStatus·required

Status of any pending requests for the solution

---

owner\_permissionsarray of WhatsAppBusinessAccountPermissionTask

Array of permissions granted to the solution owner

Show child attributes

---

owner\_permissions[]WhatsAppBusinessAccountPermissionTask

Granular permission tasks for WhatsApp Business Account access

400

Bad Request - Invalid request parameters or malformed solution ID format.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·required

Error type classification

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode

---

fbtrace\_idstring

Internal trace ID for debugging

---

is\_transientboolean

Whether this error might be resolved by retrying

---

error\_user\_titlestring

User-friendly error title

---

error\_user\_msgstring

User-friendly error message

401

Unauthorized - Invalid, missing, or expired access token.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·required

Error type classification

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode

---

fbtrace\_idstring

Internal trace ID for debugging

---

is\_transientboolean

Whether this error might be resolved by retrying

---

error\_user\_titlestring

User-friendly error title

---

error\_user\_msgstring

User-friendly error message

403

Forbidden - Insufficient permissions or app not authorized for this solution.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·required

Error type classification

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode

---

fbtrace\_idstring

Internal trace ID for debugging

---

is\_transientboolean

Whether this error might be resolved by retrying

---

error\_user\_titlestring

User-friendly error title

---

error\_user\_msgstring

User-friendly error message

404

Not Found - Solution ID does not exist or is not accessible to the requesting app.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·required

Error type classification

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode

---

fbtrace\_idstring

Internal trace ID for debugging

---

is\_transientboolean

Whether this error might be resolved by retrying

---

error\_user\_titlestring

User-friendly error title

---

error\_user\_msgstring

User-friendly error message

422

Unprocessable Entity - Valid parameters but business logic prevents processing (e.g., wrong solution state, outstanding payments).

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·required

Error type classification

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode

---

fbtrace\_idstring

Internal trace ID for debugging

---

is\_transientboolean

Whether this error might be resolved by retrying

---

error\_user\_titlestring

User-friendly error title

---

error\_user\_msgstring

User-friendly error message

500

Internal Server Error - Unexpected server error. Retry with exponential backoff if is\_transient is true.

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

typeOne of "OAuthException", "GraphMethodException", "GraphAPIException"·required

Error type classification

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode

---

fbtrace\_idstring

Internal trace ID for debugging

---

is\_transientboolean

Whether this error might be resolved by retrying

---

error\_user\_titlestring

User-friendly error title

---

error\_user\_msgstring

User-friendly error message

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept_deactivation_request' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "id": "12345678901234567",  
  "name": "Sample Business Solution Partnership",  
  "status": "DEACTIVATED",  
  "status_for_pending_request": "NONE",  
  "owner_permissions": [  
    "DEVELOP",  
    "MANAGE"  
  ]  
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
