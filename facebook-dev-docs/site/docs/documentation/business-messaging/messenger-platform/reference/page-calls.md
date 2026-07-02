---
title: "Messenger/IGv2 Page Moderate Conversations"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-calls
---

# Messenger/IGv2 Page Moderate Conversations

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger/igv2-page-moderate-conversations/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/messenger/igv2-page-moderate-conversations/v26.0.0.openapi.yaml/)

Moderate Messenger conversations by blocking, unblocking, banning, unbanning, or moving a user to spam.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| POST | [/{page\_id}/moderate\_conversations](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-calls#post-page-id-moderate-conversations) |

---

## POST /{page\_id}/moderate\_conversations

### Request Syntax

**POST** /{page\_id}/moderate\_conversations

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/moderate_conversations' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The Facebook Page ID

Query Parameters

---

user\_idsstring

JSON-encoded array of user objects with id field (e.g., [{"id":123}]). Alternative to request body — we recommend using the request body for POST requests.

actionsstring

JSON-encoded array of actions (e.g., ["block\_user","unblock\_user"]). Alternative to request body — we recommend using the request body for POST requests.

Request BodyRequired

---

Content Type: application/json

Schema: PageModerateConversationsRequest

Show child attributes

---

PageModerateConversationsRequest

---

user\_idsarray of PageModerateConversationsUserId·required

List of Universal Scoped IDs to moderate (required, minimum 1, maximum 10). Supports both Messenger PSIDs and IG Scoped IDs. Each object contains an "id" field.

Show child attributes

---

user\_ids[]PageModerateConversationsUserId

Show child attributes

---

idMust be one of: string, integer·required

The Universal Scoped ID (Messenger PSID or IG Scoped ID) of the user to moderate.

Show child attributes

---

string

User ID as a string.

---

integer

User ID as an integer.

---

actionsarray of One of "ban\_user", "block\_user", "move\_to\_spam", "unban\_user", "unblock\_user"·required

List of moderation actions to perform (required, minimum 1, maximum 2). Valid values: "ban\_user", "block\_user", "move\_to\_spam", "unban\_user", "unblock\_user".

Show child attributes

---

actions[]One of "ban\_user", "block\_user", "move\_to\_spam", "unban\_user", "unblock\_user"

Responses

---

200

Response indicating success or failure of the moderation action

Content Type: application/json

Schema: PageModerateConversationsResponse

Show child attributes

---

PageModerateConversationsResponse

---

successboolean·required

Indicates whether the moderation action was successful.

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
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/moderate_conversations' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
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
