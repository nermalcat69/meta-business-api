---
title: "WhatsApp Business Pre-Verified Phone Number Sharing API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api
---

# WhatsApp Business Pre-Verified Phone Number Sharing API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-number-sharing-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-number-sharing-api/v25.0.openapi.yaml/)

API for sharing WhatsApp Business Pre-Verified Phone Numbers between business entities,

enabling collaborative phone number management and partnership workflows.

This endpoint allows authorized businesses to share pre-verified phone numbers with

partner businesses, facilitating multi-business WhatsApp integrations while maintaining

proper access controls and ownership boundaries. Shared phone numbers can be used by

partner businesses for WhatsApp Business messaging operations.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Business-ID}/share\_preverified\_numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-pre-verified-phone-numbers-api#post-version-business-id-share-preverified-numbers) |

---

## POST /{Version}/{Business-ID}/share\_preverified\_numbers

Share a pre-verified phone number with another business entity, granting specified

permissions for collaborative WhatsApp Business messaging operations.

Use Cases:

* Enable partner businesses to use your pre-verified phone numbers for messaging
* Share phone number resources between parent and subsidiary businesses
* Facilitate multi-business WhatsApp integrations with shared phone number access
* Establish temporary or permanent phone number sharing relationships

Business Logic:

* Only businesses with appropriate ownership or sharing rights can share phone numbers
* Shared phone numbers maintain original ownership while granting usage permissions
* Multiple businesses can have access to the same phone number with different permission levels
* Sharing relationships can be time-limited with automatic expiration

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Validation:

* Pre-verified phone number must exist and be accessible to the requesting business
* Target business must be a valid and accessible business entity
* Requested permissions must be valid and within the scope of allowed sharing permissions
* Sharing operation must comply with business relationship and access control policies

### Request Syntax

**POST** /{Version}/{Business-ID}/share\_preverified\_numbers

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/share_preverified_numbers' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "preverified_id": "1234567890123456",  
  "partner_business_id": "9876543210987654"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_sharing": {  
    "summary": "Successful phone number sharing operation",  
    "value": {  
      "success": true  
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

Your Business ID that owns or has sharing rights to the pre-verified phone number.

This ID can be found in your Meta Business Manager or through business management APIs.

Request BodyRequired

---

Phone number sharing configuration and target business details

Content Type: application/json

Schema: PreVerifiedPhoneNumberShareRequest

Show child attributes

---

PreVerifiedPhoneNumberShareRequest

---

preverified\_idstring·required

Unique identifier of the pre-verified phone number to be shared.

Must be a valid phone number ID that the requesting business owns or has sharing rights to.

---

partner\_business\_idstring·required

Business ID of the partner business that will receive access to the pre-verified phone number.

Must be a valid business entity accessible to the requesting app.

Responses

---

Share a pre-verified phone number with another business entity, granting specified

permissions for collaborative WhatsApp Business messaging operations.

Use Cases:

* Enable partner businesses to use your pre-verified phone numbers for messaging
* Share phone number resources between parent and subsidiary businesses
* Facilitate multi-business WhatsApp integrations with shared phone number access
* Establish temporary or permanent phone number sharing relationships

Business Logic:

* Only businesses with appropriate ownership or sharing rights can share phone numbers
* Shared phone numbers maintain original ownership while granting usage permissions
* Multiple businesses can have access to the same phone number with different permission levels
* Sharing relationships can be time-limited with automatic expiration

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Validation:

* Pre-verified phone number must exist and be accessible to the requesting business
* Target business must be a valid and accessible business entity
* Requested permissions must be valid and within the scope of allowed sharing permissions
* Sharing operation must comply with business relationship and access control policies

200

Successfully shared pre-verified phone number with target business

Content Type: application/json

Schema: PreVerifiedPhoneNumberShareResponse

Show child attributes

---

PreVerifiedPhoneNumberShareResponse

---

successboolean·required

Indicates whether the sharing operation was successful

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

Not Found - Resource does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/share_preverified_numbers' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "preverified_id": "1234567890123456",  
  "partner_business_id": "9876543210987654"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_sharing": {  
    "summary": "Successful phone number sharing operation",  
    "value": {  
      "success": true  
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
