---
title: "WhatsApp Business Cloud API - Groups Invite Link API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-join-requests-api
---

# WhatsApp Business Cloud API - Groups Invite Link API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-invite-link-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-invite-link-api/v23.0.openapi.yaml/)

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
| POST | [/{Version}/{group\_id}/invite\_link](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-join-requests-api#post-version-group-id-invite-link) |
| DELETE | [/{Version}/{group\_id}/invite\_link](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-join-requests-api#delete-version-group-id-invite-link) |

---

## POST /{Version}/{group\_id}/invite\_link

Create a new group invite link

### Request Syntax

**POST** /{Version}/{group\_id}/invite\_link

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\"",  
  "invite_link": "\"https:\\/\\/chat.whatsapp.com\\/LINK_ID\""  
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

Responses

---

Create a new group invite link

200

Group invite link created successfully

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_productstring

---

invite\_linkstring

Group invite link

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\"",  
  "invite_link": "\"https:\\/\\/chat.whatsapp.com\\/LINK_ID\""  
}
```

---

## DELETE /{Version}/{group\_id}/invite\_link

Delete an existing group invite link

### Request Syntax

**DELETE** /{Version}/{group\_id}/invite\_link

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\"",  
  "success": "\"true\""  
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

Responses

---

Delete an existing group invite link

200

Group invite link deleted successfully

Content Type: application/json

Schema: object

Show child attributes

---

messaging\_productstring

---

successstring

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/invite_link' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "messaging_product": "\"whatsapp\"",  
  "success": "\"true\""  
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
