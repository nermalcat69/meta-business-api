---
title: "WhatsApp Business Pre-Verified Phone Number - Request Verification Code API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api
---

# WhatsApp Business Pre-Verified Phone Number - Request Verification Code API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api/v25.0.openapi.yaml/)

API for requesting verification codes for pre-verified phone numbers in WhatsApp Business Account setup.

This endpoint allows businesses to request verification codes (SMS or voice) for pre-verified phone numbers

during the WhatsApp Business Account onboarding process.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Pre-Verified-Phone-Number-ID}/request\_code](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api#post-version-pre-verified-phone-number-id-request-code) |

---

## POST /{Version}/{Pre-Verified-Phone-Number-ID}/request\_code

Request a verification code for a pre-verified phone number via SMS or voice call.

This is part of the WhatsApp Business Account onboarding process where pre-approved

phone numbers must be verified before they can be used for messaging.

Process Flow:

* Call this endpoint to request a verification code
* User receives code via SMS or voice call
* Use the verify\_code endpoint to complete verification
* Phone number becomes active for messaging

Rate Limiting:

* Limited number of code requests per phone number per time period
* Exponential backoff recommended for retry attempts
* Voice calls may have additional restrictions

Language Support:

Verification messages are sent in the specified language when available.

Falls back to English (en\_US) if the requested language is not supported.

Security Considerations:

* Codes expire after a short time period
* Limited number of verification attempts allowed
* Phone number must be pre-verified and owned by requesting business

### Request Syntax

**POST** /{Version}/{Pre-Verified-Phone-Number-ID}/request\_code

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/request_code' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "code_method": "SMS",  
  "language": "en_US"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "success_response": {  
    "summary": "Successful code request",  
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

Pre-Verified-Phone-Number-IDstring·required

Your pre-verified phone number ID. This ID is provided when the phone number

is pre-verified and can be found in your WhatsApp Business Account settings.

Request BodyRequired

---

Verification code request parameters

Content Type: application/json

Schema: RequestCodeRequest

Show child attributes

---

RequestCodeRequest

---

code\_methodPhoneVerificationMethodCode·required

Method for receiving the verification code

---

languagestring·required

Language/locale code for the verification message. Must be a valid locale identifier.

The verification message will be sent in this language if supported.

Supports various formats including xx\_XX, xx-XX, and extended locale codes.

Responses

---

Request a verification code for a pre-verified phone number via SMS or voice call.

This is part of the WhatsApp Business Account onboarding process where pre-approved

phone numbers must be verified before they can be used for messaging.

Process Flow:

* Call this endpoint to request a verification code
* User receives code via SMS or voice call
* Use the verify\_code endpoint to complete verification
* Phone number becomes active for messaging

Rate Limiting:

* Limited number of code requests per phone number per time period
* Exponential backoff recommended for retry attempts
* Voice calls may have additional restrictions

Language Support:

Verification messages are sent in the specified language when available.

Falls back to English (en\_US) if the requested language is not supported.

Security Considerations:

* Codes expire after a short time period
* Limited number of verification attempts allowed
* Phone number must be pre-verified and owned by requesting business

200

Successfully requested verification code

Content Type: application/json

Schema: RequestCodeResponse

Show child attributes

---

RequestCodeResponse

---

successboolean·required

Indicates whether the verification code request was successful

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

Not Found - Pre-verified phone number ID does not exist or is not accessible

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
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/request_code' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "code_method": "SMS",  
  "language": "en_US"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "success_response": {  
    "summary": "Successful code request",  
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
