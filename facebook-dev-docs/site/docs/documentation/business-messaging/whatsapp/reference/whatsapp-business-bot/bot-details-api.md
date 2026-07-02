---
title: "WhatsApp Business Bot - Bot Details API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-bot/bot-details-api
---

# WhatsApp Business Bot - Bot Details API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-bot/bot-details-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-bot/bot-details-api/v25.0.openapi.yaml/)

This endpoint allows developers to retrieve comprehensive information about their

WhatsApp Business Bot, including prompts, commands, and welcome message settings.

This is essential for managing bot configuration and understanding current bot state.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| GET | [/{Version}/{WABA-Bot-ID}](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-bot/bot-details-api#get-version-waba-bot-id) |

---

## GET /{Version}/{WABA-Bot-ID}

Retrieve comprehensive details about a WhatsApp Business Bot, including its prompts,

commands, and welcome message configuration.

Use Cases:

* Retrieve bot configuration and automated response settings
* Monitor available bot commands and their descriptions
* Check welcome message enablement status
* Validate bot state before implementing automation
* Audit bot configuration for business compliance

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Bot details can be cached for moderate periods, but configuration may change

when bot settings are updated. Implement appropriate cache invalidation strategies.

### Request Syntax

**GET** /{Version}/{WABA-Bot-ID}

Try it

Select language

cURLJavaScriptPython

---

```
curl --request GET \
  --url 'https://graph.facebook.com/{Version}/{WABA-Bot-ID}' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{}'
```

Select status code

200400401403404422500

---

```
{
  "full_bot_config": {
    "summary": "Complete bot configuration with all features",
    "value": {
      "id": "1234567890123456",
      "prompts": [
        "Welcome to our customer service!",
        "How can I assist you today?",
        "Please select from the options below"
      ],
      "commands": [
        {
          "command_name": "help",
          "command_description": "Display available commands and help information"
        },
        {
          "command_name": "status",
          "command_description": "Check your order status"
        },
        {
          "command_name": "support",
          "command_description": "Connect with customer support"
        }
      ],
      "enable_welcome_message": true
    }
  },
  "minimal_bot_config": {
    "summary": "Basic bot configuration",
    "value": {
      "id": "2345678901234567",
      "prompts": [
        "Hello! I'm here to help"
      ],
      "commands": [],
      "enable_welcome_message": false
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

WABA-Bot-IDstring·required

Your WhatsApp Business Bot ID. This ID is provided when you create the bot

and can be found in your Business Manager or through bot management APIs.

Query Parameters

---

fieldsstring

Comma-separated list of fields to include in the response. If not specified,

default fields will be returned (prompts, commands, enable\_welcome\_message).

Available fields: id, prompts, commands, enable\_welcome\_message

Responses

---

Retrieve comprehensive details about a WhatsApp Business Bot, including its prompts,

commands, and welcome message configuration.

Use Cases:

* Retrieve bot configuration and automated response settings
* Monitor available bot commands and their descriptions
* Check welcome message enablement status
* Validate bot state before implementing automation
* Audit bot configuration for business compliance

Rate Limiting:

Standard Graph API rate limits apply. Use appropriate retry logic with exponential backoff.

Caching:

Bot details can be cached for moderate periods, but configuration may change

when bot settings are updated. Implement appropriate cache invalidation strategies.

200

Successfully retrieved WhatsApp Business Bot details

Content Type: application/json

Schema: WhatsAppBusinessBot

Show child attributes

---

WhatsAppBusinessBot

---

idstring·required

Unique identifier for the WhatsApp Business Bot

---

promptsarray of string

List of bot prompts and automated responses

Show child attributes

---

prompts[]string

---

commandsarray of WhatsAppBusinessBotCommand

List of available bot commands and their descriptions

Show child attributes

---

commands[]WhatsAppBusinessBotCommand

Bot command configuration with name and description

Show child attributes

---

command\_namestring·required

Name of the bot command

---

command\_descriptionstring·required

Description of what the command does

---

enable\_welcome\_messageboolean

Whether the welcome message is enabled for this bot

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

Not Found - Bot ID does not exist or is not accessible

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
  --url 'https://graph.facebook.com/{Version}/{WABA-Bot-ID}' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{}'
```

Select status code

200400401403404422500

---

```
{
  "full_bot_config": {
    "summary": "Complete bot configuration with all features",
    "value": {
      "id": "1234567890123456",
      "prompts": [
        "Welcome to our customer service!",
        "How can I assist you today?",
        "Please select from the options below"
      ],
      "commands": [
        {
          "command_name": "help",
          "command_description": "Display available commands and help information"
        },
        {
          "command_name": "status",
          "command_description": "Check your order status"
        },
        {
          "command_name": "support",
          "command_description": "Connect with customer support"
        }
      ],
      "enable_welcome_message": true
    }
  },
  "minimal_bot_config": {
    "summary": "Basic bot configuration",
    "value": {
      "id": "2345678901234567",
      "prompts": [
        "Hello! I'm here to help"
      ],
      "commands": [],
      "enable_welcome_message": false
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
