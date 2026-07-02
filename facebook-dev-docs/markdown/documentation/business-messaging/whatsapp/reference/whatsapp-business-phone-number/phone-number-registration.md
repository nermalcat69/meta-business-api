---
title: "WhatsApp Cloud API - Phone Number Deregister API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-registration
---

# WhatsApp Cloud API - Phone Number Deregister API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-deregister-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-deregister-api/v23.0.openapi.yaml/)

API for deregistering WhatsApp Business phone numbers from the Facebook Hosted System.

This endpoint allows businesses to deregister a previously registered phone number from

the WhatsApp Business Platform.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Phone-Number-ID}/deregister](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/phone-number-registration#post-version-phone-number-id-deregister) |

---

## POST /{Version}/{Phone-Number-ID}/deregister

Deregister a WhatsApp Business phone number from the Facebook Hosted System.

This operation removes the phone number from the WhatsApp Business Platform

and makes it available for re-registration if needed.

Important Notes:

* Phone number must be currently linked in Facebook Hosted System
* Phone number must be registered on the WhatsApp Business Platform
* Cannot deregister phone numbers associated with SMB accounts
* Rate limiting is enforced to prevent abuse
* Deregistration triggers activity logging for audit purposes

Rate Limiting:

Standard Graph API rate limits apply with additional restrictions for registration

operations. Use appropriate retry logic with exponential backoff.

Caching:

Deregistration status changes are immediate and should not be cached.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/deregister

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/deregister' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "successful_deregistration": {  
    "summary": "Successful phone number deregistration",  
    "value": {  
      "success": true  
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

Phone-Number-IDstring·required

The ID of the phone number to deregister. This ID is provided when you register

the phone number and can be found in your WhatsApp Business Account settings.

Responses

---

Deregister a WhatsApp Business phone number from the Facebook Hosted System.

This operation removes the phone number from the WhatsApp Business Platform

and makes it available for re-registration if needed.

Important Notes:

* Phone number must be currently linked in Facebook Hosted System
* Phone number must be registered on the WhatsApp Business Platform
* Cannot deregister phone numbers associated with SMB accounts
* Rate limiting is enforced to prevent abuse
* Deregistration triggers activity logging for audit purposes

Rate Limiting:

Standard Graph API rate limits apply with additional restrictions for registration

operations. Use appropriate retry logic with exponential backoff.

Caching:

Deregistration status changes are immediate and should not be cached.

200

Successfully deregistered the phone number

Content Type: application/json

Schema: DeregisterResponse

Show child attributes

---

DeregisterResponse

---

successboolean·required

Indicates whether the deregistration was successful

400

Bad Request - Invalid parameters or phone number state

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

Not Found - Phone number ID does not exist or is not accessible

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

429

Too Many Requests - Rate limit exceeded

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/deregister' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "successful_deregistration": {  
    "summary": "Successful phone number deregistration",  
    "value": {  
      "success": true  
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
