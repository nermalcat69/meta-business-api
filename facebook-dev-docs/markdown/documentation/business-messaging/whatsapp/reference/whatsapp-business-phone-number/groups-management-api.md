---
title: "WhatsApp Business Cloud API - Groups Management API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/groups-management-api
---

# WhatsApp Business Cloud API - Groups Management API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/groups-management-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/groups-management-api/v23.0.openapi.yaml/)

Create and manage WhatsApp Business groups with approval settings.

Returns invite links for adding participants to groups.

Retrieve active group lists with pagination support.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/groups](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/groups-management-api#get-version-phone-number-id-groups) |
| POST | [/{Version}/{Phone-Number-ID}/groups](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/groups-management-api#post-version-phone-number-id-groups) |

---

## GET /{Version}/{Phone-Number-ID}/groups

Retrieve a list of active groups for a given business phone number

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/groups

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/groups' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Header Parameters

---

User-Agentstring

The user agent string identifying the client software making the request.

Authorizationstring·required

Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Phone-Number-IDstring·required

Business phone number ID

Query Parameters

---

limitinteger [min: 1, max: 1024]

Number of groups to fetch in the request

afterstring

Cursor that points to the end of a page of data

beforestring

Cursor that points to the beginning of a page of data

Responses

---

Retrieve a list of active groups for a given business phone number

200

List of active groups

Content Type: application/json

Schema: object

Show child attributes

---

dataobject

Show child attributes

---

groupsarray of object

Show child attributes

---

groups[]object

Show child attributes

---

idstring

Group ID

---

subjectstring

Group subject

---

created\_atstring

Group creation timestamp

---

pagingPagingInfo

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Before cursor

---

afterstring

After cursor

---

previousstring

Previous page URL

---

nextstring

Next page URL

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/groups' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{Version}/{Phone-Number-ID}/groups

Create a new group and get an invite link

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/groups

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/groups' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401500

---

```
{  
  "messaging_product": "\"whatsapp\"",  
  "request_id": "\"106540352242922\""  
}
```

Header Parameters

---

User-Agentstring

The user agent string identifying the client software making the request.

Authorizationstring·required

Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Phone-Number-IDstring·required

Business phone number ID

Request BodyRequired

---

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_product"whatsapp"·required

Messaging product

---

subjectstring·required

Group subject. Maximum 128 characters. Whitespace is trimmed.

---

descriptionstring

Group description. Maximum 2048 characters.

---

join\_approval\_modeOne of "approval\_required", "auto\_approve"

Indicates if WhatsApp users who click the invitation link can join the group with or without being approved first.

* approval\_required: WhatsApp users must be approved via join request before they can access the group
* auto\_approve: WhatsApp users can join the group without approval

Responses

---

Create a new group and get an invite link

200

Group creation request submitted successfully

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_productstring

---

request\_idstring

Group creation request ID

400

Bad Request - Invalid request parameters

Content Type: application/json

Schema: ErrorResponse

Show child attributes

---

ErrorResponse

---

errorErrorObject·required

Show child attributes

---

messagestring·required

Human-readable description of the error

---

typestring·required

Error type classification

---

codeinteger·required

Numeric error code

401

Unauthorized - Invalid or missing access token

Content Type: application/json

Schema: ErrorResponse

Show child attributes

---

ErrorResponse

---

errorErrorObject·required

Show child attributes

---

messagestring·required

Human-readable description of the error

---

typestring·required

Error type classification

---

codeinteger·required

Numeric error code

500

Internal Server Error - An unexpected error occurred

Content Type: application/json

Schema: ErrorResponse

Show child attributes

---

ErrorResponse

---

errorErrorObject·required

Show child attributes

---

messagestring·required

Human-readable description of the error

---

typestring·required

Error type classification

---

codeinteger·required

Numeric error code

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/groups' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401500

---

```
{  
  "messaging_product": "\"whatsapp\"",  
  "request_id": "\"106540352242922\""  
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
