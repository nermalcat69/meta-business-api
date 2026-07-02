---
title: "Manage custom labels for a page"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-user-settings-for-a-messenger-page
---

# Manage custom labels for a page

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-labels-for-a-page/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-labels-for-a-page/v26.0.0.openapi.yaml/)

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{id}/custom\_labels](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-user-settings-for-a-messenger-page#get-id-custom-labels) |
| POST | [/{id}/custom\_labels](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/manage-custom-user-settings-for-a-messenger-page#post-id-custom-labels) |

---

## GET /{id}/custom\_labels

### Request Syntax

**GET** /{id}/custom\_labels

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{id}/custom_labels' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

idinteger·required

The page ID

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

A paginated list of custom labels for the page

Content Type: application/json

Schema: object

Show child attributes

---

dataarray of PageCustomLabelsResponse·required

This array represents the page of data returned.

Show child attributes

---

data[]PageCustomLabelsResponse

Show child attributes

---

idstring

The ID of the custom label

---

namestring

The name of the custom label

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
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{id}/custom_labels' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{id}/custom\_labels

### Request Syntax

**POST** /{id}/custom\_labels

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{id}/custom_labels' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

idinteger·required

The page ID

Request BodyRequired

---

Content Type: application/json

Schema: PageCustomLabelsRequest

Show child attributes

---

PageCustomLabelsRequest

---

page\_label\_namestring

The name of the page label to create

Content Type: application/x-www-form-urlencoded

Schema: PageCustomLabelsRequest

Show child attributes

---

PageCustomLabelsRequest

---

page\_label\_namestring

The name of the page label to create

Responses

---

200

The newly created custom label for the page

Content Type: application/json

Schema: PageCustomLabelsResponse

Show child attributes

---

PageCustomLabelsResponse

---

idstring

The ID of the custom label

---

namestring

The name of the custom label

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
  --url 'https://graph.facebook.com/v26.0/{id}/custom_labels' \  
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
