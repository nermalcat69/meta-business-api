---
title: "WhatsApp Business Cloud API - Groups Participants API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-query-api
---

# WhatsApp Business Cloud API - Groups Participants API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-participants-api/v23.0.openapi.yaml/)

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
| POST | [/{Version}/{group\_id}/participants](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-query-api#post-version-group-id-participants) |
| DELETE | [/{Version}/{group\_id}/participants](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-query-api#delete-version-group-id-participants) |

---

## POST /{Version}/{group\_id}/participants

Add participants to group

### Request Syntax

**POST** /{Version}/{group\_id}/participants

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  
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

participantsarray of object·required

Array of phone numbers or WhatsApp IDs to remove (max 8 participants)

Show child attributes

---

participants[]object

Show child attributes

---

userstring·required

WhatsApp user phone number or WhatsApp user ID

Responses

---

Add participants to group

200

Participants addition request processed

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## DELETE /{Version}/{group\_id}/participants

Remove participants from group

### Request Syntax

**DELETE** /{Version}/{group\_id}/participants

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  
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

participantsarray of object·required

Array of phone numbers or WhatsApp IDs to remove (max 8 participants)

Show child attributes

---

participants[]object

Show child attributes

---

userstring·required

WhatsApp user phone number or WhatsApp user ID

Responses

---

Remove participants from group

200

Participants removal request processed

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}/participants' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
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
