---
title: "Copy code authentication templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/keyboard-suggestions
---

# Copy code authentication templates

Updated: Jun 24, 2026

Copy code authentication templates allow you to send a one-time password or code along with a copy code button to your users. When a WhatsApp user taps the copy code button, the WhatsApp client copies the password or code to the device’s clipboard. The user can then switch to your app and paste the password or code into your app.

Effective June 15, 2026, on iOS 26 and later, copy code templates will also trigger [Keyboard suggestions](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/keyboard-suggestions), giving the WhatsApp user a one-tap autofill option from the push notification in addition to the copy button.

Note: The “I didn’t request a code” button is currently in beta and is being rolled out incrementally to business customers.

![WhatsApp authentication message showing verification code, preset text, security disclaimer, expiration warning, Copy code button, and I didn't request a code button](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/545560391_1347895570098676_5955248492889407175_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=lVoFjRsDDnEQ7kNvwHaPBH-&_nc_oc=AdrlNtOyYbLxqWcSZRyn_4VPltAugyou4ue9Ui4kbAw8a5RyQL4AdktkCKiW7UXFx-aoy35O_9Cd2p9qRDlY_9qN&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=4T-erMbgj7sQLF4GKAUN5A&_nc_ss=7b2a8&oh=00_AQC3Fa82Xx7S11o3rG-MijrL-oTlmarfj_xRR94ydgy8iw&oe=6A6068F7)

Copy code button authentication templates consist of:

* Preset text: *<VERIFICATION\_CODE> is your verification code.*
* An optional security disclaimer: *For your security, do not share this code.*
* An optional expiration warning: *This code expires in <NUM\_MINUTES> minutes.*
* A copy code button.

## Limitations

URLs, media, and emojis are not supported.

## Creating authentication templates

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates) to create authentication templates.

### Request syntax

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \  
  -H 'Content-Type: application/json' \  
  -H 'Authorization: Bearer EAAJB...' \  
  -d '  
{  
    "name": "<TEMPLATE_NAME>",  
    "language": "<TEMPLATE_LANGUAGE>",  
    "category": "authentication",  
    "message_send_ttl_seconds": <TIME_TO_LIVE>,  // Optional  
    "components": [  
      {  
        "type": "body",  
        "add_security_recommendation": <SECURITY_RECOMMENDATION>  // Optional  
      },  
      {  
        "type": "footer",  
        "code_expiration_minutes": <CODE_EXPIRATION>  // Optional  
      },  
      {  
        "type": "buttons",  
        "buttons": [  
          {  
            "type": "otp",  
            "otp_type": "copy_code",  
            "text": "<COPY_CODE_BUTTON_TEXT>"  // Optional  
          }  
        ]  
      }  
    ]  
  }'
```
```

In your template creation request, you designate the button `type` as `OTP`, but WhatsApp sets the button `type` to `URL` upon creation. To confirm the type change, perform a GET request on a newly created authentication template and analyze its components.

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<CODE_EXPIRATION>`  *Integer* | **Optional.**  Indicates the number of minutes the password or code is valid.  If included, the delivered message displays the code expiration warning and this value.  If omitted, the delivered message does not display the code expiration warning.  Minimum 1, maximum 90. | `5` |
| `<COPY_CODE_BUTTON_TEXT>`  *String* | **Optional.**  Copy code button label text.  If omitted, the text will default to a pre-set value localized to the template’s language. For example, `Copy Code` for English (US).  Maximum 25 characters. | `Copy Code` |
| `<SECURITY_RECOMMENDATION>`  *Boolean* | **Optional.**  Set to `true` if you want the template to include the string, *For your security, do not share this code.* Set to `false` to exclude the string. | `true` |
| `<TEMPLATE_LANGUAGE>`  *String* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `verification_code` |
| `<TIME_TO_LIVE>`  *Integer* | **Optional.**  Authentication message time-to-live value, in seconds. See [Time-To-Live](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates#time-to-live) below. | `60` |

### Example request

```
curl 'https://graph.facebook.com/v25.0/102290129340398/message_templates' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "name": "authentication_code_copy_code_button",
  "language": "en_US",
  "category": "authentication",
  "message_send_ttl_seconds": 60,
  "components": [
    {
      "type": "body",
      "add_security_recommendation": true
    },
    {
      "type": "footer",
      "code_expiration_minutes": 5
    },
    {
      "type": "buttons",
      "buttons": [
        {
          "type": "otp",
          "otp_type": "copy_code",
          "text": "Copy Code"
        }
      ]
    }
  ]
}'
```

### Example response

```
```
{  
  "id": "594425479261596",  
  "status": "PENDING",  
  "category": "AUTHENTICATION"  
}
```
```

## Webhooks

The [button messages webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/button) is triggered whenever a user taps the “I didn’t request a code” button within the message.

### Example webhook

```
```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "320580347795883",  
      "changes": [  
        {  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "display_phone_number": "12345678",  
              "phone_number_id": "1234567890"  
            },  
            "contacts": [  
              {  
                "profile": {  
                  "name": "John"  
                },  
                "wa_id": "12345678"  
              }  
            ],  
            "messages": [  
              {  
                "context": {  
                  "from": "12345678",  
                  "id": "wamid.HBgLMTIxMTU1NTE0NTYVAgARGBJDMDEyMTFDNTE5NkFCOUU3QTEA"  
                },  
                "from": "12345678",  
                "id": "wamid.HBgLMTIxMTU1NTE0NTYVAgASGCBBQ0I3MjdCNUUzMTE0QjhFQkM4RkQ4MEU3QkE0MUNEMgA=",  
                "timestamp": "1753919111",  
                "from_logical_id": "131063108133020",  
                "type": "button",  
                "button": {  
                  "payload": "DID_NOT_REQUEST_CODE",  
                  "text": "I didn't request a code"  
                }  
              }  
            ]  
          },  
          "field": "messages"  
        }  
      ]  
    }  
  ]  
}
```
```

## Sample app

See our [WhatsApp One-Time Password (OTP) Sample App⁠](https://github.com/WhatsApp/WhatsApp-OTP-Sample-App?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4G883r_f8OxuBN4Ug2aWo3tRDVPu6JtxWg9T734Z5waARzxf7VGfEehXYlFw_aem_sWjiUmtGyV3tjOHfK_Nwxg) for Android on GitHub. The sample app demonstrates how to send and receive one-time passwords (OTPs) and codes via the API, how to integrate the one-tap autofill and copy code buttons, how to create a template, and how to start a sample server.

## Sending authentication templates

This document explains how to send approved [authentication templates with one-time password buttons](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/authentication-templates).

Note that **you must first initiate a handshake** between your app and the WhatsApp client. See [Handshake](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/authentication-templates/keyboard-suggestions#handshake) above.

### Request syntax

```
```
curl -X POST "https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages" \  
  -H "Authorization: Bearer <ACCESS_TOKEN>" \  
  -H "Content-Type: application/json" \  
  -d '  
{  
    "messaging_product": "whatsapp",  
    "recipient_type": "individual",  
    "to": "<CUSTOMER_PHONE_NUMBER>",  
    "type": "template",  
    "template": {  
      "name": "<TEMPLATE_NAME>",  
      "language": {  
        "code": "<TEMPLATE_LANGUAGE_CODE>"  
      },  
      "components": [  
        {  
          "type": "body",  
          "parameters": [  
            {  
              "type": "text",  
              "text": "<ONE-TIME PASSWORD>"  
            }  
          ]  
        },  
        {  
          "type": "button",  
          "sub_type": "url",  
          "index": "0",  
          "parameters": [  
            {  
              "type": "text",  
              "text": "<ONE-TIME PASSWORD>"  
            }  
          ]  
        }  
      ]  
    }  
}'
```
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<CUSTOMER_PHONE_NUMBER>` | The WhatsApp user’s phone number. | `12015553931` |
| `<ONE-TIME PASSWORD>` | The one-time password or verification code that WhatsApp delivers to the customer.  Note that this value must appear twice in the payload.  Maximum 15 characters. | `J$FpnYnP` |
| `<TEMPLATE_LANGUAGE_CODE>` | The template’s [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>` | The template’s name. | `verification_code` |

### Response

Upon success, the API will respond with:

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "<INPUT>",  
      "wa_id": "<WA_ID>"  
    }  
  ],  
  "messages": [  
    {  
      "id": "<ID>"  
    }  
  ]  
}
```
```

### Response parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<INPUT>`  *String* | The WhatsApp user’s phone number that the message was sent to. This may not match `wa_id`. | `+16315551234` |
| `<WA_ID>`  *String* | WhatsApp ID of the WhatsApp user the message was sent to. This may not match `input`. | `+16315551234` |
| `<ID>`  *String* | WhatsApp message ID. You can use the ID listed after “wamid.” to track your message status. | `wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI3N0EyQUJDMjFEQzZCQUMzODMA` |

### Example request

```
curl -L 'https://graph.facebook.com/v25.0/105954558954427/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '{
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "12015553931",
      "type": "template",
      "template": {
        "name": "verification_code",
        "language": {
          "code": "en_US"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "text": "J$FpnYnP"
            }
          ]
        },
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "J$FpnYnP"
            }
          ]
        }
      ]
    }
  }'
```

### Example response

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "12015553931",  
      "wa_id": "12015553931"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY1MDM4Nzk0MzkVAgARGBI4Qzc5QkNGNTc5NTMyMDU5QzEA"  
    }  
  ]  
}
```
```
