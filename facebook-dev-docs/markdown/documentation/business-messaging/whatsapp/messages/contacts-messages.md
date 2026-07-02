---
title: "Audio messages"
source_url: https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages
---

# Audio messages

Updated: Jun 28, 2026

On March 17th, 2026, voice messages will start receiving a [“played” status webhook](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/reference/messages/status) the first time a WhatsApp user plays a voice message shared by the business.

You can use Cloud API to send voice messages and basic audio messages.

## Voice messages

A voice message (sometimes referred to as a voice note, voice memo, or audio) is a recording of one or more persons speaking, and can include background sounds like music. Voice messages include features like automatic download, profile picture, and voice icon. These features are not available with basic audio messages. If the user sets voice message transcripts to **Automatic**, the message includes a text transcription.

![WhatsApp voice message with play icon, waveform graphic, profile image with voice icon, and transcribed text](https://scontent.fdel1-6.fna.fbcdn.net/v/t39.2365-6/562379210_2249057198900177_5743647093897895635_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=hVZXTVQKvrgQ7kNvwGuqrQz&_nc_oc=AdrHtHoiRZAuWeSaUUibOZ7b9tlQfl0mRoucznPWqLP1n4wurQvjQ5uZhMEIKyvWkNKu1-Ggt0eXzh0knGvIjlRw&_nc_zt=14&_nc_ht=scontent.fdel1-6.fna&_nc_gid=EmZmSs8ZedySKAcUJAGrXQ&_nc_ss=7b2a8&oh=00_AQAn1k7fx00KuBBx39osaIU8VGip5suwcaVZDBA__NpQzw&oe=6A603E0C)

* Voice messages require .ogg files encoded with the **OPUS** codec. If you send a different file type or a file encoded with a different codec, voice message transcription will fail.
* The play icon will only appear if the file is 512KB or smaller, otherwise it will be replaced with a download icon (a downward facing arrow).
* The message displays your business’s profile image with a microphone icon.
* The text transcription appears if the user has enabled **Automatic** [voice message transcripts⁠](https://faq.whatsapp.com/241617298315321/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR516SvNTWneWJ1BRyPN_AUwkutE4mEG3HfgWLNwp2vKQNk5dxI0lA9ItJirSg_aem_0fRiwIWcHro6u8toSKri-Q). If the user has set this to **Manual**, the text “Transcribe” will appear instead, which will display the transcribed text once tapped. If the user has set voice message transcripts to **Never**, no text will appear.

## Basic audio messages

Basic audio messages display a download icon and a music icon. When the WhatsApp user taps the play icon, the user manually downloads the audio message for the WhatsApp client to load and then play the audio file.

![WhatsApp basic audio message showing a download icon, playback bar, and music icon](https://scontent.fdel1-7.fna.fbcdn.net/v/t39.2365-6/561815849_2827972817396551_127160148973074084_n.png?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=wRMN06M_OL8Q7kNvwH2PUBR&_nc_oc=AdqRAEUFlHOBYuBc-gSnuAP9Fp12Bn5uBop-gMLR-fSzelFshNeGhcxD0gdIXbA8JNPakgKVHU6eFhZtzM-c0neQ&_nc_zt=14&_nc_ht=scontent.fdel1-7.fna&_nc_gid=EmZmSs8ZedySKAcUJAGrXQ&_nc_ss=7b2a8&oh=00_AQDvU9s3eI1eKX9FuBdXX_nu1r0bsj65gpSMPZwhQFSFjQ&oe=6A604360)

* The download icon will be replaced with a play icon if the WhatsApp user has enabled [auto-download⁠](https://faq.whatsapp.com/366146522333492/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4iDLLTgyr5fQ_inwTW1L6WI2WwFinuX53IxUrSRQ7TC4KiF8UeJT7Uf_XeEQ_aem_oFK5oh6aNDDa31OT7fq3QQ) for audio media and conditions for auto-download are met (for example, connected to wi-fi).
* If you send a .ogg file encoded with the OPUS codec as a basic audio message, the music icon will be replaced with a microphone icon. In addition, if the user has enabled **Automatic** or **Manual** [voice message transcripts⁠](https://faq.whatsapp.com/241617298315321/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdDFTU2F3MEdKRXZxdWxzRXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5hUUCuVfMrSpK1nFWwfgmhEX4J170f66mpbcRuH2F1v9AX32Sq6E3-nMvJdw_aem_zQZRjbb3Ajl9qFef31D3HA), a text transcription or the text “Transcribe” will accompany the message.

## Request syntax

Use the [Messages API](https://developers.facebook.com/documentation/business-messaging/whatsapp/reference/whatsapp-business-phone-number/message-api#post-version-phone-number-id-messages) to send an audio message to a WhatsApp user.

```
```
curl 'https://graph.facebook.com/<API_VERSION>/<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>/messages' \  
-H 'Content-Type: application/json' \  
-H 'Authorization: Bearer <ACCESS_TOKEN>' \  
-d '  
{  
  "messaging_product": "whatsapp",  
  "recipient_type": "individual",  
  "to": "<WHATSAPP_USER_PHONE_NUMBER>",  
  "type": "audio",  
  "audio": {  
    "id": "<MEDIA_ID>", <!-- Only if using uploaded media -->  
    "link": "<MEDIA_URL>", <!-- Only if using hosted media (not recommended) -->  
    "voice": <IS_VOICE?> <!-- Only include if sending voice message -->  
  }  
}'
```
```

## Request parameters

| Placeholder | Description | Example Value |
| --- | --- | --- |
| `<ACCESS_TOKEN>`  *String* | **Required.**  [System token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) or [business token](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#business-integration-system-user-access-tokens). | `EAAA...` |
| `<API_VERSION>`  *String* | **Optional.**  Graph API version. | v25.0 |
| `<IS_VOICE?>`  *Boolean* | **Optional.**  Set to `true` if sending a [voice message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages#voice-messages). Voice messages must be Ogg files encoded with the **OPUS** codec.  To send a [basic audio message](https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/contacts-messages#basic-audio-messages), set to `false` or omit entirely. | `true` |
| `<MEDIA_ID>`  *String* | **Required if using uploaded media, otherwise omit.**  ID of the [uploaded media asset](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media). | `1013859600285441` |
| `<MEDIA_URL>`  *String* | **Required if using hosted media, otherwise omit.**  URL of the media asset hosted on your public server. For better performance, we recommend using `id` and an [uploaded media asset ID](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/media#upload-media) instead. | `https://www.luckyshrub.com/media/ringtones/wind-chime.mp3` |
| `<WHATSAPP_BUSINESS_PHONE_NUMBER_ID>`  *String* | **Required.**  WhatsApp business phone number ID. | `106540352242922` |
| `<WHATSAPP_USER_PHONE_NUMBER>`  *String* | **Required.**  WhatsApp user phone number. | `+16505551234` |

## Supported audio formats

| Audio Type | Extension | MIME Type | Max Size |
| --- | --- | --- | --- |
| AAC | .aac | audio/aac | 16 MB |
| AMR | .amr | audio/amr | 16 MB |
| MP3 | .mp3 | audio/mpeg | 16 MB |
| MP4 Audio | .m4a | audio/mp4 | 16 MB |
| OGG Audio | .ogg | audio/ogg (OPUS codecs only; base audio/ogg not supported; mono input only) | 16 MB |

The most common errors associated with audio files are mismatched MIME types (MIME type doesn’t match the file type indicated by the file name) and invalid encoding for Ogg files (OPUS codec only). If you encounter an error when sending a media file, verify that your audio file’s MIME type matches its extension and is a supported type. For Ogg files, use the OPUS codec for encoding.

## Example request

Example request to send an image message using an uploaded media ID and a caption.

```
curl 'https://graph.facebook.com/v25.0/106540352242922/messages' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer EAAJB...' \
-d '
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "audio",
  "audio": {
    "id" : "1013859600285441",
    "voice": true
  }
}'
```

## Example response

```
```
{  
  "messaging_product": "whatsapp",  
  "contacts": [  
    {  
      "input": "+16505551234",  
      "wa_id": "16505551234"  
    }  
  ],  
  "messages": [  
    {  
      "id": "wamid.HBgLMTY0NjcwNDM1OTUVAgARGBI1RjQyNUE3NEYxMzAzMzQ5MkEA"  
    }  
  ]  
}
```
```
