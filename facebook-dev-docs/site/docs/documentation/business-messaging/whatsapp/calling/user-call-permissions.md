---
title: "Business-Initiated Calls"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions
---

# Business-Initiated Calls

Updated: Jun 26, 2026

## Overview

The Calling API lets your business call WhatsApp users.

The WhatsApp user controls when your business can call them by [granting call permissions to your business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions).

### Call sequence diagram

![Business-initiated call sequence diagram showing flow between business, Cloud API, and WhatsApp user](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/561795972_1339317917926859_882777793042649890_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fIlXBHlXQvsQ7kNvwHgNuj9&_nc_oc=Adp7nzwaThzKpOT67VrfrS8DJp2wpSw5xo4WmLnMo0RgUrD_dlISd0wktaKPesZkSQ6loQ3DxWxBY591YKWgL9Z0&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=tKlwkew-gp_UcuJJYHDuCg&_nc_ss=7b2a8&oh=00_AQB-CaOLFW6MAwKZkyyUeMtT2ALpfvxvoVpyt8fRGYayXA&oe=6A604B8D)

*Note: The `ACCEPTED` call status webhook arrives after the call is established. The Cloud API sends it for call event auditing.*

## Prerequisites

Before you get started with business-initiated calling, ensure that:

* You [subscribe](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) to the "calls" webhook field
* You [enable the Calling APIs on your business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings)

Lastly, **before you can call a WhatsApp user, you must obtain their permission to do so.**

[Learn how to obtain WhatsApp user calling permissions](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions)

## Business-initiated calling flow

### Part 1: Obtain permission to call the WhatsApp user

You can obtain call permissions from the WhatsApp user in one of the following ways:

#### Send a call permission request message

You can request call permissions by sending the WhatsApp user a permission request. Send it as a free form message during an open customer service window, or use a template message.

* [Learn how to send a **free form** call permission request](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions#how-to-send-a-free-form-call-permission-request-message)
* [Learn how to send a **template** call permission request](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions#how-to-create-and-send-call-permission-request-template-messages)

#### Enable `callback_permission_status` in call settings

When `callback_permission_status` is enabled, the user automatically provides call permission to your business when they place a call to you.

[Learn how to enable `callback_permission_status`](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#configure-update-business-phone-number-calling-settings)

#### WhatsApp user grants permanent permissions

The user can also grant permanent permissions to the business at any time through their business profile.

### Part 2: Your business initiates a new call to the WhatsApp user

Now that you have user permission, you can initiate a new call to the WhatsApp user in question.

Use the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with the following request body to initiate a new call:

```
POST <PHONE_NUMBER_ID>/calls
{
  "messaging_product": "whatsapp",
  "to":"12185552828", // The WhatsApp user's phone number (callee)
  "recipient": "US.13491208655302741918",
  "action":"connect",
  "session" : {
      "sdp_type" : "offer",
      "sdp" : "<<RFC 8866 SDP>>"
  }
}
```

If there are no errors, you receive a successful response:

```
{
  "messaging_product": "whatsapp",
  "calls" : [
    { "id" : "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA" } // The WhatsApp call ID
   ]
}
```

*Note: Response with error code `138006` indicates a lack of a call request permission for this business number from the WhatsApp user.*

### Part 3: You establish the call connection using webhook signaling

After you successfully initiate a new call, you receive a Call Connect webhook response containing an `SDP Answer` from Cloud API. Your business then applies the `SDP Answer` from this webhook to your WebRTC stack to initiate the media connection.

```
{
    "entry": [
        {
            "changes": [
                {
                    "field": "calls",
                    "value": {
                        "calls": [
                            {
                                "biz_opaque_callback_data": "TRx334DUDFTI4Mj", // Arbitrary string passed by business for tracking purposes
                                "session": {
                                    "sdp_type": "answer",
                                    "sdp": "<RFC 8866 SDP>"
                                },
                                "from": "13175551399", // The business phone number placing the call (caller)
                                "connection": {
                                    "webrtc": {
                                        "sdp": "<RFC 8866 SDP>"
                                    }
                                },
                                "id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID
                                "to": "12185552828", // The WhatsApp user's phone number (callee)
                                "to_user_id": "<BSUID>",
                                "to_parent_user_id": "<PARENT_BSUID>",
                                "event": "connect",
                                "timestamp": "1749196895",
                                "direction": "BUSINESS_INITIATED"
                            }
                        ],
                        "contacts": [
                            {
                                "profile": {
                                    "name": "<CALLEE_NAME>",
                                    "username": "<USERNAME>"
                                },
                                "wa_id": "<USER_PHONE_NUMBER>",
                                "user_id": "<BSUID>",
                                "parent_user_id": "<PARENT_BSUID>"
                            }
                        ],
                        "metadata": { // ID and display number for the business phone number placing the call (caller)
                            "phone_number_id": "436666719526789",
                            "display_phone_number": "13175551399"
                        },
                        "messaging_product": "whatsapp"
                    }
                }
            ],
            "id": "366634483210360" // WhatsApp Business Account ID associated with the business phone number
        }
    ],
    "object": "whatsapp_business_account"
}
```

You then receive an appropriate status webhook, indicating that the call is `RINGING`, `ACCEPTED`, or `REJECTED`:

```
{
  "entry": [
    {
      "changes": [
        {
          "field": "calls",
          "value": {
            "statuses": [
              {
                "id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID
                "type": "call",
                "status": "[RINGING|ACCEPTED|REJECTED]", // The current call status
                "timestamp": "1749197000",
                "recipient_id": "12185552828", // The WhatsApp user's phone number (callee)
                "recipient_user_id": "<BSUID>",
                "recipient_parent_user_id": "<PARENT_BSUID>"
              }
            ],
            "metadata": { // ID and display number for the business phone number placing the call (caller)
              "phone_number_id": "436666719526789",
              "display_phone_number": "13175551399"
            },
            "messaging_product": "whatsapp"
          }
        }
      ],
      "id": "366634483210360" // WhatsApp Business Account ID associated with the business phone number
    }
  ],
  "object": "whatsapp_business_account"
}
```

### Part 4: Your business or the WhatsApp user terminates the call

Either you or the WhatsApp user can terminate the call at any time.

Use the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with the following request body to terminate the call:

```
POST <PHONE_NUMBER_ID>/calls  
{  
  "messaging_product": "whatsapp",  
  "call_id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA", // The WhatsApp call ID  
  "action" : "terminate"  
}
```

If there are no errors, you receive a success response:

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
              "display_phone_number": "13175551399",

            },
            "calls": [
              {
                "id": "wacid.HBgLMTIxODU1NTI4MjgVAgARGCAyODRQIAFRoA",
                "to": "12185552828", // The WhatsApp user's phone number (callee)
                "to_user_id": "<BSUID>",
                "to_parent_user_id": "<PARENT_BSUID>",
                "from": "13175551399", // The business phone number placing the call (caller)
                "event": "terminate",
                "direction": "BUSINESS_INITIATED",
                "timestamp": "1749197480",
                "status": ["Failed", "Completed"],
                "start_time": "1671644824", // Call start UNIX timestamp
                "end_time": "1671644944", // Call end UNIX timestamp
                "duration": 480 // Call duration in seconds
              }
            ],
            "contacts": [
              {
                "profile": {
                  "name": "<CALLEE_NAME>",
                  "username": "<USERNAME>"
                },
                "wa_id": "<USER_PHONE_NUMBER>",
                "user_id": "<BSUID>",
                "parent_user_id": "<PARENT_BSUID>"
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

## Endpoints for business-initiated calling

### Initiate call

Use this endpoint to initiate a call to a WhatsApp user by providing a phone number and a WebRTC call offer. There is a rate limit of 10000 per 24 hours for initiating new calls per business phone number.

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  ID of the business phone number from which you are initiating the new call. | `106540352242922` |

#### Request body

```
{
  "messaging_product": "whatsapp",
  "to": "14085551234",
  "recipient": "US.13491208655302741918",
  "action": "connect",
  "session": {
    "sdp_type": "offer",
    "sdp": "<<RFC 8866 SDP>>"
  },
  "biz_opaque_callback_data": "0fS5cePMok"
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `to`  *Integer* | **Required** (unless `recipient` is provided)  The number being called (callee). The user can be identified by phone number (`to`), BSUID (`recipient`), or both. If you include both, `to` takes precedence.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers)  [Learn how business-scoped user IDs apply to business-initiated call requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#businesses-initiated-call-requests) | `"17863476655"` |
| `recipient`  *String* | **Optional**  The WhatsApp user's business-scoped user ID (BSUID) or parent BSUID. Use this instead of, or in addition to, `to`. If you include both, `to` takes precedence.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `"US.13491208655302741918"` |
| `action`  *String* | **Required**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"connect"` |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  "offer", to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5oi7-_dtdsPdT8yveuXaPzHDAFOiY_rkEuSJd1eHMqF3t6QQ_rCf88wxSBsA_aem_k6Wph4fS8kYDJqAR2k7_5Q).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4G883r_f8OxuBN4Ug2aWo3tRDVPu6JtxWg9T734Z5waARzxf7VGfEehXYlFw_aem_sWjiUmtGyV3tjOHfK_Nwxg)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures) | ``` "session" : { "sdp_type" : "offer", "sdp" : "<<RFC 8866 SDP>>" } ``` |
| `biz_opaque_callback_data`  *String* | **Optional**  An arbitrary string you can pass in that is useful for tracking and logging purposes.  Any app subscribed to the "calls" webhook field on your WhatsApp Business account can receive this string, as it is included in the `calls` object within the subsequent [Call Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook) payload.  Cloud API does not process this field.  Maximum 512 characters | `"0fS5cePMok"` |

**Usernames and business-scoped user IDs:** When initiating a call, you can identify the recipient by phone number (`to`), BSUID (`recipient`), or both; the user's phone number may be omitted if a `recipient` is provided. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

#### Success response

```
{
  "messaging_product": "whatsapp",
  "calls" : [{
     "id" : "wacid.ABGGFjFVU2AfAgo6V",
   }]
}
```

#### Error response

Possible errors that can occur:

* Invalid `<PHONE_NUMBER_ID>`
* Permissions/Authorization errors
* Request format validation errors, for example connection info, sdp, ice
* SDP validation errors
* Calling restriction errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Terminate call

Use this endpoint to terminate an active call.

This must be done even if there is an `RTCP BYE` packet in the media path. Ending the call this way also ensures pricing is more accurate.

When the WhatsApp user terminates the call, you do not have to call this endpoint. Once the call is successfully terminated, you receive a [Call Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook).

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number which you are terminating a call from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `18274459827` |

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
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Required**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"terminate"` |

#### Success response

```
{
  "messaging_product": "whatsapp",
  "success" : true
}
```

#### Error response

Possible errors that can occur:

* Invalid `call_id`
* Invalid `<PHONE_NUMBER_ID>`
* The WhatsApp user has already terminated the call
* Reject call is already in progress
* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Webhooks for business-initiated calling

With all Calling API webhooks, there is a `"calls"` object inside the `"value"` object of the webhook response. The `"calls"` object contains metadata about the call that is used to action on each call placed or received by your business.

To receive Calling API webhooks, subscribe to the "calls" webhook field.

[Learn more about Cloud API webhooks here](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)

### Call connect webhook

You receive a webhook notification in near real-time when a call initiated by your business is ready to connect to the WhatsApp user (an `SDP Answer`).

Critically, the webhook contains information required to establish a call connection via WebRTC.

Once you receive the Call Connect webhook, you can apply the `SDP Answer` received in the webhook to your WebRTC stack to initiate the media connection.

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
                  "name": "<CALLEE_NAME>",
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
                "to_user_id": "<BSUID>",
                "to_parent_user_id": "<PARENT_BSUID>",
                "from": "16315553602",
                "event": "connect",
                "timestamp": "1671644824",
                "direction": "BUSINESS_INITIATED",
                "session": {
                  "sdp_type": "answer",
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
| `to`  *String* | The number being called (callee). May be omitted if the user has adopted a username and the phone number cannot be included. |
| `to_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `to_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `from`  *String* | The number of the caller |
| `event`  *String* | The calling event that this webhook is notifying the subscriber of |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `direction`  *String* | The direction of the call being made.  Can contain either:  `BUSINESS_INITIATED`, for calls initiated by your business.  `USER_INITIATED`, for calls initiated by a WhatsApp user. |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  "offer", to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4G883r_f8OxuBN4Ug2aWo3tRDVPu6JtxWg9T734Z5waARzxf7VGfEehXYlFw_aem_sWjiUmtGyV3tjOHfK_Nwxg).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR516SvNTWneWJ1BRyPN_AUwkutE4mEG3HfgWLNwp2vKQNk5dxI0lA9ItJirSg_aem_0fRiwIWcHro6u8toSKri-Q)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures) |
| `contacts`  *JSON object* | `profile.name` — The display name of the callee.  `profile.username` — **Optional.** The username of the user, if the user has adopted a username.  `wa_id` — The WhatsApp ID of the callee. May be omitted if the user has adopted a username and the phone number cannot be included.  `user_id` — The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user.  `parent_user_id` — **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |

**Usernames and business-scoped user IDs:** The Call connect webhook may include `to_user_id`, `to_parent_user_id`, and `contacts` fields containing the user's BSUID and username; the user's phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

### Call status webhook

WhatsApp sends this webhook during the following calling events:

* Ringing: When the WhatsApp user's client device begins ringing
* Accepted: When the WhatsApp user accepts the call
* Rejected: When the WhatsApp user rejects the call. You also receive the call terminate webhook when the user rejects the call.

The webhook structure here is similar to the Status webhooks used for the Cloud API messages.

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
                   "phone_number_id": "<PHONE_NUMBER_ID>",
              },
              "statuses": [{
                    "id": "wacid.ABGGFjFVU2AfAgo6V",
                    "timestamp": "1671644824",
                    "type": "call",
                    "status": "[RINGING|ACCEPTED|REJECTED]",
                    "recipient_id": "163155536021",
                    "recipient_user_id": "<BSUID>",
                    "recipient_parent_user_id": "<PARENT_BSUID>",
                    "biz_opaque_callback_data": "random_string",
               }]
          },
          "field": "calls"
        }
      ]
    }
  ]
}
```

[*Learn more about Cloud API status webhooks*](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status)

#### Webhook values for `"statuses"`

| Placeholder | Description |
| --- | --- |
| `id`  *String* | A unique ID for the call |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `recipient_id`  *String* | The phone number of the WhatsApp user receiving the call. May be omitted if the user has adopted a username and the phone number cannot be included. |
| `recipient_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `recipient_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `status`  *String* | The current call status.  Possible values:  `RINGING`: Business initiated call is ringing the user  `ACCEPTED`: Business initiated call is accepted by the user  `REJECTED`: Business initiated call is rejected by the user |
| `biz_opaque_callback_data`  *String* | Arbitrary string your business passes into the call for tracking and logging purposes.  Will only be returned if provided through [Initiate New Call API requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#initiate-a-new-call) |

**Usernames and business-scoped user IDs:** The Call status webhook may include `recipient_user_id` and `recipient_parent_user_id` fields containing the user's BSUID; the user's phone number (`recipient_id`) may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

### Call terminate webhook

WhatsApp sends a webhook notification whenever the call is terminated for any reason, such as when the WhatsApp user hangs up, or when the business uses the [Calls API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/calling-api) with an action of `terminate` or `reject`.

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
               "calls": [
                {
                    "id": "wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh",
                    "to": "16315553601",
                    "to_user_id": "<BSUID>",
                    "to_parent_user_id": "<PARENT_BSUID>",
                    "from": "16315553602",
                    "event": "terminate",
                    "direction": "BUSINESS_INITIATED",
                    "biz_opaque_callback_data": "random_string",
                    "timestamp": "1671644824",
                    "status" : [FAILED | COMPLETED],
                    "start_time" : "1671644824",
                    "end_time" : "1671644944",
                    "duration" : 120
                }
              ],
              "contacts": [
                {
                    "profile": {
                        "name": "<CALLEE_NAME>",
                        "username": "<USERNAME>"
                    },
                    "wa_id": "<USER_PHONE_NUMBER>",
                    "user_id": "<BSUID>",
                    "parent_user_id": "<PARENT_BSUID>"
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
| `to`  *String* | The number being called (callee). May be omitted if the user has adopted a username and the phone number cannot be included. |
| `to_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `to_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `from`  *String* | The number of the caller |
| `event`  *String* | The calling event that this webhook is notifying the subscriber of |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `direction`  *String* | The direction of the call being made.  Can contain either:  `BUSINESS_INITIATED`, for calls initiated by your business.  `USER_INITIATED`, for calls initiated by a WhatsApp user. |
| `start_time`  *String* | The UNIX timestamp of when the call started.  Only present when the call was picked up by the other party. |
| `end_time`  *String* | The UNIX timestamp of when the call ended.  Only present when the call was picked up by the other party. |
| `duration`  *Integer* | Duration of the call in seconds.  Only present when the call was picked up by the other party. |
| `biz_opaque_callback_data`  *String* | Arbitrary string your business passes into the call for tracking and logging purposes.  Will only be returned if provided through an [Initiate Call API request](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#initiate-call) or [Accept Call request](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#accept-call) |
| `errors.code`  *Integer* | The `errors` object is present only for failed calls when there is error information available. Code is one of the [calling error codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#calling-error-codes) |
| `contacts`  *JSON object* | `profile.name` — The display name of the callee.  `profile.username` — **Optional.** The username of the user, if the user has adopted a username.  `wa_id` — The WhatsApp ID of the callee. May be omitted if the user has adopted a username and the phone number cannot be included.  `user_id` — The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user.  `parent_user_id` — **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |

**Usernames and business-scoped user IDs:** The Call terminate webhook may include `to_user_id`, `to_parent_user_id`, and `contacts` fields containing the user's BSUID and username; the user's phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## SDP overview and sample structures

Session Description Protocol (SDP) is a text-based format used to describe the characteristics of multimedia sessions, such as voice and video calls, in real-time communication applications. SDP provides a standardized way to describe the session's media streams. The SDP description includes media type, codecs, protocols, and parameters for establishing and managing the session.

In the context of WebRTC, SDP is used to negotiate the media parameters between the sender and receiver, enabling them to agree on the specifics of the media exchange.

[View SDP sample structures for business-initiated calls](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#sdp-overview-and-sample-sdp-structures)
