---
title: "WhatsApp Cloud API - Media API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-download-api
---

# WhatsApp Cloud API - Media API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-api/v23.0.openapi.yaml/)

Retrieve and delete uploaded media files by media ID.

Get media URLs with file metadata including size, MIME type, and SHA256 hash.

Media URLs are valid for 5 minutes after retrieval.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Media-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-download-api#get-version-media-id) |
| DELETE | [/{Version}/{Media-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/media/media-download-api#delete-version-media-id) |

---

## GET /{Version}/{Media-ID}

To retrieve your media's URL, make a GET call to `/{​{Media-ID}​}`. Use the returned URL to download the media file. Note that clicking this URL (i.e. performing a generic GET) will not return the media; you must include an access token. For more information, see [Download Media](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

You can also use the optional query `?phone_number_id` for `Retrieve Media URL` and `Delete Media`. This parameter checks to make sure the media belongs to the phone number before retrieval or deletion.

#### Response

A successful response includes an object with a media URL. The URL is only valid for 5 minutes. To use this URL, see [Download Media](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

### Request Syntax

**GET** /{Version}/{Media-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Retrieve Media URL": {  
    "value": {  
      "file_size": "303833",  
      "id": "2621233374848975",  
      "messaging_product": "whatsapp",  
      "mime_type": "image/jpeg",  
      "sha256": "<HASH>",  
      "url": "<URL>"  
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

Media-IDstring·required

Query Parameters

---

phone\_number\_idstring

Specifies that this action only be performed if the media belongs to the provided phone number.

Responses

---

To retrieve your media's URL, make a GET call to `/{​{Media-ID}​}`. Use the returned URL to download the media file. Note that clicking this URL (i.e. performing a generic GET) will not return the media; you must include an access token. For more information, see [Download Media](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

You can also use the optional query `?phone_number_id` for `Retrieve Media URL` and `Delete Media`. This parameter checks to make sure the media belongs to the phone number before retrieval or deletion.

#### Response

A successful response includes an object with a media URL. The URL is only valid for 5 minutes. To use this URL, see [Download Media](https://developers.facebook.com/docs/business-messaging/whatsapp/business-phone-numbers/media#download-media).

200

Retrieve Media URL

Content Type: application/json

Schema: object

Show child attributes

---

file\_sizestring

---

idstring

---

messaging\_productstring

---

mime\_typestring

---

sha256string

---

urlstring

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Retrieve Media URL": {  
    "value": {  
      "file_size": "303833",  
      "id": "2621233374848975",  
      "messaging_product": "whatsapp",  
      "mime_type": "image/jpeg",  
      "sha256": "<HASH>",  
      "url": "<URL>"  
    }  
  }  
}
```

---

## DELETE /{Version}/{Media-ID}

To delete media, make a DELETE call to the ID of the media you want to delete.

## Prerequisites

* [User Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) with `whatsapp_business_messaging` permission
* Media object ID from either uploading media endpoint or media message Webhooks

### Request Syntax

**DELETE** /{Version}/{Media-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Delete Media": {  
    "value": {  
      "success": true  
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

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Media-IDstring·required

Query Parameters

---

phone\_number\_idstring

Specifies that deletion of the media only be performed if the media belongs to the provided phone number.

Responses

---

To delete media, make a DELETE call to the ID of the media you want to delete.

## Prerequisites

* [User Access Token](https://developers.facebook.com/docs/facebook-login/access-tokens#usertokens) with `whatsapp_business_messaging` permission
* Media object ID from either uploading media endpoint or media message Webhooks

200

Delete Media

Content Type: application/json

Schema: object

Show child attributes

---

successboolean

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Media-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Delete Media": {  
    "value": {  
      "success": true  
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
