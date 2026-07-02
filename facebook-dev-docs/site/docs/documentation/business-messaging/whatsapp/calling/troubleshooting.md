---
title: "API and Webhook Reference"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting
---

# API and Webhook Reference

Updated: Jun 26, 2026

## Calling API endpoints

### Configure or update calling settings

Use the [Settings API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#post-version-phone-number-id-settings) and pass in Calling API parameters to configure settings on a business phone number you designate in the request syntax.

#### Request syntax

```
POST /<PHONE_NUMBER_ID>/settings
```

#### Endpoint parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number for which you are updating Calling API settings. | `+12784358810` |

#### Request body

```
{  
  "calling": {  
    "status": "ENABLED",  
    "call_icon_visibility": "DEFAULT",  
    "call_hours": {  
      "status": "ENABLED",  
      "timezone_id": "America/Manaus",  
      "weekly_operating_hours": [  
        {  
          "day_of_week": "MONDAY",  
          "open_time": "0400",  
          "close_time": "1020"  
        },  
        {  
          "day_of_week": "TUESDAY",  
          "open_time": "0108",  
          "close_time": "1020"  
        }  
      ],  
      "holiday_schedule": [  
        {  
          "date": "2026-01-01",  
          "start_time": "0000",  
          "end_time": "2359"  
        }  
      ]  
    },  
    "callback_permission_status": "ENABLED",  
    "sip": {  
      "status": "ENABLED | DISABLED (default)",  
      "servers": [  
        {  
          "hostname": SIP_SERVER_HOSTNAME,  
          "port": SIP_SERVER_PORT,  
          "request_uri_user_params": {  
            "KEY1": "VALUE1",  
            "KEY2": "VALUE2"  
          }  
        }  
      ]  
    }  
  }  
}
```

#### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `status`  *String* | **Optional**  Enable or disable the Calling API for the given business phone number. | `"ENABLED"`  `"DISABLED"` |
| `call_icon_visibility`  *String* | **Optional**  Configure whether the WhatsApp call button icon displays for users when chatting with the business.  [View call icon visibility behavior details in the Parameter details section](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#configure-call-settings-parameter-details) | [View call icon visibility behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#configure-call-settings-parameter-details) |
| `call_hours`  *JSON object* | **Optional**  Allows you to specify and trigger call settings for incoming calls based on your timezone, business operating hours, and holiday schedules.  Any previously configured values in `call_hours` will be replaced with the values passed in the request body of this API call.  [View call hours behavior details in the Parameter details section](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#configure-call-settings-parameter-details) | [View call hours behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#configure-call-settings-parameter-details) |
| `callback_permission_status`  *String* | **Optional**  Configure whether a WhatsApp user is prompted with a call permission request after calling your business.  Note: The call permission request is triggered from either a missed or connected call.  [View callback permission status behavior details in the Parameter details section](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#configure-call-settings-parameter-details) | `"ENABLED"`  `"DISABLED"` |
| `sip`  *JSON object* | **Optional**  Configure call signaling via signal initiation protocol (SIP).  **Note: When SIP is enabled, you cannot use calling related endpoints and will not receive calling related webhooks.**  [Learn how to configure and use SIP call signaling](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip) | ``` "sip": {    "status": "ENABLED | DISABLED (default)",    "servers": [// one server per app]      {        "hostname": SIP_SERVER_HOSTNAME        "port": SIP_SERVER_PORT,        "request_uri_user_params": {          "KEY1": "VALUE1", // for cases like TGRP          "KEY2": "VALUE2",        }      }    ]  } ``` |

#### Parameter details: Calling status

When the `status` parameter is set to `"ENABLED"`, calling features are enabled for the business phone number. WhatsApp client applications render the call button icon in both the business chat and business chat profile.

When the `status` parameter is set to `"DISABLED"`, calling features are **disabled**, and both the business chat and business chat profile **do not display the call button icon.**

Updates to `status` update the call button icon in existing business chats in near real-time when the business phone number is in the WhatsApp user's contacts.

Otherwise, updates are near real-time for a limited number of users in conversation with the business, and are eventually updated for the rest of the conversations.

#### Parameter details: Call button icon visibility

When Calling API features are enabled for a business number, you can still choose whether to show the call button icon or not by using the `call_icon_visibility` parameter. Note: Disabling call button icon visibility **does not** disable a WhatsApp user's ability to make unsolicited calls to your business.

The behavior for supported options is as follows:

`DEFAULT`

The call button icon appears in the chat menu bar and the business info page, allowing for unsolicited calls to the business by WhatsApp users.

![Screenshot showing the call button icon displayed in the WhatsApp chat menu bar and business info page](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/560917504_1339317971260187_5308835930412534329_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9VHatfmRE0wQ7kNvwF-h0yk&_nc_oc=AdpZibDEliRBKIQb54DuYgrp9Tr_pE2hpgg12Q-vuufSBCefhcDG3j99cIguStqMc_VOLxaYoz_PXNXWip4I4Dpj&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=XXPEZVzs7R-Qf2CH_TyWgg&_nc_ss=7b2a8&oh=00_AQDm7WYm-WNokTVsji_bQnumvVqJLxBjCefRf1URnLYP2A&oe=6A607001)

`DISABLE ALL`

The call button icon is hidden in the chat menu bar and the business info page, and all other entry points external to the chat are also disabled. WhatsApp users cannot make unsolicited calls to the business.

Your business can still [send interactive messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) or [template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#create-and-send-whatsapp-call-button-template-message) with a Calling API CTA button.

![Screenshot showing the WhatsApp chat interface with the call button icon hidden](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/560585020_1339317941260190_3863205212606668279_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fBavuaJv84sQ7kNvwH2l_Ye&_nc_oc=Adp1Exr7nO4EMLzQ1NoV-tGC0vcq_AU0YBYKpTAfjDUssX3FMUF1HZIOQ6G782Jd4aC_eYJHd9dQCDjwtvfOKJqJ&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=XXPEZVzs7R-Qf2CH_TyWgg&_nc_ss=7b2a8&oh=00_AQBmxULd8GosDqp9Jb7v9uMGlfF-yJrC9wBo6LRpD4l4vg&oe=6A604544)

##### Callback permissions

Calling a WhatsApp user requires explicit permission from the user. One way to obtain calling permissions is to request permission when a WhatsApp user calls your business.

You can configure the call permission UI to automatically show in the WhatsApp user's client app when they call your business number. The user may change their permission selection at any time.

![Screenshot showing the WhatsApp call permission request dialog](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/602352272_1389874706204513_7741631937402058550_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tqt4932z7XoQ7kNvwH2g5NK&_nc_oc=AdpwIGVyW9sX_27KQHatDckqlj0CfYR0W2MN9I7reGHQLqWBTeKBsOCX3VwfVLSRUI22n8gFtrNuOw8ucwPTIbI3&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=XXPEZVzs7R-Qf2CH_TyWgg&_nc_ss=7b2a8&oh=00_AQA-MBq5BXnaN11Kmr-zh6JSgxFY1o1L4jvjVk0Nvg35ZA&oe=6A60439A)

#### Call hours

With the `call_hours` setting, you can specify the timezone, business operating hours, and holiday schedules that will be enforced for all user-initiated calls.

Configuring this setting restricts calls only to available weekly hours you configure. User-initiated calls are unavailable outside of the weekly hours and holiday schedules you set.

The WhatsApp client app shows users an option to chat with the business, or request a callback, if `callback_permission_status` is `ENABLED`. The user also sees the next available calling slot on the option screen.

![Screenshot showing WhatsApp call hours unavailable screen with callback option](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/561822470_1339317924593525_4183355843280485487_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ghzBb_7lhTYQ7kNvwHzczHA&_nc_oc=Adq0m3TYngCsg6IBJ9Ete83-mNpi3FQCNU-3rEgS8SK-khFa7f2bAYBpoIuUndQ0EKWTh1EZxTF6mWvzV9BD2YTa&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=XXPEZVzs7R-Qf2CH_TyWgg&_nc_ss=7b2a8&oh=00_AQCslyOu4wQQuCMsLoNWU17Ghf8pqumVAB-xRE4sQI5jqg&oe=6A6051E7)

```
"call_hours": {  
  "status": "ENABLED",  
  "timezone_id": "America/Manaus",  
  "weekly_operating_hours": [  
    {  
      "day_of_week": "MONDAY",  
      "open_time": "04:00",  
      "close_time": "10:20"  
    },  
    {  
      "day_of_week": "TUESDAY",  
      "open_time": "01:08",  
      "close_time": "10:20"  
    }  
  ],  
  "holiday_schedule": [  
    {  
      "date": "2026-01-01",  
      "start_time": "00:00",  
      "end_time": "23:59"  
    }  
  ]  
}
```

| Parameter | Description | Sample Values |
| --- | --- | --- |
| `status`  *String* | **Required**  Enable or disable the call hours for your business.  If call hours are disabled, your business is considered open 24 hours a day, 7 days a week. | `"ENABLED"`  `"DISABLED"` |
| `timezone_id`  *String* | **Required**  The timezone your business operates in.  [Learn more about supported values for `timezone_id`](https://developers.facebook.com/docs/facebook-business-extension/fbe/reference#time-zones) | `"America/Menominee"`  `"Asia/Singapore"` |
| `weekly_operating_hours`  *List of JSON objects* | **Required**  The operating hours schedule for each day of the week.  Each entry is a JSON object with three key-value pairs:  `day_of_week` — (*Enum*) **[Required]**  The day of the week.  Can take one of seven values: `"MONDAY"`, `"TUESDAY"`, `"WEDNESDAY"`, `"THURSDAY"`, `"FRIDAY"`, `"SATURDAY"`, `"SUNDAY"`  |  |  | | --- | --- | | `open_time` | `close_time` — (*Integer*) **[Required]** |  Opening and closing times represented in 24 hour format, for example `"1130"` = 11:30AM   * A maximum of two entries is allowed per day of the week * `open_time` must be before `close_time` * Overlapping entries not allowed | ``` { "day_of_week": "MONDAY", "open_time": "0400", "close_time": "1020" }, { "day_of_week":"TUESDAY", "open_time": "0108", "close_time": "1020" } ... ``` |
| `holiday_schedule`  *String* | **Optional**  An optional override to the weekly schedule.  Up to 20 overrides can be specified.  Note: If `holiday_schedule` is not passed in the request, then the existing `holiday_schedule` will be deleted and replaced with an empty schedule.  `date` — (*String*) **[Required]**  Date for which you want to specify the override.  YYYY-MM-DD format.  |  |  | | --- | --- | | `open_time` | `close_time` — (*Integer*) **[Required]** |  Opening and closing times represented in 24 hour format, for example, `"1130"` = 11:30AM   * A maximum of two entries is allowed per day of the week * `open_time` must be before `close_time` * Overlapping entries not allowed | ``` { "date": "2026-01-01", "start_time": "0000", "end_time": "2359", } ... ``` |

#### Success response

```
{  
  "success": true  
}
```

#### Error response

Possible errors that can occur:

* Permissions/Authorization errors
* Invalid status
* Invalid schedule for `call_hours`
* Holiday given in `call_hours` is a past date
* Timezone is invalid in `call_hours`
* `weekly_operating_hours` in `call_hours` cannot be empty
* Date format in `holiday_schedule` for call\_hours is invalid
* More than 2 entries not allowed in `weekly_operating_hours` schedule in `call_hours`
* Overlapping schedule in `call_hours` is not allowed

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting).

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Get phone number calling settings

Use the [Settings API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#get-version-phone-number-id-settings) to retrieve Calling API settings on an individual business phone number you designate in the request syntax.

This endpoint can return information for other Cloud API feature settings.

#### Request syntax

```
POST /<PHONE_NUMBER_ID>/settings
```

#### Endpoint parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number for which you are getting Calling API settings.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+12784358810` |

#### App permission required

`whatsapp_business_management`: Advanced access is required to use the API for end business clients

#### Response body

```
{  
  "calling": {  
    "status": "ENABLED",  
    "call_icon_visibility": "DEFAULT",  
    "call_hours": {  
      "status": "ENABLED",  
      "timezone_id": "America/Manaus",  
      "weekly_operating_hours": [  
        {  
          "day_of_week": "MONDAY",  
          "open_time": "0400",  
          "close_time": "1020"  
        },  
        {  
          "day_of_week": "TUESDAY",  
          "open_time": "0108",  
          "close_time": "1020"  
        }  
      ],  
      "holiday_schedule": [  
        {  
          "date": "2026-01-01",  
          "start_time": "0000",  
          "end_time": "2359"  
        }  
      ]  
    },  
    "callback_permission_status": "ENABLED",  
    "sip": {  
      "status": "ENABLED | DISABLED (default)",  
      "servers": [  
        {  
          "hostname": SIP_SERVER_HOSTNAME,  
          "port": SIP_SERVER_PORT,  
          "request_uri_user_params": {  
            "KEY1": "VALUE1",  
            "KEY2": "VALUE2"  
          }  
        }  
      ]  
    }  
  }  
}
```

#### Include SIP user password

To include SIP user credentials in the response body, add the SIP credentials query parameter to the POST request:

```
POST /<PHONE_NUMBER_ID>/settings?include_sip_credentials=true
```

Where the response will look like this:

```
{  
  "calling": {  
    ... // other calling api settings  
    "sip": {  
      "status": "ENABLED",  
      "servers": [  
        {  
          "hostname": "sip.example.com",  
          "sip_user_password": "{SIP_USER_PASSWORD}"  
        }  
      ]  
    }  
  }  
}
```

#### Response details

The `GET /<PHONE_NUMBER_ID>/settings` endpoint returns Calling API settings, along with other configuration information for your WhatsApp Business phone number.

[Learn more about Calling API settings and their values](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#body-parameters)

#### Error response

Possible errors that can occur:

* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

### Pre-accept call

When you pre-accept an inbound call, you allow the calling media connection to be established before attempting to send call media through the connection.

When you then call the accept call endpoint, media begins flowing immediately since the connection has already been established.

Pre-accepting calls is recommended because it facilitates faster connection times and avoids [audio clipping issues](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#audio-clipping-issue-and-solution).

There is about 30 to 60 seconds after the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) is sent for the business to accept the phone call. If the business does not respond, the call is terminated on the WhatsApp user side with a "Not Answered" notification and a [Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-terminate-webhook) is delivered back to you.

**Note:** Since the WebRTC connection is established before calling the [Accept Call endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#accept-call), make sure to flow the call media only after you receive a 200 OK response back.

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
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Optional**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"pre_accept"` |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  "offer", to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4iDLLTgyr5fQ_inwTW1L6WI2WwFinuX53IxUrSRQ7TC4KiF8UeJT7Uf_XeEQ_aem_oFK5oh6aNDDa31OT7fq3QQ).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4iDLLTgyr5fQ_inwTW1L6WI2WwFinuX53IxUrSRQ7TC4KiF8UeJT7Uf_XeEQ_aem_oFK5oh6aNDDa31OT7fq3QQ)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#sdp-overview-and-sample-sdp-structures) | ``` "session" : { "sdp_type" : "offer", "sdp" : "<<RFC 8866 SDP>>" } ``` |

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
* Invalid Connection info, for example, `sdp`, `ice`
* Accept/Reject an already In Progress/Completed/Failed call
* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting).

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Accept call

Use this endpoint to connect to a call by providing a call agent's SDP.

You have about 30 to 60 seconds after the [Call Connect Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) is sent to accept the phone call. If your business does not respond, the call is terminated on the WhatsApp user side with a "Not Answered" notification and a [Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-terminate-webhook) is delivered back to you.

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
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
| `action`  *String* | **Optional**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"accept"` |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  "offer", to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4G883r_f8OxuBN4Ug2aWo3tRDVPu6JtxWg9T734Z5waARzxf7VGfEehXYlFw_aem_sWjiUmtGyV3tjOHfK_Nwxg).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7WlgU2D_nYpi9cfvPiwHW3pAcJ4ioAXwByWSEi00HO80ot2z93xPB4iJDu-w_aem_adl3wSgC9B3Pu089VwUlWQ)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#sdp-overview-and-sample-sdp-structures) | ``` "session" : { "sdp_type" : "offer", "sdp" : "<<RFC 8866 SDP>>" } ``` |
| `biz_opaque_callback_data`  *String* | **Optional**  An arbitrary string you can pass in that is useful for tracking and logging purposes.  Any app subscribed to the "calls" webhook field on your WhatsApp Business account can receive this string, as it is included in the `calls` object within the subsequent [Terminate webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-terminate-webhook) payload.  Cloud API does not process this field, it just returns it as part of the [Terminate webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-terminate-webhook).  Maximum 512 characters | `"8huas8d80nn"` |
| `recording`  *JSON object* | **Optional**  Opts the call into [call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/). When `status` is `ENABLED`, the call audio is recorded and delivered to you through the [Call recording webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-recording-webhook).  `status` — (*String*) **Required.**`ENABLED` to record the call, `DISABLED` to explicitly opt out.  `purpose` — (*String*) **Required when `status` is `ENABLED`.** The purpose of the recording, spoken to both participants as part of the announcement. Maximum 250 characters.  `announcement_language` — (*String*) **Required when `status` is `ENABLED`.** Locale code for the language of the spoken announcement, for example `en_US`.  Recording and transcription are independent. [Learn more about call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/). | ``` "recording" : { "status" : "ENABLED", "purpose" : "quality assurance", "announcement_language" : "en_US" } ``` |
| `transcription`  *JSON object* | **Optional**  Opts the call into [call transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/). When `status` is `ENABLED`, the call audio is transcribed and delivered to you through the [Call transcription webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-transcription-webhook).  `status` — (*String*) **Required.**`ENABLED` to transcribe the call, `DISABLED` to explicitly opt out.  `purpose` — (*String*) **Required when `status` is `ENABLED`.** The purpose of the transcription, spoken to both participants as part of the announcement. Maximum 250 characters.  `announcement_language` — (*String*) **Required when `status` is `ENABLED`.** Locale code for the language of the spoken announcement, for example `en_US`.  Recording and transcription are independent. [Learn more about call transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/). | ``` "transcription" : { "status" : "ENABLED", "purpose" : "quality assurance", "announcement_language" : "en_US" } ``` |

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
* Invalid Connection info, for example, `sdp`, `ice`, or other connection parameters
* Accept/Reject an already In Progress/Completed/Failed call
* Permissions/Authorization errors
* SDP answer provided in accept does not match the SDP answer given in the [Pre-Accept endpoint](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#pre-accept-call) for the same `call-id`

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting).

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Reject call

Use this endpoint to reject a call.

You have about 30 to 60 seconds after the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) is sent to accept the phone call. If the business does not respond, the call is terminated on the WhatsApp user side with a "Not Answered" notification and a [Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-terminate-webhook) is delivered back to you.

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
| `call_id`  *String* | **Required**  The ID of the phone call.  For inbound calls, you receive a call ID from the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) when a WhatsApp user initiates the call. | `"wacid.ABGGFjFVU2AfAgo6V-Hc5eCgK5Gh"` |
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

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting).

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Initiate call

Use this endpoint to initiate a call to a WhatsApp user by providing a phone number and a WebRTC call offer.

#### Request syntax

```
POST <PHONE_NUMBER_ID>/calls
```

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  The business phone number from which you are initiating a new call.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+12784358810` |

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
| `to`  *Integer* | **Required** (unless `recipient` is provided)  The phone number being called (callee). You can identify the user by their phone number here, by their business-scoped user ID (BSUID) in `recipient`, or both. | `"17863476655"` |
| `recipient`  *String* | **Optional**  The WhatsApp user's business-scoped user ID (BSUID) or parent BSUID. Use this instead of, or in addition to, `to`. If you include both `to` and `recipient`, `to` takes precedence.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `US.13491208655302741918` |
| `action`  *String* | **Required**  The action being taken on the given call ID.  Values can be `connect` | `pre_accept` | `accept` | `reject` | `terminate` | `"connect"` |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  "offer", to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7WlgU2D_nYpi9cfvPiwHW3pAcJ4ioAXwByWSEi00HO80ot2z93xPB4iJDu-w_aem_adl3wSgC9B3Pu089VwUlWQ).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4iDLLTgyr5fQ_inwTW1L6WI2WwFinuX53IxUrSRQ7TC4KiF8UeJT7Uf_XeEQ_aem_oFK5oh6aNDDa31OT7fq3QQ)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#sdp-overview-and-sample-sdp-structures) | ``` "session" : { "sdp_type" : "offer", "sdp" : "<<RFC 8866 SDP>>" } ``` |
| `biz_opaque_callback_data`  *String* | **Optional**  An arbitrary string you can pass in that is useful for tracking and logging purposes.  Any app subscribed to the "calls" webhook field on your WhatsApp Business account can receive this string, as it is included in the `calls` object within the subsequent [Call Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook) payload.  Cloud API does not process this field.  Maximum 512 characters | `"0fS5cePMok"` |
| `recording`  *JSON object* | **Optional**  Opts the call into [call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/). When `status` is `ENABLED`, the call audio is recorded and delivered to you through the [Call recording webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-recording-webhook).  `status` — (*String*) **Required.**`ENABLED` to record the call, `DISABLED` to explicitly opt out.  `purpose` — (*String*) **Required when `status` is `ENABLED`.** The purpose of the recording, spoken to both participants as part of the announcement. Maximum 250 characters.  `announcement_language` — (*String*) **Required when `status` is `ENABLED`.** Locale code for the language of the spoken announcement, for example `en_US`.  Recording and transcription are independent. [Learn more about call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/). | ``` "recording" : { "status" : "ENABLED", "purpose" : "quality assurance", "announcement_language" : "en_US" } ``` |
| `transcription`  *JSON object* | **Optional**  Opts the call into [call transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/). When `status` is `ENABLED`, the call audio is transcribed and delivered to you through the [Call transcription webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-transcription-webhook).  `status` — (*String*) **Required.**`ENABLED` to transcribe the call, `DISABLED` to explicitly opt out.  `purpose` — (*String*) **Required when `status` is `ENABLED`.** The purpose of the transcription, spoken to both participants as part of the announcement. Maximum 250 characters.  `announcement_language` — (*String*) **Required when `status` is `ENABLED`.** Locale code for the language of the spoken announcement, for example `en_US`.  Recording and transcription are independent. [Learn more about call transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/). | ``` "transcription" : { "status" : "ENABLED", "purpose" : "quality assurance", "announcement_language" : "en_US" } ``` |

**Usernames and business-scoped user IDs:** You can call a WhatsApp user using their phone number (`to`) and/or their business-scoped user ID (`recipient`). If you include both, `to` takes precedence. For details on usernames and BSUIDs, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

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

* Invalid `phone-number-id`
* Permissions/Authorization errors
* Request format validation errors, for example, connection info, `sdp`, `ice`
* SDP validation errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting).

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Terminate call

Use this endpoint to terminate an active call.

This must be done even if there is an `RTCP BYE` packet in the media path. Ending the call this way also ensures pricing is more accurate.

When the WhatsApp user terminates the call, you do not have to call this endpoint. Once the call is successfully terminated, a [Call Terminate Webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#call-terminate-webhook) will be sent to you.

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

* Invalid `call id`
* Invalid `phone-number-id`
* The WhatsApp user has already terminated the call
* Reject call is already in progress
* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting).

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes).

### Get current call permission state

Use this endpoint to get the call permission state for a business phone number with a single WhatsApp user. You can identify the user by their phone number (`user_wa_id`) or by their business-scoped user ID (`recipient`).

#### Request syntax

```
GET /<PHONE_NUMBER_ID>/call_permissions?user_wa_id=<CONSUMER_WHATSAPP_ID>
```

Or, identify the user by their business-scoped user ID (BSUID) or parent BSUID:

```
GET /<PHONE_NUMBER_ID>/call_permissions?recipient=<BSUID>
```

**Usernames and business-scoped user IDs:** You can identify the WhatsApp user by their phone number (`user_wa_id`) or their business-scoped user ID (`recipient`). For details on usernames and BSUIDs, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

#### Request parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *String* | **Required**  The business phone number you are fetching permissions against.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+18762639988` |
| `<CONSUMER_WHATSAPP_ID>`  *Integer* | **Required** (unless `recipient` is provided)  The phone number of the WhatsApp user who you are requesting call permissions from.  [Learn more about formatting phone numbers in Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers) | `+13057765456` |
| `recipient`  *String* | **Optional**  The business-scoped user ID (BSUID) or parent BSUID of the WhatsApp user you are requesting call permissions from. Use this instead of `user_wa_id`.  [Learn more about business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) | `US.13491208655302741918` |

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
| `permission`  *JSON Object* | The permission object contains two values:  `status` *(String)* — The current status of the permission.  Can be either:   * `"no_permission"` * `"temporary"`   `expiration` *(Integer)* — The Unix time at which the permission will expire in UTC timezone. |
| `actions`  *JSON Object* | A list of actions a business phone number may undertake to facilitate a call permission or a business initiated call.  Current actions are:  `send_call_permission_request`: Represents the action of sending new call permissions request messages to the WhatsApp user.  `start_call`: Represents the action of establishing a new call with the WhatsApp user. Establishing a new call means that the call was successfully picked up by the WhatsApp user.  For example, `send_call_permission_request` having a `can_perform_action` of `true` means that your business can send a call permission request to the WhatsApp user in question.  `can_perform_action` (*Boolean*) —  A flag indicating whether the action can be performed now, taking into account all limits. |
| `limits`  *JSON Object* | A list of time-bound restrictions for the given `action_name`.  Each `action_name` has one or more restrictions depending on the timeframe.  For example, your business can send only 2 permission requests in a 24-hour period.  `limits` contains the following fields:  `time_period` (*String*) — The span of time in which the limit applies, represented in the ISO 8601 format.  `max_allowed` (*Integer*) — The maximum number of actions allowed within the specified time period.  `current_usage` (*Integer*) — The current number of actions your business has taken within the specified time period.  `limit_expiration_time` (*Integer*) — The Unix time at which the limit will expire in UTC timezone.  If `current_usage` is under the max allowed for the limit, this field won't be present. |

#### Error response

Possible errors that can occur:

* Invalid `phone-number-id`
* If the WhatsApp user's phone number is uncallable, the API response will be `no_permission`.
* Permissions/Authorization errors.
* Rate limit reached. A maximum of 5 requests in a one-second window can be made to the API.
* Calling is not enabled for the business phone number.

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Calling API Webhooks

### Call Connect webhook

WhatsApp sends a webhook notification in near real-time when a call initiated by your business is ready to be connected to the WhatsApp user (an `SDP Answer`).

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
| `to_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids) of the WhatsApp user. |
| `to_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `from`  *String* | The number of the caller |
| `event`  *String* | The calling event that this webhook is notifying the subscriber of |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `direction`  *String* | The direction of the call being made.  Can contain either:  `BUSINESS_INITIATED`, for calls initiated by your business.  `USER_INITIATED`, for calls initiated by a WhatsApp user. |
| `session`  *JSON object* | **Optional**  Contains the session description protocol (SDP) type and description language.  Requires two values:  `sdp_type` — (*String*) **Required**  "offer", to indicate SDP offer  `sdp` — (*String*) **Required**  The SDP info of the device on the other end of the call. The SDP must be compliant with [RFC 8866⁠](https://datatracker.ietf.org/doc/html/rfc8866?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR41FnCrohmZXHsu5M4EJCevDdqIFZE9l2HqUq7Halwy_NG48ZuFb9Gh1XRg8A_aem__2jI8CjMwFhsIG1RsL6ejA).  [Learn more about Session Description Protocol (SDP)⁠](https://www.rfc-editor.org/rfc/rfc8866.html?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5hUUCuVfMrSpK1nFWwfgmhEX4J170f66mpbcRuH2F1v9AX32Sq6E3-nMvJdw_aem_zQZRjbb3Ajl9qFef31D3HA)  [View example SDP structures](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#sdp-overview-and-sample-sdp-structures) |
| `contacts`  *JSON object* | Profile information of the callee.  `name` — The WhatsApp profile name of the callee.  `username` — **Optional.** The username of the callee, if the user has adopted a username.  `wa_id` — The WhatsApp ID of the callee. May be omitted if the user has adopted a username and the phone number cannot be included.  `user_id` — The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids) of the callee.  `parent_user_id` — **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the callee. Only included if parent BSUIDs are enabled. |

### Call created webhook

WhatsApp sends a webhook notification when a SIP call is attempted. This applies to both business-initiated and user-initiated SIP calls. For non-SIP calls using the Graph API, see the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) instead.

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
                "event": "call_created",  
                "timestamp": "1671644824",  
                "direction": "BUSINESS_INITIATED"  
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

The field descriptions are the same as those in the [Call Connect webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-connect-webhook) section above, with the exception that SIP call webhooks do not include the `session` object since call signaling is handled via SIP rather than WebRTC.

### Call status webhook

This webhook is sent during the following calling events:

* Ringing: When the WhatsApp user's client device begins ringing
* Accepted: When the WhatsApp user accepts the call
* Rejected: When the call is rejected by the WhatsApp user

The Webhook structure here is similar to the Status webhooks used for the Cloud API messages.

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
                    "type": "call"
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
| `recipient_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids) of the WhatsApp user receiving the call. |
| `recipient_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user receiving the call. Only included if parent BSUIDs are enabled. |
| `status`  *String* | The current call status.  Possible values:  `RINGING`: Business initiated call is ringing the user  `ACCEPTED`: Business initiated call is accepted by the user  `REJECTED`: Business initiated call is rejected by the user |
| `biz_opaque_callback_data`  *String* | Arbitrary string your business passes into the call for tracking and logging purposes.  Will only be returned if provided through [Initiate New Call API requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#initiate-a-new-call) |

### Call terminate webhook

WhatsApp sends a webhook notification whenever the call has been terminated for any reason, such as when the WhatsApp user hangs up, or when the business calls the `POST /<PHONE_NUMBER_ID>/calls` endpoint with an action of `terminate` or `reject`.

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
                        "name": "<CALLEE_NAME>",
                        "username": "<USERNAME>"
                    },
                    "wa_id": "16315553601",
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
                    "event": "terminate"
                    "direction": "BUSINESS_INITIATED",
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
| `to`  *String* | The number being called (callee). May be omitted if the user has adopted a username and the phone number cannot be included. |
| `to_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids) of the WhatsApp user. |
| `to_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `from`  *String* | The number of the caller |
| `event`  *String* | The calling event that this webhook is notifying the subscriber of |
| `timestamp`  *String* | The UNIX timestamp of the webhook event |
| `direction`  *String* | The direction of the call being made.  Can contain either:  `BUSINESS_INITIATED`, for calls initiated by your business.  `USER_INITIATED`, for calls initiated by a WhatsApp user. |
| `start_time`  *String* | The UNIX timestamp of when the call started.  Only present when the call was picked up by the other party. |
| `end_time`  *String* | The UNIX timestamp of when the call ended.  Only present when the call was picked up by the other party. |
| `duration`  *Integer* | Duration of the call in seconds.  Only present when the call was picked up by the other party. |
| `biz_opaque_callback_data`  *String* | Arbitrary string your business passes into the call for tracking and logging purposes.  Will only be returned if provided through [New Call API requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#initiate-call) or [Accept Call requests](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/reference#accept-call) |

### Call recording webhook

WhatsApp sends a webhook notification after a call with recording enabled ends and post-processing finishes (typically under one minute). It delivers a `call_recording_available` event under the `calls` webhook field, with a media ID you can use to download the finished audio recording.

Recording and transcription are independent: a call with both enabled delivers a separate [Call transcription webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-transcription-webhook) in addition to this one. For the full guide, see [Call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "field": "calls",
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "16315553601",
              "phone_number_id": "<PHONE_NUMBER_ID>"
            },
            "calls": [
              {
                "id": "wacid.HBgLMTQxMjYxMzYyNTMVAgASGCBGO...",
                "from": "16315553602",
                "from_user_id": "<BSUID>",
                "from_parent_user_id": "<PARENT_BSUID>",
                "timestamp": "1728932177",
                "event": "call_recording_available",
                "call_recording": {
                  "type": "audio",
                  "audio": {
                    "id": "1002764438271669",
                    "sha256": "Y9vvGyeo3n76ptkXu3CwDBsnzbRFqpjHskQdMGSVqas=",
                    "mime_type": "audio/ogg; codecs=opus",
                    "url": "https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=133..."
                  }
                }
              }
            ]
          }
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
| `event`  *String* | The calling event that this webhook is notifying the subscriber of. For this webhook, `call_recording_available`. |
| `call_recording`  *JSON object* | Information about the finished recording.  `type` — (*String*) Media type of the recording. Currently always `audio`.  `audio.id` — (*String*) Media asset ID. Use the [Media API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) to retrieve the media URL for download.  `audio.sha256` — (*String*) Base64-encoded SHA-256 hash of the recording, for integrity verification.  `audio.mime_type` — (*String*) MIME type of the recording, for example `audio/ogg; codecs=opus`.  `audio.url` — (*String*) A short-lived download URL. Issue an authenticated GET request with your access token to download the asset. |

Recordings remain available for download for 7 days after this webhook is delivered. See [Call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/#retention) for details.

### Call transcription webhook

WhatsApp sends a webhook notification after a call with transcription enabled ends and post-processing finishes (typically under one minute). It delivers a `call_transcription_available` event under the `calls` webhook field, with a media ID you can use to download the finished transcript as a JSON document.

Recording and transcription are independent: a call with both enabled delivers a separate [Call recording webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting#call-recording-webhook) in addition to this one. For the full guide, including the transcript document format, see [Call transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/).

```
{
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "<WHATSAPP_BUSINESS_ACCOUNT_ID>",
      "changes": [
        {
          "field": "calls",
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "16315553601",
              "phone_number_id": "<PHONE_NUMBER_ID>"
            },
            "calls": [
              {
                "id": "wacid.HBgLMTQxMjYxMzYyNTMVAgASGCBGO...",
                "from": "16315553602",
                "from_user_id": "<BSUID>",
                "from_parent_user_id": "<PARENT_BSUID>",
                "timestamp": "1728932177",
                "event": "call_transcription_available",
                "call_transcript": {
                  "document": {
                    "id": "1002764438271669",
                    "sha256": "Y9vvGyeo3n76ptkXu3CwDBsnzbRFqpjHskQdMGSVqas=",
                    "mime_type": "application/json",
                    "url": "https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=133..."
                  }
                }
              }
            ]
          }
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
| `event`  *String* | The calling event that this webhook is notifying the subscriber of. For this webhook, `call_transcription_available`. |
| `call_transcript`  *JSON object* | Information about the finished transcript.  `document.id` — (*String*) Media asset ID. Use the [Media API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) to retrieve the media URL for download.  `document.sha256` — (*String*) Base64-encoded SHA-256 hash of the transcript document, for integrity verification.  `document.mime_type` — (*String*) MIME type of the transcript document. Currently always `application/json`.  `document.url` — (*String*) A short-lived download URL. Issue an authenticated GET request with your access token to download the asset. |

The downloaded transcript is a JSON document containing call `metadata` and a `transcript` object with the segmented, speaker-attributed text. For the full schema, see [Transcript document format](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/#transcript-document-format). Transcripts remain available for download for 7 days after this webhook is delivered.

### User calling permission request webhook

This webhook is sent back after requesting user calling permissions.

The webhook changes depending on if the user:

* accepts or rejects the request
* gives permission by responding to a request or by calling the business

**Usernames and business-scoped user IDs:** This webhook also includes the WhatsApp user's business-scoped user ID in `from_user_id` (and `from_parent_user_id` if parent BSUIDs are enabled), and the user's phone number may be omitted. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

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
          "id": "wacid.gBGGFlaCmZ9plHrf2Mh-o"
    },
    "interactive": {
       "type":  "call_permission_reply",
        "call_permission_reply": {
            "response":"accept",
            "is_permanent":false,
            "expiration_timestamp": "{timestamp}",
            "response_source": "[user_action|automatic]"
       }
    }
 ],
. . .
}
```

#### Webhook sample (with permanent permissions)

```
"messages": [{
    "from": "{customer_phone_number}",
    "from_user_id": "<BSUID>",
    "from_parent_user_id": "<PARENT_BSUID>",
    "id": "wamid.sH0kFlaCGg0xcvZbgmg90lHrg2dL",
    "timestamp": "{timestamp}",
    "context": {
          "from": "{customer_phone_number}",
          "id": "wacid.gBGGFlaCmZ9plHrf2Mh-o"
    },
    "interactive": {
       "type":  "call_permission_reply",
        "call_permission_reply": {
            "response":"accept",
            "is_permanent":false,
            "expiration_timestamp": "{timestamp}",
            "response_source": "[user_action|automatic]"
       }
    }
 ],
. . .
}
```

#### Webhook values

| Placeholder | Description |
| --- | --- |
| `customer_phone_number`  *String* | The phone number of the customer. May be omitted if the user has adopted a username and the phone number cannot be included. |
| `from_user_id`  *String* | The [BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id) of the WhatsApp user. |
| `from_parent_user_id`  *String* | **Optional.** The [parent BSUID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#parent-business-scoped-user-ids) of the WhatsApp user. Only included if parent BSUIDs are enabled. |
| `context.id`  *String* | Can be either of two values   * Message ID of the permission request message sent by the business to the customer number. Shows when a permission decision is made by the user in response to a call permission request. * Call ID of the missed call placed by the business to the customer number. Shows when callback permission is enabled in settings and the user calls the business. |
| `response`  *String* | The WhatsApp user's response to the call permission request message  Can be `accept` or `reject` |
| `expiration_timestamp`  *String* | Time in seconds when this call permission expires if the WhatsApp user approved it |
| `response_source`  *String* | The source of this permission  Possible values for accepted call permissions are:   * `user_action`: User approved or rejected the permission * `automatic`: An automatic permission approval due to the WhatsApp user initiating the call |

## SDP overview and sample SDP structures

Session Description Protocol (SDP) is a text-based format that describes multimedia session characteristics, such as voice and video calls, in real-time communication applications. SDP provides a standardized way to convey information about the session's media streams, including the type of media, codecs, protocols, and other parameters necessary for establishing and managing the session.

In the context of WebRTC, SDP is used to negotiate the media parameters between the sender and receiver, enabling them to agree on the specifics of the media exchange.

### Business-initiated sample SDP structures

#### Sample SDP offer structure

```
v=0
o=- 3626166318745852955 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
a=extmap-allow-mixed
a=msid-semantic: WMS d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e
m=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:4g1c
a=ice-pwd:qY/Bb+jQzg5ICn6X4fhJQetk
a=ice-options:trickle
a=fingerprint:sha-256 35:47:24:24:9F:93:C4:3E:DB:37:7F:BB:ED:F8:20:B5:AD:AC:DC:35:C2:7D:67:EE:6C:35:54:DF:A6:00:5C:4A
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=sendrecv
a=msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:63 red/48000/2
a=fmtp:63 111/111
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:126 telephone-event/8000
a=ssrc:2220762577 cname:w/zwpg3jXNiTFTdZ
a=ssrc:2220762577 msid:d8b26053-4474-4eb7-b3c3-c93d6c8c9b2e 5b4d3d96-ea9b-44a8-87e6-11a1ad21a3bc
```

#### Sample SDP answer structure

```
v=0
o=- 741807839102053725 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
a=extmap-allow-mixed
a=msid-semantic: WMS 798a9670-c0d6-47a8-925e-5f082ef4d8a0
a=ice-lite
m=audio 3482 UDP/TLS/RTP/SAVPF 111 9 0 8 110 126
c=IN IP4 31.13.65.130
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:2754936280 1 udp 2113937151 31.13.65.130 3482 typ host generation 0 network-cost 50 ufrag JHqAXFH4HcAY/8
a=candidate:1581496399 1 udp 2113939711 2a03:2880:f211:d1:face:b00c:0:699c 3482 typ host generation 0 network-cost 50 ufrag JHqAXFH4HcAY/8
a=ice-ufrag:JHqAXFH4HcAY/8
a=ice-pwd:dNNMmR8wUcGezvfBZOO0Qgcwl2m86GP/
a=ice-options:trickle
a=fingerprint:sha-256 9C:97:5C:4C:A9:BE:9E:2F:06:94:F5:BB:38:2C:A1:29:B5:69:B8:FA:94:10:56:1D:0B:5D:80:28:C1:FD:F0:F6
a=setup:active
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:126 telephone-event/8000
a=ssrc:3407645770 cname:bg8KQDoIk2UJa6sf
a=ssrc:3407645770 msid:798a9670-c0d6-47a8-925e-5f082ef4d8a0 audio#nuxVMf9EAJX
a=ssrc:3407645770 mslabel:798a9670-c0d6-47a8-925e-5f082ef4d8a0
a=ssrc:3407645770 label:audio#nuxVMf9EAJX
```

### User-initiated sample SDP structures

#### Sample SDP offer structure

```
v=0
o=- 7602563789789945080 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS 6932bc1c-db1a-4abe-b437-0c4168be8a13
a=ice-lite
m=audio 40012 UDP/TLS/RTP/SAVPF 111 126
c=IN IP4 31.13.65.60
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:1972637320 1 udp 2113937151 31.13.65.60 40012 typ host generation 0 network-cost 50 ufrag 6k2qP1R6kBfI/2
a=candidate:1652262791 1 udp 2113939711 2a03:2880:f211:cf:face:b00c:0:6443 40012 typ host generation 0 network-cost 50 ufrag 6k2qP1R6kBfI/2
a=ice-ufrag:6k2qP1R6kBfI/2
a=ice-pwd:UApvJw3NcwFRDvIMKdM0vWCdlXah25E9
a=fingerprint:sha-256 1B:B6:6B:40:A5:0B:8C:75:0D:8C:CB:90:2F:99:74:1E:26:45:AE:AF:45:C1:51:60:8F:73:C9:2D:10:6D:8A:88
a=setup:actpass
a=mid:audio
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=ssrc:4208138518 cname:gAXq2V9TKltrnapv
a=ssrc:4208138518 msid:6932bc1c-db1a-4abe-b437-0c4168be8a13 audio#R5wfXFcdmT6
a=ssrc:4208138518 mslabel:6932bc1c-db1a-4abe-b437-0c4168be8a13
a=ssrc:4208138518 label:audio#R5wfXFcdmT6
```

#### Sample SDP answer structure

```
v=0
o=- 2822644248144643933 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE audio
a=msid-semantic: WMS eb909cf0-87f0-4358-a4c9-7861680d9431
m=audio 9 UDP/TLS/RTP/SAVPF 111 126
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:X1ho
a=ice-pwd:7fJSbV2N5qWiA5QiDKwK3vuh
a=fingerprint:sha-256 2E:35:9F:21:9E:63:72:E5:42:74:76:2D:B3:70:F7:CB:24:14:9B:14:52:71:05:48:DA:4D:67:31:09:58:2A:ED
a=setup:active
a=mid:audio
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:126 telephone-event/8000
a=ssrc:330833028 cname:EDc1JutBl8rwHQc2
a=ssrc:330833028 msid:eb909cf0-87f0-4358-a4c9-7861680d9431 ea478c16-d9f7-493c-8cec-19bfac750a36
```

## Sample cURL requests

#### New call

```
curl -i -X POST 'https://graph.facebook.com/v14.0/1234567890/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
   "messaging_product": "whatsapp",
   "to": "14085550000",
   "recipient": "US.13491208655302741918",
   "session": {
       "sdp": "v=0\r\no=- 7669997803033704573 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 3c28addc-03b7-4170-b5cd-535bfe767e75\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:6O0H\r\na=ice-pwd:TYCbtfOrBMPpfxFRgSbYnuTI\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9F:45:2C:A8:C3:C0:CC:9B:59:4F:D1:02:56:52:FA:36:00:BE:C0:79:87:B3:D9:9C:3E:BF:60:98:25:B4:26:FC\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:2430753100 cname:MPddPt/R2ioP4vCm\r\na=ssrc:2430753100 msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\n",
       "sdp_type": "answer"
   }
}'
```

#### Terminate call

```
curl -i -X POST 'https://graph.facebook.com/v14.0/1234567890/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
   "messaging_product": "whatsapp",
   "action": "terminate",
   "call_id": "wacid.HBgLMTY1MDMxMzM5NzQVAgARGCBFRjNEODRBM0Q3NDZDM0Q0QzI4MzAwQjZBRkZGODM3NhwYCzEyMjQ1NTU0NDg5FQIAAA"
}'
```

#### Accept call

```
curl -i -X POST 'https://graph.facebook.com/v14.0/1234567890/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
 "messaging_product": "whatsapp",
 "to": "14085550000",
 "action": "accept",
 "call_id": "wacid.HBgLMTY1MDMxMzM5NzQVAgASGCA5ODkyMDk2RkM2NUM1QTYwRkM4NjFDQzk0NkQwNDBCRRwYCzEyMjQ1NTU0NDg5FQIAAA==",
 "session": {
     "sdp": "v=0\r\no=- 7669997803033704573 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 3c28addc-03b7-4170-b5cd-535bfe767e75\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:6O0H\r\na=ice-pwd:TYCbtfOrBMPpfxFRgSbYnuTI\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9F:45:2C:A8:C3:C0:CC:9B:59:4F:D1:02:56:52:FA:36:00:BE:C0:79:87:B3:D9:9C:3E:BF:60:98:25:B4:26:FC\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:2430753100 cname:MPddPt/R2ioP4vCm\r\na=ssrc:2430753100 msid:3c28addc-03b7-4170-b5cd-535bfe767e75 38c455bc-3727-4129-b336-8cd2c6a68486\r\n",
     "sdp_type": "answer"
 }
}'
```

#### New call (using legacy connection param)

```
curl -i -X POST 'https://graph.facebook.com/v14.0/123456789/calls' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAADUMAze4GIBO1B7B.....<REPLACE_WITH_YOUR_TOKEN>' \
-d '{
   "messaging_product": "whatsapp",
   "to": "14085550000",
   "connection": {
       "webrtc": {
           "sdp": "{\"sdp\":\"v=0\\r\\no=- 6314352886888624490 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\na=group:BUNDLE 0\\r\\na=extmap-allow-mixed\\r\\na=msid-semantic: WMS ccd3f422-8d7d-49c9-936c-a152979ee4fa\\r\\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 110 126\\r\\nc=IN IP4 0.0.0.0\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=ice-ufrag:/PSS\\r\\na=ice-pwd:buBIz+JlbmakiCT7JdJIq/j0\\r\\na=ice-options:trickle\\r\\na=fingerprint:sha-256 43:08:34:16:67:E3:D9:A2:F5:AA:6A:AE:03:97:C8:D5:B8:F2:4B:40:79:C8:1A:44:53:69:4B:9C:89:88:D7:22\\r\\na=setup:active\\r\\na=mid:0\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\\r\\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\\r\\na=sendrecv\\r\\na=msid:ccd3f422-8d7d-49c9-936c-a152979ee4fa 4e58b2a9-c864-4752-8f4f-23f9ced35971\\r\\na=rtcp-mux\\r\\na=rtcp-rsize\\r\\na=rtpmap:111 opus/48000/2\\r\\na=rtcp-fb:111 transport-cc\\r\\na=fmtp:111 minptime=10;useinbandfec=1\\r\\na=rtpmap:63 red/48000/2\\r\\na=fmtp:63 111/111\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:110 telephone-event/48000\\r\\na=rtpmap:126 telephone-event/8000\\r\\na=ssrc:3354317731 cname:zgqSj/r4rlErlW23\\r\\na=ssrc:3354317731 msid:ccd3f422-8d7d-49c9-936c-a152979ee4fa 4e58b2a9-c864-4752-8f4f-23f9ced35971\\r\\n\",\"type\":\"offer\"}"
       }
   }
}'
```

## Sample call connect webhook

#### Call connect webhook

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
                               "session": {
                                   "sdp_type": "answer",
                                   "sdp": "v=0\r\no=- 8076734947255960322 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 68a296ba-41cc-41db-8edb-3ddf4dbbb483\r\na=ice-lite\r\nm=audio 3482 UDP/TLS/RTP/SAVPF 111 9 0 8 110 126\r\nc=IN IP4 31.13.65.130\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:2754936280 1 udp 2113937151 31.13.65.130 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\r\na=candidate:1581496399 1 udp 2113939711 2a03:2880:f211:d1:face:b00c:0:699c 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\r\na=ice-ufrag:kv6Jn8vBmEds/8\r\na=ice-pwd:OhY8sT7v6PJe3bbs0Yx2TC/oPb5oatnK\r\na=ice-options:trickle\r\na=fingerprint:sha-256 46:14:2B:31:B1:9D:AF:15:81:E2:EF:45:B1:2B:96:3D:64:0E:63:F1:CC:9A:BD:88:D6:32:8F:E9:2A:13:3A:38\r\na=setup:active\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=sendrecv\r\na=rtcp-mux\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:433528572 cname:VBDcSNi/cg1Wg6D3\r\na=ssrc:433528572 msid:68a296ba-41cc-41db-8edb-3ddf4dbbb483 audio#wx3mq6BITjB\r\na=ssrc:433528572 mslabel:68a296ba-41cc-41db-8edb-3ddf4dbbb483\r\na=ssrc:433528572 label:audio#wx3mq6BITjB\r\n"
                               },
                               "from": "15551112222",
                               "connection": {
                                   "webrtc": {
                                       "sdp": "{\"sdp\":\"v=0\\r\\no=- 8076734947255960322 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\na=group:BUNDLE 0\\r\\na=extmap-allow-mixed\\r\\na=msid-semantic: WMS 68a296ba-41cc-41db-8edb-3ddf4dbbb483\\r\\na=ice-lite\\r\\nm=audio 3482 UDP/TLS/RTP/SAVPF 111 9 0 8 110 126\\r\\nc=IN IP4 31.13.65.130\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=candidate:2754936280 1 udp 2113937151 31.13.65.130 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\\r\\na=candidate:1581496399 1 udp 2113939711 2a03:2880:f211:d1:face:b00c:0:699c 3482 typ host generation 0 network-cost 50 ufrag kv6Jn8vBmEds/8\\r\\na=ice-ufrag:kv6Jn8vBmEds/8\\r\\na=ice-pwd:OhY8sT7v6PJe3bbs0Yx2TC/oPb5oatnK\\r\\na=ice-options:trickle\\r\\na=fingerprint:sha-256 46:14:2B:31:B1:9D:AF:15:81:E2:EF:45:B1:2B:96:3D:64:0E:63:F1:CC:9A:BD:88:D6:32:8F:E9:2A:13:3A:38\\r\\na=setup:active\\r\\na=mid:0\\r\\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\\r\\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\\r\\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=sendrecv\\r\\na=rtcp-mux\\r\\na=rtpmap:111 opus/48000/2\\r\\na=rtcp-fb:111 transport-cc\\r\\na=fmtp:111 minptime=10;useinbandfec=1\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:0 PCMU/8000\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:110 telephone-event/48000\\r\\na=rtpmap:126 telephone-event/8000\\r\\na=ssrc:433528572 cname:VBDcSNi/cg1Wg6D3\\r\\na=ssrc:433528572 msid:68a296ba-41cc-41db-8edb-3ddf4dbbb483 audio#wx3mq6BITjB\\r\\na=ssrc:433528572 mslabel:68a296ba-41cc-41db-8edb-3ddf4dbbb483\\r\\na=ssrc:433528572 label:audio#wx3mq6BITjB\\r\\n\",\"type\":\"answer\"}"
                                   }
                               },
                               "id": "wacid.HBgLMTY1MDMxMzM5NzQVAgARGCAwQTJCRDYwNkEzQUNCQUVCMEFGMzYzRTYxNjMxMDdFMxwYCzE0MDg1NTUyODk5FQIAAA==",
                               "to": "16501230000",
                               "to_user_id": "<BSUID>",
                               "to_parent_user_id": "<PARENT_BSUID>",
                               "event": "connect",
                               "timestamp": "1724467313",
                               "direction": "BUSINESS_INITIATED"
                           }
                       ],
                       "contacts": [
                           {
                               "profile": {
                                   "name": "<CALLEE_NAME>",
                                   "username": "<USERNAME>"
                               },
                               "wa_id": "16501230000",
                               "user_id": "<BSUID>",
                               "parent_user_id": "<PARENT_BSUID>"
                           }
                       ],
                       "metadata": {
                           "phone_number_id": "105615555715855",
                           "display_phone_number": "15551112222"
                       },
                       "messaging_product": "whatsapp"
                   }
               }
           ],
           "id": "112735964992110"
       }
   ],
   "object": "whatsapp_business_account"
}
```
