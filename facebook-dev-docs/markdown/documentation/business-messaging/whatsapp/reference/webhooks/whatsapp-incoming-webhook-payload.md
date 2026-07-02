---
title: "WhatsApp Business - Assigned WhatsApp Business Accounts API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/webhooks/whatsapp-incoming-webhook-payload
---

# WhatsApp Business - Assigned WhatsApp Business Accounts API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/user/assigned-whatsapp-business-accounts-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/user/assigned-whatsapp-business-accounts-api/v25.0.openapi.yaml/)

API for retrieving WhatsApp Business Accounts that have been assigned to a specific user.

This endpoint allows apps to retrieve WhatsApp Business Accounts that are assigned to

specific users.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{User-ID}/assigned\_whatsapp\_business\_accounts](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/webhooks/whatsapp-incoming-webhook-payload#get-version-user-id-assigned-whatsapp-business-accounts) |

---

## GET /{Version}/{User-ID}/assigned\_whatsapp\_business\_accounts

Retrieve WhatsApp Business Accounts that have been assigned to a specific user.

This endpoint provides information about account assignments, permissions, and

current status corresponding to the GraphAssignedWhatsAppBusinessAccountsEdge node.

Use Cases:

* Retrieve all WhatsApp Business Accounts assigned to a user
* Check user permissions for specific accounts
* Monitor account assignment status and changes
* Validate user access before performing business operations

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Assignment information can be cached for short periods, but permissions and status

may change frequently. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{User-ID}/assigned\_whatsapp\_business\_accounts

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{User-ID}/assigned_whatsapp_business_accounts' \  
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
    "summary": "User with multiple assigned accounts",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Primary Business Account"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Secondary Business Account"  
        }  
      ]  
    }  
  },  
  "single_account": {  
    "summary": "User with single assigned account",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Business Account"  
        }  
      ]  
    }  
  },  
  "no_accounts": {  
    "summary": "User with no assigned accounts",  
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

User-IDstring·required

The user ID for whom to retrieve assigned WhatsApp Business Accounts.

This must be a valid user ID within your solution or partnership.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (id, name).

Available fields: id, name

limitinteger [min: 1, max: 100]

Maximum number of accounts to return per page. Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use this to get the next page of results.

beforestring

Cursor for pagination. Use this to get the previous page of results.

Responses

---

Retrieve WhatsApp Business Accounts that have been assigned to a specific user.

This endpoint provides information about account assignments, permissions, and

current status corresponding to the GraphAssignedWhatsAppBusinessAccountsEdge node.

Use Cases:

* Retrieve all WhatsApp Business Accounts assigned to a user
* Check user permissions for specific accounts
* Monitor account assignment status and changes
* Validate user access before performing business operations

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Assignment information can be cached for short periods, but permissions and status

may change frequently. Implement appropriate cache invalidation strategies.

200

Successfully retrieved assigned WhatsApp Business Accounts

Content Type: application/json

Schema: AssignedAccountsResponse

Show child attributes

---

AssignedAccountsResponse

---

dataarray of AssignedWhatsAppBusinessAccount·required

List of assigned WhatsApp Business Accounts

Show child attributes

---

data[]AssignedWhatsAppBusinessAccount

WhatsApp Business Account assigned to a user

Show child attributes

---

idstring·required

Unique identifier for the WhatsApp Business Account

---

namestring

Display name of the WhatsApp Business Account

---

pagingPagingInfo

Pagination information for the response

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor for the previous page

---

afterstring

Cursor for the next page

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

Not Found - User ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{User-ID}/assigned_whatsapp_business_accounts' \  
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
    "summary": "User with multiple assigned accounts",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Primary Business Account"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Secondary Business Account"  
        }  
      ]  
    }  
  },  
  "single_account": {  
    "summary": "User with single assigned account",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Business Account"  
        }  
      ]  
    }  
  },  
  "no_accounts": {  
    "summary": "User with no assigned accounts",  
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
