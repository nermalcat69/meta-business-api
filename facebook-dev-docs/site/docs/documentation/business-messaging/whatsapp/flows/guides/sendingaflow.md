---
title: "Sending a Flow"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow
---

# Sending a Flow

Updated: Jun 16, 2026

You can quickly build WhatsApp Flow in the [playground](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/playground) and send it as a [template message](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview), for example as part of a marketing campaign.
Or you can create a [WhatsApp Flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows) and send it either as a [normal message](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow).

To read more about message types, limits, and timing, see [Send messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages).

To send the Flow as a template, first you need to [create a template](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates). Here is an example request:

```
curl -i -X POST \
https://graph.facebook.com/v16.0/<waba-id>/message_templates \
-H 'Authorization: Bearer TOKEN' \
-H 'Content-Type: application/json' \
-d'
{
  "name": "example_template_name",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "body",
      "text": "This is a flows as template demo"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "FLOW",
          "text": "Sign up",
          "flow_action": "navigate",
          "navigate_screen": "WELCOME_SCREEN"
          "flow_json" : "{    \"version\": \"3.1\",    \"screens\": [        {            \"id\": \"WELCOME_SCREEN\",            \"layout\": {                \"type\": \"SingleColumnLayout\",                \"children\": [                    {                        \"type\": \"TextHeading\",                        \"text\": \"Hello World\"                    },                    {                        \"type\": \"TextBody\",                        \"text\": \"Let\'s start building things!\"                    },                    {                        \"type\": \"Footer\",                        \"label\": \"Complete\",                        \"on-click-action\": {                            \"name\": \"complete\",                            \"payload\": {}                        }                    }                ]            },            \"title\": \"Welcome\",            \"terminal\": true,            \"success\": true,            \"data\": {}        }    ]}"
        }
      ]
    }
  ]
}'
```

| Property | Type | Description |
| --- | --- | --- |
| `buttons.flow_json` | String | The Flow JSON encoded as string. Specifies the layout of the flow to be attached to the Template. The Flow JSON can be quickly generated in the [Flow playground](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/playground). For full reference see [Flow JSON documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson)  Cannot be used if the `flow_id` attribute is provided. Only one of the parameters is allowed. |
| `buttons.flow_id` | String | `id` of a flow  Cannot be used if the `flow_json` attribute is provided. Only one of the parameters is allowed. |
| `buttons.navigate_screen` | String | Flow JSON screen name. Required if flow\_action is `navigate` |
| `buttons.flow_action` | Enum | `navigate` or `data_exchange`. Default value is `navigate` |

For more details, see the [template components reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/components).

#### Sample response

```
{  
  "id": "<template-id>",  
  "status": "PENDING",  
  "category": "MARKETING"  
}
```

Ensure that your template passes all required reviews so that `status` is `APPROVED` instead of `PENDING`.

Now you can send a template message with a flow using the following request:

```
curl -X  POST \  
 'https://graph.facebook.com/v16.0/FROM_PHONE_NUMBER_ID/messages' \  
 -H 'Authorization: Bearer ACCESS_TOKEN' \  
 -H 'Content-Type: application/json' \  
 -d '{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "PHONE_NUMBER",  
  "type": "template",  
  "template": {  
    "name": "TEMPLATE_NAME",  
    "language": {  
      "code": "LANGUAGE_AND_LOCALE_CODE"  
    },  
    "components": [  
      {  
        "type": "button",  
        "sub_type": "flow",  
        "index": "0",  
        "parameters": [  
          {  
            "type": "action",  
            "action": {  
              "flow_token": "FLOW_TOKEN",   //optional, default is "unused"  
              "flow_action_data": {  
                 ...  
              }   // optional, json object with the data payload for the first screen  
            }  
          }  
        ]  
      }  
    ]  
  }  
}'
```

#### Sample response

```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "<phone-number>",  
      "wa_id": "<phone-number>"  
    }  
  ],  
  "messages": [  
    {  
      "id": "<message-id>"  
    }  
  ]  
}
```
