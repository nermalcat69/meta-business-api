---
title: "WhatsApp Business Message History Events API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/user/assigned-whatsapp-business-accounts-api
---

# WhatsApp Business Message History Events API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/message-history/whatsapp-business-message-history-events-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/message-history/whatsapp-business-message-history-events-api/v25.0.openapi.yaml/)

API for retrieving WhatsApp Business Message History Events and delivery status occurrences.

This endpoint allows businesses to retrieve detailed message delivery status events

for specific message history entries, including delivery status transitions,

timestamps, and application information.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Message-History-ID}/events](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/user/assigned-whatsapp-business-accounts-api#get-version-message-history-id-events) |

---

## GET /{Version}/{Message-History-ID}/events

Retrieve paginated message delivery status events for a specific message history entry,

including delivery status occurrences, timestamps, and application information.

Use Cases:

* Track detailed message delivery status events and transitions
* Monitor delivery status occurrence timestamps
* Retrieve application information for delivery events
* Debug message delivery issues and status changes

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Message history events can be cached for short periods, but delivery status events

may change frequently. Implement appropriate cache invalidation strategies.

Pagination:

This endpoint supports cursor-based pagination. Use the `after` and `before` cursors

from the response to navigate through results.

### Request Syntax

**GET** /{Version}/{Message-History-ID}/events

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Message-History-ID}/events' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "message_history_events": {  
    "summary": "Message history events with delivery status occurrences",  
    "value": {  
      "data": [  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",  
          "node": {  
            "id": "2345678901234567",  
            "delivery_status": "SENT",  
            "occurrence_timestamp": 1640995200,  
            "status_timestamp": 1640995205,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        },  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",  
          "node": {  
            "id": "3456789012345678",  
            "delivery_status": "DELIVERED",  
            "occurrence_timestamp": 1640995260,  
            "status_timestamp": 1640995265,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        },  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDM=",  
          "node": {  
            "id": "4567890123456789",  
            "delivery_status": "READ",  
            "occurrence_timestamp": 1640995320,  
            "status_timestamp": 1640995325,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDM=",  
          "before": "MTAxNTExOTQ1MjAwNzI5NDE="  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/events?after=MTAxNTExOTQ1MjAwNzI5NDM"  
      }  
    }  
  },  
  "filtered_by_status": {  
    "summary": "Message history events filtered by delivery status",  
    "value": {  
      "data": [  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",  
          "node": {  
            "id": "3456789012345678",  
            "delivery_status": "DELIVERED",  
            "occurrence_timestamp": 1640995260,  
            "status_timestamp": 1640995265,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDI=",  
          "before": "MTAxNTExOTQ1MjAwNzI5NDI="  
        }  
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

Message-History-IDstring·required

Your WhatsApp Business Message History ID. This ID is provided when you retrieve

message history and can be found through message history APIs.

Query Parameters

---

delivery\_statusWhatsAppMessageDeliveryStatus

Filter results by specific delivery status. When provided,

only events with this delivery status will be returned.

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (cursor, node{id,delivery\_status,occurrence\_timestamp}).

Available fields: cursor, node{id,delivery\_status,error\_description,occurrence\_timestamp,status\_timestamp,application,webhook\_update\_state,webhook\_uri}

limitinteger [min: 1, max: 100]

Maximum number of message history events to return per page.

Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use this to get the next page of results.

This value comes from the `paging.cursors.after` field in previous responses.

beforestring

Cursor for pagination. Use this to get the previous page of results.

This value comes from the `paging.cursors.before` field in previous responses.

Responses

---

Retrieve paginated message delivery status events for a specific message history entry,

including delivery status occurrences, timestamps, and application information.

Use Cases:

* Track detailed message delivery status events and transitions
* Monitor delivery status occurrence timestamps
* Retrieve application information for delivery events
* Debug message delivery issues and status changes

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Message history events can be cached for short periods, but delivery status events

may change frequently. Implement appropriate cache invalidation strategies.

Pagination:

This endpoint supports cursor-based pagination. Use the `after` and `before` cursors

from the response to navigate through results.

200

Successfully retrieved WhatsApp message history events

Content Type: application/json

Schema: MessageHistoryEventsResponse

Show child attributes

---

MessageHistoryEventsResponse

---

dataarray of WhatsAppMessageHistoryEventsEdge

Array of message history event edges

Show child attributes

---

data[]WhatsAppMessageHistoryEventsEdge

Edge containing message delivery status occurrence with pagination cursor

Show child attributes

---

cursorstring

Pagination cursor for this edge

---

nodeWhatsAppBusinessMessageDeliveryStatusOccurrence·required

Message delivery status occurrence with detailed event information

Show child attributes

---

idstring·required

Unique identifier for the message delivery status occurrence

---

delivery\_statusWhatsAppMessageDeliveryStatus·required

Message delivery status

---

error\_descriptionstring

Error description if the delivery encountered an error

---

occurrence\_timestampinteger (int64)·required

Unix timestamp when the delivery status occurrence happened

---

status\_timestampinteger (int64)

Unix timestamp when the status was recorded

---

applicationApplicationNode

Meta application that processed the delivery status event

Show child attributes

---

idstring

Unique identifier for the Meta application

---

namestring

Name of the Meta application

---

webhook\_update\_stateOne of "ERROR", "SUCCESS"

State of the webhook update for this delivery status event

---

webhook\_uristring (uri)

URI of the webhook that received this delivery status update

---

pagingPaginationInfo

Pagination information for navigating through results

Show child attributes

---

cursorsobject

Pagination cursors for navigation

Show child attributes

---

beforestring

Cursor for the previous page of results

---

afterstring

Cursor for the next page of results

---

previousstring (uri)

URL for the previous page of results

---

nextstring (uri)

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

Not Found - Message History ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Message-History-ID}/events' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "message_history_events": {  
    "summary": "Message history events with delivery status occurrences",  
    "value": {  
      "data": [  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDE=",  
          "node": {  
            "id": "2345678901234567",  
            "delivery_status": "SENT",  
            "occurrence_timestamp": 1640995200,  
            "status_timestamp": 1640995205,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        },  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",  
          "node": {  
            "id": "3456789012345678",  
            "delivery_status": "DELIVERED",  
            "occurrence_timestamp": 1640995260,  
            "status_timestamp": 1640995265,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        },  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDM=",  
          "node": {  
            "id": "4567890123456789",  
            "delivery_status": "READ",  
            "occurrence_timestamp": 1640995320,  
            "status_timestamp": 1640995325,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDM=",  
          "before": "MTAxNTExOTQ1MjAwNzI5NDE="  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/events?after=MTAxNTExOTQ1MjAwNzI5NDM"  
      }  
    }  
  },  
  "filtered_by_status": {  
    "summary": "Message history events filtered by delivery status",  
    "value": {  
      "data": [  
        {  
          "cursor": "MTAxNTExOTQ1MjAwNzI5NDI=",  
          "node": {  
            "id": "3456789012345678",  
            "delivery_status": "DELIVERED",  
            "occurrence_timestamp": 1640995260,  
            "status_timestamp": 1640995265,  
            "application": {  
              "id": "9876543210987654",  
              "name": "WhatsApp Business API Client"  
            }  
          }  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "MTAxNTExOTQ1MjAwNzI5NDI=",  
          "before": "MTAxNTExOTQ1MjAwNzI5NDI="  
        }  
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
