---
title: "WhatsApp Business Pre-Verified Phone Number API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api
---

# WhatsApp Business Pre-Verified Phone Number API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-api/v25.0.openapi.yaml/)

API for managing WhatsApp Business Pre-Verified Phone Numbers, including validation,

retrieval, and deletion operations.

Pre-verified phone numbers are phone numbers that have been pre-validated by Business

Solution Providers (BSPs) for WhatsApp Business API usage.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Pre-Verified-Phone-Number-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api#get-version-pre-verified-phone-number-id) |
| DELETE | [/{Version}/{Pre-Verified-Phone-Number-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api#delete-version-pre-verified-phone-number-id) |

---

## GET /{Version}/{Pre-Verified-Phone-Number-ID}

Retrieve details about a specific pre-verified phone number, including verification

status, ownership, and expiry information.

Use Cases:

* Check verification status of a pre-verified phone number
* Retrieve phone number and ownership details
* Monitor verification expiry times
* Troubleshoot verification issues

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**GET** /{Version}/{Pre-Verified-Phone-Number-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "verified_number": {  
    "summary": "Verified pre-verified phone number",  
    "value": {  
      "id": "1234567890123456",  
      "phone_number": "+15551234567",  
      "code_verification_status": "VERIFIED",  
      "code_verification_time": 1705312200,  
      "verification_expiry_time": 1705398600,  
      "owner_business": {  
        "id": "9876543210987654",  
        "name": "Example Business Corp"  
      }  
    }  
  },  
  "not_verified_number": {  
    "summary": "Not yet verified phone number",  
    "value": {  
      "id": "2345678901234567",  
      "phone_number": "+442012345678",  
      "code_verification_status": "NOT_VERIFIED"  
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

The pre-verified phone number ID to retrieve details for. This ID is provided

by your Business Solution Provider (BSP) during the pre-verification process.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response.

Available fields: id, code\_verification\_status, code\_verification\_time,

owner\_business, phone\_number, verification\_expiry\_time

Responses

---

Retrieve details about a specific pre-verified phone number, including verification

status, ownership, and expiry information.

Use Cases:

* Check verification status of a pre-verified phone number
* Retrieve phone number and ownership details
* Monitor verification expiry times
* Troubleshoot verification issues

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Successfully retrieved pre-verified phone number details

Content Type: application/json

Schema: PreVerifiedPhoneNumber

Show child attributes

---

PreVerifiedPhoneNumber

---

idstring·required

Unique identifier for the pre-verified phone number

---

code\_verification\_statusWhatsAppCodeVerificationStatus

Current verification status of the pre-verified phone number

---

code\_verification\_timeinteger (int64)

Unix timestamp when the verification code was last verified

---

owner\_businessobject

Business that owns this pre-verified phone number

Show child attributes

---

idstring

Unique identifier for the business

---

namestring

Name of the business

---

phone\_numberstring

The phone number in E.164 format

---

verification\_expiry\_timeinteger (int64)

Unix timestamp when the verification expires

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "verified_number": {  
    "summary": "Verified pre-verified phone number",  
    "value": {  
      "id": "1234567890123456",  
      "phone_number": "+15551234567",  
      "code_verification_status": "VERIFIED",  
      "code_verification_time": 1705312200,  
      "verification_expiry_time": 1705398600,  
      "owner_business": {  
        "id": "9876543210987654",  
        "name": "Example Business Corp"  
      }  
    }  
  },  
  "not_verified_number": {  
    "summary": "Not yet verified phone number",  
    "value": {  
      "id": "2345678901234567",  
      "phone_number": "+442012345678",  
      "code_verification_status": "NOT_VERIFIED"  
    }  
  }  
}
```

---

## DELETE /{Version}/{Pre-Verified-Phone-Number-ID}

Delete a pre-verified phone number from the system. This operation removes the

phone number from your pre-verified list and cannot be undone.

Use Cases:

* Remove phone numbers that are no longer needed
* Clean up invalid or incorrect pre-verified phone numbers
* Manage phone number lifecycle and cleanup

Important Notes:

* This operation is irreversible
* Deleted phone numbers cannot be recovered
* Ensure the phone number is not in active use before deletion

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**DELETE** /{Version}/{Pre-Verified-Phone-Number-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "success": "true"  
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

The pre-verified phone number ID to delete. This ID is provided

by your Business Solution Provider (BSP) during the pre-verification process.

Responses

---

Delete a pre-verified phone number from the system. This operation removes the

phone number from your pre-verified list and cannot be undone.

Use Cases:

* Remove phone numbers that are no longer needed
* Clean up invalid or incorrect pre-verified phone numbers
* Manage phone number lifecycle and cleanup

Important Notes:

* This operation is irreversible
* Deleted phone numbers cannot be recovered
* Ensure the phone number is not in active use before deletion

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Successfully deleted pre-verified phone number

Content Type: application/json

Schema: object

Show child attributes

---

successboolean

Indicates whether the deletion was successful

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

Unprocessable Entity - Phone number cannot be deleted due to current state

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
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "success": "true"  
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
