---
title: "WhatsApp Cloud API - WhatsApp Business QR Code Management API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api
---

# WhatsApp Cloud API - WhatsApp Business QR Code Management API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-management-api/v25.0.openapi.yaml/)

API for managing WhatsApp Business Account message QR code collections.

Provides endpoints for listing all message QR codes and creating new ones.

Message QR codes generate WhatsApp deep links with pre-filled messages that customers

can use to start conversations. Each QR code has a unique 14-character identifier.

Requirements: WhatsApp Business Account with `whatsapp_business_management` permission,

verified phone number, and valid system user access token.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/message\_qrdls](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api#get-version-phone-number-id-message-qrdls) |
| POST | [/{Version}/{Phone-Number-ID}/message\_qrdls](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-pre-verified-phone-number/request-verification-code-api#post-version-phone-number-id-message-qrdls) |

---

## GET /{Version}/{Phone-Number-ID}/message\_qrdls

Retrieve all message QR codes for a phone number, sorted by creation time (newest first).

Supports field selection, filtering by code, cursor-based pagination, and QR image generation.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/message\_qrdls

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls' \  
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
          "code": "5QBPAD2DC6L5A1",  
          "prefilled_message": "Show me Cyber Tuesday deals!",  
          "deep_link_url": "https://wa.me/message/5QBPAD2DC6L5A1"  
        },  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1"  
        },  
        {  
          "code": "WOMVT6TJ2BP7A1",  
          "prefilled_message": "Tell me more about your production workshop",  
          "deep_link_url": "https://wa.me/message/WOMVT6TJ2BP7A1"  
        }  
      ]  
    }  
  },  
  "with_qr_image": {  
    "summary": "Response with QR code image",  
    "description": "Response including QR code image URL in SVG format",  
    "value": {  
      "data": [  
        {  
          "code": "FO7JXE4BG3RFG1",  
          "prefilled_message": "Tell me more about your event planning packages",  
          "deep_link_url": "https://wa.me/message/FO7JXE4BG3RFG1",  
          "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"  
        }  
      ]  
    }  
  },  
  "single_qr_code": {  
    "summary": "Filtered by specific QR code",  
    "description": "Response when filtering by a specific QR code ID",  
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
  "empty_response": {  
    "summary": "No QR codes found",  
    "description": "Response when no QR codes exist or match the filter criteria",  
    "value": {  
      "data": []  
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

The WhatsApp Business Account phone number ID for which to list QR codes.

This ID is provided when you add a phone number to your WhatsApp Business Account.

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

codestring

Filter results to a specific QR code by its unique identifier.

When provided, only the matching QR code will be returned (if it exists).

limitinteger [min: 1, max: 25]

Maximum number of QR codes to return in a single response.

Default and maximum limit is typically 25.

afterstring

Cursor for pagination. Use this to get the next page of results.

Obtain this value from the paging.cursors.after field in previous responses.

beforestring

Cursor for pagination. Use this to get the previous page of results.

Obtain this value from the paging.cursors.before field in previous responses.

Responses

---

Retrieve all message QR codes for a phone number, sorted by creation time (newest first).

Supports field selection, filtering by code, cursor-based pagination, and QR image generation.

200

Successfully retrieved the list of message QR codes

Content Type: application/json

Schema: QrCodeList

Show child attributes

---

QrCodeList

---

dataarray of QrCodeDetails·required

Array of QR code objects

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

---

pagingobject

Pagination information for navigating through large result sets.

Contains cursors for accessing previous and next pages of results.

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor for accessing the previous page of results

---

afterstring

Cursor for accessing the next page of results

---

previousstring (uri)

URL for the previous page of results

---

nextstring (uri)

URL for the next page of results

400

Bad Request - Invalid parameters or malformed request

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

Not Found - Phone number ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls' \  
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
          "code": "5QBPAD2DC6L5A1",  
          "prefilled_message": "Show me Cyber Tuesday deals!",  
          "deep_link_url": "https://wa.me/message/5QBPAD2DC6L5A1"  
        },  
        {  
          "code": "ANED2T5QRU7HG1",  
          "prefilled_message": "Show me Cyber Monday deals!",  
          "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1"  
        },  
        {  
          "code": "WOMVT6TJ2BP7A1",  
          "prefilled_message": "Tell me more about your production workshop",  
          "deep_link_url": "https://wa.me/message/WOMVT6TJ2BP7A1"  
        }  
      ]  
    }  
  },  
  "with_qr_image": {  
    "summary": "Response with QR code image",  
    "description": "Response including QR code image URL in SVG format",  
    "value": {  
      "data": [  
        {  
          "code": "FO7JXE4BG3RFG1",  
          "prefilled_message": "Tell me more about your event planning packages",  
          "deep_link_url": "https://wa.me/message/FO7JXE4BG3RFG1",  
          "qr_image_url": "https://scontent-iad3-1.xx.fbcdn.net/m1/v/t6/An-H7T8OyTqO07lcRGHlKteuPMKDnx07nua3dGb4i560bVxDscweOV4KoKD_4wCDFoHR_C5LyVjxQISKPxwora1bbFhUEo2nA19ZPLBUVoQSmV12l1x-nuu312jKty-5rmojmde_a0g?ccb=10-5&oh=00_AfASq_vjojFza_9A-HDeRgHM3wZ8yjNprpYBjNKOn8RkSg&oe=64550A9E&_nc_sid=f36290"  
        }  
      ]  
    }  
  },  
  "single_qr_code": {  
    "summary": "Filtered by specific QR code",  
    "description": "Response when filtering by a specific QR code ID",  
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
  "empty_response": {  
    "summary": "No QR codes found",  
    "description": "Response when no QR codes exist or match the filter criteria",  
    "value": {  
      "data": []  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/message\_qrdls

Create a new QR code (without code parameter) or update existing QR code (with code parameter).

Supports optional QR image generation in PNG or SVG format.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/message\_qrdls

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",  
  "generate_qr_image": "SVG"  
}'
```

Select status code

200400401403404500

---

```
{  
  "created_qr_code_with_image": {  
    "summary": "Newly created QR code with image",  
    "value": {  
      "code": "ANED2T5QRU7HG1",  
      "prefilled_message": "Hi! I'm interested in your products. Can you help me?",  
      "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",  
      "qr_image_url": "https://scontent-iad3-2.xx.fbcdn.net/m1/v/t6/An-psFmLBls2NFXnhhkSVqwIHEqCTQoNKTLxxlOeci0Wbsukd2RLiwZalHrXwqT5RTFSzOhyw6OLvJJO0itaQtJI1BS2WkNcV67wR3GNx7ZX1tFSNCbpo1e6KPptKF1GbVGzmUfkgSPX?ccb=10-5&oh=00_AfAOAr6oRA2OKV_Ur3GUh4em57sACxUkfhXHsObiFrxOsA&oe=64DCCEF6&_nc_sid=5a413f"  
    }  
  },  
  "updated_qr_code": {  
    "summary": "Updated existing QR code",  
    "value": {  
      "code": "WOMVT6TJ2BP7A1",  
      "prefilled_message": "Hello! I'd like to know more about your latest offers.",  
      "deep_link_url": "https://wa.me/message/WOMVT6TJ2BP7A1"  
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

Graph API version to use for this request. Determines the API behavior and available features.

Phone-Number-IDstring·required

The WhatsApp Business Account phone number ID for which to create or update the QR code.

This ID is provided when you add a phone number to your WhatsApp Business Account.

Request BodyRequired

---

Content Type: application/json

Schema: Must be one of: CreateQrCodeRequest, UpdateQrCodeRequest

Show child attributes

---

Must be one of: CreateQrCodeRequest, UpdateQrCodeRequest

---

CreateQrCodeRequest

Request payload for creating a new message QR code

Show child attributes

---

prefilled\_messagestring·required

Pre-filled message text (max 140 characters) that appears in customer chat

---

generate\_qr\_imageOne of "PNG", "SVG"

QR image format. When specified, response includes qr\_image\_url

---

UpdateQrCodeRequest

Request payload for updating an existing message QR code

Show child attributes

---

codestring·required

14-character QR code identifier to update

---

prefilled\_messagestring·required

New pre-filled message text (max 140 characters)

Responses

---

Create a new QR code (without code parameter) or update existing QR code (with code parameter).

Supports optional QR image generation in PNG or SVG format.

200

Successfully created or updated the message QR code

Content Type: application/json

Schema: QrCodeResponse

Show child attributes

---

QrCodeResponse

---

codestring·required

Unique 14-character identifier for the QR code. This code is used

for future updates or deletions.

---

prefilled\_messagestring·required

The pre-filled message text associated with this QR code.

This text appears when customers use the QR code.

---

deep\_link\_urlstring (uri)·required

WhatsApp deep link URL that can be used directly without QR code scanning.

Customers can click this link to start a conversation with the pre-filled message.

---

qr\_image\_urlstring (uri)

URL to download the QR code image. Only present if generate\_qr\_image

parameter was specified in the request. Image format matches the requested format.

400

Bad Request - Invalid parameters or malformed request

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

Not Found - Phone number ID does not exist or QR code not found for update

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
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/message_qrdls' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "prefilled_message": "Hi! I'm interested in your products. Can you help me?",  
  "generate_qr_image": "SVG"  
}'
```

Select status code

200400401403404500

---

```
{  
  "created_qr_code_with_image": {  
    "summary": "Newly created QR code with image",  
    "value": {  
      "code": "ANED2T5QRU7HG1",  
      "prefilled_message": "Hi! I'm interested in your products. Can you help me?",  
      "deep_link_url": "https://wa.me/message/ANED2T5QRU7HG1",  
      "qr_image_url": "https://scontent-iad3-2.xx.fbcdn.net/m1/v/t6/An-psFmLBls2NFXnhhkSVqwIHEqCTQoNKTLxxlOeci0Wbsukd2RLiwZalHrXwqT5RTFSzOhyw6OLvJJO0itaQtJI1BS2WkNcV67wR3GNx7ZX1tFSNCbpo1e6KPptKF1GbVGzmUfkgSPX?ccb=10-5&oh=00_AfAOAr6oRA2OKV_Ur3GUh4em57sACxUkfhXHsObiFrxOsA&oe=64DCCEF6&_nc_sid=5a413f"  
    }  
  },  
  "updated_qr_code": {  
    "summary": "Updated existing QR code",  
    "value": {  
      "code": "WOMVT6TJ2BP7A1",  
      "prefilled_message": "Hello! I'd like to know more about your latest offers.",  
      "deep_link_url": "https://wa.me/message/WOMVT6TJ2BP7A1"  
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
