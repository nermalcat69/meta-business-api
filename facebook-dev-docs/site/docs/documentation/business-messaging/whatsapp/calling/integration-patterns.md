---
title: "Send WhatsApp Call Button Messages and Deep Links"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/integration-patterns
---

# Send WhatsApp Call Button Messages and Deep Links

Updated: Jun 26, 2026

## Overview

After you adopt Cloud API Calling features, you can raise awareness with your customers in two core ways:

* Send them a message with a WhatsApp call button
* Embed a calling deep link into your brand surfaces (website, application, and so on)

## Send interactive message with a WhatsApp call button

Use this endpoint to send a free-form interactive message with a WhatsApp call button during a [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows) or an [open conversation window](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing#opening-conversations).

When a WhatsApp user clicks the call button, the click initiates a WhatsApp call to the business number that sent the message.

WhatsApp sends a standard [message status webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) in response to this message send.

![Screenshot showing WhatsApp call button message on mobile device](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/561384673_1339318434593474_5721045063886655968_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=evKw49x2pJEQ7kNvwGeAarw&_nc_oc=AdoUhg_huyl09mL77QqHslD5B4CzLIckPfleDpyDZm7HcNP9a4nZ1g9nXUG5Yl6k5xamDv_xfD7XXTJAYAICZjaF&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=YyF_Y8qwVVhKvFhgBbqmVw&_nc_ss=7b2a8&oh=00_AQA-MR4CjMF0QXGBVI37uA5HSDd88TuQfMs7y42SC53tLg&oe=6A607179)

#### Request syntax

```
POST <PHONE_NUMBER_ID>/messages
```

| Placeholder | Description | Sample value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number from which you are sending messages.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) | `+12784358810` |

#### Request body

```
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "14085551234",  
  "recipient": "US.13491208655302741918",  
  "type": "interactive",  
  "interactive" : {  
    "type" : "voice_call",  
    "body" : {  
      "text": "You can call us on WhatsApp now for faster service!"  
    },  
    "action": {  
      "name": "voice_call",  
      "parameters": {  
        "display_text": "Call on WhatsApp",  
        "ttl_minutes": 100,  
        "payload": "payload data"  
      }  
    }  
  }  
}
```

#### Body parameters

[Learn more about sending interactive free form messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

| Parameter | Description | Sample value |
| --- | --- | --- |
| `to`  *Integer* | **Required** (unless `recipient` is provided)  The phone number of the WhatsApp user you are messaging.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `"17863476655"` |
| `recipient`  *String* | **Optional**  The WhatsApp user's business-scoped user ID (BSUID) or parent BSUID. Use this instead of, or in addition to, `to`. If you include both, `to` takes precedence.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `"US.13491208655302741918"` |
| `type`  *String* | **Required**  The type of interactive message you are sending.  In this case, you are sending a `voice_call`.  [Learn more about interactive messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) | `"voice_call"` |
| `action`  *String* | **Required**  The action of your interactive message.  Must be `voice_call`. | `"voice_call"` |
| `parameters`  *JSON Object* | **Optional**    Optional parameters for the WhatsApp calling button sent to the user.  Contains three values: `display_text`, `ttl_minutes`, and `payload`.  `display_text` — (*String*) **Optional**  The display text on the WhatsApp calling button sent to the user.  Default is `Call Now`.  Max length: 20 characters.  `ttl_minutes` — (*Integer*) **Optional**  Time to live for the call-to-action (CTA) button in minutes.  Must be between 1 and 43200 (30 days).  Default value is 10080 (7 days).  `payload` — (*String*) **Optional**  An arbitrary string, useful for tracking.  Any app subscribed to the `calls` webhook field on the WhatsApp Business account can get this string. The string is included in the `connect` and `terminate` webhook payloads under the `cta_payload` field.  Cloud API does not process the `cta_payload` field; it returns the value in webhook payloads.  Maximum 512 characters.  Payload is only available to WhatsApp clients starting on version 2.25.27. | ``` "parameters": { "display_text": "Call on WhatsApp", "ttl_minutes": 100, "payload": "payload data" } ``` |

**Usernames and business-scoped user IDs:** The `recipient` field lets you identify the WhatsApp user by their BSUID instead of, or in addition to, their phone number in `to`. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

#### Success response

[Learn more about messaging success responses](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

#### Error response

Possible errors:

If you send this message to users on older app versions, Cloud API returns an error webhook with error code `131026`.

[View general Cloud API error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Create and send WhatsApp call button template message

Use these endpoints to create and send a WhatsApp call button template message.

Once your call button template message is created, you can send a message to a WhatsApp user, inviting them to call your business.

[Learn more about creating and managing message templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

### Create call button message template

Use this endpoint to create a call button message template.

#### Request syntax

```
POST /<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

| Parameter | Description | Sample value |
| --- | --- | --- |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required**  Your WhatsApp Business account ID.  [Learn how to find your WABA ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts) | `"waba-90172398162498126"` |

#### Request body

```
{  
  "name": "<NAME>",  
  "category": "<CATEGORY>",  
  "language": "<LANGUAGE>",  
  "components": [  
    {  
      "type": "BODY",  
      "text": "You can call us on WhatsApp now for faster service!"  
    },  
    {  
      "type": "BUTTONS",  
      "buttons": [  
        {  
          "type": "voice_call",  
          "text": "Call Now",  
          "ttl_minutes": 1440  
        },  
        {  
          "type": "URL",  
          "text": "Contact Support",  
          "url": "https://www.luckyshrub.com/support"  
        }  
      ]  
    }  
  ]  
}
```

#### Body parameters

You can create and manage template messages through both Cloud API and the Meta Business Suite interface.

When creating your call button template, ensure you configure `type` as `voice_call`.

[Learn more about creating and managing message templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

| Parameter | Description | Sample value |
| --- | --- | --- |
| `type`  *String* | **Required**  The type of template message you are creating.  In this case, you are creating a `voice_call`. | `"voice_call"` |
| `text`  *String* | **Optional**  The display text on the WhatsApp calling button sent to the user.  Default is `Call Now`.  Max length: 20 characters. | `"Call Now"` |
| `ttl_minutes`  *Integer* | **Optional**  Time to live for the CTA button in minutes.  Must be between 1440 (1 day) and 43200 (30 days).  You can override this value when sending the message. | `1440` |

#### Success response

```
{  
  "id": "<ID>",  
  "status": "<STATUS>",  
  "category": "<CATEGORY>"  
}
```

[*Learn more about messaging success responses*](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

#### Error response

Possible errors:

* Invalid `whatsapp-business-account-id`
* Permissions/Authorization errors
* Template structure/component validation alerts

[View general Cloud API error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Send call button message template

Use this endpoint to **send** a call button message template.

The following is a simplified sample of the send template message request. You can also [learn more about how to send message templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview).

#### Request syntax

```
POST /<PHONE_NUMBER_ID>/messages
```

| Parameter | Description | Sample value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *String* | **Required**  The business phone number from which you are sending messages.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `+18762639988` |

#### Request body

```
{  
  "to": "14085551234",  
  "recipient": "US.13491208655302741918",  
  "messaging_product": "whatsapp",  
  "type": "template",  
  "recipient_type": "individual",  
  "template": {  
    "name": "wa_voice_call",  
    "language": {  
      "code": "en"  
    },  
    "components": [  
      {  
        "type": "button",  
        "sub_type" : "voice_call",  
        "parameters": [  
          {  
            "type": "ttl_minutes",  
            "ttl_minutes": 100  
          },  
          {  
            "type": "payload",  
            "payload": "payload data"  
          }  
        ]  
      }  
    ]  
  }  
}
```

#### Request parameters

| Parameter | Description | Sample value |
| --- | --- | --- |
| `recipient`  *String* | **Optional**  The WhatsApp user's business-scoped user ID (BSUID) or parent BSUID. Use this instead of, or in addition to, `to`. If you include both, `to` takes precedence.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `"US.13491208655302741918"` |
| `ttl_minutes`  *Integer* | **Optional**  Time to live for the CTA button in minutes.  Must be between 1 and 43200 (30 days).  Default value is 10080 (7 days). | `10800` |
| `payload`  *String* | **Optional**  An arbitrary string, useful for tracking.  Any app subscribed to the `calls` webhook field on the WhatsApp Business account can get this string. The string is included in the `connect` and `terminate` webhook payloads under the `cta_payload` field.  Cloud API does not process this field; it returns the value in webhook payloads.  Maximum 512 characters.  Payload is only available to WhatsApp clients starting on version 2.25.27. | `payload data` |

**Usernames and business-scoped user IDs:** The `recipient` field lets you identify the WhatsApp user by their BSUID instead of, or in addition to, their phone number in `to`. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

#### Success response

![Screenshot showing successful WhatsApp call button template message](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/566207608_1339317967926854_2361800073068017276_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=2HaLl6gYGYQQ7kNvwE9sglu&_nc_oc=Adrcme-M7qRJVH22l2-sRZcOJwcplTZ6jZd0hf87IZ4rtnySDRQxK8IjLMGyfZH_1sKNy6wTE7ggxJhOKMNakWtS&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=YyF_Y8qwVVhKvFhgBbqmVw&_nc_ss=7b2a8&oh=00_AQC5-Loy0W4bw_yeUrENNqxK9KH_wayFrv0-aOAM7PhuMA&oe=6A605393)

[Learn more about messaging success responses](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

## Calling deep links

Calling deep links are hyperlinks that route WhatsApp users to call your business.

The process to create a calling deep link is similar to a [chat deep link⁠](https://faq.whatsapp.com/5913398998672934/?locale=en_US&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4iDLLTgyr5fQ_inwTW1L6WI2WwFinuX53IxUrSRQ7TC4KiF8UeJT7Uf_XeEQ_aem_oFK5oh6aNDDa31OT7fq3QQ), except the format for the call deep link is `wa.me/call/<BUSINESS_PHONE_NUMBER>`

Deep links are not supported on WhatsApp desktop clients.

### Embed calling deep links

You can use calling deep links to advertise WhatsApp calling for your business.

Use these links anywhere calling is useful, such as your website, primary application, or a QR code to be shared.

![Example of calling deep link embedded on a business website](https://scontent.fdel1-1.fna.fbcdn.net/v/t39.2365-6/560548572_1339317974593520_7716453845465534771_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pk6TAa-F7EwQ7kNvwHAvuQM&_nc_oc=AdqNgrWyN1pvaJ3bSIxcxUt5dejaD8BPc3_3CtZrug1A5HRJpAtxcaghIZ5OD-XKexAeaNRDYhvX8VoJ1SUaQuk0&_nc_zt=14&_nc_ht=scontent.fdel1-1.fna&_nc_gid=YyF_Y8qwVVhKvFhgBbqmVw&_nc_ss=7b2a8&oh=00_AQBE2jDvgZV3BPHBkIQck7frZO05wkB-FfED9colOV7Ebg&oe=6A606A3A)

### Send calling deep links

You can also send messages to WhatsApp users with a calling deep link.

Since deep links can be made per business phone number, you can use calling deep links to prompt WhatsApp users to contact a different phone number with voice enabled.

The `wa.me/call/<BUSINESS_PHONE_NUMBER>` format is easy to copy, paste, and send, and does not require you to make a template in Meta Business Suite.

![Screenshot showing WhatsApp message with calling deep link](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/561465638_1339317964593521_4488293728274608640_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=I_YoZR5duo4Q7kNvwGU-IEd&_nc_oc=AdoZ10LIRpTHbptFS24ax8zfzXTlcTZBYPgZQxlmEXk16wYP8toRhfL-4DW09gkkiQqVdnfLpldldZs9_hx2vvLn&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=YyF_Y8qwVVhKvFhgBbqmVw&_nc_ss=7b2a8&oh=00_AQDkk8H9FRW-HNx9KdqvmilnaIMeMtrM2X7cxhNQKcEx2A&oe=6A6065EB)

### Send payload data in call deep link

You can also send a payload with the deep link. You can use the `biz_payload` query string when sending the call deep link to any user (`wa.me/call/<BUSINESS_PHONE_NUMBER>?biz_payload=payload`).

When a user calls using the provided deep link with the `biz_payload`, any app subscribed to the `calls` webhook field on the WhatsApp Business account can get this string. The string is included in the `connect` and `terminate` webhook payloads under the `deeplink_payload` field.

Payload in call deep link is only available to WhatsApp clients starting on version 2.25.27.
