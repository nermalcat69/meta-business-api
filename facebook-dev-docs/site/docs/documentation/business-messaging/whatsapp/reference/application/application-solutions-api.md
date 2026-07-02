---
title: "Meta Graph API - Application Connected Client Businesses"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-solutions-api
---

# Meta Graph API - Application Connected Client Businesses

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-connected-client-businesses/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-connected-client-businesses/v25.0.openapi.yaml/)

API for retrieving connected client businesses associated with a Meta application.

This endpoint allows applications to retrieve information about businesses that have

established client connections through the application. This is essential for managing

business relationships and understanding client business configurations.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Application-ID}/connected\_client\_businesses](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/application/application-solutions-api#get-version-application-id-connected-client-businesses) |

---

## GET /{Version}/{Application-ID}/connected\_client\_businesses

Retrieve a list of client businesses connected to the specified application.

Use Cases:

* Monitor application-business client relationships
* Verify connected business configurations
* Retrieve business connection status and details
* Manage client business access and permissions

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Business connection data can be cached for moderate periods, but status information may change.

Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Application-ID}/connected\_client\_businesses

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Application-ID}/connected_client_businesses' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_businesses": {  
    "summary": "Multiple connected client businesses",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Example Client Business A"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Example Client Business B"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjNpUWpVWmRBd0Rn"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"  
      }  
    }  
  },  
  "single_business": {  
    "summary": "Single connected client business",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Example Client Business"  
        }  
      ]  
    }  
  },  
  "empty_response": {  
    "summary": "No connected client businesses",  
    "value": {  
      "data": []  
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

Your Meta Application ID. This ID is provided when you create the application

and can be found in your App Dashboard.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (id, name).

Available fields: id, name

limitinteger [min: 1, max: 100]

Maximum number of connected client businesses to return per page. Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use this to get the next page of results.

beforestring

Cursor for pagination. Use this to get the previous page of results.

Responses

---

Retrieve a list of client businesses connected to the specified application.

Use Cases:

* Monitor application-business client relationships
* Verify connected business configurations
* Retrieve business connection status and details
* Manage client business access and permissions

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Business connection data can be cached for moderate periods, but status information may change.

Implement appropriate cache invalidation strategies.

200

Successfully retrieved connected client businesses

Content Type: application/json

Schema: ConnectedClientBusinessesResponse

Show child attributes

---

ConnectedClientBusinessesResponse

---

dataarray of ConnectedClientBusiness

Array of connected client businesses

Show child attributes

---

data[]ConnectedClientBusiness

Connected client business information and configuration

Show child attributes

---

idstring·required

Unique identifier for the connected client business

---

namestring·required

Name of the connected client business

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Application-ID}/connected_client_businesses' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_businesses": {  
    "summary": "Multiple connected client businesses",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Example Client Business A"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Example Client Business B"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjNpUWpVWmRBd0Rn"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890/connected_client_businesses?after=QVFIUjNpUWpVWmRBd0Rn"  
      }  
    }  
  },  
  "single_business": {  
    "summary": "Single connected client business",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Example Client Business"  
        }  
      ]  
    }  
  },  
  "empty_response": {  
    "summary": "No connected client businesses",  
    "value": {  
      "data": []  
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
