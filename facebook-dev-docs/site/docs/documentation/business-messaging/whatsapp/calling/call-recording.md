---
title: "User-initiated calls"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording
---

# User-initiated calls

Updated: Jun 24, 2026

## Overview

The Calling API supports receiving calls made by WhatsApp users to your business.

Your business dictates when calls can be received by [configuring business calling hours and holiday unavailability](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#parameter-details).

**Consumer device eligibility**

Currently, the WhatsApp Business Calling API can accept calls from a consumer’s primary and companion iPhone or Android phones.

A **primary device** is the consumer’s main device, typically a mobile phone, which holds the authoritative state for the user’s account. It has full access to messaging history and core functionalities. There is exactly one primary device per user account at any given time.

**Companion devices** are additional devices registered to the user’s account that can operate alongside the primary device. Examples include web clients, desktop apps, tablets, and smart glasses. Companion devices have access to some or all messaging history and core features but are limited compared to the primary device. For Cloud API Calling, **only iPhone and Android phone companion devices are supported for user-initiated calls**.

**Callback permission functionality on companion devices**

For businesses that have the [callback setting](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#configure-update-business-phone-number-calling-settings) enabled, this functionality is not supported on companion devices yet.

## Prerequisites

Before you get started with user-initiated calling, ensure that:

* [Subscribe](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) to the **calls** webhook field
* [Enable Calling API features on your business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings)

### Call sequence diagram

![Call sequence diagram showing the flow of user-initiated calls](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/564599084_1339318441260140_7419920101012680111_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=UJZXN0ONv_0Q7kNvwHG6_bC&_nc_oc=AdrHUBMae5_Kit3L5eCDJ_i716-cIvtXZhxJyUVMVhpO1DM_-utVzHRX11yT4fg695V-LikPED_soZI7P4NBWAyv&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=YWsIhKfoRfvJvN4qC1HUwQ&_nc_ss=7b2a8&oh=00_AQDnI9f2PY3I9-LKwf1fKF2c4OBW4GSJyKfAgCMlIbL-og&oe=6A605E7A)

## User-initiated calling flow

### Part 1: A WhatsApp user calls your business from their client app

When a WhatsApp user calls your business, a Call Connect webhook will be triggered with an `SDP Offer`:

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "366634483210360", // WhatsApp Business Account ID associated with the business phone number
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": { // ID and display number for the business phone number placing the call (caller)
              "phone_number_id": "436666719526789",
              "display_phone_number": "13175551399"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",
                  "username": "<USERNAME>"
                },
                "wa_id": "<USER_PHONE_NUMBER>",
                "user_id": "<BSUID>",
                "parent_user_id": "<PARENT_BSUID>"
              }
            ],
            "calls": [
              {
                "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh", // The WhatsApp call ID
                "to": "16315553601", // The WhatsApp user's phone number (callee)
                "from": "13175551399",
                "from_user_id": "<BSUID>",
                "from_parent_user_id": "<PARENT_BSUID>",
                "event": "connect",
                "timestamp": "1671644824",
                "session": {
                  "sdp_type": "offer",
                  "sdp": "<<RFC 8866 SDP>>"
                }
              }
            ]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

**Usernames and business-scoped user IDs:** The Call Connect webhook may include `from_user_id`, `from_parent_user_id`, and contact-level `user_id`, `parent_user_id`, and `username` fields, and the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

### Part 2: Your business pre-accepts the call (recommended)

When you pre-accept an inbound call, you allow the calling media connection to be established before attempting to send call media through the connection.

Pre-accepting calls is recommended because it facilitates faster connection times and avoids [audio clipping issues](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution).

To pre-accept, use the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with the `call_id` from the previous webhook, an `action` of `pre-accept`, and an `SDP Answer`:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "pre_accept",
  "session": {
     "sdp_type": "answer",
     "sdp": "<<RFC 8866 SDP>>"
  }
}
```

If there are no errors, you’ll receive a success response:

```
{
  "success" : true
}
```

### Part 3: Your business accepts the call after the WebRTC connection is made

Once the WebRTC connection is made on your end, you can accept the call.

Once you accept the call, wait until you receive a `200 OK` back from the endpoint. Media will begin flowing immediately since the connection was established prior to call connect.

Use the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with the following request body to accept the call:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "accept",
  "session" : {
      "sdp_type" : "answer",
      "sdp" : "<<RFC 8866 SDP>>"
   }
}
```

### Part 4: Your business or the WhatsApp user terminates the call

Either the business or the WhatsApp user can terminate the call at any time.

Use the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with the following request body to terminate the call:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action" : "terminate"
}
```

If there are no errors, you’ll receive a success response:

```
{
  "success" : true
}
```

When either the business or the WhatsApp user terminates the call, you receive a Call Terminate webhook:

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "366634483210360", // WhatsApp Business Account ID associated with the business phone number
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": { // ID and display number for the business phone number placing the call (caller)
              "phone_number_id": "436666719526789",
              "display_phone_number": "13175551399"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",
                  "username": "<USERNAME>"
                },
                "wa_id": "<USER_PHONE_NUMBER>",
                "user_id": "<BSUID>",
                "parent_user_id": "<PARENT_BSUID>"
              }
            ],
            "calls": [
              {
                "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                "to": "16315553601", // The WhatsApp user's phone number (callee)
                "from": "13175551399", // The business phone number placing the call (caller)
                "from_user_id": "<BSUID>",
                "from_parent_user_id": "<PARENT_BSUID>",
                "event": "terminate",
                "direction": "USER_INITIATED",
                "timestamp": "1749197480",
                "status": ["Failed", "Completed"],
                "start_time": "1671644824", // Call start UNIX timestamp
                "end_time": "1671644944", // Call end UNIX timestamp
                "duration": 480 // Call duration in seconds
              }
            ]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

**Usernames and business-scoped user IDs:** The Call Terminate webhook may include `from_user_id`, `from_parent_user_id`, and contact-level `user_id`, `parent_user_id`, and `username` fields, and the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Endpoints for user-initiated calling

### Pre-accept call

When you pre-accept an inbound call, you allow the calling media connection to be established before attempting to send call media through the connection.

When you then call the accept call endpoint, media begins flowing immediately since the connection has already been established.

Pre-accepting calls is recommended because it facilitates faster connection times and avoids [audio clipping issues](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution).

There is about 30 to 60 seconds after the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) is sent for the business to accept the phone call. If the business does not respond, the call is terminated on the WhatsApp user side with a “Not Answered” notification and a [Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook) is delivered back to you.

**Note:** Since the WebRTC connection is established before calling the [Accept Call endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#accept-call), make sure to flow the call media only after you receive a 200 OK response back.

If call media flows too early, the caller will miss the first few words of the call. If call media flows too late, callers will hear silence.

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number which you are using Calling API features from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+12784358810` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "pre_accept",
  "session" : {
      "sdp_type" : "answer",
      "sdp" : "<<RFC 8866 SDP>>"
   }
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Optional**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"pre_accept"` |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  “offer”, to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR41FnCrohmZXHsu5M4EJCevDdqIFZE9l2HqUq7Halwy_NG48ZuFb9Gh1XRg8A_aem__2jI8CjMwFhsIG1RsL6ejA).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7WlgU2D_nYpi9cfvPiwHW3pAcJ4ioAXwByWSEi00HO80ot2z93xPB4iJDu-w_aem_adl3wSgC9B3Pu089VwUlWQ)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures) | ``` "session" : { "sdp_type" : "offer", "sdp" : "<<RFC 8866 SDP>>" } ``` |

#### Success response

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Error response

Possible errors that can occur:

* Invalid `call-id`
* Invalid `phone-number-id`
* Error related to your payment method
* Invalid Connection info, for example, SDP, or ICE
* Accept/Reject an already In Progress/Completed/Failed call
* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Accept call

Use this endpoint to connect to a call by providing a call agent’s SDP.

You have about 30 to 60 seconds after the [Call Connect Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) is sent to accept the phone call. If your business does not respond, the call is terminated on the WhatsApp user side with a “Not Answered” notification and a [Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook) is delivered back to you.

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number which you are using Calling API features from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+12784358810` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "accept",
  "session" : {
      "sdp_type" : "answer",
      "sdp" : "<<RFC 8866 SDP>>"
   },
   "biz_opaque_callback_data": "random_string"
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Optional**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"accept"` |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  “offer”, to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4Gyix9SeTw6091BlLDa8L1G5d_IkKU991tQBUQRCo8ZB1LwdhRduYcZpxAog_aem_FIN9kFgm_K-iiNno_LesBg).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7WlgU2D_nYpi9cfvPiwHW3pAcJ4ioAXwByWSEi00HO80ot2z93xPB4iJDu-w_aem_adl3wSgC9B3Pu089VwUlWQ)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures) | ``` "session" : { "sdp_type" : "offer", "sdp" : "<<RFC 8866 SDP>>" } ``` |
| `biz_opaque_callback_data`  *String* | **Optional**  An arbitrary string you can pass in that is useful for tracking and logging purposes.  Any app subscribed to the “calls” webhook field on your WhatsApp Business account can receive this string, as it is included in the `calls` object within the subsequent [Terminate webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook) payload.  Cloud API does not process this field, it just returns it as part of the [Terminate webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook).  Maximum 512 characters | `"8huas8d80nn"` |

#### Success response

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Error response

Possible errors that can occur:

* Invalid `call-id`
* Invalid `phone-number-id`
* Error related to your payment method
* Invalid Connection info, for example, SDP, or ICE
* Accept/Reject an already In Progress/Completed/Failed call
* Permissions/Authorization errors
* SDP answer provided in accept does not match the SDP answer given in the [Pre-Accept endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#pre-accept-call) for the same `call-id`

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Reject call

Use this endpoint to reject a call.

You have about 30 to 60 seconds after the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) is sent to accept the phone call. If the business does not respond, the call is terminated on the WhatsApp user side with a “Not Answered” notification and a [Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook) is delivered back to you.

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number which you are using Calling API features from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+12784358810` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "reject"
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Optional**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"reject"` |

#### Success response

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Error response

Possible errors that can occur:

* Invalid `call-id`
* Invalid `phone-number-id`
* Accept/Reject an already In Progress/Completed/Failed call
* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Terminate call

Use this endpoint to terminate an active call.

This must be done even if there is an `RTCP BYE` packet in the media path. Ending the call this way also ensures pricing is more accurate.

When the WhatsApp user terminates the call, you do not have to call this endpoint. Once the call is successfully terminated, a [Call Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-terminate-webhook) will be sent to you.

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number which you are using Calling API features from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+12784358810` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "call_id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
  "action": "terminate"
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Optional**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"terminate"` |

#### Success response

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Error response

Possible errors that can occur:

* Invalid `call-id`
* Invalid `phone-number-id`
* Accept/Reject an already In Progress/Completed/Failed call
* Reject call is already in progress
* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Webhooks for user-initiated calling

With all Calling API webhooks, there is a `"calls"` object inside the `"value"` object of the webhook response. The `"calls"` object contains metadata about the call that is used to action on each call received by your business.

To receive Calling API webhooks, subscribe to the calls webhook field.

[Learn more about Cloud API webhooks here](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview)

### Call Connect webhook

A webhook notification is sent in near real-time when a call initiated by your business is ready to be connected to the WhatsApp user (an `SDP Answer`).

Critically, the webhook contains information required to establish a call connection via WebRTC.

Once you receive the Call Connect webhook, you can apply the `SDP Answer` received in the webhook to your WebRTC stack in order to initiate the media connection.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "16315553601",
              "phone_number_id": "<PHONE_NUMBER_ID>"
            },
            "contacts": [
              {
                "profile": {
                  "name": "<USER_DISPLAY_NAME>",
                  "username": "<USERNAME>"
                },
                "wa_id": "16315553602",
                "user_id": "<BSUID>",
                "parent_user_id": "<PARENT_BSUID>"
              }
            ],
            "calls": [
              {
                "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                "to": "16315553601",
                "from": "16315553602",
                "from_user_id": "<BSUID>",
                "from_parent_user_id": "<PARENT_BSUID>",
                "event": "connect",
                "timestamp": "1671644824",
                "direction": "USER_INITIATED",
                "deeplink_payload": "deeplink_payload",
                "cta_payload": "cta_payload",
                "session": {
                  "sdp_type": "offer",
                  "sdp": "<<RFC 8866 SDP>>"
                }
              }
            ]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

#### Webhook values for `"calls"`

| Placeholder | Description |
| --- | --- |
| `id`  *String* | A unique ID for the call |
| `to`  *String* | The number being called (callee) |
| `from`  *String* | The number of the caller. May be omitted if the user has adopted a username and the phone number cannot be included. |
| `from_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `from_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `event`  *String* | The calling event that this webhook is notifying the subscriber of |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `direction`  *String* | The direction of the call being made.  Can contain either:  `BUSINESS_INITIATED`, for calls initiated by your business.  `USER_INITIATED`, for calls initiated by a WhatsApp user. |
| `deeplink_payload`  *String* | Arbitrary string specified in `biz_payload` query param on a call deeplink. Will only be returned if call was initiated from a deeplink with such param.  See [Call Button Messages and Deep Links](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-payload-data-in-call-deeplink) for more details. |
| `cta_payload`  *String* | Arbitrary string specified in `payload` field on a call button. Will only be returned if call was initiated from a call button with payload.  See [Call Button Messages and Deep Links](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) for more details. |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  “offer”, to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4G883r_f8OxuBN4Ug2aWo3tRDVPu6JtxWg9T734Z5waARzxf7VGfEehXYlFw_aem_sWjiUmtGyV3tjOHfK_Nwxg).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7oEMK2NJZAxTQqe7VdJvDGgH5ALRF9aD4dmIfjfQYoNcgIksueVxUArMra4g_aem_l6T89rF0Qb_d2HGAcYk5JA)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures) |
| `contacts`  *JSON object* | Profile information of the user.  Contains the following values:  `profile.name` — The WhatsApp profile name of the user.  `profile.username` — **Optional.** The username of the user, if the user has adopted a username.  `wa_id` — The WhatsApp ID of the user. May be omitted if the user has adopted a username and the phone number cannot be included.  `user_id` — The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user.  `parent_user_id` — **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |

**Usernames and business-scoped user IDs:** The Call Connect webhook may include `from_user_id`, `from_parent_user_id`, and contact-level `user_id`, `parent_user_id`, and `username` fields, and the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

### Call Terminate webhook

A webhook notification is sent whenever the call has been terminated for any reason, such as when the WhatsApp user hangs up, or when the business uses the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with an action of `terminate` or `reject`.

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "value": {
              "messaging_product": "whatsapp",
              "metadata": {
                   "display_phone_number": "16505553602",
                   "phone_number_id": "<PHONE_NUMBER_ID>",
              },
               "contacts": [
                {
                    "profile": {
                        "name": "<USER_DISPLAY_NAME>",
                        "username": "<USERNAME>"
                    },
                    "wa_id": "16315553602",
                    "user_id": "<BSUID>",
                    "parent_user_id": "<PARENT_BSUID>"
                }
              ],
               "calls": [
                {
                    "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                    "to": "16315553601",
                    "from": "16315553602",
                    "from_user_id": "<BSUID>",
                    "from_parent_user_id": "<PARENT_BSUID>",
                    "event": "terminate",
                    "direction": "USER_INITIATED",
                    "deeplink_payload": "deeplink_payload",
                    "cta_payload": "cta_payload",
                    "biz_opaque_callback_data": "random_string",
                    "timestamp": "1671644824",
                    "status" : [FAILED | COMPLETED],
                    "start_time" : "1671644824",
                    "end_time" : "1671644944",
                    "duration" : 120
                }
              ],
              "errors": [
                {
                    "code": INT_CODE,
                    "message": "ERROR_TITLE",
                    "href": "ERROR_HREF",
                    "error_data": {
                        "details": "ERROR_DETAILS"
                    }
                }
              ]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

#### Webhook values for `"calls"`

| Placeholder | Description |
| --- | --- |
| `id`  *String* | A unique ID for the call |
| `to`  *String* | The number being called (callee) |
| `from`  *String* | The number of the caller. May be omitted if the user has adopted a username and the phone number cannot be included. |
| `from_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `from_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `event`  *String* | The calling event that this webhook is notifying the subscriber of |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `direction`  *String* | The direction of the call being made.  Can contain either:  `BUSINESS_INITIATED`, for calls initiated by your business.  `USER_INITIATED`, for calls initiated by a WhatsApp user. |
| `deeplink_payload`  *String* | Arbitrary string specified in `biz_payload` query param on a call deeplink. Will only be returned if call was initiated from a deeplink with such param.  See [Call Button Messages and Deep Links](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-payload-data-in-call-deeplink) for more details. |
| `cta_payload`  *String* | Arbitrary string specified in `payload` field on a call button. Will only be returned if call was initiated from a call button with payload.  See [Call Button Messages and Deep Links](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) for more details. |
| `start_time`  *String* | The UNIX timestamp of when the call started.  Only present when the call was picked up by the other party. |
| `end_time`  *String* | The UNIX timestamp of when the call ended.  Only present when the call was picked up by the other party. |
| `duration`  *Integer* | Duration of the call in seconds.  Only present when the call was picked up by the other party. |
| `biz_opaque_callback_data`  *String* | Arbitrary string your business passes into the call for tracking and logging purposes.  Will only be returned if provided through an [Initiate Call request](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#initiate-call) or [Accept Call request](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-initiated-calls#accept-call) |
| `errors.code`  *Integer* | The `errors` object is present only for failed calls when there is error information available. Code is one of the [calling error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#calling-error-codes) |
| `contacts`  *JSON object* | Profile information of the user.  Contains the following values:  `profile.name` — The WhatsApp profile name of the user.  `profile.username` — **Optional.** The username of the user, if the user has adopted a username.  `wa_id` — The WhatsApp ID of the user. May be omitted if the user has adopted a username and the phone number cannot be included.  `user_id` — The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user.  `parent_user_id` — **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |

**Usernames and business-scoped user IDs:** The Call Terminate webhook may include `from_user_id`, `from_parent_user_id`, and contact-level `user_id`, `parent_user_id`, and `username` fields, and the user’s phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Dual tone multi frequency (DTMF) support

**The dialpad provided by the Calling API only supports DTMF use cases.**

It does not support consumer-to-consumer calls and does not change any other calling behaviors. For example, the dialpad cannot be used to dial a number and initiate a call or message on WhatsApp.

WhatsApp Business Calling API supports DTMF tones, with the intention to enable Solution Partner applications to support IVR-based systems.

WhatsApp users can press tone buttons on their client app and these DTMF tones are injected into the WebRTC RTP stream established as a part of the VoIP connection.

Our WebRTC stream conforms to [RFC 4733⁠](https://datatracker.ietf.org/doc/html/rfc4733?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4G883r_f8OxuBN4Ug2aWo3tRDVPu6JtxWg9T734Z5waARzxf7VGfEehXYlFw_aem_sWjiUmtGyV3tjOHfK_Nwxg) for the transfer of DTMF Digits via RTP Payload.

There is no webhook for conveying DTMF digits.

### DTMF clock rate

Only 8000 clock rate is supported in our SDPs. For user-initiated calls, our SDP offer includes only 8000 clock rate. For business-initiated calls, your SDP offer should have 8000 clock rate. Even if it is absent, the API still proceeds with 8000 clock rate against payload type 126.

The RTP packets representing DTMF events will use the same timestamp base and sequence number base as the regular audio packets. So you don’t have to worry about differing clock rates between audio packets and DTMF packets. The [duration field⁠](https://datatracker.ietf.org/doc/html/rfc4733?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5oi7-_dtdsPdT8yveuXaPzHDAFOiY_rkEuSJd1eHMqF3t6QQ_rCf88wxSBsA_aem_k6Wph4fS8kYDJqAR2k7_5Q#section-2.3.5) of the DTMF packet is calculated using 8000 clock units.

The API does not support 48000 clock rate for DTMF.

### Sending DTMF digits on consumer WhatsApp client

WhatsApp client applications are enhanced to have a dialpad for calls with CloudAPI business phone numbers. The WhatsApp user can press the buttons on the dialpad and send DTMF tones.

![WhatsApp client dialpad interface for DTMF tones](https://scontent.fdel1-3.fna.fbcdn.net/v/t39.2365-6/560054137_1339318374593480_6187515005628206867_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=RhbWGr4u6fAQ7kNvwGEIf9e&_nc_oc=AdpNn0FOWQ5l85ZcMEkHtSdyFlW1sSEGeTlXLCIGBBy050Izgj8ifDaFV7LROte4MVjhV5Hvx5ENFO0d4B9u1_Cf&_nc_zt=14&_nc_ht=scontent.fdel1-3.fna&_nc_gid=YWsIhKfoRfvJvN4qC1HUwQ&_nc_ss=7b2a8&oh=00_AQAZL_gQsPB38wawAGB0fJL4kZcwhG4VsQLB2kGjNzA4PQ&oe=6A60737F)

## SDP overview and sample SDP structures

Session Description Protocol (SDP) is a text-based format used to describe the characteristics of multimedia sessions, such as voice and video calls, in real-time communication applications. SDP provides a standardized way to convey information about the session’s media streams, including the type of media, codecs, protocols, and other parameters necessary for establishing and managing the session.

In the context of WebRTC, SDP is used to negotiate the media parameters between the sender and receiver, enabling them to agree on the specifics of the media exchange.

[View SDP sample structures for user-initiated calls](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)
