---
title: "Sending a Flow"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/healthmonitoring
---

# Sending a Flow

Updated: Jun 16, 2026

This guide describes the ways to send a Flow to users.

## Prerequisites

You will need to [verify your business](https://developers.facebook.com/docs/development/release/business-verification) and maintain a [high message quality](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#message-quality).

## Postman collection

All the API requests mentioned below are documented in the [Flows API postman collection⁠](https://www.postman.com/meta/workspace/whatsapp-business-platform/documentation/24926895-7bf51205-92ed-49d1-af4a-0130cf84b6f6) which you can use to make API requests and generate code in different languages.

## Business initiated messages

To send a business initiated message with a Flow, you can create and send a [message template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview) with a WhatsApp Flow attached to it. A new button type called FLOW is available. Use this type to specify the Flow to be sent with the message template.

To send a Flow message template you need to:

* Create a message template with a Flow
* Send a message template with a Flow

### Create a message template with a Flow

You can quickly build a Flow in the [playground](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/playground) and pass the Flow JSON in the message template creation request. Or you can specify the ID or name of an already published Flow.

Below is an example request to create a message template with a Flow, [see this page for full reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates):

#### Sample request

#### Sample request

```
```
curl -i -X POST \  
  https://graph.facebook.com/<API_VERSION>/<WABA_ID>/message_templates \  
  -H 'Authorization: Bearer TOKEN' \  
  -H 'Content-Type: application/json' \  
  -d'  
  {  
    "name": "example_template_name",  
    "language": "en_US",  
    "category": "MARKETING",  
    "components": [  
      {  
        "type": "body",  
        "text": "This is a flows as template demo"  
      },  
      {  
        "type": "BUTTONS",  
        "buttons": [  
          {  
            "type": "FLOW",  
            "text": "Open flow!",  
            "flow_id" : "<FLOW_ID>",  
            // or  
            "flow_name" : "<flow_name>",  
            // or  
            "flow_json" : "{\"version\":\"5.0\",\"screens\":[{\"id\":\"WELCOME_SCREEN\",\"layout\":{\"type\":\"SingleColumnLayout\",\"children\":[{\"type\":\"TextHeading\",\"text\":\"Hello World\"},{\"type\":\"Footer\",\"label\":\"Complete\",\"on-click-action\":{\"name\":\"complete\",\"payload\":{}}}]},\"title\":\"Welcome\",\"terminal\":true,\"success\":true,\"data\":{}}]}"  
         }  
        ]  
      }  
    ]  
  }'
```
```

| buttons object Parameters | Description |
| --- | --- |
| `type` *string* | **Required.** Button type. Default value is `FLOW` |
| `text` *string* | **Required.** Button label text. 25 characters maximum. |
| `flow_id` *string* | **Required.** The unique ID of the Flow. Cannot be used if `flow_name` or `flow_json` parameters are provided. **Only one of these parameters is required.** |
| `flow_name` *string* | **Required.** The name of the Flow. Supported in Cloud API only. The Flow ID is stored in the message template, not the name, so changing the Flow name will not affect existing message templates. Cannot be used if `flow_id` or `flow_json` parameters are provided. **Only one of these parameters is required.** |
| `flow_json` *string* | **Required.** The Flow JSON encoded as string with escaping. The Flow JSON specifies the content of the Flow. Supported in Cloud API only. Cannot be used if `flow_id` or `flow_name` parameters are provided. **Only one of these parameters is required.** |
| `flow_action` *string* | Default value is `navigate`. Either `navigate` or `data_exchange`. |
| `nagivate_screen` *string* | The unique ID of the Screen in the Flow. Default value is `FIRST_ENTRY_SCREEN`. Optional if `flow_action` is `navigate`. |

Message templates can be created and sent in [these languages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages).

#### Sample Response

```
```
{  
  "id": "<TEMPLATE_ID>",  
  "status": "PENDING",  
  "category": "MARKETING"  
}
```
```

#### Sample response

```
```
{  
  "id": "<template-id>",  
  "status": "PENDING",  
  "category": "MARKETING"  
}
```
```

### Send template with flow

Ensure that your template passes all required reviews so that `status` is `APPROVED` instead of `PENDING`.

Now you can send a message template with a Flow using the request below

#### Sample request

```
```
curl -X  POST \  
 'https://graph.facebook.com/v16.0/FROM_PHONE_NUMBER_ID/messages' \  
 -H 'Authorization: Bearer ACCESS_TOKEN' \  
 -H 'Content-Type: application/json' \  
 -d '{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "PHONE_NUMBER",  
  "type": "template",  
  "template": {  
    "name": "TEMPLATE_NAME",  
    "language": {  
      "code": "LANGUAGE_AND_LOCALE_CODE"  
    },  
    "components": [  
      {  
        "type": "button",  
        "sub_type": "flow",  
        "index": "0",  
        "parameters": [  
          {  
            "type": "action",  
            "action": {  
              "flow_token": "FLOW_TOKEN",   //optional, default is "unused"  
              "flow_action_data": {  
                 ...  
              }   // optional, json object with the data payload for the first screen  
            }  
          }  
        ]  
      }  
    ]  
  }  
}'
```
```

#### Sample response

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "<phone-number>",  
      "wa_id": "<phone-number>"  
    }  
  ],  
  "messages": [  
    {  
      "id": "<message-id>"  
    }  
  ]  
}
```
```

## User-initiated conversations

After you create a Flow, you can send it. You can send a Message with a Flow in a user-initiated conversation using a Message with a Call To Action (CTA). You send this message through the Cloud API with information specific to the Flow. Tapping the CTA button triggers the Flow.

Read more about [message types, limits, and timing](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages).

As mentioned earlier, a message with a Flow is not much different from other types of messages. A Flow message uses the existing APIs, which are described on the following pages:

* [Cloud API Interactive Messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#interactive-object) documentation page describes how to send Interactive Messages with the Cloud API.

To send a message with a Flow, you can use a new type of the Interactive Object named `flow` with the following properties.

### Interactive message parameters

| Property | Type | Description |
| --- | --- | --- |
| `interactive.type` | String | Value must be `flow` |
| `interactive.action.name` | String | Value must be `flow` |
| `interactive.action.parameters.flow_message_version` | String | Value must be `3`. |
| `interactive.action.parameters.flow_id` | String | Unique ID of the Flow provided by WhatsApp.  Cannot be used with the `flow_name` parameter. Only one of these parameters is required. |
| `interactive.action.parameters.flow_name` | String | The name of the Flow that you created. Changing the Flow name will require updating this parameter to match the new name.  Cannot be used with the `flow_id` parameter. Only one of these parameters is required. |
| `interactive.action.parameters.flow_cta` | String | Text on the CTA button. For example: “Signup”  CTA text length is advised to be 30 characters or less (no emoji). |
| `interactive.action.parameters.mode` | String | The Flow can be in either `draft` or `published` mode. `published` is the default value for this field. |
| `interactive.action.parameters.flow_token` | String | Flow token that is generated by the business to serve as an identifier.  Default value is `unused`. |
| `interactive.action.parameters.flow_action` | String | `navigate` or `data_exchange`. Default value is `navigate` |
| `interactive.action.parameters.flow_action_payload` | String | Optional if `flow_action` is `navigate`. Should be omitted otherwise. |
| `interactive.action.parameters.flow_action_payload.screen` | String | The `id` of the first screen.  Default is `FIRST_ENTRY_SCREEN` |
| `interactive.action.parameters.flow_action_payload.data` | String | Optional. The input data for the first screen of the Flow. Must be a non-empty object. |

| Interactive messages parameter | Description |
| --- | --- |
| `interactive` *object* | The interactive message configuration. Available parameters:   * `action` *object* – **Required.** Available parameters:   * `name` *string* – **Required.** Value must be `"flow"`.   * `parameters` *object* – **Required.** * `type` *string* – **Required.** Value must be `"flow"`. |

| action.parameter Parameter | Description |
| --- | --- |
| `flow_action` *string* | `navigate` or `data_exchange`. (Default value: navigate) |
| `flow_action_payload` *object* | Optional if `flow_action` is navigate. Should be omitted otherwise. Available values:   * `screen` *string* – The ID of the screen displayed first. It needs to be an entry screen\*\*.   (Default value: `FIRST_ENTRY_SCREEN`) * `data` *string* – Optional input data for the first Screen of the Flow. If provided, this must be a non-empty JSON object serialized as a string.. (Default value: `null`) |
| `flow_cta` *string* | Text on the CTA button. For example: “Signup” CTA text length is advised to be 30 characters or less (no emoji). |
| `flow_id` *string* | **Required** if not using `flow_name`. Unique ID of the Flow provided by WhatsApp. Cannot be used with the `flow_name` parameter. |
| `flow_message_version` *string* | Value must be `"3"`. |
| `flow_name` *string* | **Required** if not using `flow_id`. The name of the Flow that you created. Supported in Cloud API only. Changing the Flow name will require updating this parameter to match the new name. Cannot be used with the `flow_id` parameter. |
| `flow_token` *string* | Flow token that is generated by the business to serve as an identifier. (Default value: ‘unused’) |
| `mode` *string* | Status of the message. Can be `draft` or `published`. (Default value: published) |

\*In case you edited published flow and now it is in the draft state, use “mode=draft” to send the current draft flow version, or “mode=published” (default value) to send the last published flow version.

**See Flow JSON reference for [entry screen](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/flowjson#routing-rules) details.**

**Cloud API Sample Request (with minimum parameters)**

```
```
curl -X  POST \  
 'https://graph.facebook.com/v18.0/FROM_PHONE_NUMBER/messages' \  
 -H 'Authorization: Bearer ACCESS_TOKEN' \  
 -H 'Content-Type: application/json' \  
 -d '{  
  "recipient_type": "individual",  
  "messaging_product": "whatsapp",  
  "to": "whatsapp-id",  
  "type": "interactive",  
  "interactive": {  
    "type": "flow",  
    "header": {  
      "type": "text",  
      "text": "Flow message header"  
    },  
    "body": {  
      "text": "Flow message body"  
    },  
    "footer": {  
      "text": "Flow message footer"  
    },  
    "action": {  
      "name": "flow",  
      "parameters": {  
        "flow_message_version": "3",  
        "flow_name": "appointment_booking_v1", //or flow_id  
        "flow_cta": "Book!"  
      }  
    }  
  }  
}'
```
```

**Cloud API Sample Request (with all parameters)**

```
```
curl -X  POST \  
 'https://graph.facebook.com/v18.0/FROM_PHONE_NUMBER/messages' \  
 -H 'Authorization: Bearer ACCESS_TOKEN' \  
 -H 'Content-Type: application/json' \  
 -d '{  
  "recipient_type": "individual",  
  "messaging_product": "whatsapp",  
  "to": "whatsapp-id",  
  "type": "interactive",  
  "interactive": {  
    "type": "flow",  
    "header": {  
      "type": "text",  
      "text": "Flow message header"  
    },  
    "body": {  
      "text": "Flow message body"  
    },  
    "footer": {  
      "text": "Flow message footer"  
    },  
    "action": {  
      "name": "flow",  
      "parameters": {  
        "flow_message_version": "3",  
        "flow_token": "AQAAAAACS5FpgQ_cAAAAAD0QI3s.",  
  
        "flow_name": "appointment_booking_v1",  
        //or  
        "flow_id": "123456",  
  
        "flow_cta": "Book!",  
        "flow_action": "navigate",  
        "flow_action_payload": {  
          "screen": "<SCREEN_NAME>",  
          "data": "{\"product_name\":\"name\",\"product_description\":\"description\",\"product_price\":100}"  
        }  
      }  
    }  
  }  
}'
```
```

**Sample Response**

```
```
{  
  "contacts": [  
    {  
      "Input": "+447385946746",  
      "wa_id": "47385946746"  
    }  
  ],  
  "messages": [  
    {  
      "id": "gHTRETHRTHTRTH-av4Y"  
    }  
  ],  
  "meta": {  
    "api_status": "stable",  
    "version": "2.44.0.27"  
  }  
}
```
```
