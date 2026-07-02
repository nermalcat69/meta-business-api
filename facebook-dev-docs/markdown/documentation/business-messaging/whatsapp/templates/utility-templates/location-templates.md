---
title: "Call permission request templates"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/utility-templates/location-templates
---

# Call permission request templates

Updated: Jun 17, 2026

Call permission request templates allow you to request permission to call WhatsApp users. They are composed of a required **body** component and a **call permission request** component. When a WhatsApp user receives the message, they can grant or deny your business permission to call them.

You can categorize call permission request templates as either `MARKETING` or `UTILITY`. This page demonstrates creating and sending a call permission request template with the `UTILITY` category. See [Call permission request message template](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/call-permission-request-message-template/) for a marketing example.

![A call permission request template message in WhatsApp showing the body text with the first_name parameter resolved to Pablo, and an annotated callout pointing to the call permission request component](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/672686350_1488549909670325_2826717779551935932_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=37dWlS9oBLwQ7kNvwEeT24O&_nc_oc=AdpsB76Tm5yXv6rj54vyjylIrjkn4ThuusWe-krI3WqsZO0EljbafLrBBXqVXCiBDRMO0dVEhT8bK8W2N1a0C3IV&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=wBugcIolj3gPWaWQYc4Clw&_nc_ss=7b2a8&oh=00_AQBI5PXA-iCmCb8Rozc0lLceURjXTa4dgbgeqjP0AodsRg&oe=6A605D1D)

## Limitations

* Only templates categorized as `MARKETING` or `UTILITY` can include a call permission request component
* Body text is required and must not be empty
* The call permission request component cannot be combined with other interactive components

## Step 1: Create a call permission request template

Use the [Message Templates API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api) to [create a call permission request template](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/message-template-api#post-version-waba-id-message-templates).

### Request syntax

```
curl -X POST \  
  'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{  
    "name": "<TEMPLATE_NAME>",  
    "language": "<TEMPLATE_LANGUAGE>",  
    "category": "<CATEGORY>",  
    "parameter_format": "named",  
    "components": [  
      {  
        "type": "body",  
        "text": "<BODY_TEXT>",  
        "example": {  
          "body_text_named_params": [  
            {  
              "param_name": "<PARAM_NAME>",  
              "example": "<EXAMPLE_PARAM_VALUE>"  
            }  
          ]  
        }  
      },  
      {  
        "type": "call_permission_request"  
      }  
   ]  
}'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<BODY_TEXT>`  *String* | **Required.**  Body text string. Supports named parameters in `{​{parameter_name}​}` format.  Maximum 1024 characters. | `Hi {​{first_name}​}, we would like to call you to assist with your recent order. Our support team is ready to help.` |
| `<CATEGORY>`  *Enum* | **Required.**  Template category. Must be `MARKETING` or `UTILITY`. | `UTILITY` |
| `<EXAMPLE_PARAM_VALUE>`  *String* | **Required if body text uses named parameters.**  Example value for the named parameter. | `Pablo` |
| `<PARAM_NAME>`  *String* | **Required if body text uses named parameters.**  Name of the parameter, matching the placeholder in the body text. | `first_name` |
| `<TEMPLATE_LANGUAGE>`  *Enum* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Template name.  Maximum 512 characters. | `order_support_call` |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required.**  WhatsApp Business account ID. | `106540352242922` |

### Example request

```
curl -X POST \
  'https://graph.facebook.com/v23.0/106540352242922/message_templates' \
  -H 'Authorization: Bearer EAAJB...' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "order_support_call",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "named",
    "components": [
      {
        "type": "body",
        "text": "Hi {​{first_name}​}, we would like to call you to assist with your recent order. Our support team is ready to help.",
        "example": {
          "body_text_named_params": [
            {
              "param_name": "first_name",
              "example": "Pablo"
            }
          ]
        }
      },
      {
        "type": "call_permission_request"
      }
   ]
}'
```

### Example response

```
{  
  "id": "546151681022936",  
  "status": "PENDING",  
  "category": "UTILITY"  
}
```

## Step 2: Send a call permission request template

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) to [send an approved call permission request template](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) in a template message.

### Request syntax

```
curl -X POST \  
  'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \  
  -H 'Content-Type: application/json' \  
  -d '{  
    "messaging_product": "whatsapp",  
    "recipient_type": "individual",  
    "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
    "type": "template",  
    "template": {  
      "name": "<TEMPLATE_NAME>",  
      "language": {  
        "policy": "deterministic",  
        "code": "<TEMPLATE_LANGUAGE_CODE>"  
      },  
      "components": [  
        {  
          "type": "body",  
          "parameters": [  
            {  
              "type": "text",  
              "parameter_name": "<PARAM_NAME>",  
              "text": "<PARAM_VALUE>"  
            }  
          ]  
        }  
      ]  
    }  
}'
```

### Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<PARAM_NAME>`  *String* | **Required if the template body uses named parameters.**  Name of the parameter to replace in the template body. | `first_name` |
| `<PARAM_VALUE>`  *String* | **Required if the template body uses named parameters.**  Value to substitute for the named parameter. | `Pablo` |
| `<TEMPLATE_LANGUAGE_CODE>`  *Enum* | **Required.**  Template [language and locale code](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/supported-languages). | `en_US` |
| `<TEMPLATE_NAME>`  *String* | **Required.**  Name of the template to send. | `order_support_call` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

### Example request

```
curl -X POST \
  'https://graph.facebook.com/v23.0/106540352242922/messages' \
  -H 'Authorization: Bearer EAAJB...' \
  -H 'Content-Type: application/json' \
  -d '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "+15551234567",
    "type": "template",
    "template": {
      "name": "order_support_call",
      "language": {
        "policy": "deterministic",
        "code": "en_US"
      },
      "components": [
        {
          "type": "body",
          "parameters": [
            {
              "type": "text",
              "parameter_name": "first_name",
              "text": "Pablo"
            }
          ]
        }
      ]
    }
}'
```

### Example response

```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "+15551234567",  
      "wa_id": "15551234567"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTMyMzI4NjU2NzgVAgARGBJBQzRBRDBEMDEwQzVBM0M0QkIA",  
      "message_status": "accepted"  
    }  
  ]  
}
```
