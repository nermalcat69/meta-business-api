---
title: "Upload Media for Instagram Messaging"
source_url: https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/conversation-routing
---

# Upload Media for Instagram Messaging

Updated: Jun 30, 2026

This document shows you how to upload media to the Meta servers using the Attachment Upload API. This media can then be used in Instagram messages.

**Note:** You can upload and send an attachment in a single API call.

## Before you start

You need the following:

* The **Page ID** for the Facebook Page linked to the Instagram account your business uses to own the media to be uploaded
* A **Page access token** requested by a person who can perform the `MESSAGING` task on the Page
* Approval from the person uploading the media via Business Login for Instagram or Facebook Login for the following permissions:
  * `instagram_basic`
  * `instagram_manage_comments`
  * `instagram_manage_messages`
  * `pages_messaging`
* Your app will need **Advanced Access** for the required permissions to upload media for Pages you do not own or administer
* Either the **URL** for the media, if uploading from a URL, or the **file path** to the media, if uploading from your server
  * Media types can be `image` (which include GIFs), `video`, `audio`, or `file`
  * Media formats can be:

| Media Type | Supported Format | Supported Size Maximum |
| --- | --- | --- |
| Audio | acc, m4a, wav, mp4 | 25MB |
| Image | png, jpeg, gif | 8MB |
| Video | mp4, ogg, avi, mov, webm | 25MB |
| File | pdf | 25MB |

### Limitations

* If your app only has Standard Access to any of the required permissions, your app can only upload media for Pages you own or administer.
* These permissions allow your app to upload media but not to send messages.
* Media file names containing non-ASCII characters (such as Chinese characters) are not supported for attachment uploads.

## Upload media

You can upload media from a URL or from a server.

### From a URL

To upload media from a URL, send a `POST` request to the `/<PAGE_ID>/message_attachments` endpoint with the platform set as Instagram and the message attachment type set to the type of media you are uploading, `audio`, `image`, `video` or `file`. Add the URL and `is_reusable` in the payload. Set `is_reusable` to true so that the media can be used in multiple messages.

**Note:** All keys within the `message` object, such as `attachment`, `type`, and `payload` are strings.

#### Sample request

*Formatted for readability.*

```
curl "https://graph.facebook.com/<LATEST-API-VERSION>/<PAGE_ID>/message_attachments"
    -H "Content-Type: application/json"
    -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>"
    -d '{
          "platform":"instagram",
          "message":
            {
              "attachment":
                {
                  "type": "<MEDIA_TYPE>",
                  "payload":
                    {
                      "url": "<MEDIA_URL>",
                      "is_reusable": "true",
                    },
                }
            }
       }'
```

### From a server

To upload media from a server, send a `POST` request to the `/<PAGE_ID>/message_attachments` endpoint with the message attachment payload containing the URL and the platform set to `instagram`. If you want to use the media in multiple messages, include the `is_reusable` set to true in the payload.

#### Sample request

*Formatted for readability.*

```
curl "https://graph.facebook.com/<LATEST-API-VERSION>/<PAGE_ID>/message_attachments"
    -H "Content-Type: application/json"
    -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>"
    -d '{
          "platform":"instagram",
          "filedata":"<FILE_PATH>;type=<PATH_TYPE>",
          "message":
            {
              "attachment":
                {
                  "type": "<MEDIA_TYPE>",
                  "is_reusable": "true",
                }
            }
       }'
```

### Sample response

Upon success, the API returns an attachment ID. You can now include this ID in your messages.

```
```
{  
    "attachment_id": "<ATTACHMENT_ID>"  
}
```
```

## Send the media

Now that you have uploaded media, you can send it in a message.

To send a message that contains the media you uploaded, send a `POST` request to the `/<PAGE_ID>/messages` endpoint with the `recipient` parameter containing the Instagram-scoped ID (IGSID) and the `message` parameter containing an `attachment` object with the `type` set to `MEDIA_SHARE` and `payload.id` set to the attachment ID.

Your business must own the media to be used in the message.

#### Sample request

*Formatted for readability.*

```
curl "https://graph.facebook.com/<LATEST-API-VERSION>/<PAGE_ID>/messages"
    -H "Content-Type: application/json"
    -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>"
    -d '{
          "recipient":
            {
              "id":"<IGSID>"
            },
          "message":
            {
              "attachment":
                {
                  "type": "MEDIA_SHARE",
                  "payload":
                    {
                      "attachment_id":"<ATTACHMENT_ID>"
                    }
                }
            }
       }'
```

#### Sample API response

Upon success, the API returns a JSON response with the recipient’s ID and the message’s ID.

```
```
{  
  "recipient_id": "<IGSID>",  
  "message_id": "<MESSAGE_ID>"  
}
```
```

## Upload and send

You can upload media and send it in a single API request.

### From a URL

To upload and send media in one request, send a `POST` request to the `/<PAGE_ID>/messages` endpoint with the `recipient` parameter containing the Instagram-scoped ID (IGSID) and the `message` parameter containing an `attachment` object with the `type` set to `audio`, `image`, `video` or `file` and `payload` containing the URL and `is_reusable` set to true.

#### Sample request

*Formatted for readability.*

```
curl "https://graph.facebook.com/<LATEST-API-VERSION>/<PAGE_ID>/messages"
    -H "Content-Type: application/json"
    -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>"
    -d '{
          "recipient":
            {
              "id":"<IGSID>"
            },
          "message":
            {
              "attachment":
                {
                  "type":"<MEDIA_TYPE>",
                  "payload":
                    {
                      "url":"<URL_TO_MEDIA>"
                    },
                  "is_reusable": "true",
                }
            }
       }'
```

### From a server

To upload and send an image, audio, file, or video from your server, send a `POST` request to the `/<PAGE_ID>/messages` endpoint with the `recipient` parameter containing the Instagram-scoped ID (IGSID) and the `message` parameter containing an `attachment` object with the `type` set to `AUDIO`, `IMAGE`, `VIDEO` or `FILE` and `filedata` parameter the file’s location and type. The format for `filedata` values looks like `@/path_on_my_server/video.mp4;type=video/mp4`.

#### Sample request

*Formatted for readability.*

```
curl "https://graph.facebook.com/<LATEST-API-VERSION>/<PAGE_ID>/messages"
    -H "Content-Type: application/json"
    -H "Authorization: Bearer <PAGE_ACCESS_TOKEN>"
    -d '{
          "recipient":
            {
              "id":"<IGSID>"
            },
          "filedata":"<FILE_PATH>;type=<PATH_TYPE>"
          "message":{
            "attachment":
              {
                "type":"<MEDIA_TYPE>",
                "is_reusable": "true",
              }
          }
       }'
```

### Sample API response

Upon success, the API returns a JSON response with the recipient ID, message ID, and attachment ID.

```
```
{  
  "recipient_id": "<IGSID>",  
  "message_id": "<MESSAGE_ID>",  
  "attachment_id": "<ATTACHMENT_ID>"  
}
```
```
