---
title: "WhatsApp Business Cloud API - Groups Join Requests API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api
---

# WhatsApp Business Cloud API - Groups Join Requests API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-join-requests-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-join-requests-api/v23.0.openapi.yaml/)

The Groups API gives you simple functions to control groups through their lifecycle.

When you create a new group, an invite link is created for inviting participants to the group.

Since you cannot manually add participants to the group, simply send a message with your invite link to WhatsApp users who you would like to join the group.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{group\_id}/join\_requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api#get-version-group-id-join-requests) |
| POST | [/{Version}/{group\_id}/join\_requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api#post-version-group-id-join-requests) |
| DELETE | [/{Version}/{group\_id}/join\_requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api#delete-version-group-id-join-requests) |

---

## GET /{Version}/{group\_id}/join\_requests

Get a list of open join requests for a group

### Request Syntax

**GET** /{Version}/{group\_id}/join\_requests

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Header Parameters

---

User-Agentstring

The user agent string identifying the client software making the request.

Authorizationstring·required

Bearer token for API authentication. This should be a valid access token obtained through the appropriate OAuth flow or system user token.

Path Parameters

---

Versionstring·required

group\_idstring·required

Group ID

Responses

---

Get a list of open join requests for a group

200

List of join requests

Content Type: application/json

Schema: object

Show child attributes

---

dataarray of object

Show child attributes

---

data[]object

Show child attributes

---

join\_request\_idstring

Join request ID

---

wa\_idstring

WhatsApp user ID

---

creation\_timestampinteger

Unix timestamp indicating when the join request was created

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{Version}/{group\_id}/join\_requests

Approve one or more join requests

### Request Syntax

**POST** /{Version}/{group\_id}/join\_requests

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\""  
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

group\_idstring·required

Group ID

Request BodyRequired

---

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_product"whatsapp"·required

---

join\_requestsarray of string·required

Array of join request IDs to approve

Show child attributes

---

join\_requests[]string

Join request ID

Responses

---

Approve one or more join requests

200

Join requests approval response

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_productstring

---

approved\_join\_requestsarray of string

Show child attributes

---

approved\_join\_requests[]string

ID of approved join request

---

failed\_join\_requestsarray of object

Show child attributes

---

failed\_join\_requests[]object

Show child attributes

---

join\_request\_idstring

---

errorsarray of Error

Show child attributes

---

errors[]Error

Show child attributes

---

codeinteger

Error code

---

messagestring

Error message

---

titlestring

Error title

---

error\_dataobject

Show child attributes

---

detailsstring

Error details

---

errorsarray of Error

Show child attributes

---

errors[]Error

Show child attributes

---

codeinteger

Error code

---

messagestring

Error message

---

titlestring

Error title

---

error\_dataobject

Show child attributes

---

detailsstring

Error details

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\""  
}
```

---

## DELETE /{Version}/{group\_id}/join\_requests

Reject one or more join requests

### Request Syntax

**DELETE** /{Version}/{group\_id}/join\_requests

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\""  
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

group\_idstring·required

Group ID

Request BodyRequired

---

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_product"whatsapp"·required

---

join\_requestsarray of string·required

Array of join request IDs to reject

Show child attributes

---

join\_requests[]string

Join request ID

Responses

---

Reject one or more join requests

200

Join requests rejection response

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_productstring

---

rejected\_join\_requestsarray of string

Show child attributes

---

rejected\_join\_requests[]string

ID of rejected join request

---

failed\_join\_requestsarray of object

Show child attributes

---

failed\_join\_requests[]object

Show child attributes

---

join\_request\_idstring

---

errorsarray of Error

Show child attributes

---

errors[]Error

Show child attributes

---

codeinteger

Error code

---

messagestring

Error message

---

titlestring

Error title

---

error\_dataobject

Show child attributes

---

detailsstring

Error details

---

errorsarray of Error

Show child attributes

---

errors[]Error

Show child attributes

---

codeinteger

Error code

---

messagestring

Error message

---

titlestring

Error title

---

error\_dataobject

Show child attributes

---

detailsstring

Error details

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/join_requests' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\""  
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
