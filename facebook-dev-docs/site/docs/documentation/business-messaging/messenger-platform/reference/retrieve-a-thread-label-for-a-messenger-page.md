---
title: "Retrieve a Messenger bot persona"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-thread-label-for-a-messenger-page
---

# Retrieve a Messenger bot persona

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-messenger-bot-persona/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-messenger-bot-persona/v26.0.0.openapi.yaml/)

Retrieve and delete a Messenger bot persona by ID.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{persona\_id}](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-thread-label-for-a-messenger-page#get-persona-id) |
| DELETE | [/{persona\_id}](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-a-thread-label-for-a-messenger-page#delete-persona-id) |

---

## GET /{persona\_id}

### Request Syntax

**GET** /{persona\_id}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{persona_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

persona\_idstring·required

Messenger Platform Persona ID

Query Parameters

---

fieldsstring

Fields selected for return, separated by comma. More details in section 'Fields'(<https://developers.facebook.com/docs/graph-api/overview>). Note only field selection (with nesting) is supported, but not all the features of Field Expansion(<https://developers.facebook.com/docs/graph-api/guides/field-expansion/>), e.g. limit, offset, etc.

Responses

---

200

Details of a Messenger bot persona

Content Type: application/json

Schema: PersonaResponse

Show child attributes

---

PersonaResponse

---

idstring·required

The ID of the persona

---

namestring

The display name of the persona

---

profile\_picture\_urlstring

The URL of the persona profile picture

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
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{persona_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## DELETE /{persona\_id}

### Request Syntax

**DELETE** /{persona\_id}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/v26.0/{persona_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

persona\_idstring·required

Messenger Platform Persona ID

Responses

---

200

Delete a Messenger bot persona

Content Type: application/json

Schema: PersonaDeleteResponse

Show child attributes

---

PersonaDeleteResponse

---

successboolean·required

Whether the persona was successfully deleted

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
curl --request DELETE \  
  --url 'https://graph.facebook.com/v26.0/{persona_id}' \  
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
