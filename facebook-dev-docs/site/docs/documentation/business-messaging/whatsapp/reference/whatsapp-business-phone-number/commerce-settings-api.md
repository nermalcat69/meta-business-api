---
title: "WhatsApp Cloud API - Commerce Settings API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api
---

# WhatsApp Cloud API - Commerce Settings API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api/v23.0.openapi.yaml/)

Configure WhatsApp Business commerce settings including catalog visibility

and shopping cart enablement. Retrieve and update commerce configurations

for business phone numbers.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api#get-version-phone-number-id-whatsapp-commerce-settings) |
| POST | [/{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/commerce-settings-api#post-version-phone-number-id-whatsapp-commerce-settings) |

---

## GET /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

* Guide: [Sell Products & Services](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
* Guide: [Sell Products & Services](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
* Endpoint reference: [WhatsApp Business Phone Number > WhatsApp Commerce Settings](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Example response": {  
    "value": {  
      "data": [  
        {  
          "id": "527759822865714",  
          "is_cart_enabled": true,  
          "is_catalog_visible": true  
        }  
      ]  
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

Responses

---

* Guide: [Sell Products & Services](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
* Guide: [Sell Products & Services](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
* Endpoint reference: [WhatsApp Business Phone Number > WhatsApp Commerce Settings](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)

200

Example response

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

idstring

---

is\_cart\_enabledboolean

---

is\_catalog\_visibleboolean

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Example response": {  
    "value": {  
      "data": [  
        {  
          "id": "527759822865714",  
          "is_cart_enabled": true,  
          "is_catalog_visible": true  
        }  
      ]  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

* Guide: [Sell Products & Services](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
* Guide: [Sell Products & Services](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
* Endpoint reference: [WhatsApp Business Phone Number > WhatsApp Commerce Settings](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/whatsapp\_commerce\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Example response": {  
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

Path Parameters

---

Versionstring·required

Phone-Number-IDstring·required

Query Parameters

---

is\_cart\_enabledstring

is\_catalog\_visiblestring

Responses

---

* Guide: [Sell Products & Services](https://developers.facebook.com/docs/business-messaging/whatsapp/catalogs/sell-products-and-services) (Cloud API)
* Guide: [Sell Products & Services](https://developers.facebook.com/docs/whatsapp/on-premises/guides/commerce-guides) (On-Premises API)
* Endpoint reference: [WhatsApp Business Phone Number > WhatsApp Commerce Settings](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/whatsapp_commerce_settings)

200

Example response

Content Type: application/json

Schema: object

Show child attributes

---

successboolean

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_commerce_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Example response": {  
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
