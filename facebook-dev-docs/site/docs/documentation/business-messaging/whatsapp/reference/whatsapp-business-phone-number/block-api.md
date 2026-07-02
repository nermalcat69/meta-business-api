---
title: "WhatsApp Cloud API - Block API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api
---

# WhatsApp Cloud API - Block API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api/v25.0.openapi.yaml/)

The Block API allows businesses to manage blocked users on WhatsApp.

Use this API to block users from sending messages to your business number,

retrieve the list of blocked users, and unblock users when needed.

For more information, see the [Block Users Guide](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users).

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{Phone-Number-ID}/block\_users](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api#get-version-phone-number-id-block-users) |
| POST | [/{Version}/{Phone-Number-ID}/block\_users](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api#post-version-phone-number-id-block-users) |
| DELETE | [/{Version}/{Phone-Number-ID}/block\_users](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/block-api#delete-version-phone-number-id-block-users) |

---

## GET /{Version}/{Phone-Number-ID}/block\_users

* Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
* Endpoint reference: [GET WhatsApp Buiness Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Reading)

### Request Syntax

**GET** /{Version}/{Phone-Number-ID}/block\_users

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Get blocked users": {  
    "value": {  
      "data": [  
        {  
          "messaging_product": "whatsapp",  
          "wa_id": "16505551234"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",  
          "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"  
        }  
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

Content-TypeOne of "application/json", "application/x-www-form-urlencoded", "multipart/form-data"·required

Media type of the request body

Path Parameters

---

Versionstring·required

Phone-Number-IDstring·required

Responses

---

* Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
* Endpoint reference: [GET WhatsApp Buiness Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Reading)

200

Get blocked users

Content Type: application/json

Schema: GetBlockedUsersData

Show child attributes

---

GetBlockedUsersData

---

dataarray of BlockedUser

Show child attributes

---

data[]BlockedUser

Show child attributes

---

messaging\_productstring

---

wa\_idstring

---

pagingPaging

Show child attributes

---

cursorsPaginationCursors

Show child attributes

---

afterstring

---

beforestring

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Select status code

200

---

```
{  
  "Get blocked users": {  
    "value": {  
      "data": [  
        {  
          "messaging_product": "whatsapp",  
          "wa_id": "16505551234"  
        }  
      ],  
      "paging": {  
        "cursors": {  
          "after": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD",  
          "before": "eyJvZAmZAzZAXQiOjAsInZAlcnNpb25JZACI6IjE3Mzc2Nzk2ODgzODM1ODQifQZDZD"  
        }  
      }  
    }  
  }  
}
```

---

## POST /{Version}/{Phone-Number-ID}/block\_users

* Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
* Endpoint reference: [POST WhatsApp Buiness Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Creating)

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/block\_users

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "block_users": [  
    {  
      "user": "+16505551234"  
    }  
  ],  
  "messaging_product": "whatsapp"  
}'
```

Select status code

200

---

```
{  
  "Block user(s)": {  
    "value": {  
      "block_users": {  
        "added_users": [  
          {  
            "input": "+16505551234",  
            "wa_id": "16505551234"  
          }  
        ]  
      },  
      "messaging_product": "whatsapp"  
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

Phone-Number-IDstring·required

Request BodyOptional

---

Content Type: application/json

Schema: object

Show child attributes

---

block\_usersarray of object

Show child attributes

---

block\_users[]object

Show child attributes

---

userstring

---

messaging\_productstring

Responses

---

* Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
* Endpoint reference: [POST WhatsApp Buiness Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Creating)

200

Block user(s)

Content Type: application/json

Schema: BlockUsersData

Show child attributes

---

BlockUsersData

---

block\_usersBlockUsersResult

Show child attributes

---

added\_usersarray of BlockedUserOperation

Show child attributes

---

added\_users[]BlockedUserOperation

Show child attributes

---

inputstring

---

wa\_idstring

---

messaging\_productstring

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "block_users": [  
    {  
      "user": "+16505551234"  
    }  
  ],  
  "messaging_product": "whatsapp"  
}'
```

Select status code

200

---

```
{  
  "Block user(s)": {  
    "value": {  
      "block_users": {  
        "added_users": [  
          {  
            "input": "+16505551234",  
            "wa_id": "16505551234"  
          }  
        ]  
      },  
      "messaging_product": "whatsapp"  
    }  
  }  
}
```

---

## DELETE /{Version}/{Phone-Number-ID}/block\_users

* Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
* Endpoint reference: [DELETE WhatsApp Buiness Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Deleting)

### Request Syntax

**DELETE** /{Version}/{Phone-Number-ID}/block\_users

Try it

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "block_users": [  
    {  
      "user": "+16505551234"  
    }  
  ],  
  "messaging_product": "whatsapp"  
}'
```

Select status code

200

---

```
{  
  "Unblock user(s)": {  
    "value": {  
      "block_users": {  
        "removed_users": [  
          {  
            "input": "+16505551234",  
            "wa_id": "16505551234"  
          }  
        ]  
      },  
      "messaging_product": "whatsapp"  
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

Phone-Number-IDstring·required

Request BodyOptional

---

Content Type: application/json

Schema: object

Show child attributes

---

block\_usersarray of object

Show child attributes

---

block\_users[]object

Show child attributes

---

userstring

---

messaging\_productstring

Responses

---

* Guide: [Block Users](https://developers.facebook.com/docs/business-messaging/whatsapp/block-users)
* Endpoint reference: [DELETE WhatsApp Buiness Phone Number > block\_users](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account-to-number-current-status/block_users/#Deleting)

200

Unblock user(s)

Content Type: application/json

Schema: UnblockUsersData

Show child attributes

---

UnblockUsersData

---

block\_usersUnblockUsersResult

Show child attributes

---

removed\_usersarray of BlockedUserOperation

Show child attributes

---

removed\_users[]BlockedUserOperation

Show child attributes

---

inputstring

---

wa\_idstring

---

messaging\_productstring

Select language

cURLJavaScriptPython

---

```
curl --request DELETE \  
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/block_users' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "block_users": [  
    {  
      "user": "+16505551234"  
    }  
  ],  
  "messaging_product": "whatsapp"  
}'
```

Select status code

200

---

```
{  
  "Unblock user(s)": {  
    "value": {  
      "block_users": {  
        "removed_users": [  
          {  
            "input": "+16505551234",  
            "wa_id": "16505551234"  
          }  
        ]  
      },  
      "messaging_product": "whatsapp"  
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
