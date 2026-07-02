---
title: "WhatsApp Business Account - Assigned Users Management API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/conversational-automation-api
---

# WhatsApp Business Account - Assigned Users Management API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/assigned-users-management-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/assigned-users-management-api/v25.0.openapi.yaml/)

API for managing user assignments and permissions for WhatsApp Business Accounts.

This endpoint allows businesses to manage user access to their WhatsApp Business Accounts,

including listing assigned users, adding users with specific permissions, and removing user access.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{WhatsApp-Business-Account-ID}/assigned\_users](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/conversational-automation-api#get-version-whatsapp-business-account-id-assigned-users) |
| POST | [/{Version}/{WhatsApp-Business-Account-ID}/assigned\_users](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/conversational-automation-api#post-version-whatsapp-business-account-id-assigned-users) |
| DELETE | [/{Version}/{WhatsApp-Business-Account-ID}/assigned\_users](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/conversational-automation-api#delete-version-whatsapp-business-account-id-assigned-users) |

---

## GET /{Version}/{WhatsApp-Business-Account-ID}/assigned\_users

Retrieve a list of users assigned to the WhatsApp Business Account with their permissions

and user details. This endpoint supports pagination and filtering capabilities.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

User assignment data can be cached for short periods, but permission changes may occur

frequently. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{WhatsApp-Business-Account-ID}/assigned\_users

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Account-ID}/assigned_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_users": {  
    "summary": "Multiple assigned users with different types",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "John Smith",  
          "business": {  
            "id": "9876543210987654",  
            "name": "Example Business Inc"  
          },  
          "user_type": "BUSINESS_USER"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "System User Bot",  
          "business": {  
            "id": "9876543210987654",  
            "name": "Example Business Inc"  
          },  
          "user_type": "SYSTEM_USER"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ",  
          "before": "QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVVhF"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/assigned_users?access_token=YOUR_SYSTEM_USER_ACCESS_TOKEN&limit=25&after=QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ"  
      },  
      "summary": {  
        "total_count": 15  
      }  
    }  
  },  
  "single_user": {  
    "summary": "Single assigned user",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Jane Doe",  
          "user_type": "BUSINESS_USER"  
        }  
      ],  
      "summary": {  
        "total_count": 1  
      }  
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

WhatsApp-Business-Account-IDstring·required

Your WhatsApp Business Account ID. This ID is provided when you create the account

and can be found in your Business Manager or through account management APIs.

Query Parameters

---

businessstring·required

Business ID that owns or has access to the WhatsApp Business Account.

This parameter is required to specify the business context for user assignments.

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (id, name). Available fields: id, name, business, user\_type

limitinteger [min: 1, max: 100]

Maximum number of assigned users to return per page. Default is 25, maximum is 100.

afterstring

Cursor for pagination. Use this to get the next page of results.

beforestring

Cursor for pagination. Use this to get the previous page of results.

Responses

---

Retrieve a list of users assigned to the WhatsApp Business Account with their permissions

and user details. This endpoint supports pagination and filtering capabilities.

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

User assignment data can be cached for short periods, but permission changes may occur

frequently. Implement appropriate cache invalidation strategies.

200

Successfully retrieved assigned users list

Content Type: application/json

Schema: AssignedUsersResponse

Show child attributes

---

AssignedUsersResponse

---

dataarray of AssignedUser·required

Array of assigned users

Show child attributes

---

data[]AssignedUser

User assigned to WhatsApp Business Account with permissions

Show child attributes

---

idstring·required

Unique identifier for the assigned user

---

namestring·required

Display name of the assigned user

---

businessBusinessNode

Business entity associated with the user

Show child attributes

---

idstring

Unique identifier for the business

---

namestring

Name of the business

---

user\_typeAssignedUserType

Type of user assignment

---

pagingCursorPaging

Cursor-based pagination information

Show child attributes

---

cursorsobject

Show child attributes

---

beforestring

Cursor pointing to the start of the page of data

---

afterstring

Cursor pointing to the end of the page of data

---

nextstring

Graph API endpoint for the next page of results

---

previousstring

Graph API endpoint for the previous page of results

---

summaryAssignedUsersSummary

Summary information about assigned users

Show child attributes

---

total\_countinteger

Total number of assigned users

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

Not Found - WhatsApp Business Account ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Account-ID}/assigned_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200400401403404422500

---

```
{  
  "multiple_users": {  
    "summary": "Multiple assigned users with different types",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "John Smith",  
          "business": {  
            "id": "9876543210987654",  
            "name": "Example Business Inc"  
          },  
          "user_type": "BUSINESS_USER"  
        },  
        {  
          "id": "2345678901234567",  
          "name": "System User Bot",  
          "business": {  
            "id": "9876543210987654",  
            "name": "Example Business Inc"  
          },  
          "user_type": "SYSTEM_USER"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ",  
          "before": "QVFIUmx1WTBpMGpJWXprYzVYaVhabW9PVVhF"  
        },  
        "next": "https://graph.facebook.com/v25.0/1234567890123456/assigned_users?access_token=YOUR_SYSTEM_USER_ACCESS_TOKEN&limit=25&after=QVFIUjJ5M2wwdmtONVFHbDZAMVQ4OGJBQUFBQQ"  
      },  
      "summary": {  
        "total_count": 15  
      }  
    }  
  },  
  "single_user": {  
    "summary": "Single assigned user",  
    "value": {  
      "data": [  
        {  
          "id": "1234567890123456",  
          "name": "Jane Doe",  
          "user_type": "BUSINESS_USER"  
        }  
      ],  
      "summary": {  
        "total_count": 1  
      }  
    }  
  }  
}
```

---

## POST /{Version}/{WhatsApp-Business-Account-ID}/assigned\_users

Add a user to the WhatsApp Business Account with specified permission tasks.

This operation grants the user access to perform specific actions on the account

based on the provided permission tasks.

Permission Tasks:

Different permission tasks grant access to different WhatsApp Business Account features:

* MANAGE: General account management permissions
* DEVELOP: Development and API access permissions
* MANAGE\_TEMPLATES: Message template management
* MANAGE\_PHONE: Phone number management
* MESSAGING: Send and receive messages

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**POST** /{Version}/{WhatsApp-Business-Account-ID}/assigned\_users

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Account-ID}/assigned_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/x-www-form-urlencoded' \  
  --data-urlencode 'user=2345678901234567' \  
  --data-urlencode 'tasks[0]=MANAGE' \  
  --data-urlencode 'tasks[1]=VIEW_COST'
```

Select status code

200400401403404422500

---

```
{  
  "success": true  
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

WhatsApp-Business-Account-IDstring·required

Your WhatsApp Business Account ID. This ID is provided when you create the account

and can be found in your Business Manager or through account management APIs.

Request BodyRequired

---

Content Type: application/x-www-form-urlencoded

Schema: object

Show child attributes

---

userstring·required

User ID of the person to add to the WhatsApp Business Account.

This must be a valid Facebook user ID.

---

tasksarray of WhatsAppBusinessAccountPermissionTask·required

Array of permission tasks to grant to the user. These tasks determine

what actions the user can perform on the WhatsApp Business Account.

Show child attributes

---

tasks[]WhatsAppBusinessAccountPermissionTask

Granular permission tasks for WhatsApp Business Account access

Responses

---

Add a user to the WhatsApp Business Account with specified permission tasks.

This operation grants the user access to perform specific actions on the account

based on the provided permission tasks.

Permission Tasks:

Different permission tasks grant access to different WhatsApp Business Account features:

* MANAGE: General account management permissions
* DEVELOP: Development and API access permissions
* MANAGE\_TEMPLATES: Message template management
* MANAGE\_PHONE: Phone number management
* MESSAGING: Send and receive messages

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Successfully added user to WhatsApp Business Account

Content Type: application/json

Schema: SuccessResponse

Show child attributes

---

SuccessResponse

---

successboolean·required

Indicates whether the operation was successful

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

Not Found - WhatsApp Business Account ID or User ID does not exist

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
  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Account-ID}/assigned_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/x-www-form-urlencoded' \  
  --data-urlencode 'user=2345678901234567' \  
  --data-urlencode 'tasks[0]=MANAGE' \  
  --data-urlencode 'tasks[1]=VIEW_COST'
```

Select status code

200400401403404422500

---

```
{  
  "success": true  
}
```

---

## DELETE /{Version}/{WhatsApp-Business-Account-ID}/assigned\_users

Remove a user's access from the WhatsApp Business Account. This operation revokes

all permissions and access rights for the specified user on the account.

Important Notes:

* This operation removes ALL permissions for the user on this WhatsApp Business Account
* The user will lose access to all account features and data
* This action cannot be undone - the user must be re-added if access is needed again
* Webhooks may be triggered to notify of user access changes

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

### Request Syntax

**DELETE** /{Version}/{WhatsApp-Business-Account-ID}/assigned\_users

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Account-ID}/assigned_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/x-www-form-urlencoded' \  
  --data-urlencode 'user=2345678901234567'
```

Select status code

200400401403404422500

---

```
{  
  "success": true  
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

WhatsApp-Business-Account-IDstring·required

Your WhatsApp Business Account ID. This ID is provided when you create the account

and can be found in your Business Manager or through account management APIs.

Request BodyRequired

---

Content Type: application/x-www-form-urlencoded

Schema: object

Show child attributes

---

userstring·required

User ID of the person to remove from the WhatsApp Business Account.

This must be a valid Facebook user ID that is currently assigned to the account.

Responses

---

Remove a user's access from the WhatsApp Business Account. This operation revokes

all permissions and access rights for the specified user on the account.

Important Notes:

* This operation removes ALL permissions for the user on this WhatsApp Business Account
* The user will lose access to all account features and data
* This action cannot be undone - the user must be re-added if access is needed again
* Webhooks may be triggered to notify of user access changes

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

200

Successfully removed user from WhatsApp Business Account

Content Type: application/json

Schema: SuccessResponse

Show child attributes

---

SuccessResponse

---

successboolean·required

Indicates whether the operation was successful

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

Not Found - WhatsApp Business Account ID or User ID does not exist or is not assigned

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
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{WhatsApp-Business-Account-ID}/assigned_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/x-www-form-urlencoded' \  
  --data-urlencode 'user=2345678901234567'
```

Select status code

200400401403404422500

---

```
{  
  "success": true  
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
