---
title: "WhatsApp Business Multi-Partner Solutions - Solution Accept API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api
---

# WhatsApp Business Multi-Partner Solutions - Solution Accept API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-accept-api/v25.0.openapi.yaml/)

API for accepting Multi-Partner Solution partnership invitations.

This endpoint allows partner applications to accept invitations to participate in

Multi-Partner Solutions.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Solution-ID}/accept](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/solution-details-api#post-version-solution-id-accept) |

---

## POST /{Version}/{Solution-ID}/accept

Accept an invitation to participate in a Multi-Partner Solution as a partner application.

This endpoint transitions the partner's status from NOTIFICATION\_SENT to ACCEPTED,

enabling the solution to progress toward ACTIVE status once all required partners accept.

Use Cases:

* Accept partnership invitations for Multi-Partner Solutions
* Activate partner participation in existing solutions
* Enable solution workflow progression from INITIATED to ACTIVE status

Business Logic:

* Only invited partner apps can accept solution invitations
* Solution must be in INITIATED status to accept partnerships
* Partner status transitions from NOTIFICATION\_SENT to ACCEPTED
* Solution may become ACTIVE once all required partners accept

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**POST** /{Version}/{Solution-ID}/accept

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "success": true  
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

ID of the Multi-Partner Solution to accept. This ID is provided in the original

invitation and can be found in partner notifications or solution management interfaces.

Responses

---

Accept an invitation to participate in a Multi-Partner Solution as a partner application.

This endpoint transitions the partner's status from NOTIFICATION\_SENT to ACCEPTED,

enabling the solution to progress toward ACTIVE status once all required partners accept.

Use Cases:

* Accept partnership invitations for Multi-Partner Solutions
* Activate partner participation in existing solutions
* Enable solution workflow progression from INITIATED to ACTIVE status

Business Logic:

* Only invited partner apps can accept solution invitations
* Solution must be in INITIATED status to accept partnerships
* Partner status transitions from NOTIFICATION\_SENT to ACCEPTED
* Solution may become ACTIVE once all required partners accept

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Multi-Partner Solution invitation accepted successfully.

Content Type: application/json

Schema: SuccessResponse

Show child attributes

---

SuccessResponse

---

successboolean·required

Indicates whether the operation was successful

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

Forbidden - Insufficient permissions or not invited to solution

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

Unprocessable Entity - Solution cannot be accepted in current state

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
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/accept' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "success": true  
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
