---
title: "WhatsApp Business Pre-Verified Phone Numbers API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-invite-link-api
---

# WhatsApp Business Pre-Verified Phone Numbers API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api/v25.0.openapi.yaml/)

API for retrieving pre-verified phone numbers associated with a business.

This endpoint allows businesses to retrieve information about pre-verified phone numbers

that are available for use with their WhatsApp Business Account.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Business-ID}/preverified\_numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-invite-link-api#get-version-business-id-preverified-numbers) |

---

## GET /{Version}/{Business-ID}/preverified\_numbers

Retrieve pre-verified phone numbers available for use with the specified business.

This endpoint provides information about phone numbers that have been pre-verified

and are ready for use with WhatsApp Business messaging operations.

Use Cases:

* Retrieve available pre-verified phone numbers for business messaging setup
* Check verification status of phone numbers
* Monitor pre-verified phone number inventory
* Facilitate quick business messaging setup with pre-verified numbers

Filtering:

* Results can be filtered by phone\_number or code\_verification\_status
* Cursor-based pagination is supported for large result sets

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**GET** /{Version}/{Business-ID}/preverified\_numbers

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/preverified_numbers' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "basic_response": {  
    "summary": "Basic response with pre-verified phone numbers",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "phone_number": "+15551234567",  
          "code_verification_status": "VERIFIED",  
          "code_verification_time": 1705312200,  
          "verification_expiry_time": 1705398600  
        },  
        {  
          "id": "2345678901234567",  
          "phone_number": "+442012345678",  
          "code_verification_status": "NOT_VERIFIED"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/preverified_numbers?after=QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"  
      }  
    }  
  },  
  "empty_response": {  
    "summary": "Empty response when no phone numbers are available",  
    "value": {  
      "data": [],  
      "paging": {  
        "cursors": {}  
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

Business-IDstring·required

Your Business ID for which to retrieve pre-verified phone numbers.

This ID can be found in your Meta Business Manager or through business management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response.

Available fields: id, code\_verification\_status, code\_verification\_time,

owner\_business, phone\_number, verification\_expiry\_time

phone\_numberstring

Filter results by phone number. Only pre-verified numbers matching the

specified phone number will be returned.

code\_verification\_statusWhatsAppCodeVerificationStatus

Filter results by code verification status. Only phone numbers with the

specified verification status will be returned.

limitinteger [min: 1]

Maximum number of phone numbers to return per page.

afterstring

Cursor for pagination. Use this to retrieve the next page of results.

This value is provided in the 'paging' object of previous responses.

beforestring

Cursor for pagination. Use this to retrieve the previous page of results.

This value is provided in the 'paging' object of previous responses.

Responses

---

Retrieve pre-verified phone numbers available for use with the specified business.

This endpoint provides information about phone numbers that have been pre-verified

and are ready for use with WhatsApp Business messaging operations.

Use Cases:

* Retrieve available pre-verified phone numbers for business messaging setup
* Check verification status of phone numbers
* Monitor pre-verified phone number inventory
* Facilitate quick business messaging setup with pre-verified numbers

Filtering:

* Results can be filtered by phone\_number or code\_verification\_status
* Cursor-based pagination is supported for large result sets

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Successfully retrieved pre-verified phone numbers

Content Type: application/json

Schema: PreVerifiedPhoneNumbersResponse

Show child attributes

---

PreVerifiedPhoneNumbersResponse

---

dataarray of PreVerifiedPhoneNumber·required

List of pre-verified phone numbers

Show child attributes

---

data[]PreVerifiedPhoneNumber

Pre-verified phone number node fields

Show child attributes

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

---

pagingCursorPaging

Cursor-based pagination information

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page of data that has been returned

---

afterstring

Cursor pointing to the end of the page of data that has been returned

---

nextstring

Graph API endpoint URL for the next page of results

---

previousstring

Graph API endpoint URL for the previous page of results

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

Not Found - Business does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/preverified_numbers' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "basic_response": {  
    "summary": "Basic response with pre-verified phone numbers",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "phone_number": "+15551234567",  
          "code_verification_status": "VERIFIED",  
          "code_verification_time": 1705312200,  
          "verification_expiry_time": 1705398600  
        },  
        {  
          "id": "2345678901234567",  
          "phone_number": "+442012345678",  
          "code_verification_status": "NOT_VERIFIED"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/preverified_numbers?after=QVFIUjJ5WjBpMGpJWXprYzVYaVhabW9PVks4ZD0"  
      }  
    }  
  },  
  "empty_response": {  
    "summary": "Empty response when no phone numbers are available",  
    "value": {  
      "data": [],  
      "paging": {  
        "cursors": {}  
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
