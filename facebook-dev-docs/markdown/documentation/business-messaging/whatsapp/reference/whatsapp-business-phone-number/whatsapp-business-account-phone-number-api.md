---
title: "WhatsApp Business Account Official Business Account Status API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api
---

# WhatsApp Business Account Official Business Account Status API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-official-business-account-status-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-official-business-account-status-api/v23.0.openapi.yaml/)

API for retrieving Official Business Account (OBA) status information for WhatsApp Business Account phone numbers.

This endpoint allows businesses to check the Official Business Account status and related status messages

for their WhatsApp Business Account phone numbers.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/official\_business\_account](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#get-version-phone-number-id-official-business-account) |
| POST | [/{Version}/{Phone-Number-ID}/official\_business\_account](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api#post-version-phone-number-id-official-business-account) |

---

## GET /{Version}/{Phone-Number-ID}/official\_business\_account

Retrieve the Official Business Account (OBA) status and related information for a WhatsApp Business Account phone number.

Use Cases:

* Check current OBA verification status
* Monitor OBA application progress
* Retrieve status messages for business account verification
* Validate business credibility status

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

OBA status information can be cached for moderate periods, but status may change

during verification processes. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/official\_business\_account

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/official_business_account' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "pending_status": {  
    "summary": "Pending OBA application",  
    "value": {  
      "id": "1234567890123456",  
      "oba_status": "PENDING",  
      "status_message": "Your Official Business Account application is under review"  
    }  
  },  
  "approved_status": {  
    "summary": "Approved OBA status",  
    "value": {  
      "id": "2345678901234567",  
      "oba_status": "APPROVED",  
      "status_message": "Your Official Business Account has been approved"  
    }  
  },  
  "rejected_status": {  
    "summary": "Rejected OBA application",  
    "value": {  
      "id": "3456789012345678",  
      "oba_status": "REJECTED",  
      "status_message": "Your Official Business Account application was rejected. Please review the requirements and reapply."  
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

Your WhatsApp Business phone number ID. This ID represents the phone number

status entity and can be obtained from your WhatsApp Business Account phone numbers list.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (oba\_status, status\_message).

Available fields: oba\_status, status\_message

Responses

---

Retrieve the Official Business Account (OBA) status and related information for a WhatsApp Business Account phone number.

Use Cases:

* Check current OBA verification status
* Monitor OBA application progress
* Retrieve status messages for business account verification
* Validate business credibility status

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

OBA status information can be cached for moderate periods, but status may change

during verification processes. Implement appropriate cache invalidation strategies.

200

Successfully retrieved Official Business Account status

Content Type: application/json

Schema: OfficialBusinessAccountStatus

Show child attributes

---

OfficialBusinessAccountStatus

---

idstring·required

Unique identifier for the WhatsApp Business Account phone number

---

oba\_statusWhatsAppBusinessAppealStatus·required

Official Business Account appeal and verification status

---

status\_messagestring·required

Human-readable message describing the current Official Business Account status

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/official_business_account' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "pending_status": {  
    "summary": "Pending OBA application",  
    "value": {  
      "id": "1234567890123456",  
      "oba_status": "PENDING",  
      "status_message": "Your Official Business Account application is under review"  
    }  
  },  
  "approved_status": {  
    "summary": "Approved OBA status",  
    "value": {  
      "id": "2345678901234567",  
      "oba_status": "APPROVED",  
      "status_message": "Your Official Business Account has been approved"  
    }  
  },  
  "rejected_status": {  
    "summary": "Rejected OBA application",  
    "value": {  
      "id": "3456789012345678",  
      "oba_status": "REJECTED",  
      "status_message": "Your Official Business Account application was rejected. Please review the requirements and reapply."  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/official\_business\_account

Update or modify the Official Business Account (OBA) status for a WhatsApp Business Account phone number.

This endpoint allows businesses to submit new applications, withdraw existing applications, or resubmit

after addressing rejection reasons.

Use Cases:

* Submit initial Official Business Account application
* Withdraw pending OBA application
* Resubmit OBA application after addressing rejection feedback
* Update application data for pending applications

Application Data Requirements:

When submitting or resubmitting an OBA application, certain business information may be required

depending on the current status and previous submissions.

Rate Limiting:

Standard Graph API rate limits apply with additional restrictions on application submissions

to prevent abuse. Use appropriate retry logic with exponential backoff.

Status Transitions:

* Applications can only be submitted when no active application exists
* Withdrawals are only allowed for pending applications
* Resubmissions are only allowed after rejection

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/official\_business\_account

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/official_business_account' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "action": "SUBMIT_APPLICATION",  
  "application_data": {  
    "business_name": "Acme Corporation Ltd",  
    "business_description": "Leading provider of innovative business solutions and consulting services",  
    "website_url": "https://www.acmecorp.com",  
    "contact_email": "business@acmecorp.com"  
  }  
}'
```

Select status code

200400401403404409422429500

---

```
{  
  "successful_submission": {  
    "summary": "Successful application submission",  
    "value": {  
      "success": true,  
      "message": "Official Business Account application submitted successfully",  
      "updated_status": {  
        "id": "1234567890123456",  
        "oba_status": "PENDING",  
        "status_message": "Your Official Business Account application is under review"  
      },  
      "tracking_id": "oba_req_1234567890abcdef"  
    }  
  },  
  "successful_withdrawal": {  
    "summary": "Successful application withdrawal",  
    "value": {  
      "success": true,  
      "message": "Official Business Account application withdrawn successfully",  
      "updated_status": {  
        "id": "1234567890123456",  
        "oba_status": "CANCELLED",  
        "status_message": "Official Business Account application has been cancelled"  
      },  
      "tracking_id": "oba_req_fedcba0987654321"  
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

Your WhatsApp Business phone number ID. This ID represents the phone number

status entity and can be obtained from your WhatsApp Business Account phone numbers list.

Request BodyRequired

---

Official Business Account status update request

Content Type: application/json

Schema: OfficialBusinessAccountUpdateRequest

Show child attributes

---

OfficialBusinessAccountUpdateRequest

---

business\_website\_urlstring (uri)·required

Official business website URL

---

primary\_country\_of\_operationstring·required

Primary country where the business operates

---

primary\_languagestring

Primary language used by the business

---

parent\_business\_or\_brandstring

Parent business or brand name

---

supporting\_linksarray of string (uri)

Supporting links that demonstrate business notability (minimum 5, maximum 10)

Show child attributes

---

supporting\_links[]string (uri)

---

additional\_supporting\_informationstring

Additional information to support the Official Business Account application

Responses

---

Update or modify the Official Business Account (OBA) status for a WhatsApp Business Account phone number.

This endpoint allows businesses to submit new applications, withdraw existing applications, or resubmit

after addressing rejection reasons.

Use Cases:

* Submit initial Official Business Account application
* Withdraw pending OBA application
* Resubmit OBA application after addressing rejection feedback
* Update application data for pending applications

Application Data Requirements:

When submitting or resubmitting an OBA application, certain business information may be required

depending on the current status and previous submissions.

Rate Limiting:

Standard Graph API rate limits apply with additional restrictions on application submissions

to prevent abuse. Use appropriate retry logic with exponential backoff.

Status Transitions:

* Applications can only be submitted when no active application exists
* Withdrawals are only allowed for pending applications
* Resubmissions are only allowed after rejection

200

Successfully updated Official Business Account status

Content Type: application/json

Schema: OfficialBusinessAccountUpdateResponse

Show child attributes

---

OfficialBusinessAccountUpdateResponse

---

successboolean·required

Indicates if the operation was successful

---

messagestring·required

Human-readable message describing the result of the operation

---

updated\_statusOfficialBusinessAccountStatus

Official Business Account status information for a WhatsApp Business Account phone number

Show child attributes

---

idstring·required

Unique identifier for the WhatsApp Business Account phone number

---

oba\_statusWhatsAppBusinessAppealStatus·required

Official Business Account appeal and verification status

---

status\_messagestring·required

Human-readable message describing the current Official Business Account status

---

tracking\_idstring

Unique identifier for tracking the application/update request

400

Bad Request - Invalid parameters, malformed request, or invalid state transition

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

409

Conflict - Invalid state transition or conflicting request

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

Unprocessable Entity - Request is valid but cannot be processed due to business rules

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

Too Many Requests - Rate limit exceeded or too many application attempts

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/official_business_account' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "action": "SUBMIT_APPLICATION",  
  "application_data": {  
    "business_name": "Acme Corporation Ltd",  
    "business_description": "Leading provider of innovative business solutions and consulting services",  
    "website_url": "https://www.acmecorp.com",  
    "contact_email": "business@acmecorp.com"  
  }  
}'
```

Select status code

200400401403404409422429500

---

```
{  
  "successful_submission": {  
    "summary": "Successful application submission",  
    "value": {  
      "success": true,  
      "message": "Official Business Account application submitted successfully",  
      "updated_status": {  
        "id": "1234567890123456",  
        "oba_status": "PENDING",  
        "status_message": "Your Official Business Account application is under review"  
      },  
      "tracking_id": "oba_req_1234567890abcdef"  
    }  
  },  
  "successful_withdrawal": {  
    "summary": "Successful application withdrawal",  
    "value": {  
      "success": true,  
      "message": "Official Business Account application withdrawn successfully",  
      "updated_status": {  
        "id": "1234567890123456",  
        "oba_status": "CANCELLED",  
        "status_message": "Official Business Account application has been cancelled"  
      },  
      "tracking_id": "oba_req_fedcba0987654321"  
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
