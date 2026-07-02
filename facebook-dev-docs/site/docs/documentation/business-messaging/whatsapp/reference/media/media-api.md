---
title: "WhatsApp Business Cloud API - Groups Query API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api
---

# WhatsApp Business Cloud API - Groups Query API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-query-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/groups/groups-query-api/v23.0.openapi.yaml/)

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
| GET | [/{Version}/{group\_id}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api#get-version-group-id) |
| POST | [/{Version}/{group\_id}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api#post-version-group-id) |
| DELETE | [/{Version}/{group\_id}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api#delete-version-group-id) |

---

## GET /{Version}/{group\_id}

Retrieve metadata about a single group

### Request Syntax

**GET** /{Version}/{group\_id}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{group_id}' \  
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

Query Parameters

---

fieldsstring

Comma-separated list of fields to return

Responses

---

Retrieve metadata about a single group

200

Group information

Content Type: application/json

Schema: GroupInfo

Show child attributes

---

GroupInfo

---

idstring

Group ID

---

messaging\_productstring

---

join\_approval\_modeOne of "approval\_required", "auto\_approve"

Join approval mode for the group

---

subjectstring

Group subject

---

descriptionstring

Group description

---

suspendedboolean

Returns true if the group has been suspended by WhatsApp

---

creation\_timestampinteger

UNIX timestamp in seconds at which the group was created

---

participantsarray of object

List of participants in the group

Show child attributes

---

participants[]object

Show child attributes

---

wa\_idstring

WhatsApp user ID

---

total\_participant\_countinteger

Total number of participants in the group, excluding your business

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{group_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{Version}/{group\_id}

Update the subject, description, and photo of a group

### Request Syntax

**POST** /{Version}/{group\_id}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}' \  
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

subjectstring

The new subject for the group

---

descriptionstring

The new description for the group

---

profile\_picture\_filestring

Path to an image file for group profile picture

Content Type: multipart/form-data

Schema: object

Show child attributes

---

messaging\_product"whatsapp"

---

filestring (binary)

Image file for group profile picture (JPEG, max 5MB, square format, min 192x192)

Responses

---

Update the subject, description, and photo of a group

200

Group settings updated successfully

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{group_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## DELETE /{Version}/{group\_id}

Delete the group and remove all participants, including the business

### Request Syntax

**DELETE** /{Version}/{group\_id}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "success": "true"  
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

Responses

---

Delete the group and remove all participants, including the business

200

Group deletion successful

Content Type: application/json

Schema: object

Show child attributes

---

successboolean

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{group_id}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "success": "true"  
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
