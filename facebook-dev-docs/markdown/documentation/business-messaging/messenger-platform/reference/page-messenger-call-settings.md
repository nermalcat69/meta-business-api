---
title: "Page Messenger Call Permissions"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-settings
---

# Page Messenger Call Permissions

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-permissions/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-permissions/v26.0.0.openapi.yaml/)

Retrieve call permissions for a Messenger Business Platform page and a page-scoped user.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{page\_id}/messenger\_call\_permissions](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-settings#get-page-id-messenger-call-permissions) |

---

## GET /{page\_id}/messenger\_call\_permissions

### Request Syntax

**GET** /{page\_id}/messenger\_call\_permissions

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messenger_call_permissions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The page ID for the messenger call permissions check

Query Parameters

---

psidstring·required

Page-scoped ID of the user to check permissions for

Responses

---

200

Retrieve messenger call permissions

Content Type: application/json

Schema: PageMessengerCallPermissionsResponse

Show child attributes

---

PageMessengerCallPermissionsResponse

---

dataarray of PageMessengerCallPermissionsPayload·required

Array containing call permissions data (Graph API edge format)

Show child attributes

---

data[]PageMessengerCallPermissionsPayload

Show child attributes

---

permissionobject·required

Permission status for business-initiated calls

Show child attributes

---

statusOne of "HAS\_PERMISSION", "NO\_PERMISSION"·required

Permission status (HAS\_PERMISSION or NO\_PERMISSION)

---

expiration\_timeinteger

Unix timestamp when permission expires (only present if HAS\_PERMISSION)

---

actionsarray of object

Available actions and their constraints

Show child attributes

---

actions[]object

Show child attributes

---

action\_nameOne of "send\_call\_permission\_request", "start\_call"·required

Name of the action (send\_call\_permission\_request or start\_call)

---

can\_performboolean·required

Whether the action can be performed

---

limitsarray of object

Rate limit information for the action

Show child attributes

---

limits[]object

Show child attributes

---

time\_periodstring·required

Time period for the limit (e.g., PT24H)

---

max\_allowedinteger·required

Maximum allowed requests in the time period

---

current\_usageinteger·required

Current usage count in the time period

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
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messenger_call_permissions' \  
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
