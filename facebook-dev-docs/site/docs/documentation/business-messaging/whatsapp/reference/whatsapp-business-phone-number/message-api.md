---
title: "WhatsApp Cloud API - Message API"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api
---

# WhatsApp Cloud API - Message API

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api/v25.0.openapi.yaml/)

Send and receive WhatsApp messages including text, media, templates,

interactive messages, reactions, and more. Supports message status

tracking, delivery receipts, and read confirmations.

## Base URL

|
|  |
| https://graph.facebook.com |

## Endpoints

|
|  |
| POST | [/{Version}/{Phone-Number-ID}/messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) |

---

## POST /{Version}/{Phone-Number-ID}/messages

Send Message.

### Request Syntax

**POST** /{Version}/{Phone-Number-ID}/messages

Try it

Select language

cURLJavaScriptPython

---

```
curl --request POST \
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/messages' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "audio": {
    "id": "<AUDIO_OBJECT_ID>"
  },
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "{​{Recipient-Phone-Number}​}",
  "type": "audio"
}'
```

Select status code

200

---

```
{
  "Example response": {
    "value": {
      "contacts": [
        {
          "input": "+16505551234",
          "wa_id": "16505551234"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJCOTY3NDc0NDFDRUI3NTA0Q0UA"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Audio Message By URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Audio Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Contact Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Document Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Document Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Draft Flow by ID": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Draft Flow by Name": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Flow Template Message": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Image Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Image Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Interactive Message Template": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send List Message": {
    "value": {
      "contacts": [
        {
          "input": "15555551234",
          "wa_id": "<WHATSAPP_ID>"
        }
      ],
      "messages": [
        {
          "id": "wamid.ID"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Location Messages": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Message Template Media": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Message Template Text": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Published Flow by ID": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Published Flow by Name": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply Button": {
    "value": {
      "contacts": [
        {
          "input": "PHONE_NUMBER",
          "wa_id": "WHATSAPP_ID"
        }
      ],
      "messages": [
        {
          "id": "wamid.ID"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Audio Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Audio Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Contact Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Document Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Document Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Image Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Image Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to List Message": {
    "value": {
      "contacts": [
        {
          "input": "15555551234",
          "wa_id": "<WHATSAPP_ID>"
        }
      ],
      "messages": [
        {
          "id": "wamid.ID"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Location Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Sticker Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Sticker Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Text Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Video Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Video Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply with Reaction Message": {
    "value": {
      "contacts": [
        {
          "input": "<PHONE_NUMBER>",
          "wa_id": "<WHATSAPP_ID>"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgLM..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sample Shipping Confirmation Template": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sample Text message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Single Product Message": {
    "value": {
      "contacts": [
        {
          "input": "+1-631-555-5555",
          "wa_id": "16315555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGFlaCGg0xcvAdgmZ9plHrf2Mh-o"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sticker Message By ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sticker Message By URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Test Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Text Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Video Message By ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Video Message By URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send typing indicator and read receipt": {
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

Phone-Number-IDstring·required

Request BodyOptional

---

Content Type: application/json

Schema: Message

Show child attributes

---

Message

---

TextMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"text"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

textobject·required

Show child attributes

---

bodystring

The text of the message.

---

preview\_urlboolean

---

AudioMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"audio"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

audioMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

DocumentMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"document"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

documentMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

ImageMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"image"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

imageMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

LocationMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"location"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

locationobject·required

Show child attributes

---

addressstring

The address of the location.

---

latitudestring

The latitude of the location.

---

longitudestring

The longitude of the location.

---

namestring

The name of the location.

---

VideoMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"video"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

videoMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

StickerMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"sticker"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

stickerMust be one of: object, object·required

Show child attributes

---

object

Show child attributes

---

idstring·required

The ID of the sticker.

---

object

Show child attributes

---

linkstring·required

The URL of the sticker.

---

ReactionMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"reaction"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

reactionobject·required

Show child attributes

---

emojistring

emoji

---

message\_idstring

reacted message-id

---

InteractiveMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"interactive"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

interactiveobject

An object containing the content for an interactive message.

Show child attributes

---

typeOne of "button", "call\_permission\_request", "catalog\_message", "list", "product", "product\_list", "flow"·required

The type of interactive message to send.

---

headerobject

Header content displayed on top of a message. Required for 'product\_list' type. Cannot be set for 'product' type.

Show child attributes

---

typeOne of "text", "video", "image", "document"·required

The header type.

---

textstring

Text for the header. Required if 'type' is 'text'. Emojis supported, no markdown.

---

sub\_textstring

Optional sub-text for the header. Emojis supported, no markdown.

---

documentMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

imageMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

videoMust be one of: unknown, unknown

A media object. Either `id` or `link` is required.

Show child attributes

---

unknown

Show child attributes

---

idstring·required

The media object ID. Required when `link` is not used.

---

captionstring

Optional caption for the media

---

unknown

Show child attributes

---

linkstring (url)·required

The protocol and URL of the media to be sent (HTTP/HTTPS only).

---

captionstring

Optional caption for the media

---

bodyobject

An object with the body of the message. Optional for 'product' type, required for other interactive message types.

Show child attributes

---

textstring·required

The content of the message body. Emojis and markdown are supported.

---

footerobject

An object with the footer of the message. Optional.

Show child attributes

---

textstring·required

The footer content. Emojis, markdown, and links are supported.

---

actionMust be one of: unknown, unknown, unknown, unknown, unknown, unknown

Action you want the user to perform after reading the message. Its structure varies by interactive message type.

Show child attributes

---

unknown

Show child attributes

---

buttonstring·required

Button content for List Messages. Cannot be empty, must be unique. Emojis supported, no markdown.

---

sectionsarray of SectionObject·required

Array of section objects.

Show child attributes

---

sections[]object

A section object, used in List Messages and Multi-Product Messages.

Show child attributes

---

titlestring

Title of the section. Required if the message has more than one section. Max 24 characters.

---

product\_itemsarray of object

Array of product objects.

Show child attributes

---

product\_items[]object

Show child attributes

---

product\_retailer\_idstring·required

Unique identifier of the product in a catalog.

---

rowsarray of object

Contains a list of rows.

Show child attributes

---

rows[]object

Show child attributes

---

idstring·required

Unique row identifier.

---

titlestring·required

Row title.

---

descriptionstring

Optional row description.

---

unknown

Show child attributes

---

buttonsarray of object·required

Array of button objects.

Show child attributes

---

buttons[]object

Show child attributes

---

type"reply"·required

Only supported type is "reply" for Reply Button.

---

replyobject·required

Show child attributes

---

idstring·required

Unique identifier for your button. No leading/trailing spaces.

---

titlestring·required

Button title. Cannot be empty, must be unique. Emojis supported, no markdown.

---

unknown

Show child attributes

---

catalog\_idstring·required

Unique identifier of the Facebook catalog linked to your WhatsApp Business Account.

---

product\_retailer\_idstring

Unique identifier of the product in a catalog. Required for Single Product Messages.

---

sectionsarray of SectionObject

Array of section objects.

Show child attributes

---

sections[]object

A section object, used in List Messages and Multi-Product Messages.

Show child attributes

---

titlestring

Title of the section. Required if the message has more than one section. Max 24 characters.

---

product\_itemsarray of object

Array of product objects.

Show child attributes

---

product\_items[]object

Show child attributes

---

product\_retailer\_idstring·required

Unique identifier of the product in a catalog.

---

rowsarray of object

Contains a list of rows.

Show child attributes

---

rows[]object

Show child attributes

---

idstring·required

Unique row identifier.

---

titlestring·required

Row title.

---

descriptionstring

Optional row description.

---

unknown

Show child attributes

---

name"catalog\_message"·required

---

parametersobject·required

Show child attributes

---

thumbnail\_product\_retailer\_idstring·required

Product retailer ID for the thumbnail.

---

unknown

Show child attributes

---

name"flow"·required

---

parametersMust be one of: unknown, unknown·required

Show child attributes

---

flow\_message\_version"3"·required

Must be "3".

---

flow\_idstring

Unique identifier of the Flow provided by WhatsApp. Required unless flow\_name is set. Cannot be used with flow\_name.

---

flow\_namestring

The name of the Flow that you created. Required unless flow\_id is set. Cannot be used with flow\_id.

---

flow\_ctastring·required

Text on the CTA button (e.g., "Signup"). Advised 30 characters or less, no emoji.

---

modeOne of "draft", "published"

The current mode of the Flow, either "draft" or "published".

---

flow\_tokenstring

A token generated by the business to serve as an identifier. Defaults to "unused".

---

flow\_actionOne of "navigate", "data\_exchange"

Either "navigate" to predefine the first screen, or "data\_exchange" for advanced use cases.

---

flow\_action\_payloadobject

Optional only if 'flow\_action' is 'navigate'.

Show child attributes

---

screenstring

The 'id' of the first screen of the Flow.

---

dataobject

The input data for the first screen of the Flow. Must be a non-empty object.

---

unknown

---

unknown

---

unknown

Show child attributes

---

name"call\_permission\_request"·required

---

TemplateMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"template"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

templateobject

Identifies the approved message template to send and supplies values for any variable parts of that template. Use `name` to select the template, `language` to choose the render locale, and `components` to provide header, body, or button parameters when the template defines them.

Show child attributes

---

namestring·required

Name of the approved message template to send.

---

languageLanguageObject·required

Language in which the template should be rendered.

---

componentsarray of TemplateComponent

Optional list of template components that supply parameter values for variable parts of the template. Add a `header` component for header parameters, a `body` component for body placeholders, and a `button` component for button parameters when the template defines them.

Show child attributes

---

components[]TemplateComponent

---

ContactsMessage

Show child attributes

---

messaging\_productstring·required

---

recipient\_typeOne of "individual", "group"·required

The type of recipient.

---

tostring·required

The recipient's phone number for individual messages, and group-id for group message.

---

type"contacts"

---

contextobject

Context information for replying to a message

Show child attributes

---

message\_idstring

The ID of the message to which this message is a reply.

---

contactsarray of ContactObject·required

Show child attributes

---

contacts[]object

Show child attributes

---

addressesarray of AddressObject

Full contact address(es)

Show child attributes

---

addresses[]object

Show child attributes

---

citystring

City name

---

countrystring

Full country name

---

country\_codestring

Two-letter ISO country code

---

statestring

State abbreviation

---

streetstring

Street address

---

typeOne of "HOME", "WORK"

Address type

---

zipstring

ZIP code

---

birthdaystring (date)

Date of birth (YYYY-MM-DD format)

---

emailsarray of EmailObject

Contact email address(es)

Show child attributes

---

emails[]object

Show child attributes

---

emailstring (email)·required

Email address

---

typeOne of "HOME", "WORK"

Email type

---

nameobject

Show child attributes

---

first\_namestring

First name

---

formatted\_namestring

Formatted full name

---

last\_namestring

Last name

---

middle\_namestring

Middle name

---

prefixstring

Name prefix

---

suffixstring

Name suffix

---

orgobject

Show child attributes

---

companystring

Company name

---

departmentstring

Department name

---

titlestring

Job title

---

phonesarray of PhoneObject

Contact phone number(s)

Show child attributes

---

phones[]object

Show child attributes

---

phonestring·required

Phone number

---

typeOne of "HOME", "WORK"

Phone type

---

wa\_idstring

WhatsApp ID

---

urlsarray of UrlObject

Contact URL(s)

Show child attributes

---

urls[]object

Show child attributes

---

typeOne of "HOME", "WORK"

URL type

---

urlstring (uri)·required

URL

Responses

---

Send Message.

200

Send Test Message / Send Text Message / Send Reply to Text Message / Send Reply with Reaction Message / Send Image Message by ID / Send Reply to Image Message by ID / Send Image Message by URL / Send Reply to Image Message by URL / Send Audio Message by ID / Send Reply to Audio Message by ID / Send Audio Message By URL / Send Reply to Audio Message by URL / Send Document Message by ID / Send Reply to Document Message by ID / Send Document Message by URL / Send Reply to Document Message by URL / Send Sticker Message By ID / Send Reply to Sticker Message by ID / Send Sticker Message By URL / Send Reply to Sticker Message by URL / Send Video Message By ID / Send Reply to Video Message by ID / Send Video Message By URL / Send Reply to Video Message by URL / Send Contact Message / Send Reply to Contact Message / Send Location Messages / Send Reply to Location Message / Send Message Template Text / Send Message Template Media / Send Interactive Message Template / Send List Message / Send Reply to List Message / Send Reply Button / Send Single Product Message / Example response / Example response / Send Draft Flow by Name / Send Draft Flow by ID / Send Published Flow by Name / Send Published Flow by ID / Send Flow Template Message / Send typing indicator and read receipt / Send Sample Text message / Send Sample Shipping Confirmation Template / Send Sample Issue Resolution Template

Content Type: application/json

Schema: MessageResponsePayload

Show child attributes

---

MessageResponsePayload

---

contactsarray of object

Show child attributes

---

contacts[]object

Show child attributes

---

inputstring

---

wa\_idstring

---

messagesarray of object

Show child attributes

---

messages[]object

Show child attributes

---

idstring

---

message\_statusOne of "accepted", "held\_for\_quality\_assessment", "paused"

The status of a WhatsApp message:

* `accepted`: The message has been accepted by WhatsApp and is being processed
* `held_for_quality_assessment`: The message is being held for quality assessment before delivery
* `paused`: The message delivery has been paused

---

messaging\_productstring

Select language

cURLJavaScriptPython

---

```
curl --request POST \
  --url 'https://graph.facebook.com/{Version}/{Phone-Number-ID}/messages' \
  --header 'Authorization: Bearer <Token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "audio": {
    "id": "<AUDIO_OBJECT_ID>"
  },
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "{​{Recipient-Phone-Number}​}",
  "type": "audio"
}'
```

Select status code

200

---

```
{
  "Example response": {
    "value": {
      "contacts": [
        {
          "input": "+16505551234",
          "wa_id": "16505551234"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBJCOTY3NDc0NDFDRUI3NTA0Q0UA"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Audio Message By URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Audio Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Contact Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Document Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Document Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Draft Flow by ID": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Draft Flow by Name": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Flow Template Message": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Image Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Image Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Interactive Message Template": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send List Message": {
    "value": {
      "contacts": [
        {
          "input": "15555551234",
          "wa_id": "<WHATSAPP_ID>"
        }
      ],
      "messages": [
        {
          "id": "wamid.ID"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Location Messages": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Message Template Media": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Message Template Text": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Published Flow by ID": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Published Flow by Name": {
    "value": {
      "contacts": [
        {
          "input": "18055555555",
          "wa_id": "18055555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgL..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply Button": {
    "value": {
      "contacts": [
        {
          "input": "PHONE_NUMBER",
          "wa_id": "WHATSAPP_ID"
        }
      ],
      "messages": [
        {
          "id": "wamid.ID"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Audio Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Audio Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Contact Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Document Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Document Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Image Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Image Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to List Message": {
    "value": {
      "contacts": [
        {
          "input": "15555551234",
          "wa_id": "<WHATSAPP_ID>"
        }
      ],
      "messages": [
        {
          "id": "wamid.ID"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Location Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Sticker Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Sticker Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Text Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Video Message by ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply to Video Message by URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Reply with Reaction Message": {
    "value": {
      "contacts": [
        {
          "input": "<PHONE_NUMBER>",
          "wa_id": "<WHATSAPP_ID>"
        }
      ],
      "messages": [
        {
          "id": "wamid.HBgLM..."
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sample Shipping Confirmation Template": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sample Text message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Single Product Message": {
    "value": {
      "contacts": [
        {
          "input": "+1-631-555-5555",
          "wa_id": "16315555555"
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGFlaCGg0xcvAdgmZ9plHrf2Mh-o"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sticker Message By ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Sticker Message By URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Test Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Text Message": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Video Message By ID": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send Video Message By URL": {
    "value": {
      "contacts": [
        {
          "input": "48XXXXXXXXX",
          "wa_id": "48XXXXXXXXX "
        }
      ],
      "messages": [
        {
          "id": "wamid.gBGGSFcCNEOPAgkO_KJ55r4w_ww"
        }
      ],
      "messaging_product": "whatsapp"
    }
  },
  "Send typing indicator and read receipt": {
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
