---
title: "Configure Call Settings"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls
---

# Configure Call Settings

Updated: Jun 26, 2026

Calling is not enabled by default on a business phone number. To enable calling, you must have a [messaging limit](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits) of 2000 or above.

Use these endpoints to view and configure call settings for the Calling API.

You can also [configure session initiation protocol (SIP)](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip) for call signaling instead of using Graph API endpoint calls and webhooks.

## Configure or update business phone number calling settings

Use this endpoint to update call settings configuration for an individual business phone number.

### WhatsApp clients reflecting latest calling config

After you update call configuration, WhatsApp users may take up to 7 days to reflect those changes. Most users refresh much sooner. You can force an immediate refresh in WhatsApp by entering your business chat window and opening the chat info page. Regardless of WhatsApp client behavior, the server still honors the configured settings.

### Request syntax

```
POST /<PHONE_NUMBER_ID>/settings
```

### Endpoint parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  ID of the business phone number whose Calling API settings you're updating. | `106540352242922` |

### Request body

```
{  
  "calling": {  
    "status": "ENABLED",  
    "call_icon_visibility": "DEFAULT",  
    "call_icons": {  
      "restrict_to_user_countries": [  
        "US",  
        "BR"  
      ]  
    },  
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
          "hostname": <SIP_SERVER_HOSTNAME>,  
          "port": SIP_SERVER_PORT,  
          "request_uri_user_params": {  
            "KEY1": "VALUE1",  
            "KEY2": "VALUE2"  
          }  
        }  
      ]  
    },  
    "audio": {  
      "additional_codecs": ["PCMA", "PCMU"]  
    },  
    "voicemail": {  
      "status": "ENABLED",  
      "triggers": [  
        "REJECT",  
        "TIMEOUT"  
      ],  
      "audio": {  
        "default": {  
          "announcement_media_id": 938884519013664,  
          "timeout_seconds": 20  
        }  
      }  
    }  
  }  
}
```

### Body parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `status`  *String* | **Optional**  Enable or disable calling on this phone number. | `"ENABLED"`  `"DISABLED"` |
| `call_icon_visibility`  *String* | **Optional**  Configure whether WhatsApp shows the call button icon to WhatsApp users when they chat with your business.  [View call icon visibility behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#call-icons) | [View call icon visibility behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#call-icons) |
| `call_icons`  *String* | **Optional**  Configure whether WhatsApp call button icon displays for WhatsApp users when chatting with your business.  [View call icons visibility behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#call-icons) | [View call icons behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#call-icons) |
| `call_hours`  *JSON object* | **Optional**  Allows you to specify and trigger call settings for incoming calls based on your timezone, business operating hours, and holiday schedules.  Any previously configured values in `call_hours` will be replaced with the values passed in the request body of this API call.  [View call hours behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#call-hours) | [View call hours behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#call-hours) |
| `callback_permission_status`  *String* | **Optional**  Configure whether a WhatsApp user is prompted with a call permission request after calling your business.  Note: The call permission request is triggered by either a missed or connected call.  [View callback permission status behavior details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#callback-permissions) | `"ENABLED"`  `"DISABLED"` |
| `sip`  *JSON object* | **Optional**  Configure call signaling via session initiation protocol (SIP).  **Note: When SIP is enabled, you cannot use calling related endpoints and will not receive calling related webhooks.**  [Learn how to configure and use SIP call signaling](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip) | View [Configure SIP settings on business phone number](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#configure-or-update-sip-settings-on-business-phone-number) |
| `audio`  *JSON object* | **Optional**  Configure call audio codec settings. Opus is the default codec and is always present.  [View audio codec details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#audio-codec) | ``` "audio": {   "additional_codecs": [     "PCMA", "PCMU"   ] } ``` |
| `voicemail`  *JSON object* | **Optional**  Configure voicemail collection for missed or rejected user-initiated calls.  [View voicemail details below](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#voicemail) | ``` "voicemail": {   "status": "ENABLED",   "triggers": [     "REJECT",     "TIMEOUT"   ],   "audio": {     "default": {       "announcement_media_id": 938884519013664,       "timeout_seconds": 20     }   } } ``` |

### Calling status

When the `status` parameter is set to `"ENABLED"`, calling features are enabled for the business phone number. WhatsApp client apps render the call button icon in both the business chat and business chat profile.

When the `status` parameter is set to `"DISABLED"`, calling features are **disabled**, and both the business chat and business chat profile **do not display the call button icon.**

Updates to `status` update the call button icon in existing business chats in near real-time when the business phone number is in the WhatsApp user's contacts.

Otherwise, updates are real-time for a limited number of users in conversation with the business, and are eventual for the rest of the conversations.

#### Call button icon visibility

When Calling API features are enabled for a business number, you can still choose whether to show the call button icon or not by using the `call_icon_visibility` parameter. Note: Disabling call button icon visibility **does not** disable a WhatsApp user's ability to make unsolicited calls to your business.

The behavior for supported options is as follows:

`DEFAULT`

WhatsApp displays the call button icon in the chat menu bar and the business info page, allowing WhatsApp users to make unsolicited calls to the business.

![Screenshot showing call button icon displayed in WhatsApp chat](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/560917504_1339317971260187_5308835930412534329_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=9VHatfmRE0wQ7kNvwF-h0yk&_nc_oc=AdpZibDEliRBKIQb54DuYgrp9Tr_pE2hpgg12Q-vuufSBCefhcDG3j99cIguStqMc_VOLxaYoz_PXNXWip4I4Dpj&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQDY5NE4qLYtxBnbiNAg_LQ04pFj506xKOpAEFDIfi4DKg&oe=6A607001)

`DISABLE_ALL`

The call button icon is hidden in the chat menu bar and the business info page, and all other entry points external to the chat are also disabled. WhatsApp users cannot make unsolicited calls to your business.

You can still [send interactive messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#send-interactive-message-with-a-whatsapp-call-button) or [template messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-button-messages-deep-links#create-and-send-whatsapp-call-button-template-message) with a Calling API CTA button.

![Screenshot showing hidden call button icon in WhatsApp chat](https://scontent.fdel1-8.fna.fbcdn.net/v/t39.2365-6/560585020_1339317941260190_3863205212606668279_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=fBavuaJv84sQ7kNvwH2l_Ye&_nc_oc=Adp1Exr7nO4EMLzQ1NoV-tGC0vcq_AU0YBYKpTAfjDUssX3FMUF1HZIOQ6G782Jd4aC_eYJHd9dQCDjwtvfOKJqJ&_nc_zt=14&_nc_ht=scontent.fdel1-8.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQBfQ9uUGqBF_ovpFCC8PvlDWiO_-6N0YgXpxr5DyXHLXw&oe=6A604544)

### Callback permissions

Calling a WhatsApp user requires explicit permission from the user. One way to obtain calling permissions is to request permission when a WhatsApp user calls your business.

You can configure the call permission UI to automatically show in the WhatsApp user's client app when they call your business number. The user may change their permission selection at any time.

![Diagram showing callback permissions flow in WhatsApp](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/602352272_1389874706204513_7741631937402058550_n.jpg?_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=tqt4932z7XoQ7kNvwH2g5NK&_nc_oc=AdpwIGVyW9sX_27KQHatDckqlj0CfYR0W2MN9I7reGHQLqWBTeKBsOCX3VwfVLSRUI22n8gFtrNuOw8ucwPTIbI3&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQBD_LhMlPW-VYMJ4R-yDx1pWEXDNnt93CZIzA0WUM878g&oe=6A60439A)

### Call icons

With the `call_icons` setting, you can specify the countries where these icons should show up.

```
"call_icons": {  
  "restrict_to_user_countries": [  
    "US",  
    "BR"  
  ]  
}
```

| Parameter | Description | Sample Values |
| --- | --- | --- |
| `restrict_to_user_countries`  *List of Strings* | **Optional**  Restrict the visibility of call icons to these countries.  *NOTE: For example, if you restrict `restrict_to_user_countries` to "US," then it will apply to all the people who have a US registered phone number. These people could be physically located inside or outside of the USA.* | Restrict to US and Brazil:  ``` "restrict_to_user_countries": [   "US",   "BR" ] ```  No restriction:  ``` "restrict_to_user_countries": [] ``` |

### Call hours

With the `call_hours` setting, you can specify the timezone, business operating hours, and holiday schedules that will be enforced for all user-initiated calls.

Configuring this setting restricts calls only to available weekly hours you configure. User-initiated calls are unavailable outside of the weekly hours and holiday schedules you set.

The WhatsApp client app shows WhatsApp users an option to chat with the business, or request a callback, if `callback_permission_status` is `ENABLED`. The user will also be shown the next available calling slot on the option screen.

![Screenshot showing call hours unavailable message in WhatsApp](https://scontent.fdel1-5.fna.fbcdn.net/v/t39.2365-6/561822470_1339317924593525_4183355843280485487_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=ghzBb_7lhTYQ7kNvwHzczHA&_nc_oc=Adq0m3TYngCsg6IBJ9Ete83-mNpi3FQCNU-3rEgS8SK-khFa7f2bAYBpoIuUndQ0EKWTh1EZxTF6mWvzV9BD2YTa&_nc_zt=14&_nc_ht=scontent.fdel1-5.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQDrQ3mGpmj9OhICvy4C2hcx9jgo9volZlBXVWwHKOtbtw&oe=6A6051E7)

```
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
}
```

| Parameter | Description | Sample Values |
| --- | --- | --- |
| `status`  *String* | **Required**  Enable or disable the call hours for your business.  If call hours are disabled, your business is considered open all 24 hours of the day, 7 days a week. | `"ENABLED"`  `"DISABLED"` |
| `timezone_id`  *String* | **Required**  The timezone that your business is operating within.  [Learn more about supported values for `timezone_id`](https://developers.facebook.com/docs/facebook-business-extension/fbe/reference#time-zones) | `"America/Menominee"`  `"Asia/Singapore"` |
| `weekly_operating_hours`  *List of JSON objects* | **Required**    The operating hours schedule for each day of the week.  Each entry is a JSON object with 3 key-value pairs:  `day_of_week` — (*Enum*) **[Required]**  The day of the week.  Can take one of seven values: `"MONDAY"`, `"TUESDAY"`, `"WEDNESDAY"`, `"THURSDAY"`, `"FRIDAY"`, `"SATURDAY"`, `"SUNDAY"`  |  |  | | --- | --- | | `open_time` | `close_time` — (*Integer*) **[Required]** |  Opening and closing times represented in 24-hour format, for example `"1130"` = 11:30 AM   * Maximum of 2 entries allowed per day of week * `open_time` must be before `close_time` * Overlapping entries not allowed | ``` { "day_of_week": "MONDAY", "open_time": "0400", "close_time": "1020" }, { "day_of_week":"TUESDAY", "open_time": "0108", "close_time": "1020" } ... ``` |
| `holiday_schedule`  *List of JSON objects* | **Optional**  An optional override to the weekly schedule.  Up to 20 overrides can be specified.  Note: If `holiday_schedule` is not passed in the request, then the existing `holiday_schedule` will be deleted and replaced with an empty schedule.  `date` — (*String*) **[Required]**  Date for which you want to specify the override.  YYYY-MM-DD format.  |  |  | | --- | --- | | `open_time` | `close_time` — (*Integer*) **[Required]** |  Opening and closing times represented in 24-hour format, for example, `"1130"` = 11:30 AM   * Maximum of 2 entries allowed per day of week * `open_time` must be before `close_time` * Overlapping entries not allowed | ``` { "date": "2026-01-01", "start_time": "0000", "end_time": "2359" } ... ``` |

### Audio codec

Opus is the default audio codec for all WhatsApp calls. You can enable G.711 (PCMA/PCMU) codecs for interoperability with legacy telephony systems or PSTN gateways.

#### Guidelines and considerations

* **Opus is the recommended codec.** Opus delivers higher audio quality with lower bandwidth usage and is the default for all WhatsApp calls. Use Opus unless you have a specific requirement for G.711.
* **G.711 requires transcoding.** When a G.711 codec is negotiated, audio is transcoded between Opus (on the WhatsApp user side) and G.711 (on the business side), which can add latency to the call.
* **G.711 has lower audio quality.** G.711 encodes audio at a fixed 64 kbps without advanced compression, resulting in lower fidelity compared to Opus.
* **G.711 uses more bandwidth.** G.711 requires approximately 64 kbps per direction, while Opus achieves comparable or better quality at significantly lower bitrates.
* **Use G.711 only when necessary.** The primary use case is interoperability with legacy telephony infrastructure and PSTN gateways that do not support Opus.

```
"audio": {  
  "additional_codecs": ["PCMA", "PCMU"]  
}
```

| Parameter | Description | Sample Values |
| --- | --- | --- |
| `additional_codecs`  *List of Strings* | **Optional**  Enable additional audio codecs. Supported values: `"PCMA"` (G.711 A-law), `"PCMU"` (G.711 µ-law). Opus is always enabled by default and cannot be removed. After enabling additional codecs, they can be selected during SDP codec negotiation according to RFC 3264. | ``` "additional_codecs": [   "PCMA",   "PCMU" ] ```  No additional codecs:  ``` "additional_codecs": [] ``` |

### Voicemail

When enabled, Cloud API does the following:

* Waits for a configured delay or a reject signal from you
* Automatically answers the call
* Plays an audio announcement
* Records the caller's voicemail
* Delivers the voicemail as an audio message via webhook

When voicemail is enabled, turn off call hours, because WhatsApp users can't place calls outside business hours.

Calling must be enabled on the phone number for the `voicemail` setting to take effect.

```
"voicemail": {  
  "status": "ENABLED",  
  "triggers": [  
    "REJECT",  
    "TIMEOUT"  
  ],  
  "audio": {  
    "default": {  
      "announcement_media_id": <MEDIA_ID>,  
      "timeout_seconds": 20  
    }  
  }  
}
```

| Parameter | Description | Sample Values |
| --- | --- | --- |
| `status`  *String* | **Required**  Enable or disable the voicemail feature for the business phone number. Disabled by default.  Calling must be enabled on the phone number, otherwise the voicemail setting is ignored. | `"ENABLED"`  `"DISABLED"` |
| `triggers`  *List of Strings* | **Required when `status` is `ENABLED`**  Events that trigger voicemail collection. At least one trigger must be specified when voicemail is enabled. Supported values:   * `REJECT` — you reject the incoming call. * `TIMEOUT` — you do not accept or reject the call within the configured `timeout_seconds`. | ``` "triggers": [   "REJECT",   "TIMEOUT" ] ``` |
| `audio`  *JSON object* | **Required when `status` is `ENABLED`**  Voicemail audio configuration.  `default`*(JSON object)***[Required]** — Default voicemail configuration applied to all WhatsApp users.  The `default` configuration accepts the following fields:  `announcement_media_id`*(Integer)***[Required when `status` is `ENABLED`]** — ID of an uploaded media file played to the WhatsApp user as the voicemail announcement. Upload the file via the [Media Upload API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/media-upload-api) with `use_case=call_voicemail_announcement`. The media file must satisfy the following:   * Duration must be less than 60 seconds. * MIME type must be `audio/ogg` with the OPUS codec. * The media must be uploaded with `use_case=call_voicemail_announcement` so it is exempt from the standard 30-day media TTL.   `timeout_seconds`*(Integer)***[Required when `TIMEOUT` trigger is used]** — Time in seconds after the call starts ringing before the voicemail announcement and recording begin. Only applies to the `TIMEOUT` trigger. Must be between `0` and `30` seconds inclusive. If the `TIMEOUT` trigger is configured without `timeout_seconds`, the trigger is disabled. | ``` "audio": {   "default": {     "announcement_media_id": <MEDIA_ID>,     "timeout_seconds": 20   } } ``` |

#### Upload a voicemail announcement media file

Voicemail announcement audio files must be uploaded through the [Media Upload API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/media-upload-api) with the `use_case` parameter set to `call_voicemail_announcement`. This skips the standard 30-day TTL applied to messaging media so that announcements remain available for the lifetime of the configuration.

```
POST /<PHONE_NUMBER_ID>/media
```

Form data parameters:

* `file=@<FILE_PATH>;type=audio/ogg`
* `messaging_product=whatsapp`
* `use_case=call_voicemail_announcement`
* `description="Default announcement (English)"`

Media uploaded with `use_case=call_voicemail_announcement` can only be used as a voicemail announcement and cannot be sent as a regular message.

### Success response

```
{  
  "success": true  
}
```

### Error response

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

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Get phone number calling settings

Use this endpoint to check the configuration of your Calling API feature settings.

This endpoint can return information for other Cloud API feature settings.

### Request syntax

```
GET /<PHONE_NUMBER_ID>/settings
```

### Endpoint parameters

| Parameter | Description | Sample Value |
| --- | --- | --- |
| `<PHONE_NUMBER_ID>`  *Integer* | **Required**  ID of the business phone number for which you are getting Calling API settings. | `106540352242922` |

### App permission required

`whatsapp_business_management`: Advanced access is required to use the API for end business clients

### Response body

```
{  
  "calling": {  
    "status": "ENABLED",  
    "call_icon_visibility": "DEFAULT",  
    "callback_permission_status": "ENABLED",  
    "call_hours": {  
      "status": "ENABLED",  
      "timezone_id": "[REDACTED]",  
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
    "sip": {  
      "status": "ENABLED",  
      "servers": [  
        {  
          "hostname": "[REDACTED]",  
          "sip_user_password": "[REDACTED]"  
        }  
      ]  
    },  
    "audio": {  
      "additional_codecs": ["PCMA", "PCMU"]  
    },  
    "voicemail": {  
      "status": "ENABLED",  
      "triggers": [  
        "REJECT",  
        "TIMEOUT"  
      ],  
      "audio": {  
        "default": {  
          "announcement_media_id": <MEDIA_ID>,  
          "timeout_seconds": 20  
        }  
      }  
    }  
  },  
  <Other non-calling feature configuration...>  
}
```

### Include SIP user password in response

Optionally, you can include SIP user credentials in your response body by adding the SIP credentials query parameter in the POST request:

```
GET /<PHONE_NUMBER_ID>/settings?include_sip_credentials=true
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

### Response details

The [Settings API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/settings-api#get-version-phone-number-id-settings) returns Calling API settings, along with other configuration information for your WhatsApp Business phone number.

[Learn more about Calling API settings and their values](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#body-parameters)

#### Response with calling restrictions

If your business has restrictions enforced, the response body contains information about the restriction along with other calling API settings.

```
 {  
   "calling": {  
     ... // other calling api settings  
     "restrictions": {  
       "restrictions_list": [  
         {  
           "type": "[RESTRICTED_BUSINESS_INITIATED_CALLING|RESTRICTED_USER_INITIATED_CALLING]",  
           "reason": "Business|User initiated calling capability has been temporarily disabled for this phone number due to high negative feedback from users.",  
           "expiration": 1754072386  
         }  
       ]  
     }  
   }  
}
```

| Parameter | Description |
| --- | --- |
| `<restrictions>`  *JSON Object* | The restrictions object contains the following values: `restriction_list` *(JSON Object)*: list of currently imposed restrictions with the following values  `type` *(string)* - for calling restriction, this would have the value of `RESTRICTED_BUSINESS_INITIATED_CALLING` or `RESTRICTED_USER_INITIATED_CALLING`  `reason` *(string)* - description of restriction  `expiration` *(Integer)* - The UNIX time at which the restriction will expire in UTC timezone |

### Error response

Possible errors that can occur:

* Permissions/Authorization errors

[View Calling API Error Codes and Troubleshooting for more information](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/troubleshooting)

[View general Cloud API Error Codes here](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Call settings in WhatsApp Manager

You can also control your call settings via [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/).

To access calling controls in WhatsApp Manager:

* Click **Account tools** > **Phone numbers** panel
* Click the gear icon next to the phone number you are using for calling
* Click the **Calls** tab

![Screenshot of WhatsApp Manager call settings interface](https://scontent.fdel1-2.fna.fbcdn.net/v/t39.2365-6/725291706_1535575928301056_7301383520578232783_n.png?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=GrogveN6ga4Q7kNvwFNxRDw&_nc_oc=Adq-Od7rp_gqbKFcgtQ3MjcIv83b6yZF4cXDs4pg2uKCGYirxkY6u0kFkRyU-620Q-W3aMICDAJjmZDFcK-6_Idz&_nc_zt=14&_nc_ht=scontent.fdel1-2.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQCuvSjFeRtfcJ5U9l4l_nhSuAnE0-XCkWuYyjVbiHmE4w&oe=6A607158)

### Configure SIP in the call settings tab

You can [configure a SIP server](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip) in the Call settings tab by clicking the **Set up** button in the **Developer settings** section.

![Screenshot of WhatsApp Manager call settings developer settings section interface](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/724858728_1535575944967721_7284001689110016098_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=odIwowfK2_UQ7kNvwG8rg-L&_nc_oc=AdotBReqtDUYvU5_sWcAwFAl53ta-xNLlB6H3USxlR-80CgKrBEcD4FbEkKCAu5Wdc5MmTY9swyJ-TER7n_b6Meo&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQDgdk-2iLrkKe2fevY2l-b_jtrC76QV1UBUDD5Um9GDBQ&oe=6A60452F)

When you click the **Set up** button, the SIP configuration modal will be displayed. You can set your SIP server information and click the **Save** button to save your configuration.

![Screenshot of WhatsApp Manager call settings SIP config modal interface](https://scontent.fdel1-4.fna.fbcdn.net/v/t39.2365-6/726145684_1535575948301054_8800890617402431752_n.png?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=Xq_HbAR7fjcQ7kNvwHKxquv&_nc_oc=Adr82oXC4DVWJ0jHEJEF1VRAfYdtV5gmLQDbpQ2e-GO1mnpO0uXMXk7evXGY2VzGm7h7mKZVBQfXoPDGMmYkM5Yo&_nc_zt=14&_nc_ht=scontent.fdel1-4.fna&_nc_gid=xTmJje1nb3VsrfJg2B6BKA&_nc_ss=7b2a8&oh=00_AQCwFFU25Hlnj37fElJpktA7CT9kaapKb5iN7GNPPKUbnQ&oe=6A606C88)

## Configure and use call signaling via session initiation protocol (SIP)

Session Initiation Protocol (SIP) is a signaling protocol used for initiating, maintaining, modifying, and terminating real-time communication sessions between two or more endpoints. You can send and receive call signals using SIP instead of Graph API endpoints.

[Learn more about how to use and configure SIP](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip)

## Voicemail webhooks

When a WhatsApp user leaves a voicemail on a business phone number that has voicemail [enabled](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#voicemail), Cloud API delivers the recorded audio to your business through the existing `messages` webhook field as an inbound audio message.

The webhook payload follows the same schema as the [Audio messages webhook reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/audio), with one difference: `messages[].id` contains the call ID (WACID) of the call that produced the voicemail rather than a regular message ID (WAMID). Use this call ID to correlate the voicemail with the originating call lifecycle webhooks.

No additional webhook subscription is required beyond the standard `messages` field; integrations that already handle inbound audio messages can process voicemails with minimal changes.

Voicemail collection is delivered as best-effort. If voicemail collection fails, Cloud API does not send a voicemail webhook for that call.

### Webhook payload

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "changes": [  
        {  
          "field": "messages",  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",  
              "display_phone_number": "<BUSINESS_PHONE_NUMBER>"  
            },  
            "contacts": [  
              {  
                "wa_id": "<USER_PHONE_NUMBER>",  
                "user_id": "<BSUID>",  
                "parent_user_id": "<PARENT_BSUID>",  
                "profile": {  
                  "name": "<USER_PROFILE_NAME>",  
                  "username": "<USERNAME>"  
                }  
              }  
            ],  
            "messages": [  
              {  
                "id": "wacid.HBgLMTQxMjYxMzYyASG...",  
                "from": "<USER_PHONE_NUMBER>",  
                "from_user_id": "<BSUID>",  
                "from_parent_user_id": "<PARENT_BSUID>",  
                "timestamp": "1728932177",  
                "type": "audio",  
                "audio": {  
                  "id": "1002764438271669",  
                  "sha256": "Y9vvGyeo3n76ptkXu3CwDBsnzbRFqpjHskQdMGSVqas=",  
                  "mime_type": "audio/ogg; codecs=opus"  
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

**Usernames and business-scoped user IDs:** The `user_id`, `parent_user_id`, and `username` fields in `contacts` and the `from_user_id` and `from_parent_user_id` fields in `messages` identify the WhatsApp user by their BSUID; the phone number fields (`wa_id`, `from`) may be omitted if the user has adopted a username. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

For detailed field descriptions, see the [Audio messages webhook reference](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/audio).

## Settings update webhooks

You can subscribe to a new webhook subscription field `account_settings_update` to get notified on updates to phone number settings.

* You'll be notified even for your own updates
* Currently, only changes to calling settings are supported. Under the calling object, only changes to these fields are observed: `status`, `call_icon_visibility`, `callback_permission_status`, `sip.status`, and `srtp_key_exchange_protocol`.

### Steps to get started

* [Set up your webhook subscription](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks) and subscribe to the `account_settings_update` field.
* The same app should also be subscribed to the WhatsApp Business account of your business phone number.
* Your app should have `whatsapp_business_management` permission to receive the webhooks. Using access token for the same app, if you're able to [get settings](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#get-phone-number-calling-settings) successfully, your app is good to receive the webhooks too.

### Webhook payload

```
{  
    "object": "whatsapp_business_account",  
    "entry": [  
        {  
            "id": "whatsapp-business-account-id",  
            "changes": [  
                {  
                    "value": {  
                        "messaging_product": "whatsapp",  
                        "timestamp": "1671644824",  
                        "type": "[phone_number_settings]",  
                        "phone_number_settings": {  
                            "phone_number_id": "phone-number-id",  
                            "calling": {  
                                "status": "ENABLED",  
                                "call_icon_visibility": "DEFAULT",  
                                "callback_permission_status": "ENABLED",  
                                "call_hours": {  
                                    "status": "ENABLED",  
                                    "timezone_id": "[REDACTED]",  
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
                                "sip": {  
                                    "status": "ENABLED",  
                                    "servers": [  
                                        {  
                                            "hostname": "[REDACTED]",  
                                            "port": SIP_SERVER_PORT  
                                        }  
                                    ]  
                                }  
                            }  
                        }  
                    },  
                    "field": "account_settings_update"  
                }  
            ]  
        }  
    ]  
}
```

### Webhook values

| Placeholder | Description |
| --- | --- |
| `messaging_product`  *String* | Always `whatsapp`. |
| `timestamp`  *String* | Time when the settings were updated. |
| `type`  *String* | Type of the change. Currently, the only value is `PHONE_NUMBER_SETTINGS`. |
| `phone_number_settings`  *Object* | This field is present if the type is `PHONE_NUMBER_SETTINGS`. Currently, only the `calling` sub-field is supported. |
| `phone_number_settings.phone_number_id`  *String* | The phone number ID whose settings were updated. |
| `phone_number_settings.calling`  *Object* | This is present only if fields related to `calling` are updated. It's null otherwise. When present, the payload is the same as [Get settings API](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings#get-phone-number-calling-settings) |

## Calling restrictions for user feedback

If your calls receive high negative user feedback, such as blocks and reports, business-initiated calling, user-initiated calling, or both functionalities on your phone number can be restricted.

### Early warning

You will be notified when the business phone number is close to being paused as an early warning. The early warning notifications will be communicated via the channels below.

#### Email

Enforcement emails are sent to the email addresses of all users and admins associated with the business.
If you did not receive an email, confirm which email you have designated as the contact email for your app and make sure that it is active, can receive new email, and does not flag the email as junk or spam mail.

#### Webhook

A webhook will be sent on the `account_update` field:

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "0",  
      "time": 1623862418,  
      "changes": [  
        {  
          "field": "account_update",  
          "value": {  
            "phone_number": "PN",  
            "event": "ACCOUNT_VIOLATION",  
            "violation_info": {  
               "violation_type": "[LOW_BUSINESS_INITIATED_CALLING_QUALITY|LOW_USER_INITIATED_CALLING_QUALITY]",  
            }  
          }  
        }  
      ]  
    }  
  ]  
}
```

If either business or user initiated calling are close to being paused, you will receive a webhook for the respective violation type. For more information about the webhook, see [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update).

### Pause in calling functionality

Once the negative user feedback reaches a threshold, Cloud API automatically restricts calling functionality on your phone number for a period of 7 days. While paused, the calling phone number will be unable to:

* Make business-initiated calls to users
* Send call permissions requests

Once your phone number has been paused, notifications will be communicated via the channels below.

Note: Any call permissions approved or declined by the users while paused will still be valid.

#### Email

Enforcement emails are sent to the email addresses of all users and admins associated with the business.
If you did not receive an email, confirm which email you have designated as the contact email for your app and make sure that it is active, can receive new email, and does not flag the email as junk or spam mail.

#### Webhook

A webhook will be sent on the `account_update` field:

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "0",  
      "time": 1641848059,  
      "changes": [  
        {  
          "field": "account_update",  
          "value": {  
            "phone_number": "PN",  
            "event": "ACCOUNT_RESTRICTION",  
            "restriction_info": [  
              {  
                "restriction_type": "RESTRICTED_BUSINESS_INITIATED_CALLING",  
                "expiration": 1641848057  
              }  
            ]  
          }  
        }  
      ]  
    }  
  ]  
}
```

For more information about the webhook, see [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update).

### Pause in user initiated calling functionality

Once the negative user feedback reaches a threshold, Cloud API automatically restricts user initiated calling functionality on your phone number for a period of 7 days. While paused, the calling phone number will be unable to:

* Receive calls from users
* Have call icon visible

Once your phone number has been paused, notifications will be communicated via the channels below.

#### Email

Enforcement emails are sent to the email addresses of all users and admins associated with the business.
If you did not receive an email, confirm which email you have designated as the contact email for your app and make sure that it is active, can receive new email, and does not flag the email as junk or spam mail.

#### Webhook

A webhook will be sent on the `account_update` field:

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "0",  
      "time": 1641848059,  
      "changes": [  
        {  
          "field": "account_update",  
          "value": {  
            "phone_number": "PN",  
            "event": "ACCOUNT_RESTRICTION",  
            "restriction_info": [  
              {  
                "restriction_type": "RESTRICTED_USER_INITIATED_CALLING",  
                "expiration": 1641848057  
              }  
            ]  
          }  
        }  
      ]  
    }  
  ]  
}
```

For more information about the webhook, see [account\_update](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/account_update).

## Calling restrictions for low call pickup rates

When calling is enabled on your business phone number, you are expected to pick up calls that WhatsApp users place to you.

If a significant number of calls placed to your calling-enabled business phone number are not picked up, you will be notified and expected to make a change.

### What happens if you do not pick up calls

* **Warning via Email:** You receive an email notification with options to change how you handle incoming calls.
* **Calling becomes restricted on the business phone number:** The calling button will be hidden from users.

### How to mitigate the situation

#### If you receive a warning

* **Continue allowing users to call:**
  * Identify and address the cause of calls not being picked up and make sure you are properly resourced to handle expected call volumes.
* **Hide call buttons for user-initiated calls:**
  * You can do so either by working with your partner or going to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/overview/) > Account tools > Phone numbers > select Phone number [WA phone number] > Calls > toggle off Display call buttons.
* **Turn off calling altogether:**
  * You can do so either by working with your partner or going to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/overview/) > Account tools > Phone numbers > select Phone number [WA phone number] > Calls > toggle off Allow voice calls.

#### If the call button is hidden for the business phone number

* **Re-display calling buttons:**
  * Identify and address the cause of calls not being picked up and make sure you are properly resourced to handle expected call volumes.
  * Next, display the calling buttons by either working with your partner or going to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/overview/) > Account tools > Phone numbers > select Phone number [WA phone number] > Calls > toggle on Display call buttons.
* **Turn off calling altogether:**
  * You can do so either by working with your partner or going to [WhatsApp Manager⁠](https://business.facebook.com/latest/whatsapp_manager/overview/) > Account tools > Phone numbers > select Phone number [WA phone number] > Calls > toggle off Allow voice calls.

### Webhooks

#### Warning webhook

```
[  
  {  
    "object": "whatsapp_business_account",  
    "entry": [  
      {  
        "id": "0",  
        "time": 1641848059,  
        "changes": [  
          {  
            "field": "account_update",  
            "value": {  
              "phone_number": "16505552771",  
              "event": "ACCOUNT_VIOLATION",  
              "violation_info": {  
                "violation_type": "USER_INITIATED_CALLS_LOW_PICKUP_RATE",  
                "remediation": "Please identify and address the cause of user-initiated calls not being picked up and make sure the business is properly resourced to handle expected call volumes."  
              }  
            }  
          }  
        ]  
      }  
    ]  
  }  
]
```

#### Enforcement webhook

```
[  
  {  
    "object": "whatsapp_business_account",  
    "entry": [  
      {  
        "id": "0",  
        "time": 1641848059,  
        "changes": [  
          {  
            "field": "account_update",  
            "value": {  
              "phone_number": "16505552771",  
              "event": "ACCOUNT_RESTRICTION",  
              "restriction_info": [  
                {  
                  "restriction_type": "RESTRICTED_USER_INITIATED_CALLING_CALL_BUTTON_HIDDEN",  
                  "remediation": "The call button has been hidden due to low pickup rates. Please identify and address the cause of user-initiated calls not being picked up.  Next, display the calling buttons by either working with your partner or going to WhatsApp Manager > Account tools > Phone numbers > select Phone number > Calls > toggle on Display call buttons"  
                }  
              ]  
            }  
          }  
        ]  
      }  
    ]  
  }  
]
```
