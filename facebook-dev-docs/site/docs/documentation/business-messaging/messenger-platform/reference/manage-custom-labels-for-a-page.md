---
title: "Add a label to a thread for a Messenger page"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-labels-for-a-page
---

# Add a label to a thread for a Messenger page

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/add-a-label-to-a-thread-for-a-messenger-page/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/add-a-label-to-a-thread-for-a-messenger-page/v26.0.0.openapi.yaml/)

Associate and remove labels for a Messenger page thread.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| POST | [/{thread\_label\_id}/label](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-labels-for-a-page#post-thread-label-id-label) |
| DELETE | [/{thread\_label\_id}/label](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-labels-for-a-page#delete-thread-label-id-label) |

---

## POST /{thread\_label\_id}/label

### Request Syntax

**POST** /{thread\_label\_id}/label

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{thread_label_id}/label' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

thread\_label\_idstring·required

Thread label ID

Request BodyRequired

---

Content Type: application/json

Schema: PageUserMessageThreadLabelLabelRequest

Show child attributes

---

PageUserMessageThreadLabelLabelRequest

---

userstring·required

The PSID of the user to associate with the thread label

Responses

---

200

Response indicating whether the thread label was associated

Content Type: application/json

Schema: PageUserMessageThreadLabelLabelResponse

Show child attributes

---

PageUserMessageThreadLabelLabelResponse

---

successboolean·required

Indicates whether the operation was successful

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
  --url 'https://graph.facebook.com/v26.0/{thread_label_id}/label' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## DELETE /{thread\_label\_id}/label

### Request Syntax

**DELETE** /{thread\_label\_id}/label

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/v26.0/{thread_label_id}/label' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

thread\_label\_idstring·required

Thread label ID

Query Parameters

---

userstring·required

The PSID of the user to remove from the thread label

Responses

---

200

Response indicating whether the thread label was removed

Content Type: application/json

Schema: PageUserMessageThreadLabelLabelResponse

Show child attributes

---

PageUserMessageThreadLabelLabelResponse

---

successboolean·required

Indicates whether the operation was successful

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
curl --request DELETE \  
  --url 'https://graph.facebook.com/v26.0/{thread_label_id}/label' \  
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
