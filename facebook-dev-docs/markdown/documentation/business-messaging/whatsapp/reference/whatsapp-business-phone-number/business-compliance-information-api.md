---
title: "WhatsApp Business Cloud API - Business Compliance Information API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-compliance-information-api
---

# WhatsApp Business Cloud API - Business Compliance Information API

Version

v23.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-compliance-information-api/v23.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-compliance-information-api/v23.0.openapi.yaml/)

Retrieve WhatsApp Business Account compliance information for regulatory requirements.

Returns business entity details, registration status, and contact information

for grievance officers and customer care (primarily for India-based businesses).

This endpoint allows businesses to retrieve comprehensive compliance information including entity

details, registration status, and required contact information for regulatory compliance purposes.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/business\_compliance\_info](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-compliance-information-api#get-version-phone-number-id-business-compliance-info) |
| POST | [/{Version}/{Phone-Number-ID}/business\_compliance\_info](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/business-compliance-information-api#post-version-phone-number-id-business-compliance-info) |

---

## GET /{Version}/{Phone-Number-ID}/business\_compliance\_info

Retrieve comprehensive business compliance information for a WhatsApp Business Account phone number,

including entity details, registration status, and required contact information for regulatory compliance.

Use Cases:

* Retrieve business compliance information for regulatory reporting
* Verify business entity registration status and contact details
* Access grievance officer and customer care information
* Support compliance audits and regulatory verification processes

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Compliance information can be cached for moderate periods, but should be refreshed regularly

to ensure accuracy for regulatory purposes. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/business\_compliance\_info

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/business_compliance_info' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "complete_compliance_info": {  
    "summary": "Complete compliance information with all details",  
    "value": {  
      "data": [  
        {  
          "whatsapp_business_account_id": "1234567890123456",  
          "messaging_product": "whatsapp",  
          "entity_name": "Lucky Shrub Private Limited",  
          "entity_type": "Partnership",  
          "entity_type_custom": "",  
          "is_registered": true,  
          "grievance_officer_details": {  
            "name": "Chandravati P.",  
            "email": "chandravati@luckyshrub.com",  
            "mobile_number": "+913854559033",  
            "landline_number": "+913857614343"  
          },  
          "customer_care_details": {  
            "email": "support@luckyshrub.com",  
            "mobile_number": "+913854559033",  
            "landline_number": "+913857614343"  
          }  
        }  
      ]  
    }  
  },  
  "minimal_compliance_info": {  
    "summary": "Minimal compliance information for unregistered business",  
    "value": {  
      "data": [  
        {  
          "whatsapp_business_account_id": "2345678901234567",  
          "messaging_product": "whatsapp",  
          "entity_name": "",  
          "entity_type": "",  
          "entity_type_custom": "",  
          "is_registered": false,  
          "grievance_officer_details": "",  
          "customer_care_details": ""  
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

Your WhatsApp Business Account phone number ID. This ID can be found in your

WhatsApp Business Manager or through phone number management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned. Available fields: messaging\_product, entity\_name,

entity\_type, entity\_type\_custom, is\_registered, grievance\_officer\_details, customer\_care\_details

Responses

---

Retrieve comprehensive business compliance information for a WhatsApp Business Account phone number,

including entity details, registration status, and required contact information for regulatory compliance.

Use Cases:

* Retrieve business compliance information for regulatory reporting
* Verify business entity registration status and contact details
* Access grievance officer and customer care information
* Support compliance audits and regulatory verification processes

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Compliance information can be cached for moderate periods, but should be refreshed regularly

to ensure accuracy for regulatory purposes. Implement appropriate cache invalidation strategies.

200

Successfully retrieved business compliance information

Content Type: application/json

Schema: object

Show child attributes

---

dataarray of BusinessComplianceInfo

Show child attributes

---

data[]BusinessComplianceInfo

WhatsApp Business Account compliance information and regulatory details

Show child attributes

---

whatsapp\_business\_account\_idstring·required

Unique identifier for the WhatsApp Business Account

---

messaging\_product"whatsapp"

Messaging product identifier, always 'whatsapp' for WhatsApp Business

---

entity\_namestring

Legal name of the business entity

---

entity\_typestring

Type of business entity (e.g., Partnership, Private Limited Company, etc.)

---

entity\_type\_customstring

Custom entity type description when standard types don't apply

---

is\_registeredboolean

Whether the business entity is officially registered with regulatory authorities

---

grievance\_officer\_detailsGrievanceOfficerDetails

Contact information for the designated grievance officer

Show child attributes

---

namestring

Full name of the grievance officer

---

emailstring (email)

Email address for grievance officer contact

---

mobile\_numberstring

Mobile phone number for grievance officer (with country code)

---

landline\_numberstring

Landline phone number for grievance officer (with country code)

---

customer\_care\_detailsCustomerCareDetails

Contact information for customer care and support

Show child attributes

---

emailstring (email)

Email address for customer care contact

---

mobile\_numberstring

Mobile phone number for customer care (with country code)

---

landline\_numberstring

Landline phone number for customer care (with country code)

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/business_compliance_info' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422429500

---

```
{  
  "complete_compliance_info": {  
    "summary": "Complete compliance information with all details",  
    "value": {  
      "data": [  
        {  
          "whatsapp_business_account_id": "1234567890123456",  
          "messaging_product": "whatsapp",  
          "entity_name": "Lucky Shrub Private Limited",  
          "entity_type": "Partnership",  
          "entity_type_custom": "",  
          "is_registered": true,  
          "grievance_officer_details": {  
            "name": "Chandravati P.",  
            "email": "chandravati@luckyshrub.com",  
            "mobile_number": "+913854559033",  
            "landline_number": "+913857614343"  
          },  
          "customer_care_details": {  
            "email": "support@luckyshrub.com",  
            "mobile_number": "+913854559033",  
            "landline_number": "+913857614343"  
          }  
        }  
      ]  
    }  
  },  
  "minimal_compliance_info": {  
    "summary": "Minimal compliance information for unregistered business",  
    "value": {  
      "data": [  
        {  
          "whatsapp_business_account_id": "2345678901234567",  
          "messaging_product": "whatsapp",  
          "entity_name": "",  
          "entity_type": "",  
          "entity_type_custom": "",  
          "is_registered": false,  
          "grievance_officer_details": "",  
          "customer_care_details": ""  
        }  
      ]  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/business\_compliance\_info

Create or update comprehensive business compliance information for a WhatsApp Business Account phone number,

including entity details, registration status, and required contact information for regulatory compliance.

Use Cases:

* Set business compliance information for regulatory reporting
* Update business entity registration status and details
* Configure grievance officer and customer care contact information
* Ensure compliance data accuracy for regulatory purposes
* Support compliance setup for new business operations

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Validation Rules:

* `entity_name` is required and must be between 2 and 128 characters
* `entity_type` is required and must be a valid entity type enum value
* `entity_type_custom` is mandatory when `entity_type` is "Other"
* `entity_type_custom` cannot be used with non-"Other" entity types
* `is_registered` can only be used with "Other" or "Partnership" entity types
* `grievance_officer_details` is required with complete contact information
* `customer_care_details` is required with contact information
* Phone numbers must be valid international format with country code
* Email addresses must be valid format and under 128 characters

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/business\_compliance\_info

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/business_compliance_info' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "entity_name": "Lucky Shrub Private Limited",  
  "entity_type": "PARTNERSHIP",  
  "is_registered": true,  
  "grievance_officer_details": {  
    "name": "Chandravati P.",  
    "email": "chandravati@luckyshrub.com",  
    "mobile_number": "+913854559033",  
    "landline_number": "+913857614343"  
  },  
  "customer_care_details": {  
    "email": "support@luckyshrub.com",  
    "mobile_number": "+913854559033",  
    "landline_number": "+913857614343"  
  }  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "successful_update": {  
    "summary": "Successful compliance information update",  
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

Your WhatsApp Business Account phone number ID. This ID can be found in your

WhatsApp Business Manager or through phone number management APIs.

Request BodyRequired

---

Content Type: application/json

Schema: BusinessComplianceInfoUpdateRequest

Show child attributes

---

BusinessComplianceInfoUpdateRequest

---

messaging\_product"whatsapp"·required

Messaging product identifier, must be 'whatsapp'

---

entity\_namestring·required

Legal name of the business entity

---

entity\_typeBusinessEntityType·required

Type of business entity for compliance purposes

---

entity\_type\_customstring

Custom entity type description when entity\_type is "OTHER". Required for OTHER entity type.

---

is\_registeredboolean

Whether the business entity is officially registered with regulatory authorities. Can only be used with "OTHER" or "PARTNERSHIP" entity types.

---

grievance\_officer\_detailsGrievanceOfficerUpdateDetails·required

Contact information for the designated grievance officer

Show child attributes

---

namestring·required

Full name of the grievance officer

---

emailstring (email)·required

Email address for grievance officer contact

---

mobile\_numberstring

Mobile phone number for grievance officer (with country code)

---

landline\_numberstring

Landline phone number for grievance officer (with country code)

---

customer\_care\_detailsCustomerCareUpdateDetails·required

Contact information for customer care and support

Show child attributes

---

emailstring (email)·required

Email address for customer care contact

---

mobile\_numberstring

Mobile phone number for customer care (with country code)

---

landline\_numberstring

Landline phone number for customer care (with country code)

Responses

---

Create or update comprehensive business compliance information for a WhatsApp Business Account phone number,

including entity details, registration status, and required contact information for regulatory compliance.

Use Cases:

* Set business compliance information for regulatory reporting
* Update business entity registration status and details
* Configure grievance officer and customer care contact information
* Ensure compliance data accuracy for regulatory purposes
* Support compliance setup for new business operations

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Validation Rules:

* `entity_name` is required and must be between 2 and 128 characters
* `entity_type` is required and must be a valid entity type enum value
* `entity_type_custom` is mandatory when `entity_type` is "Other"
* `entity_type_custom` cannot be used with non-"Other" entity types
* `is_registered` can only be used with "Other" or "Partnership" entity types
* `grievance_officer_details` is required with complete contact information
* `customer_care_details` is required with contact information
* Phone numbers must be valid international format with country code
* Email addresses must be valid format and under 128 characters

200

Successfully updated business compliance information

Content Type: application/json

Schema: object

Show child attributes

---

successboolean·required

Indicates whether the compliance information was successfully updated

400

Bad Request - Invalid parameters or validation errors

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
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/business_compliance_info' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "messaging_product": "whatsapp",  
  "entity_name": "Lucky Shrub Private Limited",  
  "entity_type": "PARTNERSHIP",  
  "is_registered": true,  
  "grievance_officer_details": {  
    "name": "Chandravati P.",  
    "email": "chandravati@luckyshrub.com",  
    "mobile_number": "+913854559033",  
    "landline_number": "+913857614343"  
  },  
  "customer_care_details": {  
    "email": "support@luckyshrub.com",  
    "mobile_number": "+913854559033",  
    "landline_number": "+913857614343"  
  }  
}'
```

Select status code

200400401403404422429500

---

```
{  
  "successful_update": {  
    "summary": "Successful compliance information update",  
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
