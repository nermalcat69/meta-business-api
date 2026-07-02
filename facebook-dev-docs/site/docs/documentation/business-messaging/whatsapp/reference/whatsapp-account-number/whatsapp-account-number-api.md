---
title: "WhatsApp Incoming Webhook Payload"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-account-number/whatsapp-account-number-api
---

# WhatsApp Incoming Webhook Payload

Version

v23.0v24.0v25.0

Copy for LLM

[View as Markdown](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/webhooks/whatsapp-incoming-webhook-payload/v25.0.md/)

[Download OpenAPI spec](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/webhooks/whatsapp-incoming-webhook-payload/v25.0.openapi.yaml/)

Schemas for incoming WhatsApp webhook notifications.

Defines payload structures for messages, status updates, and user interactions

sent from WhatsApp users to businesses via webhooks.

## Base URL

|
|  |

## Endpoints

|
|  |
| POST | [/whatsapp/webhooks](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-account-number/whatsapp-account-number-api#post-whatsapp-webhooks) |

---

## POST /whatsapp/webhooks

Endpoint for receiving webhook payloads for diverse incoming WhatsApp message types.

### Request Syntax

**POST** /whatsapp/webhooks

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/whatsapp/webhooks' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "419561257915477",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Sheena Nelson"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",  
                "timestamp": "1749416383",  
                "type": "text",  
                "text": {  
                  "body": "Does it come in another color?"  
                }  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}'
```

Request BodyRequired

---

Webhook payload containing incoming WhatsApp messages.

Content Type: application/json

Schema: WebhookPayload

Show child attributes

---

WebhookPayload

---

objectstring·required

Always 'whatsapp\_business\_account' for these webhooks.

---

entryarray of Entry·required

Show child attributes

---

entry[]Entry

Show child attributes

---

idstring·required

WhatsApp Business Account ID.

---

changesarray of Change·required

Show child attributes

---

changes[]Change

Show child attributes

---

valueMust be one of: IncomingMessageValueGeneral, IncomingMessageValueSystem, StatusMessageValue, GroupValue·required

Show child attributes

---

IncomingMessageValueGeneral

Show child attributes

---

messaging\_productstring·required

Always 'whatsapp'.

---

metadataMetadata·required

Show child attributes

---

display\_phone\_numberstring·required

Business display phone number.

---

phone\_number\_idstring·required

Business phone number ID.

---

contactsarray of ContactProfile·required

Array of contact profiles for the sender. Included for all non-system incoming messages.

Show child attributes

---

contacts[]ContactProfile

Show child attributes

---

profileobject·required

Show child attributes

---

namestring·required

WhatsApp user's name as it appears in their profile in the WhatsApp client.

---

wa\_idstring

WhatsApp user ID. Note that a WhatsApp user's ID and phone number may not always match.

---

messagesarray of IncomingMessage·required

Array of message objects. The structure varies based on the 'type' property.

Show child attributes

---

messages[]IncomingMessage

Show child attributes

---

TextMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"text"·required

---

textobject·required

Show child attributes

---

bodystring·required

Text body of the message.

---

contextobject

Only included if message via a "Message business" button.

Show child attributes

---

fromstring·required

Business display phone number.

---

idstring·required

WhatsApp message ID of the message the user used to access the "Message business" button.

---

referred\_productobject·required

Show child attributes

---

catalog\_idstring·required

Product catalog ID.

---

product\_retailer\_idstring·required

Product ID.

---

referralobject

Only included if message via a Click to WhatsApp ad.

Show child attributes

---

source\_urlstring·required

Ad URL.

---

source\_idstring·required

Ad ID.

---

source\_typeOne of "ad", "post"·required

---

bodystring·required

Ad primary text.

---

headlinestring·required

Ad headline.

---

media\_typeOne of "image", "video"·required

---

image\_urlstring

Only included for image media\_type.

---

video\_urlstring

Only included for video media\_type.

---

thumbnail\_urlstring

Only included for video media\_type.

---

ctwa\_clidstring·required

Ad click ID.

---

welcome\_messageobject

Show child attributes

---

textstring·required

Ad greeting text.

---

ReactionMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"reaction"·required

---

reactionobject·required

Show child attributes

---

message\_idstring·required

WhatsApp message ID of the message the WhatsApp user reacted to.

---

emojistring·required

Emoji sent by the WhatsApp user as a reaction.

---

AudioMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"audio"·required

---

audioobject

Show child attributes

---

mime\_typestring·required

Media asset MIME type.

---

sha256string·required

Media asset SHA-256 hash.

---

idstring·required

Media asset ID. A GET request on this ID can provide the asset URL.

---

voiceboolean·required

Boolean indicating if audio is a recording made with the WhatsApp client voice recording feature (true) or not (false).

---

DocumentMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"document"·required

---

documentobject

Show child attributes

---

mime\_typestring·required

Media asset MIME type.

---

sha256string·required

Media asset SHA-256 hash.

---

idstring·required

Media asset ID. A GET request on this ID can provide the asset URL.

---

filenamestring·required

Media asset filename.

---

ImageMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"image"·required

---

imageobject

Show child attributes

---

mime\_typestring·required

Media asset MIME type.

---

sha256string·required

Media asset SHA-256 hash.

---

idstring·required

Media asset ID. A GET request on this ID can provide the asset URL.

---

captionstring

Media asset caption text.

---

StickerMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"sticker"·required

---

stickerobject

Show child attributes

---

mime\_typestring·required

Media asset MIME type.

---

sha256string·required

Media asset SHA-256 hash.

---

idstring·required

Media asset ID. A GET request on this ID can provide the asset URL.

---

animatedboolean·required

Boolean indicating if the sticker is animated (true) or not (false).

---

VideoMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"video"·required

---

videoobject

Show child attributes

---

mime\_typestring·required

Media asset MIME type.

---

sha256string·required

Media asset SHA-256 hash.

---

idstring·required

Media asset ID. A GET request on this ID can provide the asset URL.

---

captionstring

Media asset caption text.

---

LocationMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"location"·required

---

locationobject·required

Show child attributes

---

addressstring

Location address.

---

latitudenumber (float)·required

Location latitude.

---

longitudenumber (float)·required

Location longitude.

---

namestring

Location name.

---

urlstring

Location URL. Usually only included for business locations.

---

ContactSharingMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"contacts"·required

---

contactsarray of ContactObject·required

Array of contact objects. Many contact object properties may be omitted if the WhatsApp user chooses not to share them, or their device prevents them from being shared.

Show child attributes

---

contacts[]object

Show child attributes

---

addressesarray of object

Show child attributes

---

addresses[]object

Show child attributes

---

citystring

City mentioned in the contact address

---

countrystring

Country mentioned in the contact address

---

country\_codestring

ISO country code for the contact address

---

statestring

State mentioned in the contact address

---

streetstring

Street mentioned in the contact address

---

typestring

Type of address, such as home or work

---

zipstring

Zip code in the contact address

---

birthdaystring (date)

Contact birthday (YYYY-MM-DD).

---

emailsarray of object

Show child attributes

---

emails[]object

Show child attributes

---

emailstring (email)

Email address of the contact

---

typestring

Type of email, such as personal or work

---

nameobject

Show child attributes

---

formatted\_namestring·required

Contact's formatted name

---

first\_namestring

Contact’s first name

---

last\_namestring

Contact’s last name

---

middle\_namestring

Contact’s middle name

---

suffixstring

Contact’s name suffix

---

prefixstring

Contact’s name prefix

---

orgobject

Show child attributes

---

companystring

Name of the company where the contact works

---

departmentstring

Name of the department where the contact works

---

titlestring

Contact's job title

---

phonesarray of object

Show child attributes

---

phones[]object

Show child attributes

---

phonestring

Contact’s Phone number

---

wa\_idstring

Contact's WhatsApp Number. Note that a WhatsApp user's ID and phone number may not always match.

---

typestring

Type of phone number. For example, cell, mobile, main, iPhone, home, work, etc.

---

urlsarray of object

Show child attributes

---

urls[]object

Show child attributes

---

urlstring (uri)

Website URL associated with the contact or their company

---

typestring

Type of website. For example, company, work, personal, Facebook Page, Instagram, etc.

---

UnsupportedMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

typeOne of "unsupported", "unknown"·required

---

contextobject·required

Show child attributes

---

fromstring·required

Business display phone number.

---

idstring·required

WhatsApp message ID of the message containing the button the WhatsApp user tapped.

---

buttonobject·required

Show child attributes

---

payloadstring·required

Quick-reply button payload.

---

textstring·required

Quick-reply button label text.

---

ButtonMessage

---

InteractiveMessageReply

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"interactive"·required

---

contextobject·required

Show child attributes

---

fromstring·required

Business display phone number.

---

idstring·required

WhatsApp message ID of the message containing the interactive component the user tapped.

---

interactiveobject·required

Show child attributes

---

typeOne of "list\_reply", "button\_reply"·required

Type of interactive reply (list\_reply or button\_reply).

---

OrderMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"order"·required

---

orderobject·required

Show child attributes

---

catalog\_idstring·required

Product catalog ID.

---

textstring·required

Empty string.

---

product\_itemsarray of object·required

Show child attributes

---

product\_items[]object

Show child attributes

---

product\_retailer\_idstring·required

Product ID.

---

quantityinteger·required

Product quantity.

---

item\_pricenumber (float)·required

Individual product price.

---

currencystring·required

Catalog currency code.

---

IncomingMessageValueSystem

Show child attributes

---

messaging\_productstring·required

Always 'whatsapp'.

---

metadataMetadata·required

Show child attributes

---

display\_phone\_numberstring·required

Business display phone number.

---

phone\_number\_idstring·required

Business phone number ID.

---

messagesarray of SystemMessage·required

Array containing only 'system' message objects.

Show child attributes

---

messages[]SystemMessage

Show child attributes

---

fromstring·required

WhatsApp user phone number. Note that a WhatsApp user's phone number and ID may not always match.

---

idstring·required

Unique WhatsApp message ID.

---

timestampstring·required

Unix timestamp indicating when the webhook was triggered.

---

type"system"·required

---

systemobject·required

Show child attributes

---

bodystring·required

Description of the system change (e.g., user changed number).

---

wa\_idstring

New WhatsApp user ID.

---

type"user\_changed\_number"·required

Type of system message.

---

notunknown

---

StatusMessageValue

Show child attributes

---

messaging\_productstring·required

Always 'whatsapp'.

---

metadataMetadata·required

Show child attributes

---

display\_phone\_numberstring·required

Business display phone number.

---

phone\_number\_idstring·required

Business phone number ID.

---

statusesarray of Statuses·required

Array of status objects.

Show child attributes

---

statuses[]Statuses

Show child attributes

---

idstring·required

Unique WhatsApp message ID the status is associated with.

---

statusOne of "sent", "delivered", "read", "failed"·required

---

timestampstring·required

---

recipient\_idstring·required

Recipient phone number.

---

group\_idstring

Group ID if the message was sent to a group.

---

conversationConversation

Show child attributes

---

idstring

---

expiration\_timestampstring

---

originConversationOrigin

Show child attributes

---

typestring

---

pricingPricing

Show child attributes

---

billableboolean

---

pricing\_modelOne of "CBP", "PMP"

---

categorystring

---

errorsarray of StatusError

Show child attributes

---

errors[]StatusError

Show child attributes

---

codeinteger

---

titlestring

---

messagestring

---

error\_dataErrorData

Show child attributes

---

detailsstring

---

hrefstring

---

GroupValue

Show child attributes

---

messaging\_productstring·required

Always 'whatsapp'.

---

metadataMetadata·required

Show child attributes

---

display\_phone\_numberstring·required

Business display phone number.

---

phone\_number\_idstring·required

Business phone number ID.

---

groupsarray of Groups·required

Array of group objects.

Show child attributes

---

groups[]Groups

Show child attributes

---

timestampinteger·required

Unix timestamp of the group event

---

group\_idstring·required

Unique identifier for the group

---

typeOne of "group\_create", "group\_delete", "group\_settings\_update", "group\_add\_participants", "group\_remove\_participants"·required

Type of group event

---

request\_idstring·required

Unique identifier for the request

---

subjectstring

Group subject/name

---

descriptionstring

Group description

---

added\_participantsarray of GroupParticipant

List of participants added to the group

Show child attributes

---

added\_participants[]GroupParticipant

Show child attributes

---

inputstring

Input phone number or WhatsApp ID

---

wa\_idstring

WhatsApp ID of the participant

---

removed\_participantsarray of GroupParticipant

List of participants removed from the group

Show child attributes

---

removed\_participants[]GroupParticipant

Show child attributes

---

inputstring

Input phone number or WhatsApp ID

---

wa\_idstring

WhatsApp ID of the participant

---

profile\_pictureGroupProfilePicture

Show child attributes

---

mime\_typestring

MIME type of the profile picture

---

sha256string

SHA256 hash of the profile picture

---

fieldOne of "messages", "group\_lifecycle\_update", "group\_settings\_update", "group\_participant\_update"·required

The field indicate to what object is the webhook related:

* messages: the webhook is related to messages from consumer or status of message sent by business to consumer.
* group\_lifecycle\_update: the webhook is related to group creation and deletion.
* group\_settings\_update: the webhook is related to group settings update.
* group\_participant\_update: the webhook is related to participants joining and leaving the groups.

Responses

---

Endpoint for receiving webhook payloads for diverse incoming WhatsApp message types.

200

Webhook received successfully

Select language

cURLJavaScriptPython

---

```
curl --request POST \  
  --url 'https://graph.facebook.com/whatsapp/webhooks' \  
  --header 'Authorization: Bearer <Token>' \  
  --header 'Content-Type: application/json' \  
  --data '{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "419561257915477",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "15550783881",  
              "phone_number_id": "106540352242922"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "Sheena Nelson"  
                },  
                "wa_id": "16505551234"  
              }  
            ],  
            "messages": [  
              {  
                "from": "16505551234",  
                "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgASGBQzQTRBNjU5OUFFRTAzODEwMTQ0RgA=",  
                "timestamp": "1749416383",  
                "type": "text",  
                "text": {  
                  "body": "Does it come in another color?"  
                }  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}'
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
