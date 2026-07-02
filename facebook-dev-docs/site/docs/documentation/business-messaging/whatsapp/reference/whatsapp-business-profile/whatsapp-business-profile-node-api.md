---
title: "WhatsApp Business Pre-Verified Phone Number Partners API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-profile/whatsapp-business-profile-node-api
---

# WhatsApp Business Pre-Verified Phone Number Partners API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/whatsapp-business-pre-verified-phone-number-partners-api/v25.0.openapi.yaml/)

API for retrieving partner businesses associated with a WhatsApp Business Pre-Verified Phone Number.

This endpoint allows authorized applications to retrieve the list of partner businesses

that have been granted access to a specific pre-verified phone number.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Pre-Verified-Phone-Number-ID}/partners](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-profile/whatsapp-business-profile-node-api#get-version-pre-verified-phone-number-id-partners) |

---

## GET /{Version}/{Pre-Verified-Phone-Number-ID}/partners

Retrieve the list of partner businesses that have been granted access to a specific

WhatsApp Business Pre-Verified Phone Number.

Use Cases:

* Monitor partner business relationships and access permissions
* Verify which businesses have access to shared pre-verified phone numbers
* Retrieve partner business information for operational purposes
* Validate partnership configurations before business operations

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Partner information can be cached for moderate periods, but partnership relationships

may change. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Pre-Verified-Phone-Number-ID}/partners

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/partners' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_partners": {  
    "summary": "Multiple partner businesses",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Partner Business Solutions Inc"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Global Commerce Partners LLC"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",  
          "before": "MAZDZD"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/partners?after=MTAxNTExOTQ1MjAwNzI5NDE%3D"  
      }  
    }  
  },  
  "single_partner": {  
    "summary": "Single partner business",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Partner Business Solutions Inc"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",  
          "before": "MAZDZD"  
        }  
      }  
    }  
  },  
  "empty_partners": {  
    "summary": "No partner businesses found",  
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

Pre-Verified-Phone-Number-IDstring·required

Your Pre-Verified Phone Number ID. This ID is provided when the pre-verified phone number

is created and can be found in your WhatsApp Business Account management interface.

Query Parameters

---

fieldsstring

Comma-separated list of Business node fields to include in the response. If not specified,

default fields will be returned (id, name).

limitinteger [min: 1, max: 100]

Maximum number of partner businesses to return per page. Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use the 'after' cursor from a previous response to get the next page.

beforestring

Cursor for pagination. Use the 'before' cursor from a previous response to get the previous page.

Responses

---

Retrieve the list of partner businesses that have been granted access to a specific

WhatsApp Business Pre-Verified Phone Number.

Use Cases:

* Monitor partner business relationships and access permissions
* Verify which businesses have access to shared pre-verified phone numbers
* Retrieve partner business information for operational purposes
* Validate partnership configurations before business operations

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Partner information can be cached for moderate periods, but partnership relationships

may change. Implement appropriate cache invalidation strategies.

200

Successfully retrieved partner businesses for the pre-verified phone number

Content Type: application/json

Schema: WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse

Show child attributes

---

WhatsAppBusinessPreVerifiedPhoneNumberPartnersResponse

---

dataarray of BusinessPartner·required

List of partner businesses with access to the pre-verified phone number

Show child attributes

---

data[]BusinessPartner

Business entity that has partner access to the pre-verified phone number.

Returns standard Business node objects. Use the fields parameter to request

additional Business node fields beyond the defaults.

Show child attributes

---

idstring·required

Unique identifier for the partner business

---

namestring·required

Name of the partner business

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

Graph API endpoint URL for the next page of results

---

previousstring

Graph API endpoint URL for the previous page of results

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

Not Found - Pre-Verified Phone Number ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Pre-Verified-Phone-Number-ID}/partners' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_partners": {  
    "summary": "Multiple partner businesses",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Partner Business Solutions Inc"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "Global Commerce Partners LLC"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",  
          "before": "MAZDZD"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/partners?after=MTAxNTExOTQ1MjAwNzI5NDE%3D"  
      }  
    }  
  },  
  "single_partner": {  
    "summary": "Single partner business",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Partner Business Solutions Inc"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDE=",  
          "before": "MAZDZD"  
        }  
      }  
    }  
  },  
  "empty_partners": {  
    "summary": "No partner businesses found",  
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
