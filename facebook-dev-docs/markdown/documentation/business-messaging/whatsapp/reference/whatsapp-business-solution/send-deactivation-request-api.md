---
title: "WhatsApp Business Multi-Partner Solutions - Reject Deactivation Request API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/send-deactivation-request-api
---

# WhatsApp Business Multi-Partner Solutions - Reject Deactivation Request API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api/v25.0.openapi.yaml/)

API for rejecting deactivation requests for Multi-Partner Solutions.

This endpoint allows solution partners to reject pending deactivation requests for their

Multi-Partner Solutions.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Solution-ID}/reject\_deactivation\_request](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/send-deactivation-request-api#post-version-solution-id-reject-deactivation-request) |

---

## POST /{Version}/{Solution-ID}/reject\_deactivation\_request

Reject a pending deactivation request for a Multi-Partner Solution. This endpoint allows

solution partners to decline deactivation requests from solution owners, maintaining the

solution in its current active operational state.

Use Cases:

* Reject deactivation requests from solution owners
* Maintain active solution partnerships when deactivation is not appropriate
* Respond programmatically to deactivation requests through API integration
* Keep solutions operational when business requirements or partnerships change

Business Logic:

* Solution status remains ACTIVE after successful rejection
* StatusForPendingRequest transitions from PENDING\_DEACTIVATION to NONE
* All existing solution configurations and permissions are preserved
* Solution partners receive notifications about the rejection decision

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Permissions:

Requires whatsapp\_business\_management permission and valid solution partnership relationship.

### Request Syntax

**POST** /{Version}/{Solution-ID}/reject\_deactivation\_request

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/reject_deactivation_request' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_rejection": {  
    "summary": "Deactivation request successfully rejected",  
    "value": {  
      "id": "1234567890123456",  
      "name": "E-commerce Integration Solution",  
      "status": "ACTIVE",  
      "status_for_pending_request": "NONE",  
      "owner_app": {  
        "id": "9876543210987654",  
        "name": "Solution Partner App"  
      },  
      "owner_permissions": [  
        "MANAGE",  
        "DEVELOP",  
        "MANAGE_TEMPLATES"  
      ]  
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

Your Multi-Partner Solution ID with a pending deactivation request. This ID is provided

when you create the solution and can be found in your Partner Dashboard or through solution management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (name, status, status\_for\_pending\_request).

Available fields: id, name, status, status\_for\_pending\_request, owner\_app, owner\_permissions

Responses

---

Reject a pending deactivation request for a Multi-Partner Solution. This endpoint allows

solution partners to decline deactivation requests from solution owners, maintaining the

solution in its current active operational state.

Use Cases:

* Reject deactivation requests from solution owners
* Maintain active solution partnerships when deactivation is not appropriate
* Respond programmatically to deactivation requests through API integration
* Keep solutions operational when business requirements or partnerships change

Business Logic:

* Solution status remains ACTIVE after successful rejection
* StatusForPendingRequest transitions from PENDING\_DEACTIVATION to NONE
* All existing solution configurations and permissions are preserved
* Solution partners receive notifications about the rejection decision

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Permissions:

Requires whatsapp\_business\_management permission and valid solution partnership relationship.

200

Successfully rejected the deactivation request

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

Error type classification

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

Error type classification

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

Forbidden - Insufficient permissions or unauthorized access

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

Error type classification

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

Not Found - Solution not found or not accessible

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

Error type classification

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

Unprocessable Entity - Invalid solution state or business logic violation

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

Error type classification

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

Error type classification

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
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/reject_deactivation_request' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_rejection": {  
    "summary": "Deactivation request successfully rejected",  
    "value": {  
      "id": "1234567890123456",  
      "name": "E-commerce Integration Solution",  
      "status": "ACTIVE",  
      "status_for_pending_request": "NONE",  
      "owner_app": {  
        "id": "9876543210987654",  
        "name": "Solution Partner App"  
      },  
      "owner_permissions": [  
        "MANAGE",  
        "DEVELOP",  
        "MANAGE_TEMPLATES"  
      ]  
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
