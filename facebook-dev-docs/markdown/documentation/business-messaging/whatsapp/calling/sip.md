---
title: "Call transcription"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip
---

# Call transcription

Updated: Jun 18, 2026

## Overview

The Calling API can transcribe the audio of business-initiated calls (BIC) and user-initiated calls (UIC) you make through the WhatsApp Business Cloud API. When you opt a call into transcription, both participants hear a short legally required announcement before transcription begins. After the call ends, you receive a webhook with a media ID you can use to download the finished transcript as a JSON document.

Transcription is opt-in on a per-call basis — you decide at the time you initiate or accept each call whether it should be transcribed.

Transcription and [call recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/) are independent features. You can enable either one on its own, both together, or neither. They are configured and priced separately, each has its own request object, and each delivers its result in its own webhook event. Enabling transcription does not produce an audio recording, and enabling recording does not produce a transcript. See [Using transcription with recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#using-transcription-with-recording) for what changes when you enable both on the same call.

## Prerequisites

Before you transcribe a call, make sure:

* Your business phone number has [Calling API enabled](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-settings).
* Your app is [subscribed to the `calls` webhook field](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/create-webhook-endpoint#configure-webhooks).
* You have obtained an open conversation or [call permission from the WhatsApp user](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/user-call-permissions) (for business-initiated calls).

## Enable transcription on a business-initiated call

Add a `transcription` object to your [business-initiated call request body](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/business-initiated-calls#part-2-your-business-initiates-a-new-call-to-the-whatsapp-user):

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
  "transcription": {  
    "status": "ENABLED",  
    "purpose": "quality assurance",  
    "announcement_language": "en_US"  
  }  
}
```

**Usernames and business-scoped user IDs:** The `recipient` field lets you identify the WhatsApp user by their BSUID instead of, or in addition to, their phone number in `to`. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Enable transcription on a user-initiated call

Add the same `transcription` object when you accept an incoming call:

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
  "transcription": {  
    "status": "ENABLED",  
    "purpose": "quality assurance",  
    "announcement_language": "en_US"  
  }  
}
```

To accept an incoming call without transcribing it, either omit the `transcription` field entirely or send it with `"status": "DISABLED"`.

## Announcements and consent

Before any audio is transcribed, the Calling API mixes a spoken announcement into both your business and the WhatsApp user audio streams. The announcement is generated from the `purpose` string you provide and the `announcement_language` you select, for example:

> *"The audio of this call will be transcribed for the following purpose: <your purpose string>."*

Transcription starts only after the announcement has finished playing. A participant who does not consent can decline by terminating the call before or during the announcement.

The `purpose` field is mandatory whenever `status` is `ENABLED`. Calls submitted with transcription enabled but without a purpose are rejected with a request error.

## `transcription` object reference

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | *String* | Yes | `ENABLED` to transcribe the call, `DISABLED` to explicitly opt out. |
| `purpose` | *String* | Yes, when `status` is `ENABLED` | The purpose of the transcription, spoken to both participants as part of the announcement. Maximum 250 characters. Provide the text in the language you specified in `announcement_language`. |
| `announcement_language` | *String* | Yes, when `status` is `ENABLED` | Locale code for the language of the spoken announcement, for example `en_US` or `es`. See [Supported announcement languages](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#supported-announcement-languages). |

## Supported announcement languages

The following `announcement_language` values have a localized announcement. The Calling API speaks the matching phrase, followed by your `purpose` string, to both participants before transcription begins.

| Language | `announcement_language` | Transcription announcement |
| --- | --- | --- |
| English | `en` (also `en_US`, `en_AU`, `en_CA`, `en_GB`, `en_IN`, `en_NZ`) | The audio of this call will be transcribed for the following purpose: |
| French | `fr` | L'audio de cet appel sera transcrit aux fins suivantes : |
| German | `de` | Dieser Anruf wird zu folgenden Zwecken transkribiert: |
| Hindi | `hi` | इस कॉल के ऑडियो को इस उद्देश्य के लिए ट्रांसक्राइब किया जाएगा: |
| Italian | `it` | L'audio di questa chiamata verrà trascritto per il seguente scopo: |
| Kannada | `kn` | ಈ ಕರೆಯ ಆಡಿಯೋವನ್ನು ಈ ಕೆಳಗಿನ ಉದ್ದೇಶಕ್ಕಾಗಿ ಲಿಪ್ಯಂತರಿಸಲಾಗುತ್ತದೆ: |
| Portuguese (Brazil) | `pt` | O áudio desta ligação será transcrito para a seguinte finalidade: |
| Spanish | `es` | El audio de esta llamada se transcribirá con el siguiente propósito: |
| Telugu | `te` | ఈ కాల్ ఆడియో క్రింది ప్రయోజనం కోసం ట్రాన్‌స్క్రైబ్ చేయడం జరుగుతుంది: |
| Vietnamese | `vi` | Âm thanh của cuộc gọi này sẽ được chép lời cho mục đích sau: |

The `announcement_language` field also accepts `nl` and `es_ES`. These values are valid, but until a localized transcription announcement is available they play the English announcement.

## Using transcription with recording

Transcription and [recording](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/) are fully independent. The `transcription` and `recording` objects are separate request fields, so you choose each one independently on a per-call basis:

* Send only `transcription` to receive a transcript and no audio recording.
* Send only `recording` to receive an audio recording and no transcript.
* Send both objects to receive both a transcript and an audio recording.
* Omit both (or set both to `DISABLED`) to receive neither.

When you enable both on the same call, participants hear a single combined announcement instead of two:

> *"The audio of this call will be recorded and transcribed for the following purpose: <your purpose string>."*

When both objects are present, the `announcement_language` and `purpose` from the `recording` object are used for this combined announcement, and the corresponding values in the `transcription` object are ignored. You still receive a separate webhook for each enabled feature: a [`call_recording_available`](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/call-recording/#recording-available-webhook) event for the recording and a [`call_transcription_available`](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#transcription-available-webhook) event for the transcript.

## Transcription-available webhook

After the call ends and post-processing finishes (typically under one minute), the Calling API sends a `call_transcription_available` event under the existing `calls` webhook field:

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

### `call_transcript` fields

| Field | Type | Description |
| --- | --- | --- |
| `document.id` | *String* | Media asset ID. Use the [Media API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) to [retrieve the media URL](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#retrieve-media-url) for download. |
| `document.sha256` | *String* | Base64-encoded SHA-256 hash of the transcript document. Use it to verify the downloaded file's integrity. |
| `document.mime_type` | *String* | MIME type of the transcript document. Currently always `application/json`. |
| `document.url` | *String* | A short-lived download URL. Issue an authenticated GET request with your access token to download the asset. |

**Usernames and business-scoped user IDs:** The `from_user_id` and `from_parent_user_id` fields identify the WhatsApp user by their BSUID; the `from` phone number may be omitted if the user has adopted a username. For details, see [Business-scoped user IDs](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-scoped-user-ids#business-scoped-user-id).

## Transcript language

You do not specify a transcription language in the request. The Calling API automatically detects the spoken language of the call, transcribes it, and reports the detected language in the `transcript.language` field of the transcript document (see [Transcript document format](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#transcript-document-format)). This detected language is an ISO 639 language code such as `en` and is determined from the audio — it is independent of the `announcement_language` you set for the spoken announcement.

The set of languages that can be automatically detected and transcribed is evolving constantly as the underlying speech models improve, so this list changes over time. The languages currently supported include:

Afrikaans, Albanian, Arabic, Azerbaijani, Bengali, Bulgarian, Burmese, Cebuano, Chinese, Croatian, Czech, Danish, Dutch, English, Finnish, French, German, Greek, Guarani, Gujarati, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Javanese, Kannada, Korean, Macedonian, Malay, Malayalam, Marathi, Norwegian, Persian, Polish, Portuguese, Punjabi, Romanian, Russian, Serbian, Sinhala, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog (Filipino), Tamil, Telugu, Thai, Turkish, Urdu, and Vietnamese.

If a call is spoken in a language that isn't currently supported, you still receive the `call_transcription_available` webhook, but the returned transcript may be empty.

## Transcript document format

The downloaded transcript is a JSON document with two top-level objects: `metadata` (information about the processed audio) and `transcript` (the transcribed content, including a flat `text` rendering, the detected `language`, an overall `confidence`, and time-stamped `segments` with word-level detail).

Each segment is attributed to the speaker who produced it and the channel it was spoken on — channel `0` is your business and channel `1` is the WhatsApp user — so speaker attribution stays accurate even when participants talk over each other. The full conversation is also available as a single string in `transcript.text`, with each segment prefixed by its speaker label, for example `[Business]` or `[Customer]`.

```
{  
  "metadata": {  
    "processed_at": "2026-06-18T20:16:47Z",  
    "audio": {  
      "duration": 21.76,  
      "sample_rate": 16000,  
      "channels": 2,  
      "audio_format": "stereo"  
    }  
  },  
  "transcript": {  
    "text": "[Business] Hello, how about you? [Customer] Hey, I'm good. How are you?",  
    "language": "en",  
    "duration": 21.76,  
    "confidence": 0.83,  
    "segments": [  
      {  
        "id": 1,  
        "speaker": "Business",  
        "channel": 0,  
        "start": 1.16,  
        "end": 2.44,  
        "text": "Hello, how about you?",  
        "confidence": 0.85,  
        "words": [  
          {  
            "word": "Hello,",  
            "start": 1.16,  
            "end": 1.64,  
            "confidence": 0.89,  
            "lang": "en"  
          },  
          {  
            "word": "how",  
            "start": 1.64,  
            "end": 1.8,  
            "confidence": 0.99,  
            "lang": "en"  
          },  
          {  
            "word": "about",  
            "start": 1.8,  
            "end": 2.04,  
            "confidence": 0.52,  
            "lang": "en"  
          },  
          {  
            "word": "you?",  
            "start": 2.04,  
            "end": 2.44,  
            "confidence": 0.99,  
            "lang": "en"  
          }  
        ]  
      },  
      {  
        "id": 2,  
        "speaker": "Customer",  
        "channel": 1,  
        "start": 3.66,  
        "end": 5.74,  
        "text": "Hey, I'm good. How are you?",  
        "confidence": 0.85,  
        "words": [  
          {  
            "word": "Hey,",  
            "start": 3.66,  
            "end": 4.46,  
            "confidence": 0.60,  
            "lang": "en"  
          },  
          {  
            "word": "I'm",  
            "start": 4.46,  
            "end": 4.7,  
            "confidence": 0.78,  
            "lang": "en"  
          },  
          {  
            "word": "good.",  
            "start": 4.7,  
            "end": 5.02,  
            "confidence": 0.71,  
            "lang": "en"  
          },  
          {  
            "word": "How",  
            "start": 5.02,  
            "end": 5.18,  
            "confidence": 0.99,  
            "lang": "en"  
          },  
          {  
            "word": "are",  
            "start": 5.18,  
            "end": 5.34,  
            "confidence": 0.99,  
            "lang": "en"  
          },  
          {  
            "word": "you?",  
            "start": 5.34,  
            "end": 5.74,  
            "confidence": 0.99,  
            "lang": "en"  
          }  
        ]  
      }  
    ]  
  }  
}
```

### `metadata` fields

| Field | Type | Description |
| --- | --- | --- |
| `processed_at` | *String* | ISO 8601 UTC timestamp of when transcription post-processing completed. |
| `audio.duration` | *Number* | Duration of the processed call audio, in seconds. |
| `audio.sample_rate` | *Integer* | Sample rate of the processed audio, in Hz. |
| `audio.channels` | *Integer* | Number of audio channels. A two-party call has two channels. |
| `audio.audio_format` | *String* | Format of the processed audio mix, for example `stereo`. |

### `transcript` fields

| Field | Type | Description |
| --- | --- | --- |
| `text` | *String* | The full conversation as a single string. Each segment is prefixed with its speaker label in brackets, for example `[Business]` or `[Customer]`. |
| `language` | *String* | The detected language of the call as an ISO 639 code, for example `en`. See [Transcript language](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#transcript-language). |
| `duration` | *Number* | Total duration of the transcribed audio, in seconds. |
| `confidence` | *Number* | Overall confidence score for the transcript, from `0` to `1`. |
| `segments` | *Array* | The ordered list of spoken segments. See [`segments` fields](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/sip#segments-fields). |

### `segments` fields

Each segment represents a continuous span of speech from one speaker.

| Field | Type | Description |
| --- | --- | --- |
| `id` | *Integer* | Sequential identifier for the segment within the transcript. |
| `speaker` | *String* | The speaker who produced the segment, either `Business` or `Customer`. |
| `channel` | *Integer* | The audio channel the segment was spoken on. Channel `0` is the business; channel `1` is the WhatsApp user. |
| `start` | *Number* | The start time of the segment, in seconds from the beginning of the call audio. |
| `end` | *Number* | The end time of the segment, in seconds from the beginning of the call audio. |
| `text` | *String* | The full transcribed text of the segment. |
| `confidence` | *Number* | A confidence score from `0` to `1` for the segment transcription. |
| `words` | *Array* | Word-level breakdown of the segment. Each entry contains `word` (*String*), `start` (*Number*), `end` (*Number*), `confidence` (*Number*), and `lang` (*String*, the ISO 639 code of the detected language for that word), where `start` and `end` are in seconds from the beginning of the call audio. |

## Download the transcript

Transcripts use the same download flow as [media messages](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#retrieve-media-url):

* The `url` returned in the webhook is valid for 5 minutes. Issue an authenticated GET request with your access token to download the file directly.
* If the URL has expired, use the [Media API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media) to [retrieve a fresh media URL](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#retrieve-media-url) with the `document.id`.

## Retention

Transcripts remain available for download for **7 days** after the `call_transcription_available` webhook is delivered. After that period, the media ID expires and the underlying file is deleted. Download and persist the transcript to your own storage within the retention window if you need to keep it long-term.

## Errors

The following request errors are specific to call transcription. See [Cloud API error codes](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes/) for the full list.

| Scenario | Description |
| --- | --- |
| Missing `purpose` | `transcription.status` is `ENABLED` but `purpose` is omitted or empty. |
| `purpose` too long | `purpose` exceeds 250 characters. |
| Invalid `announcement_language` | `announcement_language` is not a supported locale code. |
| Invalid `status` | `status` is not one of `ENABLED` or `DISABLED`. |
