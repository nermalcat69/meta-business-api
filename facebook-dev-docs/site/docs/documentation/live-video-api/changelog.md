---
title: "Reference"
source_url: https://developers.facebook.com/documentation/live-video-api/changelog
---

# Reference

Updated: Apr 16, 2026

On June 10th, 2024, Meta is launching new requirements that must meet before an account can go live on Facebook. The new requirements are as follows:

* The Facebook account must be at least 60 days old
* The Facebook Page or [professional mode profile⁠](https://www.facebook.com/business/help/2680340558863560) must have at least 100 followers

Visit our

Help Center

to learn more about this change.

## Recommended Settings

To ensure a successful broadcast, live video must:

* Include both audio and video data
* Not exceed 8 hours
* Utilize recommended settings as specified below (example: must be H264/AAC)
* Not change settings mid-broadcast

Failure to meet these constraints can lead to:

* Unexpected termination of stream
* Lower quality for viewers
* Unexpected behavior

### Video Settings

* **Key Frame Size** — Recommended 2 seconds. Do not exceed 4 seconds.
* **Resolution and Bitrate —**
  * **1080p @ 60 FPS**
    * Resolution: 1920x1080
    * Video Bitrate Range: 4,500-9,000 Kbps
  * **1080p @ 30FPS**
    * Resolution: 1920x1080
    * Video Bitrate Range: 3,000-6,000 Kbps
  * **720p @ 60 FPS**
    * Resolution: 1280x720
    * Video Bitrate Range: 2,250-6,000 Kbps
  * **720p @ 30 FPS**
    * Resolution: 1280x720
    * Video Bitrate Range: 1,500-4,000 Kbps
  * **480p @ 30 FPS**
    * Resolution: 854x480
    * Video Bitrate Range: 600-2,000 Kbps
  * **360p**
    * Resolution: 640x360
    * Video Bitrate Range: 400-1,000 Kbps
* **Protocol** — RTMPS Streaming
* **Pixel Aspect Ratio** — Aim for 16:9; if you are too far from this ratio we may not be able support your stream
* **Video Codec** —
  * H.264, Level 4.1 for up to 1080p 30 FPS
  * H.264, Level 4.2 for 1080p 60 FPS

### Audio Settings

* **Audio Codec** — AAC low complexity
* **Sample Rate** — 44.1kHz or 48kHz
* **Audio Bitrate** — 128 kbps (preferred) to 256 kbps (do not exceed)
* **Channel Layout** — Stereo

## Endpoints

### LiveVideo

| Endpoint | Description |
| --- | --- |
| [`DELETE /{live_video_id}`](https://developers.facebook.com/docs/graph-api/reference/live-video#Deleting) | Delete a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{event-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/event/live_videos#Reading) | Get a collection of [LiveVideos](https://developers.facebook.com/docs/graph-api/reference/live-video) on an [Event](https://developers.facebook.com/docs/graph-api/reference/event). |
| [`GET /{group-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/group/live_videos#Reading) | Get a collection of [LiveVideos](https://developers.facebook.com/docs/graph-api/reference/live-video) on a [Group](https://developers.facebook.com/docs/graph-api/reference/group). |
| [`GET /{live-video-id}`](https://developers.facebook.com/docs/graph-api/reference/live-video#Reading) | Get fields and edges on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{live-video-id}/comments`](https://developers.facebook.com/docs/graph-api/reference/live-video/comments#Reading) | Get a collection of [Comments](https://developers.facebook.com/docs/graph-api/reference/comment) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{live-video-id}/crosspost_shared_pages`](https://developers.facebook.com/docs/graph-api/reference/live-video/crosspost_shared_pages#Reading) | Get a collection of [Pages](https://developers.facebook.com/docs/graph-api/reference/page) able to share a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{live-video-id}/likes`](https://developers.facebook.com/docs/graph-api/reference/live-video/likes#Reading) | Get a collection of [Profiles](https://developers.facebook.com/docs/graph-api/reference/profile) that liked a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{live-video-id}/polls`](https://developers.facebook.com/docs/graph-api/reference/live-video/polls#Reading) | Get a collection of [VideoPolls](https://developers.facebook.com/docs/graph-api/reference/video-poll) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{live-video-id}/reactions`](https://developers.facebook.com/docs/graph-api/reference/live-video/reactions#Reading) | Get a collection of [Profiles](https://developers.facebook.com/docs/graph-api/reference/profile) that have reacted to a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{page-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/page/live_videos#Reading) | Get a collection of [LiveVideos](https://developers.facebook.com/docs/graph-api/reference/live-video) on a [Page](https://developers.facebook.com/docs/graph-api/reference/page). |
| [`GET /{user-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/user/live_videos#Reading) | Get a collection of [LiveVideos](https://developers.facebook.com/docs/graph-api/reference/live-video) on a [User](https://developers.facebook.com/docs/graph-api/reference/user). |
| [`POST /{event-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/event/live_videos#Creating) | Create a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video) on an [Event](https://developers.facebook.com/docs/graph-api/reference/event). |
| [`POST /{group-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/group/live_videos#Creating) | Create a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video) on a [Group](https://developers.facebook.com/docs/graph-api/reference/group). |
| [`POST /{live_video_id}`](https://developers.facebook.com/docs/graph-api/reference/live-video#Updating) | Update fields on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`POST /{live_video_id}/input_streams`](https://developers.facebook.com/docs/graph-api/reference/live-video/input_streams#Creating) | Create a [LiveVideoInputStream](https://developers.facebook.com/docs/graph-api/reference/live-video-input-stream) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`POST /{live_video_id}/polls`](https://developers.facebook.com/docs/graph-api/reference/live-video/polls#Creating) | Create a [VideoPoll](https://developers.facebook.com/docs/graph-api/reference/video-poll) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`POST /{page-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/page/live_videos#Creating) | Create a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video) on a [Page](https://developers.facebook.com/docs/graph-api/reference/page). |
| [`POST /{user-id}/live_videos`](https://developers.facebook.com/docs/graph-api/reference/user/live_videos#Creating) | Create a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video) on a [User](https://developers.facebook.com/docs/graph-api/reference/user). |

### LiveVideoInputStream

| Endpoint | Description |
| --- | --- |
| [`GET /{live-video-input-stream-id}`](https://developers.facebook.com/docs/graph-api/reference/live-video-input-stream#Reading) | Get fields and edges on a [LiveVideoInputStream](https://developers.facebook.com/docs/graph-api/reference/live-video-input-stream). |
| [`POST /{live_video_id}/input_streams`](https://developers.facebook.com/docs/graph-api/reference/live-video/input_streams#Creating) | Create a [LiveVideoInputStream](https://developers.facebook.com/docs/graph-api/reference/live-video-input-stream) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |

### Polls

| Endpoint | Description |
| --- | --- |
| [`GET /{live-video-id}/polls`](https://developers.facebook.com/docs/graph-api/reference/live-video/polls#Reading) | Get a collection of [VideoPolls](https://developers.facebook.com/docs/graph-api/reference/video-poll) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`GET /{video-poll-id}`](https://developers.facebook.com/docs/graph-api/reference/video-poll#Reading) | Get fields and edges on a [VideoPoll](https://developers.facebook.com/docs/graph-api/reference/video-poll). |
| [`POST /{live_video_id}/polls`](https://developers.facebook.com/docs/graph-api/reference/live-video/polls#Creating) | Create a [VideoPoll](https://developers.facebook.com/docs/graph-api/reference/video-poll) on a [LiveVideo](https://developers.facebook.com/docs/graph-api/reference/live-video). |
| [`POST /{video_poll_id}`](https://developers.facebook.com/docs/graph-api/reference/video-poll#Updating) | Update fields on a [VideoPoll](https://developers.facebook.com/docs/graph-api/reference/video-poll). |

## Error Codes

Error messages will be sent via RTMP then will persist through to the Graph API. You can use the broadcast/video ID and query for the errors in the [Graph Explorer tool](https://developers.facebook.com/tools/explorer/) via a `GET` request. Errors returned will contain the error code, description, and a timestamp.

| error\_subcode | Error Summary | Description |
| --- | --- | --- |
| `COPYRIGHT__LIVE_COPYRIGHT_VIOLATION` | Live Copyright Violation | Your live video has been stopped because it may contain audio or visual content that belongs to a different Page. |
| `VIDEO__CREATE_FAILED` | Upload Problem | There was a problem and your video was not uploaded. Please try again. |
| `LIVE_VIDEO__DELETE_FAILED` | Live Video Not Deleted | There was a problem and we were not able to delete your live video. Please try again. |
| `LIVE_VIDEO__EDIT_API_NOT_ALLOWED` | Editing Via Video API Is Not Allowed While Live | Editing a live video using the Video Edit API is not allowed. Use the live video ID. |
| `LIVE_VIDEO__LIVE_STREAM_ERROR` | Generic Stream | There was an error during the stream |
| `LIVE_VIDEO__NOT_EXIST` | Live Video Does Not Exist | The live video you are trying to access does not exist in the system any more. |
| `LIVE_VIDEO__PRIVACY_REQUIRED` | Privacy Setting Required | You need to set a privacy before going live. |

### Permission error codes

| Code | Subcode | Message | Type | Mitigation messaging |
| --- | --- | --- | --- | --- |
| 200 | 1363120 | Permissions error | OAuthException | You're not eligible to go live  Your profile needs to be at least 60 days old before you can go live on Facebook. Learn more at https://www.facebook.com/business/help/167417030499767?id=1123223941353904 |
| 200 | 1363144 | Permissions error | OAuthException | You're not eligible to go live  You need at least 100 followers before you can go live from your profile. Learn more at https://www.facebook.com/business/help/167417030499767?id=1123223941353904 |

## Get Support

Visit
[Meta for Developers Support](https://developers.facebook.com/support/)
to get help with a variety of issues, report a bug, view bug reports, and more.
