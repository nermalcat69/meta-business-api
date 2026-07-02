---
title: "WhatsApp Cloud API - Business Account API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts
---

# WhatsApp Cloud API - Business Account API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/business-account-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/business-account-api/v25.0.openapi.yaml/)

Retrieve Meta Business Portfolio information by Business ID.

Returns business name, timezone, and other account details

for managing WhatsApp Business Account configurations.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Business-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/business/owned-whatsapp-business-accounts#get-version-business-id) |

---

## GET /{Version}/{Business-ID}

Retrieve business portfolio information including name and timezone.

* Endpoint reference: [Business](https://developers.facebook.com/docs/marketing-api/reference/business/)

### Request Syntax

**GET** /{Version}/{Business-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "Business portfolio": {  
    "value": {  
      "id": "506914307656634",  
      "name": "Lucky Shrub",  
      "timezone_id": 0  
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

Graph API version (e.g., v25.0)

Business-IDstring·required

The unique identifier of the Meta Business Portfolio

Query Parameters

---

fieldsstring

Comma-separated list of fields to return (e.g., id,name,timezone\_id)

Responses

---

Retrieve business portfolio information including name and timezone.

* Endpoint reference: [Business](https://developers.facebook.com/docs/marketing-api/reference/business/)

200

Business portfolio information retrieved successfully

Content Type: application/json

Schema: BusinessPortfolioResponse

Show child attributes

---

BusinessPortfolioResponse

---

idstring

Unique identifier for the business portfolio

---

namestring

Name of the business portfolio

---

timezone\_idinteger

Timezone identifier for the business portfolio

400

Bad Request - Invalid request parameters

Content Type: application/json

401

Unauthorized - Invalid or missing access token

Content Type: application/json

403

Forbidden - Insufficient permissions

Content Type: application/json

404

Not Found - Business not found

Content Type: application/json

500

Internal Server Error

Content Type: application/json

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "Business portfolio": {  
    "value": {  
      "id": "506914307656634",  
      "name": "Lucky Shrub",  
      "timezone_id": 0  
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
