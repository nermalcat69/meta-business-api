---
title: "WhatsApp Business Accounts API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api
---

# WhatsApp Business Accounts API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-accounts-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-accounts-api/v23.0.openapi.yaml/)

API for managing WhatsApp Business Accounts under a business portfolio.

This endpoint allows businesses to retrieve and create WhatsApp Business Accounts (WABAs)

for messaging and business communication purposes. WABAs can be associated

with the specified business portfolio and configured with the provided parameters.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Business-ID}/whatsapp\_business\_accounts](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api#get-version-business-id-whatsapp-business-accounts) |
| POST | [/{Version}/{Business-ID}/whatsapp\_business\_accounts](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-partner-onboarding-to-mm-lite-api#post-version-business-id-whatsapp-business-accounts) |

---

## GET /{Version}/{Business-ID}/whatsapp\_business\_accounts

Retrieve a list of WhatsApp Business Accounts owned by the specified business portfolio.

This endpoint provides information about WhatsApp Business Accounts that are owned

by the business, including their configuration, status, and core properties. This

corresponds to the GraphBusinessWhatsAppBusinessAccountsEdge functionality.

Use Cases:

* Retrieve list of owned WhatsApp Business Accounts
* Monitor WABA status and configuration
* Verify WABA details for business integrations
* Manage business WhatsApp messaging setups

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

WABA information can be cached for moderate periods, but status information may change

frequently. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Business-ID}/whatsapp\_business\_accounts

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "multiple_accounts": {  
    "summary": "Multiple WhatsApp Business Accounts",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Primary Business WABA",  
          "account_review_status": "APPROVED",  
          "currency": "USD",  
          "country": "US",  
          "timezone_id": "1",  
          "business_verification_status": "VERIFIED",  
          "is_enabled_for_insights": true,  
          "message_template_namespace": "business_namespace_123"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Secondary Business WABA",  
          "account_review_status": "PENDING",  
          "currency": "EUR",  
          "country": "DE",  
          "timezone_id": "5",  
          "business_verification_status": "PENDING",  
          "is_enabled_for_insights": false,  
          "message_template_namespace": "business_namespace_456"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjNpUWpVWmRBd0Rn"  
        },  
        "next": "https://graph.facebook.com/v23.0/1234567890/whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"  
      }  
    }  
  },  
  "single_account": {  
    "summary": "Single WhatsApp Business Account",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "My Business WABA",  
          "account_review_status": "APPROVED",  
          "currency": "USD",  
          "country": "US",  
          "timezone_id": "1",  
          "business_verification_status": "VERIFIED",  
          "is_enabled_for_insights": true,  
          "message_template_namespace": "business_namespace_123"  
        }  
      ]  
    }  
  },  
  "empty_response": {  
    "summary": "No WhatsApp Business Accounts",  
    "value": {  
      "data": []  
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

Your business portfolio ID. This ID can be found in the Meta Business Suite

or through business management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (id, name, currency, timezone\_id).

Available fields: id, name, account\_review\_status, purchase\_order\_number, currency, timezone\_id, business\_verification\_status, country, on\_behalf\_of\_business\_info, is\_enabled\_for\_insights, message\_template\_namespace

business\_typearray of One of "ENTERPRISE", "SMB"

Filter results by WhatsApp Business Account type

limitinteger [min: 1, max: 100]

Maximum number of WhatsApp Business Accounts to return per page. Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use this to get the next page of results.

beforestring

Cursor for pagination. Use this to get the previous page of results.

findstring

Find a specific WhatsApp Business Account by ID

Responses

---

Retrieve a list of WhatsApp Business Accounts owned by the specified business portfolio.

This endpoint provides information about WhatsApp Business Accounts that are owned

by the business, including their configuration, status, and core properties. This

corresponds to the GraphBusinessWhatsAppBusinessAccountsEdge functionality.

Use Cases:

* Retrieve list of owned WhatsApp Business Accounts
* Monitor WABA status and configuration
* Verify WABA details for business integrations
* Manage business WhatsApp messaging setups

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

WABA information can be cached for moderate periods, but status information may change

frequently. Implement appropriate cache invalidation strategies.

200

Successfully retrieved WhatsApp Business Accounts

Content Type: application/json

Schema: WhatsAppBusinessAccountsResponse

Show child attributes

---

WhatsAppBusinessAccountsResponse

---

dataarray of WhatsAppBusinessAccount

Array of WhatsApp Business Accounts

Show child attributes

---

data[]WhatsAppBusinessAccount

WhatsApp Business Account details and configuration

Show child attributes

---

idstring·required

Unique identifier for the WhatsApp Business Account

---

namestring·required

Human-readable name of the WhatsApp Business Account

---

account\_review\_statusAccountReviewStatus

Review status of the WhatsApp Business Account

---

purchase\_order\_numberstring

Purchase order number associated with the account

---

currencystring

Currency code for the WABA (ISO 4217 format)

---

timezone\_idstring

Timezone identifier for the WABA

---

business\_verification\_statusBusinessVerificationStatus

Verification status of the business associated with the WABA

---

countrystring

Country code where the WABA is registered

---

on\_behalf\_of\_business\_infoOnBehalfOfBusinessInfo

Information about the business on whose behalf the WABA operates

Show child attributes

---

idstring

Business ID

---

namestring

Business name

---

is\_enabled\_for\_insightsboolean

Whether insights are enabled for this WABA

---

message\_template\_namespacestring

Namespace for message templates

---

pagingCursorPaging

Cursor-based pagination information

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page of data

---

afterstring

Cursor pointing to the end of the page of data

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
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "multiple_accounts": {  
    "summary": "Multiple WhatsApp Business Accounts",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Primary Business WABA",  
          "account_review_status": "APPROVED",  
          "currency": "USD",  
          "country": "US",  
          "timezone_id": "1",  
          "business_verification_status": "VERIFIED",  
          "is_enabled_for_insights": true,  
          "message_template_namespace": "business_namespace_123"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Secondary Business WABA",  
          "account_review_status": "PENDING",  
          "currency": "EUR",  
          "country": "DE",  
          "timezone_id": "5",  
          "business_verification_status": "PENDING",  
          "is_enabled_for_insights": false,  
          "message_template_namespace": "business_namespace_456"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjNpUWpVWmRBd0Rn"  
        },  
        "next": "https://graph.facebook.com/v23.0/1234567890/whatsapp_business_accounts?after=QVFIUjNpUWpVWmRBd0Rn"  
      }  
    }  
  },  
  "single_account": {  
    "summary": "Single WhatsApp Business Account",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "My Business WABA",  
          "account_review_status": "APPROVED",  
          "currency": "USD",  
          "country": "US",  
          "timezone_id": "1",  
          "business_verification_status": "VERIFIED",  
          "is_enabled_for_insights": true,  
          "message_template_namespace": "business_namespace_123"  
        }  
      ]  
    }  
  },  
  "empty_response": {  
    "summary": "No WhatsApp Business Accounts",  
    "value": {  
      "data": []  
    }  
  }  
}
```

---

## POST /{Version}/{Business-ID}/whatsapp\_business\_accounts

Create a new WhatsApp Business Account under the specified business portfolio.

This endpoint creates a new WABA with the provided configuration and associates it

with the business portfolio. The account will be set up with the specified payment

method and business settings.

Rate Limiting:

Standard Graph API rate limits apply. Account creation may have additional

rate limits to prevent abuse.

Business Logic:

* Account name must be unique within the business portfolio
* Payment method must be valid and active
* Business must have appropriate permissions for WABA creation
* Created account will be in pending state until verification is complete

### Request Syntax

**POST** /{Version}/{Business-ID}/whatsapp\_business\_accounts

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "name": "My Business WhatsApp Account",  
  "currency": "USD",  
  "timezone_id": 1  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "successful_creation": {  
    "summary": "Successful WABA creation",  
    "value": {  
      "id": "1234567890123456",  
      "payment_account_id": "9876543210987654"  
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

Your business portfolio ID. This ID can be found in the Meta Business Suite

or through business management APIs.

Request BodyRequired

---

Content Type: application/json

Schema: WhatsAppBusinessAccountCreationRequest

Show child attributes

---

WhatsAppBusinessAccountCreationRequest

---

namestring·required

Human-readable name for the WhatsApp Business Account

---

primary\_funding\_idstring

ID of the primary funding source (credit card or extended credit)

---

purchase\_order\_numberstring

Purchase order number for billing reference

---

currencystring

Currency code for billing (ISO 4217 format)

---

timezone\_idinteger

Timezone ID for the account

---

business\_typeWhatsAppBusinessType

Type of WhatsApp Business Account

---

on\_behalf\_of\_business\_idstring

Business ID when creating account on behalf of another business

Responses

---

Create a new WhatsApp Business Account under the specified business portfolio.

This endpoint creates a new WABA with the provided configuration and associates it

with the business portfolio. The account will be set up with the specified payment

method and business settings.

Rate Limiting:

Standard Graph API rate limits apply. Account creation may have additional

rate limits to prevent abuse.

Business Logic:

* Account name must be unique within the business portfolio
* Payment method must be valid and active
* Business must have appropriate permissions for WABA creation
* Created account will be in pending state until verification is complete

200

Successfully created WhatsApp Business Account

Content Type: application/json

Schema: WhatsAppBusinessAccountCreationResponse

Show child attributes

---

WhatsAppBusinessAccountCreationResponse

---

idstring·required

Unique identifier for the created WhatsApp Business Account

---

payment\_account\_idstring·required

ID of the associated payment account for billing

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
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/whatsapp_business_accounts' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "name": "My Business WhatsApp Account",  
  "currency": "USD",  
  "timezone_id": 1  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "successful_creation": {  
    "summary": "Successful WABA creation",  
    "value": {  
      "id": "1234567890123456",  
      "payment_account_id": "9876543210987654"  
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
