---
title: "Application Required Actions"
source_url: https://developers.facebook.com/documentation/rest-api/reference/application-required-actions
---

# Application Required Actions

Version

1.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/rest-api/reference/application-required-actions/v1.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/rest-api/reference/application-required-actions/v1.0.0.openapi.yaml/)

## Base URL

|
|  |
| https://api.facebook.com/application |

## Endpoints

|
|  |
| GET | [/{app\_id}/required\_actions](https://developers.facebook.com/documentation/rest-api/reference/application-required-actions#get-app-id-required-actions) |

---

## GET /{app\_id}/required\_actions

Required Actions Response

### Request Syntax

**GET** /{app\_id}/required\_actions

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://api.facebook.com/application/{app_id}/required_actions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Header Parameters

---

X-API-Version"1.0.0"

Path Parameters

---

app\_idinteger·required

Application ID

Query Parameters

---

statusesarray of One of "completed", "in\_progress", "in\_review", "past\_due"

Array of statuses to filter by if provided.

Responses

---

Required Actions Response

200

The required actions requested.

Content Type: application/json

Schema: object

Show child attributes

---

required\_actionarray of object

List of required actions

Show child attributes

---

required\_action[]object

Show child attributes

---

idinteger·required

ID of the action.

---

titlestring·required

Title of the compliance required action.

---

descriptionstring

Description of the compliance required action

---

due\_dateinteger

Due date of the compliance required action

---

statusOne of "completed", "in\_progress", "in\_review", "past\_due"

Status of the compliance required action.

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://api.facebook.com/application/{app_id}/required_actions' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

## Authentication

|
|  |
| **Scheme** | **Type** | **Location** |
| OAuthToken\_\_Authorization | HTTP Bearer | Header: `Authorization` |

### Usage Examples

OAuthToken\_\_Authorization:

Include `Authorization: Bearer your-token-here` in request headers

### Global Authentication Requirements

All endpoints require:

OAuthToken\_\_Authorization
