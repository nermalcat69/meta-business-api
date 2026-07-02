---
title: "WhatsApp Business Multi-Partner Solutions - Application Solutions API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/solution-creation-api
---

# WhatsApp Business Multi-Partner Solutions - Application Solutions API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-solutions-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-solutions-api/v25.0.openapi.yaml/)

API for retrieving WhatsApp Business Multi-Partner Solutions associated with a specific application.

This endpoint allows applications to query all WhatsApp Business Solutions that they own or

partner with, providing comprehensive information about solution status, permissions, and

configuration details. This is essential for managing solution lifecycle and understanding

current partnership relationships.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Application-ID}/whatsapp\_business\_solutions](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/solution-creation-api#get-version-application-id-whatsapp-business-solutions) |

---

## GET /{Version}/{Application-ID}/whatsapp\_business\_solutions

Retrieve all WhatsApp Business Multi-Partner Solutions associated with the specified application.

This includes both solutions owned by the application and solutions where the application

acts as a partner.

Use Cases:

* Retrieve all solutions for an application's portfolio management
* Filter solutions by ownership role (owner vs partner)
* Monitor solution lifecycle and status changes across multiple solutions
* Verify solution configuration before business onboarding operations
* Check pending approval requests and status transitions

Filtering:

Use the `role` parameter to filter solutions by the application's relationship:

* `OWNER`: Only solutions owned by this application
* `PARTNER`: Only solutions where this application is a partner
* No role parameter: All solutions (both owned and partnered)

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Solution details can be cached for short periods, but status information may change

frequently during transitions. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Application-ID}/whatsapp\_business\_solutions

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solutions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_solutions": {  
    "summary": "Application with multiple solutions (owner and partner)",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "E-commerce Integration Solution",  
          "status": "ACTIVE",  
          "status_for_pending_request": "NONE",  
          "owner_app": {  
            "id": "9876543210987654",  
            "name": "Solution Partner App"  
          },  
          "owner_permissions": [  
            "MANAGE",  
            "DEVELOP",  
            "MANAGE_TEMPLATES"  
          ]  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Customer Support Solution",  
          "status": "DRAFT",  
          "status_for_pending_request": "PENDING_ACTIVATION"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/whatsapp_business_solution?after=MTAxNTExOTQ1MjAwNzI5NDE"  
      }  
    }  
  },  
  "owner_only_solutions": {  
    "summary": "Application as owner only (with role=OWNER filter)",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "E-commerce Integration Solution",  
          "status": "ACTIVE",  
          "status_for_pending_request": "NONE"  
        }  
      ],  
      "paging": {  
        "cursors": {}  
      }  
    }  
  },  
  "empty_results": {  
    "summary": "No solutions found for application",  
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

Application-IDstring·required

Your Meta Application ID. This ID can be found in your App Dashboard and represents

the application for which you want to retrieve associated Multi-Partner Solutions.

Query Parameters

---

roleWhatsAppBusinessSolutionApplicationRole

Filter solutions by the application's relationship role. If not specified,

all solutions (both owned and partnered) will be returned.

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (name, status, status\_for\_pending\_request).

Available fields: id, name, status, status\_for\_pending\_request, owner\_app, owner\_permissions

limitinteger [min: 1, max: 100]

Maximum number of solutions to return in a single request. Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use this to get the next page of results.

beforestring

Cursor for pagination. Use this to get the previous page of results.

Responses

---

Retrieve all WhatsApp Business Multi-Partner Solutions associated with the specified application.

This includes both solutions owned by the application and solutions where the application

acts as a partner.

Use Cases:

* Retrieve all solutions for an application's portfolio management
* Filter solutions by ownership role (owner vs partner)
* Monitor solution lifecycle and status changes across multiple solutions
* Verify solution configuration before business onboarding operations
* Check pending approval requests and status transitions

Filtering:

Use the `role` parameter to filter solutions by the application's relationship:

* `OWNER`: Only solutions owned by this application
* `PARTNER`: Only solutions where this application is a partner
* No role parameter: All solutions (both owned and partnered)

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Solution details can be cached for short periods, but status information may change

frequently during transitions. Implement appropriate cache invalidation strategies.

200

Successfully retrieved Multi-Partner Solutions for the application

Content Type: application/json

Schema: WhatsAppBusinessSolutionsResponse

Show child attributes

---

WhatsAppBusinessSolutionsResponse

---

dataarray of WhatsAppBusinessSolution

Array of Multi-Partner Solutions

Show child attributes

---

data[]WhatsAppBusinessSolution

Multi-Partner Solution details and configuration

Show child attributes

---

idstring·required

Unique identifier for the Multi-Partner Solution

---

namestring·required

Human-readable name of the Multi-Partner Solution

---

statusWhatsAppBusinessSolutionStatus·required

Current effective status of the Multi-Partner Solution

---

status\_for\_pending\_requestWhatsAppBusinessSolutionPendingStatus·required

Status of any pending solution status transition requests

---

owner\_appApplicationNode

Meta application that owns the Multi-Partner Solution

Show child attributes

---

idstring

Unique identifier for the Meta application

---

namestring

Name of the Meta application

---

owner\_permissionsarray of WhatsAppBusinessAccountPermissionTask

List of WhatsApp Business Account permissions granted to the solution owner

Show child attributes

---

owner\_permissions[]WhatsAppBusinessAccountPermissionTask

Granular permission tasks for WhatsApp Business Account access

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

previousstring

Graph API endpoint URL for the previous page of data

---

nextstring

Graph API endpoint URL for the next page of data

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

Not Found - Application ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Application-ID}/whatsapp_business_solutions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_solutions": {  
    "summary": "Application with multiple solutions (owner and partner)",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "E-commerce Integration Solution",  
          "status": "ACTIVE",  
          "status_for_pending_request": "NONE",  
          "owner_app": {  
            "id": "9876543210987654",  
            "name": "Solution Partner App"  
          },  
          "owner_permissions": [  
            "MANAGE",  
            "DEVELOP",  
            "MANAGE_TEMPLATES"  
          ]  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Customer Support Solution",  
          "status": "DRAFT",  
          "status_for_pending_request": "PENDING_ACTIVATION"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/whatsapp_business_solution?after=MTAxNTExOTQ1MjAwNzI5NDE"  
      }  
    }  
  },  
  "owner_only_solutions": {  
    "summary": "Application as owner only (with role=OWNER filter)",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "E-commerce Integration Solution",  
          "status": "ACTIVE",  
          "status_for_pending_request": "NONE"  
        }  
      ],  
      "paging": {  
        "cursors": {}  
      }  
    }  
  },  
  "empty_results": {  
    "summary": "No solutions found for application",  
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
