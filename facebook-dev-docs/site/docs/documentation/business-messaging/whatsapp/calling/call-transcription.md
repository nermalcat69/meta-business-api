---
title: "Call recording"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription
---

# Call recording

Updated: May 31, 2026

## Overview

The Calling API can record the audio of business-initiated calls (BIC) and user-initiated calls (UIC) you make through the WhatsApp Business Cloud API. When you opt a call into recording, both participants hear a short legally required announcement before the recording begins. After the call ends, you receive a webhook with a media ID you can use to download the finished recording.

Recording is opt-in on a per-call basis — you decide at the time you initiate or accept each call whether it should be recorded.

Recording and [call transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/) are independent features. You can enable either one on its own, both together, or neither. They are configured and priced separately, each has its own request object, and each delivers its result in its own webhook event. Enabling recording does not produce a transcript, and enabling transcription does not produce an audio recording. See [Using recording with transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription#using-recording-with-transcription) for what changes when you enable both on the same call.

## Prerequisites

Before you record a call, make sure:

* Your business phone number has [Calling API enabled](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings).
* Your app is [subscribed to the `calls` webhook field](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks).
* You have obtained an open conversation or [call permission from the WhatsApp user](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions) (for business-initiated calls).

## Enable recording on a business-initiated call

Add a `recording` object to your [business-initiated call request body](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#part-2-your-business-initiates-a-new-call-to-the-whatsapp-user):

```
POST /<PHONE_NUMBER_ID>/calls  
{  
  "messaging_product": "whatsapp",  
  "to": "14085551234",  
  "recipient": "US.13491208655302741918",  
  "action": "connect",  
  "session": {  
    "sdp_type": "offer",  
    "sdp": "<<RFC 8866 SDP>>"  
  },  
  "recording": {  
    "status": "ENABLED",  
    "purpose": "quality assurance",  
    "announcement_language": "en_US"  
  }  
}
```

**Usernames and business-scoped user IDs:** The `recipient` field lets you identify the WhatsApp user by their BSUID instead of, or in addition to, their phone number in `to`. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Enable recording on a user-initiated call

Add the same `recording` object when you accept an incoming call:

```
POST /<PHONE_NUMBER_ID>/calls  
{  
  "messaging_product": "whatsapp",  
  "call_id": "wacid.ABGGFjFVU2AfAgo6V",  
  "action": "accept",  
  "session": {  
    "sdp_type": "answer",  
    "sdp": "<<RFC 8866 SDP>>"  
  },  
  "recording": {  
    "status": "ENABLED",  
    "purpose": "quality assurance",  
    "announcement_language": "en_US"  
  }  
}
```

To accept an incoming call without recording it, either omit the `recording` field entirely or send it with `"status": "DISABLED"`.

## Announcements and consent

Before any audio is recorded, the Calling API mixes a spoken announcement into both your business and the WhatsApp user audio streams. The announcement is generated from the `purpose` string you provide and the `announcement_language` you select, for example:

> *"The audio of this call will be recorded for the following purpose: <your purpose string>."*

The recording starts only after the announcement has finished playing. A participant who does not consent can decline by terminating the call before or during the announcement.

The `purpose` field is mandatory whenever `status` is `ENABLED`. Calls submitted with recording enabled but without a purpose are rejected with a request error.

## `recording` object reference

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | *String* | Yes | `ENABLED` to record the call, `DISABLED` to explicitly opt out. |
| `purpose` | *String* | Yes, when `status` is `ENABLED` | The purpose of the recording, spoken to both participants as part of the announcement. Maximum 250 characters. Provide the text in the language you specified in `announcement_language`. |
| `announcement_language` | *String* | Yes, when `status` is `ENABLED` | Locale code for the language of the spoken announcement, for example `en_US` or `es`. See [Supported announcement languages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription#supported-announcement-languages). |

## Supported announcement languages

The following `announcement_language` values have a localized announcement. The Calling API speaks the matching phrase, followed by your `purpose` string, to both participants before recording begins.

| Language | `announcement_language` | Recording announcement |
| --- | --- | --- |
| English | `en` (also `en_US`, `en_AU`, `en_CA`, `en_GB`, `en_IN`, `en_NZ`) | The audio of this call will be recorded for the following purpose: |
| Dutch | `nl` | De audio van dit gesprek wordt voor het volgende doeleinde opgenomen: |
| French | `fr` | L'audio de cet appel sera enregistré aux fins suivantes : |
| German | `de` | Dieser Anruf wird zu folgenden Zwecken aufgezeichnet: |
| Hindi | `hi` | इस कॉल के ऑडियो को इस उद्देश्य के लिए रिकॉर्ड किया जाएगा: |
| Italian | `it` | L'audio di questa chiamata verrà registrato per il seguente scopo: |
| Kannada | `kn` | ಈ ಕರೆಯ ಆಡಿಯೊವನ್ನು ಈ ಕೆಳಗಿನ ಉದ್ದೇಶಕ್ಕಾಗಿ ರೆಕಾರ್ಡ್ ಮಾಡಲಾಗುತ್ತದೆ: |
| Portuguese (Brazil) | `pt` | O áudio desta ligação será gravado para a seguinte finalidade: |
| Spanish (Latin America) | `es` | El audio de esta llamada se grabará con el siguiente propósito: |
| Spanish (Spain) | `es_ES` | El audio de esta llamada se grabará con el fin siguiente: |
| Telugu | `te` | ఈ కాల్ ఆడియో‌ను క్రింది అవసరం కోసం రికార్డ్ చేయడం జరుగుతుంది: |
| Vietnamese | `vi` | Âm thanh của cuộc gọi này sẽ được ghi lại cho mục đích sau: |

## Using recording with transcription

Recording and [transcription](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/) are fully independent. The `recording` and `transcription` objects are separate request fields, so you choose each one independently on a per-call basis:

* Send only `recording` to receive an audio recording and no transcript.
* Send only `transcription` to receive a transcript and no audio recording.
* Send both objects to receive both an audio recording and a transcript.
* Omit both (or set both to `DISABLED`) to receive neither.

When you enable both on the same call, participants hear a single combined announcement instead of two:

> *"The audio of this call will be recorded and transcribed for the following purpose: <your purpose string>."*

The combined announcement is localized using the same `announcement_language` values as the individual announcements:

| Language | `announcement_language` | Combined announcement |
| --- | --- | --- |
| English | `en` (also `en_US`, `en_AU`, `en_CA`, `en_GB`, `en_IN`, `en_NZ`) | The audio of this call will be recorded and transcribed for the following purpose: |
| Dutch | `nl` | De audio van dit gesprek wordt opgenomen en getranscribeerd voor het volgende doeleinde: |
| French | `fr` | L'audio de cet appel sera enregistré et transcrit aux fins suivantes : |
| German | `de` | Dieser Anruf wird zu folgenden Zwecken aufgezeichnet und transkribiert: |
| Hindi | `hi` | इस कॉल के ऑडियो को इस उद्देश्य के लिए रिकॉर्ड और ट्रांसक्राइब किया जाएगा: |
| Italian | `it` | L'audio di questa chiamata verrà registrato e trascritto per il seguente scopo: |
| Kannada | `kn` | ಈ ಕರೆಯ ಆಡಿಯೋವನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ಕೆಳಗಿನ ಉದ್ದೇಶಕ್ಕಾಗಿ ಲಿಪ್ಯಂತರಿಸಲಾಗುತ್ತದೆ: |
| Portuguese (Brazil) | `pt` | O áudio desta ligação será gravado e transcrito para a seguinte finalidade: |
| Spanish (Latin America) | `es` | El audio de esta llamada se grabará y transcribirá con el siguiente propósito: |
| Spanish (Spain) | `es_ES` | El audio de esta llamada se grabará y transcribirá con este fin: |
| Telugu | `te` | ఈ కాల్ ఆడియో క్రింది అవసరం కోసం రికార్డ్ చేసి, ట్రాన్‌స్క్రైబ్ చేయడం జరుగుతుంది: |
| Vietnamese | `vi` | Âm thanh của cuộc gọi này sẽ được ghi âm và chép lời cho mục đích sau: |

When both objects are present, the `announcement_language` and `purpose` from the `recording` object are used for this combined announcement, and the corresponding values in the `transcription` object are ignored. You still receive a separate webhook for each enabled feature: a [`call_recording_available`](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription#recording-available-webhook) event for the recording and a [`call_transcription_available`](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-transcription/#transcription-available-webhook) event for the transcript.

## Recording-available webhook

After the call ends and post-processing finishes (typically under one minute), the Calling API sends a `call_recording_available` event under the existing `calls` webhook field:

```
{  
  "object": "whatsapp_business_account",  
  "entry": [  
    {  
      "id": "<WABA_ID>",  
      "changes": [  
        {  
          "field": "calls",  
          "value": {  
            "messaging_product": "whatsapp",  
            "metadata": {  
              "phone_number_id": "<BUSINESS_PHONE_NUMBER_ID>",  
              "display_phone_number": "<BUSINESS_DISPLAY_PHONE_NUMBER>"  
            },  
            "calls": [  
              {  
                "id": "wacid.HBgLMTQxMjYxMzYyNTMVAgASGCBGO...",  
                "from": "<USER_PHONE_NUMBER>",  
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

### `call_recording` fields

| Field | Type | Description |
| --- | --- | --- |
| `type` | *String* | Media type of the recording. Currently always `audio`. |
| `audio.id` | *String* | Media asset ID. Use the [Media API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) to [retrieve the media URL](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#retrieve-media-url) for download. |
| `audio.sha256` | *String* | Base64-encoded SHA-256 hash of the recording. Use it to verify the downloaded file's integrity. |
| `audio.mime_type` | *String* | MIME type of the recording, for example `audio/ogg; codecs=opus`. |
| `audio.url` | *String* | A short-lived download URL. Issue an authenticated GET request with your access token to download the asset. |

**Usernames and business-scoped user IDs:** The `from_user_id` and `from_parent_user_id` fields identify the WhatsApp user by their BSUID; the `from` phone number may be omitted if the user has adopted a username. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Download the recording

Recordings use the same download flow as [media messages](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#retrieve-media-url):

* The `url` returned in the webhook is valid for 5 minutes. Issue an authenticated GET request with your access token to download the file directly.
* If the URL has expired, use the [Media API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) to [retrieve a fresh media URL](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#retrieve-media-url) with the `audio.id`.

## Retention

Recordings remain available for download for **7 days** after the `call_recording_available` webhook is delivered. After that period, the media ID expires and the underlying file is deleted. Download and persist the recording to your own storage within the retention window if you need to keep it long-term.

## Errors

The following request errors are specific to call recording. See [Cloud API error codes](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes/) for the full list.

| Scenario | Description |
| --- | --- |
| Missing `purpose` | `recording.status` is `ENABLED` but `purpose` is omitted or empty. |
| `purpose` too long | `purpose` exceeds 250 characters. |
| Invalid `announcement_language` | `announcement_language` is not a supported locale code. |
| Invalid `status` | `status` is not one of `ENABLED` or `DISABLED`. |
