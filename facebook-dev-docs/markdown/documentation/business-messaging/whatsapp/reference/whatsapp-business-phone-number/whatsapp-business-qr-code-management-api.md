---
title: "WhatsApp Cloud API - WhatsApp Business QR Code API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api
---

# WhatsApp Cloud API - WhatsApp Business QR Code API

Version

v23.0v24.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-api/v24.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-api/v24.0.openapi.yaml/)

API for managing individual WhatsApp Business Account message QR codes by their unique identifier.

Provides endpoints for retrieving and deleting specific message QR codes.

Message QR codes generate WhatsApp deep links with pre-filled messages that customers

can use to start conversations. Each QR code has a unique 14-character identifier.

Requirements: WhatsApp Business Account with `whatsapp_business_management` permission,

verified phone number, valid system user access token, and valid QR code identifier.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/message\_qrdls/{QR-Code-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api#get-version-phone-number-id-message-qrdls-qr-code-id) |
| DELETE | [/{Version}/{Phone-Number-ID}/message\_qrdls/{QR-Code-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api#delete-version-phone-number-id-message-qrdls-qr-code-id) |

---

## GET /{Version}/{Phone-Number-ID}/message\_qrdls/{QR-Code-ID}

Retrieve details for a specific QR code by its unique identifier.

Supports field selection and QR image generation. Response returns QR code in data array for consistency.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/message\_qrdls/{QR-Code-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "default_fields": {  
    "summary": "Default fields response",  
    "description": "Response with default fields (code, prefilled_message, deep_link_url)",  
    "value": {  
      "data": [  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1"  
        }  
      ]  
    }  
  },  
  "with_qr_image_svg": {  
    "summary": "Response with SVG QR code image",  
    "description": "Response including QR code image URL in SVG format",  
    "value": {  
      "data": [  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",  
          "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"  
        }  
      ]  
    }  
  },  
  "with_creation_time": {  
    "summary": "Response with creation time (first-party apps only)",  
    "description": "Response including creation timestamp for first-party applications",  
    "value": {  
      "data": [  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",  
          "creation_time": "1672531200"  
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

Graph API version to use for this request. Determines the API behavior and available features.

Phone-Number-IDstring·required

The WhatsApp Business Account phone number ID that owns the QR code.

This ID is provided when you add a phone number to your WhatsApp Business Account.

QR-Code-IDstring·required

The unique 14-character identifier of the QR code to retrieve.

This is the code value returned when the QR code was created.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. Available fields:

* code: QR code identifier (always included)
* prefilled\_message: Pre-filled message text (always included)
* deep\_link\_url: WhatsApp deep link URL (always included)
* creation\_time: Unix timestamp when QR code was created (first-party apps only)
* qr\_image\_url.format(FORMAT): QR code image URL where FORMAT is SVG or PNG

Example: "code,prefilled\_message,qr\_image\_url.format(SVG)"

Responses

---

Retrieve details for a specific QR code by its unique identifier.

Supports field selection and QR image generation. Response returns QR code in data array for consistency.

200

Successfully retrieved the message QR code details

Content Type: application/json

Schema: QrCodeResponse

Show child attributes

---

QrCodeResponse

---

dataarray of QrCodeDetails·required

Array containing the single QR code object (maintains consistency with collection endpoint)

Show child attributes

---

data[]QrCodeDetails

Complete details of a message QR code

Show child attributes

---

codestring·required

Unique 14-character QR code identifier

---

prefilled\_messagestring·required

Pre-filled message text that appears in customer chat

---

deep\_link\_urlstring (uri)·required

WhatsApp deep link URL for direct conversation initiation

---

creation\_timestring

Creation timestamp (first-party apps only)

---

qr\_image\_urlstring (uri)

QR code image download URL (when format specified in fields)

400

Bad Request - Invalid QR code ID format or parameters

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

401

Unauthorized - Invalid or missing access token

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

403

Forbidden - Insufficient permissions or access denied

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

404

Not Found - Phone number ID or QR code does not exist

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

500

Internal Server Error - Unexpected server error

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "default_fields": {  
    "summary": "Default fields response",  
    "description": "Response with default fields (code, prefilled_message, deep_link_url)",  
    "value": {  
      "data": [  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1"  
        }  
      ]  
    }  
  },  
  "with_qr_image_svg": {  
    "summary": "Response with SVG QR code image",  
    "description": "Response including QR code image URL in SVG format",  
    "value": {  
      "data": [  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",  
          "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"  
        }  
      ]  
    }  
  },  
  "with_creation_time": {  
    "summary": "Response with creation time (first-party apps only)",  
    "description": "Response including creation timestamp for first-party applications",  
    "value": {  
      "data": [  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",  
          "creation_time": "1672531200"  
        }  
      ]  
    }  
  }  
}
```

---

## DELETE /{Version}/{Phone-Number-ID}/message\_qrdls/{QR-Code-ID}

Permanently delete a specific QR code. Once deleted, the QR code and deep link become invalid.

Deletion cannot be undone and affects any existing marketing materials using the QR code.

### Request Syntax

**DELETE** /{Version}/{Phone-Number-ID}/message\_qrdls/{QR-Code-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "successful_deletion": {  
    "summary": "QR code successfully deleted",  
    "description": "Confirmation that the QR code has been permanently deleted",  
    "value": {  
      "success": true  
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

Graph API version to use for this request. Determines the API behavior and available features.

Phone-Number-IDstring·required

The WhatsApp Business Account phone number ID that owns the QR code to be deleted.

This ID is provided when you add a phone number to your WhatsApp Business Account.

QR-Code-IDstring·required

The unique 14-character identifier of the QR code to delete.

This is the code value returned when the QR code was created.

Responses

---

Permanently delete a specific QR code. Once deleted, the QR code and deep link become invalid.

Deletion cannot be undone and affects any existing marketing materials using the QR code.

200

Successfully deleted the message QR code

Content Type: application/json

Schema: DeleteQrCodeResponse

Show child attributes

---

DeleteQrCodeResponse

---

successboolean·required

Indicates whether the QR code was successfully deleted

400

Bad Request - Invalid QR code ID format

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

401

Unauthorized - Invalid or missing access token

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

403

Forbidden - Insufficient permissions or access denied

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

404

Not Found - Phone number ID or QR code does not exist

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

500

Internal Server Error - Unexpected server error

Content Type: application/json

Schema: GraphAPIError

Show child attributes

---

GraphAPIError

---

errorobject·required

Show child attributes

---

messagestring·required

Human-readable error message

---

typestring·required

Error category type

---

codeinteger·required

Numeric error code

---

error\_subcodeinteger

More specific error subcode when available

---

fbtrace\_idstring

Unique identifier for debugging and support requests with Meta

---

is\_transientboolean

Indicates whether this error is temporary and the request should be retried

---

error\_user\_titlestring

User-friendly error title for display purposes

---

error\_user\_msgstring

User-friendly error message for display purposes

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls/{QR-Code-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "successful_deletion": {  
    "summary": "QR code successfully deleted",  
    "description": "Confirmation that the QR code has been permanently deleted",  
    "value": {  
      "success": true  
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
