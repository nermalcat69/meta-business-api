---
title: "Support for Live Video API for Facebook"
source_url: https://developers.facebook.com/documentation/live-video-api/reference
---

# Support for Live Video API for Facebook

Updated: May 21, 2024

## FAQ

**What is streaming software? Is this something that Facebook provides?**

Streaming software, or RTMP encoding software, takes your RTMP stream URL and key and sends them to Facebook. We do not provide the streaming software. Many live streams can use OBS ([Open Broadcasting Software⁠](https://obsproject.com/)) or [Player.me⁠](https://player.me/), both of which offer free versions.

**Do you recommend any third party developers/solutions partners to help me get started?**

Yes! Please check out our [list of media solutions partners](https://developers.facebook.com/docs/mediasolutions/partners).

**How long does it take to get set up?**

You can begin using the Live API immediately. However, if you want to create a full production quality stream with multiple cameras and graphics, it can take 1-2 weeks or longer, depending on App Review.

**How long does it take for the Live stream to populate on Facebook? How do I know when it's up?**

There's about a 4-5 second delay from when you go live to when your video shows on Facebook.
You'll know it's up when you see the video playing on your test (or public) page.

**I'm having trouble getting my live stream set up. Who can I reach out to for help?**

If you are having issues with your live streams, please refer to our [guides](https://developers.facebook.com/documentation/live-video-api) to make sure that you are using our API correctly. We also recommend reviewing our [video specifications](https://developers.facebook.com/documentation/live-video-api/reference) to ensure that your settings are best suited for a quality live stream. If you believe you have run into a bug, you can send it directly to our [Bug Tool](https://developers.facebook.com/bugs) and an engineer will get back to you.

**Can I go live to my page from the API and from the Facebook app simultaneously? How does this affect notifications?**

Yes you can! The second stream will likely get fewer inferred notifications than the first. Please refer to our [Best Practices](https://developers.facebook.com/documentation/live-video-api/best-practices) documentation for more information on how notifications work.

**If I want to stream to two different pages, do I need two separate encoders?**

Not necessarily. If you want to stream to two (or more) different pages, there are encoders and APIs available that can make this possible, such as Wowza and Streamshark. While it is possible to stream to different pages from one encoder, we recommend instead streaming to one page and sharing to other pages so the comments, reactions, and viewer counts are consolidated.

**How do I change the aspect ratio for streaming?**

Our default aspect ratio is 16x9, though we infer the aspect ratio from the stream. For complete specifications, see our [reference](https://developers.facebook.com/documentation/live-video-api/reference).

**Is it possible to embed a live video? How?**

You can embed live videos using the [`embeddable` parameter through the Live Video API](https://developers.facebook.com/docs/graph-api/reference/live-video#Updating).

Send a `POST /{live_video_id}` request, and set the `embeddable` parameter to `true`. Use a Page or User access token with the same permissions as are required when creating a live video.

Select language

cURLAndroid SDKObjective-CJava SDKPHP SDK

---

```
curl -i -X POST \  
 "https://graph.facebook.com/{your-live-video-id}  
   ?embeddable=true&access_token={your-access-token}"
```

To get the embedded HTML, send a `GET /{live_video_id}?fields=embed_html` request. Use a Page or User access token with the same permissions as are required when creating a live video.

Select language

cURLAndroid SDKObjective-CJava SDKPHP SDK

---

```
curl -i -X GET \  
 "https://graph.facebook.com/{your-live_video_id}  
   ?fields=embed_html  
   &access_token={your-access-token}"
```

#### Sample Response

```
{  
  "embed_html": "<iframe src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyourpage%2Fvideos%2F{your-page-id}%2F&width=0\" width=\"0\" height=\"0\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allowFullScreen=\"true\"></iframe>",  
  "id": "{your-live-video-id}"  
}
```

**I am trying to view my live video on mobile web, but it's not showing up. Is this a bug?**

No, this is the expected behavior. We do not currently support watching live videos on mobile web until they are VODs (Videos On Demand). However, if you want to watch a live video on mobile web that has been embedded into another site, you will be redirected to the Facebook app to watch.

**My video is gone. What happened to it?**

There are a few reasons why this may have happened. Here are a few of the most common reasons:

* If you have music playing in the background of your live video, your video may be taken down for copyright violation. This may happen either during the live video or afterwards, in VOD replay.
* You, or another author of your page, may have deleted the live video. If a live video has been manually deleted, it cannot be recovered.
* Your video may have been flagged automatically for IP violation. If this occurs, Facebook will send you an email that contains a link for you to review the takedown and resubmit the video for review by our Policy team.

**My live video is still showing up as "is live" even though it ended a while ago. What happened?**

This occurs when the broadcast does not start sealing or processing after signaling the end of the live video. Be sure you have sent a `POST` request with the `end_live_video` parameter. If this occurs again, please file a bug in our [bug tool](https://developers.facebook.com/bugs), and be sure to include your video ID.

**Where can I find out what this error code means?**

Check our [list of error codes](https://developers.facebook.com/documentation/live-video-api/reference#error-codes) to best understand your issue.

**The audio on my Facebook Live video has begun to either skip and chatter or drop out completely. What's going on?**

Audio distortion can occur when Facebook receives a video stream with distorted audio or after we've received the frames but before we re-encode for broadcast. A possible reason for this type of error is that the bitrate used is higher than what the connection between your broadcasting endpoint and Facebook servers can sustain. If that happens, or if there's a packet lost, some of the video or audio track won't be received correctly, and this can cause audio distortion.

**Why are the video and audio out of sync on my live video?**

Audio/Visual sync issues may occur when a live broadcast is delivered with limited bandwidth to the client, or the client does not have the bandwidth to view it live. Additionally, if the stream received by the Facebook server is out of sync, then the live video will also be out of sync. Be sure to check recording and encoding hardware for potential places in which the audio could be misaligned with the video.

**I'm trying to stream video without audio. Why doesn't it work?**

The Live Video API requires audio. If you attempt to stream video only, the stream ends.

**What happens if my live feed drops?**

Your live feed may drop due to an encoder failure or poor network connectivity. If this happens, you have 2-3 minutes to reconnect to the original stream URL that you generated for your live post. Otherwise, you will have to generate a new stream key and URL to continue your live stream.

**Can I geo-gate my live videos?**

Yes, you can geo-gate (restrict who can see your video depending on the viewer's location). See [Audience Targeting](https://developers.facebook.com/documentation/live-video-api/audience-targeting#audience-targeting) to learn how.

**Is there a way to go Live worldwide and only block a few countries?**

Yes, you can! See [Audience Targeting](https://developers.facebook.com/documentation/live-video-api/audience-targeting#audience-targeting) to learn how.

**My live video got removed due to a copyright violation. Can this be restored?**

Yes, videos taken down for [copyright violation](https://developers.facebook.com/documentation/live-video-api/guides/copyrighted-content) can be restored. You should receive a notification that gives you the option to **restore** the video. However, if you do not take this action when you receive the notification, the video can no longer be restored.

**Can live videos be boosted?**

No. Unfortunately, live videos can't be boosted at this time.

**Can I add closed captions to my live video?**

Currently there is no endpoint for creating closed captions. However, you can add closed captions to LiveVideo broadcasts after they have ended, or you can add closed captions to your live video stream as it streams to our servers using the CEA-608 closed captions standard.

To add captions to a LiveVideo that has ended (i.e, has a status of VOD) refer to our ["How do I add captions to my Page's video?"⁠](https://www.facebook.com/help/509746615868430) help topic. To add captions using the CEA-608 standard refer to our [Closed Captions guide⁠](https://scontent.xx.fbcdn.net/v/t39.8562-6/66086585_1127049914146262_5362522782250827776_n.pdf?_nc_cat=100&_nc_oc=AQm3L0t0m2ocSI-XCKkQ9LNn5CAJkBBCycb08K7pV4vrciaiuoXIgxNhOLBUmUZGpszaWk0amp0j4gTz4h0NOThp&_nc_ht=scontent.xx&oh=d84156fcd98df14aa421ac23e79774c1&oe=5DBE965C).

**Can I add third-party ads to my live stream?**

It is against Facebook's live video policy to include third-party ads in live streams. For example, please do not include bumpers, pre-roll, mid-roll, or post-roll.

**Can I add pre-recorded video to a live post?**

We encourage all live broadcasts to exclusively contain live content so as to preserve the integrity of the viewer's experience. However, there are unique cases in which cutting to a pre-recorded clip makes sense, similar to how a news show might show previously recorded content on live TV.

**Is it possible to show the same live video on multiple pages at one time?**

Yes, refer to our [Crossposting](https://developers.facebook.com/documentation/live-video-api/guides/crossposting) guide and [How do I crosspost another Page's video?⁠](https://www.facebook.com/help/1306792669361145) Help Center topic to learn how. Comments and reactions are shown only in the original Page.

**Why am I not showing up on the live map?**

To appear on the Live Map, you must set your video's location by using the [`place` parameter](https://developers.facebook.com/docs/graph-api/reference/live-video#Updating) in a `POST /{live_video_id}` request.

**How do I reset a persistent key?**

To reset a persistent key, go to [www.facebook.com/live/create⁠](https://www.facebook.com/live/create), click **Create a Live Stream**, check the **Use a persistent stream key** checkbox, then click the **Reset** button.

![Image](https://scontent.fdel27-5.fna.fbcdn.net/v/t39.2365-6/672200193_1484143246777658_5997726293275959439_n.png?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e280be&_nc_ohc=D1eAIRtVHpMQ7kNvwHcSe6d&_nc_oc=AdpzGqqSn0HqGyjv4MS0FN5pl3U9oYlL3PrCsln2Pu2D7fs8bYC_m-uJ2mjrUH9p5cVnHZ3CWpaoHHVzdxIh5M86&_nc_zt=14&_nc_ht=scontent.fdel27-5.fna&_nc_gid=fRXafWTod4sxMiwQFtu43w&_nc_ss=7b289&oh=00_AQA2Gtpt9ufVEoE1klKF2YddHtsPKGUkZxmQ4DTgKb24nw&oe=6A608845)

## Reporting Bugs

If you believe you may have found a bug in the Live API, please file a bug report in our [bug tool](https://developers.facebook.com/bugs) and an engineer will take a look at it shortly. You can also search for existing bugs by API error codes, SDK methods, and more.

[Report a Bug](http://developers.facebook.com/bugs)
