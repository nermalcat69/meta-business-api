---
title: "Obtain user call permissions"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls
---

# Obtain user call permissions

Updated: Jun 26, 2026

As of November 3, 2025, permanent permissions is now available. Users can now grant a business ongoing permission to call. Users can review and change calling permission for a business at any time in the business profile.

Call permission related features are available only in regions where [business initiated calling is available](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling#availability).

## Overview

If you want to place a call to a WhatsApp user, your business must receive user permission first. When a WhatsApp user grants call permissions, they can be either temporary or permanent.

Your business does not have control over this permission; only the user can grant or revoke it, at any time. WhatsApp stores permanent permission data until the user revokes the permission.

You can obtain calling permission from a WhatsApp user in any of the following ways:

* **Send a call permission request to the user** — Send a free-form or templated message requesting calling permission from the user. The user can choose between temporary or permanent.
* **Callback permission is provided by the WhatsApp user** — The WhatsApp user automatically provides temporary call permissions by placing a call to the business. You must [enable the callback setting](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#configure-update-business-phone-number-calling-settings) on the business phone number.
* **WhatsApp user provides call permission via Business Profile** — The WhatsApp user provides call permissions to the business through their business profile.

### Limits (per business and WhatsApp user pair)

* Temporary permissions are **granted for 7 calendar days (168 hours)**
  * Calculated as the number of seconds in a day multiplied by 7, from the time of the user’s approval.
* Permanent permissions do not expire, but they have the same connected calls limit.
* Your business can make a maximum of **100 connected calls every 24 hours**
* These limits are on the **business phone number**

These limits are in place to protect WhatsApp users from unwanted calls.

When you test your WhatsApp Calling integration using public test numbers (PTNs) and sandbox accounts, Calling API restrictions are relaxed.

[Learn more about testing your WhatsApp Calling API integration](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling#testing-and-sandbox-accounts)

## Call permission request basics

You can proactively request a calling permission from a WhatsApp user by sending a permission request message, either as a:

* Free form interactive message
* Template message

The WhatsApp user may approve (temporary or permanent), decline, or simply not respond to a call permission request.

**With permissions, the WhatsApp user is in control.** Even if the user provides calling permission, they can revoke the granted permission at any time. Conversely, if the user declines a permission request, they can still grant calling permission, up until the permission request expires.

**A call permission request expires** when any of the following occurs:

* The WhatsApp user interacts with a subsequent new call permission request from the business
* 7 days after the permission was accepted or declined by the WhatsApp user
* 7 days after the permission was delivered if the WhatsApp user does not respond to the request

[View client UI behavior for expired permission requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions#call-permission-request-expiration-scenarios)

To ensure an optimal user experience around business initiated calling, the following limits are enforced:

* **When sending a calling permission request message**
  * Maximum of 1 permission request in 24 hours
  * Maximum 2 permission requests within 7 days.
  * *These limits reset when any connected call (business-initiated/user-initiated) is made between the business and WhatsApp user.*
  * *These limits apply toward permissions requests sent either as free form or template messages.*
* **When business-initiated calls go unanswered or are rejected**
  * 2 consecutive unanswered calls result in a system message to reconsider an approved permission
  * 4 consecutive unanswered calls result in an approved permission being automatically revoked. The user may again update this if they so choose.

[View client UI behavior for consecutive unanswered calls](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions#consecutive-unanswered-calls)

## Free form vs template call permission request message

Call permission request messages are subject to [messaging charges](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)

A call permission request message can be sent to users in one of the following ways:

**Send a free form message**

* When you are within a customer service window with a WhatsApp user, you can send a free form message with a call permission request.
* The text body is optional. Include a text body to build context with the WhatsApp user. Free form calling permission request messages do not support header and footer sections.
* Since the customer service window is open, there is no need to create a conversation window.

**Create and send a template message**

* Sending a template message allows you to initiate a user conversation with a call permission request.
* Context (that is, a text body) is required when sending a template message with a call permission request.
* With template messages, you can further customize your permission request by adding a message header and footer.

![Criteria for sending call permission request messages](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/565169286_1339318287926822_4224200115246538359_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=AtJnG287M7AQ7kNvwH48RSH&_nc_oc=Adrj2CxxrbnnycldxMs-cC-deGxNX0sF7t3YPH-ZerFGwwSXACjsnANciLnX85wMmnpdqrmCbMqVrxW96dsBeLeO&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQDCF7YC7fmYlR-VceGbYvmBKncMKHiS3Cebz7Rat1L6pw&oe=6A6056E8)

## Client application UI experience

### Call permission request flow and sample messages

#### Allow calls

![Image](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/569920259_1349837820208202_5589372317839283055_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=UBMCgVipdwkQ7kNvwGj4erI&_nc_oc=AdqmR1aUBENqrvwnfhe7f1LrwHx3H7cmIUpKw4Ubni-uPXn8SQYz8RS-Y84vM16Dfdm7re_PMevGg6rmMuh1J4jQ&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCIV9DpX2HBEjsjkqsS_dEqkW20_YTNIBUuInXVUvLv-A&oe=6A60530B)

#### Temporarily allow calls

![Image](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/571212662_1349837823541535_8439494695603356474_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=cb8rLMkql6AQ7kNvwH8nn_E&_nc_oc=AdqVUoXahQ0FsuARACQa9ImVNR-BTvtA-ttSxcpJJ919XHp4SA-AN6GAqf0tKFACpGKsngn6WOHzbkUhaxycFEMJ&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQClOzBC5o_34ucLGl_sJm2cKvQfwLO0aqpLrgYFJqgESg&oe=6A604285)

### Template message

With header, footer and body
![Image](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/571144430_1349837860208198_1480615658143744665_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=u4PgfnKG6ccQ7kNvwG1PamX&_nc_oc=AdqyqO5nQ0kKi9hc-YfNTIjVcXNe05rd0mkUZSHe0z9ddlyIe1fmEjzQENFVp6oYQyhvfuCaKAFp1niEYDJQfffl&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCUa32CHj07RYs16_UZmXoBQFLxnwApniPPGsWE9grATg&oe=6A605A55)

With body only
![Free form message with body only](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/571213506_1349837833541534_3400449897824410954_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JwSI0JATwPsQ7kNvwE01o56&_nc_oc=AdrDzuIC84Nbe51BCWfYxy_LoIB_y0CakHfGdw6_Q8D1P2wY52ZVLOtYqAWH2zyXatUxjvpzXIAcRZgUHG59tKLB&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCtL967ZLZZIZ5O6jbxKr9t4Kw0DbsTveuHlTCfuvpIsg&oe=6A605FC1)

With no text body
![Free form message with no text body](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/571762588_1349837766874874_7988101620410646138_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=T2Zw8QrsjHEQ7kNvwFscvse&_nc_oc=AdpyP0Hmt1hmDAgrB5E_hNP6CLLw6l5fOeJ-jzCvyX-gkjWA2a0-pxZ3KUrodyT5H_qfM1RnFA-4h1W9t89SyNIj&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCRuCTcbqgra_h8uv15OwY9NU22KORbjGL3y057AjOAVw&oe=6A604589)

#### Free form message types

With no text body
![Template message with no text body](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/571762588_1349837766874874_7988101620410646138_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=T2Zw8QrsjHEQ7kNvwFscvse&_nc_oc=AdpyP0Hmt1hmDAgrB5E_hNP6CLLw6l5fOeJ-jzCvyX-gkjWA2a0-pxZ3KUrodyT5H_qfM1RnFA-4h1W9t89SyNIj&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCRuCTcbqgra_h8uv15OwY9NU22KORbjGL3y057AjOAVw&oe=6A604589)

With text body only
![Image](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/571213506_1349837833541534_3400449897824410954_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=JwSI0JATwPsQ7kNvwE01o56&_nc_oc=AdrDzuIC84Nbe51BCWfYxy_LoIB_y0CakHfGdw6_Q8D1P2wY52ZVLOtYqAWH2zyXatUxjvpzXIAcRZgUHG59tKLB&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCtL967ZLZZIZ5O6jbxKr9t4Kw0DbsTveuHlTCfuvpIsg&oe=6A605FC1)

### Updating call permission on business profile

Users always have the option to change the permission using a new option on the business profile.

| Update call permission on business profile |
| --- |
| Business profile screen showing call permission update options |

### Consecutive unanswered calls

| Consecutive unanswered calls |
| --- |
| 2 consecutive unanswered calls — System message for user to update permission  System message displayed after 2 consecutive unanswered calls |
| 4 consecutive unanswered calls — Permissions automatically revoked  Notification shown when permissions are automatically revoked after 4 unanswered calls |

### Call permission request expiration scenarios

Permission request expires after 7 days — User interacts with request
![Permission request expires after 7 days — User interacts with request](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/571301842_1349837853541532_6081659828181485282_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wqef0XmvvhQQ7kNvwGX6qcy&_nc_oc=Adq5KTOc188YH_RzfaW86XJTwHg1mweT2k9FaBmzHDM_3mD7yuLTGkpR4T7w6OiBtI0VtR57waVepgb8FLx9TvVL&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQBavW996HWbpbRNFfHG1BjGeyw8SRY61fQPpxFL_RcksA&oe=6A60668F)

Permission request expires after 7 days — User does not interact
![Permission request expires after 7 days — User does not interact](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/572387488_1349837806874870_6917394151589767244_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Gep42hG-XCMQ7kNvwHfWAhH&_nc_oc=AdrsXvAuyK1C7OS-jAqJLXvMmpvK87Kec-8vmASlzGCiMCupgTo7_T8Ogb_hkWlyMRj5yavqggnA1687Lv0tFaTs&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQC1XI2CDeS7m7SflDXqMWvVgunJv023FjC4mvDEGfS_zQ&oe=6A606EDA)

Previous permission request expires immediately — User does not interact / New call permission request is received
![Previous permission request expires immediately — User does not interact / New call permission request is received](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/574278576_1349837836874867_6096441569227206157_n.jpg?_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ACZxyV1oRRsQ7kNvwE4mFx3&_nc_oc=AdrTeZxpqZuIW3McfH27_DQZqtcsMb757NyRZn6hZyjGGPX4SOHyzRgs_tb6YsWWr7VRuZuGtwaS_f23wPG7qGLU&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQAqU7ADr4Rf9uRtH6kHYG155wkX03EWAoNfUwso9Fm1iQ&oe=6A605BE3)

Previous permission request expires immediately — User allows / Interacts with the new request
![Image](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/571174456_1349837843541533_5439194533822125836_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=urFeS5hmVAsQ7kNvwGSEnTR&_nc_oc=AdoQm7DPm2Z81RngxDspCmU7wMb-YhVJWqlq2lPZX0Efe2Bde1hYVTP1MYT0HI060M--NJRk7RYWjOOMVNH9-h8R&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=iTdwylsqCaRGhi91FpfZ_A&_nc_ss=7b2a8&oh=00_AQCjv0xVpYJrLiPnNg2jBLr7OrchBNe6mqTHp-QOU-cfPg&oe=6A605093)

## Send free form call permission request message

Call permission request messages are subject to [messaging charges](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)

Use this endpoint to send a free form interactive message with a call permission request during a [customer service window](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages#customer-service-windows). Cloud API sends a standard [message status webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) in response to this message send.

**Note:** The call permission request interactive object cannot be edited by the business. Only the message body can be customized.

[See how this message is rendered on the WhatsApp client](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions#call-permission-request-flow-and-sample-messages)

#### Request syntax

```
POST <PHONE_NUMBER_ID>/messages
```

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number which you are sending messages from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `+18274459827` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "<PHONE_NUMBER_ID> or <WHATSAPP_ID>",
  "recipient": "US.13491208655302741918",
  "type": "interactive",
  "interactive": {
    "type": "call_permission_request",
    "action": {
      "name": "call_permission_request"
    },
    "body": {
      "text": "We would like to call you to help support your query on Order No: ON-12853."
    }
  }
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `to`  *Integer* | **Required** (unless `recipient` is provided)  The phone number of the WhatsApp user you are messaging  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `+17863476655` |
| `recipient`  *String* | **Optional**  The WhatsApp user’s business-scoped user ID (BSUID) or parent BSUID. Use this instead of, or in addition to, `to`. If you include both, `to` takes precedence.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `US.13491208655302741918` |
| `type`  *String* | **Required**  The type of interactive message you are sending.  In this case, you are sending a `call_permission_request`.  [Learn more about interactive messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api) | `"call_permission_request"` |
| `action`  *String* | **Required**  The action of your interactive message.  Must be `call_permission_request`. | `"call_permission_request"` |
| `body`  *String* | **Optional**  The body of your message.  Although this field is optional, give the WhatsApp user context when you request permission to call them. | `"Allow us to call you so we can support you with your order."` |

#### Success response

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [{  
      "input": "+1-408-555-1234",  
      "wa_id": "14085551234",  
      "user_id": "<BSUID>",  
      "parent_user_id": "<PARENT_BSUID>"  
    }],  
  "messages": [{  
      "id": "wamid.gBGGFlaCmZ9plHrf2Mh-o"  
    }]  
}
```
```

[*Learn more about messaging success responses*](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api)

**Usernames and business-scoped user IDs:** When sending a call permission request message, you can use the `recipient` field to identify the user by BSUID, and the response may include `user_id` and `parent_user_id` fields; the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

#### Error response

Possible errors that can occur:

* Invalid `phone-number-id`
* Permissions/Authorization errors
* Rate limit reached
* Sending this message to users on older app versions will result in error webhook with error code [131026](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)
* Calling not enabled
* Calling restriction errors

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Create and send call permission request template messages

Call permission request messages are subject to [messaging charges](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)

Use these endpoints to create and send a call permission request message template.

Once your permission request template message is created, your business can send the template message to the user as a call permission request outside of a customer service window.

[Learn more about creating and managing message templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

### Create message template

Use this endpoint to create a call permission request message template.

#### Request syntax

```
POST/<WHATSAPP_BUSINESS_ACCOUNT_ID>/message_templates
```

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<WHATSAPP_BUSINESS_ACCOUNT_ID>`  *String* | **Required**  Your WhatsApp Business account ID.  [Learn how to find your WABA ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-account/whatsapp-business-account-api) | `"waba-90172398162498126"` |

#### Request body

```
```
{  
  "name": "sample_cpr_template",  
  "language": "en",  
  "category": "[MARKETING|UTILITY]",  
  "components": [  
     {  
      "type": "HEADER",  
      "text": "Support of Order No: {{1}}",  
      "example": {  
        "body_text": [  
          [  
            "ON-12345"  
          ]  
        ]  
      }  
    },  
    {  
      "type": "BODY",  
      "text": "We would like to call you to help support your query on Order No: {{1}} for the item {{2}}.",  
      "example": {  
        "body_text": [  
          [  
            "ON-12345",  
            "Avocados"  
          ]  
        ]  
      }  
    },  
    {  
      "type": "FOOTER",  
      "text": "Talk to you soon!"  
    },  
    {  
      "type": "call_permission_request"  
    }  
  ]  
}
```
```

#### Body parameters

Creating and managing template messages can be done both through Cloud API and the Meta Business Suite interface.

When creating your call permission request template, ensure you configure `type` as `call_permission_request`.

[Learn more about creating and managing message templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `type`  *String* | **Required**  The type of template message you are creating.  In this case, you are creating a `call_permission_request`. | `"call_permission_request"` |

#### Template status response

```
{
  "id": "<ID>",
  "status": "<STATUS>",
  "category": "<CATEGORY>"
}
```

[*Learn more about template status response*](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview#template-status)

#### Error response

Possible errors that can occur:

* Invalid WABA id
* Permissions/Authorization errors
* Template structure/component validation alerts

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Send message template

Use this endpoint to send a call permission request message template

The following is a simplified sample of the send template message request, however you can [learn more about how to send message templates here.](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

#### Request syntax

```
POST/<PHONE_NUMBER_ID>/messages
```

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *String* | **Required**  The business phone number which you are sending a message from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `+18762639988` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+13287759822", // The WhatsApp user who will receive the template message
  "recipient": "US.13491208655302741918",
  "type": "template",
  "template": {
    "name": "sample_cpr_template", // The call permission request template name
    "language": {
      "code": "en"
    },
    "components": [ // Body text parameters such as customer name and order number
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "John Smith"
          },
          {
            "type": "text",
            "text": "order #1522"
          }
        ]
      }
    ]
  }
}
```

[Learn more about sending template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview)

**Usernames and business-scoped user IDs:** When sending a call permission request template message, you can use the `recipient` field to identify the user by BSUID instead of a phone number; the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Get current call permission state

Use this endpoint to get the call permission state for a business phone number with a single WhatsApp user. You can identify the user by their phone number (`user_wa_id`) or by their business-scoped user ID (`recipient`).

### Request syntax

```
GET /<PHONE_NUMBER_ID>/call_permissions?user_wa_id=<CONSUMER_WHATSAPP_ID>
```

Or, using a BSUID:

```
GET /<PHONE_NUMBER_ID>/call_permissions?recipient=<BSUID>
```

### Request parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *String* | **Required**  The business phone number you are fetching permissions against.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `+18762639988` |
| `<CONSUMER_WHATSAPP_ID>`  *Integer* | **Required** (unless `recipient` is provided)  The phone number of the WhatsApp user who you are requesting call permissions from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/whatsapp-business-account-phone-number-api) | `+13057765456` |
| `recipient`  *String* | **Optional**  The business-scoped user ID (BSUID) or parent BSUID of the WhatsApp user. Use this instead of `user_wa_id`.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `US.13491208655302741918` |

#### Response body

```
{
  "messaging_product": "whatsapp",
  "permission": {
    "status": "temporary",
    "expiration_time": 1745343479
  },
  "actions": [
    {
      "action_name": "send_call_permission_request",
      "can_perform_action": true,
      "limits": [
        {
          "time_period": "PT24H",
          "max_allowed": 1,
          "current_usage": 0,
        },
        {
          "time_period": "P7D",
          "max_allowed": 2,
          "current_usage": 1,
        }
      ]
    },
    {
      "action_name": "start_call",
      "can_perform_action": false,
      "limits": [
        {
          "time_period": "PT24H",
          "max_allowed": 5,
          "current_usage": 5,
          "limit_expiration_time": 1745622600,
        }
      ]
    }
  ]
}
```

#### Response parameters

| Parameter | Description |
| --- | --- |
| `permission`  *JSON Object* | The permission object contains two values:  `status` *(String)* — The current status of the permission.  Can be either:   * `"no_permission"` * `"temporary"` * `"permanent"`   `expiration` *(Integer)* — The Unix time at which the permission will expire in UTC timezone.  If the permission is permanent, this field won’t be present. |
| `actions`  *JSON Object* | A list of actions a business phone number may undertake to facilitate a call permission or a business initiated call.  Current actions are:  `send_call_permission_request`: Represents the action of sending new call permissions request messages to the WhatsApp user.  `start_call`: Represents the action of establishing a new call with the WhatsApp user. Establishing a new call means that the call was successfully picked up by the WhatsApp user.  For example, `send_call_permission_request` having a `can_perform_action` of `true` means that your business can send a call permission request to the WhatsApp user in question.  `can_perform_action` (*Boolean*) —  A flag indicating whether the action can be performed now, taking into account all limits. |
| `limits`  *JSON Object* | A list of time-bound restrictions for the given `action_name`.  Each `action_name` has 1 or more restrictions depending on the timeframe.  For example, a business can only send 2 permission requests in a 24-hour period.  `limits` contains the following fields:  `time_period` (*String*) — The span of time in which the limit applies, represented in the ISO 8601 format.  `max_allowed` (*Integer*) — The maximum number of actions allowed within the specified time period.  `current_usage` (*Integer*) — The current number of actions the business has taken within the specified time period.  `limit_expiration_time` (*Integer*) — The Unix time at which the limit will expire in UTC timezone.  If `current_usage` is under the max allowed for the limit, this field won’t be present. |

#### Error response

Possible errors that can occur:

* Invalid `phone-number-id`
* If the WhatsApp user phone number is uncallable, the API returns `no_permission`.
* Permissions/Authorization errors.
* Rate limit reached. A maximum of 100 requests in a 1 second window can be made to the API.
* Calling is not enabled for the business phone number.

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

**Usernames and business-scoped user IDs:** When querying call permission state, you can use the `recipient` parameter to identify the user by BSUID instead of a phone number; the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## User call permission reply webhook

WhatsApp delivers this webhook whenever a user selects or updates their calling permissions. The webhook could be in response to a call permission request sent by the business, or the user could be proactively making a decision.

The webhook fields values change depending on the circumstances of the user permission decision:

* the user accepts or rejects the request
* the user approves permission by responding to a request or by calling the business
* the user permission is an automatic callback permission in response to a user-initiated call
* the user permission is automatically revoked in response to 4 consecutive unanswered business-initiated calls

Lastly, the user can grant permanent calling permission to the business, which is represented in the `is_permanent` parameter.

No webhook is sent when a temporary permission expires. The `expiration_timestamp` field included in the accepted permission webhook indicates the time this permission will expire. Alternatively the current permission state can be queried from the [get current call permission state](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#get-current-call-permission-state) endpoint.

#### Webhook sample

```
{
. . .

"messages": [{
    "from": "{customer_phone_number}",
    "from_user_id": "<BSUID>",
    "from_parent_user_id": "<PARENT_BSUID>",
    "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",
    "timestamp": "{timestamp}",
    "context": {
          "from": "{customer_phone_number}",
          "id": "wamid.gBGGFlaCmZ9plHrf2Mh-o"
    },
    "interactive": {
       "type":  "call_permission_reply",
        "call_permission_reply": {
            "response":"accept",
            "is_permanent":false,
            "expiration_timestamp": "{timestamp}",
            "response_source": "user_action"
       }
    }
 ],
. . .
}
```

#### Webhook values

| Placeholder | Description |
| --- | --- |
| `customer_phone_number`  *String* | The phone number of the WhatsApp user. May be omitted if the user has adopted a username and the phone number cannot be included. |
| `from_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `from_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `context.id`  *String* | Can be either of two values   * Message ID of the permission request message sent by the business to the WhatsApp user. Shows when a permission decision is made by the user in response to a call permission request. * Call ID of the missed call placed by the business to the WhatsApp user. Shows when callback permission is enabled in settings and the user calls the business. |
| `response`  *String* | The WhatsApp user’s response to the call permission request message  Can be `accept` or `reject` |
| `is_permanent`  *Boolean* | Indicates if the permission is permanent or not. For temporary permission this will always be false. |
| `expiration_timestamp`  *String* | Time in seconds when this call permission expires if the WhatsApp user approved it |
| `response_source`  *String* | The source of this permission  Possible values for accepted call permissions are:   * `user_action`: User approved or rejected the permission * `automatic`: An automatic permission approval due to the WhatsApp user initiating the call |

**Usernames and business-scoped user IDs:** Call permission reply webhooks may include `from_user_id` and `from_parent_user_id` to identify the user by BSUID; the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

#### Webhook sample scenarios

| Scenario | Webhook sample |
| --- | --- |
| The WhatsApp user approves a temporary call permission from a call permission request message | ``` { . . .  "messages": [{     "from": "{customer_phone_number}",     "from_user_id": "<BSUID>",     "from_parent_user_id": "<PARENT_BSUID>",     "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",     "timestamp": "1767168000",     "context": {           "from": "{customer_phone_number}",           "id": "wamid.gBGGFlaCmZ9plHrf2Mh-o"     },     "interactive": {        "type":  "call_permission_reply",         "call_permission_reply": {             "response":"accept",             "is_permanent":false,             "expiration_timestamp": "1768550400",             "response_source": "user_action"        }     }  ], . . . } ``` |
| The WhatsApp user approves a permanent call permission from a call permission request message | ``` { . . .  "messages": [{     "from": "{customer_phone_number}",     "from_user_id": "<BSUID>",     "from_parent_user_id": "<PARENT_BSUID>",     "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",     "timestamp": "1767168000",     "context": {           "from": "{customer_phone_number}",           "id": "wamid.gBGGFlaCmZ9plHrf2Mh-o"     },     "interactive": {        "type":  "call_permission_reply",         "call_permission_reply": {             "response":"accept",             "is_permanent":true,             "response_source": "user_action"        }     }  ], . . . } ``` |
| The WhatsApp user approves a permanent call permission from the business profile | ``` { . . .  "messages": [{     "from": "{customer_phone_number}",     "from_user_id": "<BSUID>",     "from_parent_user_id": "<PARENT_BSUID>",     "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",     "timestamp": "1767168000",     "interactive": {        "type":  "call_permission_reply",         "call_permission_reply": {             "response":"accept",             "is_permanent":true,             "response_source": "user_action"        }     }  ], . . . } ``` |
| The WhatsApp user rejects a call permission after receiving a call permission request message | ``` { . . .  "messages": [{     "from": "{customer_phone_number}",     "from_user_id": "<BSUID>",     "from_parent_user_id": "<PARENT_BSUID>",     "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",     "timestamp": "1767168000",     "context": {           "from": "{customer_phone_number}",           "id": "wamid.gBGGFlaCmZ9plHrf2Mh-o"     },     "interactive": {        "type":  "call_permission_reply",         "call_permission_reply": {             "response":"reject",             "response_source": "user_action"        }     }  ], . . . } ``` |
| An automatic temporary callback permission is granted to the business when the WhatsApp user calls the business | ``` { . . .  "messages": [{     "from": "{customer_phone_number}",     "from_user_id": "<BSUID>",     "from_parent_user_id": "<PARENT_BSUID>",     "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",     "timestamp": "1767168000",     "context": {           "from": "{customer_phone_number}",           "id": "wacid.gBGGF4lasdnlasdHrf2Mh-o"     },     "interactive": {        "type":  "call_permission_reply",         "call_permission_reply": {             "response":"accept",             "is_permanent":false,             "expiration_timestamp": "1768550400",             "response_source": "automatic"        }     }  ], . . . } ``` |
| A call permission is automatically revoked when a business makes 4 consecutive unanswered calls to the WhatsApp user | ``` { . . .  "messages": [{     "from": "{customer_phone_number}",     "from_user_id": "<BSUID>",     "from_parent_user_id": "<PARENT_BSUID>",     "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",     "timestamp": "1767168000",     "interactive": {        "type":  "call_permission_reply",         "call_permission_reply": {             "response":"reject",             "response_source": "automatic"        }     }  ], . . . } ``` |
