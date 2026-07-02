---
title: "WhatsApp Business API - Phone Number Management API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api
---

# WhatsApp Business API - Phone Number Management API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api/v25.0.openapi.yaml/)

API for managing WhatsApp Business Account phone numbers, including retrieving phone number details

and creating new phone number registrations within a WhatsApp Business Account.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{WABA-ID}/phone\_numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#get-version-waba-id-phone-numbers) |
| POST | [/{Version}/{WABA-ID}/phone\_numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/phone-number-management-api#post-version-waba-id-phone-numbers) |

---

## GET /{Version}/{WABA-ID}/phone\_numbers

Retrieve all phone numbers associated with a WhatsApp Business Account, including their

status, verification details, and configuration information.

Filtering:

You can filter results using the `filtering` parameter with JSON-encoded filter conditions.

Supported filters include account\_mode, messaging\_limit\_tier, and is\_official\_business\_account.

Sorting:

Results can be sorted by creation\_time or last\_onboarded\_time in ascending or descending order.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Phone number data can be cached for short periods, but status information may change

frequently. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{WABA-ID}/phone\_numbers

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{}'
```

Select status code

200400401403404422500

---

```
{
  "multiple_phone_numbers": {
    "summary": "Multiple phone numbers with various statuses",
    "value": {
      "data": [
        {
          "id": "1906385232743451",
          "display_phone_number": "+1 631-555-5555",
          "verified_name": "Jasper's Market",
          "status": "CONNECTED",
          "quality_rating": "GREEN",
          "country_code": "US",
          "country_dial_code": "1",
          "code_verification_status": "VERIFIED",
          "unified_cert_status": "APPROVED",
          "account_mode": "LIVE",
          "host_platform": "CLOUD_API",
          "messaging_limit_tier": "TIER_1K",
          "is_official_business_account": true
        },
        {
          "id": "1913623884432103",
          "display_phone_number": "+1 631-555-5556",
          "verified_name": "Jasper's Ice Cream",
          "status": "PENDING",
          "quality_rating": "UNKNOWN",
          "country_code": "US",
          "country_dial_code": "1",
          "code_verification_status": "NOT_VERIFIED",
          "unified_cert_status": "NAME_PENDING_REVIEW",
          "account_mode": "SANDBOX",
          "host_platform": "CLOUD_API",
          "messaging_limit_tier": "TIER_50",
          "is_official_business_account": false
        }
      ],
      "paging": {
        "cursors": {
          "after": "MTAxNTExOTQ1MjAwNzI5NDE="
        }
      }
    }
  },
  "single_phone_number": {
    "summary": "Single phone number response",
    "value": {
      "data": [
        {
          "id": "1906385232743451",
          "display_phone_number": "+1 631-555-5555",
          "verified_name": "My Business",
          "status": "CONNECTED",
          "quality_rating": "GREEN"
        }
      ]
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

WhatsApp Business Account ID. This ID can be found in your WhatsApp Manager

or through the business management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned. Available fields include: id, display\_phone\_number,

verified\_name, status, quality\_rating, country\_code, country\_dial\_code,

code\_verification\_status, unified\_cert\_status, account\_mode, host\_platform,

messaging\_limit\_tier, is\_official\_business\_account

filteringstring

JSON-encoded array of filter conditions. Each filter should specify field, operator, and value.

Supported fields: account\_mode, messaging\_limit\_tier, is\_official\_business\_account

sortOne of "creation\_time.asc", "creation\_time.desc", "last\_onboarded\_time.asc", "last\_onboarded\_time.desc"

Sort field and direction. Format: field\_name.asc or field\_name.desc

Supported fields: creation\_time, last\_onboarded\_time

limitinteger [min: 1, max: 100]

Maximum number of phone numbers to return per page

afterstring

Cursor for pagination - retrieve records after this cursor

beforestring

Cursor for pagination - retrieve records before this cursor

Responses

---

Retrieve all phone numbers associated with a WhatsApp Business Account, including their

status, verification details, and configuration information.

Filtering:

You can filter results using the `filtering` parameter with JSON-encoded filter conditions.

Supported filters include account\_mode, messaging\_limit\_tier, and is\_official\_business\_account.

Sorting:

Results can be sorted by creation\_time or last\_onboarded\_time in ascending or descending order.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Phone number data can be cached for short periods, but status information may change

frequently. Implement appropriate cache invalidation strategies.

200

Successfully retrieved WhatsApp Business Account phone numbers

Content Type: application/json

Schema: WhatsAppBusinessAccountPhoneNumbersConnection

Show child attributes

---

WhatsAppBusinessAccountPhoneNumbersConnection

---

dataarray of WhatsAppBusinessAccountPhoneNumber·required

Array of phone number records

Show child attributes

---

data[]WhatsAppBusinessAccountPhoneNumber

WhatsApp Business Account phone number details and status information

Show child attributes

---

idstring·required

Unique identifier for the phone number status record

---

display\_phone\_numberstring·required

Phone number in international format for display purposes

---

verified\_namestring

Business name verified for this phone number

---

statusWhatsAppPhoneNumberStatus·required

Current status of the phone number in the WhatsApp Business Account

---

quality\_ratingWhatsAppPhoneNumberQualityRating

Quality rating for the phone number based on messaging patterns

---

country\_codestring

ISO 3166-1 alpha-2 country code

---

country\_dial\_codestring

Country dialing code

---

code\_verification\_statusWhatsAppCodeVerificationStatus

Status of phone number verification code

---

unified\_cert\_statusWhatsAppBusinessUnifiedCertStatus

Unified certification status combining business and name verification

---

account\_modeWhatsAppBusinessSandboxEligibility

Account mode indicating sandbox or live environment eligibility

---

host\_platformWhatsAppBusinessAccountHostPlatform

Platform hosting the WhatsApp Business Account

---

messaging\_limit\_tierOne of "TIER\_50", "TIER\_250", "TIER\_1K", "TIER\_10K", "TIER\_100K", "TIER\_UNLIMITED"

Current messaging limit tier for the phone number

---

is\_official\_business\_accountboolean

Whether this is an official business account

---

pagingCursorPaging

Cursor-based pagination information

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page

---

afterstring

Cursor pointing to the end of the page

---

previousstring

URL for the previous page of results

---

nextstring

URL for the next page of results

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
curl --request GET \
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{}'
```

Select status code

200400401403404422500

---

```
{
  "multiple_phone_numbers": {
    "summary": "Multiple phone numbers with various statuses",
    "value": {
      "data": [
        {
          "id": "1906385232743451",
          "display_phone_number": "+1 631-555-5555",
          "verified_name": "Jasper's Market",
          "status": "CONNECTED",
          "quality_rating": "GREEN",
          "country_code": "US",
          "country_dial_code": "1",
          "code_verification_status": "VERIFIED",
          "unified_cert_status": "APPROVED",
          "account_mode": "LIVE",
          "host_platform": "CLOUD_API",
          "messaging_limit_tier": "TIER_1K",
          "is_official_business_account": true
        },
        {
          "id": "1913623884432103",
          "display_phone_number": "+1 631-555-5556",
          "verified_name": "Jasper's Ice Cream",
          "status": "PENDING",
          "quality_rating": "UNKNOWN",
          "country_code": "US",
          "country_dial_code": "1",
          "code_verification_status": "NOT_VERIFIED",
          "unified_cert_status": "NAME_PENDING_REVIEW",
          "account_mode": "SANDBOX",
          "host_platform": "CLOUD_API",
          "messaging_limit_tier": "TIER_50",
          "is_official_business_account": false
        }
      ],
      "paging": {
        "cursors": {
          "after": "MTAxNTExOTQ1MjAwNzI5NDE="
        }
      }
    }
  },
  "single_phone_number": {
    "summary": "Single phone number response",
    "value": {
      "data": [
        {
          "id": "1906385232743451",
          "display_phone_number": "+1 631-555-5555",
          "verified_name": "My Business",
          "status": "CONNECTED",
          "quality_rating": "GREEN"
        }
      ]
    }
  }
}
```

---

## POST /{Version}/{WABA-ID}/phone\_numbers

Create a new phone number registration within a WhatsApp Business Account. This endpoint

initiates the phone number onboarding process, including verification and business name approval.

Prerequisites:

* WhatsApp Business Account must have available phone number slots
* Phone number must not be already registered with WhatsApp Business
* Business must meet WhatsApp Business API requirements
* Appropriate permissions and app review completion

Process Flow:

* Submit phone number and business name for registration
* Phone number verification code will be sent (if not pre-verified)
* Business name will be submitted for review
* Monitor status through GET endpoint until approval

Rate Limiting:

Phone number creation is subject to strict rate limits to prevent abuse.

Standard Graph API rate limits also apply.

Migration Support:

Set migrate\_phone\_number=true when migrating from on-premises API to Cloud API.

Additional validation and migration-specific logic will be applied.

### Request Syntax

**POST** /{Version}/{WABA-ID}/phone\_numbers

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "phone_number": "16315551000",
  "verified_name": "My Business Name",
  "cc": "1"
}'
```

Select status code

200400401403404409422500

---

```
{
  "successful_creation": {
    "summary": "Phone number successfully created",
    "value": {
      "id": "1906385232743451"
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

WhatsApp Business Account ID where the phone number will be added.

This ID can be found in your WhatsApp Manager or through business management APIs.

Request BodyRequired

---

Content Type: application/json

Schema: PhoneNumberCreateRequest

Show child attributes

---

PhoneNumberCreateRequest

---

phone\_numberstring·required

Phone number in E.164 format without the + prefix

---

verified\_namestring·required

Business name to be verified for this phone number

---

ccstring

Country code for the phone number

---

migrate\_phone\_numberboolean

Whether this is a phone number migration from on-premises

---

preverified\_idstring

Pre-verified phone number ID for BSP scenarios

Responses

---

Create a new phone number registration within a WhatsApp Business Account. This endpoint

initiates the phone number onboarding process, including verification and business name approval.

Prerequisites:

* WhatsApp Business Account must have available phone number slots
* Phone number must not be already registered with WhatsApp Business
* Business must meet WhatsApp Business API requirements
* Appropriate permissions and app review completion

Process Flow:

* Submit phone number and business name for registration
* Phone number verification code will be sent (if not pre-verified)
* Business name will be submitted for review
* Monitor status through GET endpoint until approval

Rate Limiting:

Phone number creation is subject to strict rate limits to prevent abuse.

Standard Graph API rate limits also apply.

Migration Support:

Set migrate\_phone\_number=true when migrating from on-premises API to Cloud API.

Additional validation and migration-specific logic will be applied.

200

Successfully created phone number registration

Content Type: application/json

Schema: PhoneNumberCreateResponse

Show child attributes

---

PhoneNumberCreateResponse

---

idstring·required

Unique identifier for the created phone number status record

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

Forbidden - Insufficient permissions or phone number limit exceeded

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

409

Conflict - Phone number already exists or is in use

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
  --url 'https://graph.facebook.com/{Version}/{WABA-ID}/phone_numbers' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "phone_number": "16315551000",
  "verified_name": "My Business Name",
  "cc": "1"
}'
```

Select status code

200400401403404409422500

---

```
{
  "successful_creation": {
    "summary": "Phone number successfully created",
    "value": {
      "id": "1906385232743451"
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
