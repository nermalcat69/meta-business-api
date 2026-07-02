---
title: "Retrieve personas for a Messenger page"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes
---

# Retrieve personas for a Messenger page

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-personas-for-a-messenger-page/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/retrieve-personas-for-a-messenger-page/v26.0.0.openapi.yaml/)

Retrieve and create personas for a Messenger page.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{page\_id}/personas](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes#get-page-id-personas) |
| POST | [/{page\_id}/personas](https://developers.facebook.com/documentation/business-messaging/messenger-platform/error-codes#post-page-id-personas) |

---

## GET /{page\_id}/personas

### Request Syntax

**GET** /{page\_id}/personas

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/personas' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

Business Facebook Page ID

Query Parameters

---

fieldsstring

Fields selected for return, separated by comma. More details in section 'Fields'(<https://developers.facebook.com/docs/graph-api/overview>). Note only field selection (with nesting) is supported, but not all the features of Field Expansion(<https://developers.facebook.com/docs/graph-api/guides/field-expansion/>), e.g. limit, offset, etc.

beforestring

If specified, a page of data immediately before this cursor will be returned.

afterstring

If specified, a page of data immediately after this cursor will be returned.

limitinteger

This is the maximum number of objects that may be returned. A query may return fewer than the value of limit due to filtering. Do not depend on the number of results being fewer than the limit value to indicate that your query reached the end of the list of data, use the absence of next instead. For example, if you set limit to 10 and 9 results are returned, there may be more data available, but one item was removed due to privacy filtering. In all cases, the API returns the correct pagination links.

Responses

---

200

Paginated list of active personas for a Messenger page

Content Type: application/json

Schema: object

Show child attributes

---

dataarray of PagePersonasResponse·required

This array represents the page of data returned.

Show child attributes

---

data[]PagePersonasResponse

Show child attributes

---

idstring·required

The ID of the persona

---

namestring

The display name of the persona

---

profile\_picture\_urlstring

The URL of the persona profile picture

---

pagingobject

Pagination metadata

Show child attributes

---

cursorsobject·required

Cursors to the next and previous pages

Show child attributes

---

beforestring

This is the cursor that points to the start of the page of data that has been returned.

---

afterstring

This is the cursor that points to the end of the page of data that has been returned.

---

previousstring

The API that will return the previous page of data. If not included, this is the first page of data.

---

nextstring

The API that will return the next page of data. If not included, this is the last page of data. Due to how pagination works with visibility and privacy, it is possible that a page may be empty but contain a next paging link. Stop paging when the next link no longer appears.

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
  --url 'https://graph.facebook.com/v26.0/{page_id}/personas' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{page\_id}/personas

### Request Syntax

**POST** /{page\_id}/personas

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/personas' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

Business Facebook Page ID

Query Parameters

---

namestring

The display name of the persona. Alternative to request body — we recommend using the request body for POST requests.

profile\_picture\_urlstring

The URL of the persona profile picture. Alternative to request body — we recommend using the request body for POST requests.

Request BodyRequired

---

Content Type: application/json

Schema: PagePersonasPostRequest

Show child attributes

---

PagePersonasPostRequest

---

namestring

The display name of the persona (optional when provided via query param)

---

profile\_picture\_urlstring

The URL of the persona profile picture (optional when provided via query param)

Responses

---

200

Create a new Messenger bot persona for a page

Content Type: application/json

Schema: PagePersonasPostResponse

Show child attributes

---

PagePersonasPostResponse

---

idstring·required

The ID of the newly created persona

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
  --url 'https://graph.facebook.com/v26.0/{page_id}/personas' \  
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
