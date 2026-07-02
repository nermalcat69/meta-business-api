---
title: "WhatsApp Business Account Phone Number API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api
---

# WhatsApp Business Account Phone Number API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api/v23.0.openapi.yaml/)

API for WhatsApp Business Account phone number operations including status management,

settings configuration, messaging setup, webhook configuration, and display name management.

This endpoint provides comprehensive management capabilities for WhatsApp Business

Account phone numbers, enabling businesses to configure phone number status, messaging settings,

webhook endpoints, and business profile information.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#get-version-phone-number-id) |
| POST | [/{Version}/{Phone-Number-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api#post-version-phone-number-id) |

---

## GET /{Version}/{Phone-Number-ID}

Retrieve comprehensive information about a WhatsApp Business phone number using its unique ID (CSID).

This endpoint provides phone number status, verification details, quality metrics, and configuration information.

Core Information Returned:

* Phone number ID and display format
* Verification status and verified business name
* Quality rating based on message delivery performance
* Code verification status for two-step verification
* Display name certification status (when requested)

Quality Rating System:

The quality rating reflects how recipients have been receiving messages from this phone number:

* GREEN: High quality - messages are being delivered and engaged with well
* YELLOW: Medium quality - some delivery or engagement issues detected
* RED: Low quality - significant delivery or engagement problems
* NA: Quality rating not yet determined (new phone numbers)

Display Name Status:

When requesting the `name_status` field, you'll receive the current certification status:

* APPROVED: Business name verified and certificate available for download
* AVAILABLE\_WITHOUT\_REVIEW: Certificate ready without additional review required
* DECLINED: Business name verification rejected
* EXPIRED: Existing certificate has expired and needs renewal
* PENDING\_REVIEW: Name verification request is under review
* NONE: No certificate or verification request exists

Code Verification Status:

Indicates the two-step verification status:

* VERIFIED: Phone number has completed two-step verification
* UNVERIFIED: Two-step verification is pending or incomplete

Use Cases:

* Monitor phone number quality and delivery performance
* Check verification and certification status
* Validate phone number configuration before sending messages
* Retrieve display information for business profiles
* Audit phone number compliance and status

For more information on quality ratings, see [WhatsApp Business Account Message Quality Rating](https://www.facebook.com/business/help/896873687365001).

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "default_response": {  
    "summary": "Default phone number information",  
    "description": "Basic phone number details without additional fields",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN"  
    }  
  },  
  "with_name_status": {  
    "summary": "Phone number with display name status",  
    "description": "Includes business name certification status",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN",  
      "name_status": "AVAILABLE_WITHOUT_REVIEW"  
    }  
  },  
  "with_verification_status": {  
    "summary": "Phone number with code verification status",  
    "description": "Includes two-step verification status",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN",  
      "code_verification_status": "VERIFIED"  
    }  
  },  
  "comprehensive_response": {  
    "summary": "Full phone number information",  
    "description": "All available fields included in response",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN",  
      "name_status": "APPROVED",  
      "code_verification_status": "VERIFIED"  
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

Use the latest stable version for optimal performance and feature support.

Phone-Number-IDstring·required

Your WhatsApp Business Account phone number ID (CSID). This unique identifier is assigned when you

register the phone number with WhatsApp Business API and can be found in your WhatsApp Business Manager.

Query Parameters

---

fieldsstring

Comma-separated list of additional fields to include in the response. If not specified,

only default fields (id, display\_phone\_number, verified\_name, quality\_rating) are returned.

Available Fields:

* `name_status`: Display name certification status for business verification
* `code_verification_status`: Two-step verification status for the phone number

Field Values:

name\_status values:

* `APPROVED`: Business name approved, certificate available for download
* `AVAILABLE_WITHOUT_REVIEW`: Certificate ready without additional review
* `DECLINED`: Business name verification rejected
* `EXPIRED`: Certificate expired and needs renewal
* `PENDING_REVIEW`: Name verification under review
* `NONE`: No certificate or verification request exists

code\_verification\_status values:

* `VERIFIED`: Phone number has completed two-step verification
* `UNVERIFIED`: Two-step verification pending or incomplete

Responses

---

Retrieve comprehensive information about a WhatsApp Business phone number using its unique ID (CSID).

This endpoint provides phone number status, verification details, quality metrics, and configuration information.

Core Information Returned:

* Phone number ID and display format
* Verification status and verified business name
* Quality rating based on message delivery performance
* Code verification status for two-step verification
* Display name certification status (when requested)

Quality Rating System:

The quality rating reflects how recipients have been receiving messages from this phone number:

* GREEN: High quality - messages are being delivered and engaged with well
* YELLOW: Medium quality - some delivery or engagement issues detected
* RED: Low quality - significant delivery or engagement problems
* NA: Quality rating not yet determined (new phone numbers)

Display Name Status:

When requesting the `name_status` field, you'll receive the current certification status:

* APPROVED: Business name verified and certificate available for download
* AVAILABLE\_WITHOUT\_REVIEW: Certificate ready without additional review required
* DECLINED: Business name verification rejected
* EXPIRED: Existing certificate has expired and needs renewal
* PENDING\_REVIEW: Name verification request is under review
* NONE: No certificate or verification request exists

Code Verification Status:

Indicates the two-step verification status:

* VERIFIED: Phone number has completed two-step verification
* UNVERIFIED: Two-step verification is pending or incomplete

Use Cases:

* Monitor phone number quality and delivery performance
* Check verification and certification status
* Validate phone number configuration before sending messages
* Retrieve display information for business profiles
* Audit phone number compliance and status

For more information on quality ratings, see [WhatsApp Business Account Message Quality Rating](https://www.facebook.com/business/help/896873687365001).

200

Successfully retrieved phone number information. The response includes core phone number details

and any additional fields requested via the `fields` parameter.

Content Type: application/json

Schema: PhoneNumberInfo

Show child attributes

---

PhoneNumberInfo

---

idstring

The ID associated with the phone number

---

display\_phone\_numberstring

The string representation of the phone number

---

verified\_namestring

The verified name associated with the phone number

---

quality\_ratingOne of "GREEN", "YELLOW", "RED", "NA"

The quality rating of the phone number based on how messages have been received by recipients in recent days.

* GREEN: High Quality
* YELLOW: Medium Quality
* RED: Low Quality
* NA: Quality has not been determined

---

code\_verification\_statusOne of "VERIFIED", "UNVERIFIED"

The two-step verification status for the phone number indicating whether the number has completed two-step verification.

* VERIFIED: Phone number has completed two-step verification
* UNVERIFIED: Two-step verification is pending or incomplete

---

name\_statusOne of "APPROVED", "AVAILABLE\_WITHOUT\_REVIEW", "DECLINED", "EXPIRED", "PENDING\_REVIEW", "NONE"

The status of a display name associated with a specific phone number.

* APPROVED: The name has been approved. You can download your certificate now.
* AVAILABLE\_WITHOUT\_REVIEW: The certificate for the phone is available and display name is ready to use without review.
* DECLINED: The name has not been approved. You cannot download your certificate.
* EXPIRED: Your certificate has expired and can no longer be downloaded.
* PENDING\_REVIEW: Your name request is under review. You cannot download your certificate.
* NONE: No certificate is available.

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

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "default_response": {  
    "summary": "Default phone number information",  
    "description": "Basic phone number details without additional fields",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN"  
    }  
  },  
  "with_name_status": {  
    "summary": "Phone number with display name status",  
    "description": "Includes business name certification status",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN",  
      "name_status": "AVAILABLE_WITHOUT_REVIEW"  
    }  
  },  
  "with_verification_status": {  
    "summary": "Phone number with code verification status",  
    "description": "Includes two-step verification status",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN",  
      "code_verification_status": "VERIFIED"  
    }  
  },  
  "comprehensive_response": {  
    "summary": "Full phone number information",  
    "description": "All available fields included in response",  
    "value": {  
      "id": "106853218861309",  
      "display_phone_number": "+1 555-555-5555",  
      "verified_name": "Jaspers Market",  
      "quality_rating": "GREEN",  
      "name_status": "APPROVED",  
      "code_verification_status": "VERIFIED"  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}

Update the status and configuration of a WhatsApp Business Account phone number.

This endpoint supports comprehensive phone number management including status updates,

webhook configuration, security settings, and business profile management.

Supported Operations:

* Update connection status between WhatsApp Business Account and phone number
* Configure webhook endpoints for message delivery notifications
* Set up two-step verification and security notifications
* Update display names for name verification
* Configure search visibility and privacy settings
* Set username for the WhatsApp Business Account
* Override webhook callback URIs for message notifications

Business Logic Requirements:

* App must be linked to the WhatsApp Business Account
* Webhook subscription must exist before configuring callback URI overrides
* Callback URI verification is performed for external URLs
* Internal URLs are allowed for development environments

Rate Limiting:

WhatsApp use case throttling applies. Use appropriate retry logic with exponential backoff.

Security Validations:

* App-to-WABA linking validation enforced
* Webhook callback URI verification required for external URLs
* Business integration system user checks for AI bot onboarding
* Capability checks for first-party app access

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "connection_status": "CONNECTED"  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "message_sent": {  
    "summary": "Message sent successfully",  
    "value": {  
      "messaging_product": "whatsapp",  
      "contacts": [  
        {  
          "input": "+1234567890",  
          "wa_id": "1234567890"  
        }  
      ],  
      "messages": [  
        {  
          "id": "wamid.HBgLMTY3NzE4NDM4NjAVAgARGBI5QTRCMEM4RjA2NzY4RTlBNAA="  
        }  
      ]  
    }  
  },  
  "settings_updated": {  
    "summary": "Settings updated successfully",  
    "value": {  
      "success": true  
    }  
  },  
  "phone_registered": {  
    "summary": "Phone number registered successfully",  
    "value": {  
      "success": true  
    }  
  },  
  "code_verified": {  
    "summary": "Verification code verified successfully",  
    "value": {  
      "success": true  
    }  
  },  
  "two_step_verification_set": {  
    "summary": "Two-step verification code set successfully",  
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

Your WhatsApp Business Account phone number ID (CSID). This ID is provided when you

register the phone number and can be found in your WhatsApp Business Manager.

Request BodyOptional

---

Configuration parameters for updating phone number status and settings.

All parameters are optional and can be combined in a single request.

Content Type: application/json

Schema: PhoneNumberStatusUpdateRequest

Show child attributes

---

PhoneNumberStatusUpdateRequest

---

connection\_statusWhatsAppBusinessAccountToNumberStatus

Connection status between WhatsApp Business Account and phone number

---

webhook\_urlstring (uri)

Webhook URL for receiving message notifications

---

whatsapp\_business\_api\_dataWhatsAppBusinessApiData

WhatsApp Business API configuration data

Show child attributes

---

pinstring

Two-step verification PIN (can be empty string)

---

show\_security\_notificationsboolean

Whether to show security notifications

---

notify\_user\_change\_numberboolean

Whether to notify users when changing number

---

pinstring

Two-step verification PIN (can be empty string)

---

search\_visibilityWAAPIBusinessGlobalSearchStateStatus

Search visibility status for the WhatsApp Business Account

---

webhook\_configurationWebhookConfiguration

Webhook configuration settings

Show child attributes

---

override\_callback\_uristring (uri)·required

Override callback URI for webhook notifications (can be empty string)

---

verify\_tokenstring

Token used to verify webhook requests

---

new\_display\_namestring

New display name for name verification request

---

usernamestring

Username for the WhatsApp Business Account

Responses

---

Update the status and configuration of a WhatsApp Business Account phone number.

This endpoint supports comprehensive phone number management including status updates,

webhook configuration, security settings, and business profile management.

Supported Operations:

* Update connection status between WhatsApp Business Account and phone number
* Configure webhook endpoints for message delivery notifications
* Set up two-step verification and security notifications
* Update display names for name verification
* Configure search visibility and privacy settings
* Set username for the WhatsApp Business Account
* Override webhook callback URIs for message notifications

Business Logic Requirements:

* App must be linked to the WhatsApp Business Account
* Webhook subscription must exist before configuring callback URI overrides
* Callback URI verification is performed for external URLs
* Internal URLs are allowed for development environments

Rate Limiting:

WhatsApp use case throttling applies. Use appropriate retry logic with exponential backoff.

Security Validations:

* App-to-WABA linking validation enforced
* Webhook callback URI verification required for external URLs
* Business integration system user checks for AI bot onboarding
* Capability checks for first-party app access

200

Operation completed successfully

Content Type: application/json

Schema: Must be one of: MessageResponse, SuccessResponse

Show child attributes

---

Must be one of: MessageResponse, SuccessResponse

---

MessageResponse

Response from sending a message

Show child attributes

---

messaging\_product"whatsapp"·required

Messaging service

---

contactsarray of ContactResponse·required

Contact information

Show child attributes

---

contacts[]ContactResponse

Show child attributes

---

inputstring·required

Input phone number

---

wa\_idstring

WhatsApp ID

---

messagesarray of MessageResponseItem·required

Message information

Show child attributes

---

messages[]MessageResponseItem

Show child attributes

---

idstring·required

Message ID

---

SuccessResponse

Generic success response

Show child attributes

---

successboolean·required

Operation success status

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

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "connection_status": "CONNECTED"  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "message_sent": {  
    "summary": "Message sent successfully",  
    "value": {  
      "messaging_product": "whatsapp",  
      "contacts": [  
        {  
          "input": "+1234567890",  
          "wa_id": "1234567890"  
        }  
      ],  
      "messages": [  
        {  
          "id": "wamid.HBgLMTY3NzE4NDM4NjAVAgARGBI5QTRCMEM4RjA2NzY4RTlBNAA="  
        }  
      ]  
    }  
  },  
  "settings_updated": {  
    "summary": "Settings updated successfully",  
    "value": {  
      "success": true  
    }  
  },  
  "phone_registered": {  
    "summary": "Phone number registered successfully",  
    "value": {  
      "success": true  
    }  
  },  
  "code_verified": {  
    "summary": "Verification code verified successfully",  
    "value": {  
      "success": true  
    }  
  },  
  "two_step_verification_set": {  
    "summary": "Two-step verification code set successfully",  
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
