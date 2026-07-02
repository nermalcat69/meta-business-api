---
title: "WhatsApp Cloud API - Media Upload API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/media-upload-api
---

# WhatsApp Cloud API - Media Upload API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/media-upload-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/media-upload-api/v23.0.openapi.yaml/)

Upload media files (images, videos, audio, documents, stickers) to WhatsApp.

Returns a media ID that can be used to send media messages.

Supports multiple file formats and multipart form-data uploads.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Phone-Number-ID}/media](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/media-upload-api#post-version-phone-number-id-media) |

---

## POST /{Version}/{Phone-Number-ID}/media

This request uploads an image as .jpeg. The parameters are specified as form-data in the request body.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/media

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/media' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "file": "@/local/path/file.ogg;type=ogg",  
  "messaging_product": "whatsapp"  
}'
```

Select status code

200

---

```
{  
  "Upload Audio (form-data)": {  
    "value": {  
      "id": "<MEDIA_ID>"  
    }  
  },  
  "Upload Audio JSON": {  
    "value": {  
      "id": "4490709327384033"  
    }  
  },  
  "Upload Image JSON": {  
    "value": {  
      "id": "4490709327384033"  
    }  
  },  
  "Upload Sticker File (form-data)": {  
    "value": {  
      "id": "<MEDIA_ID>"  
    }  
  },  
  "Upload Sticker File JSON": {  
    "value": {  
      "id": "4490709327384033"  
    }  
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

Phone-Number-IDstring·required

Request BodyOptional

---

Content Type: application/json

Schema: object

Show child attributes

---

filestring

---

messaging\_productstring

Content Type: multipart/form-data

Schema: object

Show child attributes

---

filestring (binary)

---

messaging\_productstring

Responses

---

This request uploads an image as .jpeg. The parameters are specified as form-data in the request body.

200

Upload Image JSON / Upload Sticker File (form-data) / Upload Sticker File JSON / Upload Audio (form-data) / Upload Audio JSON

Content Type: application/json

Schema: object

Show child attributes

---

idstring

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/media' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "file": "@/local/path/file.ogg;type=ogg",  
  "messaging_product": "whatsapp"  
}'
```

Select status code

200

---

```
{  
  "Upload Audio (form-data)": {  
    "value": {  
      "id": "<MEDIA_ID>"  
    }  
  },  
  "Upload Audio JSON": {  
    "value": {  
      "id": "4490709327384033"  
    }  
  },  
  "Upload Image JSON": {  
    "value": {  
      "id": "4490709327384033"  
    }  
  },  
  "Upload Sticker File (form-data)": {  
    "value": {  
      "id": "<MEDIA_ID>"  
    }  
  },  
  "Upload Sticker File JSON": {  
    "value": {  
      "id": "4490709327384033"  
    }  
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
