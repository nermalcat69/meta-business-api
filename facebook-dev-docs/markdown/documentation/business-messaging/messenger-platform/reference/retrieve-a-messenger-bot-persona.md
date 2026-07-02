---
title: "Page Status API"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-messenger-bot-persona
---

# Page Status API

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-status-api/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-status-api/v26.0.0.openapi.yaml/)

Fetch integrity and business messaging status information for a Facebook Page.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{page\_id}/page\_status](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-messenger-bot-persona#get-page-id-page-status) |

---

## GET /{page\_id}/page\_status

### Request Syntax

**GET** /{page\_id}/page\_status

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/page_status' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The page ID for the call status API

Responses

---

200

Integrity and business messaging status for the page

Content Type: application/json

Schema: PageStatusResponse

Show child attributes

---

PageStatusResponse

---

idstring·required

Page ID

---

timestampinteger·required

The time when this response was generated

---

statusOne of "warning", "restricted", "ok", "suspended"·required

The overall status of the page

---

violationsarray of PageStatusViolation

The violations that are affecting the page status

Show child attributes

---

violations[]PageStatusViolation

Show child attributes

---

typestring·required

The type of this violation. Usually, this is linked to the action that triggered the violation.

---

descriptionstring·required

Static string description

---

urlstring·required

URL to the help page for this violation

---

severityOne of "LOW", "MEDIUM", "HIGH"

The severity of this violation

---

restrictionsarray of PageStatusRestriction

The restrictions that are affecting the page status

Show child attributes

---

restrictions[]PageStatusRestriction

Show child attributes

---

featureOne of "page\_create\_group", "page\_edit\_category", "page\_invite", "page\_merge", "page\_messaging", "page\_messaging\_api", "page\_name\_change", "page\_online\_event", "page\_publish", "post\_media", "unknown"·required

The features restricted as a result of some violation

---

descriptionstring·required

A human-readable description of the feature limit

---

applied\_timeinteger·required

The time when this restriction was applied

---

expiration\_timeinteger

The time when this restriction will expire

---

violation\_typearray of string

The violation type that triggered this restriction

Show child attributes

---

violation\_type[]string

---

recommended\_actionsarray of PageStatusRecommendedAction

The recommended actions that can be taken to improve the page status

Show child attributes

---

recommended\_actions[]PageStatusRecommendedAction

Show child attributes

---

typeOne of "LEARN\_MORE", "FILE\_APPEAL", "SUPPORT\_TICKET"·required

The type of recommended action, e.g. FILE\_APPEAL, LEARN\_MORE, etc.

---

urlstring·required

The action URL for this recommended action.

---

violation\_typearray of string·required

The violation type that triggered this recommended action.

Show child attributes

---

violation\_type[]string

---

action\_eventsarray of PageStatusActionEvent

The statuses of the recommended actions that have been taken

Show child attributes

---

action\_events[]PageStatusActionEvent

Show child attributes

---

typeOne of "LEARN\_MORE", "FILE\_APPEAL", "SUPPORT\_TICKET"·required

The type of recommended action, e.g. FILE\_APPEAL, LEARN\_MORE, etc.

---

statusOne of "OPEN", "PENDING", "CLOSED"·required

The status of this recommended action, e.g. PENDING, COMPLETED, etc.

---

created\_timeinteger·required

The time when this recommended action was created

---

updated\_timeinteger·required

The time when this recommended action was updated

---

violation\_typearray of string

The violation type that triggered this recommended action.

Show child attributes

---

violation\_type[]string

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/page_status' \  
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
