---
title: "WhatsApp Business Account API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api
---

# WhatsApp Business Account API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api/v25.0.openapi.yaml/)

API for managing WhatsApp Business Account details and configuration.

This endpoint allows businesses to retrieve and manage their WhatsApp Business Account

information, including account details, status, and configuration settings. This is

essential for managing WhatsApp Business messaging capabilities and account lifecycle.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{WABA-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#get-version-waba-id) |
| POST | [/{Version}/{WABA-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api#post-version-waba-id) |

---

## GET /{Version}/{WABA-ID}

Retrieve comprehensive details about a WhatsApp Business Account, including its

configuration, status, and settings.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Account details can be cached for moderate periods, but verification status may change.

Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{WABA-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "verified_account": {  
    "summary": "Verified WhatsApp Business Account with full details",  
    "value": {  
      "id": "1234567890123456",  
      "name": "My Business WhatsApp Account",  
      "timezone_id": "1",  
      "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",  
      "account_review_status": "APPROVED",  
      "business_verification_status": "VERIFIED",  
      "country": "US",  
      "ownership_type": "SELF",  
      "primary_business_location": "US"  
    }  
  },  
  "basic_account": {  
    "summary": "Basic WhatsApp Business Account with minimal details",  
    "value": {  
      "id": "2345678901234567",  
      "name": "Test Business Account",  
      "timezone_id": "1",  
      "account_review_status": "PENDING",  
      "business_verification_status": "NOT_VERIFIED"  
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

WABA-IDstring·required

Your WhatsApp Business Account ID. This ID is provided when you create the account

and can be found in your WhatsApp Manager or through business management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (id, name). Available fields: id, name, timezone\_id,

message\_template\_namespace, account\_review\_status, business\_verification\_status,

country, ownership\_type, primary\_business\_location

Responses

---

Retrieve comprehensive details about a WhatsApp Business Account, including its

configuration, status, and settings.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Account details can be cached for moderate periods, but verification status may change.

Implement appropriate cache invalidation strategies.

200

Successfully retrieved WhatsApp Business Account details

Content Type: application/json

Schema: WhatsAppBusinessAccount

Show child attributes

---

WhatsAppBusinessAccount

---

idstring·required

Unique identifier for the WhatsApp Business Account

---

namestring·required

Human-readable name of the WhatsApp Business Account

---

timezone\_idstring

Timezone identifier for the WhatsApp Business Account

---

message\_template\_namespacestring

Message template namespace for the WhatsApp Business Account

---

account\_review\_statusWhatsAppBusinessAccountReviewStatus

Review status of the WhatsApp Business Account

---

business\_verification\_statusWhatsAppBusinessAccountVerificationStatus

Business verification status of the WhatsApp Business Account

---

countrystring

Country code for the WhatsApp Business Account

---

ownership\_typeWhatsAppBusinessAccountOwnershipType

Ownership type of the WhatsApp Business Account

---

primary\_business\_locationstring

Primary business location for the WhatsApp Business Account

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

Not Found - WhatsApp Business Account ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "verified_account": {  
    "summary": "Verified WhatsApp Business Account with full details",  
    "value": {  
      "id": "1234567890123456",  
      "name": "My Business WhatsApp Account",  
      "timezone_id": "1",  
      "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",  
      "account_review_status": "APPROVED",  
      "business_verification_status": "VERIFIED",  
      "country": "US",  
      "ownership_type": "SELF",  
      "primary_business_location": "US"  
    }  
  },  
  "basic_account": {  
    "summary": "Basic WhatsApp Business Account with minimal details",  
    "value": {  
      "id": "2345678901234567",  
      "name": "Test Business Account",  
      "timezone_id": "1",  
      "account_review_status": "PENDING",  
      "business_verification_status": "NOT_VERIFIED"  
    }  
  }  
}
```

---

## POST /{Version}/{WABA-ID}

Update configuration and settings for a WhatsApp Business Account.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**POST** /{Version}/{WABA-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "name": "Updated Business Name"  
}'
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

WABA-IDstring·required

Your WhatsApp Business Account ID. This ID is provided when you create the account

and can be found in your WhatsApp Manager or through business management APIs.

Request BodyRequired

---

Content Type: application/json

Schema: object

Show child attributes

---

namestring

Updated name for the WhatsApp Business Account

---

timezone\_idstring

Updated timezone identifier for the WhatsApp Business Account

Responses

---

Update configuration and settings for a WhatsApp Business Account.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Successfully updated WhatsApp Business Account

Content Type: application/json

Schema: object

Show child attributes

---

successboolean

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

Not Found - WhatsApp Business Account ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "name": "Updated Business Name"  
}'
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
