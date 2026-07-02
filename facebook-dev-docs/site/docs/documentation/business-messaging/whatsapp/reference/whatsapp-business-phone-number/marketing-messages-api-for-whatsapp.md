---
title: "WhatsApp Cloud API - Marketing Messages API for WhatsApp"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/marketing-messages-api-for-whatsapp
---

# WhatsApp Cloud API - Marketing Messages API for WhatsApp

Version

v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/marketing-messages-api-for-whatsapp/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/marketing-messages-api-for-whatsapp/v25.0.openapi.yaml/)

Send marketing template messages with automatic delivery optimization.

Delivers relevant, timely messages to customers most likely to engage,

with enhanced deliverability and down-funnel conversion insights.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Phone-Number-ID}/marketing\_messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/marketing-messages-api-for-whatsapp#post-version-phone-number-id-marketing-messages) |

---

## POST /{Version}/{Phone-Number-ID}/marketing\_messages

Send marketing template messages using pre-approved templates. Supports optional product policy controls and message activity sharing settings.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/marketing\_messages

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/marketing_messages' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "16315552222",  
  "type": "template",  
  "template": {  
    "name": "hello_world",  
    "language": {  
      "code": "en"  
    }  
  }  
}'
```

Select status code

200400401403

---

```
{  
  "Successful Response": {  
    "summary": "Successful marketing message response",  
    "value": {  
      "contacts": [  
        {  
          "input": "16315552222",  
          "wa_id": "16315552222"  
        }  
      ],  
      "messages": [  
        {  
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"  
        }  
      ],  
      "messaging_product": "whatsapp",  
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

WhatsApp API version (e.g., v20.0)

Phone-Number-IDstring·required

WhatsApp Business Phone Number ID

Request BodyRequired

---

Content Type: application/json

Schema: MarketingMessageRequestPayload

Show child attributes

---

MarketingMessageRequestPayload

---

messaging\_product"whatsapp"·required

Messaging service used. Must be "whatsapp"

---

recipient\_type"individual"·required

Type of recipient. Must be "individual"

---

tostring·required

WhatsApp ID or phone number of the message recipient

---

type"template"·required

Type of message. Must be "template" for marketing messages

---

templateobject·required

Identifies the approved message template to send and supplies values for any variable parts of that template. Use `name` to select the template, `language` to choose the render locale, and `components` to provide header, body, or button parameters when the template defines them.

Show child attributes

---

namestring·required

Name of the approved message template to send.

---

languageLanguageObject·required

Language in which the template should be rendered.

---

componentsarray of TemplateComponent

Optional list of template components that supply parameter values for variable parts of the template. Add a `header` component for header parameters, a `body` component for body placeholders, and a `button` component for button parameters when the template defines them.

Show child attributes

---

components[]TemplateComponent

---

product\_policyOne of "CLOUD\_API\_FALLBACK", "STRICT"

Optional product policy setting

---

message\_activity\_sharingboolean

Optional flag to control message activity sharing

Responses

---

Send marketing template messages using pre-approved templates. Supports optional product policy controls and message activity sharing settings.

200

Marketing message sent successfully

Content Type: application/json

Schema: MarketingMessageResponsePayload

Show child attributes

---

MarketingMessageResponsePayload

---

contactsarray of object

Show child attributes

---

contacts[]object

Show child attributes

---

inputstring

---

wa\_idstring

---

messagesarray of object

Show child attributes

---

messages[]object

Show child attributes

---

idstring

---

message\_statusOne of "accepted", "held\_for\_quality\_assessment", "paused"

The status of a WhatsApp message:

* `accepted`: The message has been accepted by WhatsApp and is being processed
* `held_for_quality_assessment`: The message is being held for quality assessment before delivery
* `paused`: The message delivery has been paused

---

messaging\_productstring

400

Bad Request - Invalid request parameters

Content Type: application/json

401

Unauthorized - Invalid or missing access token

Content Type: application/json

403

Forbidden - Insufficient permissions

Content Type: application/json

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/marketing_messages' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "16315552222",  
  "type": "template",  
  "template": {  
    "name": "hello_world",  
    "language": {  
      "code": "en"  
    }  
  }  
}'
```

Select status code

200400401403

---

```
{  
  "Successful Response": {  
    "summary": "Successful marketing message response",  
    "value": {  
      "contacts": [  
        {  
          "input": "16315552222",  
          "wa_id": "16315552222"  
        }  
      ],  
      "messages": [  
        {  
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"  
        }  
      ],  
      "messaging_product": "whatsapp",  
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
