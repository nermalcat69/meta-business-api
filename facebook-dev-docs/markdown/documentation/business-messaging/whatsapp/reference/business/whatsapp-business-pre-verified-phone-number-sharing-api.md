---
title: "WhatsApp Business Partner Onboarding to MM Lite API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-number-sharing-api
---

# WhatsApp Business Partner Onboarding to MM Lite API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api/v25.0.openapi.yaml/)

API for onboarding partners to WhatsApp Business MM Lite partnerships.

This endpoint enables solution partners to initiate MM Lite onboarding requests to end businesses.

The API validates eligibility, creates business agreement requests, and automatically configures

OBO (On Behalf Of) WABA mobility intents for eligible WhatsApp Business Accounts.

Core Functionality:

* Validates partner business and application ownership
* Checks end business eligibility for MM Lite partnerships
* Identifies eligible shared WABAs and OBO WABAs associated with the partnership
* Automatically sets mobility intents on eligible OBO WABAs (BSPs only)
* Creates a business agreement request with MM\_LITE\_ONBOARDING type
* Returns a unique request ID for tracking the onboarding process

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Business-ID}/onboard\_partners\_to\_mm\_lite](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-number-sharing-api#post-version-business-id-onboard-partners-to-mm-lite) |

---

## POST /{Version}/{Business-ID}/onboard\_partners\_to\_mm\_lite

Send a request from the partner to onboard an end business to MM Lite.

This creates a business agreement request and sets OBO mobility intents

on eligible WhatsApp Business Accounts.

Business Flow:

* Validates partner business and app permissions
* Checks end business eligibility for MM Lite
* Identifies eligible shared WABAs and OBO WABAs
* Sets mobility intents on eligible OBO WABAs (BSPs only)
* Creates business agreement request
* Returns request ID for tracking

BSP vs TP Behavior:

* BSPs (Business Solution Providers): Can create OBO WABAs and set mobility intents
* TPs (Technology Partners): Can only create onboarding requests, no OBO WABA management

Rate Limiting:

Subject to business partner integrations use case throttling limits.

Use appropriate retry logic with exponential backoff.

Idempotency:

If a pending request already exists between the same partner and end business,

the existing request ID is returned instead of creating a duplicate.

### Request Syntax

**POST** /{Version}/{Business-ID}/onboard\_partners\_to\_mm\_lite

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/onboard_partners_to_mm_lite' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "new_request": {  
    "summary": "New onboarding request created",  
    "value": {  
      "request_id": "1234567890123456"  
    }  
  },  
  "existing_request": {  
    "summary": "Existing pending request returned",  
    "value": {  
      "request_id": "2345678901234567"  
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

Business-IDstring·required

The end business ID that will receive the MM Lite onboarding request.

This is the business that the partner wants to establish an MM Lite relationship with.

Query Parameters

---

solution\_idstring

Optional WhatsApp Business Solution ID to associate with the onboarding request.

If provided, the solution will be linked to the business agreement and OBO mobility intents.

Responses

---

Send a request from the partner to onboard an end business to MM Lite.

This creates a business agreement request and sets OBO mobility intents

on eligible WhatsApp Business Accounts.

Business Flow:

* Validates partner business and app permissions
* Checks end business eligibility for MM Lite
* Identifies eligible shared WABAs and OBO WABAs
* Sets mobility intents on eligible OBO WABAs (BSPs only)
* Creates business agreement request
* Returns request ID for tracking

BSP vs TP Behavior:

* BSPs (Business Solution Providers): Can create OBO WABAs and set mobility intents
* TPs (Technology Partners): Can only create onboarding requests, no OBO WABA management

Rate Limiting:

Subject to business partner integrations use case throttling limits.

Use appropriate retry logic with exponential backoff.

Idempotency:

If a pending request already exists between the same partner and end business,

the existing request ID is returned instead of creating a duplicate.

200

Successfully created MM Lite onboarding request

Content Type: application/json

Schema: MMLiteOnboardingRequest

Show child attributes

---

MMLiteOnboardingRequest

---

request\_idstring·required

Unique identifier for the MM Lite onboarding request

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

Not Found - Business ID does not exist or is not accessible

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
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/onboard_partners_to_mm_lite' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "new_request": {  
    "summary": "New onboarding request created",  
    "value": {  
      "request_id": "1234567890123456"  
    }  
  },  
  "existing_request": {  
    "summary": "Existing pending request returned",  
    "value": {  
      "request_id": "2345678901234567"  
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
