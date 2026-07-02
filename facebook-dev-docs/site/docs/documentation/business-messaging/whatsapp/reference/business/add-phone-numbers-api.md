---
title: "WhatsApp Business Multi-Partner Solutions - Solution Creation API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/add-phone-numbers-api
---

# WhatsApp Business Multi-Partner Solutions - Solution Creation API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/solution-creation-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/solution-creation-api/v25.0.openapi.yaml/)

API for creating Multi-Partner Solutions that enable collaborative WhatsApp Business messaging

between solution owners and partner applications.

This endpoint allows solution owners to create Multi-Partner Solutions by defining permission

distribution between the owner app and a partner app. Solutions enable structured partnerships

where messaging capabilities can be delegated while maintaining proper access controls and

business boundaries.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Application-ID}/whatsapp\_business\_solution](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/add-phone-numbers-api#post-version-application-id-whatsapp-business-solution) |

---

## POST /{Version}/{Application-ID}/whatsapp\_business\_solution

Create a new Multi-Partner Solution that defines permission distribution between

a solution owner app and a partner app for WhatsApp Business messaging collaboration.

Permission Logic:

* Only one partner (owner or partner app) can have MESSAGING permission
* At least one partner must have MESSAGING permission
* Both partners automatically receive default solution partner permissions
* Empty permission arrays indicate no configurable permissions for that partner

Solution Lifecycle:

* Solutions are created with INITIATED status
* Require subsequent activation workflow through solution management
* Can be managed through Partner Dashboard or solution management APIs

Rate Limiting:

Standard Graph API rate limits apply with WhatsApp Business Management throttling.

Use appropriate retry logic with exponential backoff for rate-limited requests.

Validation:

* Partner app must be accessible and have proper capabilities
* Permission combinations are validated against business logic rules
* Solution names must meet length and content requirements

### Request Syntax

**POST** /{Version}/{Application-ID}/whatsapp\_business\_solution

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solution' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "owner_permissions": [  
    "MESSAGING"  
  ],  
  "partner_app_id": "9876543210987654",  
  "partner_permissions": [],  
  "solution_name": "Owner-Managed Messaging Solution"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_creation": {  
    "summary": "Successful solution creation",  
    "value": {  
      "solution_id": "1234567890123456"  
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

Graph API version to use for this request. Determines API behavior and available features.

Use the latest stable version for new integrations.

Application-IDstring·required

Your Facebook Application ID that will serve as the solution owner.

This application will be the primary owner of the created solution.

Request BodyRequired

---

Content Type: application/json

Schema: WhatsAppBusinessSolutionCreateRequest

Show child attributes

---

WhatsAppBusinessSolutionCreateRequest

---

owner\_permissionsarray of WhatsAppBusinessAccountConfigurablePermissionTask·required

Configurable permissions granted to the solution owner app. Currently supports

only MESSAGING permission. Use empty array if owner should not have configurable permissions.

Show child attributes

---

owner\_permissions[]WhatsAppBusinessAccountConfigurablePermissionTask

Configurable permission tasks for WhatsApp Business Account access in Multi-Partner Solutions.

Currently only MESSAGING permission is configurable through this API.

---

partner\_app\_idstring·required

Facebook Application ID of the partner app that will participate in this solution.

Must be a valid application ID accessible to the requesting entity.

---

partner\_permissionsarray of WhatsAppBusinessAccountConfigurablePermissionTask·required

Configurable permissions granted to the partner app. Currently supports

only MESSAGING permission. Use empty array if partner should not have configurable permissions.

Show child attributes

---

partner\_permissions[]WhatsAppBusinessAccountConfigurablePermissionTask

Configurable permission tasks for WhatsApp Business Account access in Multi-Partner Solutions.

Currently only MESSAGING permission is configurable through this API.

---

solution\_namestring·required

Human-readable name for the Multi-Partner Solution. Used for identification

and management purposes in partner dashboards and solution management interfaces.

Responses

---

Create a new Multi-Partner Solution that defines permission distribution between

a solution owner app and a partner app for WhatsApp Business messaging collaboration.

Permission Logic:

* Only one partner (owner or partner app) can have MESSAGING permission
* At least one partner must have MESSAGING permission
* Both partners automatically receive default solution partner permissions
* Empty permission arrays indicate no configurable permissions for that partner

Solution Lifecycle:

* Solutions are created with INITIATED status
* Require subsequent activation workflow through solution management
* Can be managed through Partner Dashboard or solution management APIs

Rate Limiting:

Standard Graph API rate limits apply with WhatsApp Business Management throttling.

Use appropriate retry logic with exponential backoff for rate-limited requests.

Validation:

* Partner app must be accessible and have proper capabilities
* Permission combinations are validated against business logic rules
* Solution names must meet length and content requirements

200

Multi-Partner Solution created successfully. The solution is created with INITIATED status

and can be managed through subsequent API calls or Partner Dashboard.

Content Type: application/json

Schema: WhatsAppBusinessSolutionCreateResponse

Show child attributes

---

WhatsAppBusinessSolutionCreateResponse

---

solution\_idstring·required

Unique identifier for the newly created Multi-Partner Solution.

Use this ID for subsequent solution management operations.

400

Bad Request - Invalid parameters provided. This includes validation failures

for permission logic, malformed IDs, or constraint violations.

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

Human-readable error message describing the issue

---

typestring·required

Error type classification for programmatic handling

---

codeinteger·required

Numeric error code for specific error identification

---

error\_subcodeinteger

More specific error subcode when applicable

---

fbtrace\_idstring

Facebook trace ID for debugging and support purposes

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

Unauthorized - Authentication required or invalid access token provided.

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

Human-readable error message describing the issue

---

typestring·required

Error type classification for programmatic handling

---

codeinteger·required

Numeric error code for specific error identification

---

error\_subcodeinteger

More specific error subcode when applicable

---

fbtrace\_idstring

Facebook trace ID for debugging and support purposes

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

Forbidden - Insufficient permissions or missing required capabilities.

App may lack whatsapp\_business\_management permission or required granular scopes.

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

Human-readable error message describing the issue

---

typestring·required

Error type classification for programmatic handling

---

codeinteger·required

Numeric error code for specific error identification

---

error\_subcodeinteger

More specific error subcode when applicable

---

fbtrace\_idstring

Facebook trace ID for debugging and support purposes

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

Not Found - Application ID not found or not accessible to the requesting entity.

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

Human-readable error message describing the issue

---

typestring·required

Error type classification for programmatic handling

---

codeinteger·required

Numeric error code for specific error identification

---

error\_subcodeinteger

More specific error subcode when applicable

---

fbtrace\_idstring

Facebook trace ID for debugging and support purposes

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

Unprocessable Entity - Request is well-formed but contains business logic violations.

This includes cases where both partners have MESSAGING permission or neither has it.

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

Human-readable error message describing the issue

---

typestring·required

Error type classification for programmatic handling

---

codeinteger·required

Numeric error code for specific error identification

---

error\_subcodeinteger

More specific error subcode when applicable

---

fbtrace\_idstring

Facebook trace ID for debugging and support purposes

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

Internal Server Error - Unexpected server-side error occurred.

These errors are typically transient and should be retried.

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

Human-readable error message describing the issue

---

typestring·required

Error type classification for programmatic handling

---

codeinteger·required

Numeric error code for specific error identification

---

error\_subcodeinteger

More specific error subcode when applicable

---

fbtrace\_idstring

Facebook trace ID for debugging and support purposes

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
  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solution' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "owner_permissions": [  
    "MESSAGING"  
  ],  
  "partner_app_id": "9876543210987654",  
  "partner_permissions": [],  
  "solution_name": "Owner-Managed Messaging Solution"  
}'
```

Select status code

200400401403404422500

---

```
{  
  "successful_creation": {  
    "summary": "Successful solution creation",  
    "value": {  
      "solution_id": "1234567890123456"  
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
