---
title: "WhatsApp Cloud API - Extended Credits API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api
---

# WhatsApp Cloud API - Extended Credits API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/extended-credits-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/extended-credits-api/v25.0.openapi.yaml/)

Retrieve extended credit line information for WhatsApp Business Accounts.

Returns credit details including balances, allocation, ownership, and billing information.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Business-ID}/extendedcredits](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#get-version-business-id-extendedcredits) |

---

## GET /{Version}/{Business-ID}/extendedcredits

Retrieve extended credit line information for a business account, including

balances, credit availability, ownership, and billing details.

### Request Syntax

**GET** /{Version}/{Business-ID}/extendedcredits

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/extendedcredits' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "credit_lines": {  
    "summary": "Extended credit lines with balances",  
    "value": {  
      "data": [  
        {  
          "id": "1972385232742146",  
          "legal_entity_name": "Lucky Shrub LLC",  
          "credit_type": "WHATSAPP_BUSINESS",  
          "balance": {  
            "amount": "500.00",  
            "amount_in_hundredths": "50000",  
            "currency": "USD",  
            "offsetted_amount": "50000"  
          },  
          "credit_available": {  
            "amount": "1500.00",  
            "amount_in_hundredths": "150000",  
            "currency": "USD",  
            "offsetted_amount": "150000"  
          },  
          "max_balance": {  
            "amount": "2000.00",  
            "amount_in_hundredths": "200000",  
            "currency": "USD",  
            "offsetted_amount": "200000"  
          },  
          "owner_business": {  
            "id": "9876543210987654",  
            "name": "Example Business Corp"  
          },  
          "is_access_revoked": false,  
          "is_shared_credit_line_enabled_for_mpa": false  
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

Graph API version

Business-IDstring·required

The unique identifier of the Meta Business Portfolio

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response.

Available fields: id, credit\_type, balance, credit\_available, max\_balance,

online\_max\_balance, allocated\_amount, partition\_from, owner\_business,

owner\_business\_name, is\_automated\_experience, legal\_entity\_name,

send\_bill\_to\_biz\_name, liable\_biz\_name, receiving\_credit\_allocation\_config,

is\_access\_revoked, is\_shared\_credit\_line\_enabled\_for\_mpa

order\_by\_is\_owned\_credentialboolean

When true, reorders results so owning credentials appear before receiving credentials.

Responses

---

Retrieve extended credit line information for a business account, including

balances, credit availability, ownership, and billing details.

200

Extended credit lines retrieved successfully

Content Type: application/json

Schema: ExtendedCreditsResponse

Show child attributes

---

ExtendedCreditsResponse

---

dataarray of ExtendedCreditLine

Array of extended credit line entries

Show child attributes

---

data[]ExtendedCreditLine

Extended credit line associated with a business account

Show child attributes

---

idstring

Unique identifier for the extended credit line

---

credit\_typeExtendedCreditType

Type of extended credit

---

balanceCurrencyAmount

Currency amount with formatting details

Show child attributes

---

amountstring

Formatted currency amount

---

amount\_in\_hundredthsstring

Amount in hundredths (minor currency units)

---

currencystring

ISO 4217 currency code

---

offsetted\_amountstring

Offset amount in minor currency units

---

credit\_availableCurrencyAmount

Currency amount with formatting details

Show child attributes

---

amountstring

Formatted currency amount

---

amount\_in\_hundredthsstring

Amount in hundredths (minor currency units)

---

currencystring

ISO 4217 currency code

---

offsetted\_amountstring

Offset amount in minor currency units

---

max\_balanceCurrencyAmount

Currency amount with formatting details

Show child attributes

---

amountstring

Formatted currency amount

---

amount\_in\_hundredthsstring

Amount in hundredths (minor currency units)

---

currencystring

ISO 4217 currency code

---

offsetted\_amountstring

Offset amount in minor currency units

---

online\_max\_balanceCurrencyAmount

Currency amount with formatting details

Show child attributes

---

amountstring

Formatted currency amount

---

amount\_in\_hundredthsstring

Amount in hundredths (minor currency units)

---

currencystring

ISO 4217 currency code

---

offsetted\_amountstring

Offset amount in minor currency units

---

allocated\_amountCurrencyAmount

Currency amount with formatting details

Show child attributes

---

amountstring

Formatted currency amount

---

amount\_in\_hundredthsstring

Amount in hundredths (minor currency units)

---

currencystring

ISO 4217 currency code

---

offsetted\_amountstring

Offset amount in minor currency units

---

partition\_fromstring

Partition source for the credit line

---

owner\_businessobject

Business that owns this credit line

Show child attributes

---

idstring

Unique identifier for the owning business

---

namestring

Name of the owning business

---

owner\_business\_namestring

Name of the business that owns this credit line

---

is\_automated\_experienceboolean

Whether this credit line uses automated experience

---

legal\_entity\_namestring

Legal entity name associated with the credit line

---

send\_bill\_to\_biz\_namestring

Name of the business to send bills to

---

liable\_biz\_namestring

Name of the liable business

---

receiving\_credit\_allocation\_configobject

Credit allocation configuration for receiving credentials

Show child attributes

---

idstring

Unique identifier for the allocation config

---

partition\_typestring

Type of credit allocation partition

---

currency\_amountCurrencyAmount

Currency amount with formatting details

Show child attributes

---

amountstring

Formatted currency amount

---

amount\_in\_hundredthsstring

Amount in hundredths (minor currency units)

---

currencystring

ISO 4217 currency code

---

offsetted\_amountstring

Offset amount in minor currency units

---

is\_access\_revokedboolean

Whether access to this credit line has been revoked

---

is\_shared\_credit\_line\_enabled\_for\_mpaboolean

Whether shared credit line is enabled for managed partner accounts

---

pagingCursorPaging

Cursor-based pagination information

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page

---

afterstring

Cursor pointing to the end of the page

---

previousstring

URL for the previous page of results

---

nextstring

URL for the next page of results

400

Bad Request

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

More specific error subcode

---

fbtrace\_idstring

Unique identifier for debugging

---

is\_transientboolean

Whether this error is temporary

401

Unauthorized

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

More specific error subcode

---

fbtrace\_idstring

Unique identifier for debugging

---

is\_transientboolean

Whether this error is temporary

403

Forbidden

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

More specific error subcode

---

fbtrace\_idstring

Unique identifier for debugging

---

is\_transientboolean

Whether this error is temporary

404

Not Found

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

More specific error subcode

---

fbtrace\_idstring

Unique identifier for debugging

---

is\_transientboolean

Whether this error is temporary

500

Internal Server Error

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

More specific error subcode

---

fbtrace\_idstring

Unique identifier for debugging

---

is\_transientboolean

Whether this error is temporary

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Business-ID}/extendedcredits' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404500

---

```
{  
  "credit_lines": {  
    "summary": "Extended credit lines with balances",  
    "value": {  
      "data": [  
        {  
          "id": "1972385232742146",  
          "legal_entity_name": "Lucky Shrub LLC",  
          "credit_type": "WHATSAPP_BUSINESS",  
          "balance": {  
            "amount": "500.00",  
            "amount_in_hundredths": "50000",  
            "currency": "USD",  
            "offsetted_amount": "50000"  
          },  
          "credit_available": {  
            "amount": "1500.00",  
            "amount_in_hundredths": "150000",  
            "currency": "USD",  
            "offsetted_amount": "150000"  
          },  
          "max_balance": {  
            "amount": "2000.00",  
            "amount_in_hundredths": "200000",  
            "currency": "USD",  
            "offsetted_amount": "200000"  
          },  
          "owner_business": {  
            "id": "9876543210987654",  
            "name": "Example Business Corp"  
          },  
          "is_access_revoked": false,  
          "is_shared_credit_line_enabled_for_mpa": false  
        }  
      ]  
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
