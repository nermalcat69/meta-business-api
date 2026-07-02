---
title: "WhatsApp Business Management API - Owned WhatsApp Business Accounts"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-accounts-api
---

# WhatsApp Business Management API - Owned WhatsApp Business Accounts

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts/v25.0.openapi.yaml/)

API for retrieving WhatsApp Business Accounts owned by a specific business.

This endpoint allows businesses to retrieve comprehensive information about their

owned WhatsApp Business Accounts, including account details, status, and configuration.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Business-ID}/owned\_whatsapp\_business\_accounts](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/whatsapp-business-accounts-api#get-version-business-id-owned-whatsapp-business-accounts) |

---

## GET /{Version}/{Business-ID}/owned\_whatsapp\_business\_accounts

Retrieve WhatsApp Business Accounts owned by the specified business. This endpoint

provides comprehensive information about all WABAs owned by the business, including

account details, configuration, and status information.

Use Cases:

* Retrieve all WhatsApp Business Accounts owned by a business
* Filter accounts by business type
* Find specific accounts by ID
* Monitor business portfolio of WhatsApp Business Accounts
* Manage account access and permissions across multiple WABAs

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Account information can be cached for short periods, but status and configuration

may change frequently. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Business-ID}/owned\_whatsapp\_business\_accounts

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/owned_whatsapp_business_accounts' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_accounts": {  
    "summary": "Multiple owned WhatsApp Business Accounts",  
    "value": {  
      "data": [  
        {  
          "id": "104996122399160",  
          "name": "Lucky Shrub",  
          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",  
          "timezone_id": "1"  
        },  
        {  
          "id": "102290129340398",  
          "name": "Test WhatsApp Business Account",  
          "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",  
          "timezone_id": "1"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB",  
          "before": "QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3"  
        }  
      }  
    }  
  },  
  "single_account": {  
    "summary": "Single owned WhatsApp Business Account",  
    "value": {  
      "data": [  
        {  
          "id": "104996122399160",  
          "name": "Lucky Shrub",  
          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",  
          "timezone_id": "1"  
        }  
      ]  
    }  
  },  
  "empty_result": {  
    "summary": "No owned accounts found",  
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

Your Business ID. This ID represents the business portfolio that owns the

WhatsApp Business Accounts and can be found in your Business Manager settings.

Query Parameters

---

business\_typearray of WhatsAppBusinessType

Filter accounts by business type. Can specify multiple types as comma-separated values.

Use this to filter between enterprise and small-medium business accounts.

afterstring

Cursor for forward pagination. Use the cursor from the previous response

to get the next page of results.

firstinteger [min: 1, max: 100]

Number of results to return in forward pagination. Maximum value is 100.

Use with 'after' cursor for forward pagination.

beforestring

Cursor for backward pagination. Use the cursor from the previous response

to get the previous page of results.

lastinteger [min: 1, max: 100]

Number of results to return in backward pagination. Maximum value is 100.

Use with 'before' cursor for backward pagination.

findstring

Find a specific WhatsApp Business Account by ID within the owned accounts.

Use this to quickly locate a specific account.

Responses

---

Retrieve WhatsApp Business Accounts owned by the specified business. This endpoint

provides comprehensive information about all WABAs owned by the business, including

account details, configuration, and status information.

Use Cases:

* Retrieve all WhatsApp Business Accounts owned by a business
* Filter accounts by business type
* Find specific accounts by ID
* Monitor business portfolio of WhatsApp Business Accounts
* Manage account access and permissions across multiple WABAs

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Account information can be cached for short periods, but status and configuration

may change frequently. Implement appropriate cache invalidation strategies.

200

Successfully retrieved owned WhatsApp Business Accounts

Content Type: application/json

Schema: WhatsAppBusinessAccountsConnection

Show child attributes

---

WhatsAppBusinessAccountsConnection

---

dataarray of WhatsAppBusinessAccount·required

Array of owned WhatsApp Business Account records

Show child attributes

---

data[]WhatsAppBusinessAccount

WhatsApp Business Account owned by the business

Show child attributes

---

idstring·required

Unique identifier for the WhatsApp Business Account

---

namestring·required

Human-readable name of the WhatsApp Business Account

---

message\_template\_namespacestring·required

Namespace identifier for message templates associated with this account

---

timezone\_idstring·required

Timezone identifier for the WhatsApp Business Account

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

URL for the next page of results

---

previousstring

URL for the previous page of results

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/owned_whatsapp_business_accounts' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_accounts": {  
    "summary": "Multiple owned WhatsApp Business Accounts",  
    "value": {  
      "data": [  
        {  
          "id": "104996122399160",  
          "name": "Lucky Shrub",  
          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",  
          "timezone_id": "1"  
        },  
        {  
          "id": "102290129340398",  
          "name": "Test WhatsApp Business Account",  
          "message_template_namespace": "ba30dd89_2ebd_41e4_b805_f2c05ae04cc9",  
          "timezone_id": "1"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjBrRUs5QVJuUDhDSmZARMlc2dXRYNXBmMjMtRUt3SmFlbk9PRk43azdiN1VQaW1HcnRkejFzZATNoNDdTdGVWMDhjamVvY25HWnI4WjIzX0hYSk40NHhB",  
          "before": "QVFIUnpPVXRnY3BPN19rTVItOG51T291YURjV3BaeXRXU29adDVreS04ekhSNl9YWTlfdmN3SHlyTEk1a2FRdnlWanBqM1FuQm1uZAHhfYl9UMTNCYjM3MWV3"  
        }  
      }  
    }  
  },  
  "single_account": {  
    "summary": "Single owned WhatsApp Business Account",  
    "value": {  
      "data": [  
        {  
          "id": "104996122399160",  
          "name": "Lucky Shrub",  
          "message_template_namespace": "58e6d318_b627_4112_b9c7_2961197553ea",  
          "timezone_id": "1"  
        }  
      ]  
    }  
  },  
  "empty_result": {  
    "summary": "No owned accounts found",  
    "value": {  
      "data": []  
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
