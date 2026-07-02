---
title: "Page Messenger Call Settings"
source_url: https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-status-api
---

# Page Messenger Call Settings

Version

20.0.021.0.022.0.023.0.024.0.025.0.026.0.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-settings/v26.0.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-messenger-call-settings/v26.0.0.openapi.yaml/)

Retrieve and update call settings for a Messenger Business Platform page.

## Base URL

|
|  |
| https://graph.facebook.com/v26.0 |

## Endpoints

|
|  |
| GET | [/{page\_id}/messenger\_call\_settings](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-status-api#get-page-id-messenger-call-settings) |
| POST | [/{page\_id}/messenger\_call\_settings](https://developers.facebook.com/documentation/business-messaging/messenger-platform/reference/page-status-api#post-page-id-messenger-call-settings) |

---

## GET /{page\_id}/messenger\_call\_settings

### Request Syntax

**GET** /{page\_id}/messenger\_call\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messenger_call_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The page ID for the messenger call settings

Query Parameters

---

fieldsstring

Comma-separated list of fields to return (call\_routing, call\_hours, audio\_enabled, icon\_enabled, video\_enabled)

Responses

---

200

Retrieve messenger call settings

Content Type: application/json

Schema: PageMessengerCallSettingsGetResponse

Show child attributes

---

PageMessengerCallSettingsGetResponse

---

dataarray of PageMessengerCallSettingsPayload·required

Array containing call settings data (Graph API edge format)

Show child attributes

---

data[]PageMessengerCallSettingsPayload

Show child attributes

---

audio\_enabledboolean

Whether audio calling is enabled

---

icon\_enabledboolean

Whether call button icon is enabled

---

video\_enabledboolean

Whether video calling is enabled

---

call\_routingobject

Call routing configuration for incoming calls

Show child attributes

---

ring\_targetOne of "META", "PARTNERS"

Target for incoming calls

---

call\_hoursobject

Operating hours configuration for when calls are accepted

Show child attributes

---

timezone\_idstring

Timezone identifier for call hours

---

weekly\_operating\_hoursarray of object

Weekly operating hours

Show child attributes

---

weekly\_operating\_hours[]object

Show child attributes

---

day\_of\_weekstring

Day of the week

---

open\_timestring

Opening time in HHMM format

---

close\_timestring

Closing time in HHMM format

400

Bad request

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

403

Forbidden

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

Select language

cURLJavaScriptPython

---

```
curl --request GET \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messenger_call_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

---

## POST /{page\_id}/messenger\_call\_settings

### Request Syntax

**POST** /{page\_id}/messenger\_call\_settings

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messenger_call_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

Path Parameters

---

page\_idstring·required

The page ID for the messenger call settings

Query Parameters

---

fieldsstring

Comma-separated list of fields to return (call\_routing, call\_hours, audio\_enabled, icon\_enabled, video\_enabled)

Request BodyRequired

---

Content Type: application/json

Schema: PageMessengerCallSettingsRequest

Show child attributes

---

PageMessengerCallSettingsRequest

---

audio\_enabledboolean

Enable or disable audio calling

---

icon\_enabledboolean

Enable or disable call button icon

---

video\_enabledboolean

Enable or disable video calling

---

call\_routingobject

Call routing configuration for incoming calls

Show child attributes

---

ring\_targetOne of "META", "PARTNERS"·required

Target for incoming calls

---

call\_hoursobject

Operating hours configuration for when calls are accepted

Show child attributes

---

timezone\_idstring·required

Timezone identifier for call hours

---

weekly\_operating\_hoursarray of object·required

Weekly operating hours

Show child attributes

---

weekly\_operating\_hours[]object

Show child attributes

---

day\_of\_weekstring·required

Day of the week

---

open\_timestring·required

Opening time in HHMM format

---

close\_timestring·required

Closing time in HHMM format

Responses

---

200

Update messenger call settings

Content Type: application/json

Schema: PageMessengerCallSettingsResponse

Show child attributes

---

PageMessengerCallSettingsResponse

---

resultstring·required

Result of the call settings update operation

400

Bad request

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

403

Forbidden

Content Type: application/json

Schema: StandardError

Show child attributes

---

StandardError

---

messagestring·required

---

typestring

---

codeinteger·required

---

error\_subcodeinteger

---

is\_transientboolean

---

error\_data{}

---

error\_user\_msgstring

---

error\_user\_titlestring

---

fbtrace\_idstring

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/v26.0/{page_id}/messenger_call_settings' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{}'
```

## Authentication

|
|  |
| **Scheme** | **Type** | **Location** |
| OAuthToken\_\_access\_token | API Key | Query: `access_token` |
| OAuthToken\_\_oauth\_token | API Key | Query: `oauth_token` |
| OAuthToken\_\_Authorization | HTTP Bearer | Header: `Authorization` |

### Usage Examples

OAuthToken\_\_access\_token:

Include `access_token=your-api-key-here` in query parameters

OAuthToken\_\_oauth\_token:

Include `oauth_token=your-api-key-here` in query parameters

OAuthToken\_\_Authorization:

Include `Authorization: Bearer your-token-here` in request headers

### Global Authentication Requirements

All endpoints require:

OAuthToken\_\_access\_token AND OAuthToken\_\_oauth\_token AND OAuthToken\_\_Authorization
