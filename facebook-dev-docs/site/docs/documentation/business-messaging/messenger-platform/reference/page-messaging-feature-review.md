---
title: "Page Calls"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messaging-feature-review
---

# Page Calls

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-calls/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-calls/v26.0.0.openapi.yaml/)

Handle call actions for Messenger Business Platform pages.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| POST | [/{page\_id}/calls](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messaging-feature-review#post-page-id-calls) |

---

## POST /{page\_id}/calls

### Request Syntax

**POST** /{page\_id}/calls

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/calls' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The page ID for the messenger call

Request BodyRequired

---

Content Type: application/json

Schema: PageCallsRequest

Show child attributes

---

PageCallsRequest

---

platformOne of "instagram", "messenger", "whatsapp"

Platform for the messaging service

---

call\_idstring

Unique identifier for the call

---

actionOne of "accept", "connect", "media\_update", "reject", "terminate"·required

The call action to perform (accept, connect, terminate, etc.)

---

tostring

Target user for the call

---

sessionobject

Session payload with SDP information

Show child attributes

---

sdp\_typestring·required

Type of SDP (Session Description Protocol)

---

sdpstring·required

Session Description Protocol data

---

tracksarray of object

Media track configurations (max 4 items)

Show child attributes

---

tracks[]object

Show child attributes

---

msidstring·required

Media stream identifier

---

labelOne of "default\_audio", "default\_video", "screen\_audio", "screen\_video"·required

Media track label type

---

statusOne of "disabled", "enabled"·required

Media track status

---

from\_versioninteger

Current version number of the peer connection

---

to\_versioninteger

New version number of the peer connection

Responses

---

200

Response containing the result of the call action and session information

Content Type: application/json

Schema: PageCallsResponse

Show child attributes

---

PageCallsResponse

---

successboolean·required

Indicates if the call action was processed successfully

---

call\_idstring

Unique identifier for the call conference

---

sessionobject

Session data containing SDP information

Show child attributes

---

sdp\_responseobject·required

SDP response data

Show child attributes

---

sdpstring·required

Session Description Protocol data

---

sdp\_typestring·required

Type of SDP (Session Description Protocol)

---

sdp\_renegotiationobject

SDP renegotiation data for call updates

Show child attributes

---

sdpstring·required

Renegotiation Session Description Protocol data

---

sdp\_typestring·required

Type of renegotiation SDP (Session Description Protocol)

400

Bad request

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

403

Forbidden

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/calls' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

## Authentication

|
|  |
| **Scheme** | **Type** | **Location** |
| OAuthToken\_\_access\_token | API Key | Query: `access_token` |
| OAuthToken\_\_oauth\_token | API Key | Query: `oauth_token` |
| OAuthToken\_\_Authorization | HTTP Bearer | Header: `Authorization` |

### Usage Examples

OAuthToken\_\_access\_token:

Include `access_token=your-api-key-here` in query parameters

OAuthToken\_\_oauth\_token:

Include `oauth_token=your-api-key-here` in query parameters

OAuthToken\_\_Authorization:

Include `Authorization: Bearer your-token-here` in request headers

### Global Authentication Requirements

All endpoints require:

OAuthToken\_\_access\_token AND OAuthToken\_\_oauth\_token AND OAuthToken\_\_Authorization
