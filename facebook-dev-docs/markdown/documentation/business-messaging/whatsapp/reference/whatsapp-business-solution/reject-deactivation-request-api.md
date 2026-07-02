---
title: "WhatsApp Business Multi-Partner Solutions - Access Token API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api
---

# WhatsApp Business Multi-Partner Solutions - Access Token API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/access-token-api/v25.0.openapi.yaml/)

API for retrieving granular BISU (Business Integration System User) access tokens for Multi-Partner Solution partners.

This endpoint allows solution partners to obtain granular access tokens that provide secure, scoped access to WhatsApp Business Accounts shared with their Multi-Partner Solution.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Solution-ID}/access\_token](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-solution/reject-deactivation-request-api#get-version-solution-id-access-token) |

---

## GET /{Version}/{Solution-ID}/access\_token

Retrieve a granular BISU access token for accessing customer business resources through the Multi-Partner Solution. The token provides secure, scoped access to WhatsApp Business Accounts that have been shared with the solution.

Use Cases:

* Obtain secure access tokens for partner applications to access customer business resources
* Enable multi-tenant partner architectures with dedicated tokens per customer business
* Support secure API operations on shared WhatsApp Business Accounts
* Implement proper security boundaries between different customer businesses

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Token Management:

Access tokens are time-limited and should be refreshed before expiration. Store tokens securely and implement proper token rotation strategies.

### Request Syntax

**GET** /{Version}/{Solution-ID}/access\_token

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/access_token' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "active_token": {  
    "summary": "Active granular BISU access token",  
    "value": {  
      "access_token": "YOUR_GRANULAR_BISU_ACCESS_TOKEN",  
      "expires_at": 1735689600  
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

Solution-IDstring·required

Your Multi-Partner Solution ID. This ID is provided when you create the solution

and can be found in your Partner Dashboard or through solution management APIs.

Query Parameters

---

business\_idstring·required

The customer business ID for which you want to retrieve an access token. This must be

a business that has shared a WhatsApp Business Account with your Multi-Partner Solution.

Responses

---

Retrieve a granular BISU access token for accessing customer business resources through the Multi-Partner Solution. The token provides secure, scoped access to WhatsApp Business Accounts that have been shared with the solution.

Use Cases:

* Obtain secure access tokens for partner applications to access customer business resources
* Enable multi-tenant partner architectures with dedicated tokens per customer business
* Support secure API operations on shared WhatsApp Business Accounts
* Implement proper security boundaries between different customer businesses

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Token Management:

Access tokens are time-limited and should be refreshed before expiration. Store tokens securely and implement proper token rotation strategies.

200

Successfully retrieved granular BISU access token

Content Type: application/json

Schema: WhatsAppBusinessSolutionAccessToken

Show child attributes

---

WhatsAppBusinessSolutionAccessToken

---

access\_tokenstring·required

Granular BISU access token for accessing customer business resources

---

expires\_atinteger (int64)·required

Unix timestamp indicating when the access token expires

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

Not Found - Solution ID or business ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Solution-ID}/access_token' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "active_token": {  
    "summary": "Active granular BISU access token",  
    "value": {  
      "access_token": "YOUR_GRANULAR_BISU_ACCESS_TOKEN",  
      "expires_at": 1735689600  
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
