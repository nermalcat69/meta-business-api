---
title: "WhatsApp Cloud API - Media Download API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/message-history/whatsapp-business-message-history-events-api
---

# WhatsApp Cloud API - Media Download API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-download-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-download-api/v25.0.openapi.yaml/)

Download media files using URLs obtained from media retrieval endpoints.

Returns binary media content with appropriate MIME type headers.

Media URLs expire after 5 minutes and must be re-retrieved if expired.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Media-URL}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/message-history/whatsapp-business-message-history-events-api#get-version-media-url) |

---

## GET /{Version}/{Media-URL}

Download media files using URLs obtained from media retrieval endpoints.

Requires User Access Token with whatsapp\_business\_messaging permission.

Media URLs expire after 5 minutes and must be re-retrieved if expired.

Returns binary content with appropriate MIME type headers.

### Request Syntax

**GET** /{Version}/{Media-URL}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Media-URL}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401404500

---

```
{  
  "Media download": {  
    "summary": "Binary media content returned",  
    "value": ""  
  }  
}
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

Graph API version (e.g., v25.0)

Media-URLstring·required

The media URL path obtained from media retrieval endpoints

Responses

---

Download media files using URLs obtained from media retrieval endpoints.

Requires User Access Token with whatsapp\_business\_messaging permission.

Media URLs expire after 5 minutes and must be re-retrieved if expired.

Returns binary content with appropriate MIME type headers.

200

Media file downloaded successfully

Content Type: application/octet-stream

Schema: MediaBinaryResponse

400

Bad Request - Invalid request parameters

Content Type: application/json

401

Unauthorized - Invalid or missing access token

Content Type: application/json

404

Not Found - Media not found or URL expired

Content Type: application/json

500

Internal Server Error

Content Type: application/json

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Media-URL}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401404500

---

```
{  
  "Media download": {  
    "summary": "Binary media content returned",  
    "value": ""  
  }  
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
