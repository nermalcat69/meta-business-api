---
title: "WhatsApp Cloud API - WhatsApp Business Profile API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-api
---

# WhatsApp Cloud API - WhatsApp Business Profile API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-profile-api/v23.0.openapi.yaml/)

API for managing WhatsApp Business Profile information including business details,

contact information, and profile settings.

This endpoint allows businesses to retrieve and update their WhatsApp Business Profile

information, including business description, contact details, address, and other

profile settings essential for customer communication.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/whatsapp\_business\_profile](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-api#get-version-phone-number-id-whatsapp-business-profile) |
| POST | [/{Version}/{Phone-Number-ID}/whatsapp\_business\_profile](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-qr-code-api#post-version-phone-number-id-whatsapp-business-profile) |

---

## GET /{Version}/{Phone-Number-ID}/whatsapp\_business\_profile

Retrieve comprehensive information about a WhatsApp Business Profile, including

business details, contact information, and profile settings.

Use Cases:

* Retrieve current business profile information
* Check business contact details and settings
* Verify business vertical and website information
* Get profile picture URL and about section

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Business profile information can be cached for moderate periods, but should be

refreshed periodically to ensure accuracy.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/whatsapp\_business\_profile

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_profile' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "business_profile_details": {  
    "summary": "Complete business profile information",  
    "value": {  
      "data": [  
        {  
          "business_profile": {  
            "messaging_product": "whatsapp",  
            "about": "Welcome to our business! We provide excellent service.",  
            "address": "123 Business Street, City, State 12345",  
            "description": "We are a leading provider of quality products and services.",  
            "email": "contact@business.com",  
            "profile_picture_url": "https://pps.whatsapp.net/v/profile_picture_url",  
            "websites": [  
              "https://www.business.com",  
              "https://www.facebook.com/business"  
            ],  
            "vertical": "RESTAURANT"  
          }  
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

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Graph API version to use for this request. Determines the API behavior and available features.

Phone-Number-IDstring·required

Your WhatsApp Business phone number ID. This ID represents the phone number

status entity and can be obtained from your WhatsApp Business Account phone numbers list.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (messaging\_product, about, address, description, email, profile\_picture\_url, websites, vertical).

Available fields: messaging\_product, about, address, description, email, profile\_picture\_url, websites, vertical

Responses

---

Retrieve comprehensive information about a WhatsApp Business Profile, including

business details, contact information, and profile settings.

Use Cases:

* Retrieve current business profile information
* Check business contact details and settings
* Verify business vertical and website information
* Get profile picture URL and about section

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Business profile information can be cached for moderate periods, but should be

refreshed periodically to ensure accuracy.

200

Successfully retrieved WhatsApp Business Profile information

Content Type: application/json

Schema: WhatsAppBusinessProfileResponse

Show child attributes

---

WhatsAppBusinessProfileResponse

---

dataarray of object

Show child attributes

---

data[]object

Show child attributes

---

business\_profileWhatsAppBusinessProfile

WhatsApp Business Profile information and settings

Show child attributes

---

messaging\_product"whatsapp"·required

The messaging service used for the request

---

aboutstring

The text to display in business profile's About section

---

addressstring

The address of the business

---

descriptionstring

Description of the business

---

emailstring (email)

The contact email address of the business

---

profile\_picture\_urlstring (uri)

URL of the business profile picture

---

websitesarray of string (uri)

URLs associated with the business

Show child attributes

---

websites[]string (uri)

---

verticalWhatsAppBusinessVertical

The industry type of the business

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

Not Found - Phone Number ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_profile' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "business_profile_details": {  
    "summary": "Complete business profile information",  
    "value": {  
      "data": [  
        {  
          "business_profile": {  
            "messaging_product": "whatsapp",  
            "about": "Welcome to our business! We provide excellent service.",  
            "address": "123 Business Street, City, State 12345",  
            "description": "We are a leading provider of quality products and services.",  
            "email": "contact@business.com",  
            "profile_picture_url": "https://pps.whatsapp.net/v/profile_picture_url",  
            "websites": [  
              "https://www.business.com",  
              "https://www.facebook.com/business"  
            ],  
            "vertical": "RESTAURANT"  
          }  
        }  
      ]  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/whatsapp\_business\_profile

Update WhatsApp Business Profile information including business details,

contact information, and profile settings.

Use Cases:

* Update business description and contact information
* Modify business address and website information
* Change business vertical classification
* Update profile picture using Resumable Upload API
* Update profile picture and about section

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Profile Picture Updates:

To update the profile picture, first use the Resumable Upload API to obtain a

profile\_picture\_handle, then include it in the request.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/whatsapp\_business\_profile

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_profile' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "about": "Welcome to our business! We provide excellent service.",  
  "address": "123 Business Street, City, State 12345",  
  "description": "We are a leading provider of quality products and services.",  
  "email": "contact@business.com",  
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU",  
  "websites": [  
    "https://www.business.com",  
    "https://www.facebook.com/business"  
  ],  
  "vertical": "RESTAURANT"  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "profile_update_success": {  
    "summary": "Successful profile update",  
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

Graph API version to use for this request. Determines the API behavior and available features.

Phone-Number-IDstring·required

Your WhatsApp Business phone number ID. This ID represents the phone number

status entity and can be obtained from your WhatsApp Business Account phone numbers list.

Request BodyRequired

---

Content Type: application/json

Schema: WhatsAppBusinessProfileUpdateRequest

Show child attributes

---

WhatsAppBusinessProfileUpdateRequest

---

messaging\_product"whatsapp"·required

The messaging service used for the request

---

aboutstring

The text to display in business profile's About section

---

addressstring

The address of the business

---

descriptionstring

Description of the business

---

emailstring (email)

The contact email address of the business

---

profile\_picture\_handlestring

The handle of the profile picture generated from Resumable Upload API

---

websitesarray of string (uri)

URLs associated with the business

Show child attributes

---

websites[]string (uri)

---

verticalWhatsAppBusinessVertical

The industry type of the business

Responses

---

Update WhatsApp Business Profile information including business details,

contact information, and profile settings.

Use Cases:

* Update business description and contact information
* Modify business address and website information
* Change business vertical classification
* Update profile picture using Resumable Upload API
* Update profile picture and about section

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Profile Picture Updates:

To update the profile picture, first use the Resumable Upload API to obtain a

profile\_picture\_handle, then include it in the request.

200

Successfully updated WhatsApp Business Profile

Content Type: application/json

Schema: WhatsAppBusinessProfileUpdateResponse

Show child attributes

---

WhatsAppBusinessProfileUpdateResponse

---

successboolean

Indicates whether the update was successful

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

Not Found - Phone Number ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/whatsapp_business_profile' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "about": "Welcome to our business! We provide excellent service.",  
  "address": "123 Business Street, City, State 12345",  
  "description": "We are a leading provider of quality products and services.",  
  "email": "contact@business.com",  
  "profile_picture_handle": "4:VGVzdC5wbmc=:aW1hZ2UvanBlZw==:ARat4Mt-L09JON3f30SmDkdyPSuyBkDDYiB4TFXuXISjdgHoNp2b7j882_9Jzr2tPrdKxi92UygyVzTivJiOvmebMpZ6MIjTik3gTyI3ZCQAgQ:e:1659995302:2022308451254161:636685196:ARZf1ftR5N6-qSLtklU",  
  "websites": [  
    "https://www.business.com",  
    "https://www.facebook.com/business"  
  ],  
  "vertical": "RESTAURANT"  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "profile_update_success": {  
    "summary": "Successful profile update",  
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
