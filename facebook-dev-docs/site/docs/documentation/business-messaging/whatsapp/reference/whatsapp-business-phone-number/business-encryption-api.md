---
title: "WhatsApp Cloud API - Business Encryption API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-encryption-api
---

# WhatsApp Cloud API - Business Encryption API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-encryption-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-encryption-api/v23.0.openapi.yaml/)

API for managing WhatsApp Business Account encryption settings and public key management.

This endpoint allows businesses to set up and manage encryption for their WhatsApp Business

messaging by uploading and retrieving business public keys used for payload encryption.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/whatsapp\_business\_encryption](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-encryption-api#get-version-phone-number-id-whatsapp-business-encryption) |
| POST | [/{Version}/{Phone-Number-ID}/whatsapp\_business\_encryption](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-encryption-api#post-version-phone-number-id-whatsapp-business-encryption) |

---

## GET /{Version}/{Phone-Number-ID}/whatsapp\_business\_encryption

Retrieve the current business public key and its signature verification status.

This endpoint returns the public key that is currently configured for encrypting

message payloads and indicates whether the stored signature is valid or has a mismatch.

Use Cases:

* Verify current encryption configuration
* Check public key signature validation status
* Retrieve public key for client-side encryption setup
* Monitor encryption key status for security compliance

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Public key information can be cached for moderate periods, but signature status

may change and should be checked regularly for security validation.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/whatsapp\_business\_encryption

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_encryption' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "valid_key": {  
    "summary": "Valid public key with verified signature",  
    "value": {  
      "data": [  
        {  
          "business_public_key_signature_status": "VALID"  
        }  
      ]  
    }  
  },  
  "mismatch_key": {  
    "summary": "Public key with signature mismatch",  
    "value": {  
      "data": [  
        {  
          "business_public_key": " ",  
          "business_public_key_signature_status": "MISMATCH"  
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

Your WhatsApp Business phone number ID. This ID represents the phone number

entity and can be obtained from your WhatsApp Business Account phone numbers list.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

all available fields will be returned.

Available fields: business\_public\_key, business\_public\_key\_signature\_status

Responses

---

Retrieve the current business public key and its signature verification status.

This endpoint returns the public key that is currently configured for encrypting

message payloads and indicates whether the stored signature is valid or has a mismatch.

Use Cases:

* Verify current encryption configuration
* Check public key signature validation status
* Retrieve public key for client-side encryption setup
* Monitor encryption key status for security compliance

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Public key information can be cached for moderate periods, but signature status

may change and should be checked regularly for security validation.

200

Successfully retrieved business encryption public key information

Content Type: application/json

Schema: object

Show child attributes

---

dataarray of WhatsAppBusinessEncryptionInfo

Show child attributes

---

data[]WhatsAppBusinessEncryptionInfo

Business encryption public key information and verification status

Show child attributes

---

business\_public\_keystring·required

The business public key used for encrypting message payloads.

This key is used to encrypt data channel requests and responses.

---

business\_public\_key\_signature\_statusBusinessPublicKeyVerificationStatus·required

Status of business public key signature verification

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

422

Unprocessable Entity - Request parameters are valid but cannot be processed

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

429

Too Many Requests - Rate limit exceeded

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
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_encryption' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "valid_key": {  
    "summary": "Valid public key with verified signature",  
    "value": {  
      "data": [  
        {  
          "business_public_key_signature_status": "VALID"  
        }  
      ]  
    }  
  },  
  "mismatch_key": {  
    "summary": "Public key with signature mismatch",  
    "value": {  
      "data": [  
        {  
          "business_public_key": " ",  
          "business_public_key_signature_status": "MISMATCH"  
        }  
      ]  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/whatsapp\_business\_encryption

Upload and configure a business public key for message payload encryption.

This endpoint accepts a business public key in PEM format, validates it,

and stores it with a cryptographic signature for future use in encrypting

message payloads and data channel requests.

Use Cases:

* Initial setup of encryption for WhatsApp Business messaging
* Update existing public key for key rotation
* Enable secure payload encryption for sensitive business communications
* Configure encryption keys for compliance requirements

Key Requirements:

* Must be a valid RSA public key in PEM format
* Key must meet Meta's security standards for encryption
* Only one active public key per phone number at a time
* Previous keys are replaced when new ones are uploaded

Rate Limiting:

Standard Graph API rate limits apply. Key uploads may have additional

security-related rate limiting to prevent abuse.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/whatsapp\_business\_encryption

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_encryption' \  
  --header 'Authorization: Bearer <Token>' \  
  -F 'business_public_key=-----BEGIN PUBLIC KEY-----  
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...  
-----END PUBLIC KEY-----  
'
```

Select status code

200400401403404422429500

---

```
{  
  "success": {  
    "summary": "Successful key upload",  
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

Graph API version to use for this request. Determines the API behavior and available features.

Phone-Number-IDstring·required

Your WhatsApp Business phone number ID. This ID represents the phone number

entity and can be obtained from your WhatsApp Business Account phone numbers list.

Request BodyRequired

---

Content Type: multipart/form-data

Schema: WhatsAppBusinessEncryptionUploadRequest

Show child attributes

---

WhatsAppBusinessEncryptionUploadRequest

---

business\_public\_keystring·required

The business public key in PEM format to be uploaded and signed.

Must be a valid RSA public key that will be used for payload encryption.

Responses

---

Upload and configure a business public key for message payload encryption.

This endpoint accepts a business public key in PEM format, validates it,

and stores it with a cryptographic signature for future use in encrypting

message payloads and data channel requests.

Use Cases:

* Initial setup of encryption for WhatsApp Business messaging
* Update existing public key for key rotation
* Enable secure payload encryption for sensitive business communications
* Configure encryption keys for compliance requirements

Key Requirements:

* Must be a valid RSA public key in PEM format
* Key must meet Meta's security standards for encryption
* Only one active public key per phone number at a time
* Previous keys are replaced when new ones are uploaded

Rate Limiting:

Standard Graph API rate limits apply. Key uploads may have additional

security-related rate limiting to prevent abuse.

200

Successfully uploaded and configured business encryption public key

Content Type: application/json

Schema: WhatsAppBusinessEncryptionUploadResponse

Show child attributes

---

WhatsAppBusinessEncryptionUploadResponse

---

successboolean·required

Indicates whether the public key was successfully uploaded and signed

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

422

Unprocessable Entity - Request parameters are valid but cannot be processed

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

429

Too Many Requests - Rate limit exceeded

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
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_encryption' \  
  --header 'Authorization: Bearer <Token>' \  
  -F 'business_public_key=-----BEGIN PUBLIC KEY-----  
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...  
-----END PUBLIC KEY-----  
'
```

Select status code

200400401403404422429500

---

```
{  
  "success": {  
    "summary": "Successful key upload",  
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
