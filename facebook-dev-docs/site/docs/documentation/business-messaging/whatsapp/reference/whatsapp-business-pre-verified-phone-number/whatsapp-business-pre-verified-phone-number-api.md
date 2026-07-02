---
title: "WhatsApp Business Pre-Verified Phone Number - Verify Code API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-api
---

# WhatsApp Business Pre-Verified Phone Number - Verify Code API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/verify-code-api/v25.0.openapi.yaml/)

API for verifying OTP codes for WhatsApp Business Pre-Verified Phone Numbers.

This endpoint allows businesses to verify OTP codes that were sent to pre-verified phone numbers

during the phone number verification process.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Pre-Verified-Phone-Number-ID}/verify\_code](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-api#post-version-pre-verified-phone-number-id-verify-code) |

---

## POST /{Version}/{Pre-Verified-Phone-Number-ID}/verify\_code

Verify the OTP code received for a pre-verified phone number to complete the

verification process. This endpoint validates the code and updates the verification

status of the phone number.

Use Cases:

* Complete phone number verification during WhatsApp Business onboarding
* Verify ownership of phone numbers for business messaging
* Enable phone numbers for WhatsApp Business API usage

Rate Limiting:

This endpoint has specific rate limits to prevent abuse:

* 125 requests per hour for business use cases
* Standard Graph API rate limits also apply

Code Validation:

* Codes are time-sensitive and expire after a set period
* Each code can only be used once
* Invalid or expired codes will result in verification failure

Error Handling:

* Invalid codes return 400 Bad Request
* Expired codes return 422 Unprocessable Entity
  operationId: verifyPreVerifiedPhoneNumberCode

### Request Syntax

**POST** /{Version}/{Pre-Verified-Phone-Number-ID}/verify\_code

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/verify_code' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "code": "123456"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_verification": {  
    "summary": "Code verification successful",  
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

Your Pre-Verified Phone Number ID. This ID is provided when you create the pre-verified

phone number and can be found in your WhatsApp Business Manager or through phone number APIs.

Request BodyRequired

---

Verification code details

Content Type: application/json

Schema: VerifyCodeRequest

Show child attributes

---

VerifyCodeRequest

---

codestring·required

The numeric verification code received via SMS or voice call.

This code is provided after calling the request\_code endpoint.

Responses

---

Verify the OTP code received for a pre-verified phone number to complete the

verification process. This endpoint validates the code and updates the verification

status of the phone number.

Use Cases:

* Complete phone number verification during WhatsApp Business onboarding
* Verify ownership of phone numbers for business messaging
* Enable phone numbers for WhatsApp Business API usage

Rate Limiting:

This endpoint has specific rate limits to prevent abuse:

* 125 requests per hour for business use cases
* Standard Graph API rate limits also apply

Code Validation:

* Codes are time-sensitive and expire after a set period
* Each code can only be used once
* Invalid or expired codes will result in verification failure

Error Handling:

* Invalid codes return 400 Bad Request
* Expired codes return 422 Unprocessable Entity
  operationId: verifyPreVerifiedPhoneNumberCode

200

Successfully verified the OTP code

Content Type: application/json

Schema: VerifyCodeResponse

Show child attributes

---

VerifyCodeResponse

---

successboolean·required

Indicates whether the code verification was successful

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

Not Found - Pre-Verified Phone Number ID does not exist or is not accessible

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

Unprocessable Entity - Code is invalid, expired, or already used

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
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/verify_code' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "code": "123456"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_verification": {  
    "summary": "Code verification successful",  
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
